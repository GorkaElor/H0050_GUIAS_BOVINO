Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class alta1
    Inherits CustomPage



    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)




        ' Si existe la variable de sesión con los datos (sólo cuando se viene atrás desde
        ' la segunda pantalla de alta de guia) mostramos los datos anteriormente introducidos.
        If Not IsNothing(SessionNekagip.GuideData) Then
            exp_destino.Value = SessionNekagip.GuideData.explodestino
            nombre.Value = SessionNekagip.GuideData.explodestinoNombre
            municipio.Value = SessionNekagip.GuideData.explodestinoMunicipio
            provincia.Value = SessionNekagip.GuideData.explodestinoProvincia
            fecha_salida.Value = SessionNekagip.GuideData.fechasalidaWeb
            fecha_llegada.Value = SessionNekagip.GuideData.fechallegadaWeb
            'hora salida y hora_llegada tarea H0007-4
            hora_salida.Value = SessionNekagip.GuideData.horasalida
            hora_llegada.Value = SessionNekagip.GuideData.horallegada
            comprador.Value = SessionNekagip.GuideData.comprador
            dni_trans.Value = SessionNekagip.GuideData.niftransportista
            nombre_trans.Value = SessionNekagip.GuideData.nombretransportista
            matricula.Value = SessionNekagip.GuideData.matricula
            ates.Value = SessionNekagip.GuideData.ates
            exp_destino_matadero.Value = SessionNekagip.GuideData.explodestinomatadero

            'recargo el tipodeguia- se carga en la variable de session SessionNekagip.GuideData.tipoguia 
            Dim tipoguia As WSOutput.TipoGuia
            tipoguia = New WSController().TipoGuia()


            If SessionNekagip.GuideData.tipotransporte = 2 Then
                '**mostrar la capatransporte y preseleccionar la opción A pie y ocultar la capa transportista
                capatransporte.Style.Add("display", "inline")
                transporte.Style.Add("display", "none")
                tipotransporte2.Checked = True
            Else
                '**mostrar la capatransporte y preseleccionar la opción A pie y ocultar la capa transportista
                capatransporte.Style.Add("display", "none")
                transporte.Style.Add("display", "inline")
                tipotransporte1.Checked = True
            End If
        Else
            nombre.Value = Me.LiteralesPage("50312")
            municipio.Value = Me.LiteralesPage("50312")
            provincia.Value = Me.LiteralesPage("50312")
        End If



        If SessionNekagip.ExplotacionSeleccionada.pasto = "true" Then
            If SessionNekagip.GuideData Is Nothing Then
                '**mostrar la capatransporte y preseleccionar la opción A pie y ocultar la capa transportista
                capatransporte.Style.Add("display", "inline")
                ' tipotransporte2.Checked = True
                transporte.Style.Add("display", "none")
            End If

            'si el usuario que ha entrado tiene el permiso de GUIAMONTEAALAVA, va a hacer guias de monte comunal a alava
            'por lo que la explotción destino  se lo ocultamos. Se  recarga el valor con lo que se elija en explotación inicial
            If NEKAGIP.SessionNekagip.PermisosData.lista.Contains("GUIAMONTEAALAVA") = True Then
                cajaExplotacionDestino.Style.Add("display", "none")
            End If
            '**mostrar y cargar la capa de explotacion inicial
            cajaExplotacionInicial.Style.Add("display", "")


                Dim lista As WSOutput.BuscarExplotacionesTrabajoList = New WSController().BuscarExplotacionesTrabajo(SessionNekagip.GAuserId.nif, SessionNekagip.SelectedLanguage)
            'eliminamos los que no sean pastos 
            lista.lista.RemoveAll(Function(z) z.pasto = "true")

            If lista.lista.Count = 1 Then
                Me.exp_inicial.Value = lista.lista(0).explotacion
                Me.nombreinicial.Value = lista.lista(0).denominacion
                Me.buscarExplotacionInicial.Style.Add("display", "none")
                Me.limpiarBuscarExplotacionInicial.Style.Add("display", "none")
                Me.exp_inicial.Disabled = "true"
            End If


            '**quitar como criterio de busqueda matadero
            capamatadero.Style.Add("display", "none")
        Else
            '**ocultar la capa capatransporte y mostrar la capa transportista
            '  tipotransporte1.Checked = True
            If SessionNekagip.GuideData Is Nothing Then
                capatransporte.Style.Add("display", "none")
                transporte.Style.Add("display", "inline")
            End If
            'ocultar la capa explotacioninicial
            Me.exp_inicial.Value = SessionNekagip.ExplotacionSeleccionada.explotacion
            Me.nombreinicial.Value = SessionNekagip.ExplotacionSeleccionada.denominacion

            cajaExplotacionInicial.Style.Add("display", "none")
            '**mostrar como criterio de busqueda matadero
            capamatadero.Style.Add("display", "inline")

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

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getExpList(explotacioninicial As String, ByVal explotacion As String, ByVal denominacion As String,
                                      ByVal muncod As String, ByVal thcod As String, ByVal matadero As String) As String
        Try
            If explotacioninicial = "" Then
                explotacioninicial = SessionNekagip.ExplotacionSeleccionada.explotacion
            End If

            Dim explotations As New WSOutput.BuscarExplotacionList
            ''si el usuario que ha entrado tiene el permiso de GUIAMONTEAALAVA, va a hacer guias de monte comunal a alava
            ''por lo que solo dejaremos las explotaciones de territorio historico 01
            'If NEKAGIP.SessionNekagip.PermisosData.lista.Contains("GUIAMONTEAALAVA") = True Then
            '    Dim lista As WSOutput.BuscarExplotacionesTrabajoList = New WSController().BuscarExplotacionesTrabajo(SessionNekagip.GAuserId.nif, SessionNekagip.SelectedLanguage)
            '    'eliminamos los que sean pastos 
            '    lista.lista.RemoveAll(Function(z) z.pasto = "true")
            '    explotations.lista = New List(Of WSOutput.BuscarExplotacion)
            '    For Each elem As WSOutput.BuscarExplotacionesTrabajo In lista.lista
            '        Dim be As New WSOutput.BuscarExplotacion
            '        be.explotacion = elem.explotacion
            '        be.denominacion = elem.denominacion
            '        be.matadero = elem.matadero
            '        be.notificaciones = elem.notificaciones
            '        be.pasto = elem.pasto
            '        be.thcod = "01"
            '        explotations.lista.Add(be)
            '    Next
            'Else
            explotations = New WSController().BuscarExplotacion(explotacioninicial, explotacion, denominacion, muncod,
                                                                                                     thcod, matadero, SessionNekagip.SelectedLanguage)
            'End If




            Dim explo As WSOutput.BuscarExplotacion = explotations.lista.Find(Function(z) z.explotacion = explotacioninicial)




            If SessionNekagip.ExplotacionSeleccionada.pasto Then

                Dim montes As New WSOutput.ConsultaMontesAutorizadosList
                montes = New WSController().ConsultaMontesAutorizados(explotacioninicial, SessionNekagip.SelectedLanguage)
                If montes.lista.Count > 0 Then
                    'ordenar los montes por campana en descendente
                    montes.lista.Sort(Function(y, z) y.campana > z.campana)
                    Dim campana As String = ""
                    campana = montes.lista(0).campana
                    'elimino los montes autorizados que no sean de esta campaña
                    montes.lista.RemoveAll(Function(z) z.campana <> campana)





                    'eliminamos los que no sean pastos 
                    explotations.lista.RemoveAll(Function(z) z.pasto = "false")
                    'de los que quedan eliminamos los que no tiene autorizados
                    explotations.lista.RemoveAll(Function(z) esMonteAutorizado(z.explotacion, montes, explotacioninicial) = "false")
                End If

                'eliminamos el monte desde el que  se esta haciendo la guia
                explotations.lista.RemoveAll(Function(z) z.explotacion = SessionNekagip.ExplotacionSeleccionada.explotacion)

                'y añadimos la propia explotacion
                If Not explo Is Nothing Then
                    explotations.lista.Add(explo)
                End If
                'ordenar la lista a devolver
                explotations.lista.Sort(Function(y, z) y.explotacion < z.explotacion)
                End If

                If explotations.lista.Count = 1 Then
                'If explotations.lista(0).matadero = "true" Then
                '  'la explotacion seleccionada es un matadero
                '
                '   exp_destino_matadero.Value = "true"
                'Else
                ' 'la explotacion seleccionada NO es un matadero
                '  exp_destino_matadero = "false"
                'End If

            End If
            ''si el usuario que ha entrado tiene el permiso de GUIAMONTEAALAVA, va a hacer guias de monte comunal a alava
            ''por lo que solo dejaremos las explotaciones que empiecen por "ES01"
            'If NEKAGIP.SessionNekagip.PermisosData.lista.Contains("GUIAMONTEAALAVA") = True Then
            '    'eliminamos las explotaciones que no comiencen por "ES01"
            '    explotations.lista.RemoveAll(Function(z) Left(z.explotacion, 4) <> "ES01")

            'End If
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(explotations)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getExpListInicial(ByVal explotacion As String, ByVal denominacion As String,
                                      ByVal muncod As String, ByVal thcod As String) As String
        Try
            Dim explotations As WSOutput.BuscarExplotacionesTrabajoList = New WSController().BuscarExplotacionesTrabajo(SessionNekagip.GAuserId.nif, SessionNekagip.SelectedLanguage)
            'eliminamos los que  sean pastos 
            explotations.lista.RemoveAll(Function(z) z.pasto = "true")
            If explotations.lista.Count = 1 Then
                'If explotations.lista(0).matadero = "true" Then
                '  'la explotacion seleccionada es un matadero
                '
                '   exp_destino_matadero.Value = "true"
                'Else
                ' 'la explotacion seleccionada NO es un matadero
                '  exp_destino_matadero = "false"
                'End If

            End If
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(explotations)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

    ''' <summary>
    ''' Carga los datos que llegan en la variable de sesión.
    ''' Los datos que llegan habrá que añadir a los que ya exitan en
    ''' el objeto que guardamos en sesión ya que los datos necesarios
    ''' para la completa carga del objeto están dispersos entre las 3 pantallas
    ''' utilizadas para el alta de una guia.
    ''' </summary>
    ''' <param name="explodestino"></param>
    ''' <param name="niftransportista"></param>
    ''' <returns>True si todo ha ido bien.</returns>
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function setMainValuesInValidarGuia(destinopasto As String, ByVal explotacioninicial As String, ByVal explodestino As String, ByVal fechasalida As String, ByVal fechasalidaWeb As String,
                                                      ByVal fechallegada As String, ByVal fechallegadaWeb As String, ByVal horallegada As String, ByVal horasalida As String, comprador As String,
                                                      ByVal niftransportista As String, ByVal nombretransportista As String, ByVal matricula As String,
                                                      ByVal ates As String, ByVal explodestinoNombre As String, ByVal explodestinoMunicipio As String,
                                                      ByVal explodestinoProvincia As String, explodestinomatadero As String,
                                                      ByVal montesautorizados As WSOutput.ConsultaMontesAutorizadosList) As Boolean

        Dim guideData As SessionNekagip.Guide
        If IsNothing(SessionNekagip.GuideData) Then
            ' No hay guia creada a la que añadir datos, por lo que creamos una nueva
            guideData = New SessionNekagip.Guide()
            ' La explotación origen será con la que estamos trabajando
            guideData.exploorigen = SessionNekagip.ExplotacionSeleccionada.explotacion
            guideData.usuws = AppSettings.UsuWSNekagip
            guideData.pasws = AppSettings.PassWSNekagip
            'Dim idioma As String = [Enum].GetName(GetType(Common.Language), Convert.ToInt32(SessionNekagip.SelectedLanguage))
            guideData.idioma = SessionNekagip.SelectedLanguage
            'creamos el ica
            'SE CREA EL ICA
            Dim icaData As SessionNekagip.ICA
            '    ' No hay ica creada a la que añadir datos, por lo que creamos una nueva
            icaData = New SessionNekagip.ICA()
            Dim output As WSOutput.ConsultaDatosIniICA = New WSController().ConsultaDatosIniICA(SessionNekagip.ExplotacionSeleccionada.explotacion, SessionNekagip.SelectedLanguage)

            icaData.P1 = output.P1
            icaData.P2 = output.P2
            icaData.T1 = output.T1
            icaData.T2 = output.T2



            icaData.E1 = output.E1
            icaData.E2 = output.E2
            icaData.E3 = output.E3
            icaData.E4 = output.E4
            icaData.E5 = output.E5
            icaData.E6 = output.E6
            icaData.E7 = output.E7
            icaData.E8 = output.E8
            icaData.E9 = output.E9
            icaData.E10 = output.E10



            icaData.usuws = AppSettings.UsuWSNekagip
            icaData.pasws = AppSettings.PassWSNekagip
            'Dim idioma As String = [Enum].GetName(GetType(Common.Language), Convert.ToInt32(SessionNekagip.SelectedLanguage))
            icaData.idioma = SessionNekagip.SelectedLanguage

            SessionNekagip.ICAData = icaData



        Else
            ' Ya tenemos datos de la guia, por lo que los modificamos o añadimos nuevos
            guideData = SessionNekagip.GuideData
        End If

        guideData.explodestino = explodestino
        guideData.explodestinoNombre = explodestinoNombre
        guideData.explodestinoMunicipio = explodestinoMunicipio
        guideData.explodestinoProvincia = explodestinoProvincia
        guideData.explodestinomatadero = explodestinomatadero
        guideData.fechasalida = fechasalida
        guideData.fechasalidaWeb = fechasalidaWeb
        guideData.fechallegada = fechallegada
        guideData.fechallegadaWeb = fechallegadaWeb
        guideData.horasalida = horasalida
        guideData.horallegada = horallegada

        'Convertimos las horas
        'en un arreglo

        Dim hsalidaArr() As String
        Dim hllegadaArr() As String

        hsalidaArr = horasalida.Split(":")
        hllegadaArr = horallegada.Split(":")
        If hsalidaArr.Length <> 2 Or hllegadaArr.Length <> 2 Then
            Exit Function
        End If

        Dim minutosSalida As Integer
        Dim horasSalida As Integer

        Dim minutosEntrada As Integer
        Dim horasEntrada As Integer

        minutosSalida = CInt(hsalidaArr(1))
        horasSalida = CInt(hsalidaArr(0))

        minutosEntrada = CInt(hllegadaArr(1))
        horasEntrada = CInt(hllegadaArr(0))


        If ((fechallegada = fechasalida) And (horasSalida > horasEntrada)) Or ((fechallegada = fechasalida) And (horasSalida = horasEntrada) And minutosSalida >= minutosEntrada) Then
            Exit Function
            'Return False
        End If
        guideData.comprador = comprador

        'tipo de transporte utilizado
        If niftransportista = "" Then
            guideData.tipotransporte = 2
        Else
            guideData.tipotransporte = 1
        End If
        guideData.niftransportista = niftransportista
        guideData.nombretransportista = nombretransportista
        guideData.matricula = matricula
        guideData.ates = ates

        'obtenemos tipo de guia
        '0:Explo-->Monte
        '1:Monte-->Explo
        '2:Monte-->Monte
        '3:Explo-->Explo
        Dim monte As WSOutput.ConsultaMontesAutorizados

        guideData.explotacioninicial = explotacioninicial
        SessionNekagip.GuideData = guideData
        'cargamos el tipo de guia
        guideData.tipoguia = New WSController().TipoGuia().message



        Select Case guideData.tipoguia
            Case "0"
                'destino es monte
                montesautorizados.lista.Sort(Function(y, z) y.campana > z.campana)
                Dim campana As String = ""
                campana = montesautorizados.lista(0).campana
                'elimino los montes autorizados que no sean de esta campaña
                montesautorizados.lista.RemoveAll(Function(z) z.campana <> campana)




                'guardamos los datos del monte destino
                monte = montesautorizados.lista.Find(Function(z) z.explotacion = explodestino)
            Case "2"

                'obtengo los montes autorizados de la explotación inicial seleccionada(devuelve de todas las campañas)
                Dim montesautorizados_expinicial As WSOutput.ConsultaMontesAutorizadosList = New WSController().ConsultaMontesAutorizados(guideData.explotacioninicial, SessionNekagip.SelectedLanguage)
                'ordenar los montes por campana en descendente
                montesautorizados_expinicial.lista.Sort(Function(y, z) y.campana > z.campana)
                Dim campana As String = ""
                campana = montesautorizados_expinicial.lista(0).campana
                'elimino los montes autorizados que no sean de esta campaña
                montesautorizados_expinicial.lista.RemoveAll(Function(z) z.campana <> campana)

                'destino es monte
                'guardamos los datos del monte destino
                monte = montesautorizados_expinicial.lista.Find(Function(z) z.explotacion = explodestino)

        End Select

        guideData.monteautorizado = monte
        Return True
    End Function
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
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
    Public Shared Function ControlesGuiaNivelExplotacion(ByVal explotacioninicial As String, ByVal explodestino As String) As String
        Try
            Dim resultado As WSOutput.ControlesGuiaNivelExplotacion = New WSController().ControlesGuiaNivelExplotacion(explotacioninicial, SessionNekagip.ExplotacionSeleccionada.explotacion, explodestino)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(resultado)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try

    End Function

End Class