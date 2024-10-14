Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services

Public Class crotales_disponibles
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Try
            If Not IsNothing(SessionNekagip.ExplotacionSeleccionada) Then
                Dim datos_permiso_autocrotalacion As WSOutput.ConsultaAutocrotalacion = SessionNekagip.ExplotacionSeleccionada.ConsultaAutocrotalacion()
                If (datos_permiso_autocrotalacion.estado = -1) Then
                    'NO SOLICITADO 
                    Response.Redirect("solicitud_permiso.aspx", False)
                    Context.ApplicationInstance.CompleteRequest()
                ElseIf (datos_permiso_autocrotalacion.estado = 0) Then
                    'EN TRAMITE 
                    Response.Redirect("solicitud_permiso_en_tramite.aspx", False)
                    Context.ApplicationInstance.CompleteRequest()
                ElseIf (datos_permiso_autocrotalacion.estado = 1) Then
                    'VALIDADO
                    '-- NO HACER NADA
                ElseIf (datos_permiso_autocrotalacion.estado = 2) Then
                    'RECHAZADO
                    Response.Redirect("solicitud_permiso_denegada.aspx", False)
                    Context.ApplicationInstance.CompleteRequest()
                Else
                    errorRedirect("inicio.aspx")
                End If
            End If
        Catch exc As Exception
            errorRedirect("inicio.aspx")
        End Try
    End Sub


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getCrotalesDisponibles() As String
        Try
            Dim crotalesDisponibles As WSOutput.ConsultaCrotalesDisponibles = SessionNekagip.ExplotacionSeleccionada.ConsultaCrotalesDisponibles()
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(crotalesDisponibles)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getCrotalesPerdidas(ByVal crotal As String) As String
        Try
            Dim perdidas As WSOutput.CrotalesPerdidas = New WSController().CrotalesPerdidas(SessionNekagip.ExplotacionSeleccionada.explotacion, crotal, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(perdidas)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function imprimirJustificantePerdidaCrotal(ByVal crotal As String, ByVal fechaPerdida As String) As String
        Try
            Dim output As WSOutput.ImprimirJustificantePerdidaCrotal = New WSController().ImprimirJustificantePerdidaCrotal(SessionNekagip.ExplotacionSeleccionada.explotacion, crotal, fechaPerdida, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function imprimirListadoPerdidaCrotales(ByVal explotacion As String, ByVal fechadesde As String, ByVal fechahasta As String) As String
        Try
            Dim output As WSOutput.ImprimirListadoPerdidaCrotales = New WSController().ImprimirListadoPerdidaCrotales(SessionNekagip.ExplotacionSeleccionada.explotacion, fechadesde, fechahasta, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getAssociatedFile(ByVal crotal As String, ByVal fechaPerdida As String) As String
        Try
            Dim output As WSOutput.ImprimirJustificantePerdidaCrotal = New WSController().ImprimirJustificantePerdidaCrotal(SessionNekagip.ExplotacionSeleccionada.explotacion, crotal, fechaPerdida, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function



End Class