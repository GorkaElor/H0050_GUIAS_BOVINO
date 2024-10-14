Imports IKT.RecAplNet.CSS

Partial Public Class masterCSS
    Inherits System.Web.UI.Page

    Private _CSSManager As CssManager

    Public ReadOnly Property CssManager() As CssManager
        Get
            Return _CSSManager
        End Get
    End Property

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        _CSSManager = CssManagerFactory.getInstancia(Request.Params("tipoAppCss"))
    End Sub

End Class

