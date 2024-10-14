Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class cambio
    Inherits CustomPage
    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)
        Try
            If Not IsNothing(SessionNekagip.ExplotacionSeleccionada) Then
                numero_exp.InnerText = SessionNekagip.ExplotacionSeleccionada.explotacion
            End If
        Catch exc As Exception
            errorRedirect("cambio.aspx")
        End Try
    End Sub



End Class