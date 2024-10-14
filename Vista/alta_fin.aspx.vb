Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services

Public Class alta_fin
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)
        If IsNothing(SessionNekagip.ValidatedGuide) Then
            ' No hay guia creada redirigimos a la primera página del alta de guia.
            Response.Redirect("alta1.aspx", True)
        Else
            If SessionNekagip.ValidatedGuide.resultado = 1 Then
                guia_incorrecta.Visible = False
                ws_messsage_ok.InnerHtml = SessionNekagip.ValidatedGuide.mensaje
                If SessionNekagip.ValidatedGuide.matadero.ToUpper = "FALSE" Then
                    doc_matadero.Visible = False
                End If
            Else
                guia_correcta.Visible = False
                ws_messsage_nok.InnerHtml = SessionNekagip.ValidatedGuide.mensaje

            End If
            SessionNekagip.GuideData = Nothing
            'SessionNekagip.ValidatedGuide = Nothing
        End If

    End Sub

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getAssociatedFile(ByVal print As String) As String
        Try
            Dim type As String = Nothing
            If print = "guia" Then
                type = 1
            ElseIf print = "matadero" Then
                type = 2
            End If

            If type IsNot Nothing Then
                Dim impGuide As WSOutput.ImprimirGuia = SessionNekagip.ValidatedGuide.ImprimirGuia(type)
                Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(impGuide)
            Else
                Throw New Exception("No existe la opción de imprimir")
            End If

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function

End Class