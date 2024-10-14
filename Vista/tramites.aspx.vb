Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class tramites
    Inherits CustomPage



    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)

        Dim itemVacio As ListItem = New ListItem("", "")

        Dim tramites As WSOutput.ConsultaTipoTramiteList = New WSController().ConsultaTipoTramite(SessionNekagip.SelectedLanguage)
        tipoTramite.DataSource = tramites.lista
        tipoTramite.DataTextField = "trades"
        tipoTramite.DataValueField = "tracod"
        tipoTramite.DataBind()

        tipoTramite.Items.Insert(0, itemVacio)

    End Sub

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getHistProcedures(ByVal tipotramite As String, ByVal fechadesde As String, ByVal fechahasta As String) As String
        Try
            Dim histProcedures As WSOutput.ConsultaHistorialDeTramitesList = SessionNekagip.ExplotacionSeleccionada.ConsultaHistorialDeTramites(tipotramite,
                                                                                                                                                fechadesde,
                                                                                                                                                fechahasta, "")
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(histProcedures)

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getAssociatedFile(ByVal row As Object, ByVal print As String) As String
        Try
            Dim identificador As String = row("identificador")
            Dim tipotramite As String = row("imprimir")(print)("tipotramite")
            Dim formato As String = row("imprimir")(print)("formato")

            Dim impGuia As WSOutput.ImprimirHistorialDeTramite =
                New WSController().ImprimirHistorialDeTramite(identificador, tipotramite, formato, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(impGuia)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function
End Class