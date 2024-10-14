Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class solicitud_permiso
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)
        Try
            If Not IsNothing(SessionNekagip.ExplotacionSeleccionada) Then
                Dim datos_permiso_autocrotalacion As WSOutput.ConsultaAutocrotalacion = SessionNekagip.ExplotacionSeleccionada.ConsultaAutocrotalacion()
                If (datos_permiso_autocrotalacion.estado = -1) Then
                    'NO SOLICITADO 
                    '-- NO HACER NADA
                ElseIf (datos_permiso_autocrotalacion.estado = 0) Then
                    'EN TRAMITE 
                    Response.Redirect("solicitud_permiso_en_tramite.aspx", False)
                    Context.ApplicationInstance.CompleteRequest()
                ElseIf (datos_permiso_autocrotalacion.estado = 1) Then
                    'VALIDADO
                    Response.Redirect("solicitud_crotales.aspx", False)
                    Context.ApplicationInstance.CompleteRequest()
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
    Public Shared Function permisoAutocrotalacion() As String
        Try
            Dim fechaSolicitud As String = System.DateTime.Now.ToShortDateString()
            Dim res As WSOutput.PermisoAutocrotalacion = SessionNekagip.ExplotacionSeleccionada.PermisoAutocrotalacion()
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

End Class