﻿Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class solicitud_crotales
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
                    'fecha_solicitud.InnerHtml = System.DateTime.Now.ToShortDateString()
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
    Public Shared Function solicitarCrotales(ByVal fecha As String, ByVal numCrotales As String, ByVal incluirTenazas As String) As String
        Try
            Dim res As WSOutput.SolicitarCrotales = SessionNekagip.ExplotacionSeleccionada.SolicitarCrotales(fecha, numCrotales, incluirTenazas)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

End Class