Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class ica1
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)
        ' Si existe la variable de sesión con los datos (sólo cuando se viene atrás desde
        ' la segunda pantalla de ica) mostramos los datos anteriormente introducidos.
        If Not IsNothing(SessionNekagip.GuideData) Then



            RADIOP1SI.Checked = SessionNekagip.ICAData.P1
            RADIOP1NO.Checked = Not CBool(SessionNekagip.ICAData.P1)


            RADIOP2SI.Checked = SessionNekagip.ICAData.P2(0)
            RADIOP2NO.Checked = Not CBool(SessionNekagip.ICAData.P2(0))


            p21.Value = SessionNekagip.ICAData.P2(1)
            t11.Value = SessionNekagip.ICAData.T1(0).ToString
            t12.Value = SessionNekagip.ICAData.T1(1).ToString
            t13.Value = SessionNekagip.ICAData.T1(2).ToString
            t14.Value = SessionNekagip.ICAData.T1(3).ToString
            t15.Value = SessionNekagip.ICAData.T1(4).ToString

            t21.Value = SessionNekagip.ICAData.T2(0).ToString
            t22.Value = SessionNekagip.ICAData.T2(1).ToString
            t23.Value = SessionNekagip.ICAData.T2(2).ToString
            t24.Value = SessionNekagip.ICAData.T2(3).ToString
            t25.Value = SessionNekagip.ICAData.T2(4).ToString


        Else
            'nombre.Value = Me.LiteralesPage("50312")
            'municipio.Value = Me.LiteralesPage("50312")
            'provincia.Value = Me.LiteralesPage("50312")
        End If


    End Sub

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getCarrierList(ByVal nif As String, ByVal nombre As String,
                                          ByVal matricula As String, ByVal ates As String) As String
        Try
            Dim carriers As WSOutput.BuscarTransportistaList = New WSController().BuscarTransportista(nif, nombre, matricula,
                                                                                                      ates, SessionNekagip.SelectedLanguage)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(carriers)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    '<WebMethod()>
    '<ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    'Public Shared Function getExpList(ByVal explotacion As String, ByVal denominacion As String,
    '                                  ByVal muncod As String, ByVal thcod As String, ByVal matadero As String) As String
    '    Try
    '        Dim explotations As WSOutput.BuscarExplotacionList = New WSController().BuscarExplotacion(explotacion, denominacion, muncod,
    '                                                                                                  thcod, matadero, SessionNekagip.SelectedLanguage)
    '        Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(explotations)
    '    Catch exc As Exception
    '        Dim res As Common.Errors = New Common.Errors
    '        res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
    '        Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
    '    End Try

    'End Function

    ''' <summary>
    ''' Carga los datos que llegan en la variable de sesión.
    ''' Los datos que llegan habrá que añadir a los que ya exitan en
    ''' el objeto que guardamos en sesión ya que los datos necesarios
    ''' para la completa carga del objeto están dispersos entre las 2 pantallas
    ''' utilizadas para el alta de una guia.
    ''' </summary>
    ''' <param name="p1"></param>
    ''' <param name="p2"></param>
    ''' <param name="p21"></param>
    ''' <param name="t11"></param>
    ''' <param name="t12"></param>
    ''' <param name="t13"></param>
    ''' <param name="t14"></param>
    ''' <param name="t15"></param>
    ''' <param name="t21"></param>
    ''' <param name="t22"></param>
    ''' <param name="t23"></param>
    ''' <param name="t24"></param>
    ''' <param name="t25"></param>
    ''' <returns>True si todo ha ido bien.</returns>
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function setMainValuesICA1(ByVal p1 As String, ByVal p2 As String, ByVal p21 As String,
                                                      ByVal t11 As String, ByVal t12 As String, t13 As String, t14 As String, t15 As String,
                                                      ByVal t21 As String, ByVal t22 As String, t23 As String, t24 As String, t25 As String
                                                     ) As Boolean

        Dim icaData As SessionNekagip.ICA

        icaData = SessionNekagip.ICAData
        icaData.P1 = p1
        icaData.P2 = New List(Of String)
        icaData.P2.Add(p2)
        icaData.P2.Add(p21)
        icaData.T1 = New List(Of String)
        icaData.T1.Add(t11)
        icaData.T1.Add(t12)
        icaData.T1.Add(t13)
        icaData.T1.Add(t14)
        icaData.T1.Add(t15)
        icaData.T2 = New List(Of String)
        icaData.T2.Add(t21)
        icaData.T2.Add(t22)
        icaData.T2.Add(t23)
        icaData.T2.Add(t24)
        icaData.T2.Add(t25)

        SessionNekagip.ICAData = icaData

        Return True
    End Function
End Class