Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class ica2
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)
        ' Si existe la variable de sesión con los datos (sólo cuando se viene atrás desde
        ' la segunda pantalla de ica) mostramos los datos anteriormente introducidos.
        If Not IsNothing(SessionNekagip.GuideData) And Not IsNothing(SessionNekagip.ICAData) Then

            E1.Value = SessionNekagip.ICAData.E1


            RADIOE2SI.Checked = SessionNekagip.ICAData.E2(0)
            RADIOE2NO.Checked = Not CBool(SessionNekagip.ICAData.E2(0))
            E21.Value = SessionNekagip.ICAData.E2(1)

            RADIOE3SI.Checked = SessionNekagip.ICAData.E3(0)
            RADIOE3NO.Checked = Not CBool(SessionNekagip.ICAData.E3(0))
            E31.Value = SessionNekagip.ICAData.E3(1)

            RADIOE4SI.Checked = SessionNekagip.ICAData.E4(0)
            RADIOE4NO.Checked = Not CBool(SessionNekagip.ICAData.E4(0))
            E411.Value = SessionNekagip.ICAData.E4(1)
            E412.Value = SessionNekagip.ICAData.E4(2)
            E421.Value = SessionNekagip.ICAData.E4(3)
            E422.Value = SessionNekagip.ICAData.E4(4)

            RADIOE5SI.Checked = SessionNekagip.ICAData.E5(0)
            RADIOE5NO.Checked = Not CBool(SessionNekagip.ICAData.E5(0))
            E511.Value = SessionNekagip.ICAData.E5(1)
            E512.Value = SessionNekagip.ICAData.E5(2)
            E521.Value = SessionNekagip.ICAData.E5(3)
            E522.Value = SessionNekagip.ICAData.E5(4)

            RADIOE6SI.Checked = SessionNekagip.ICAData.E6(0)
            RADIOE6NO.Checked = Not CBool(SessionNekagip.ICAData.E6(0))
            E61.Value = SessionNekagip.ICAData.E6(1)

            RADIOE7SI.Checked = SessionNekagip.ICAData.E7(0)
            RADIOE7NO.Checked = Not CBool(SessionNekagip.ICAData.E7(0))
            E71.Value = SessionNekagip.ICAData.E7(1)

            E81.Checked = SessionNekagip.ICAData.E8(0)
            E82.Checked = SessionNekagip.ICAData.E8(1)
            E83.Checked = SessionNekagip.ICAData.E8(2)
            E84.Checked = SessionNekagip.ICAData.E8(3)
            E85.Checked = SessionNekagip.ICAData.E8(4)
            E86.Checked = SessionNekagip.ICAData.E8(5)
            E87.Checked = SessionNekagip.ICAData.E8(6)
            E88.Checked = SessionNekagip.ICAData.E8(7)
            E89.Checked = SessionNekagip.ICAData.E8(8)
            E810.Checked = SessionNekagip.ICAData.E8(9)

            E9.Value = SessionNekagip.ICAData.E9

            E101.Checked = SessionNekagip.ICAData.E10(0)
            E102.Checked = SessionNekagip.ICAData.E10(1)
            E103.Checked = SessionNekagip.ICAData.E10(2)
            E104.Checked = SessionNekagip.ICAData.E10(3)
        Else
            'nombre.Value = Me.LiteralesPage("50312")
            'municipio.Value = Me.LiteralesPage("50312")
            'provincia.Value = Me.LiteralesPage("50312")
        End If

    End Sub
    ''' <summary>
    ''' Valida la guia dada de alta y guardada en sesión
    ''' </summary>
    ''' <returns>Si resultado = 1 todo correcto. Si resultado= 2 error.</returns>
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function finalizeGuide() As String
        Try
            Dim guide As WSOutput.ValidarGuia = New WSController().ValidarGuia()
            ' Si la guia se ha procesado la marcamos como finalizada
            SessionNekagip.ValidatedGuide = guide
            ' Procesamos los datos del ICA

            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(guide)
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
            SessionNekagip.ValidatedGuide = Nothing
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
        End Try

    End Sub
    ''' <summary>
    ''' Carga los datos que llegan en la variable de sesión.
    ''' Los datos que llegan habrá que añadir a los que ya exitan en
    ''' el objeto que guardamos en sesión ya que los datos necesarios
    ''' para la completa carga del objeto están dispersos entre las 2 pantallas
    ''' utilizadas para el alta de ICA.
    ''' </summary>
    ''' <param name="e1"></param>
    ''' <param name="e2"></param>
    ''' <param name="e21"></param>
    ''' <param name="e3"></param>
    ''' <param name="e31"></param>
    ''' <param name="e4"></param>
    ''' <param name="e411"></param>
    ''' <param name="e412"></param>
    ''' <param name="e421"></param>
    ''' <param name="e422"></param>
    ''' <param name="e5"></param>
    ''' <param name="e511"></param>
    ''' <param name="e512"></param>
    ''' <param name="e521"></param>
    ''' <param name="e522"></param>
    ''' <param name="e6"></param>
    ''' <param name="e61"></param>
    ''' <param name="e7"></param>
    ''' <param name="e71"></param>
    ''' <param name="e81"></param>
    ''' <param name="e82"></param>
    ''' <param name="e83"></param>
    ''' <param name="e84"></param>
    ''' <param name="e85"></param>
    ''' <param name="e86"></param>
    ''' <param name="e87"></param>
    ''' <param name="e88"></param>
    ''' <param name="e89"></param>
    ''' <param name="e810"></param>
    ''' <param name="e9"></param>
    ''' <param name="e101"></param>
    ''' <param name="e102"></param>
    ''' <param name="e103"></param>
    ''' <param name="e104"></param>
    ''' <returns>True si todo ha ido bien.</returns>
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function setMainValuesICA2(ByVal e1 As String,
                                            ByVal e2 As String, ByVal e21 As String,
                                            ByVal e3 As String, ByVal e31 As String,
                                            ByVal e4 As String, ByVal e411 As String, ByVal e412 As String, e421 As String, e422 As String,
                                            ByVal e5 As String, ByVal e511 As String, ByVal e512 As String, e521 As String, e522 As String,
                                            ByVal e6 As String, ByVal e61 As String,
                                            ByVal e7 As String, ByVal e71 As String,
                                            ByVal e81 As String, ByVal e82 As String, ByVal e83 As String, ByVal e84 As String, ByVal e85 As String, ByVal e86 As String, ByVal e87 As String, ByVal e88 As String, ByVal e89 As String, ByVal e810 As String,
                                            ByVal e9 As String,
                                            ByVal e101 As String, ByVal e102 As String, ByVal e103 As String, ByVal e104 As String
) As Boolean

        Dim icaData As SessionNekagip.ICA
        If IsNothing(SessionNekagip.ICAData) Then
            '    ' No hay ica creada a la que añadir datos, por lo que creamos una nueva
            icaData = New SessionNekagip.ICA()

            icaData.usuws = AppSettings.UsuWSNekagip
            icaData.pasws = AppSettings.PassWSNekagip
            'Dim idioma As String = [Enum].GetName(GetType(Common.Language), Convert.ToInt32(SessionNekagip.SelectedLanguage))
            icaData.idioma = SessionNekagip.SelectedLanguage
        Else
            '    ' Ya tenemos datos de ICA, por lo que los modificamos o añadimos nuevos
            icaData = SessionNekagip.ICAData
        End If
        icaData.E1 = e1

        icaData.E2 = New List(Of String)
        icaData.E2.Add(e2)
        icaData.E2.Add(e21)

        icaData.E3 = New List(Of String)
        icaData.E3.Add(e3)
        icaData.E3.Add(e31)

        icaData.E4 = New List(Of String)
        icaData.E4.Add(e4)
        icaData.E4.Add(e411)
        icaData.E4.Add(e412)
        icaData.E4.Add(e421)
        icaData.E4.Add(e422)

        icaData.E5 = New List(Of String)
        icaData.E5.Add(e5)
        icaData.E5.Add(e511)
        icaData.E5.Add(e512)
        icaData.E5.Add(e521)
        icaData.E5.Add(e522)

        icaData.E6 = New List(Of String)
        icaData.E6.Add(e6)
        icaData.E6.Add(e61)

        icaData.E7 = New List(Of String)
        icaData.E7.Add(e7)
        icaData.E7.Add(e71)

        icaData.E8 = New List(Of String)
        icaData.E8.Add(e81)
        icaData.E8.Add(e82)
        icaData.E8.Add(e83)
        icaData.E8.Add(e84)
        icaData.E8.Add(e85)
        icaData.E8.Add(e86)
        icaData.E8.Add(e87)
        icaData.E8.Add(e88)
        icaData.E8.Add(e89)
        icaData.E8.Add(e810)

        icaData.E9 = e9

        icaData.E10 = New List(Of String)
        icaData.E10.Add(e101)
        icaData.E10.Add(e102)
        icaData.E10.Add(e103)
        icaData.E10.Add(e104)

        SessionNekagip.ICAData = icaData

        Dim output As WSOutput.NotificarICA = New WSController().NotificarICA(SessionNekagip.ICAData.P1, SessionNekagip.ICAData.P2, SessionNekagip.ICAData.T1, SessionNekagip.ICAData.T2, SessionNekagip.ICAData.E1, SessionNekagip.ICAData.E2, SessionNekagip.ICAData.E3, SessionNekagip.ICAData.E4, SessionNekagip.ICAData.E5, SessionNekagip.ICAData.E6, SessionNekagip.ICAData.E7, SessionNekagip.ICAData.E8, SessionNekagip.ICAData.E9, SessionNekagip.ICAData.E10, icaData.usuws, icaData.pasws, icaData.idioma)

        SessionNekagip.ICAData.icacod = output.icacod


        Return True
    End Function
End Class