Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services

Public Class bajas_entre_fechas
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getAssociatedFile(ByVal tipobaja As String, ByVal tipo As String, ByVal fechadesde As String, ByVal fechahasta As String) As String
        Try
            Dim type As String = Nothing
            If tipo = "excel" Then
                type = 2
            ElseIf tipo = "pdf" Then
                type = 1
            End If

            If type IsNot Nothing Then
                Dim output As WSOutput.ImprimirBajasEntreFechas = New WSController().ImprimirBajasEntreFechas(SessionNekagip.ExplotacionSeleccionada.explotacion, tipobaja, type, fechadesde, fechahasta, SessionNekagip.SelectedLanguage)
                Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
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