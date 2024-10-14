Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class alta3
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)
        If IsNothing(SessionNekagip.GuideData) Then
            ' No hay guia creada redirigimos a la primera página del alta de guia.
            Response.Redirect("alta1.aspx", True)
        Else
            Dim guideData As SessionNekagip.Guide = SessionNekagip.GuideData

            txtExpDestino.InnerText = guideData.explodestino
            txtExpDestinoNombre.InnerText = guideData.explodestinoNombre
            txtMunicipio.InnerText = guideData.explodestinoMunicipio
            txtProvincia.InnerText = guideData.explodestinoProvincia
            txtFechaSalida.InnerText = guideData.fechasalida
            txtFechaLlegada.InnerText = guideData.fechallegada
            txtComprador.InnerText = guideData.comprador
            txtHorallegada.InnerText = guideData.horallegada
            txtHoraSalida.InnerText = guideData.horasalida

            'comprador
            If SessionNekagip.GuideData.comprador = "" Then
                litComprador.Visible = False

            Else
                litComprador.Visible = True

            End If

            'ica
            If SessionNekagip.GuideData.explodestinomatadero = "true" Then
                ica.Visible = True
            Else
                ica.Visible = False
            End If

            If guideData.tipotransporte = "2" Then 'a pie
                tipotransporte.Style.Add("display", "")
                tipotransporte.InnerHtml = " <dl class='lista_resumen'><dt>A pie</dt></dt>"
                transportista.Style.Add("display", "none")
            Else 'en vehiculo
                'tranportista
                tipotransporte.Style.Add("display", "none")
                transportista.Style.Add("display", "")
                txtTransportistaNombre.InnerText = guideData.nombretransportista
                txtMatricula.InnerText = guideData.matricula
                txtTransportistaDNI.InnerText = guideData.niftransportista
                txtATES.InnerText = guideData.ates
            End If

            'crotales
            If guideData.crotales IsNot Nothing Then
                    For Each crotalItem As String In guideData.crotales
                        Dim li As HtmlGenericControl = New HtmlGenericControl("li")
                        li.InnerText = crotalItem
                        ulCrotales.Controls.Add(li)
                    Next
                End If
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


            Dim guide As WSOutput.ValidarGuia
            Dim respuestatipoguia As WSOutput.TipoGuia
            respuestatipoguia = New WSController().TipoGuia()
            Dim tipoguia As Integer = -1
            tipoguia = respuestatipoguia.message
            If tipoguia <> 0 And tipoguia <> 1 And tipoguia <> 2 And tipoguia <> 3 Then
                guide = New WSOutput.ValidarGuia
                guide.resultado = Nothing
            Else
                If tipoguia = 3 Then
                    guide = New WSController().ValidarGuia()
                Else
                    guide = New WSController().ValidarGuiaPastos()

                End If
                ' Si la guia se ha procesado la marcamos como finalizada
                SessionNekagip.ValidatedGuide = guide
                SessionNekagip.GuideData = Nothing

            End If

            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(guide)

        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function
    Public Shared Function esMonteAutorizado(ByVal explotacion As String, montesautorizados As WSOutput.ConsultaMontesAutorizadosList, explotacioninicial As String) As String
        Try
            ' Dim montesautorizados As WSOutput.ConsultaMontesAutorizadosList = New WSController().ConsultaMontesAutorizados(explotacion, SessionNekagip.SelectedLanguage)
            If explotacioninicial <> "" Then
                montesautorizados = New WSController().ConsultaMontesAutorizados(explotacioninicial, SessionNekagip.SelectedLanguage)
            End If

            'ordenar los montes por campana en descendente
            montesautorizados.lista.Sort(Function(y, z) y.campana > z.campana)
            Dim campana As String = ""
            campana = montesautorizados.lista(0).campana
            'elimino los montes autorizados que no sean de esta campaña
            montesautorizados.lista.RemoveAll(Function(z) z.campana <> campana)


            Dim monte As WSOutput.ConsultaMontesAutorizados = montesautorizados.lista.Find(Function(z) z.explotacion = explotacion)

            If monte Is Nothing Then
                Return "false"
            Else
                Return "true"
            End If
            'Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(explotations)
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

End Class