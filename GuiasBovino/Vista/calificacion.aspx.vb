Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class calificacion
    Inherits CustomPage

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getQualifications() As String
        Try
            Dim holders As WSOutput.ConsultaCalificacionList = SessionNekagip.ExplotacionSeleccionada.ConsultaCalificacion()
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(holders)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function

End Class