Public Class WSInput

    'WS Identificacion
    Public Class Identificacion
        Public Property nif As String
        Public Property pass As String
        Public Property email As String
        Public Property tfno As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newNif As String, ByVal newPass As String, ByVal newEmail As String, ByVal newTfno As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            nif = newNif
            pass = newPass
            email = newEmail
            tfno = newTfno
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS ConfiguracionElemento
    Public Class ConfiguracionElemento
        Public Property token As String
        Public Property elemento As String
        Public Property idioma As String
        Public Sub New(ByVal newToken As String, ByVal newElemento As String, ByVal newIdioma As String)
            token = newToken
            elemento = newElemento
            idioma = newIdioma
        End Sub
    End Class
    'WS ObtenerUrlRedirecGipuzkoataria
    Public Class UrlRedirecGipuzkoataria
        Public Property aplicacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newaplicacion As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            aplicacion = newaplicacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class
    'WS Permisos
    Public Class Permisos
        Public Property aplicacion As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newaplicacion As String, ByVal newUsuario As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            aplicacion = newaplicacion
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS SesionActiva
    Public Class SesionActiva
        Public Property aplicacion As String
        Public Property strIDSesion As String
        Public Property idPortal As String
        Public Property strIPAdd As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newaplicacion As String, ByVal newstrIDSesion As String, ByVal newidPortal As String, ByVal newstrIPAdd As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            aplicacion = newaplicacion
            strIDSesion = newstrIDSesion
            idPortal = newidPortal
            strIPAdd = newstrIPAdd
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class
    'WS RegistrarAcceso
    Public Class RegistrarAcceso
        Public Property aplicacion As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newaplicacion As String, ByVal newusuario As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            aplicacion = newaplicacion
            usuario = newusuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS Autentificacion
    Public Class Autentificacion
        Public Property identificacion As String
        Public Property pass As String
        Public Property usuws As String
        Public Property passws As String
        Public Property aplicacion As String
        Public Property idioma As String
        Public Sub New(ByVal newIdentificacion As String, ByVal newPass As String, ByVal newAplicacion As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            identificacion = newIdentificacion
            pass = newPass
            aplicacion = newAplicacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS Literales
    Public Class Literales
        Public Property aplicacion As String
        Public Property grupo As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newAplicacion As String, ByVal newGrupo As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            aplicacion = newAplicacion
            grupo = newGrupo
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS BuscarExplotacion
    Public Class BuscarExplotacion
        Public Property explotacioninicial As String
        Public Property explotacion As String
        Public Property denominacion As String
        Public Property muncod As String
        Public Property thcod As String
        Public Property matadero As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(newexplotacioninicial As String, ByVal newExplotacion As String, ByVal newDenominacion As String, ByVal newMuncod As String,
                       ByVal newThcod As String, ByVal newMatadero As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacioninicial = newexplotacioninicial
            explotacion = newExplotacion
            denominacion = newDenominacion
            muncod = newMuncod
            thcod = newThcod
            matadero = newMatadero
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS BuscarTransportista
    Public Class BuscarTransportista
        Public Property nif As String
        Public Property nombre As String
        Public Property matricula As String
        Public Property ates As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newNif As String, ByVal newNombre As String, ByVal newMatricula As String,
                       ByVal newAtes As String, ByVal newUsuws As String, ByVal newPassws As String,
                       ByVal newIdioma As String)
            nif = newNif
            nombre = newNombre
            matricula = newMatricula
            ates = newAtes
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class


    'WS BuscarExplotacionesTrabajo
    Public Class BuscarExplotacionesTrabajo
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newUsuario As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ConsultaExplotacion
    Public Class ConsultaExplotacion
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String,
                       ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ConsultaTitulares
    Public Class ConsultaTitulares
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String,
                       ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ConsultaHistorialDeTramites
    Public Class ConsultaHistorialDeTramites
        Public Property explotacion As String
        Public Property usuario As String
        Public Property tipotramite As String
        Public Property fechadesde As String
        Public Property fechahasta As String
        Public Property numtramites As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuario As String,
                       ByVal newTipotramite As String, ByVal newFechadesde As String,
                        ByVal newFechahasta As String, newNumtramites As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuario = newUsuario
            tipotramite = newTipotramite
            fechadesde = newFechadesde
            fechahasta = newFechahasta
            numtramites = newNumtramites
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ImprimirHistorialDeTramite
    Public Class ImprimirHistorialDeTramite
        Public Property identificador As String
        Public Property tipodocumento As String
        Public Property formato As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newIdentificador As String, ByVal newTipodocumento As String, ByVal newFormato As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            identificador = newIdentificador
            tipodocumento = newTipodocumento
            formato = newFormato
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ImprimirCensoAUnaFecha
    Public Class ImprimirCensoAUnaFecha
        Public Property explotacion As String
        Public Property fecha As String
        Public Property tipo As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newFecha As String, ByVal newTipo As String,
                       ByVal newUsuario As String, ByVal newUsuws As String, ByVal newPassws As String,
                       ByVal newIdioma As String)
            explotacion = newExplotacion
            fecha = newFecha
            tipo = newTipo
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ImprimirGuia
    Public Class ImprimirGuia
        Public Property guia As String
        Public Property tipo As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newGuia As String, ByVal newTipo As String,
                       ByVal newUsuws As String, ByVal newPassws As String,
                       ByVal newIdioma As String)
            guia = newGuia
            tipo = newTipo
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ConsultaAsociaciones
    Public Class ConsultaAsociaciones
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ConsultaCalificacion
    Public Class ConsultaCalificacion
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String,
                       ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    Public Class ConsultaMontesAutorizados
        Public Property explotacion As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, newusuario As String, ByVal newUsuws As String, ByVal newPassws As String,
                       ByVal newIdioma As String)
            explotacion = newExplotacion
            usuario = newusuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ImprimirCensoActual
    Public Class ImprimirCensoActual
        Public Property explotacion As String
        Public Property tipo As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newTipo As String, ByVal newUsuario As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            tipo = newTipo
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ConsultaLibroDeRegistro
    Public Class ConsultaLibroDeRegistro
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String,
                       ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ImprimirLibroDeRegistro
    Public Class ImprimirLibroDeRegistro
        Public Property explotacion As String
        Public Property campana As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newCampana As String,
                       ByVal newUsuws As String, ByVal newPassws As String,
                       ByVal newIdioma As String)
            explotacion = newExplotacion
            campana = newCampana
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ConsultaGuias
    Public Class ConsultaGuias
        Public Property explotacion As String
        Public Property idioma As String
        Public Property usuws As String
        Public Property passws As String
        Public Sub New(ByVal newExplotacion As String, ByVal newIdioma As String,
                       ByVal newUsuws As String, ByVal newPassws As String)
            explotacion = newExplotacion
            idioma = newIdioma
            usuws = newUsuws
            passws = newPassws
        End Sub

    End Class

    'WS ConsultaGuiasCrotales
    Public Class ConsultaGuiasCrotales
        Public Property guia As String
        Public Property idioma As String
        Public Property usuws As String
        Public Property passws As String
        Public Sub New(ByVal newGuia As String, ByVal newIdioma As String,
                       ByVal newUsuws As String, ByVal newPassws As String)
            guia = newGuia
            idioma = newIdioma
            usuws = newUsuws
            passws = newPassws
        End Sub

    End Class

    'WS ValidarGuia
    Public Class ValidarGuia
        Public Property exploorigen As String
        Public Property explodestino As String
        Public Property fechasalida As String
        Public Property fechallegada As String
        Public Property niftransportista As String
        Public Property nombretransportista As String
        Public Property matricula As String
        Public Property ates As String
        Public Property crotales As List(Of String)
        Public Property lotes As List(Of String)
        Public Property horasalida As String
        Public Property horallegada As String
        Public Property comprador As String
        Public Property usuario As String
        Public Property icacod As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExploorigen As String, ByVal newExplodestino As String,
                       ByVal newFechasalida As String, ByVal newFechallegada As String, ByVal newHorallegada As String, ByVal newHoraSalida As String,
                       ByVal newNiftransportista As String, ByVal newnombretransportista As String,
                       ByVal newMatricula As String, ByVal newAtes As String,
                       ByVal newCrotales As List(Of String), ByVal newLotes As List(Of String), ByVal newComprador As String, ByVal newUsuario As String, ByVal newicacod As String,
                       ByVal newUsuws As String, ByVal newPassws As String,
                       ByVal newIdioma As String)

            exploorigen = newExploorigen
            explodestino = newExplodestino
            fechasalida = newFechasalida
            fechallegada = newFechallegada
            niftransportista = newNiftransportista
            nombretransportista = newnombretransportista
            matricula = newMatricula
            ates = newAtes
            crotales = newCrotales
            lotes = newLotes
            comprador = newComprador
            usuario = newUsuario
            icacod = newicacod
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
            horallegada = newHorallegada
            horasalida = newHoraSalida
        End Sub

    End Class
    Public Class ValidarGuiaPastos
        Public Property explotacioninicial As String
        Public Property tipoguia As String
        Public Property exploorigen As String
        Public Property explodestino As String
        Public Property fechasalida As String
        Public Property fechallegada As String
        Public Property horasalida As String
        Public Property horallegada As String
        Public Property niftransportista As String
        Public Property nombretransportista As String
        Public Property matricula As String
        Public Property ates As String
        Public Property crotales As List(Of String)
        Public Property lotes As List(Of String)

        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newexplotacioninicial As String, ByVal newtipoguia As String,
                       ByVal newExploorigen As String, ByVal newExplodestino As String,
                       ByVal newFechasalida As String, ByVal newFechallegada As String,
                       ByVal newHoraSalida As String, ByVal newhoraEntrada As String,
                       ByVal newNiftransportista As String, ByVal newnombretransportista As String,
                       ByVal newMatricula As String, ByVal newAtes As String,
                       ByVal newCrotales As List(Of String), ByVal newLotes As List(Of String), ByVal newUsuario As String,
                       ByVal newUsuws As String, ByVal newPassws As String,
                       ByVal newIdioma As String)

            explotacioninicial = newexplotacioninicial
            tipoguia = newtipoguia
            exploorigen = newExploorigen
            explodestino = newExplodestino
            fechasalida = newFechasalida
            fechallegada = newFechallegada
            horasalida = newHoraSalida
            horallegada = newhoraEntrada
            niftransportista = newNiftransportista
            nombretransportista = newnombretransportista
            matricula = newMatricula
            ates = newAtes
            crotales = newCrotales
            lotes = newLotes
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS CrotalesDisponibles
    Public Class CrotalesDisponibles
        Public explotacioninicial As String
        Public Property explotacion As String
        Public Property explodestino As String
        Public Property fechasalida As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(newexplotacioninicial As String, ByVal newExplotacion As String, ByVal newExplotacionDestino As String, ByVal newFechasalida As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacioninicial = newexplotacioninicial
            explotacion = newExplotacion
            explodestino = newExplotacionDestino
            fechasalida = newFechasalida
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class
    'WS ConsultaREsumenCenso
    Public Class ResumenCenso
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class
    'WS CrotalesDisponibles
    Public Class CrotalesDisponiblesCenso
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS UltimoSaneamiento
    Public Class UltimoSaneamiento
        Public Property explotacion As String
        Public Property crotal As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newCrotal As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            crotal = newCrotal
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS ConsultaProvincias
    Public Class ConsultaProvincias
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS ConsultaMunicipios
    Public Class ConsultaMunicipios
        Public Property thcod As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newThcod As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            thcod = newThcod
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS AnularGuia
    Public Class AnularGuia
        Public Property guia As String
        Public Property explotacion As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newGuia As String, ByVal newExplotacion As String, ByVal newUsuario As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            guia = newGuia
            explotacion = newExplotacion
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    Public Class ConsultaDatosAcceso
        Public Property aplicacion As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newAplicacion As String, ByVal newUsuario As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            aplicacion = newAplicacion
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    Public Class ConsultaTitularPrincipal
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class


    'WS BuscarCrotalGuia
    Public Class BuscarCrotalGuia
        Public Property crotal As String
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newCrotal As String, ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            crotal = newCrotal
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ConsultaAutocrotalacion
    Public Class ConsultaAutocrotalacion
        Public Property explotacion As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuario As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS PermisoAutocrotalacion
    Public Class PermisoAutocrotalacion
        Public Property explotacion As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuario As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS SolicitarCrotales
    Public Class SolicitarCrotales
        Public Property explotacion As String
        Public Property usuario As String
        Public Property fecha As String
        Public Property numero As String
        Public Property tenazas As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuario As String, ByVal newFecha As String,
                       ByVal newNumero As String, ByVal newTenazas As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuario = newUsuario
            fecha = newFecha
            numero = newNumero
            tenazas = newTenazas
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ConsultaSolicitudesCrotales
    Public Class ConsultaSolicitudesCrotales
        Public Property explotacion As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuario As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ImprimirAlbaranSolicitudCrotales
    Public Class ImprimirAlbaranSolicitudCrotales
        Public Property id As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newId As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            id = newId
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS SolicitudCrotales
    Public Class SolicitudCrotales
        Public Property id As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newId As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            id = newId
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ConsultaCrotalesDisponibles
    Public Class ConsultaCrotalesDisponibles
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS CrotalesPerdidas
    Public Class CrotalesPerdidas
        Public Property explotacion As String
        Public Property crotal As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newCrotal As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            crotal = newCrotal
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS ConsultarTipoBaja
    'Public Class ConsultarTipoBaja
    '    'Public Property explotacion As String
    '    Public Property usuws As String
    '    Public Property passws As String
    '    Public Property idioma As String
    '    Public Sub New(ByVal newUsuws As String,
    '                   ByVal newPassws As String, ByVal newIdioma As String)
    '        'explotacion = newExplotacion
    '        usuws = newUsuws
    '        passws = newPassws
    '        idioma = newIdioma
    '    End Sub
    'End Class

    'WS NotificarPerdida
    Public Class NotificarPerdida
        Public Property explotacion As String
        Public Property crotal As String
        Public Property tiponotificacion As String
        Public Property tipobaja As String
        Public Property fechacomunicaperdida As String
        Public Property fechaperdida As String
        Public Property comentario As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newCrotal As String, ByVal newTiponotificacion As String,
                       ByVal newTipobaja As String, ByVal newFechacomunicaperdida As String, ByVal newFechaperdida As String,
                       ByVal newComentario As String, ByVal newUsuario As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            crotal = newCrotal
            tiponotificacion = newTiponotificacion
            tipobaja = newTipobaja
            fechacomunicaperdida = newFechacomunicaperdida
            fechaperdida = newFechaperdida
            comentario = newComentario
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS ImprimirJustificantePerdidaCrotal
    Public Class ImprimirJustificantePerdidaCrotal
        Public Property explotacion As String
        Public Property crotal As String
        Public Property fechaperdida As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newCrotal As String, ByVal newFechaperdida As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            crotal = newCrotal
            fechaperdida = newFechaperdida
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class
    'WS ImprimirListadoPerdidaCrotales
    Public Class ImprimirListadoPerdidaCrotales
        Public Property explotacion As String
        Public Property fechadesde As String
        Public Property fechahasta As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newFechadesde As String, ByVal newFechahasta As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            fechadesde = newFechadesde
            fechahasta = newFechahasta
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class
    'WS NotificarColocacion
    Public Class NotificarColocacion
        Public Property explotacion As String
        Public Property crotal As String
        Public Property fechaperdida As String
        Public Property fechaentrega As String
        Public Property fechacolocacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newCrotal As String, ByVal newFechaperdida As String, ByVal newFechaentrega As String, ByVal newFechacolocacion As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            crotal = newCrotal
            fechaperdida = newFechaperdida
            fechaentrega = newFechaentrega
            fechacolocacion = newFechacolocacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class
    'WS ConsultaNotificaciones
    Public Class ConsultaNotificaciones
        Public Property explotacion As String
        Public Property usuario As String
        Public Property aplicacion As String
        Public Property idioma As String
        Public Property usuws As String
        Public Property passws As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuario As String, ByVal newAplicacion As String, ByVal newIdioma As String,
                       ByVal newUsuws As String, ByVal newPassws As String)
            explotacion = newExplotacion
            usuario = newUsuario
            aplicacion = newAplicacion
            idioma = newIdioma
            usuws = newUsuws
            passws = newPassws
        End Sub

    End Class


    'WS ConsultaRazas
    Public Class ConsultaRazas
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS ConsultaSexos
    Public Class ConsultaSexos
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS ConsultaAptitudes
    Public Class ConsultaAptitudes
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class


    'WS ConsultaFacilidadParto
    Public Class ConsultaFacilidadParto
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    'WS ConsultaControlRendimiento
    Public Class ConsultaControlRendimiento
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class


    'WS NotificarNacimiento

    Public Class NotificarNacimiento

        Public Property explotacion As String
        Public Property crotal As String
        Public Property nombre As String
        Public Property razcod As String
        Public Property sexcod As String
        Public Property aptcod As String
        Public Property pesonacimiento As String
        Public Property fpcod As String
        Public Property madre As String
        Public Property madreet As String
        Public Property padre As String
        Public Property fechanacimiento As String
        Public Property usuario As String
        Public Property fechaimplantacion As String
        Public Property numgenealogico As String
        Public Property tpcod As String
        Public Property ticod As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newExplotacion As String, ByVal newCrotal As String, ByVal newNombre As String, ByVal newRazcod As String,
                       ByVal newSexcod As String,
                       ByVal newAptcod As String, ByVal newPesonacimiento As String, ByVal newFpcod As String, ByVal newMadre As String,
                       ByVal newMadreet As String, ByVal newPadre As String,
                       ByVal newFechanacimiento As String, ByVal newFechaimplantacion As String, ByVal registroGenealogico As String,
                       ByVal tipoParto As String, ByVal tipoInseminacion As String,
                       ByVal newUsuario As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            crotal = newCrotal
            nombre = newNombre
            razcod = newRazcod
            sexcod = newSexcod
            aptcod = newAptcod
            pesonacimiento = newPesonacimiento
            fpcod = newFpcod
            madre = newMadre
            madreet = newMadreet
            padre = newPadre
            fechanacimiento = newFechanacimiento
            fechaimplantacion = newFechaimplantacion
            numgenealogico = registroGenealogico
            tpcod = tipoParto
            ticod = tipoInseminacion
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class

    Public Class ConsultaNacimientos

        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class ConsultaMuertes

        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class Muerte

        Public Property crotal As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newCrotal As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            crotal = newCrotal
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class Nacimiento

        Public Property crotal As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newCrotal As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            crotal = newCrotal
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class
    Public Class ImprimirFichaRes

        Public Property crotal As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newCrotal As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            crotal = newCrotal
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class ImprimirDIB

        Public Property crotal As String
        Public Property origen As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newCrotal As String, ByVal newOrigen As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            crotal = newCrotal
            origen = newOrigen
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class ImprimirJustificanteMuerte

        Public Property crotal As String
        Public Property usuario As String
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newCrotal As String, ByVal newUsuario As String, ByVal newExplotacion As String,
                        ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            crotal = newCrotal
            usuario = newUsuario
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class


    Public Class ConsultaGuiasEntradaList

        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class BuscarCrotalGuiaEntrada

        Public Property explotacion As String
        Public Property crotal As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newCrotal As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            crotal = newCrotal
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class NotificarMuerte

        Public Property explotacion As String
        Public Property crotal As String
        Public Property nombre As String
        Public Property fechamuerte As String
        Public Property fechanotificacion As String
        Public Property observaciones As String
        Public Property recogido As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newCrotal As String,
                       ByVal newNombre As String, ByVal newFechamuerte As String,
                       ByVal newFechanotificacion As String, ByVal newObservaciones As String, newrecogido As String,
                       ByVal newUsuario As String,
                       ByVal newUsuws As String, ByVal newPassws As String,
                       ByVal newIdioma As String)
            explotacion = newExplotacion
            crotal = newCrotal
            nombre = newNombre
            fechamuerte = newFechamuerte
            fechanotificacion = newFechanotificacion
            observaciones = newObservaciones
            recogido = newrecogido
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class ConsultaResesVivas

        Public Property explotacion As String
        Public Property crotal As String
        Public Property nombre As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String


        Public Sub New(ByVal newExplotacion As String, ByVal newCrotal As String, ByVal newNombre As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            crotal = newCrotal
            nombre = newNombre
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class


    Public Class CrotalesGuiaConfirmada


        Public Property guia As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newGuia As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            guia = newGuia
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class GuiaEntrada


        Public Property guia As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newGuia As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            guia = newGuia
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class ConfirmarGuia

        Public Property guia As String
        Public Property crotales As List(Of String)
        Public Property agalaxia As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newGuia As String, ByVal newCrotales As List(Of String), ByVal newUsuario As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            guia = newGuia
            crotales = newCrotales
            agalaxia = "false"
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    Public Class RechazarGuia


        Public Property guia As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newGuia As String, ByVal newUsuario As String,
                       newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            guia = newGuia
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class ConsultaEstadoNotificaciones

        Public Property explotacion As String
        Public Property usuario As String
        Public Property aplicacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newUsuario As String, ByVal newAplicacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuario = newUsuario
            aplicacion = newAplicacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class NotificacionVista

        Public Property notcod As String
        Public Property usuario As String
        Public Property aplicacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newNotcod As String, ByVal newUsuario As String, ByVal newAplicacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            notcod = newNotcod
            usuario = newUsuario
            aplicacion = newAplicacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class NotificacionBorrar

        Public Property notcod As String
        Public Property usuario As String
        Public Property aplicacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newNotcod As String, ByVal newUsuario As String, ByVal newAplicacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            notcod = newNotcod
            usuario = newUsuario
            aplicacion = newAplicacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class


    Public Class PrecargaRazaAptitud

        Public Property explotacion As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newUsuario As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class ConsultaTipoParto

        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class



    Public Class ConsultaTipoInseminacion

        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class


    Public Class ObtenerMadre
        Public Property explotacion As String
        Public Property crotal As String
        Public Property nombre As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newCrotal As String, ByVal newNombre As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            crotal = newCrotal
            nombre = newNombre
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class


    Public Class ObtenerMadreET
        Public Property nombre As String
        Public Property crotal As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newNombre As String, ByVal newCrotal As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            nombre = newNombre
            crotal = newCrotal
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class
    'Tarea H0050_Padre
    Public Class ObtenerPadre
        Public Property nombre As String
        Public Property crotal As String
        Public Property explotacion As String
        Public Property razcod As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Property ticod As String 'Tarea H0050 Cambios WS


        'Tarea H0050. Cambios WS
        Public Sub New(ByVal newCrotal As String, ByVal newNombre As String,
                       ByVal newExplotacion As String, ByVal newRazcod As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String, ByVal newticod As String)
            crotal = newCrotal
            nombre = newNombre
            explotacion = newExplotacion
            razcod = newRazcod
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
            ticod = newticod 'Tarea H0050 Cambios WS
        End Sub

    End Class


    Public Class ObtenerCrotalesSinAsignar
        Public Property explotacion As String
        Public Property crotal As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newCrotal As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            crotal = newCrotal
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class


    Public Class ImprimirAltasEntreFechas
        Public Property explotacion As String
        Public Property tipoalta As String
        Public Property tipo As String
        Public Property fechadesde As String
        Public Property fechahasta As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newTipoAlta As String,
                       ByVal newTipo As String, ByVal newFechaDesde As String,
                       ByVal newFechaHasta As String, ByVal newUsuario As String,
                       ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            tipoalta = newTipoAlta
            tipo = newTipo
            fechadesde = newFechaDesde
            fechahasta = newFechaHasta
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class


    Public Class ImprimirBajasEntreFechas
        Public Property explotacion As String
        Public Property tipobaja As String
        Public Property tipo As String
        Public Property fechadesde As String
        Public Property fechahasta As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newTipoBaja As String, ByVal newTipo As String, ByVal newFechaDesde As String, ByVal newFechaHasta As String, ByVal newUsuario As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            tipobaja = newTipoBaja
            tipo = newTipo
            fechadesde = newFechaDesde
            fechahasta = newFechaHasta
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class


    Public Class ConsultaTipoTramite

        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class


    Public Class ConsultaDatosIniICA
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class
    Public Class ConsultaSerieCrotales
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)

            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class NotificarICA
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
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newP1 As String, ByVal newP2 As List(Of String), ByVal newT1 As List(Of String), ByVal newT2 As List(Of String), ByVal newE1 As String, ByVal newE2 As List(Of String), ByVal newE3 As List(Of String), ByVal newE4 As List(Of String), ByVal newE5 As List(Of String), ByVal newE6 As List(Of String), ByVal newE7 As List(Of String), ByVal newE8 As List(Of String), ByVal newE9 As String, ByVal newE10 As List(Of String), ByVal newusuws As String, ByVal newpassws As String, ByVal newidioma As String)
            P1 = newP1
            P2 = newP2
            T1 = newT1
            T2 = newT2
            E1 = newE1
            E2 = newE2
            E3 = newE3
            E4 = newE4
            E5 = newE5
            E6 = newE6
            E7 = newE7
            E8 = newE8
            E9 = newE9
            E10 = newE10
            usuws = newusuws
            passws = newpassws
            idioma = newidioma


        End Sub
    End Class



    Public Class NotificarSerieCrotales
        Public ocacod As String
        Public mecod As String
        Public fechaalta As String
        Public cadesde As String
        Public cahasta As String
        Public caactual As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newocacod As String, ByVal newmecod As String, ByVal newfechaalta As String,
                                      ByVal newcadesde As String, ByVal newcahasta As String, ByVal newcaactual As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            ocacod = newocacod
            mecod = newmecod
            fechaalta = newfechaalta
            cadesde = newcadesde
            cahasta = newcahasta
            caactual = newcaactual
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    Public Class ConsultaOCAs
        Public thcod As String

        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newthcod As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            thcod = newthcod
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class


    Public Class ControlesGuiaNivelExplotacion
        Public explotacioninicial As String
        Public exploorigen As String
        Public explodestino As String

        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newexplotacioninicial As String, ByVal newexploorigen As String, ByVal newexplodestino As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacioninicial = newexplotacioninicial
            exploorigen = newexploorigen
            explodestino = newexplodestino
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class
    'WS TipoGuia
    Public Class TipoGuia
        Public expori As String
        Public expdes As String

        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newexplori As String, ByVal newexplodes As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)

            expori = newexplori
            expdes = newexplodes
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class
    Public Class ConsultaSaneamientos
        Public explotacion As String

        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newexplotacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)

            explotacion = newexplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class
    Public Class ConsultaDetalleSaneamiento
        Public explotacion As String
        Public crotal As String
        Public usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newexplotacion As String, newcrotal As String, newusuario As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)

            explotacion = newexplotacion
            crotal = newcrotal
            usuario = newusuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class
    Public Class NotificarTuberculosis

        Public fecha As String
        Public crotal As String
        Public P1 As String
        Public P2 As String
        Public DOL As String
        Public CAL As String
        Public usuario As String
        Public usuws As String
        Public passws As String
        Public idioma As String

        Public Sub New(ByVal newfecha As String, newcrotal As String, ByVal newP1 As String, newP2 As String, ByVal newDOL As String, newCAL As String, newusuario As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)

            fecha = newfecha
            crotal = newcrotal
            P1 = newP1
            P2 = newP2
            DOL = newDOL
            CAL = newCAL
            usuario = newusuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class
    'WS ImprimirListadoSaneamientos
    Public Class ImprimirListadoSaneamientos
        Public Property explotacion As String
        Public Property tipo As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newTipo As String, newusuario As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            tipo = newTipo
            usuario = newusuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class
    'WS ConsultaSeguimiento
    Public Class ConsultaSeguimiento
        Public Property explotacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub
    End Class
    'WS ImprimirImprimirSeguimiento
    Public Class ImprimirSeguimiento
        Public Property explotacion As String
        Public Property tipo As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newTipo As String, ByVal newUsuario As String,
                       ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            explotacion = newExplotacion
            tipo = newTipo
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS NotificarEntregaCrotales
    Public Class NotificarEntregaCrotales
        Public Property id As String
        Public Property usuario As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String
        Public Sub New(ByVal newId As String, ByVal newUsuario As String, ByVal newUsuws As String,
                       ByVal newPassws As String, ByVal newIdioma As String)
            id = newId
            usuario = newUsuario
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma
        End Sub

    End Class

    'WS ConsultaNotificaciones
    Public Class ConsultaDocumentaciones
        Public Property usuario As String
        Public Property aplicacion As String
        Public Property idioma As String
        Public Property usuws As String
        Public Property passws As String
        Public Sub New(ByVal newUsuario As String, ByVal newAplicacion As String, ByVal newIdioma As String,
                       ByVal newUsuws As String, ByVal newPassws As String)
            usuario = newUsuario
            aplicacion = newAplicacion
            idioma = newIdioma
            usuws = newUsuws
            passws = newPassws
        End Sub

    End Class
    'ConsultaEstadoDocumentaciones
    Public Class ConsultaEstadoDocumentaciones

        Public Property usuario As String
        Public Property aplicacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newUsuario As String, ByVal newAplicacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            usuario = newUsuario
            aplicacion = newAplicacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class
    'DocumentacionVista
    Public Class DocumentacionVista

        Public Property doccod As String
        Public Property usuario As String
        Public Property aplicacion As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newDoccod As String, ByVal newUsuario As String, ByVal newAplicacion As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            doccod = newDoccod
            usuario = newUsuario
            aplicacion = newAplicacion
            usuws = newUsuws
            passws = newPassws
            idioma = newIdioma

        End Sub

    End Class

    'InformeBvd H0033
    Public Class InformeBvd

        Public Property explotacion As String
        Public Property especie As String
        Public Property usuws As String
        Public Property passws As String
        Public Property idioma As String

        Public Sub New(ByVal newExplotacion As String, ByVal newEspecie As String, ByVal newUsuws As String, ByVal newPassws As String, ByVal newIdioma As String)
            'explotación actual, la especie y el idioma.
            explotacion = newExplotacion
            especie = newEspecie
            idioma = newIdioma
            usuws = newUsuws
            passws = newPassws
        End Sub

    End Class

End Class
