Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services

Public Class notificar_nacimiento
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        Try
            If Not IsNothing(SessionNekagip.ExplotacionSeleccionada) Then

                Dim itemVacio As ListItem = New ListItem("", "")

                ''Crotales
                'Dim crotalesDisponibles As WSOutput.ConsultaCrotalesDisponibles = SessionNekagip.ExplotacionSeleccionada.ConsultaCrotalesDisponibles()
                'selCrotales.DataSource = crotalesDisponibles.lista
                'selCrotales.DataTextField = "crotal"
                'selCrotales.DataValueField = "crotal"
                'selCrotales.DataBind()
                'selCrotales.Items.Insert(0, itemVacio)

                'Consulta opciones por defecto de la raza y la aptitud
                Dim precarga As WSOutput.PrecargaRazaAptitud = SessionNekagip.ExplotacionSeleccionada.PrecargaRazaAptitud()


                'ConsultaRazas
                Dim razas As WSOutput.ConsultaRazasList = New WSController().ConsultaRazas(SessionNekagip.SelectedLanguage)
                raza.DataSource = razas.lista
                raza.DataTextField = "razdes"
                raza.DataValueField = "razcod"
                raza.DataBind()

                If precarga.razcod <> "" Then
                    raza.Value = precarga.razcod
                Else
                    raza.Items.Insert(0, itemVacio)
                End If

                'ConsultaSexos
                Dim sexos As WSOutput.ConsultaSexosList = New WSController().ConsultaSexos(SessionNekagip.SelectedLanguage)
                    sexo.DataSource = sexos.lista
                    sexo.DataTextField = "sexdes"
                    sexo.DataValueField = "sexcod"
                    sexo.DataBind()
                sexo.Items.Insert(0, itemVacio)


                'ConsultaAptitudes
                Dim aptitudes As WSOutput.ConsultaAptitudesList = New WSController().ConsultaAptitudes(SessionNekagip.SelectedLanguage)
                    aptitud.DataSource = aptitudes.lista
                    aptitud.DataTextField = "aptdes"
                    aptitud.DataValueField = "aptcod"
                aptitud.DataBind()

                If precarga.aptcod <> "" Then
                    aptitud.Value = precarga.aptcod
                Else
                    aptitud.Items.Insert(0, itemVacio)
                End If

                'ConsultaFacilidadParto 
                Dim facilidadesParto As WSOutput.ConsultaFacilidadPartoList = New WSController().ConsultaFacilidadesParto(SessionNekagip.SelectedLanguage)
                    facilidadParto.DataSource = facilidadesParto.lista
                    facilidadParto.DataTextField = "fpdes"
                    facilidadParto.DataValueField = "fpcod"
                    facilidadParto.DataBind()
                facilidadParto.Items.Insert(0, itemVacio)

                'ConsultaTiposParto
                Dim tiposParto As WSOutput.TipoPartoList = New WSController().ConsultaTipoParto(SessionNekagip.SelectedLanguage)
                    tipoParto.DataSource = tiposParto.lista
                    tipoParto.DataTextField = "tpdes"
                    tipoParto.DataValueField = "tpcod"
                    tipoParto.DataBind()
                tipoParto.Items.Insert(0, itemVacio)

                'ConsultaTiposInsiminacion
                Dim tiposInsiminacion As WSOutput.TipoInseminacionList = New WSController().ConsultaTipoInseminacion(SessionNekagip.SelectedLanguage)
                    inseminacion.DataSource = tiposInsiminacion.lista
                    inseminacion.DataTextField = "tides"
                    inseminacion.DataValueField = "ticod"
                    inseminacion.DataBind()
                inseminacion.Items.Insert(0, itemVacio)
            End If
        Catch ex As Exception

        End Try
    End Sub



    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function aviso_explotacion_rendimiento(ByVal nombre As String,
                        ByVal pesonacimiento As String, ByVal registroGenealogico As String, ByVal tipoParto As String,
                       ByVal tipoInseminacion As String, ByVal fpcod As String) As String
        Try
            Dim output As New WSOutput.ConsultaControlRendimiento
            If nombre = "" Or pesonacimiento = "" Or registroGenealogico = "" Or tipoParto = "" Or tipoInseminacion = "" Or fpcod = "" Then
                output = New WSController().ConsultaControlRendimiento(SessionNekagip.ExplotacionSeleccionada.explotacion, SessionNekagip.SelectedLanguage)
            Else

            End If



            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function notificarNacimiento(ByVal crotal As String, ByVal nombre As String, ByVal razcod As String, ByVal sexcod As String,
                       ByVal aptcod As String, ByVal pesonacimiento As String, ByVal registroGenealogico As String, ByVal tipoParto As String,
                       ByVal tipoInseminacion As String, ByVal fpcod As String, ByVal madre As String, ByVal madreet As String,
                                               ByVal padre As String, ByVal fechanacimiento As String, ByVal fechaimplantacion As String) As String
        Try
            Dim output As WSOutput.NotificarNacimiento = SessionNekagip.ExplotacionSeleccionada.NotificarNacimiento(crotal, nombre, razcod, sexcod,
                                                                                                 aptcod, pesonacimiento, fpcod, madre, madreet,
                                                                                                padre,
                                                                                                 fechanacimiento, fechaimplantacion, registroGenealogico.ToUpper,
                                                                                                tipoParto, tipoInseminacion)

            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function



    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getCrotalesMadre(ByVal crotal As String, ByVal nombre As String) As String
        Try
            Dim crotalesMadre As WSOutput.CrotalMadreList = SessionNekagip.ExplotacionSeleccionada.ObtenerMadre(crotal, nombre)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(crotalesMadre)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getCrotalesMadreET(ByVal crotal As String, ByVal nombre As String) As String
        Try
            Dim crotalesMadreET As WSOutput.ObtenerMadreETList = New WSController().ObtenerMadreET(nombre.ToUpper(), crotal.ToUpper(),
                                                                                                  SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(crotalesMadreET)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function
    'Tarea H0050. Modificaciones WS
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getCrotalesPadre(ByVal crotal As String, ByVal nombre As String, ByVal razcod As String, ByVal ticod As String) As String
        Try
            Dim crotalesPadre As WSOutput.ObtenerPadreList = SessionNekagip.ExplotacionSeleccionada.ObtenerPadre(crotal, nombre, razcod, ticod)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(crotalesPadre)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getCrotalesSinAsignar(ByVal crotal As String) As String
        Try
            Dim crotalesSinAsignar As WSOutput.ObtenerCrotalesSinAsignarList = SessionNekagip.ExplotacionSeleccionada.ObtenerCrotalesSinAsignar(crotal)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(crotalesSinAsignar)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

End Class