Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class listado_saneamientos
    Inherits CustomPage
    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)

        Try
            If Not IsNothing(SessionNekagip.ExplotacionSeleccionada) Then
                'CARGAMOS LOS COMBOS DE LA VENTANA EMERGENTE
                Dim itemVacio As ListItem = New ListItem("", "")

                '  DOL.DataSource = sexos.lista
                DOL.DataTextField = "doldes"
                DOL.DataValueField = "dolcod"
                DOL.DataBind()
                DOL.Items.Insert(0, itemVacio)
                DOL.Items.Insert(1, "+")

                CAL.DataTextField = "doldes"
                CAL.DataValueField = "dolcod"
                CAL.DataBind()
                CAL.Items.Insert(0, "+")
                CAL.Items.Insert(1, "N")




            End If
        Catch exc As Exception
            errorRedirect("explotacion.aspx")
        End Try


    End Sub

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getAssociatedFile(ByVal print As String) As String
        Try
            Dim type As String = Nothing
            If print = "excel" Then
                type = 2
            ElseIf print = "pdf" Then
                type = 1
            End If

            If type IsNot Nothing Then
                Dim implistado_saneamientos As WSOutput.ImprimirListadoSaneamientos = SessionNekagip.ExplotacionSeleccionada.ImprimirListadoSaneamientos(type)
                Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(implistado_saneamientos)
            Else
                Throw New Exception("No existe la opción de imprimir")
            End If

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function




    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getEartagList() As String
        Try
            Dim crotales As WSOutput.ConsultaSaneamientos = New WSController().ConsultaSaneamientos(SessionNekagip.ExplotacionSeleccionada.explotacion)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(crotales)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getUltimoSaneamiento(ByVal crotal As String) As String
        Try
            Dim ultimoSaneamiento As WSOutput.UltimoSaneamiento = SessionNekagip.ExplotacionSeleccionada.UltimoSaneamiento(crotal)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(ultimoSaneamiento)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function ConsultaDetalleSaneamiento(ByVal crotal As String) As String
        Try
            Dim saneamientos As WSOutput.ConsultaDetalleSaneamiento = New WSController().ConsultaDetalleSaneamiento(SessionNekagip.ExplotacionSeleccionada.explotacion, crotal)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(saneamientos)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function NotificarTuberculosis(ByVal fecha As String, crotal As String, P1 As String, P2 As String, DOL As String, CAL As String) As String
        Try
            Dim fechacastellano As String = fecha
            If SessionNekagip.SelectedLanguage = "eu" Then
                fechacastellano = Split(fecha, "/")(2) & "/" & Split(fecha, "/")(1) & "/" & Split(fecha, "/")(0)

            End If
            Dim saneamientos As WSOutput.NotificarTuberculosis = New WSController().NotificarTuberculosis(fechacastellano, crotal, P1, P2, DOL, CAL)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(saneamientos)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function
End Class