Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services

Public Class listado_de_muertes
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getListadoMuertes() As String
        Try
            Dim crotales As WSOutput.ConsultaMuertesList = SessionNekagip.ExplotacionSeleccionada.ConsultaMuertes()
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(crotales)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getMuerte(ByVal crotal As String) As String
        Try
            Dim muerte As WSOutput.MuerteDetalle = New WSController().Muerte(crotal, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(muerte)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getAssociatedFile(ByVal crotal As String) As String
        Try
            Dim doc As WSOutput.ImprimirJustificanteMuerte = SessionNekagip.ExplotacionSeleccionada.ImprimirJustificanteMuerte(crotal)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(doc)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function

End Class