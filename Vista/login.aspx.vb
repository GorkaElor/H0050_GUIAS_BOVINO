Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class login
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        'Dim url As NEKAGIP.WSOutput.UrlRedirecGipuzkoataria = New NEKAGIP.WSController().UrlRedirecGipuzkoataria()
        'Session.Add("urlLogin", url)
        'If url.resultado <> "" Then
        '    Response.Redirect(url.resultado, False)
        'End If



    End Sub


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function ComprobarSesionActivaGipuzkoataria(strIDSesion As String, idPortal As String, strIPAdd As String, idioma As String) As String
        Try
            Dim idiomadelportal As String
            idiomadelportal = IIf(idioma = "0", "es", "eu")
            Dim output As WSOutput.SesionActiva = New WSController().SesionActiva(strIDSesion, idPortal, strIPAdd, idiomadelportal)
            If output.status = 200 And output.code = 200 Then
                Dim user As SessionNekagip.GAuser = New SessionNekagip.GAuser()
                'nif = "72500083N" '"78932487Y" "72437197P" 
                'nif = "P2000000F"
                'pass = "0000"
                user.nif = output.nif
                user.pass = ""
                SessionNekagip.GAuserId = user
            End If



            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function Autentificacion(ByVal username As String, ByVal password As String) As String
        Try

            Dim output As WSOutput.Autentificacion = New WSController().Autentificacion(username, password, SessionNekagip.SelectedLanguage)
            If output.status = 200 And output.code = 200 Then
                Dim user As SessionNekagip.GAuser = New SessionNekagip.GAuser()
                'nif = "72500083N" '"78932487Y" "72437197P" 
                'nif = "P2000000F"
                'pass = "0000"
                user.nif = output.nif
                user.pass = password
                SessionNekagip.GAuserId = user
            End If

            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(output)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    
End Class