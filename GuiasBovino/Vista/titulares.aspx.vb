﻿Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class titulares
    Inherits CustomPage

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getHolders() As String
        Try
            Dim holders As WSOutput.ConsultaTitularesList = SessionNekagip.ExplotacionSeleccionada.ConsultaTitulares()
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(holders)

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function

End Class