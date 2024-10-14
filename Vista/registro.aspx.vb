Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class registro
    Inherits CustomPage

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getRegisterBook() As String
        Try
            Dim registerBook As WSOutput.ConsultaLibroDeRegistroList = SessionNekagip.ExplotacionSeleccionada.ConsultaLibroDeRegistro()
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(registerBook)

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getAssociatedFile(ByVal row As Object) As String
        Try
            Dim imp As WSOutput.ImprimirLibroDeRegistro = SessionNekagip.ExplotacionSeleccionada.ImprimirLibroDeRegistro(row("campana"))
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(imp)

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function

End Class