Imports System.Net
Imports System.Text
Imports System.IO

Public Class WSRequest

    Private uriWSNekagip As String = AppSettings.UriWSNekagip
    Private userCredentialWsNekagip As String = AppSettings.UserCredentialWsNekagip
    Private passCredentialWSNekagip As String = AppSettings.PassCredentialWSNekagip
    Private uriWSGanaderia As String = AppSettings.UriWSGanaderia
    Private uriWSGanaderiaR2 As String = AppSettings.UriWSGanaderiaR2
    Private userCredentialWSGanaderia As String = AppSettings.UserCredentialWSGanaderia
    Private passCredentialWSGanaderia As String = AppSettings.PassCredentialWSGanaderia
    Private uriWSModernizacionExterna As String = AppSettings.UriWSModernizacionExterna
    Private userCredentialWSModernizacionExterna As String = AppSettings.UserCredentialWsModernizacionExterna
    Private passCredentialWSModernizacionExterna As String = AppSettings.PassCredentialWSModernizacionExterna

    ReadOnly Property WSGet(ByVal WSType As String, ByVal WSMethod As String, ByVal WSInputJson As Object, ByVal method As String, Optional ByVal dev As Boolean = True) As String
        Get
            If SessionNekagip.devMode = "true" Or (SessionNekagip.devMode Is Nothing And dev) Then
                'If dev Then
                'If True Then
                Return Mock(WSType, WSMethod, WSInputJson)
            Else
                Return requestWS(WSType, WSMethod, WSInputJson, method)
            End If
        End Get
    End Property

    Private Function requestWS(ByVal WSType As String, ByVal WSMethod As String, ByVal WSInput As Object, ByVal method As String) As String
        Try
            Dim uriWS As String
            Dim userCredentials As String
            Dim passCredentials As String
            If WSType = "WSNekagip" Then
                uriWS = uriWSNekagip
                userCredentials = userCredentialWsNekagip
                passCredentials = passCredentialWSNekagip
            ElseIf WSType = "WSGanaderia" Then
                uriWS = uriWSGanaderia
                userCredentials = userCredentialWSGanaderia
                passCredentials = passCredentialWSGanaderia
                'Throw New System.Exception("Se necesitan datos para WSGanaderia")
            ElseIf WSType = "WSGanaderiaR2" Then
                uriWS = uriWSGanaderiaR2
                userCredentials = userCredentialWSGanaderia
                passCredentials = passCredentialWSGanaderia
            ElseIf WSType = "WSModernizacionExterna" Then
                uriWS = uriWSModernizacionExterna
                userCredentials = userCredentialWSModernizacionExterna
                passCredentials = passCredentialWSModernizacionExterna

            Else
                Throw New System.Exception("El WS indicado es erroneo")
            End If

            Dim url As String = uriWS + "/" + WSMethod

            If method Is "GET" Then
                Dim params As String = ""
                Dim objType As Type = WSInput.GetType()
                Dim info = objType.GetProperties()
                For i = 0 To info.Length - 1
                    Dim PropName As String = info(i).Name
                    Dim pInfo As System.Reflection.PropertyInfo = objType.GetProperty(PropName)
                    Dim PropValue As Object = pInfo.GetValue(WSInput, Reflection.BindingFlags.GetProperty, Nothing, Nothing, Nothing)
                    If PropValue Is Nothing Then
                        PropValue = ""
                    End If
                    If i = 0 Then
                        params += "?"
                    Else
                        params += "&"
                    End If
                    params += PropName + "=" + PropValue
                Next

                url += params
            End If

            ' Create a request using a URL that can receive a post. 
            Dim request As WebRequest = WebRequest.Create(url)
            ' Set the Method property of the request.
            request.Method = method
            ' If required by the server, set the credentials.
            Dim mycache As CredentialCache = New CredentialCache()
            mycache.Add(New Uri(url), "Basic", New NetworkCredential(userCredentials, passCredentials))
            request.Credentials = mycache

            If method Is "POST" Then
                ' Create POST data and convert it to a byte array.
                Dim postData As String = New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(WSInput)
                Dim byteArray As Byte() = Encoding.UTF8.GetBytes(postData)
                ' Set the ContentType property of the WebRequest.
                request.ContentType = "application/json"
                ' Set the ContentLength property of the WebRequest.
                request.ContentLength = byteArray.Length
                ' Get the request stream.
                Dim dataStream As Stream = request.GetRequestStream()
                ' Write the data to the request stream.
                dataStream.Write(byteArray, 0, byteArray.Length)
                ' Close the Stream object.
                dataStream.Close()
            End If

            ' Get the response.
            Dim response As WebResponse = request.GetResponse()
            ' Display the status.
            Console.WriteLine(CType(response, HttpWebResponse).StatusDescription)
            ' Get the stream containing content returned by the server.
            Dim dataStream1 As Stream = response.GetResponseStream()
            ' Open the stream using a StreamReader for easy access.
            Dim reader As New StreamReader(dataStream1)
            ' Read the content.
            Dim responseFromServer As String = reader.ReadToEnd()
            ' Display the content.
            Console.WriteLine(responseFromServer)
            ' Clean up the streams.
            reader.Close()
            dataStream1.Close()
            response.Close()
            Return responseFromServer
        Catch exc As Exception
            'TODO: Si no se autentica ERROR
            Throw exc
        End Try
    End Function

    Private Function Mock(ByVal WSType As String, ByVal WSMethod As String, ByVal WSInputJson As Object) As String
        Dim res As String
        Dim mockClass As WSMock = New WSMock()
        If WSType = "WSNekagip" Then
            If WSMethod = "Identificacion" Then
                res = mockClass.Identificacion(WSInputJson)
            ElseIf WSMethod = "ConfiguracionElemento" Then
                res = mockClass.ConfiguracionElemento(WSInputJson)
            ElseIf WSMethod = "Autentificacion" Then
                res = mockClass.Autentificacion(WSInputJson)
            End If
        ElseIf WSType = "WSModernizacionExterna" Then
            If WSMethod = "Permisos" Then
                res = mockClass.Permisos(WSInputJson)
                'ElseIf WSMethod = "BuscarExplotacion" Then
                '    res = mockClass.BuscarExplotacion(WSInputJson)
            End If

        ElseIf WSType = "WSGanaderia" Then
            If WSMethod = "Literales" Then
                res = mockClass.Literales(WSInputJson)
            ElseIf WSMethod = "BuscarExplotacion" Then
                res = mockClass.BuscarExplotacion(WSInputJson)
            ElseIf WSMethod = "BuscarTransportista" Then
                res = mockClass.BuscarTransportista(WSInputJson)
            ElseIf WSMethod = "BuscarExplotacionesTrabajo" Then
                res = mockClass.BuscarExplotacionesTrabajo(WSInputJson)
            ElseIf WSMethod = "CrotalesDisponibles" Then
                res = mockClass.CrotalesDisponibles(WSInputJson)
            ElseIf WSMethod = "ConsultaExplotacion" Then
                res = mockClass.ConsultaExplotacion(WSInputJson)
            ElseIf WSMethod = "ConsultaTitulares" Then
                res = mockClass.ConsultaTitulares(WSInputJson)
            ElseIf WSMethod = "BuscarHistorialDeTramites" Then
                res = mockClass.ConsultaHistorialDeTramites(WSInputJson)
            ElseIf WSMethod = "ImprimirCensoAUnaFecha" Then
                res = mockClass.ImprimirCensoAUnaFecha(WSInputJson)
            ElseIf WSMethod = "ImprimirGuia" Then
                res = mockClass.ImprimirGuia(WSInputJson)
            ElseIf WSMethod = "ConsultaAsociaciones" Then
                res = mockClass.ConsultaAsociaciones(WSInputJson)
            ElseIf WSMethod = "ConsultaCalificacion" Then
                res = mockClass.ConsultaCalificacion(WSInputJson)
            ElseIf WSMethod = "ImprimirCensoActual" Then
                res = mockClass.ImprimirCensoActual(WSInputJson)
            ElseIf WSMethod = "ConsultaLibroDeRegistro" Then
                res = mockClass.ConsultaLibroDeRegistro(WSInputJson)
            ElseIf WSMethod = "ImprimirLibroDeRegistro" Then
                res = mockClass.ImprimirLibroDeRegistro(WSInputJson)
            ElseIf WSMethod = "ConsultaGuias" Then
                res = mockClass.ConsultaGuias(WSInputJson)
            ElseIf WSMethod = "ConsultaGuiasCrotales" Then
                res = mockClass.ConsultaGuiasCrotales(WSInputJson)
            ElseIf WSMethod = "ValidarGuia" Then
                res = mockClass.ValidarGuia(WSInputJson)
            ElseIf WSMethod = "UltimoSaneamiento" Then
                res = mockClass.UltimoSaneamiento(WSInputJson)
            ElseIf WSMethod = "ConsultaProvincias" Then
                res = mockClass.ConsultaProvincias(WSInputJson)
            ElseIf WSMethod = "ConsultaMunicipios" Then
                res = mockClass.ConsultaMunicipios(WSInputJson)
            ElseIf WSMethod = "ImprimirHistorialDeTramite" Then
                res = mockClass.ImprimirHistorialDeTramite(WSInputJson)
            ElseIf WSMethod = "AnularGuia" Then
                res = mockClass.AnularGuia(WSInputJson)
            ElseIf WSMethod = "ConsultaDatosAcceso" Then
                res = mockClass.ConsultaDatosAcceso(WSInputJson)
            ElseIf WSMethod = "ConsultaTitularPricipal" Then
                res = mockClass.ConsultaTitularPrincipal(WSInputJson)
            ElseIf WSMethod = "BuscarCrotalGuia" Then
                res = mockClass.BuscarCrotalGuia(WSInputJson)
            ElseIf WSMethod = "ConsultaAutocrotalacion" Then
                res = mockClass.ConsultaAutocrotalacion(WSInputJson)
            ElseIf WSMethod = "PermisoAutocrotalacion" Then
                res = mockClass.PermisoAutocrotalacion(WSInputJson)
            ElseIf WSMethod = "SolicitarCrotales" Then
                res = mockClass.SolicitarCrotales(WSInputJson)
            ElseIf WSMethod = "ConsultaSolicitudesCrotales" Then
                res = mockClass.ConsultaSolicitudesCrotales(WSInputJson)
            ElseIf WSMethod = "SolicitudCrotales" Then
                res = mockClass.SolicitudCrotales(WSInputJson)
            ElseIf WSMethod = "ImprimirAlbaranSolicitudCrotales" Then
                res = mockClass.ImprimirAlbaranSolicitudCrotales(WSInputJson)
            ElseIf WSMethod = "ConsultaCrotalesDisponibles" Then
                res = mockClass.ConsultaCrotalesDisponibles(WSInputJson)
            ElseIf WSMethod = "CrotalesPerdidas" Then
                res = mockClass.CrotalesPerdidas(WSInputJson)
            ElseIf WSMethod = "NotificarPerdida" Then
                res = mockClass.NotificarPerdida(WSInputJson)
            ElseIf WSMethod = "ImprimirJustificantePerdidaCrotal" Then
                res = mockClass.ImprimirJustificantePerdidaCrotal(WSInputJson)
            ElseIf WSMethod = "ConsultaNotificaciones" Then
                res = mockClass.ConsultaNotificaciones(WSInputJson)
            ElseIf WSMethod = "ConsultaRazas" Then
                res = mockClass.ConsultaRazas(WSInputJson)
            ElseIf WSMethod = "ConsultaSexos" Then
                res = mockClass.ConsultaSexos(WSInputJson)
            ElseIf WSMethod = "ConsultaAptitudes" Then
                res = mockClass.ConsultaAptitudes(WSInputJson)
            ElseIf WSMethod = "ConsultaFacilidadParto" Then
                res = mockClass.ConsultaFacilidadParto(WSInputJson)
            ElseIf WSMethod = "NotificarNacimiento" Then
                res = mockClass.NotificarNacimiento(WSInputJson)
            ElseIf WSMethod = "ConsultaCensoActual" Then
                res = mockClass.ConsultaCensoActual(WSInputJson)
            ElseIf WSMethod = "ConsultaNacimientos" Then
                res = mockClass.ConsultaNacimientos(WSInputJson)
            ElseIf WSMethod = "ConsultaMuertes" Then
                res = mockClass.ConsultaMuertes(WSInputJson)
            ElseIf WSMethod = "Muerte" Then
                res = mockClass.Muerte(WSInputJson)
            ElseIf WSMethod = "Nacimiento" Then
                res = mockClass.Nacimiento(WSInputJson)
            ElseIf WSMethod = "ImprimirDIB" Then
                res = mockClass.ImprimirDIB(WSInputJson)
            ElseIf WSMethod = "ImprimirJustificanteMuerte" Then
                res = mockClass.ImprimirJustificanteMuerte(WSInputJson)
            ElseIf WSMethod = "ConsultaGuiasEntrada" Then
                res = mockClass.ConsultaGuiasEntrada(WSInputJson)
            ElseIf WSMethod = "GuiaEntrada" Then
                res = mockClass.GuiaEntrada(WSInputJson)
            ElseIf WSMethod = "BuscarCrotalGuiaConfirmada" Then
                res = mockClass.BuscarCrotalGuiaEntrada(WSInputJson)
            ElseIf WSMethod = "NotificarMuerte" Then
                res = mockClass.NotificarMuerte(WSInputJson)
            ElseIf WSMethod = "ConsultaResesVivas" Then
                res = mockClass.ConsultaResesVivas(WSInputJson)
            ElseIf WSMethod = "CrotalesGuiaConfirmada" Then
                res = mockClass.CrotalesGuiaConfirmada(WSInputJson)
            ElseIf WSMethod = "ConfirmarGuia" Then
                res = mockClass.ConfirmarGuia(WSInputJson)
            ElseIf WSMethod = "RechazarGuia" Then
                res = mockClass.RechazarGuia(WSInputJson)
            ElseIf WSMethod = "ConsultaEstadoNotificaciones" Then
                res = mockClass.ConsultaEstadoNotificaciones(WSInputJson)
            ElseIf WSMethod = "NotificacionVista" Then
                res = mockClass.NotificacionVista(WSInputJson)
            ElseIf WSMethod = "NotificacionBorrar" Then
                res = mockClass.NotificacionBorrar(WSInputJson)
            ElseIf WSMethod = "PrecargaRazaAptitud" Then
                res = mockClass.PrecargaRazaAptitud(WSInputJson)
            ElseIf WSMethod = "ConsultaTipoParto" Then
                res = mockClass.ConsultaTipoParto(WSInputJson)
            ElseIf WSMethod = "ConsultaTipoInseminacion" Then
                res = mockClass.ConsultaTipoInseminacion(WSInputJson)
            ElseIf WSMethod = "ObtenerMadre" Then
                res = mockClass.ObtenerMadre(WSInputJson)
            ElseIf WSMethod = "ObtenerMadreET" Then
                res = mockClass.ObtenerMadreET(WSInputJson)
            ElseIf WSMethod = "ObtenerPadre" Then
                res = mockClass.ObtenerPadre(WSInputJson)
            ElseIf WSMethod = "ObtenerCrotalesSinAsignar" Then
                res = mockClass.ObtenerCrotalesSinAsignar(WSInputJson)
            ElseIf WSMethod = "ImprimirAltaEntreFechas" Then
                res = mockClass.ImprimirAltasEntreFechas(WSInputJson)
            ElseIf WSMethod = "ImprimirBajasEntreFechas" Then
                res = mockClass.ImprimirBajasEntreFechas(WSInputJson)
            ElseIf WSMethod = "ConsultaTipoTramite" Then
                res = mockClass.ConsultaTipoTramite(WSInputJson)
            ElseIf WSMethod = "ConsultaResumenCenso" Then
                res = mockClass.ConsultaResumenCenso(WSInputJson)
            ElseIf WSMethod = "ConsultaSerieCrotales" Then
                res = mockClass.ConsultaSerieCrotales(WSInputJson)
            ElseIf WSMethod = "NotificarSerieCrotales" Then
                res = mockClass.NotificarSerieCrotales(WSInputJson)
            ElseIf WSMethod = "ConsultaOCAs" Then
                res = mockClass.ConsultaOCAs(WSInputJson)
            ElseIf WSMethod = "InformeBvd" Then
                res = mockClass.InformeBvd(WSInputJson)
            End If
            'H0033 metodo InformeBvd
        End If
        Return res
    End Function


End Class
