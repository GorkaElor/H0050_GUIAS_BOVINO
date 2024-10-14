Public Class Common
    Public Class Language
        Public Shared es As String = "es"
        Public Shared eu As String = "eu"
    End Class

    Public Class Errors
        Enum ErrorTypes
            generic
        End Enum
        Public Class Info
            Public Property type As ErrorTypes
            Public Property message As String
            Public Sub New(ByVal newType As ErrorTypes, ByVal newMessage As String)
                type = newType
                message = newMessage
            End Sub
        End Class

        Public Property message As Info
        Public Sub composeError(ByVal errorType As ErrorTypes, ByVal exceptionMessage As String, ByVal HttpContext As System.Web.HttpContext)
            If errorType = ErrorTypes.generic Then
                message = New Info(errorType, "Error interno")
            End If
            HttpContext.Response.StatusCode = "500"
            HttpContext.Response.StatusDescription = exceptionMessage
            HttpContext.ApplicationInstance.CompleteRequest()
        End Sub
    End Class


End Class


Public Class Literales
    Public literales() As LiteralObj

End Class

Public Class LiteralObj

    Private litCode As String
    Private litValue As String

    Public Property Code() As String
        Get
            Code = litCode

        End Get
        Set(ByVal Value As String)
            litCode = Value
        End Set
    End Property

    Public Property LiteralValue() As String
        Get
            LiteralValue = litValue
        End Get
        Set(ByVal Value As String)
            litValue = Value
        End Set
    End Property

End Class


Public Class AppSettings
    Private Shared AppCodValue As String
    'WS NEKAGIP
    Private Shared UriWSNekagipValue As String
    Private Shared UserCredentialWSNekagipValue As String
    Private Shared PassCredentialWSNekagipValue As String
    Private Shared usuWSNekagipValue As String
    Private Shared passWSNekagipValue As String
    'WS GANADERIA
    Private Shared UriWSGanaderiaValue As String
    Private Shared UserCredentialWSGanaderiaValue As String
    Private Shared PassCredentialWSGanaderiaValue As String
    Private Shared usuWSGanaderiaValue As String
    Private Shared passWSGanaderiaValue As String
    'WS GANADERIA
    Private Shared UriWSGanaderiaR2Value As String


    'WS MODERNIZACIONEXTERNA
    Private Shared UriWSModernizacionExternaValue As String
    Private Shared UserCredentialWSModernizacionExternaValue As String
    Private Shared PassCredentialWSModernizacionExternaValue As String
    Private Shared usuWSModernizacionExternaValue As String
    Private Shared passWSModernizacionExternaValue As String
    'MANUALES
    Public Shared Manual_ES As String
    Public Shared Manual_EU As String
    Public Shared Property Url_ManualES() As String
        Get
            Url_ManualES = Manual_ES
        End Get
        Set(value As String)
            Manual_ES = value
        End Set
    End Property
    Public Shared Property Url_ManualEU() As String
        Get
            Url_ManualEU = Manual_EU
        End Get
        Set(value As String)
            Manual_EU = value
        End Set
    End Property
    Public Shared Property AppCod() As String
        Get
            AppCod = AppCodValue
        End Get
        Set(value As String)
            AppCodValue = value
        End Set
    End Property
    'WS MODERNIZACION EXTERNA
    Public Shared Property UriWSModernizacionExterna() As String
        Get
            UriWSModernizacionExterna = UriWSModernizacionExternaValue
        End Get
        Set(value As String)
            UriWSModernizacionExternaValue = value
        End Set
    End Property

    Public Shared Property UserCredentialWsModernizacionExterna() As String
        Get
            UserCredentialWsModernizacionExterna = UserCredentialWSModernizacionExternaValue
        End Get
        Set(value As String)
            UserCredentialWSModernizacionExternaValue = value
        End Set
    End Property
    Public Shared Property PassCredentialWSModernizacionExterna() As String
        Get
            PassCredentialWSModernizacionExterna = PassCredentialWSModernizacionExternaValue
        End Get
        Set(value As String)
            PassCredentialWSModernizacionExternaValue = value
        End Set
    End Property
    Public Shared Property UsuWSModernizacionExterna() As String
        Get
            UsuWSModernizacionExterna = usuWSModernizacionExternaValue
        End Get
        Set(value As String)
            usuWSModernizacionExternaValue = value
        End Set
    End Property

    Public Shared Property PassWSModernizacionExterna() As String
        Get
            PassWSModernizacionExterna = passWSModernizacionExternaValue
        End Get
        Set(value As String)
            passWSModernizacionExternaValue = value
        End Set
    End Property
    'WS NEKAGIP
    Public Shared Property UriWSNekagip() As String
        Get
            UriWSNekagip = UriWSNekagipValue
        End Get
        Set(value As String)
            UriWSNekagipValue = value
        End Set
    End Property

    Public Shared Property UserCredentialWsNekagip() As String
        Get
            UserCredentialWsNekagip = UserCredentialWSNekagipValue
        End Get
        Set(value As String)
            UserCredentialWSNekagipValue = value
        End Set
    End Property
    Public Shared Property PassCredentialWSNekagip() As String
        Get
            PassCredentialWSNekagip = PassCredentialWSNekagipValue
        End Get
        Set(value As String)
            PassCredentialWSNekagipValue = value
        End Set
    End Property
    Public Shared Property UsuWSNekagip() As String
        Get
            UsuWSNekagip = usuWSNekagipValue
        End Get
        Set(value As String)
            usuWSNekagipValue = value
        End Set
    End Property

    Public Shared Property PassWSNekagip() As String
        Get
            PassWSNekagip = passWSNekagipValue
        End Get
        Set(value As String)
            passWSNekagipValue = value
        End Set
    End Property

    'WS GANADERIA
    Public Shared Property UriWSGanaderia() As String
        Get
            UriWSGanaderia = UriWSGanaderiaValue
        End Get
        Set(value As String)
            UriWSGanaderiaValue = value
        End Set
    End Property
    'WS GANADERIA
    Public Shared Property UriWSGanaderiaR2() As String
        Get
            UriWSGanaderiaR2 = UriWSGanaderiaR2Value
        End Get
        Set(value As String)
            UriWSGanaderiaR2Value = value
        End Set
    End Property
    Public Shared Property UserCredentialWSGanaderia() As String
        Get
            UserCredentialWSGanaderia = UserCredentialWSGanaderiaValue
        End Get
        Set(value As String)
            UserCredentialWSGanaderiaValue = value
        End Set
    End Property
    Public Shared Property PassCredentialWSGanaderia() As String
        Get
            PassCredentialWSGanaderia = PassCredentialWSGanaderiaValue
        End Get
        Set(value As String)
            PassCredentialWSGanaderiaValue = value
        End Set
    End Property
    Public Shared Property UsuWSGanaderia() As String
        Get
            UsuWSGanaderia = usuWSGanaderiaValue
        End Get
        Set(value As String)
            usuWSGanaderiaValue = value
        End Set
    End Property
    Public Shared Property PassWSGanaderia() As String
        Get
            PassWSGanaderia = passWSGanaderiaValue
        End Get
        Set(value As String)
            passWSGanaderiaValue = value
        End Set
    End Property
End Class

Public Class SessionNekagip

    Public Shared Sub clearUserData()
        System.Web.HttpContext.Current.Session.Remove("DataAccess")
        System.Web.HttpContext.Current.Session.Remove("UserId")
        System.Web.HttpContext.Current.Session.Remove("GAuserId")
        System.Web.HttpContext.Current.Session.Remove("Notificaciones")
        System.Web.HttpContext.Current.Session.Remove("ExplotacionSeleccionada")
        System.Web.HttpContext.Current.Session.Remove("sideBarStatusCollapsed")
        System.Web.HttpContext.Current.Session.Remove("GuideData")
        System.Web.HttpContext.Current.Session.Remove("ValidatedGuide")

    End Sub

    Public Shared Property DataAccess() As WSOutput.ConsultaDatosAcceso
        Get
            If System.Web.HttpContext.Current.Session("DataAccess") IsNot Nothing Then
                Return System.Web.HttpContext.Current.Session("DataAccess")
            Else
                Return Nothing
            End If
        End Get
        Set(value As WSOutput.ConsultaDatosAcceso)
            If value IsNot "" Then
                System.Web.HttpContext.Current.Session("DataAccess") = value
            End If
        End Set
    End Property

    Public Class User
        Public Property nif As String

    End Class

    Public Shared Property UserId() As User
        Get
            If System.Web.HttpContext.Current.Session("UserId") IsNot Nothing Then
                Return System.Web.HttpContext.Current.Session("UserId")
            Else
                Return Nothing
            End If
        End Get
        Set(value As User)
            If value IsNot "" Then
                System.Web.HttpContext.Current.Session("UserId") = value
            End If
        End Set
    End Property

    Public Class GAuser
        Public Property nif As String
        Public Property pass As String

    End Class

    Public Shared Property GAuserId() As GAuser
        Get
            If System.Web.HttpContext.Current.Session("GAuserId") IsNot Nothing Then
                Return System.Web.HttpContext.Current.Session("GAuserId")
            Else
                Return Nothing
            End If
        End Get
        Set(value As GAuser)
            If value IsNot "" Then
                System.Web.HttpContext.Current.Session("GAuserId") = value
            End If
        End Set
    End Property

    ''' <summary>
    ''' Obtiene las todas las explotaciones para el usuario conectado.
    ''' </summary>
    ''' <returns>Lista de objetos de tipo BuscarExplotacionTrabajo</returns>
    Public Shared Function getExploitationList() As WSOutput.BuscarExplotacionesTrabajoList
        Dim expList As WSOutput.BuscarExplotacionesTrabajoList = New WSController().BuscarExplotacionesTrabajo(UserId.nif, SessionNekagip.SelectedLanguage)
        'eliminamos las explotaciones que no comiencen por "ES01"
        expList.lista.RemoveAll(Function(z) Left(z.explotacion, 4) <> "ES20")
        Return expList
    End Function


    Public Shared Property Notificaciones() As Integer

        Get
            If System.Web.HttpContext.Current.Session("Notificaciones") IsNot Nothing Then
                Return System.Web.HttpContext.Current.Session("Notificaciones")
            Else
                Return Nothing
            End If
        End Get
        Set(value As Integer)
            System.Web.HttpContext.Current.Session("Notificaciones") = value
        End Set
    End Property


    Public Shared Property ExplotacionSeleccionada() As WSOutput.BuscarExplotacionesTrabajo
        Get
            If System.Web.HttpContext.Current.Session("ExplotacionSeleccionada") IsNot Nothing Then
                Return System.Web.HttpContext.Current.Session("ExplotacionSeleccionada")
            Else
                Return Nothing
            End If
        End Get
        Set(value As WSOutput.BuscarExplotacionesTrabajo)
            If value IsNot "" Then
                System.Web.HttpContext.Current.Session("ExplotacionSeleccionada") = value
            End If
        End Set
    End Property

    Public Shared Property SelectedLanguage() As String
        Get
            If System.Web.HttpContext.Current.Session("SelectedLanguage") IsNot Nothing Then
                Return System.Web.HttpContext.Current.Session("SelectedLanguage")
            Else
                'Idioma por defecto
                System.Web.HttpContext.Current.Session("SelectedLanguage") = Common.Language.eu
                Return System.Web.HttpContext.Current.Session("SelectedLanguage")
            End If
        End Get
        Set(value As String)
            If value IsNot "" Then
                System.Web.HttpContext.Current.Session("SelectedLanguage") = value
            Else
                'Idioma por defecto
                System.Web.HttpContext.Current.Session("SelectedLanguage") = Common.Language.eu
            End If
        End Set
    End Property

    Public Shared Property sideBarStatusCollapsed() As String
        Get
            If System.Web.HttpContext.Current.Session("sideBarStatusCollapsed") IsNot Nothing Then
                Return System.Web.HttpContext.Current.Session("sideBarStatusCollapsed")
            Else
                System.Web.HttpContext.Current.Session("sideBarStatusCollapsed") = False
                Return System.Web.HttpContext.Current.Session("sideBarStatusCollapsed")
            End If
        End Get
        Set(value As String)
            If value IsNot "" Then
                System.Web.HttpContext.Current.Session("sideBarStatusCollapsed") = value
            Else
                System.Web.HttpContext.Current.Session("sideBarStatusCollapsed") = False
            End If
        End Set
    End Property

    Public Shared Sub closeSession()

        Dim url As NEKAGIP.WSOutput.UrlRedirecGipuzkoataria = New NEKAGIP.WSController().UrlRedirecGipuzkoataria()
        If url.resultado <> "" Then

            System.Web.HttpContext.Current.Response.Redirect(url.resultado, False)
        End If



        Dim auxLang As String = SelectedLanguage()
        System.Web.HttpContext.Current.Session.Clear()
        SelectedLanguage = auxLang

    End Sub

    Public Shared Property devMode() As String
        Get
            If System.Web.HttpContext.Current.Session("devMode") IsNot Nothing Then
                Return System.Web.HttpContext.Current.Session("devMode")
            Else
                Return Nothing
            End If
        End Get
        Set(value As String)
            System.Web.HttpContext.Current.Session("devMode") = value
        End Set
    End Property

    Public Class Guide
        Public Property horasalida As String
        Public Property horallegada As String
        Public Property tipoguia As String
        Public Property tipotransporte As String
        Public Property explotacioninicial As String
        Public Property exploorigen As String
        Public Property explodestino As String
        Public Property explodestinoNombre As String
        Public Property explodestinoMunicipio As String
        Public Property explodestinoProvincia As String
        Public Property explodestinomatadero As String
        Public Property fechasalida As String
        Public Property fechasalidaWeb As String
        Public Property fechallegada As String
        Public Property fechallegadaWeb As String
        Public Property niftransportista As String
        Public Property nombretransportista As String
        Public Property matricula As String
        Public Property ates As String
        Public Property crotales As List(Of String)
        Public Property usuws As String
        Public Property pasws As String
        Public Property idioma As String

        Public Property comprador As String
        Public Property monteautorizado As WSOutput.ConsultaMontesAutorizados
    End Class

    Public Shared Property GuideData() As Guide
        Get
            If System.Web.HttpContext.Current.Session("GuideData") IsNot Nothing Then
                Return System.Web.HttpContext.Current.Session("GuideData")
            Else
                Return Nothing
            End If
        End Get
        Set(value As Guide)
            If value IsNot "" Then
                System.Web.HttpContext.Current.Session("GuideData") = value
            End If
        End Set
    End Property
    Public Class ICA
        Public Property P1 As String
        Public Property P2 As List(Of String)
        Public Property T1 As List(Of String)
        Public Property T2 As List(Of String)
        Public Property E1 As String
        Public Property E2 As List(Of String)
        Public Property E3 As List(Of String)
        Public Property E4 As List(Of String)
        Public Property E5 As List(Of String)
        Public Property E6 As List(Of String)
        Public Property E7 As List(Of String)
        Public Property E8 As List(Of String)
        Public Property E9 As String
        Public Property E10 As List(Of String)
        Public Property icacod As String
        Public Property usuws As String
        Public Property pasws As String
        Public Property idioma As String
    End Class

    Public Shared Property ICAData() As ICA
        Get
            If System.Web.HttpContext.Current.Session("ICAData") IsNot Nothing Then
                Return System.Web.HttpContext.Current.Session("ICAData")
            Else
                Return Nothing
            End If
        End Get
        Set(value As ICA)
            If value IsNot "" Then
                System.Web.HttpContext.Current.Session("ICAData") = value
            End If
        End Set
    End Property
    Public Class Permisos
        Public Property lista As List(Of String)
        Public Property usuws As String
        Public Property pasws As String
        Public Property idioma As String
    End Class

    Public Shared Property PermisosData() As WSOutput.Permisos
        Get
            If System.Web.HttpContext.Current.Session("PermisosData") IsNot Nothing Then
                Return System.Web.HttpContext.Current.Session("PermisosData")
            Else
                Return Nothing
            End If
        End Get
        Set(value As WSOutput.Permisos)
            If value IsNot "" Then
                System.Web.HttpContext.Current.Session("PermisosData") = value
            End If
        End Set
    End Property
    Public Shared Property ValidatedGuide() As WSOutput.ValidarGuia
        Get
            If System.Web.HttpContext.Current.Session("ValidatedGuide") IsNot Nothing Then
                Return System.Web.HttpContext.Current.Session("ValidatedGuide")
            Else
                Return Nothing
            End If
        End Get
        Set(value As WSOutput.ValidarGuia)
            If value IsNot "" Then
                System.Web.HttpContext.Current.Session("ValidatedGuide") = value
            End If
        End Set
    End Property

    Public Shared Function getNews() As WSOutput.ConfiguracionElemento
        Dim expList As WSOutput.ConfiguracionElemento = New WSController().ConfiguracionElemento("", "noticias", SessionNekagip.SelectedLanguage)
        Return expList
    End Function

    Public Shared Function getEvents() As WSOutput.ConfiguracionElemento
        Dim expList As WSOutput.ConfiguracionElemento = New WSController().ConfiguracionElemento("", "eventos", SessionNekagip.SelectedLanguage)
        Return expList
    End Function

    Public Shared Function getWarnings() As WSOutput.ConfiguracionElemento
        Dim expList As WSOutput.ConfiguracionElemento = New WSController().ConfiguracionElemento("", "avisos", SessionNekagip.SelectedLanguage)
        Return expList
    End Function

End Class
