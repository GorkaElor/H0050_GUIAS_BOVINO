Imports System.Collections.Generic
Imports System.Web.Script.Serialization

Public Class WSController

    Private appCod As String = AppSettings.AppCod
    Private usuWSNekagip As String = AppSettings.UsuWSNekagip
    Private passWSNekagip As String = AppSettings.PassWSNekagip
    Private usuWSGanaderia As String = AppSettings.UsuWSGanaderia
    Private passWSGanaderia As String = AppSettings.PassWSGanaderia
    Private usuWSModernizacionExterna As String = AppSettings.UsuWSModernizacionExterna
    Private passWSModernizacionExterna As String = AppSettings.PassWSModernizacionExterna


    ReadOnly Property Identificacion(ByVal nif As String, ByVal pass As String, ByVal email As String, ByVal tfno As String,
                                     ByVal idioma As String)
        Get
            Try
                'Dim idioma As String = [Enum].GetName(GetType(Common.Language), idiomaLiteral)
                Dim WSInputJson As WSInput.Identificacion = New WSInput.Identificacion(nif, pass, email, tfno, usuWSNekagip, passWSNekagip, idioma)
                Dim output = New WSRequest().WSGet("WSNekagip", "Identificacion", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.Identificacion = New JavaScriptSerializer().Deserialize(Of WSOutput.Identificacion)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConfiguracionElemento(ByVal token As String, ByVal elemento As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConfiguracionElemento = New WSInput.ConfiguracionElemento(token, elemento, idioma)
                Dim output = New WSRequest().WSGet("WSNekagip", "ConfiguracionElemento", WSInputJson, "POST")
                Dim outputObject As WSOutput.ConfiguracionElemento = New JavaScriptSerializer().Deserialize(Of WSOutput.ConfiguracionElemento)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property UrlRedirecGipuzkoataria()
        Get
            Try
                Dim WSInputJson As WSInput.UrlRedirecGipuzkoataria = New WSInput.UrlRedirecGipuzkoataria(appCod, usuWSModernizacionExterna, passWSModernizacionExterna, SessionNekagip.SelectedLanguage)
                Dim output = New WSRequest().WSGet("WSModernizacionExterna", "ObtenerUrlRedirecGipuzkoataria", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.UrlRedirecGipuzkoataria = New JavaScriptSerializer().Deserialize(Of WSOutput.UrlRedirecGipuzkoataria)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property Permisos(aplicacion As String, usuario As String, idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.Permisos = New WSInput.Permisos(aplicacion, usuario, usuWSModernizacionExterna, passWSModernizacionExterna, idioma)
                Dim output = New WSRequest().WSGet("WSModernizacionExterna", "Permisos", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.Permisos = New JavaScriptSerializer().Deserialize(Of WSOutput.Permisos)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property SesionActiva(strIDSesion As String, idPortal As String, strIPAdd As String, idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.SesionActiva = New WSInput.SesionActiva(appCod, strIDSesion, idPortal, strIPAdd, usuWSModernizacionExterna, passWSModernizacionExterna, idioma)
                Dim output = New WSRequest().WSGet("WSModernizacionExterna", "SesionActiva", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.SesionActiva = New JavaScriptSerializer().Deserialize(Of WSOutput.SesionActiva)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property RegistrarAcceso(aplicacion As String, nif As String, idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.RegistrarAcceso = New WSInput.RegistrarAcceso(aplicacion, nif, usuWSModernizacionExterna, passWSModernizacionExterna, idioma)
                Dim output = New WSRequest().WSGet("WSModernizacionExterna", "RegistrarAcceso", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.RegistrarAcceso = New JavaScriptSerializer().Deserialize(Of WSOutput.RegistrarAcceso)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property Autentificacion(ByVal identificacion As String, ByVal pass As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.Autentificacion = New WSInput.Autentificacion(identificacion, pass, appCod, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSNekagip", "Autentificacion", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.Autentificacion = New JavaScriptSerializer().Deserialize(Of WSOutput.Autentificacion)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property Literales(ByVal grupo As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.Literales = New WSInput.Literales(appCod, grupo, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "Literales", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.LiteralesList = New JavaScriptSerializer().Deserialize(Of WSOutput.LiteralesList)(output)

                Dim res = New Dictionary(Of String, String)
                For Each item As WSOutput.Literales In outputObject.lista
                    res.Add(item.codigo, item.literal)
                Next
                Return res
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property BuscarExplotacion(ByVal explotacioninicial As String, ByVal explotacion As String, ByVal denominacion As String, ByVal muncod As String, ByVal thcod As String,
                                        ByVal matadero As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.BuscarExplotacion = New WSInput.BuscarExplotacion(explotacioninicial, explotacion.ToUpper, denominacion.ToUpper, muncod,
                                                                                      thcod, matadero, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderiaR2", "BuscarExplotacion", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.BuscarExplotacionList = New JavaScriptSerializer().Deserialize(Of WSOutput.BuscarExplotacionList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property BuscarTransportista(ByVal nif As String, ByVal nombre As String, ByVal matricula As String,
                                          ByVal ates As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.BuscarTransportista = New WSInput.BuscarTransportista(nif.ToUpper, nombre.ToUpper, matricula.ToUpper, ates,
                                                                                                 usuWSGanaderia, passWSGanaderia,
                                                                                                 idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "BuscarTransportista", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.BuscarTransportistaList = New JavaScriptSerializer().Deserialize(Of WSOutput.BuscarTransportistaList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property BuscarExplotacionesTrabajo(ByVal usuario As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.BuscarExplotacionesTrabajo = New WSInput.BuscarExplotacionesTrabajo(usuario, usuWSGanaderia, passWSGanaderia,
                                                                                                            idioma)
                Dim output = New WSRequest().WSGet("WSGanaderiaR2", "BuscarExplotacionesTrabajo", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.BuscarExplotacionesTrabajoList = New JavaScriptSerializer().Deserialize(Of WSOutput.BuscarExplotacionesTrabajoList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaExplotacion(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaExplotacion = New WSInput.ConsultaExplotacion(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaExplotacion", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaExplotacion = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaExplotacion)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaTitulares(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaTitulares = New WSInput.ConsultaTitulares(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaTitulares", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaTitularesList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaTitularesList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaHistorialDeTramites(ByVal explotacion As String, ByVal usuario As String,
                                                  ByVal tipotramite As String, ByVal fechadesde As String, ByVal fechahasta As String, numtramites As String,
                                                  ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaHistorialDeTramites = New WSInput.ConsultaHistorialDeTramites(explotacion, usuario,
                                                                                                          tipotramite, fechadesde,
                                                                                                                 fechahasta, numtramites, usuWSGanaderia,
                                                                                                             passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "BuscarHistorialDeTramites", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaHistorialDeTramitesList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaHistorialDeTramitesList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ImprimirHistorialDeTramite(ByVal identificador As String, ByVal tipodocumento As String, ByVal formato As String,
                                             ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ImprimirHistorialDeTramite = New WSInput.ImprimirHistorialDeTramite(identificador, tipodocumento,
                                                                                                               formato,
                                                                                                               usuWSGanaderia, passWSGanaderia,
                                                                                                               idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirHistorialDeTramite", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ImprimirHistorialDeTramite = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirHistorialDeTramite)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ImprimirCensoAUnaFecha(ByVal explotacion As String, ByVal fecha As String, ByVal tipo As String,
                                             ByVal usuario As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ImprimirCensoAUnaFecha = New WSInput.ImprimirCensoAUnaFecha(explotacion, fecha, tipo,
                                                                                                   usuario, usuWSGanaderia, passWSGanaderia,
                                                                                                       idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirCensoAUnaFecha", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ImprimirCensoAUnaFecha = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirCensoAUnaFecha)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ImprimirGuia(ByVal guia As String, ByVal tipo As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ImprimirGuia = New WSInput.ImprimirGuia(guia, tipo, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirGuia", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ImprimirGuia = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirGuia)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaAsociaciones(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaAsociaciones = New WSInput.ConsultaAsociaciones(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaAsociaciones", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaAsociacionesList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaAsociacionesList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaCalificacion(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaCalificacion = New WSInput.ConsultaCalificacion(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaCalificacion", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaCalificacionList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaCalificacionList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaMontesAutorizados(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaMontesAutorizados = New WSInput.ConsultaMontesAutorizados(explotacion, SessionNekagip.GAuserId.nif, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderiaR2", "ConsultaMontesAutorizados", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaMontesAutorizadosList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaMontesAutorizadosList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ImprimirListadoSaneamientos(ByVal explotacion As String, ByVal tipo As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ImprimirListadoSaneamientos = New WSInput.ImprimirListadoSaneamientos(explotacion, tipo, SessionNekagip.GAuserId.nif, usuWSGanaderia, passWSGanaderia,
                                                                                                 idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirListadoSaneamientos", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ImprimirListadoSaneamientos = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirListadoSaneamientos)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property ImprimirCensoActual(ByVal explotacion As String, ByVal usuario As String, ByVal tipo As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ImprimirCensoActual = New WSInput.ImprimirCensoActual(explotacion, tipo, usuario, usuWSGanaderia, passWSGanaderia,
                                                                                                 idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirCensoActual", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ImprimirCensoActual = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirCensoActual)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaLibroDeRegistro(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                'Dim idioma As String = [Enum].GetName(GetType(Common.Language), idiomaLiteral)
                'Dim WSInputJson As String = "{""explotacion"":""" & explotacion & """, ""idioma"":""" & idioma & """,
                '                           ""usuws"":""" & usuWSGanaderia & """, ""passws"":""" & passWSGanaderia & """}"
                Dim WSInputJson As WSInput.ConsultaLibroDeRegistro = New WSInput.ConsultaLibroDeRegistro(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaLibroDeRegistro", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaLibroDeRegistroList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaLibroDeRegistroList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ImprimirLibroDeRegistro(ByVal explotacion As String, ByVal campana As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ImprimirLibroDeRegistro = New WSInput.ImprimirLibroDeRegistro(explotacion, campana,
                                                                                                         usuWSGanaderia, passWSGanaderia,
                                                                                                         idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirLibroDeRegistro", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ImprimirLibroDeRegistro = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirLibroDeRegistro)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaGuias(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaGuias = New WSInput.ConsultaGuias(explotacion, idioma, usuWSGanaderia, passWSGanaderia)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaGuias", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaGuiasList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaGuiasList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaGuiasCrotales(ByVal guia As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaGuiasCrotales = New WSInput.ConsultaGuiasCrotales(guia, idioma, usuWSGanaderia, passWSGanaderia)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaGuiasCrotales", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaGuiasCrotalesList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaGuiasCrotalesList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaGuiasCrotalesDescolgados(ByVal guia As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaGuiasCrotales = New WSInput.ConsultaGuiasCrotales(guia, idioma, usuWSGanaderia, passWSGanaderia)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaGuiasCrotalesDescolgados", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaGuiasCrotalesList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaGuiasCrotalesList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property TipoGuia()
        Get
            Try
                Dim WSInputJson As WSInput.TipoGuia = New WSInput.TipoGuia(SessionNekagip.GuideData.exploorigen,
                                                                                           SessionNekagip.GuideData.explodestino,
                                                                                           usuWSGanaderia,
                                                                                           passWSGanaderia,
                                                                                           SessionNekagip.SelectedLanguage)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderiaR2", "TipoGuia", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.TipoGuia = New JavaScriptSerializer().Deserialize(Of WSOutput.TipoGuia)(output)
                ''cargamos en VARIABLES DE SESSION
                SessionNekagip.GuideData.tipoguia = outputObject.message

                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property ValidarGuia()
        Get
            Try
                Dim WSInputJson As WSInput.ValidarGuia = New WSInput.ValidarGuia(SessionNekagip.GuideData.exploorigen,
                                                                                           SessionNekagip.GuideData.explodestino,
                                                                                           SessionNekagip.GuideData.fechasalida,
                                                                                           SessionNekagip.GuideData.fechallegada,
                                                                                           SessionNekagip.GuideData.horasalida,
                                                                                           SessionNekagip.GuideData.horallegada,
                                                                                           SessionNekagip.GuideData.niftransportista,
                                                                                           SessionNekagip.GuideData.nombretransportista,
                                                                                           SessionNekagip.GuideData.matricula,
                                                                                           SessionNekagip.GuideData.ates,
                                                                                           SessionNekagip.GuideData.crotales,
                                                                                           Nothing,
                                                                                           SessionNekagip.GuideData.comprador,
                                                                                           SessionNekagip.UserId.nif,
                                                                                           SessionNekagip.ICAData.icacod,
                                                                                           usuWSGanaderia,
                                                                                           passWSGanaderia,
                                                                                           SessionNekagip.SelectedLanguage)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ValidarGuiaBovino", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ValidarGuia = New JavaScriptSerializer().Deserialize(Of WSOutput.ValidarGuia)(output)
                ''LIMPIAMOS VARIABLES DE SESSION
                SessionNekagip.GuideData = Nothing
                SessionNekagip.ICAData = Nothing
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    '


    ReadOnly Property ValidarGuiaPastos()
        Get
            Try
                Dim WSInputJson As WSInput.ValidarGuiaPastos = New WSInput.ValidarGuiaPastos(SessionNekagip.GuideData.explotacioninicial,
                                                                                 SessionNekagip.GuideData.tipoguia,
                                                                                 SessionNekagip.GuideData.exploorigen,
                                                                                           SessionNekagip.GuideData.explodestino,
                                                                                           SessionNekagip.GuideData.fechasalida,
                                                                                           SessionNekagip.GuideData.fechallegada,
                                                                                           SessionNekagip.GuideData.horasalida,
                                                                                           SessionNekagip.GuideData.horallegada,
                                                                                           SessionNekagip.GuideData.niftransportista,
                                                                                           SessionNekagip.GuideData.nombretransportista,
                                                                                           SessionNekagip.GuideData.matricula,
                                                                                           SessionNekagip.GuideData.ates,
                                                                                           SessionNekagip.GuideData.crotales,
                                                                                           Nothing,
                                                                                           SessionNekagip.UserId.nif,
                                                                                           usuWSGanaderia,
                                                                                           passWSGanaderia,
                                                                                           SessionNekagip.SelectedLanguage)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderiaR2", "ValidarGuiaPastos", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ValidarGuia = New JavaScriptSerializer().Deserialize(Of WSOutput.ValidarGuia)(output)
                ''LIMPIAMOS VARIABLES DE SESSION
                SessionNekagip.GuideData = Nothing
                SessionNekagip.ICAData = Nothing
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property CrotalesDisponibles(explotacioninicial As String, ByVal explotacion As String, ByVal explotacionDestino As String, ByVal idioma As String, ByVal fechaSalida As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.CrotalesDisponibles = New WSInput.CrotalesDisponibles(explotacioninicial, explotacion, explotacionDestino, fechaSalida, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderiaR2", "CrotalesDisponibles", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.CrotalesDisponiblesList = New JavaScriptSerializer().Deserialize(Of WSOutput.CrotalesDisponiblesList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property UltimoSaneamiento(ByVal explotacion As String, ByVal crotal As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.UltimoSaneamiento = New WSInput.UltimoSaneamiento(explotacion, crotal, usuWSGanaderia, passWSGanaderia, idioma)

                ' Llmamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderiaR2", "UltimoSaneamiento", WSInputJson, "POST", False)

                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.UltimoSaneamiento = New JavaScriptSerializer().Deserialize(Of WSOutput.UltimoSaneamiento)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaProvincias(ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaProvincias = New WSInput.ConsultaProvincias(usuWSGanaderia, passWSGanaderia, idioma)

                ' Llmamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaProvincias", WSInputJson, "POST", False)

                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaProvinciasList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaProvinciasList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaMunicipios(ByVal thcod As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaMunicipios = New WSInput.ConsultaMunicipios(thcod, usuWSGanaderia, passWSGanaderia, idioma)

                ' Llmamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaMunicipios", WSInputJson, "POST", False)

                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaMunicipiosList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaMunicipiosList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property AnularGuia(ByVal guia As String, ByVal explotacion As String, ByVal usuario As String,
                                         ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.AnularGuia = New WSInput.AnularGuia(guia, explotacion, usuario, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llmamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderiaR2", "AnularGuia", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.AnularGuia = New JavaScriptSerializer().Deserialize(Of WSOutput.AnularGuia)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaDatosAcceso(ByVal aplicacion As String, ByVal usuario As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaDatosAcceso = New WSInput.ConsultaDatosAcceso(aplicacion, usuario, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llmamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaDatosAcceso", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaDatosAcceso = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaDatosAcceso)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaTitularPrincipal(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaTitularPrincipal = New WSInput.ConsultaTitularPrincipal(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llmamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaTitularPricipal", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaTitularPrincipal = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaTitularPrincipal)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property



    ReadOnly Property BuscarCrotalGuia(ByVal crotal As String, ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.BuscarCrotalGuia = New WSInput.BuscarCrotalGuia(crotal, explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "BuscarCrotalGuia", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.BuscarCrotalGuiaList = New JavaScriptSerializer().Deserialize(Of WSOutput.BuscarCrotalGuiaList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ' FASE 2


    ReadOnly Property ConsultaAutocrotalacion(ByVal explotacion As String, ByVal usuario As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaAutocrotalacion = New WSInput.ConsultaAutocrotalacion(explotacion, usuario, usuWSGanaderia,
                                                                                                             passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaAutocrotalacion", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaAutocrotalacion = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaAutocrotalacion)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property PermisoAutocrotalacion(ByVal explotacion As String, ByVal usuario As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.PermisoAutocrotalacion = New WSInput.PermisoAutocrotalacion(explotacion, usuario, usuWSGanaderia,
                                                                                                             passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "PermisoAutocrotalacion", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.PermisoAutocrotalacion = New JavaScriptSerializer().Deserialize(Of WSOutput.PermisoAutocrotalacion)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property SolicitarCrotales(ByVal explotacion As String, ByVal usuario As String, ByVal fecha As String,
                                        ByVal numero As String, ByVal tenazas As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.SolicitarCrotales = New WSInput.SolicitarCrotales(explotacion, usuario, fecha, numero, tenazas, usuWSGanaderia,
                                                                                                             passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "SolicitarCrotales", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.SolicitarCrotales = New JavaScriptSerializer().Deserialize(Of WSOutput.SolicitarCrotales)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaSolicitudesCrotales(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaSolicitudesCrotales = New WSInput.ConsultaSolicitudesCrotales(explotacion, SessionNekagip.GAuserId.nif, usuWSGanaderia,
                                                                                                                 passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaSolicitudes", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaSolicitudesCrotales = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaSolicitudesCrotales)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property SolicitudCrotales(ByVal id As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.SolicitudCrotales = New WSInput.SolicitudCrotales(id, usuWSGanaderia,
                                                                                             passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "SolicitudCrotales", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.SolicitudCrotales = New JavaScriptSerializer().Deserialize(Of WSOutput.SolicitudCrotales)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ImprimirAlbaranSolicitudCrotales(ByVal id As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ImprimirAlbaranSolicitudCrotales = New WSInput.ImprimirAlbaranSolicitudCrotales(id, usuWSGanaderia,
                                                                                             passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirAlbaranSolicitudCrotales", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ImprimirAlbaranSolicitudCrotales = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirAlbaranSolicitudCrotales)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaCrotalesDisponibles(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaCrotalesDisponibles = New WSInput.ConsultaCrotalesDisponibles(explotacion, usuWSGanaderia,
                                                                                                                 passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaCrotalesDisponibles", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaCrotalesDisponibles = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaCrotalesDisponibles)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property CrotalesPerdidas(ByVal explotacion As String, ByVal crotal As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.CrotalesPerdidas = New WSInput.CrotalesPerdidas(explotacion, crotal, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "CrotalesPerdidas", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.CrotalesPerdidas = New JavaScriptSerializer().Deserialize(Of WSOutput.CrotalesPerdidas)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property NotificarPerdida(ByVal explotacion As String, ByVal crotal As String, ByVal tiponotificacion As String,
                                       ByVal tipobaja As String, ByVal fechacomunicaperdida As String, ByVal fechaperdida As String,
                                       ByVal comentario As String, ByVal usuario As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.NotificarPerdida = New WSInput.NotificarPerdida(explotacion, crotal, tiponotificacion, tipobaja, fechacomunicaperdida,
                                                                                           fechaperdida, comentario, usuario, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "NotificarPerdida", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.NotificarPerdida = New JavaScriptSerializer().Deserialize(Of WSOutput.NotificarPerdida)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property NotificarColocacion(ByVal explotacion As String, ByVal crotal As String, ByVal fechaperdida As String,
                                       ByVal fechaentrega As String, ByVal fechacolocacion As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.NotificarColocacion = New WSInput.NotificarColocacion(explotacion, crotal, fechaperdida, fechaentrega, fechacolocacion,
                                                                                            usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "NotificarColocacion", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.NotificarColocacion = New JavaScriptSerializer().Deserialize(Of WSOutput.NotificarColocacion)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ImprimirJustificantePerdidaCrotal(ByVal explotacion As String, ByVal crotal As String, ByVal fechaperdida As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ImprimirJustificantePerdidaCrotal = New WSInput.ImprimirJustificantePerdidaCrotal(explotacion, crotal, fechaperdida, usuWSGanaderia,
                                                                                                             passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirJustificantePerdidaCrotal", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ImprimirJustificantePerdidaCrotal = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirJustificantePerdidaCrotal)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ImprimirListadoPerdidaCrotales(ByVal explotacion As String, ByVal fechadesde As String, ByVal fechahasta As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ImprimirListadoPerdidaCrotales = New WSInput.ImprimirListadoPerdidaCrotales(explotacion, fechadesde, fechahasta, usuWSGanaderia,
                                                                                                             passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirListadoPerdidaCrotales", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ImprimirListadoPerdidaCrotales = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirListadoPerdidaCrotales)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property ConsultaNotificaciones(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaNotificaciones = New WSInput.ConsultaNotificaciones(explotacion, SessionNekagip.UserId.nif, appCod, idioma, usuWSGanaderia, passWSGanaderia)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaNotificaciones", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaNotificacionesList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaNotificacionesList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaRazas(ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaRazas = New WSInput.ConsultaRazas(usuWSGanaderia, passWSGanaderia, idioma)

                ' Llmamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaRazas", WSInputJson, "POST", False)

                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaRazasList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaRazasList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property



    ReadOnly Property ConsultaSexos(ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaSexos = New WSInput.ConsultaSexos(usuWSGanaderia, passWSGanaderia, idioma)

                ' Llmamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaSexos", WSInputJson, "POST", False)

                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaSexosList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaSexosList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaAptitudes(ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaAptitudes = New WSInput.ConsultaAptitudes(usuWSGanaderia, passWSGanaderia, idioma)

                ' Llmamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaAptitudes", WSInputJson, "POST", False)

                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaAptitudesList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaAptitudesList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property ConsultaFacilidadesParto(ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaFacilidadParto = New WSInput.ConsultaFacilidadParto(usuWSGanaderia, passWSGanaderia, idioma)

                ' Llmamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaFacilidadParto", WSInputJson, "POST", False)

                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaFacilidadPartoList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaFacilidadPartoList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property ConsultaControlRendimiento(explotacion As String, idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaControlRendimiento = New WSInput.ConsultaControlRendimiento(explotacion, usuWSGanaderia, passWSGanaderia, idioma)

                ' Llmamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaControlRendimiento", WSInputJson, "POST", False)

                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaControlRendimiento = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaControlRendimiento)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
        End Property
    ReadOnly Property NotificarNacimiento(ByVal explotacion As String, ByVal crotal As String, ByVal nombre As String, ByVal razcod As String,
                                          ByVal sexcod As String,
                       ByVal aptcod As String, ByVal pesonacimiento As String, ByVal fpcod As String, ByVal madre As String, ByVal madreet As String,
                                          ByVal padre As String,
                       ByVal fechanacimiento As String, ByVal fechaimplantacion As String, ByVal registroGenealogico As String,
                                          ByVal tipoParto As String, ByVal tipoInseminacion As String,
                                          ByVal usuario As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.NotificarNacimiento = New WSInput.NotificarNacimiento(explotacion, crotal, nombre, razcod, sexcod,
                                                                                                 aptcod, pesonacimiento, fpcod, madre, madreet, padre,
                                                                                                 fechanacimiento, fechaimplantacion,
                                                                                                 registroGenealogico, tipoParto, tipoInseminacion,
                                                                                                 usuario, usuWSGanaderia, passWSGanaderia, idioma)

                ' Llmamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "NotificarNacimiento", WSInputJson, "POST", False)

                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.NotificarNacimiento = New JavaScriptSerializer().Deserialize(Of WSOutput.NotificarNacimiento)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property ConsultaResumenCenso(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ResumenCenso = New WSInput.ResumenCenso(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaResumenCenso", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ResumenCenso = New JavaScriptSerializer().Deserialize(Of WSOutput.ResumenCenso)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property ConsultaCensoActual(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.CrotalesDisponiblesCenso = New WSInput.CrotalesDisponiblesCenso(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaCensoActual", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.CrotalesDisponiblesList = New JavaScriptSerializer().Deserialize(Of WSOutput.CrotalesDisponiblesList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaNacimientos(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaNacimientos = New WSInput.ConsultaNacimientos(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaNacimientos", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaNacimientosList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaNacimientosList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaMuertes(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaMuertes = New WSInput.ConsultaMuertes(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaMuertes", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaMuertesList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaMuertesList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property Muerte(ByVal crotal As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.Muerte = New WSInput.Muerte(crotal, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "Muerte", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.MuerteDetalle = New JavaScriptSerializer().Deserialize(Of WSOutput.MuerteDetalle)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property Nacimiento(ByVal crotal As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.Nacimiento = New WSInput.Nacimiento(crotal, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "Nacimiento", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.Nacimiento = New JavaScriptSerializer().Deserialize(Of WSOutput.Nacimiento)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property ImprimirFichaRes(ByVal crotal As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ImprimirFichaRes = New WSInput.ImprimirFichaRes(crotal, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirFichaRes", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ImprimirFichaRes = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirFichaRes)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property ImprimirDIB(ByVal crotal As String, ByVal origen As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ImprimirDIB = New WSInput.ImprimirDIB(crotal, origen, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirDIB", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ImprimirDIB = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirDIB)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property ImprimirJustificanteMuerte(ByVal crotal As String, ByVal usuario As String, ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ImprimirJustificanteMuerte = New WSInput.ImprimirJustificanteMuerte(crotal, usuario, explotacion,
                                                                                                             usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirJustificanteMuerte", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ImprimirJustificanteMuerte = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirJustificanteMuerte)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property ConsultaGuiasEntrada(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaGuiasEntradaList = New WSInput.ConsultaGuiasEntradaList(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaGuiasEntrada", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaGuiasEntradaList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaGuiasEntradaList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property BuscarCrotalGuiaEntrada(ByVal crotal As String, ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.BuscarCrotalGuiaEntrada = New WSInput.BuscarCrotalGuiaEntrada(explotacion, crotal, usuWSGanaderia, passWSGanaderia, idioma)                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "BuscarCrotalGuiaEntrada", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaGuiasEntradaList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaGuiasEntradaList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property NotificarMuerte(ByVal explotacion As String, ByVal crotal As String, ByVal nombre As String, ByVal fecha_muerte As String,
                                      ByVal fecha_notificacion As String,
                                      ByVal observaciones As String, recogido As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.NotificarMuerte = New WSInput.NotificarMuerte(explotacion, crotal, nombre, fecha_muerte, fecha_notificacion,
                                                                                         observaciones, recogido, SessionNekagip.UserId.nif,
                                                                                         usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "NotificarMuerte", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.NotificarMuerte = New JavaScriptSerializer().Deserialize(Of WSOutput.NotificarMuerte)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConsultaResesVivas(ByVal explotacion As String, ByVal crotal As String, ByVal nombre As String, ByVal idioma As String)

        '        “explotacion””ES200010010003”,
        '“crotal”:”ES011599992015”,
        '“nombre”:”PATXUKA”,
        '“usuws”: ”WS_GES_BOV”,
        '“passws”: ”12345678”
        '“idioma”:”es”
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaResesVivas = New WSInput.ConsultaResesVivas(explotacion, crotal.ToUpper(), nombre, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaResesVivas", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaResesVivas = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaResesVivas)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property CrotalesGuiaConfirmada(ByVal guia As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.CrotalesGuiaConfirmada = New WSInput.CrotalesGuiaConfirmada(guia, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "CrotalesGuiaConfirmada", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.CrotalesGuiaConfirmada = New JavaScriptSerializer().Deserialize(Of WSOutput.CrotalesGuiaConfirmada)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property GuiaEntrada(ByVal guia As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.GuiaEntrada = New WSInput.GuiaEntrada(guia, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "GuiaEntrada", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.GuiaEntrada = New JavaScriptSerializer().Deserialize(Of WSOutput.GuiaEntrada)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ConfirmarGuia(ByVal guia As String, ByVal crotales As List(Of String), ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConfirmarGuia = New WSInput.ConfirmarGuia(guia, crotales, SessionNekagip.UserId.nif, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConfirmarGuia", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConfirmarGuia = New JavaScriptSerializer().Deserialize(Of WSOutput.ConfirmarGuia)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property RechazarGuia(ByVal guia As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.RechazarGuia = New WSInput.RechazarGuia(guia, SessionNekagip.UserId.nif, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "RechazarGuia", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.RechazarGuia = New JavaScriptSerializer().Deserialize(Of WSOutput.RechazarGuia)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property ConsultaEstadoNotificaciones(ByVal explotacion As String, ByVal usuario As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaEstadoNotificaciones = New WSInput.ConsultaEstadoNotificaciones(explotacion, usuario, appCod, usuWSGanaderia, passWSGanaderia, idioma)

                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaEstadoNotificaciones", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaEstadoNotificaciones = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaEstadoNotificaciones)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property NotificacionVista(ByVal notificacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.NotificacionVista = New WSInput.NotificacionVista(notificacion, SessionNekagip.UserId.nif, appCod, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "NotificacionVista", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.NotificacionVista = New JavaScriptSerializer().Deserialize(Of WSOutput.NotificacionVista)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property NotificacionBorrar(ByVal notificacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.NotificacionBorrar = New WSInput.NotificacionBorrar(notificacion, SessionNekagip.UserId.nif, appCod, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "NotificacionBorrar", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.NotificacionBorrar = New JavaScriptSerializer().Deserialize(Of WSOutput.NotificacionBorrar)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property PrecargaRazaAptitud(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.PrecargaRazaAptitud = New WSInput.PrecargaRazaAptitud(explotacion, SessionNekagip.UserId.nif, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "PrecargaRazaAptitud", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.PrecargaRazaAptitud = New JavaScriptSerializer().Deserialize(Of WSOutput.PrecargaRazaAptitud)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property ConsultaTipoParto(ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaTipoParto = New WSInput.ConsultaTipoParto(usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaTipoParto", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.TipoPartoList = New JavaScriptSerializer().Deserialize(Of WSOutput.TipoPartoList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property ConsultaTipoInseminacion(ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaTipoInseminacion = New WSInput.ConsultaTipoInseminacion(usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaTipoInseminacion", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.TipoInseminacionList = New JavaScriptSerializer().Deserialize(Of WSOutput.TipoInseminacionList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ObtenerMadre(ByVal explotacion As String, ByVal crotal As String, ByVal nombre As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ObtenerMadre = New WSInput.ObtenerMadre(explotacion, crotal, nombre, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ObtenerMadre", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.CrotalMadreList = New JavaScriptSerializer().Deserialize(Of WSOutput.CrotalMadreList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ObtenerMadreET(ByVal nombre As String, ByVal crotal As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ObtenerMadreET = New WSInput.ObtenerMadreET(nombre, crotal, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ObtenerMadreET", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ObtenerMadreETList = New JavaScriptSerializer().Deserialize(Of WSOutput.ObtenerMadreETList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    'Tarea H0050_Padre. Cambios WS
    ReadOnly Property ObtenerPadre(ByVal crotal As String, ByVal nombre As String, ByVal explotacion As String,
                                   ByVal razcod As String, ByVal idioma As String, ByVal ticod As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ObtenerPadre = New WSInput.ObtenerPadre(crotal, nombre, explotacion, razcod,
                                                                                   usuWSGanaderia, passWSGanaderia, idioma, ticod)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ObtenerPadre", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ObtenerPadreList = New JavaScriptSerializer().Deserialize(Of WSOutput.ObtenerPadreList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ObtenerCrotalesSinAsignar(ByVal explotacion As String, ByVal crotal As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ObtenerCrotalesSinAsignar = New WSInput.ObtenerCrotalesSinAsignar(explotacion, crotal, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ObtenerCrotalesSinAsignar", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ObtenerCrotalesSinAsignarList = New JavaScriptSerializer().Deserialize(Of WSOutput.ObtenerCrotalesSinAsignarList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property ImprimirAltasEntreFechas(ByVal explotacion As String, ByVal tipoAlta As String, ByVal tipo As String, ByVal fechaDesde As String, ByVal fechaHasta As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ImprimirAltasEntreFechas = New WSInput.ImprimirAltasEntreFechas(explotacion, tipoAlta, tipo, fechaDesde, fechaHasta, SessionNekagip.UserId.nif, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirAltaEntreFechas", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ImprimirAltasEntreFechas = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirAltasEntreFechas)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property ImprimirBajasEntreFechas(ByVal explotacion As String, ByVal tipoBaja As String, ByVal tipo As String, ByVal fechaDesde As String, ByVal fechaHasta As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ImprimirBajasEntreFechas = New WSInput.ImprimirBajasEntreFechas(explotacion, tipoBaja, tipo, fechaDesde, fechaHasta, SessionNekagip.UserId.nif, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirBajasEntreFechas", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ImprimirBajasEntreFechas = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirBajasEntreFechas)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property ConsultaTipoTramite(ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaTipoTramite = New WSInput.ConsultaTipoTramite(usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaTipoTramite", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaTipoTramiteList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaTipoTramiteList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property



    ReadOnly Property ConsultaDatosIniICA(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaDatosIniICA = New WSInput.ConsultaDatosIniICA(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaDatosIniICA", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaDatosIniICA = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaDatosIniICA)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property NotificarICA(ByVal P1 As String, ByVal P2 As List(Of String), ByVal T1 As List(Of String), ByVal T2 As List(Of String), ByVal E1 As String, ByVal E2 As List(Of String), ByVal E3 As List(Of String), ByVal E4 As List(Of String), ByVal E5 As List(Of String), ByVal E6 As List(Of String), ByVal E7 As List(Of String), ByVal E8 As List(Of String), ByVal E9 As String, ByVal E10 As List(Of String), ByVal usuws As String, ByVal passws As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.NotificarICA = New WSInput.NotificarICA(P1, P2, T1, T2, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "NotificarICA", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.NotificarICA = New JavaScriptSerializer().Deserialize(Of WSOutput.NotificarICA)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property




    ReadOnly Property ConsultaSerieCrotales(ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaSerieCrotales = New WSInput.ConsultaSerieCrotales(usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaSeriesCrotales", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaSerieCrotales = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaSerieCrotales)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    ReadOnly Property NotificarSerieCrotales(ByVal ocacod As String, ByVal mecod As String, ByVal fechaalta As String,
                                      ByVal cadesde As String, ByVal cahasta As String, ByVal caactual As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.NotificarSerieCrotales = New WSInput.NotificarSerieCrotales(ocacod, mecod, fechaalta, cadesde, cahasta, caactual,
                                                                                            usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "NotificarSerieCrotales", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.NotificarSerieCrotales = New JavaScriptSerializer().Deserialize(Of WSOutput.NotificarSerieCrotales)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property ConsultaOCAs(ByVal thcod As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaOCAs = New WSInput.ConsultaOCAs(thcod, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaOCAs", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaOCAs = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaOCAs)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property ControlesGuiaNivelExplotacion(explotacioninicial As String, exploorigen As String, explodestino As String)
        Get
            Try
                Dim WSInputJson As WSInput.ControlesGuiaNivelExplotacion = New WSInput.ControlesGuiaNivelExplotacion(explotacioninicial,
                                                                                 exploorigen,
                                                                                          explodestino,
                                                                                           usuWSGanaderia,
                                                                                           passWSGanaderia,
                                                                                           SessionNekagip.SelectedLanguage)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderiaR2", "ControlesGuiaNivelExplotacion", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ControlesGuiaNivelExplotacion = New JavaScriptSerializer().Deserialize(Of WSOutput.ControlesGuiaNivelExplotacion)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property ConsultaSaneamientos(explotacion As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaSaneamientos = New WSInput.ConsultaSaneamientos(explotacion,
                                                                                           usuWSGanaderia,
                                                                                           passWSGanaderia,
                                                                                           SessionNekagip.SelectedLanguage)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderiaR2", "ConsultaSaneamientos", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaSaneamientos = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaSaneamientos)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property ConsultaDetalleSaneamiento(explotacion As String, crotal As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaDetalleSaneamiento = New WSInput.ConsultaDetalleSaneamiento(explotacion, crotal,
                                                                                           SessionNekagip.GAuserId.nif,
                                                                                           usuWSGanaderia,
                                                                                           passWSGanaderia,
                                                                                           SessionNekagip.SelectedLanguage)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderiaR2", "ConsultaDetalleSaneamiento", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaDetalleSaneamiento = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaDetalleSaneamiento)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property NotificarTuberculosis(ByVal fecha As String, crotal As String, P1 As String, P2 As String, DOL As String, CAL As String)
        Get
            Try
                Dim WSInputJson As WSInput.NotificarTuberculosis = New WSInput.NotificarTuberculosis(fecha, crotal, P1, P2, DOL, CAL, SessionNekagip.GAuserId.nif,
                                                                                           usuWSGanaderia,
                                                                                           passWSGanaderia,
                                                                                           SessionNekagip.SelectedLanguage)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderiaR2", "NotificarTuberculosis", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.NotificarTuberculosis = New JavaScriptSerializer().Deserialize(Of WSOutput.NotificarTuberculosis)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property ConsultaSeguimiento(ByVal explotacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaSeguimiento = New WSInput.ConsultaSeguimiento(explotacion, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaSeguimiento", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.CrotalesSeguimientoList = New JavaScriptSerializer().Deserialize(Of WSOutput.CrotalesSeguimientoList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property ImprimirSeguimiento(ByVal explotacion As String, ByVal usuario As String, ByVal tipo As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ImprimirSeguimiento = New WSInput.ImprimirSeguimiento(explotacion, tipo, usuario, usuWSGanaderia, passWSGanaderia,
                                                                                                 idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ImprimirSeguimiento", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ImprimirSeguimiento = New JavaScriptSerializer().Deserialize(Of WSOutput.ImprimirSeguimiento)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property


    ReadOnly Property NotificarEntregaCrotales(ByVal id As String, ByVal usuario As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.NotificarEntregaCrotales = New WSInput.NotificarEntregaCrotales(id, usuario, usuWSGanaderia, passWSGanaderia,
                                                                                                 idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "NotificarEntregaCrotales", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.NotificarEntregaCrotales = New JavaScriptSerializer().Deserialize(Of WSOutput.NotificarEntregaCrotales)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property ConsultaDocumentaciones(ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.ConsultaDocumentaciones = New WSInput.ConsultaDocumentaciones(SessionNekagip.UserId.nif, appCod, idioma, usuWSGanaderia, passWSGanaderia)
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaDocumentaciones", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.ConsultaDocumentacionesList = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaDocumentacionesList)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property ConsultaEstadoDocumentaciones(ByVal usuario As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.ConsultaEstadoDocumentaciones = New WSInput.ConsultaEstadoDocumentaciones(usuario, appCod, usuWSGanaderia, passWSGanaderia, idioma)

                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "ConsultaEstadoDocumentaciones", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.ConsultaEstadoDocumentaciones = New JavaScriptSerializer().Deserialize(Of WSOutput.ConsultaEstadoDocumentaciones)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
    ReadOnly Property DocumentacionVista(ByVal documentacion As String, ByVal idioma As String)
        Get
            Try
                ' Datos de entrada.
                Dim WSInputJson As WSInput.DocumentacionVista = New WSInput.DocumentacionVista(documentacion, SessionNekagip.UserId.nif, appCod, usuWSGanaderia, passWSGanaderia, idioma)
                ' Llamamos al web service
                Dim output = New WSRequest().WSGet("WSGanaderia", "DocumentacionVista", WSInputJson, "POST", False)
                ' Devolvemos resultado y mensaje
                Dim outputObject As WSOutput.DocumentacionVista = New JavaScriptSerializer().Deserialize(Of WSOutput.DocumentacionVista)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property

    'H0033
    ReadOnly Property InformeBvd(ByVal explotacion As String, ByVal especie As String, ByVal idioma As String)
        Get
            Try
                Dim WSInputJson As WSInput.InformeBvd = New WSInput.InformeBvd(explotacion, especie, usuWSGanaderia, passWSGanaderia, idioma)
                Dim output = New WSRequest().WSGet("WSGanaderia", "InformeBvd", WSInputJson, "POST", False)
                Dim outputObject As WSOutput.InformeBvd = New JavaScriptSerializer().Deserialize(Of WSOutput.InformeBvd)(output)
                Return outputObject
            Catch exc As Exception
                Throw exc
            End Try
        End Get
    End Property
End Class


