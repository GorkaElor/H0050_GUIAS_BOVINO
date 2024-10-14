Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services

Public Class notificaciones
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getNotificaciones() As String
        Try
            Dim notificaciones As WSOutput.ConsultaNotificacionesList = SessionNekagip.ExplotacionSeleccionada.ConsultaNotificaciones()
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(notificaciones)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function notificacionVista(ByVal notificacion As String) As String
        Try
            Dim output As WSOutput.NotificacionVista = New WSController().NotificacionVista(notificacion, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function notificacionBorrar(ByVal notificacion As String) As String
        Try

            Dim output As WSOutput.NotificacionBorrar = New WSController().NotificacionBorrar(notificacion, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function


    '<WebMethod()>
    '<ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    'Public Shared Function consultaEstadoNotificaciones() As String
    '    Try

    '        Dim notificaciones As WSOutput.ConsultaEstadoNotificaciones = New WSController().ConsultaEstadoNotificaciones(SessionNekagip.ExplotacionSeleccionada.explotacion, SessionNekagip.SelectedLanguage)
    '        Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(notificaciones)
    '    Catch exc As Exception
    '        Dim res As Common.Errors = New Common.Errors
    '        res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
    '        Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
    '    End Try

    'End Function


End Class