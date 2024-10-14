Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services

Public Class notificar_fecha_colocacion
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub


    ''' <summary>
    ''' Notifica la pérdida asignada de un crotal
    ''' </summary>
    ''' <returns>True si todo ha ido bien.</returns>
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function notificarColocacion(ByVal crotal As String, ByVal fechaperdida As String, ByVal fechaentrega As String, ByVal fechacolocacion As String) As String
        Try
            Dim output As WSOutput.NotificarColocacion = New WSController().NotificarColocacion(SessionNekagip.ExplotacionSeleccionada.explotacion, crotal, fechaperdida, fechaentrega, fechacolocacion, SessionNekagip.SelectedLanguage)
            Dim respuesta As String = New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
            Return respuesta
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function



End Class