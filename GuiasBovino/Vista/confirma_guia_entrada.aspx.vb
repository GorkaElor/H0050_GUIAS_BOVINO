Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services

Public Class confirma_guia_de_entrada
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getConsultaGuiasEntrada() As String
        Try
            Dim guias As WSOutput.ConsultaGuiasEntradaList = New WSController().ConsultaGuiasEntrada(SessionNekagip.ExplotacionSeleccionada.explotacion, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(guias)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function BuscarCrotalGuiaEntrada(crotal) As String
        Try
            Dim guias As WSOutput.ConsultaGuiasEntradaList = New WSController().BuscarCrotalGuiaEntrada(crotal.toUpper, SessionNekagip.ExplotacionSeleccionada.explotacion, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(guias)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function crotalesGuiaConfirmada(guia) As String
        Try
            Dim guias As WSOutput.CrotalesGuiaConfirmada = New WSController().CrotalesGuiaConfirmada(guia, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(guias)
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
            Dim output As WSOutput.ImprimirDIB = New WSController().ImprimirDIB(crotal, "2", SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function ImprimirGuia(ByVal guia As Object, ByVal print As String) As String
        Try


            Dim type As String
            If print = "guia" Then
                '  guia = True
                type = 1
            ElseIf print = "guia_anexo_matadero" Then
                '  guia = True
                type = 2
            Else
                type = ""
            End If

            If type <> "" Then
                Dim impGuia As WSOutput.ImprimirGuia = New WSController().ImprimirGuia(guia, type, SessionNekagip.SelectedLanguage)
                Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(impGuia)
            Else
                Dim res As Common.Errors = New Common.Errors
                res.composeError(Common.Errors.ErrorTypes.generic, "No se puede imprimir la opción seleccionada", HttpContext.Current)
                Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
            End If


        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function denyGuide(ByVal guide As String) As String
        Try
            Dim deny As WSOutput.AnularGuia = SessionNekagip.ExplotacionSeleccionada.AnularGuia(guide)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(deny)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

End Class


'<WebMethod()>
'<ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
'Public Shared Function confirmarGuia(guia) As String
'    Try
'        Dim output As WSOutput.ConfirmarGuia = New WSController().ConfirmarGuia(guia, SessionNekagip.SelectedLanguage)
'        Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
'    Catch exc As Exception
'        Dim res As Common.Errors = New Common.Errors
'        res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
'        Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
'    End Try

'End Function


'<WebMethod()>
'<ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
'Public Shared Function rechazarGuia(guia) As String
'    Try
'        Dim output As WSOutput.RechazarGuia = New WSController().RechazarGuia(guia, SessionNekagip.SelectedLanguage)
'        Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
'    Catch exc As Exception
'        Dim res As Common.Errors = New Common.Errors
'        res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
'        Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
'    End Try

'End Function


