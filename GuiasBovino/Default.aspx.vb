

Imports NEKAGIP

Partial Class [Default]
    Inherits System.Web.UI.Page



    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        'Dim elqueenvia As Object
        'elqueenvia = sender
        'MsgBox(sender.Page.ToString)

        Session.Add("origen", "")
        Session.Add("devQueryString", Request("dev"))

        If Session("origen") = "" Then
            If Not Request("conusucod") Is Nothing And Not Request("nif") Is Nothing Or Not Request("nif") Is Nothing Then
                Session.Add("origen", "HAZILAN")
                Session.Add("nifQueryString", Request("nif"))
                Session.Add("conusucodQueryString", Request("conusucod"))
                Session.Add("idiomaQueryString", Request("idioma"))

            End If

            'miro si envian por GET --antees en lo viejo se enviaba por get
            If Session("origen") = "" And Not Request("strIDSesion") Is Nothing And Not Request("idPortal") Is Nothing Then
                Session.Add("origen", "GIPUZKOATARIA")
                'guardamos en variables de sesion los valores que `pueden enviarnos desde gipuzkoatataria strIDSesion, strIdPortal 
                Session.Add("strIDSesion", Request("strIDSesion"))
                Session.Add("idPortal", Request("idPortal"))

            End If

            'miro si envian por post
            If Session("origen") = "" And Not Request.Form("strIDSesion") Is Nothing And Not Request.Form("idPortal") Is Nothing Then
                Session.Add("origen", "GIPUZKOATARIA")
                'guardamos en variables de sesion los valores que `pueden enviarnos desde gipuzkoatataria strIDSesion, strIdPortal 
                Session.Add("strIDSesion", Request.Form("strIDSesion"))
                Session.Add("idPortal", Request.Form("idPortal"))

            End If

            If Session("origen") = "" And Not Request("dev") Is Nothing Then
                Session.Add("origen", "DESARROLLO")

            End If
        End If

        If Session("origen") = "" And Not Request("strIDSesion") Is Nothing And Not Request("idPortal") Is Nothing Then

        End If



        If ConfigurationManager.AppSettings("USUARIOPREFIJADO") <> "" Then
            If ConfigurationManager.AppSettings("USUARIOPREFIJADO") Then
                If ConfigurationManager.AppSettings("NIF") <> "" Then
                    Session.Add("origen", "DESARROLLO")
                    Session.Add("nifQueryString", ConfigurationManager.AppSettings("NIF"))
                    Session.Add("idiomaQueryString", "es")
                End If
            End If
        End If

        Select Case Session("origen")
            Case ""

                'redirigir a gipuzkoataria
                Dim url As NEKAGIP.WSOutput.UrlRedirecGipuzkoataria = New NEKAGIP.WSController().UrlRedirecGipuzkoataria()
                If url.resultado <> "" Then
                    FormsAuthentication.SetAuthCookie("", True)

                    Response.Redirect(url.resultado, False)
                End If

            Case "GIPUZKOATARIA"
                FormsAuthentication.SetAuthCookie("", False)

                Response.Redirect(FormsAuthentication.DefaultUrl & "?strIDSesion=" & Session("strIDSesion") & "&idPortal=" & Session("idPortal"), False)
            Case "DESARROLLO"
                FormsAuthentication.SetAuthCookie("", False)

                Response.Redirect(FormsAuthentication.DefaultUrl)
            Case "HAZILAN"
                FormsAuthentication.SetAuthCookie("", False)
                Dim resultado As NEKAGIP.WSOutput.RegistrarAcceso = New NEKAGIP.WSController().RegistrarAcceso("ABE1001", Request("nif"), "es")
                Response.Redirect(FormsAuthentication.DefaultUrl & "?IDIOMA=" & Session("idiomaQueryString") & "&CONUSUCOD=" & Session("conusucodQueryString") & "&nif=" & Session("nifQueryString"))

        End Select





    End Sub
    Private _urlservidor As String
    Public Property urlservidor() As String
        Get
            Return _urlservidor
        End Get
        Set(ByVal value As String)
            _urlservidor = value
        End Set
    End Property




    Private _idioma As String
    Public Property idioma() As String
        Get
            Return _idioma
        End Get
        Set(ByVal value As String)
            _idioma = value
        End Set
    End Property

End Class
