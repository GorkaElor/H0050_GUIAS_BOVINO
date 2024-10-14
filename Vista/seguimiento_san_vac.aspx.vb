Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class seguimiento_san_vac
    Inherits CustomPage
    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)

        Try

        Catch exc As Exception
            errorRedirect("explotacion.aspx")
        End Try


    End Sub

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getAssociatedFile(ByVal print As String) As String
        Try
            Dim type As String = Nothing
            If print = "excel" Then
                type = 2
            ElseIf print = "pdf" Then
                type = 1
            End If

            If type IsNot Nothing Then
                Dim impCenso As WSOutput.ImprimirSeguimiento = SessionNekagip.ExplotacionSeleccionada.ImprimirSeguimiento(type)
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



    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getEartagList() As String
        Try
            'ConsultaSeguimiento
            Dim crotales As WSOutput.CrotalesSeguimientoList = New WSController().ConsultaSeguimiento(SessionNekagip.ExplotacionSeleccionada.explotacion, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(crotales)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function



End Class