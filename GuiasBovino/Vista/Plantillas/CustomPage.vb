Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services

Public MustInherit Class CustomPage
    Inherits System.Web.UI.Page

    Private _literales As Hashtable
    Private _literalesPage As Hashtable
    Private _selectedExploitationID As String



    Protected Overridable Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim position As Integer = Me.Request.Path.LastIndexOf("/"c)
        Dim currentPageName As String = Me.Request.Path.Substring(position + 1)

        ' versión de la aplicación para evitar la caché
        If Session("version") Is Nothing Then
            Dim version = CLng(DateTime.Now.Subtract(New DateTime(1970, 1, 1)).TotalMilliseconds)
            'Dim version As String = 1
            Session.Add("version", version)
        End If

        If Session("devQueryString") IsNot Nothing Then
            SessionNekagip.devMode = Session("devQueryString")
        Else
            SessionNekagip.devMode = Nothing
        End If

        ' Cargar literales
        If Not IsPostBack Then
            _literales = Nothing
        End If
        '******CONTROLAMOS SI VIENE DE NEKALAN******
        'Session.Add("nifQueryString", Request("nif"))
        'Session.Add("conusucodQueryString", Request("conusucod"))
        'Session.Add("idiomaQueryString", Request("idioma"))

        If Session("nifQueryString") IsNot Nothing Then
            'NOS ESTA LLEGANDO DATOS POR LA URL 
            Dim user As SessionNekagip.GAuser = New SessionNekagip.GAuser()
            'nif = "72500083N" '"78932487Y" "72437197P" 
            'nif = "P2000000F"
            'pass = "0000"
            user.nif = Session("nifQueryString")
            user.pass = ""
            SessionNekagip.GAuserId = user
            If Session("CONUSUCOD") IsNot Nothing Then
                'ESTAREMOS LLEGANDO  DESDE NEKALAN
                Session.Add("LANZADOR", "NEKALAN")

            Else
                'DESSDE OTRO SITIO
                Session.Add("LANZADOR", "OTRO")
            End If

        End If

        If currentPageName <> "login.aspx" Or (currentPageName = "login.aspx" And Not SessionNekagip.GAuserId Is Nothing) Then
            If SessionNekagip.GAuserId Is Nothing Then
                Response.Redirect("login.aspx", True)
                'Dim url As NEKAGIP.WSOutput.UrlRedirecGipuzkoataria = New NEKAGIP.WSController().UrlRedirecGipuzkoataria()
                'If url.resultado <> "" Then
                '    Response.Redirect(url.resultado, False)
                'End If
            Else
                auth(currentPageName)

                ' Si no hay una explotación seleccionada y vamos a una página distinta a la de selección/cambio
                ' de explotación:
                '       - y hay más de una se redirige al usuario para que seleccione una.
                '       - y sólo hay una se toma ésa como explotación seleccionada.
                If IsNothing(SessionNekagip.ExplotacionSeleccionada) And currentPageName <> "index.aspx" Then
                    Response.Redirect("index.aspx", True)
                Else
                    ' Ya está la explotación seleccionada.
                    'Consultamos las notificaciones
                    If (Not IsNothing(SessionNekagip.ExplotacionSeleccionada)) Then
                        Dim notificaciones As WSOutput.ConsultaEstadoNotificaciones = SessionNekagip.ExplotacionSeleccionada.ConsultaEstadoNotificaciones()
                        Session("Notificaciones") = notificaciones.sinleer
                    End If

                End If

                ' La variable de session de alta de guia sólo debe de existir si estamos en alguna de las 3 páginas
                ' para dar de alta la guia.
                ' Si al acceder a cualquier otra página existe la variable de session la eliminamos.
                If currentPageName <> "alta1.aspx" And currentPageName <> "alta2.aspx" And currentPageName <> "alta3.aspx" And currentPageName <> "alta_fin.aspx" And currentPageName <> "ica1.aspx" And currentPageName <> "ica2.aspx" Then
                    SessionNekagip.GuideData = Nothing
                    SessionNekagip.ValidatedGuide = Nothing
                    SessionNekagip.ICAData = Nothing
                End If

            End If
        End If



        ' LLamamos a este método sobreescribrible por si se quiere hacer algo en la carga de la
        ' página que deriva de ésta.
        CustomPageLoad(sender, e)

    End Sub

    Public Overridable Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)

    End Sub

    Public Sub auth(currentPageName)
        If SessionNekagip.UserId Is Nothing And SessionNekagip.GAuserId IsNot Nothing Then

            Dim nif As String = ""
            'nif = "P2000000F"
            'nif = "72437197P"
            nif = "72500083N" '"78932487Y"
            nif = ""
            Dim pass As String = ""
            pass = "HAZI"
            Dim email As String = ""
            email = "a@a.com"
            Dim tfno As String = ""
            tfno = "943123456"

            'If (Session("nifQueryString") IsNot Nothing) Then
            '    nif = Session("nifQueryString")
            '    pass = "HAZI"
            '    email = "a@a.com"
            '    tfno = "943123456"
            'End If

            nif = SessionNekagip.GAuserId.nif
            pass = SessionNekagip.GAuserId.pass
            If Identify(nif, pass, email, tfno) Then
                Dim user As SessionNekagip.User = New SessionNekagip.User()
                user.nif = nif
                SessionNekagip.UserId = user
                getDataAccess()
            Else
                errorRedirect(currentPageName)
            End If
        End If
    End Sub

    Public Function explotationCodigo()
        Dim explotacion As String

        If SessionNekagip.ExplotacionSeleccionada IsNot Nothing Then
            explotacion = SessionNekagip.ExplotacionSeleccionada.explotacion

        End If
        Return explotacion
    End Function


    Public Function explotationData()
        Dim explotacion As String = "&nbsp;"
        Dim denominacion As String = "&nbsp;"
        If SessionNekagip.ExplotacionSeleccionada IsNot Nothing Then
            explotacion = SessionNekagip.ExplotacionSeleccionada.explotacion
            denominacion = SessionNekagip.ExplotacionSeleccionada.denominacion
        End If
        Return "<p>" + Literales("50018") + ": " + explotacion + "<br/>" + denominacion + "</p>"
    End Function

    Public Function nameData()
        If SessionNekagip.DataAccess Is Nothing Then
            Return ""
        Else
            Return SessionNekagip.DataAccess.nombreusuario
        End If
    End Function

    Public Function languageSelector(language)
        If SessionNekagip.SelectedLanguage = language Then 'ES
            Return "activo"
        End If
    End Function

    Public Function Identify(nif, pass, email, tfno)
        Try
            Dim identification As WSOutput.Identificacion = New WSController().Identificacion(nif, pass, email, tfno, SessionNekagip.SelectedLanguage)
            If (identification.code = 200) Then
                Return True
            Else
                Return False
            End If
        Catch exc As Exception
            Return False
        End Try
    End Function

    Public Sub getDataAccess()
        Try
            SessionNekagip.DataAccess = New WSController().ConsultaDatosAcceso(AppSettings.AppCod, SessionNekagip.UserId.nif, SessionNekagip.SelectedLanguage)
            SessionNekagip.PermisosData = Nothing

            SessionNekagip.PermisosData = New WSController().Permisos(AppSettings.AppCod, SessionNekagip.UserId.nif, SessionNekagip.SelectedLanguage)
        Catch exc As Exception
            Throw exc
        End Try
    End Sub

    Public Function ManualCastellano() As String

        Return AppSettings.Manual_ES


    End Function
    Public Function ManualEuskera() As String

        Return AppSettings.Manual_EU


    End Function
    Public Property Literales() As Hashtable
        Get
            Try
                If _literales Is Nothing Then
                    Dim lits As Dictionary(Of String, String)
                    lits = New WSController().Literales("GEN", SessionNekagip.SelectedLanguage)
                    _literales = New Hashtable(lits)
                End If
                Return _literales
            Catch exc As Exception
                Response.Redirect("error.aspx", True)
            End Try
        End Get
        Set(ByVal value As Hashtable)
            _literales = value
        End Set
    End Property

    Public Property LiteralesPage() As Hashtable
        Get
            Try
                If _literalesPage Is Nothing Then
                    Dim position As Integer = Me.Request.Path.LastIndexOf("/"c)
                    Dim currentPageName As String = Me.Request.Path.Substring(position + 1)
                    Dim grupo As String = currentPageName.Substring(0, currentPageName.Length - 5)
                    Dim lits As Dictionary(Of String, String)
                    lits = New WSController().Literales(grupo.ToUpper(), SessionNekagip.SelectedLanguage)
                    _literalesPage = New Hashtable(lits)
                End If
                Return _literalesPage
            Catch exc As Exception
                Response.Redirect("error.aspx", True)
            End Try
        End Get
        Set(ByVal value As Hashtable)
            _literalesPage = value
        End Set
    End Property

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Sub SetCambioIdioma(ByVal languageCode As String)
        If languageCode = "es" Then
            SessionNekagip.SelectedLanguage = Common.Language.es
        ElseIf languageCode = "eu" Then
            SessionNekagip.SelectedLanguage = Common.Language.eu
        End If
    End Sub


#Region "WEB METHODS COMUNES PARA SELECCIÓN Y CAMBIO DE EXPLOTACIÓN"

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getExploitationList() As String
        Try
            Dim SessionNekagip = New SessionNekagip


            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(SessionNekagip.getExploitationList())

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function loadSelectedExploitation(ByVal exploitation As String, ByVal description As String, ByVal notificaciones As Integer, matadero As String, propia As String, pasto As String, tieneAnimales As String) As Boolean
        Try
            Dim selectedExploitation As WSOutput.BuscarExplotacionesTrabajo = New WSOutput.BuscarExplotacionesTrabajo(exploitation, description, matadero, propia, pasto, tieneAnimales)
            SessionNekagip.ExplotacionSeleccionada = selectedExploitation
            'If notificaciones = 0 Then
            '    SessionNekagip.Notificaciones = 0
            'Else
            '    SessionNekagip.Notificaciones = notificaciones
            'End If
            SessionNekagip.Notificaciones = notificaciones

            Return True
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return False
        End Try
    End Function

#End Region
    ''' <summary>
    ''' Cerrar sesión
    ''' </summary>
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Sub closeSession()
        SessionNekagip.closeSession()
    End Sub

    ''' <summary>
    ''' Devolver el estado del menú lateral. Colapsado true/false
    ''' </summary>
    ''' <returns></returns>
    Public Function sideBarStatusCollapsed()
        If SessionNekagip.sideBarStatusCollapsed Then
            Return "sidebar-collapse"
        Else
            Return ""
        End If
    End Function

    ''' <summary>
    ''' Modificar el estado del menú lateral.
    ''' </summary>
    ''' <param name="collapsed">Indica el estado del menú lateral. True o False</param>
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Sub sideBarStatusCollapsed(collapsed)
        SessionNekagip.sideBarStatusCollapsed = collapsed
    End Sub

    Public Sub errorRedirect(currentPagename)
        If currentPagename <> "error.aspx" Then
            Response.Redirect("error.aspx", True)
        End If
    End Sub

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getCountries() As String
        Try
            Dim countries As WSOutput.ConsultaProvinciasList = New WSController().ConsultaProvincias(SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(countries.lista)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getCities(ByVal thcod As String) As String
        Try
            Dim cities As WSOutput.ConsultaMunicipiosList = New WSController().ConsultaMunicipios(thcod, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(cities.lista)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getCrotales() As String
        Try
            Dim crotalesDisponibles As WSOutput.ConsultaCrotalesDisponibles = SessionNekagip.ExplotacionSeleccionada.ConsultaCrotalesDisponibles()
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(crotalesDisponibles.lista)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

End Class
