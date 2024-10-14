Imports System.Web.SessionState

Public Class Global_asax
    Inherits System.Web.HttpApplication

    Sub Application_Start(ByVal sender As Object, ByVal e As EventArgs)
        'PageIKT.keySep = "jqCod"
        Dim eee
        eee = 1
    End Sub

    Sub Application_End(ByVal sender As Object, ByVal e As EventArgs)
        Dim eee
        eee = 1
    End Sub

    Sub Application_Error(ByVal sender As Object, ByVal e As EventArgs)
        Dim eee
        eee = 1

    End Sub

    Sub Session_Start(ByVal sender As Object, ByVal e As EventArgs)
        NEKAGIP.AppSettings.AppCod = ConfigurationManager.AppSettings.Get("AppCod")
        'WS NEKAGIP
        NEKAGIP.AppSettings.UriWSNekagip = ConfigurationManager.AppSettings.Get("UriWSNekagip")
        NEKAGIP.AppSettings.UserCredentialWsNekagip = ConfigurationManager.AppSettings.Get("UserCredentialWSNekagip")
        NEKAGIP.AppSettings.PassCredentialWSNekagip = ConfigurationManager.AppSettings.Get("PassCredentialWSNekagip")
        NEKAGIP.AppSettings.UsuWSNekagip = ConfigurationManager.AppSettings.Get("UsuWSNekagip")
        NEKAGIP.AppSettings.PassWSNekagip = ConfigurationManager.AppSettings.Get("PassWSNekagip")
        'WS GANADERIA
        NEKAGIP.AppSettings.UriWSGanaderia = ConfigurationManager.AppSettings.Get("UriWSGanaderia")
        NEKAGIP.AppSettings.UserCredentialWSGanaderia = ConfigurationManager.AppSettings.Get("UserCredentialWSGanaderia")
        NEKAGIP.AppSettings.PassCredentialWSGanaderia = ConfigurationManager.AppSettings.Get("PassCredentialWSGanaderia")
        NEKAGIP.AppSettings.UsuWSGanaderia = ConfigurationManager.AppSettings.Get("UsuWSGanaderia")
        NEKAGIP.AppSettings.PassWSGanaderia = ConfigurationManager.AppSettings.Get("PassWSGanaderia")
        'WS GANADERIA
        NEKAGIP.AppSettings.UriWSGanaderiaR2 = ConfigurationManager.AppSettings.Get("UriWSGanaderiaR2")

        'WS MODERNIZACIONEXTERNA
        NEKAGIP.AppSettings.UriWSModernizacionExterna = ConfigurationManager.AppSettings.Get("UriWSModernizacionExterna")
        NEKAGIP.AppSettings.UserCredentialWsModernizacionExterna = ConfigurationManager.AppSettings.Get("UserCredentialWsModernizacionExterna")
        NEKAGIP.AppSettings.PassCredentialWSModernizacionExterna = ConfigurationManager.AppSettings.Get("PassCredentialWSModernizacionExterna")
        NEKAGIP.AppSettings.UsuWSModernizacionExterna = ConfigurationManager.AppSettings.Get("UsuWSModernizacionExterna")
        NEKAGIP.AppSettings.PassWSModernizacionExterna = ConfigurationManager.AppSettings.Get("PassWSModernizacionExterna")

        'URL MANUALES
        NEKAGIP.AppSettings.Manual_ES = ConfigurationManager.AppSettings.Get("Manual_ES")
        NEKAGIP.AppSettings.Manual_EU = ConfigurationManager.AppSettings.Get("Manual_EU")

        'IKT.RecAplNet.General.SessionIKT.Appcod = CStr(System.Configuration.ConfigurationManager.AppSettings("Appcod"))
        'SessionIKT.setValor("tipoAppCss", CInt(System.Configuration.ConfigurationManager.AppSettings("cssMaster")))
        'SessionIKT.Usucod = ""
        ''SessionIKT.Usucod = "HAZI"

    End Sub

    Sub Session_End(ByVal sender As Object, ByVal e As EventArgs)
        'FormsAuthentication.SignOut()
        'FormsAuthentication.RedirectToLoginPage()
        Dim eee
        eee = 1
    End Sub

    Private Sub Global_asax_AuthenticateRequest(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.AuthenticateRequest
        ' --- Cuando se pasa a pasarela depago se rellena esta cookie en pasarela.apx
        ' si no es nothin redireccionamos a nasdap.net
        ''If Not Request.Cookies("PAGADO") Is Nothing Then
        ''    Request.Cookies.Remove("PAGADO")
        ''    FormsAuthentication.RedirectToLoginPage()
        ''End If
        Dim eee
        eee = 1
    End Sub
End Class