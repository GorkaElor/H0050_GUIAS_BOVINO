Imports System.Collections.Generic
Public Class WSOutput
    Public Class GeneralInfo
        Public Property status As Integer
        Public Property code As String
        Public Property fieldErrors As List(Of String)
        Public Property message As String
    End Class

    'WS Identificacion
    Public Class Identificacion : Inherits GeneralInfo
        Public Property token As String

    End Class

    'WS ConfiguracionElemento
    Public Class ConfiguracionElemento : Inherits GeneralInfo
        Public Property horas As String

    End Class
    'WS ObtenerUrlRedirecGipuzkoataria
    Public Class UrlRedirecGipuzkoataria : Inherits GeneralInfo
        Public Property resultado As String

    End Class
    'WS Permisos
    Public Class Permisos : Inherits GeneralInfo
        Public Property lista As List(Of String)

    End Class
    'WS SesionActiva
    Public Class SesionActiva : Inherits GeneralInfo
        Public Property nif As String
        Public Property nombre As String
        Public Property apellidos As String
        Public Property codigo As String
        Public Property descripcion As String
        Public Property valido As String

    End Class
    'WS RegistrarAcceso
    Public Class RegistrarAcceso : Inherits GeneralInfo
        Public Property resultado As String

    End Class


    'WS Autentificacion
    Public Class Autentificacion : Inherits GeneralInfo
        Public Property nif As String
        Public Property nombre As String
        Public Property apellidos As String

    End Class

    'WSLiterales
    Public Class LiteralesList : Inherits GeneralInfo
        Public Property lista As List(Of Literales)

    End Class

    Public Class Literales
        Public Property codigo As String
        Public Property literal As String

    End Class

    'WS BuscarExplotacion
    Public Class BuscarExplotacionList : Inherits GeneralInfo
        Public Property lista As List(Of BuscarExplotacion)
    End Class

    Public Class BuscarExplotacion
        Public Property explotacion As String
        Public Property denominacion As String
        Public Property muncod As String
        Public Property thcod As String
        Public Property matadero As String
        Public Property pasto As String
        Public Property notificaciones As List(Of Notificaciones)

    End Class

    'WS BuscarTransportista
    Public Class BuscarTransportistaList : Inherits GeneralInfo
        Public Property lista As List(Of BuscarTransportista)
    End Class

    Public Class BuscarTransportista
        Public Property nif As String
        Public Property nombre As String
        Public Property matricula As String
        Public Property ates As String
    End Class

    'WS BuscarExplotacionTrabajo
    Public Class BuscarExplotacionesTrabajoList : Inherits GeneralInfo
        Public Property lista As List(Of BuscarExplotacionesTrabajo)
    End Class

    Public Class BuscarExplotacionesTrabajo
        Public Property explotacion As String
        Public Property denominacion As String
        Public Property matadero As String
        Public Property propia As String
        Public Property pasto As String
        Public Property tieneAnimales As String
        Public Property notificaciones As List(Of Notificaciones)
        Public Sub New()


        End Sub

        Public Sub New(ByVal newExplotacion As String, ByVal newDenominacion As String, ByVal newMatadero As String, ByVal newPropia As String, newpasto As String, newTieneAnimales As String)
            explotacion = newExplotacion
            denominacion = newDenominacion
            matadero = newMatadero
            propia = newPropia
            pasto = newpasto
            tieneAnimales = newTieneAnimales
        End Sub

        Public Function ConsultaExplotacion()
            Dim res As ConsultaExplotacion = New WSController().ConsultaExplotacion(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaTitulares()
            Dim res As ConsultaTitularesList = New WSController().ConsultaTitulares(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaHistorialDeTramites(ByVal tipotramite As String, ByVal fechadesde As String, ByVal fechahasta As String, numtramites As String)
            Dim res As ConsultaHistorialDeTramitesList = New WSController().ConsultaHistorialDeTramites(explotacion, SessionNekagip.UserId.nif,
                                                                                                        tipotramite, fechadesde,
                                                                                                        fechahasta, numtramites, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ImprimirCensoAUnaFecha(ByVal fecha As String, ByVal tipo As String)
            Dim res As ImprimirCensoAUnaFecha = New WSController().ImprimirCensoAUnaFecha(explotacion, fecha, tipo, SessionNekagip.UserId.nif, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ImprimirSeguimiento(tipo)
            Dim res As ImprimirSeguimiento = New WSController().ImprimirSeguimiento(explotacion, SessionNekagip.UserId.nif, tipo, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ImprimirListadoSaneamientos(ByVal tipo As String)
            Dim res As ImprimirListadoSaneamientos = New WSController().ImprimirListadoSaneamientos(explotacion, tipo, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaAsociaciones()
            Dim res As ConsultaAsociacionesList = New WSController().ConsultaAsociaciones(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaCalificacion()
            Dim res As ConsultaCalificacionList = New WSController().ConsultaCalificacion(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaMontesAutorizados()
            Dim res As ConsultaMontesAutorizadosList = New WSController().ConsultaMontesAutorizados(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ImprimirCensoActual(tipo)
            Dim res As ImprimirCensoActual = New WSController().ImprimirCensoActual(explotacion, SessionNekagip.UserId.nif, tipo, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaLibroDeRegistro()
            Dim res As ConsultaLibroDeRegistroList = New WSController().ConsultaLibroDeRegistro(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ImprimirLibroDeRegistro(ByVal campana As String)
            Dim res As ImprimirLibroDeRegistro = New WSController().ImprimirLibroDeRegistro(explotacion, campana, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaGuias()
            Dim res As ConsultaGuiasList = New WSController().ConsultaGuias(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaDocumentaciones()
            Dim res As ConsultaDocumentacionesList = New WSController().ConsultaDocumentaciones(SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaNotificaciones()
            Dim res As ConsultaNotificacionesList = New WSController().ConsultaNotificaciones(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function BuscarCrotalGuia(ByVal crotal As String)
            Dim res As BuscarCrotalGuiaList = New WSController().BuscarCrotalGuia(crotal, explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function UltimoSaneamiento(ByVal crotal As String)
            Dim res As UltimoSaneamiento = New WSController().UltimoSaneamiento(explotacion, crotal, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function AnularGuia(ByVal guia As String)
            Dim res As AnularGuia = New WSController().AnularGuia(guia, explotacion, SessionNekagip.UserId.nif, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaTitularPrincipal()
            Dim res As ConsultaTitularPrincipal = New WSController().ConsultaTitularPrincipal(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaAutocrotalacion()
            Dim res As ConsultaAutocrotalacion = New WSController().ConsultaAutocrotalacion(explotacion, SessionNekagip.UserId.nif, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function PermisoAutocrotalacion()
            Dim res As PermisoAutocrotalacion = New WSController().PermisoAutocrotalacion(explotacion, SessionNekagip.UserId.nif, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function SolicitarCrotales(ByVal fecha As String, ByVal numero As String, ByVal tenazas As String)
            Dim res As SolicitarCrotales = New WSController().SolicitarCrotales(explotacion, SessionNekagip.UserId.nif, fecha, numero, tenazas, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaSolicitudesCrotales()
            Dim res As ConsultaSolicitudesCrotales = New WSController().ConsultaSolicitudesCrotales(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function SolicitudCrotales(ByVal id As String)
            Dim res As SolicitudCrotales = New WSController().SolicitudCrotales(id, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaCrotalesDisponibles()
            Dim res As ConsultaCrotalesDisponibles = New WSController().ConsultaCrotalesDisponibles(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function CrotalesPerdidas(ByVal crotal As String)
            Dim res As CrotalesPerdidas = New WSController().CrotalesPerdidas(explotacion, crotal, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function NotificarPerdida(ByVal crotal As String, ByVal tiponotificacion As String, ByVal tipobaja As String, ByVal fechacomunicaperdida As String, ByVal fechaperdida As String, ByVal comentario As String)
            Dim res As NotificarPerdida = New WSController().NotificarPerdida(explotacion, crotal, tiponotificacion, tipobaja, fechacomunicaperdida, fechaperdida, comentario, SessionNekagip.UserId.nif, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        'Public Function NotificarColocacion(ByVal crotal As String, ByVal fechaColocacion As String)
        '    Dim res As NotificarColocacion = New WSController().NotificarColocacion(explotacion, crotal, fechaColocacion, SessionNekagip.UserId.nif, SessionNekagip.SelectedLanguage)
        '    Return res
        'End Function
        Public Function ImprimirJustificantePerdidaCrotal(ByVal crotal As String, ByVal fechaperdida As String)
            Dim res As ImprimirJustificantePerdidaCrotal = New WSController().ImprimirJustificantePerdidaCrotal(explotacion, crotal, fechaperdida,
                                                                                                                SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaMuertes()
            Dim res As ConsultaMuertesList = New WSController().ConsultaMuertes(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ImprimirJustificanteMuerte(ByVal crotal As String)
            Dim res As ImprimirJustificanteMuerte = New WSController().ImprimirJustificanteMuerte(crotal, SessionNekagip.UserId.nif, explotacion,
                                                                                                                SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaEstadoNotificaciones()
            Dim res As ConsultaEstadoNotificaciones = New WSController().ConsultaEstadoNotificaciones(explotacion, SessionNekagip.UserId.nif,
                                                                                                                SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ConsultaEstadoDocumentaciones()
            Dim res As ConsultaEstadoDocumentaciones = New WSController().ConsultaEstadoDocumentaciones(SessionNekagip.UserId.nif,
                                                                                                                SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function PrecargaRazaAptitud()
            Dim res As PrecargaRazaAptitud = New WSController().PrecargaRazaAptitud(explotacion, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function NotificarNacimiento(ByVal crotal As String, ByVal nombre As String, ByVal razcod As String, ByVal sexcod As String,
                                            ByVal aptcod As String, ByVal pesonacimiento As String, ByVal fpcod As String,
                                            ByVal madre As String, ByVal madreet As String,
                                               ByVal padre As String, ByVal fechanacimiento As String, ByVal fechaimplantacion As String,
                                                ByVal registroGenealogico As String, ByVal tipoParto As String,
                                                ByVal tipoInseminacion As String)
            Dim res As NotificarNacimiento = New WSController().NotificarNacimiento(explotacion,
                                                                                                crotal, nombre, razcod, sexcod,
                                                                                                 aptcod, pesonacimiento, fpcod, madre.ToUpper(), madreet.ToUpper(),
                                                                                                padre.ToUpper(),
                                                                                                 fechanacimiento, fechaimplantacion, registroGenealogico.ToUpper,
                                                                                                tipoParto, tipoInseminacion,
                                                                                                SessionNekagip.UserId.nif, SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ObtenerMadre(ByVal crotal As String, ByVal nombre As String)
            Dim res As CrotalMadreList = New WSController().ObtenerMadre(explotacion, crotal.ToUpper(), nombre.ToUpper(), SessionNekagip.SelectedLanguage)
            Return res
        End Function
        Public Function ObtenerCrotalesSinAsignar(ByVal crotal As String)
            Dim res As ObtenerCrotalesSinAsignarList = New WSController().ObtenerCrotalesSinAsignar(explotacion, crotal.ToUpper(),
                                                                                                          SessionNekagip.SelectedLanguage)
            Return res
        End Function
        'Tarea H0050_padre
        Public Function ObtenerPadre(ByVal crotal As String, ByVal nombre As String, ByVal razcod As String, ByVal ticod As String)
            Dim res As ObtenerPadreList = New WSController().ObtenerPadre(crotal.ToUpper(), nombre.ToUpper(), explotacion, razcod,
                                                                                            SessionNekagip.SelectedLanguage, ticod)
            Return res
        End Function
        'H0033
        Public Function InformeBvd(ByVal explotacion As String, ByVal especie As String)
            Dim res As InformeBvd = New WSController().InformeBvd(explotacion, especie, SessionNekagip.SelectedLanguage)
            Return res
        End Function

    End Class


    'WS ConsultaExplotacion
    Public Class ConsultaExplotacion : Inherits GeneralInfo
        Public Property denominacion As String
        Public Property direccion As String
        Public Property cp As String
        Public Property municipio As String
        Public Property provincia As String
        Public Property estado As String
        Public Property fechaestado As String
        Public Property sistemaproductivo As String
        Public Property capacidadproductiva As String
        Public Property sostenibilidad As String
        Public Property autoconsumo As String
        Public Property interintracomunitario As String
        Public Property transhumante As String
        Public Property observaciones As String
        Public Property clasificaciones As List(Of String)
        Public Property numeroNotificaciones As Integer
        Public Property numeroNotificacionesTotales As Integer
        Public Property matadero As String
        Public Property restriccionessalida As List(Of RestriccionSalida)



    End Class
    Public Class RestriccionSalida
        Public Property especie As String
        Public Property especiecod As String
        Public Property explotacion As String
        Public Property fechafin As String
        Public Property fechainicio As String
        Public Property motivocod As String
        Public Property motivodes As String
        Public Property tipocod As String
        Public Property tipodes As String
    End Class


    'WS ConsultaTitulares
    Public Class ConsultaTitularesList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaTitulares)
    End Class
    Public Class ConsultaTitulares
        Public Property nif As String
        Public Property nombre As String
        Public Property relacion As String

    End Class


    'WS ConsultaHistorialDeTramites
    Public Class ConsultaHistorialDeTramitesList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaHistorialDeTramites)
    End Class

    Public Class ConsultaHistorialDeTramites
        Implements IComparable(Of ConsultaHistorialDeTramites)
        Public Property identificador As String
        Public Property descripcion As String
        Public Property codigotramite As String
        Public Property fecha As String
        Public Property imprimir As List(Of ConsultaHistorialDeTramitesImprimir)

        ' Default comparer for ConsultaHistorialDeTramites.
        Public Function CompareTo(comparePart As ConsultaHistorialDeTramites) As Integer _
                Implements IComparable(Of ConsultaHistorialDeTramites).CompareTo
            ' A null value means that this object is greater.
            If comparePart Is Nothing Then
                Return 1
            Else
                Return Me.fecha.CompareTo(comparePart.fecha)
            End If
        End Function

    End Class

    Public Class ConsultaHistorialDeTramitesImprimir
        Public Property color As String
        Public Property desc As String
        Public Property icon As String
        Public Property tipotramite As String
        Public Property formato As String

    End Class

    'WS ImprimirHistorialDeTramite
    Public Class ImprimirHistorialDeTramite : Inherits GeneralInfo
        Public Property url As String

    End Class

    'WS ImprimirCensoAUnaFecha
    Public Class ImprimirCensoAUnaFecha : Inherits GeneralInfo
        Public Property url As String

    End Class

    'WS ImprimirGuia
    Public Class ImprimirGuia : Inherits GeneralInfo
        Public Property url As String

    End Class

    'WS ConsultaAsociaciones
    Public Class ConsultaAsociacionesList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaAsociaciones)
    End Class
    Public Class ConsultaAsociaciones
        Public Property fechaalta As String
        Public Property asociacion As String

    End Class


    'WS ConsultaMontesAutorizados
    Public Class ConsultaMontesAutorizadosList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaMontesAutorizados)
    End Class
    Public Class ConsultaMontesAutorizados
        Public Property animalesautorizados As String
        Public Property animalesporsubir As String
        Public Property campana As String
        Public Property denominacion As String
        Public Property explotacion As String

    End Class

    'WS ConsultaCalificacion
    Public Class ConsultaCalificacionList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaCalificacion)
    End Class
    Public Class ConsultaCalificacion
        Public Property fecha As String
        Public Property tipo As String
        Public Property resultado As String

    End Class

    'WS ImprimirCensoActual
    Public Class ImprimirCensoActual : Inherits GeneralInfo
        Public Property url As String

    End Class

    'WS ConsultaLibroDeRegistro
    Public Class ConsultaLibroDeRegistroList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaLibroDeRegistro)
    End Class
    Public Class ConsultaLibroDeRegistro
        Public Property campana As String
        Public Property descripcion As String

    End Class

    'WS ImprimirLibroDeRegistro
    Public Class ImprimirLibroDeRegistro : Inherits GeneralInfo
        Public Property url As String

    End Class

    'WS ConsultaGuias
    Public Class ConsultaGuiasList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaGuias)
    End Class
    Public Class ConsultaGuias
        Public Property guia As String
        Public Property estado As String
        Public Property expdestino As String
        Public Property fecsalida As String
        Public Property fecllegada As String
        Public Property imprimible As String
        Public Property matadero As String
        Public Property anulable As String

    End Class

    'WS BuscarCrotalGuia
    Public Class BuscarCrotalGuiaList : Inherits ConsultaGuiasList
    End Class

    'WS ConsultaGuias
    Public Class ConsultaGuiasCrotalesList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaGuiasCrotales)
    End Class
    Public Class ConsultaGuiasCrotales
        Public Property crotal As String

    End Class

    'WS ValidarGuia
    Public Class ValidarGuia : Inherits GeneralInfo

        ' Indica si la guía se ha procesado (resultado=1) o ha dado error (resultado=2)
        Public Property resultado As Byte

        ' Mensaje explicativo en el idioma enviado en la solicitud
        Public Property mensaje As String
        Public Property guia As String
        Public Property matadero As String

        Public Function ImprimirGuia(tipo)
            Dim res As ImprimirGuia = New WSController().ImprimirGuia(guia, tipo, SessionNekagip.SelectedLanguage)
            Return res
        End Function

    End Class

    'WS CrotalesDisponibles
    Public Class CrotalesDisponiblesList : Inherits GeneralInfo
        Public Property lista As List(Of CrotalesDisponibles)
    End Class
    Public Class CrotalesDisponibles
        Public Property crotal As String
        Public Property sexo As String
        Public Property fecnacimiento As String
        Public Property razdes As String
        Public Property apto As String
        Public Property motivonoapto As String
        Public Property nombre As String
        Public Property dib As String
        Public Property madre As String
        Public Property enmonte As String
        Public Property edad As String
        Public Property computable As String
        Public Property tienesaneamientos As String
        Public Property color As String





    End Class
    'WS REsumenCenso
    Public Class ResumenCenso : Inherits GeneralInfo
        Public Property h6 As String
        Public Property h612 As String
        Public Property h1224 As String
        Public Property h24 As String
        Public Property hSum As String
        Public Property m6 As String
        Public Property m612 As String
        Public Property m1224 As String
        Public Property m24 As String
        Public Property mSum As String
        Public Property total As String


    End Class

    'WS UltimoSaneamiento
    Public Class UltimoSaneamiento : Inherits GeneralInfo
        Public Property fecha As String
        Public Property veterinario As String
        Public Property equipo As String
        Public Property tipo As String
        Public Property tuberculosis As Tuberculosis
        Public Property brucelosis As Brucelosis
        Public Property perineumonia As Perineumonia
        Public Property leucosis As Leucosis
        Public Property ibr As Ibr

        Public Property lazul As Lazul
        Public Property lazulpcr As Lazulpcr
        Public Property paratuberculosis As Paratuberculosis
        Public Property anticuerpos As Anticuerpos
        Public Property antigenos As Antigenos
        'Tarea H0050 comentado neoesporas
        'Public Property neoesporas As Neoesporas

        Public Property vacuna As InfoVacuna

        Public Property fechacalificacion As String

        Public Property editable As String
    End Class

    Public Class Tuberculosis
        Public Property realizada As String
        Public Property P1 As String
        Public Property P2 As String
        Public Property DOL As String
        Public Property MT As String
        Public Property C As String
    End Class
    Public Class Brucelosis
        Public Property realizada As String
        Public Property RB As String
        Public Property F As String
        Public Property C As String
    End Class
    Public Class Perineumonia
        Public Property realizada As String
        Public Property F As String
        Public Property N As String
        Public Property MT As String
        Public Property C As String
    End Class
    Public Class Leucosis
        Public Property realizada As String
        Public Property EL As String
        Public Property IDG As String
        Public Property C As String
    End Class
    Public Class Ibr
        Public Property realizada As String
        Public Property IBRGB As String
        Public Property I As String
    End Class

    Public Class Lazul
        Public Property realizada As String
        Public Property LA As String
    End Class
    Public Class Lazulpcr
        Public Property realizada As String
        Public Property C As String
    End Class

    Public Class Paratuberculosis
        Public Property realizada As String
        Public Property C As String
    End Class

    Public Class Anticuerpos
        Public Property realizada As String
        Public Property C As String
    End Class

    Public Class Antigenos
        Public Property realizada As String
        Public Property C As String
    End Class

    'Public Class Neoesporas
    'Public Property realizada As String
    'Public Property C As String
    'End Class
    Public Class InfoVacuna
        Public Property tipo As String
        Public Property fechavacunacion As String
        Public Property proximafechavacunacion As String
    End Class
    'WS ConsultaProvincias
    Public Class ConsultaProvinciasList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaProvincias)
    End Class
    Public Class ConsultaProvincias
        Public Property thcod As String
        Public Property provincia As String
    End Class

    'WS ConsultaMunicipios
    Public Class ConsultaMunicipiosList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaMunicipios)
    End Class
    Public Class ConsultaMunicipios
        Public Property thcod As String
        Public Property muncod As String
        Public Property municipio As String
    End Class

    Public Class AnularGuia : Inherits GeneralInfo
    End Class

    Public Class ConsultaDatosAcceso : Inherits GeneralInfo
        Public Property fechaultimoacceso As String
        Public Property nombreusuario As String
    End Class

    Public Class ConsultaTitularPrincipal : Inherits GeneralInfo
        Public Property nif As String
        Public Property nombre As String
        Public Property direccion As String
        Public Property cp As String
        Public Property muncod As String
        Public Property thcod As String
        Public Property telefono As String
        Public Property email As String
    End Class

    'WS ConsultaAutocrotalacion
    Public Class ConsultaAutocrotalacion : Inherits GeneralInfo

        Public Property fecha As String
        Public Property resultado As String

        ' Indica el estado del permiso de autocrotalacion 
        '-1 = PETICION NO ENVIADA / 0 = EN TRAMITE / 1 = VALIDADO / 2 = RECHAZADO
        Public Property estado As String
        Public Property estadodes As String

        ' Mensaje explicativo en el idioma enviado en la solicitud
        Public Property mensaje As String

    End Class

    'WS PermisoAutocrotalacion
    Public Class PermisoAutocrotalacion : Inherits GeneralInfo

        Public Property fecha As String
        Public Property resultado As String

        ' Indica el estado del permiso de autocrotalacion 
        '-1 = PETICION NO ENVIADA / 0 = EN TRAMITE / 1 = VALIDADO / 2 = RECHAZADO
        Public Property estado As String
        Public Property estadodes As String

        ' Mensaje explicativo en el idioma enviado en la solicitud
        Public Property mensaje As String

    End Class

    'WS SolicitarCrotales
    Public Class SolicitarCrotales : Inherits GeneralInfo
    End Class

    'WS ConsultaSolicitudesCrotales
    Public Class ConsultaSolicitudesCrotales : Inherits GeneralInfo

        Public Property lista As List(Of ElementoListaSolicitudesCrotales)

    End Class

    Public Class ElementoListaSolicitudesCrotales
        Public Property id As String
        Public Property fecpeticion As String
        Public Property numero As String
        Public Property tenazas As String
        Public Property estado As String
        Public Property estadodes As String
        Public Property entregable As String
        Public Property fechaentrega As String
        Public Property editable As String

    End Class

    'WS SolicitudCrotales
    Public Class SolicitudCrotales : Inherits GeneralInfo
        Public Property fechatramitacion As String
        Public Property fechaentrega As String
        Public Property lista As List(Of CrotalSolicitado)
        Public Property albaran As String

    End Class


    'WS ImprimirAlbaranSolicitudCrotales
    Public Class ImprimirAlbaranSolicitudCrotales : Inherits GeneralInfo
        Public Property url As String

    End Class

    Public Class CrotalSolicitado
        Public Property crotal As String

    End Class

    'WS ConsultaCrotalesDisponibles
    Public Class ConsultaCrotalesDisponibles : Inherits GeneralInfo

        Public Property lista As List(Of CrotalDisponible)

    End Class

    Public Class CrotalDisponible
        Public Property crotal As String
        Public Property estado As String
        Public Property estadodes As String
        Public Property perdidas As String
        Public Property notificable As String

    End Class

    'WS CrotalesPerdidas
    Public Class CrotalesPerdidas : Inherits GeneralInfo

        Public Property lista As List(Of CrotalPerdido)

    End Class

    Public Class CrotalPerdido
        Public Property fechacomunicacion As String
        Public Property fechaperdida As String
        Public Property fechafabrica As String
        Public Property fechaentrega As String
        Public Property fechacolocacion As String
        Public Property comentario As String
        Public Property justificante As String
        Public Property colocacion As String
        Public Property albaran As String
    End Class

    Public Class NotificarPerdida : Inherits GeneralInfo

    End Class
    Public Class NotificarColocacion : Inherits GeneralInfo

    End Class
    Public Class ImprimirJustificantePerdidaCrotal : Inherits GeneralInfo
        Public Property url As String
    End Class
    Public Class ImprimirListadoPerdidaCrotales : Inherits GeneralInfo
        Public Property url As String
    End Class

    Public Class ConsultaNotificacionesList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaNotificaciones)
    End Class

    'Notificaciones
    Public Class ConsultaNotificaciones
        Public Property fechanotificacion As String
        Public Property ntcod As String
        Public Property ntdes As String
        Public Property notcod As String
        Public Property notdes As String
        Public Property ver As String
        Public Property eliminable As String

    End Class

    'Notificaciones
    Public Class Notificaciones : Inherits GeneralInfo
        Public Property notcod As String
        Public Property notdes As String

    End Class

    'Raza

    Public Class Raza
        Public Property razcod As String
        Public Property razdes As String
    End Class

    'WS ConsultRazasList
    Public Class ConsultaRazasList : Inherits GeneralInfo
        Public Property lista As List(Of Raza)
    End Class

    ' Sexo

    Public Class Sexo
        Public Property sexcod As String
        Public Property sexdes As String
    End Class

    'WS ConsultaSexosList
    Public Class ConsultaSexosList : Inherits GeneralInfo
        Public Property lista As List(Of Sexo)
    End Class

    ' Aptitud

    Public Class Aptitud
        Public Property aptcod As String
        Public Property aptdes As String
    End Class

    'WS ConsultaAptitudesList
    Public Class ConsultaAptitudesList : Inherits GeneralInfo
        Public Property lista As List(Of Aptitud)
    End Class

    ' FacilidadParto

    Public Class FacilidadParto
        Public Property fpcod As String
        Public Property fpdes As String
    End Class

    'WS ConsultaFacilidadPartoList
    Public Class ConsultaFacilidadPartoList : Inherits GeneralInfo
        Public Property lista As List(Of FacilidadParto)
    End Class

    Public Class NotificarNacimiento : Inherits GeneralInfo

    End Class

    Public Class ConsultaDatosIniICA
        Public Property P1 As String
        Public Property P2 As List(Of String)
        Public Property T1 As List(Of String)
        Public Property T2 As List(Of String)
        Public Property E1 As String
        Public Property E2 As List(Of String)
        Public Property E3 As List(Of String)
        Public Property E4 As List(Of String)
        Public Property E5 As List(Of String)
        Public Property E6 As List(Of String)
        Public Property E7 As List(Of String)
        Public Property E8 As List(Of String)
        Public Property E9 As String
        Public Property E10 As List(Of String)

    End Class
    Public Class NotificarICA
        Public Property icacod As String

    End Class


    Public Class ConsultaNacimientos

        Public Property crotal As String
        Public Property nombre As String
        Public Property fechanacimiento As String
        Public Property razdes As String
        Public Property sexdes As String
        Public Property estado As String
        Public Property estadodes As String
        Public Property colorcrotal As String
        Public Property entrashumancia As String
    End Class

    'WS ConsultaNacimientosList
    Public Class ConsultaNacimientosList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaNacimientos)
    End Class


    Public Class Muerte

        Public Property crotal As String
        Public Property nombre As String
        Public Property fechamuerte As String
        Public Property fechanotificacion As String
        Public Property estado As String
        Public Property estadodes As String
    End Class

    'WS ConsultaMuertesList
    Public Class ConsultaMuertesList : Inherits GeneralInfo
        Public Property lista As List(Of Muerte)
    End Class


    Public Class MuerteDetalle : Inherits GeneralInfo

        Public Property observaciones As String
        Public Property recogido As String
        Public Property justificante As String
    End Class

    Public Class Nacimiento : Inherits GeneralInfo

        Public Property peso As String
        Public Property madre As String
        Public Property fechaimplantacion As String
        Public Property aptdes As String
        Public Property madreet As String
        Public Property fechanotificacion As String
        Public Property fpdes As String
        Public Property padre As String
        Public Property errordes As String
        Public Property imprimible As String


    End Class
    'WS ImprimirFichaRes
    Public Class ImprimirFichaRes : Inherits GeneralInfo
        Public Property url As String
    End Class

    'WS ImprimirDIB
    Public Class ImprimirDIB : Inherits GeneralInfo
        Public Property url As String
    End Class

    'WS ImprimirDIB
    Public Class ImprimirJustificanteMuerte : Inherits GeneralInfo
        Public Property url As String
    End Class


    Public Class ConsultaGuiasEntradaList : Inherits GeneralInfo

        Public Property lista As List(Of ConsultaGuiaEntrada)

    End Class

    Public Class ConsultaGuiaEntrada

        Public Property fechaentrada As String
        Public Property guia As String
        Public Property exploorigen As String
        Public Property numcrotales As String
        Public Property estado As String
        Public Property estadodes As String
        Public Property larretoki As String


    End Class


    Public Class NotificarMuerte : Inherits GeneralInfo


    End Class

    Public Class ConsultaResesVivas : Inherits GeneralInfo
        Public Property lista As List(Of ResViva)

    End Class

    Public Class ResViva
        Public Property crotal As String
        Public Property nombre As String

    End Class

    Public Class CrotalGuiaConfirmada

        Public Property crotal As String
        Public Property sexdes As String
        Public Property razdes As String
        Public Property fechanacimiento As String
        Public Property imprimible As String
    End Class

    Public Class CrotalesGuiaConfirmada : Inherits GeneralInfo
        Public Property lista As List(Of CrotalGuiaConfirmada)

    End Class

    Public Class CrotalGuiaEntrada

        Public Property crotal As String
        Public Property sexdes As String
        Public Property razdes As String
        Public Property fechanacimiento As String
        Public Property seleccionado As String
    End Class

    Public Class GuiaEntrada : Inherits GeneralInfo
        Public Property fechaentrada As String
        Public Property guia As String
        Public Property exploorigen As String
        Public Property numcrotales As String
        Public Property crotales As List(Of CrotalGuiaEntrada)
        Public Property confirmable As String
        Public Property rechazable As String
        Public Property descripcion As String
        Public Property estado As String
        Public Property estadodes As String

    End Class

    Public Class ConfirmarGuia : Inherits GeneralInfo


    End Class

    Public Class RechazarGuia : Inherits GeneralInfo


    End Class

    Public Class ConsultaEstadoNotificaciones : Inherits GeneralInfo
        Public Property sinleer As String
        Public Property total As String

    End Class

    Public Class NotificacionVista : Inherits GeneralInfo


    End Class

    Public Class NotificacionBorrar : Inherits GeneralInfo


    End Class

    Public Class PrecargaRazaAptitud : Inherits GeneralInfo

        Public Property razcod As String
        Public Property razdes As String
        Public Property aptcod As String
        Public Property aptdes As String

    End Class


    Public Class TipoParto

        Public Property tpcod As String
        Public Property tpdes As String
    End Class


    Public Class TipoPartoList : Inherits GeneralInfo
        Public Property lista As List(Of TipoParto)

    End Class

    Public Class TipoInseminacion
        Public Property ticod As String
        Public Property tides As String
    End Class



    Public Class TipoInseminacionList : Inherits GeneralInfo
        Public Property lista As List(Of TipoInseminacion)

    End Class


    Public Class CrotalMadre

        Public Property crotal As String
        Public Property nombre As String
        Public Property fechanacimiento As String

    End Class

    Public Class CrotalMadreList : Inherits GeneralInfo
        Public Property lista As List(Of CrotalMadre)

    End Class

    Public Class ObtenerMadreET

        Public Property crotal As String
        Public Property nombre As String
        Public Property fechanacimiento As String

    End Class

    Public Class ObtenerMadreETList : Inherits GeneralInfo
        Public Property lista As List(Of ObtenerMadreET)

    End Class

    'Tarea H0050_Padre
    Public Class ObtenerPadre

        Public Property crotal As String
        Public Property nombre As String
        Public Property fechanacimiento As String
        Public Property ticod As String
    End Class

    Public Class ObtenerPadreList : Inherits GeneralInfo
        Public Property lista As List(Of ObtenerPadre)

    End Class


    Public Class ObtenerCrotalesSinAsignar

        Public Property crotal As String

    End Class

    Public Class ObtenerCrotalesSinAsignarList : Inherits GeneralInfo
        Public Property lista As List(Of ObtenerCrotalesSinAsignar)

    End Class

    Public Class ImprimirAltasEntreFechas : Inherits GeneralInfo
        Public Property url As String

    End Class


    Public Class ImprimirBajasEntreFechas : Inherits GeneralInfo
        Public Property url As String

    End Class


    Public Class TipoTramite : Inherits GeneralInfo

        Public Property tracod As String
        Public Property trades As String
    End Class


    Public Class ConsultaTipoTramiteList : Inherits GeneralInfo
        Public Property lista As List(Of TipoTramite)

    End Class


    Public Class ConsultaControlRendimiento : Inherits GeneralInfo

        Public Property resultado As String

    End Class
    Public Class SerieCrotales
        Public Property ocades As String
        Public Property medes As String
        Public Property fechaalta As String
        Public Property caactual As String
        Public Property cadesde As String
        Public Property cahasta As String
    End Class
    Public Class ConsultaSerieCrotales : Inherits GeneralInfo
        Public Property lista As List(Of SerieCrotales)

    End Class
    Public Class NotificarSerieCrotales : Inherits GeneralInfo

    End Class

    Public Class Ocas
        Public Property ocades As String
        Public Property ocacod As String
    End Class
    Public Class ConsultaOCAs : Inherits GeneralInfo
        Public Property lista As List(Of Ocas)

    End Class

    'WSControlesGuiaNivelExplotacion
    Public Class ControlesGuiaNivelExplotacion : Inherits GeneralInfo


    End Class
    Public Class TipoGuia : Inherits GeneralInfo

    End Class

    'WS ConsultaSaneamientos
    Public Class ConsultaSaneamientos : Inherits GeneralInfo
        Public Property lista As List(Of CrotalesDisponibles)
    End Class
    'WS ConsultaSaneamientos
    Public Class ConsultaDetalleSaneamiento : Inherits GeneralInfo
        Public Property lista As List(Of UltimoSaneamiento)
    End Class

    Public Class NotificarTuberculosis : Inherits GeneralInfo
        Public Property fecha As String
    End Class

    Public Class ImprimirListadoSaneamientos : Inherits GeneralInfo
        Public Property url As String
    End Class
    'WS ConsultaSeguimiento
    Public Class CrotalesSeguimientoList : Inherits GeneralInfo
        Public Property lista As List(Of CrotalesSeguimiento)
    End Class
    Public Class CrotalesSeguimiento
        Public Property crotal As String
        Public Property sexo As String
        Public Property fecnacimiento As String
        Public Property razdes As String
        Public Property nombre As String
        Public Property color As String
        Public Property enmonte As String
        Public Property pendientesan As String
        Public Property colorpendientevac As String
        Public Property colorpendientesan As String
        Public Property pendientevac As String
        Public Property fecvacprox As String
        Public Property tipovacprox As String

    End Class
    'WS ImprimirSeguimiento
    Public Class ImprimirSeguimiento : Inherits GeneralInfo
        Public Property url As String

    End Class
    Public Class NotificarEntregaCrotales : Inherits GeneralInfo
        Public Property fechaentrega As String


    End Class
    Public Class ConsultaEstadoDocumentaciones : Inherits GeneralInfo
        Public Property sinleer As String
        Public Property total As String

    End Class

    Public Class DocumentacionVista : Inherits GeneralInfo


    End Class

    Public Class ConsultaDocumentacionesList : Inherits GeneralInfo
        Public Property lista As List(Of ConsultaDocumentaciones)
    End Class

    'ConsultaDocumentaciones
    Public Class ConsultaDocumentaciones
        Public Property doccod As String
        Public Property docdes As String
        Public Property ver As String
        Public Property docurl As String

    End Class

    'InformeBvd H0033
    Public Class InformeBvd
        Public Property url As String
    End Class
End Class

