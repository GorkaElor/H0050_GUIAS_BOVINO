Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class censo
    Inherits CustomPage
    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)
        Dim resumen As WSOutput.ResumenCenso


        Try
            If Not IsNothing(SessionNekagip.ExplotacionSeleccionada) Then
                Dim datos As WSOutput.ConsultaExplotacion = SessionNekagip.ExplotacionSeleccionada.ConsultaExplotacion()
                'TODO: Mostrar de otra manera los valores Boolean
                resumen = New WSController().ConsultaResumenCenso(SessionNekagip.ExplotacionSeleccionada.explotacion, SessionNekagip.SelectedLanguage)
                h6.Value = resumen.h6
                h612.Value = resumen.h612
                h1224.Value = resumen.h1224
                h24.Value = resumen.h24
                hSum.Value = resumen.hSum

                m6.Value = resumen.m6
                m612.Value = resumen.m612
                m1224.Value = resumen.m1224
                m24.Value = resumen.m24
                mSum.Value = resumen.mSum

                total.Value = resumen.total



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
                Dim impCenso As WSOutput.ImprimirCensoActual = SessionNekagip.ExplotacionSeleccionada.ImprimirCensoActual(type)
                Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(impCenso)
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
    Public Shared Function ImprimirDIB(ByVal crotal As String) As String
        Try
            Dim doc As WSOutput.ImprimirDIB = New WSController().ImprimirDIB(crotal, "3", SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(doc)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getResumen() As String
        Dim resumen As WSOutput.ResumenCenso
        Try
            resumen = New WSController().ConsultaResumenCenso(SessionNekagip.ExplotacionSeleccionada.explotacion, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(resumen)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(resumen)
        End Try

    End Function
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getEartagList() As String
        Try
            Dim crotales As WSOutput.CrotalesDisponiblesList = New WSController().ConsultaCensoActual(SessionNekagip.ExplotacionSeleccionada.explotacion, SessionNekagip.SelectedLanguage)
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

End Class