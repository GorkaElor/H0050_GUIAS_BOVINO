Imports IKT.RecAplNet.Daos
Imports IKT.RecAplNet.Negocios
Imports IKT.RecAplNet.General
Imports IKT.RecAplNet.VistaWeb
Imports IKT.RecAplNet.Entidades
Imports WEB
Imports System.Data
Imports WEB.VistaWeb
Imports System.Linq 'dt.Rows.Cast

Namespace RecAplNet.VistaWeb
    Public Class PageHAZI_AYUDAS
#Region "WebMethods "
        ''' <summary>
        ''' Obtiene un objeto grid que se pintará con el plugin de JQGrid
        ''' </summary>
        ''' <param name="data"></param>
        ''' <param name="entidad"></param>
        ''' <param name="JQG"></param>
        ''' <param name="SQLElements"></param>
        ''' <returns>jqueryDatatablesResponse</returns>
        ''' <remarks></remarks>
        Public Shared Function getGridEntidad(ByVal data As Hashtable, ByVal entidad As iEntidad, ByRef JQG As jqueryDatatablesResponse, ByVal ParamArray SQLElements As Object()) As jqueryDatatablesResponse
            Dim dt As DataTable
            If Not PageIKT.esAccesible(data("hash")) Then
                Return Nothing
            End If

            ''' TODO: utilizar gridBD

            dt = BPM.obtenerListaDT(entidad, SQLElements)
            If Not data("start") Is Nothing Then
                Dim dtPage As DataTable = dt.Rows.Cast(Of System.Data.DataRow)().Skip(data("start")).Take(data("length")).CopyToDataTable()
                If Not dtPage Is Nothing Then
                    Dim err = SessionIKT.GetErrores()
                    For Each alerta As ErroresIKT In err
                        If alerta.TipoAviso = ErroresIKT.tipoAlerta Then
                            SessionIKT.setError(alerta)
                        End If
                    Next
                End If
                JQG.llenar(dt, dtPage, entidad)
            Else
                JQG.llenar(dt, entidad)
            End If


            JQG.draw = CInt(data("draw"))
            Return JQG
        End Function
#End Region

    End Class
End Namespace

