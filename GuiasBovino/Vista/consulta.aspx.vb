Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class consulta
    Inherits CustomPage

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getGuides() As String
        Try
            Dim guides As WSOutput.ConsultaGuiasList = SessionNekagip.ExplotacionSeleccionada.ConsultaGuias()
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(guides)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function searchGuides(ByVal crotal As String) As String
        Try
            Dim explotacion As String = SessionNekagip.ExplotacionSeleccionada.explotacion
            Dim guides As WSOutput.BuscarCrotalGuiaList = SessionNekagip.ExplotacionSeleccionada.BuscarCrotalGuia(crotal)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(guides)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getGuideEartags(ByVal guide As String) As String
        Try
            Dim eartags As WSOutput.ConsultaGuiasCrotalesList = New WSController().ConsultaGuiasCrotales(guide, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(eartags)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function ConsultaGuiasCrotalesDescolgados(ByVal guide As String) As String
        Try
            Dim eartags As WSOutput.ConsultaGuiasCrotalesList = New WSController().ConsultaGuiasCrotalesDescolgados(guide, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(eartags)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getAssociatedFile(ByVal row As Object, ByVal print As String) As String
        Try
            Dim guia As Boolean = False
            Dim type As String
            If print = "guia" Then
                guia = True
                type = 1
            ElseIf print = "guia_anexo_matadero" Then
                guia = True
                type = 2
            End If

            If guia Then
                Dim impGuia As WSOutput.ImprimirGuia = New WSController().ImprimirGuia(row("guia"), type, SessionNekagip.SelectedLanguage)
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