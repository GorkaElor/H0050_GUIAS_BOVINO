Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class solicitud_permiso_denegada
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)
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
                    Response.Redirect("solicitud_crotales.aspx", False)
                    Context.ApplicationInstance.CompleteRequest()
                ElseIf (datos_permiso_autocrotalacion.estado = 2) Then
                    'RECHAZADO
                    mensaje_rechazo.InnerHtml = datos_permiso_autocrotalacion.mensaje
                    fecha_solicitud.InnerHtml = datos_permiso_autocrotalacion.fecha
                Else
                    errorRedirect("inicio.aspx")
                End If
            End If
        Catch exc As Exception
            errorRedirect("inicio.aspx")
        End Try
    End Sub
End Class