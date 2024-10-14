
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
Imports System.Globalization

Namespace VistaWeb
    ''' <summary>
    ''' Respuesta JSON para jqueryDatatables.
    ''' </summary>
    Public Class jqueryDatatablesResponse


#Region "atributos"

        Private _draw As Integer
        Private _recordsTotal As Integer
        Private _recordsFiltered As Integer
        Private _data As List(Of Hashtable)
        Private _error As String
        Private _gridDT As DataTable
#End Region

#Region "Propiedades"
        Public Property draw() As Integer
            Get
                Return _draw
            End Get
            Set(ByVal value As Integer)
                _draw = value
            End Set
        End Property

        Public Property recordsTotal() As Integer
            Get
                Return _recordsTotal
            End Get
            Set(ByVal value As Integer)
                _recordsTotal = value
            End Set
        End Property

        Public Property recordsFiltered() As Integer
            Get
                Return _recordsFiltered
            End Get
            Set(ByVal value As Integer)
                _recordsFiltered = value
            End Set
        End Property

        Public Property data() As List(Of Hashtable)
            Get
                Return _data
            End Get
            Set(ByVal value As List(Of Hashtable))
                _data = value
            End Set
        End Property

        Public Property errorProperty() As String
            Get
                Return _error
            End Get
            Set(ByVal value As String)
                _error = value
            End Set
        End Property


        Private _cols As String()
        Public Property Columnas() As String()
            Get
                Return _cols
            End Get
            Set(ByVal value As String())
                _cols = value
            End Set
        End Property

        ''' <summary>
        ''' Hashtable con los formatos rellenos con el par columna,Formato
        ''' </summary>
        ''' <remarks>Los formatos bienen definidas por las constantes de la clase JQFormatos</remarks>
        Private _formatos As Hashtable
        Public Property Formatos() As Hashtable
            Get
                If _formatos Is Nothing Then
                    _formatos = New Hashtable()
                End If
                Return _formatos
            End Get
            Set(ByVal value As Hashtable)
                _formatos = value
            End Set
        End Property
#End Region

#Region "Funciones"

        Public Overridable Function getPKs(ByRef dt As DataTable, ByRef oRow As DataRow, ByVal Entidad As iEntidad) As String
            Dim primarys As New List(Of String)
            For Each nameID As String In Entidad.EntidadConfig.ItemsKey
                primarys.Add(oRow(nameID))
            Next
            Return String.Join(PageIKT.keySep, primarys.ToArray())
        End Function
        Public Overridable Function getPKs(ByRef dt As DataTable, ByRef oRow As DataRow) As String
            Dim primarys As New List(Of String)
            For Each dc As DataColumn In dt.PrimaryKey
                primarys.Add(oRow(dc.ColumnName))
            Next
            Return String.Join(PageIKT.keySep, primarys.ToArray())
        End Function

        Public Overridable Function getData(ByRef dt As DataTable, ByRef oROW As DataRow, ByVal Entidad As iEntidad) As Hashtable
            Dim data As New Hashtable
            If Columnas Is Nothing Then
                For index As Integer = 0 To dt.Columns.Count - 1
                    If Formatos.ContainsKey(dt.Columns(index).ColumnName) Then
                        data(dt.Columns(index).ColumnName) = oROW.Item(index).ToString(Formatos(dt.Columns(index).ColumnName).ToString())
                    Else
                        If TypeOf (oROW.Item(index)) Is Date Then
                            '.ToString("d", SessionIKT.Culture)
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(index), System.DateTime).ToString("d", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(index)) Is System.Double Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(index), System.Double).ToString("N", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(index)) Is System.Decimal Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(index), System.Decimal).ToString("N", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(index)) Is System.Single Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(index), System.Single).ToString("N", SessionIKT.Culture)
                        ElseIf IsNumeric(oROW.Item(index)) AndAlso Not TypeOf oROW.Item(index) Is System.String Then
                            data(dt.Columns(index).ColumnName) = CType(oROW.Item(index), System.Int64).ToString("N", SessionIKT.Culture).Split(",")(0)
                        Else
                            data(dt.Columns(index).ColumnName) = oROW.Item(index)
                        End If
                    End If
                Next
            Else
                For Each col As String In Columnas
                    If Formatos.ContainsKey(col) Then
                        If Not oROW(col) Is Nothing AndAlso Not IsDBNull(oROW(col)) Then
                            If Formatos(col).ToString() = JQFormatos.SINSALTOS Then
                                data(col) = oROW(col).ToString().Replace(vbLf, "")
                            ElseIf Formatos(col).ToString() = JQFormatos.SINO Then
                                Try
                                    Dim val As Boolean = CBool(oROW(col))
                                    If val Then
                                        If SessionIKT.Idioma = IdiomaIKT.IKT_CASTELLANO Then
                                            data(col) = JQFormatos.SI_C
                                        ElseIf SessionIKT.Idioma = IdiomaIKT.IKT_EUSKERA Then
                                            data(col) = JQFormatos.SI_E
                                        Else
                                            data(col) = oROW(col).ToString()
                                        End If
                                    Else
                                        If SessionIKT.Idioma = IdiomaIKT.IKT_CASTELLANO Then
                                            data(col) = JQFormatos.NO_C
                                        ElseIf SessionIKT.Idioma = IdiomaIKT.IKT_EUSKERA Then
                                            data(col) = JQFormatos.NO_E
                                        Else
                                            data(col) = oROW(col).ToString()
                                        End If
                                    End If
                                Catch ex As Exception
                                    data(col) = oROW(col).ToString()
                                End Try

                            Else
                                data(col) = CType(oROW.Item(col), IFormattable).ToString(Formatos(col).ToString(), SessionIKT.Culture)
                            End If
                        End If
                    Else
                        If TypeOf (oROW.Item(col)) Is Date Then
                            '.ToString("d", SessionIKT.Culture)
                            data(col) = DirectCast(oROW.Item(col), System.DateTime).ToString("d", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(col)) Is System.Double Then
                            data(col) = DirectCast(oROW.Item(col), System.Double).ToString("N", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(col)) Is System.Decimal Then
                            data(col) = DirectCast(oROW.Item(col), System.Decimal).ToString("N", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(col)) Is System.Single Then
                            data(col) = DirectCast(oROW.Item(col), System.Single).ToString("N", SessionIKT.Culture)
                        ElseIf IsNumeric(oROW.Item(col)) AndAlso Not TypeOf oROW.Item(col) Is System.String Then
                            data(col) = CType(oROW.Item(col), System.Int64).ToString("N", SessionIKT.Culture).Split(",")(0)
                        Else
                            data(col) = oROW.Item(col)
                        End If
                    End If
                Next
            End If
            data("DT_RowId") = getPKs(dt, oROW, Entidad)

            Return data
        End Function

        Public Overridable Function getData(ByRef dt As DataTable, ByRef oROW As DataRow) As Hashtable
            Dim data As New Hashtable

            If Columnas Is Nothing Then
                For index As Integer = 0 To dt.Columns.Count - 1
                    If Formatos.ContainsKey(dt.Columns(index).ColumnName) Then
                        data(dt.Columns(index).ColumnName) = oROW.Item(index).ToString(Formatos(dt.Columns(index).ColumnName).ToString())
                    Else
                        If TypeOf (oROW.Item(index)) Is Date Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(index), System.DateTime).ToString("d", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(index)) Is System.Double Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(index), System.Double).ToString("N", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(index)) Is System.Decimal Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(index), System.Decimal).ToString("N", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(index)) Is System.Single Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(index), System.Single).ToString("N", SessionIKT.Culture)
                        ElseIf IsNumeric(oROW.Item(index)) AndAlso Not TypeOf oROW.Item(index) Is System.String Then
                            data(dt.Columns(index).ColumnName) = CType(oROW.Item(index), System.Int64).ToString("N", SessionIKT.Culture).Split(",")(0)
                        Else
                            data(dt.Columns(index).ColumnName) = oROW.Item(index)
                        End If
                    End If
                Next
                For index As Integer = 0 To dt.Columns.Count - 1
                    If Formatos.ContainsKey(dt.Columns(index).ColumnName) Then
                        data(dt.Columns(index).ColumnName) = oROW.Item(index).ToString(Formatos(dt.Columns(index).ColumnName).ToString())
                    Else
                        If TypeOf (oROW.Item(index)) Is Date Then
                            '.ToString("d", SessionIKT.Culture)
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(index), System.DateTime).ToString("d", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(index)) Is System.Double Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(index), System.Double).ToString("N", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(index)) Is System.Decimal Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(index), System.Decimal).ToString("N", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(index)) Is System.Single Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(index), System.Single).ToString("N", SessionIKT.Culture)
                        ElseIf IsNumeric(oROW.Item(index)) AndAlso Not TypeOf oROW.Item(index) Is System.String Then
                            data(dt.Columns(index).ColumnName) = CType(oROW.Item(index), System.Int64).ToString("N", SessionIKT.Culture).Split(",")(0)
                        Else
                            data(dt.Columns(index).ColumnName) = oROW.Item(index)
                        End If
                    End If
                Next
            Else
                Dim index As Integer = 0
                For Each col As String In Columnas
                    If Formatos.ContainsKey(col) Then
                        If Not oROW(col) Is Nothing AndAlso Not IsDBNull(oROW(col)) Then
                            If Formatos(col).ToString() = JQFormatos.SINSALTOS Then
                                data(dt.Columns(index).ColumnName) = oROW(col).ToString().Replace(vbLf, "")
                            ElseIf Formatos(col).ToString() = JQFormatos.SINO Then
                                Try
                                    Dim val As Boolean = CBool(oROW(col))
                                    If val Then
                                        If SessionIKT.Idioma = IdiomaIKT.IKT_CASTELLANO Then
                                            data(dt.Columns(index).ColumnName) = JQFormatos.SI_C
                                        ElseIf SessionIKT.Idioma = IdiomaIKT.IKT_EUSKERA Then
                                            data(dt.Columns(index).ColumnName) = JQFormatos.SI_E
                                        Else
                                            data(dt.Columns(index).ColumnName) = oROW(col).ToString()
                                        End If
                                    Else
                                        If SessionIKT.Idioma = IdiomaIKT.IKT_CASTELLANO Then
                                            data(dt.Columns(index).ColumnName) = JQFormatos.NO_C
                                        ElseIf SessionIKT.Idioma = IdiomaIKT.IKT_EUSKERA Then
                                            data(dt.Columns(index).ColumnName) = JQFormatos.NO_E
                                        Else
                                            data(dt.Columns(index).ColumnName) = oROW(col).ToString()
                                        End If
                                    End If
                                Catch ex As Exception
                                    data(dt.Columns(index).ColumnName) = oROW(col).ToString()
                                End Try

                            Else

                                If (SessionIKT.Idioma = IdiomaIKT.IKT_CASTELLANO) Then
                                    Dim _cultureIkt As CultureInfo

                                    _cultureIkt = CultureInfo.CreateSpecificCulture("es-ES")
                                    Dim dtf As New DateTimeFormatInfo()
                                    dtf.FullDateTimePattern = "dd/MM/yyyy hh:mm:ss"
                                    dtf.LongDatePattern = "dd/MM/yyyy hh:mm:ss"
                                    dtf.ShortDatePattern = "dd/MM/yyyy"
                                    _cultureIkt.DateTimeFormat = dtf

                                    _cultureIkt.NumberFormat.CurrencyDecimalSeparator = ","
                                    _cultureIkt.NumberFormat.NumberDecimalSeparator = ","

                                    data(dt.Columns(index).ColumnName) = CType(oROW.Item(col), IFormattable).ToString(Formatos(col).ToString(), _cultureIkt)
                                Else
                                    data(dt.Columns(index).ColumnName) = CType(oROW.Item(col), IFormattable).ToString(Formatos(col).ToString(), SessionIKT.Culture)
                                End If

                            End If
                        Else
                            data(dt.Columns(index).ColumnName) = oROW.Item(col)
                        End If
                        index = index + 1
                    Else
                        If TypeOf (oROW.Item(col)) Is Date Then
                            '.ToString("d", SessionIKT.Culture)
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(col), System.DateTime).ToString("d", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(col)) Is System.Double Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(col), System.Double).ToString("N", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(col)) Is System.Decimal Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(col), System.Decimal).ToString("N", SessionIKT.Culture)
                        ElseIf TypeOf (oROW.Item(col)) Is System.Single Then
                            data(dt.Columns(index).ColumnName) = DirectCast(oROW.Item(col), System.Single).ToString("N", SessionIKT.Culture)
                        ElseIf IsNumeric(oROW.Item(col)) AndAlso Not TypeOf oROW.Item(col) Is System.String Then
                            data(dt.Columns(index).ColumnName) = CType(oROW.Item(col), System.Int64).ToString("N", SessionIKT.Culture).Split(",")(0)
                        Else
                            data(dt.Columns(index).ColumnName) = oROW.Item(col)
                        End If
                        index = index + 1
                    End If
                Next
            End If
            data("DT_RowId") = getPKs(dt, oROW)
            Return data
        End Function

#End Region


#Region "Llenar con datatables"
        Public Sub llenar(ByVal dt As DataTable, ByVal Entidad As iEntidad)
            If _data Is Nothing Then
                _data = New List(Of Hashtable)()
            End If
            For Each oRow As DataRow In dt.Rows
                _data.Add(getData(dt, oRow, Entidad))
            Next
            _recordsTotal = dt.Rows.Count
            _recordsFiltered = dt.Rows.Count
            _gridDT = dt.Copy
            dt.Dispose()
            dt.Clear()
            dt = Nothing
        End Sub
        Public Sub llenar(ByVal dt As DataTable, ByVal dtPage As DataTable, ByVal Entidad As iEntidad)
            If _data Is Nothing Then
                _data = New List(Of Hashtable)()
            End If
            For Each oRow As DataRow In dtPage.Rows
                _data.Add(getData(dtPage, oRow, Entidad))
            Next
            _recordsTotal = dt.Rows.Count
            _recordsFiltered = dtPage.Rows.Count
            _gridDT = dtPage.Copy
            dt.Dispose()
            dt.Clear()
            dt = Nothing
            dtPage.Dispose()
            dtPage.Clear()
            dtPage = Nothing
        End Sub

        Public Sub llenar(ByVal dt As DataTable)
            If _data Is Nothing Then
                _data = New List(Of Hashtable)()
            End If
            For Each oRow As DataRow In dt.Rows
                _data.Add(getData(dt, oRow))
            Next
            _recordsTotal = dt.Rows.Count
            _recordsFiltered = dt.Rows.Count
            _gridDT = dt.Copy
            dt.Dispose()
            dt.Clear()
            dt = Nothing
        End Sub

#End Region


        Public Sub New()

            If IKT.RecAplNet.General.SessionIKT.getValor("Idioma") = IKT.RecAplNet.General.IdiomaIKT.IKT_CASTELLANO Then
                IKT.RecAplNet.General.SessionIKT.Idioma = IKT.RecAplNet.General.IdiomaIKT.IKT_CASTELLANO
            Else
                IKT.RecAplNet.General.SessionIKT.Idioma = IKT.RecAplNet.General.IdiomaIKT.IKT_EUSKERA
            End If
        End Sub
    End Class
End Namespace

