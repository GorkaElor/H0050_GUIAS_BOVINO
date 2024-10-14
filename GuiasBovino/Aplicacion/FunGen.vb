Imports Microsoft.VisualBasic
Imports IKT.RecAplNet.General.SessionIKT

Public Class FunGen
    Public Shared Function mergeHashtables(ByVal ParamArray hts As Hashtable()) As Hashtable
        Dim mergedHt As New Hashtable
        For Each ht In hts
            Dim key As Object
            For Each key In ht.Keys
                If Not mergedHt.ContainsKey(key) Then
                    mergedHt.Add(key, ht.Item(key))
                End If
            Next
        Next
        Return mergedHt
    End Function
    Public Shared Function getSufijo() As String
        If Idioma = 0 Then
            Return "_E"
        Else
            Return "_C"
        End If
    End Function
    Public Shared Function escaparBackSlash(ByVal valor As String) As String
        Dim res As String = ""
        Dim normales = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM"

        For Each str As String In valor
            If normales.IndexOf(str) = -1 And str <> " " Then
                res = res & "\" & str
            Else
                res = res & str
            End If
        Next
        Return res
    End Function
    Public Shared Function XmlValor_Chequear(ByVal sValor As String) As String
        ' --- Remplazar Caracteres incorrectos en Xml
        sValor = Replace(sValor, Chr(38), "&amp;")    ' &
        sValor = Replace(sValor, Chr(39), "&apos;")   ' '
        sValor = Replace(sValor, Chr(96), "&#96;")   ' `
        sValor = Replace(sValor, Chr(34), "&quot;")   ' "
        sValor = Replace(sValor, Chr(60), "&lt;")     ' <
        sValor = Replace(sValor, Chr(62), "&gt;")     ' >

        sValor = Replace(sValor, Chr(225), "&#225;")     ' Ã¡
        sValor = Replace(sValor, Chr(233), "&#233;")     ' Ã©
        sValor = Replace(sValor, Chr(237), "&#237;")     ' Ã­
        sValor = Replace(sValor, Chr(243), "&#243;")     ' Ã³
        sValor = Replace(sValor, Chr(250), "&#250;")     ' Ãº
        sValor = Replace(sValor, Chr(191), "&#191;")     ' Â¿

        sValor = Replace(sValor, Chr(193), "&#193;")     ' Ã
        sValor = Replace(sValor, Chr(201), "&#201;")     ' Ã‰
        sValor = Replace(sValor, Chr(205), "&#205;")     ' Ã
        sValor = Replace(sValor, Chr(211), "&#211;")     ' Ã“
        sValor = Replace(sValor, Chr(218), "&#218;")     ' Ãš

        sValor = Replace(sValor, Chr(209), "&#209;")     ' Ñ
        sValor = Replace(sValor, Chr(241), "&#241;")     ' ñ

        XmlValor_Chequear = sValor
    End Function
End Class
