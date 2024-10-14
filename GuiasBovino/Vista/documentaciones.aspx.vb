Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services

Public Class documentaciones
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim exp_docu As WSOutput.ConsultaEstadoDocumentaciones = SessionNekagip.ExplotacionSeleccionada.ConsultaEstadoDocumentaciones()
        'Documentaciones
        numDocumentaciones.InnerText = exp_docu.sinleer
        numDocumentacionesTotales.InnerText = exp_docu.total

    End Sub


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getDocumentaciones() As String
        Try
            Dim documentaciones As WSOutput.ConsultaDocumentacionesList = SessionNekagip.ExplotacionSeleccionada.ConsultaDocumentaciones()
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(documentaciones)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function documentacionVista(ByVal documentacion As String) As String
        Try
            Dim output As WSOutput.DocumentacionVista = New WSController().DocumentacionVista(documentacion, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function




End Class