Imports NEKAGIP
Public Class explotacion
    Inherits CustomPage

    Public Overrides Sub CustomPageLoad(ByVal sender As Object, ByVal e As System.EventArgs)
        Try
            If Not IsNothing(SessionNekagip.ExplotacionSeleccionada) Then
                Dim datos As WSOutput.ConsultaExplotacion = SessionNekagip.ExplotacionSeleccionada.ConsultaExplotacion()
                'TODO: Mostrar de otra manera los valores Boolean

                nombre.InnerHtml = datos.denominacion
                direccion.InnerHtml = datos.direccion
                municipio.InnerHtml = datos.municipio
                provincia.InnerHtml = datos.provincia
                fecha_estado.InnerHtml = datos.fechaestado
                sistema_productivo.InnerHtml = datos.sistemaproductivo
                capacidad_productiva.InnerHtml = datos.capacidadproductiva
                sostenibilidad.InnerHtml = datos.sostenibilidad
                'autoconsumo.InnerHtml = datos.autoconsumo
                If datos.autoconsumo = "false" Then
                    autoconsumo.Checked = False
                Else
                    autoconsumo.Checked = True
                End If

                'inter_intracomunitario.InnerHtml = datos.interintracomunitario
                If datos.interintracomunitario = "false" Then
                    inter_intracomunitario.Checked = False
                Else
                    inter_intracomunitario.Checked = True
                End If
                'transhumante.InnerHtml = datos.transhumante
                If datos.transhumante = "false" Then
                    transhumante.Checked = False
                Else
                    transhumante.Checked = True
                End If
                observaciones.InnerHtml = datos.observaciones
                Dim clasif As String = ""
                For Each item As String In datos.clasificaciones
                    clasif += item + "<br>"
                Next
                clasificaciones_zootecnicas.InnerHtml = clasif
            End If
        Catch exc As Exception
            errorRedirect("explotacion.aspx")
        End Try


    End Sub

End Class