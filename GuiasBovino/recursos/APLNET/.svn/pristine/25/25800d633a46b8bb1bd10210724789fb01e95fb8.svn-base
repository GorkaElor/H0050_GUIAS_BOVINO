Imports IKT.NegocioUsys.Negocios
Imports System.Web.UI
Imports System.Web.Services
Imports System.Web.Script.Services
Imports System.Collections
Imports IKT.RecAplNet
Imports IKT.RecAplNet.General
Imports IKT.RecAplNet.VistaWeb
Imports IKT.RecAplNet.Negocios
Partial Public Class Vista_GridSelGen
    Inherits System.Web.UI.Page
    Private _Literales As Hashtable
    Public Property Literales() As Hashtable
        Get
            Return _Literales
        End Get
        Set(ByVal value As Hashtable)

            _Literales = value
        End Set
    End Property
    Private _idElemento As String = "edicion"
    Public Property idElemento() As String
        Get
            Return _idElemento
        End Get
        Set(ByVal value As String)
            _idElemento = value
        End Set
    End Property
    Private _arrLits As ArrayList
    Public Property arrLits() As ArrayList
        Get
            Return _arrLits
        End Get
        Set(ByVal value As ArrayList)

            _arrLits = value
        End Set
    End Property
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim sLiterales As String() = If(Not Request.Item("literales") Is Nothing AndAlso Request.Item("literales").ToString().Length > 0, Request.Item("literales").ToString().Split(","), New String() {})
        Dim neg As New Negocio_Usys.Litera()
        Dim arr As New ArrayList()
        For Each lit As String In sLiterales
            arr.Add(CInt(lit))
        Next
        If arr.Count > 0 Then
            arr.Add(50025)
            arr.Add(50026)
        End If
        _arrLits = arr
        Me.Literales = neg.Obtener(arr)
        Me.idElemento = Request.Item("idElemento")
    End Sub
    <WebMethod()> _
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)> _
    Public Shared Function GetGrid_GridSelGen(ByVal pPageSize As Integer, ByVal pCurrentPage As Integer, ByVal pSortColumn As String, ByVal pSortOrder As String, ByVal hash As String, ByVal where As Hashtable) As JQGridJsonResponse
        Dim parameters As New Hashtable
        Dim comparas As New Hashtable
        Dim dbComparas As System.Collections.ICollection = where("dbComparas")
        For Each key In where.Keys
            If Not where(key) Is Nothing AndAlso where(key).ToString() <> "" AndAlso key.ToString <> "hash" _
            AndAlso key.ToString() <> "grid_id" AndAlso key.ToString() <> "ID" AndAlso key.ToString() <> "grupo" _
            AndAlso key.ToString() <> "sqlnom" AndAlso key.ToString() <> "config" AndAlso key.ToString() <> "entidad" AndAlso key.ToString() <> "camposKey" AndAlso key.ToString() <> "columnas" AndAlso key.ToString() <> "dbComparas" AndAlso key.ToString() <> "con" AndAlso key.ToString() <> "provider" Then
                If where("sqlnom").ToString() <> "" Then
                    parameters.Add("@" & key.ToString(), where(key))
                Else

                    parameters.Add(key.ToString(), where(key))
                    Dim compara As Boolean = False
                    For Each par As KeyValuePair(Of String, Object) In dbComparas
                        If par.Key.ToLower = key.ToString.ToLower Then
                            comparas.Add(key, IKT.RecAplNet.General.SQLIKT.dbComparaValue(par.Value.ToString()))
                            If (par.Value.ToString() = "in") Then
                                parameters(key.ToString()) = "'" & parameters(key.ToString()).ToString.Replace(",", "','") & "'"
                            End If
                            compara = True
                            Exit For
                        End If
                    Next
                    If Not compara Then
                        comparas.Add(key.ToString(), IKT.RecAplNet.General.SQLIKT.dbCompara.igual)
                    End If
                End If
            End If
        Next
        Dim con As ConexionIKT
        If where.ContainsKey("con") AndAlso where("con") <> "" Then
            If where.ContainsKey("provider") AndAlso where("provider") <> "" Then
                con = New ConexionIKT(where("provider"), where("con"))
            Else
                con = New ConexionIKT(where("con"))
            End If
        Else
            con = New ConexionIKT("PRINCIPAL")
        End If
        Dim dt As DataTable = Nothing
        If where("sqlnom").ToString() <> "" Then
            parameters.Add("@pSortColumn", pSortColumn)
            parameters.Add("@pSortOrder", pSortOrder)
            dt = BPM.getSQLConfig(where("grupo"), where("sqlnom"), con, parameters, where("config"))
        Else
            dt = BPM.obtenerListaDT(ReflectionIKT.getObjeto(where("entidad").ToString()), con, parameters, comparas, New SQLSORT(pSortColumn, pSortOrder))
        End If
        Dim jqg As New JQGridJsonResponse()
        If where("columnas").ToString() <> "" Then
            jqg.Columnas = where("columnas").ToString().Split(",")
        End If
        If Not where("entidad") Is Nothing AndAlso where("entidad").ToString().Length > 0 Then
            jqg.llenar(pPageSize, pCurrentPage, pSortColumn, pSortOrder, dt, where, ReflectionIKT.getObjeto(where("entidad").ToString()))
        Else
            Dim pks() As String = where("camposKey").ToString().Split(",")
            Dim dtpks As New List(Of DataColumn)
            For Each col As String In pks
                dtpks.Add(dt.Columns(col))
            Next

            dt.PrimaryKey = dtpks.ToArray()
            jqg.llenar(pPageSize, pCurrentPage, pSortColumn, pSortOrder, dt, where)
        End If

        Return jqg
    End Function
    <WebMethod()> _
     <ScriptMethod(ResponseFormat:=ResponseFormat.Json)> _
     Public Shared Function GetLiterales(ByVal datos As Hashtable) As Hashtable
        Return PageIKT.getLiteralesGeneral(datos("Gru_Literales"), datos("hash"))
    End Function
    <WebMethod()> _
  <ScriptMethod(ResponseFormat:=ResponseFormat.Json)> _
  Public Shared Function GetEdicion_GridSelGen(ByVal data As Hashtable) As JQEdiResponse
        Dim errr = SessionIKT.GetErrores()
        Return New JQEdiResponse()
    End Function

    <WebMethod()> _
 <ScriptMethod(ResponseFormat:=ResponseFormat.Json)> _
 Public Shared Function Save_GridSelGen(ByVal data As Hashtable) As JQEdiResponse
        Dim errr = SessionIKT.GetErrores()
        Return New JQEdiResponse()
    End Function
End Class