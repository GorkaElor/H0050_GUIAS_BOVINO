
Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports System.Text
Imports System.Collections
Imports IKT.RecAplNet.Entidades
Imports IKT.RecAplNet.General
Imports IKT.RecAplNet.VistaWeb
Imports IKT.RecAplNet

Namespace VistaWeb
    ''' <summary>
    ''' Respuesta JSON para jqueryDatatables.
    ''' </summary>
    Public Class jqueryDatatablesRequest
        Private _busqueda As Hashtable
        Public Property busqueda() As Hashtable
            Get
                If _busqueda Is Nothing Then
                    _busqueda = New Hashtable
                End If
                Return _busqueda
            End Get
            Set(ByVal value As Hashtable)
                _busqueda = value
            End Set
        End Property

    End Class
End Namespace

