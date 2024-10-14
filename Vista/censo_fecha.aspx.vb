Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class censo_fecha
    Inherits CustomPage

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getAssociatedFile(ByVal print As String, ByVal fecha As String) As String
        Try
            Dim type As String = Nothing
            If print = "excel" Then
                type = 2
            ElseIf print = "pdf" Then
                type = 1
            End If

            If type IsNot Nothing Then
                Dim impCenso As WSOutput.ImprimirCensoAUnaFecha = SessionNekagip.ExplotacionSeleccionada.ImprimirCensoAUnaFecha(fecha, type)
                Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(impCenso)
            Else
                Throw New Exception("No existe la opción de imprimir")
            End If

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function

End Class