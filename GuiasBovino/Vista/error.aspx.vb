Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class _error
    Inherits CustomPage

    Protected Overrides Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        SessionNekagip.GuideData = Nothing
        SessionNekagip.ValidatedGuide = Nothing
        SessionNekagip.ICAData = Nothing
    End Sub

End Class