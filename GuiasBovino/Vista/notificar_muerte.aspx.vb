Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services

Public Class notificar_muerte
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function notificar_muerte(ByVal crotal As String, ByVal fechamuerte As String, ByVal fechanotificacion As String, ByVal nombre As String, ByVal observaciones As String, recogido As String) As String
        Try
            Dim output As WSOutput.NotificarMuerte = New WSController().NotificarMuerte(SessionNekagip.ExplotacionSeleccionada.explotacion, crotal, nombre, fechamuerte,
                                                                           fechanotificacion, observaciones, LCase(recogido), SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function ConsultaResesVivas(ByVal crotal As String, ByVal nombre As String) As String
        'crotal y nombre son parametros opcionales
        Try
            Dim output As WSOutput.ConsultaResesVivas = New WSController().ConsultaResesVivas(SessionNekagip.ExplotacionSeleccionada.explotacion,
                                                                                              crotal.ToUpper(), nombre.ToUpper(), SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

End Class