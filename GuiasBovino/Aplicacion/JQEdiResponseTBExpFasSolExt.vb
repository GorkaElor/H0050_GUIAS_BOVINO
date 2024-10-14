Imports System.Globalization
Imports System.Reflection
Imports System.Web

Public Class JQEdiResponseTBExpFasSolExt
    Inherits JQEdiResponse

    Public Sub New(ent As iEntidad)
        MyBase.New(ent)
    End Sub

    Public Sub New()
        MyBase.New()
    End Sub

    Public Overrides Function getData(ent As iEntidad) As ICollection
        'Return MyBase.getData(ent)


        Dim data As New Hashtable
        Dim retorno As New Hashtable
        retorno = data.Clone

        For Each pi As PropertyInfo In ent.GetType().GetProperties
            If Not pi.PropertyType Is GetType(EntidadConfig) AndAlso pi.PropertyType.Namespace.IndexOf("System.Collections") = -1 Then
                data.Add(pi.Name.ToLower, ReflectionIKT.GetProperty(ent, pi.Name))
            End If
        Next

        Dim _cultureIkt As CultureInfo
        If (SessionIKT.Idioma = IdiomaIKT.IKT_CASTELLANO) Then


            _cultureIkt = CultureInfo.CreateSpecificCulture("es-ES")
            Dim dtf As New DateTimeFormatInfo()
            dtf.FullDateTimePattern = "dd/MM/yyyy hh:mm:ss"
            dtf.LongDatePattern = "dd/MM/yyyy hh:mm:ss"
            dtf.ShortDatePattern = "dd/MM/yyyy"
            _cultureIkt.DateTimeFormat = dtf

            _cultureIkt.NumberFormat.CurrencyDecimalSeparator = ","
            _cultureIkt.NumberFormat.NumberDecimalSeparator = ","

            'data(dt.Columns(index).ColumnName) = CType(oROW.Item(col), IFormattable).ToString(Formatos(col).ToString(), _cultureIkt)
        Else
            _cultureIkt = SessionIKT.Culture
            'data(dt.Columns(index).ColumnName) = CType(oROW.Item(col), IFormattable).ToString(Formatos(col).ToString(), SessionIKT.Culture)
        End If

        For Each key As String In data.Keys
            Try
                If key.ToLower().Contains("expfecorden") Or key.ToLower().Contains("expfecsistema") Then
                    If Not data(key.ToLower()) Is Nothing Then

                        retorno(key.ToLower()) = CType(data(key.ToLower()), IFormattable).ToString("", _cultureIkt)
                        'retorno(key.ToLower()) = data(key.ToLower()).ToString()
                    Else
                        retorno(key.ToLower()) = Nothing
                    End If
                Else
                    retorno(key.ToLower()) = JQFormatos.convertir(data(key.ToLower()), Formatos(key.ToLower()))
                End If
            Catch ex As Exception
                SessionIKT.setlog("JQEdiResponse", "getData", "Conversion no válida - " & key.ToLower())
            End Try
        Next

        Return retorno


    End Function

End Class
