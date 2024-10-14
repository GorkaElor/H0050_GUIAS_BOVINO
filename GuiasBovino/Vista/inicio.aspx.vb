Imports NEKAGIP
Imports System.Web.Services
Imports System.Web.Script.Services
Public Class inicio
    Inherits CustomPage
    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)
        Try
            If Not IsNothing(SessionNekagip.ExplotacionSeleccionada) Then

                Dim datos_exp As WSOutput.ConsultaExplotacion = SessionNekagip.ExplotacionSeleccionada.ConsultaExplotacion()
                Dim info_explotacion As String = ""
                info_explotacion += "<strong>" + datos_exp.denominacion + "</strong><br>"
                info_explotacion += datos_exp.direccion + "<br>"
                info_explotacion += datos_exp.municipio + " " + datos_exp.cp + "<br>"
                info_explotacion += datos_exp.provincia + "<br>"
                datos_explotacion.InnerHtml = info_explotacion


                'restricciones de salida
                If datos_exp.restriccionessalida Is Nothing OrElse datos_exp.restriccionessalida.Count = 0 Then
                    caparestriccionessalida.Style.Add("display", "none")
                Else
                    caparestriccionessalida.Style.Add("display", "")
                    restriccionesSalida.InnerText = LiteralesPage("53852") ' "Tiene restricciones de salida"
                    Dim motivos As String = ""
                    For Each res As WSOutput.RestriccionSalida In datos_exp.restriccionessalida
                        If motivos = "" Then
                            motivos = res.motivodes
                        Else
                            'Si no esta el motivo en el string , se mete
                            If motivos.IndexOf(res.motivodes) = -1 Then
                                motivos = motivos + " / " + res.motivodes
                            End If
                        End If
                    Next
                    If motivos <> "" Then
                        restriccionesSalida.InnerText = restriccionesSalida.InnerText + "(" + motivos + ")"
                    End If
                End If


                Dim info_encabezado As String = ""
                info_encabezado += LiteralesPage("50202")
                info_encabezado += " <b>" + SessionNekagip.ExplotacionSeleccionada.explotacion + "</b>"
                info_encabezado += " - " + datos_exp.denominacion
                encabezado.InnerHtml = info_encabezado

                nomre_usuario.InnerText = SessionNekagip.DataAccess.nombreusuario
                ultimo_acceso.InnerText = LiteralesPage("50203") + ": " + SessionNekagip.DataAccess.fechaultimoacceso


                If SessionNekagip.ExplotacionSeleccionada.pasto = "false" Then

                    Dim exp_notif As WSOutput.ConsultaEstadoNotificaciones = SessionNekagip.ExplotacionSeleccionada.ConsultaEstadoNotificaciones()
                    'Notificaciones
                    numNotificaciones.InnerText = exp_notif.sinleer
                    numNotificacionesTotales.InnerText = exp_notif.total

                    Dim exp_docu As WSOutput.ConsultaEstadoDocumentaciones = SessionNekagip.ExplotacionSeleccionada.ConsultaEstadoDocumentaciones()
                    'Documentaciones
                    numDocumentaciones.InnerText = exp_docu.sinleer
                    numDocumentacionesTotales.InnerText = exp_docu.total


                    Dim datos_permiso_autocrotalacion As WSOutput.ConsultaAutocrotalacion = SessionNekagip.ExplotacionSeleccionada.ConsultaAutocrotalacion()
                    If (datos_permiso_autocrotalacion.estado = -1) Then
                        'NO SOLICITADO 
                        '-- Mostrar bloque de permiso autocrotalacion
                        'COLOCAR Literales

                        Dim info_permiso_autocrot As String = ""
                        info_permiso_autocrot += "<a href='solicitud_permiso.aspx' class='anuncio'> <div class='col-md-4 anuncio-autocrotalacion'>"
                        info_permiso_autocrot += "<h3>" + Me.LiteralesPage("50215") + "</h3> <p>" + Me.LiteralesPage("50214") + "</p> </div> </a>"
                        permiso_autocrot.InnerHtml = info_permiso_autocrot
                    End If

                    'mostramos capatramites,capanotificaciones,permiso_autocrot,capatitular
                    capatramites.Style.Add("display", "")
                    capanotificaciones.Style.Add("display", "")
                    permiso_autocrot.Style.Add("display", "")
                    capatitular.Style.Add("display", "")
                Else

                    'ocultamos capatramites,capanotificaciones,permiso_autocrot,capatitular
                    capatramites.Style.Add("display", "none")
                    capanotificaciones.Style.Add("display", "none")
                    permiso_autocrot.Style.Add("display", "none")
                    capatitular.Style.Add("display", "none")
                End If


            End If
        Catch exc As Exception
            errorRedirect("inicio.apsx")
        End Try
    End Sub

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function getHistProcedures() As String
        Try
            Dim HistProcedures As New WSOutput.ConsultaHistorialDeTramitesList
            HistProcedures.lista = New List(Of WSOutput.ConsultaHistorialDeTramites)
            HistProcedures.status = "200"
            HistProcedures.code = "200"
            HistProcedures.message = ""


            Dim length As Integer = 4
            If SessionNekagip.ExplotacionSeleccionada.pasto = "false" Then
                HistProcedures = SessionNekagip.ExplotacionSeleccionada.ConsultaHistorialDeTramites("", "", "", 4)
                If HistProcedures.lista.Count < 4 Then
                    length = HistProcedures.lista.Count
                End If
                Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(HistProcedures.lista.GetRange(0, length))
            Else
                Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(HistProcedures)
            End If
            'HistProcedures.lista.Sort()
            'HistProcedures.lista.Reverse()


        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function

    'H0033 INI
    <WebMethod()>
 <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function checkPermisos() As String
        Try
            Dim listaPer As New WSOutput.Permisos
            'SessionNekagip
            Dim permiso As Boolean = False
            For Each permisoLista In SessionNekagip.PermisosData.lista
                If permisoLista.Equals("IMP_RPT_BVD") Then
                    permiso = True
                End If
            Next

            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(permiso)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function

    '    <WebMethod()>
    '<ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    '    Public Shared Function getDataInforme() As String
    '        Try
    '            Dim datos_exp As WSOutput.InformeBvd = New WSController().InformeBvd(SessionNekagip.ExplotacionSeleccionada.explotacion, "01", System.Web.HttpContext.Current.Session("SelectedLanguage"))
    '            Dim asddd As String = ""

    '            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(datos_exp)


    '        Catch exc As Exception
    '            Dim res As Common.Errors = New Common.Errors
    '            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
    '            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
    '        End Try
    '    End Function
    '    'H0033 FIN

    'H0037 INICIO
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function checkPermisosNeoEsporas() As String
        Try
            Dim listaPer As New WSOutput.Permisos
            'SessionNekagip
            Dim permiso As Boolean = False
            For Each permisoLista In SessionNekagip.PermisosData.lista
                If permisoLista.Equals("(IMP_RPT_NEOS") Then
                    permiso = True
                End If
            Next

            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(permiso)
        Catch exc As Exception
            Dim res As Common.Errors = New Common.Errors
            res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
            Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
        End Try
    End Function

    '<WebMethod()>
    '<ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    'Public Shared Function getDataInformeNeoEsporas() As String
    '    Try
    '        Dim datos_exp As WSOutput.InformeNeoEsporas = New WSController().InformeNeoEsporas(SessionNekagip.ExplotacionSeleccionada.explotacion, "01", System.Web.HttpContext.Current.Session("SelectedLanguage"))
    '        Dim asddd As String = ""

    '        Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(datos_exp)


    '    Catch exc As Exception
    '        Dim res As Common.Errors = New Common.Errors
    '        res.composeError(Common.Errors.ErrorTypes.generic, exc.Message, HttpContext.Current)
    '        Return New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(res)
    '    End Try
    'End Function
    ''H0037-FIN
End Class