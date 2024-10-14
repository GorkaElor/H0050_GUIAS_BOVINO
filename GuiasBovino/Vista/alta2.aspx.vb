Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class alta2
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)
        If IsNothing(SessionNekagip.GuideData) Then
            ' No hay guia creada redirigimos a la primera página del alta de guia.
            Response.Redirect("alta1.aspx", True)
        End If

    End Sub

    ''' <summary>
    ''' Carga los crotales que llegan en la variable de sesión.
    ''' Los datos que llegan habrá que añadir a los que ya exitan en
    ''' el objeto que guardamos en sesión ya que los datos necesarios
    ''' para la completa carga del objeto están dispersos entre las 3 pantallas
    ''' utilizadas para el alta de una guia.
    ''' </summary>
    ''' <returns>True si todo ha ido bien.</returns>
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function setCrotalesInValidarGuia(ByVal crotales As String) As Boolean

        'Dim guideData As SessionNekagip.Guide
        If IsNothing(SessionNekagip.GuideData) Then
            ' No hay guia creada redirigimos a la primera página del alta de guia.
            Return False
        Else
            ' Ya tenemos datos de la guia, por lo que los modificamos o añadimos nuevos
            'guideData = SessionNekagip.GuideData

            Dim jss As New System.Web.Script.Serialization.JavaScriptSerializer
            Dim lstCrotales = jss.Deserialize(Of List(Of String))(crotales)
            ' Si había algo en la lista de crotales lo sustituimos por los que nos pasan.
            SessionNekagip.GuideData.crotales = New List(Of String)
            SessionNekagip.GuideData.crotales = lstCrotales

            Return True

        End If
    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getEartagList() As String
        Try
            Dim crotales As WSOutput.CrotalesDisponiblesList = New WSController().CrotalesDisponibles(SessionNekagip.GuideData.explotacioninicial, SessionNekagip.GuideData.exploorigen, SessionNekagip.GuideData.explodestino, SessionNekagip.SelectedLanguage, SessionNekagip.GuideData.fechasalida)
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
            Dim ultimoSaneamiento As WSOutput.UltimoSaneamiento
            If SessionNekagip.GuideData.tipoguia = 1 Or SessionNekagip.GuideData.tipoguia = 2 Then
                'es una guia origen pasto
                ultimoSaneamiento = New WSController().UltimoSaneamiento(SessionNekagip.GuideData.explotacioninicial, crotal, SessionNekagip.SelectedLanguage)

            Else
                'esu na guia origen explo
                ultimoSaneamiento = SessionNekagip.ExplotacionSeleccionada.UltimoSaneamiento(crotal)
            End If

            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(ultimoSaneamiento)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getSelectedEartags() As String
        Try
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(SessionNekagip.GuideData.crotales)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Sub CancelGuide()
        Try
            SessionNekagip.GuideData = Nothing
            'Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(ultimoSaneamiento)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            'Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Sub

End Class