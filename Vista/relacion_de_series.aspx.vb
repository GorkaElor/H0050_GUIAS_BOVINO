Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class relacion_de_series
    Inherits CustomPage
    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        llenarSelectorOcas()
    End Sub
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getConsultaSerieCrotales() As String
        Try
            Dim relacionseries As WSOutput.ConsultaSerieCrotales = New WSController().ConsultaSerieCrotales(SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(relacionseries)

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function notificarSerieCrotales(ByVal fechaalta As String, ocacod As String, mecod As String, cadesde As String, cahasta As String, caactual As String) As String
        Try
            Dim imp As WSOutput.NotificarSerieCrotales = New WSController().NotificarSerieCrotales(ocacod, mecod, fechaalta, cadesde, cahasta, caactual, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(imp)

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function
    Private Sub llenarSelectorOcas()
        Dim itemVacio As ListItem = New ListItem(LiteralesPage("51412"), "")
        Dim categorias As WSOutput.ConsultaOCAs = New WSController().ConsultaOCAs("20", SessionNekagip.SelectedLanguage)
        ocas.DataSource = categorias.lista
        ocas.DataTextField = "ocades"
        ocas.DataValueField = "ocacod"
        ocas.DataBind()
        ocas.Items.Insert(0, itemVacio)
    End Sub
End Class