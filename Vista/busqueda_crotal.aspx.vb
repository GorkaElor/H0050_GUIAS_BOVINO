Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class busqueda_crotal
    Inherits CustomPage

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getAssociatedFile(ByVal crotal As String) As String
        Try

            Dim impFicha As WSOutput.ImprimirFichaRes = New WSController().ImprimirFichaRes(crotal, SessionNekagip.SelectedLanguage)
                Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(impFicha)


        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function

End Class