Public Class WSMock
    Public Function Identificacion(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""token"":""ES200....."",""status"":200,""code"":200,""fieldErrors"":[""Error1"",""Error2""],""message"":""message""}"

        Return res
    End Function

    Public Function ConfiguracionElemento(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""horas"":""20:00"",""status"":200,""code"":200,""fieldErrors"":[""Error1"",""Error2""],""message"":""message""}"

        Return res
    End Function
    Public Function Autentificacion(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""nif"":""11123456A"",""nombre"":""Raul Garcia Bengoa"", ""apellidos"":""Titular representante"",
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function

    Public Function Literales(ByVal inputJson As Object) As String
        Dim res As String = ""
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        Return New MockLiterales().Literales(inputJson)
    End Function
    Public Function Permisos(ByVal WSInput As Object) As String
        Dim res As String = ""
        Dim _case = 1
        'Dim _case = 2
        'Dim _case = 3


        If _case = 1 Then
            res = "{""lista"":[
                    ""ALTA_GUIA"",""ALTAS_FECHAS"",""ALT_BAJ_ANIMALES"",""AYUDA_CONTACTO"",""BAJAS_FECHAS"",""BOT_ANUL_GUIA"",
                    ""BOT_CONFIRMAR_GUIA"",""BOT_NOT_FEC_COL_CRO"",""BOT_NOT_ICA"",""BOT_NOT_MUERTE"",""BOT_NOT_NACIMIENTO"",
                    ""BOT_NOT_PER_ASIG"",""BOT_NOT_PER_SIN_ASIG"",""BOT_RECHAZAR_GUIA"",""BOT_SOL_CROTALES"",""BOT_SOL_PERM_AUTOCRO"",
                    ""BOT_VALIDAR_GUIA"",""BUSQUEDA_CROTAL"",""CAMBIO_EXPLO"",""CENSO_ACTUAL"",""CENSO_FECHAS"",""CONFIGURACION"",
                    ""CONFIRM_GUIA"",""CONSULTA_DAT"",""CRO_DISPONIBLES"",""EXP_ASOCIACIONES"",""EXP_CALIFICA"",""EXP_DATOS"",
                    ""EXPLOTACION"",""EXP_TITULARES"",""GES_CROTALES"",""GUIAS"",""HISTORIAL"",""LIBRO_REG"",""LIST_MUERTE"",
                    ""LIST_NACIMIENTO"",""NOT_MUERTE"",""NOT_NACIMIENTO"",""PAG_INICIO"",""RELACION_CRO"",""SOLICITUD_CRO"",""ASIG_SERIES"",""REL_ASIG_SERIES""
                                ],
                ""code"": 200,""fieldErrors"":[],""message"":""OK"",""status"":200
               }"
            '""LIST_NACIMIENTO"",""NOT_NACIMIENTO"", ""SOL_CROTALES""
        ElseIf _case = 2 Then
            res = "{""lista"":[""PAG_INICIO""],
                ""code"": 200,""fieldErrors"":[],""message"":""OK"",""status"":200
               }"
        Else
            res = "{""lista"": [],
                    ""code"":201,""fieldErrors"":[""usuws"",""passwd""],""message"":""El usuario WS_GES_OVI no tiene permisos para acceder a este servicio web"",""status"":403
                    }"
        End If
        Return res
    End Function
    Public Function ConsultaResumenCenso(wSInputJson As Object) As String
        Dim res As String
        res = "{""code"":200,""fieldErrors"":[],""message"":""OK"",""status"":200,""h1224"":""9"",""h24"":""40"",""h6"":""4"",""h612"":""4"",""hSum"":""57"",""m1224"":""7"",""m24"":""2"",""m6"":""12"",""m612"":""6"",""mSum"":""27"",""total"":""84""}"
        Return res
    End Function
    Public Function BuscarExplotacion(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        'res = "{""lista"":  [   {""explotacion"":""ES200010010010"",""denominacion"":""NombreExplotacion0"",""muncod"":""001""
        '                            ,""thcod"":""20"",""matadero"":""false""}

        '                    ],
        '        ""status"":401,""code"":200,""fieldErrors"":[],""message"":""message""
        '        }"

        res = "{""lista"":  [   {""explotacion"":""ES200010010010"",""denominacion"":""NombreExplotacion0"",""muncod"":""001""
                                    ,""thcod"":""20"",""matadero"":""false""},
                                {""explotacion"":""ES200010010011"",""denominacion"":""NombreExplotacion1"",""muncod"":""002""
                                    ,""thcod"":""20"",""matadero"":""true""},
                                {""explotacion"":""ES200010010012"",""denominacion"":""NombreExplotacion2"",""muncod"":""002""
                                    ,""thcod"":""20"",""matadero"":""false""},
                                {""explotacion"":""ES200010010013"",""denominacion"":""NombreExplotacion3"",""muncod"":""002""
                                    ,""thcod"":""20"",""matadero"":""true""},
                                {""explotacion"":""ES200010010014"",""denominacion"":""NombreExplotacion4"",""muncod"":""003""
                                    ,""thcod"":""20"",""matadero"":""true""},
                                {""explotacion"":""ES200010010015"",""denominacion"":""NombreExplotacion5"",""muncod"":""004""
                                    ,""thcod"":""20"",""matadero"":""false""},
                                {""explotacion"":""ES200010010016"",""denominacion"":""NombreExplotacion6"",""muncod"":""004""
                                    ,""thcod"":""20"",""matadero"":""false""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"


        Return res
    End Function


    Public Function BuscarTransportista(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""lista"":  [   {""nif"":""72451523M"",""nombre"":""Pedro Ruiz"",""matricula"":""9425 BTZ"",""ates"":""ATES15200000004""},
                                {""nif"":""72451523M"",""nombre"":""María Luisa Ruiz"",""matricula"":""8425 BTZ"",""ates"":""ATES15200000003""},
                                {""nif"":""72451523M"",""nombre"":""Pedro Miguel"",""matricula"":""7425 BTZ"",""ates"":""ATES15200000002""},
                                {""nif"":""72451523M"",""nombre"":""Manu"",""matricula"":""6425 BTZ"",""ates"":""ATES15200000001""},
                                {""nif"":""72451523M"",""nombre"":""Pablo"",""matricula"":""5425 BTZ"",""ates"":""ATES15200000000""},
                                {""nif"":""72451523M"",""nombre"":""Miguel Andre"",""matricula"":""4425 BTZ"",""ates"":""ATES15200000005""},
                                {""nif"":""72451523M"",""nombre"":""Mikel Korta"",""matricula"":""3425 BTZ"",""ates"":""ATES15200000006""},
                                {""nif"":""72451523M"",""nombre"":""Alba Sanchez"",""matricula"":""2425 BTZ"",""ates"":""ATES15200000007""},
                                {""nif"":""72451523M"",""nombre"":""Asier Ibaizabal"",""matricula"":""1425 BTZ"",""ates"":""ATES15200000008""},
                                {""nif"":""72451523M"",""nombre"":""Koldo Ugarte"",""matricula"":""0425 BTZ"",""ates"":""ATES15200000009""}                                
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"


        'res = "{""lista"":  [  
        '                        {""nif"":""9123456789T"",""nombre"":""Koldo Ugarte"",""matricula"":""0425 BTZ"",""ates"":""ATES15200000009""}                                
        '                    ],
        '        ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
        '        }"

        Return res
    End Function

    Public Function BuscarExplotacionesTrabajo(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   {""explotacion"":""ES200010010001"",""denominacion"":""Consulta normal"",""matadero"":""false"", ""notificaciones"":[{""notcod"":""1"",""notdes"":""Autocrotalación""},
                                                                                                                                {""notcod"":""1"",""notdes"":""Autocrotalación""},
                                                                                                                                {""notcod"":""1"",""notdes"":""Autocrotalación""},
                                                                                                                                {""notcod"":""1"",""notdes"":""Autocrotalación""},
                                                                                                                                {""notcod"":""1"",""notdes"":""Autocrotalación""}]},
                                {""explotacion"":""ES200010010010"",""denominacion"":""Para mostrar ConsultaGuias"",""matadero"":""false"", ""notificaciones"":[{""notcod"":""1"",""notdes"":""Autocrotalación""}]},
                                {""explotacion"":""ES200010010013"",""denominacion"":""NombreExplotacion3"",""matadero"":""false"", ""notificaciones"":[{""notcod"":""1"",""notdes"":""Autocrotalación""}]},
                                {""explotacion"":""ES200010010014"",""denominacion"":""NombreExplotacion4"",""matadero"":""false"", ""notificaciones"":[{""notcod"":""1"",""notdes"":""Autocrotalación""}]},
                                {""explotacion"":""ES200010010015"",""denominacion"":""NombreExplotacion5"", ""matadero"":""false"",""notificaciones"":[{""notcod"":""1"",""notdes"":""Autocrotalación""}]},
                                {""explotacion"":""ES200010010016"",""denominacion"":""NombreExplotacion6"",""matadero"":""false"", ""notificaciones"":[{""notcod"":""1"",""notdes"":""Autocrotalación""}]},
                                {""explotacion"":""ES200010010017"",""denominacion"":""NombreExplotacion7"", ""matadero"":""false"",""notificaciones"":[{""notcod"":""1"",""notdes"":""Autocrotalación""}]},
                                {""explotacion"":""ES200010010018"",""denominacion"":""NombreExplotacion8"",""matadero"":""false"", ""notificaciones"":[{""notcod"":""1"",""notdes"":""Autocrotalación""}]},
                                {""explotacion"":""ES200010010019"",""denominacion"":""NombreExplotacion9"",""matadero"":""false"", ""notificaciones"":[{""notcod"":""1"",""notdes"":""Autocrotalación""}]}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function
    Public Function CrotalesDisponibles(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   {""crotal"":""ES011599992011"",""sexo"":""H"",""fecnacimiento"":""15/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre""},
                                {""crotal"":""ES011599992012"",""sexo"":""H"",""fecnacimiento"":""14/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre""},
                                {""crotal"":""ES011599992013"",""sexo"":""H"",""fecnacimiento"":""13/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre""},
                                {""crotal"":""ES011599992014"",""sexo"":""M"",""fecnacimiento"":""12/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre""},
                                {""crotal"":""ES011599992015"",""sexo"":""M"",""fecnacimiento"":""11/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre""},
                                {""crotal"":""ES011599992016"",""sexo"":""H"",""fecnacimiento"":""10/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre""},
                                {""crotal"":""ES011599992017"",""sexo"":""H"",""fecnacimiento"":""09/02/2014"",""razdes"":""JACINTO"",""apto"":""false"",""motivonoapto"":""cojo"",""nombre"":""nombre""},
                                {""crotal"":""ES011599992018"",""sexo"":""H"",""fecnacimiento"":""08/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre""},
                                {""crotal"":""ES011599992019"",""sexo"":""H"",""fecnacimiento"":""07/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre""},
                                {""crotal"":""ES011599992020"",""sexo"":""M"",""fecnacimiento"":""06/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre""},
                                {""crotal"":""ES011599992021"",""sexo"":""H"",""fecnacimiento"":""05/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre""},
                                {""crotal"":""ES011599992022"",""sexo"":""H"",""fecnacimiento"":""04/02/2014"",""razdes"":""JACINTO"",""apto"":""false"",""motivonoapto"":""tuerto"",""nombre"":""nombre""},
                                {""crotal"":""ES011599992023"",""sexo"":""H"",""fecnacimiento"":""03/02/2014"",""razdes"":""JACINTO"",""apto"":""false"",""motivonoapto"":""sordo"",""nombre"":""nombre""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function


    Public Function ConsultaExplotacion(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""denominacion"": ""SAROBE "",
                ""direccion"": ""SAROBE BASERRIA"",
                ""cp"": "" 20269"",
                ""municipio"": ""ABALTZISKETA"",
                ""provincia"": ""GIPUZKOA"",
                ""estado"": ""Alta "",
                ""fechaestado"": ""01/01/1995"",
                ""sistemaproductivo"": """",
                ""capacidadproductiva"": """",
                ""sostenibilidad"": "" "",
                ""autoconsumo"": ""false"",
                ""interintracomunitario"": ""false"",
                ""transhumante"": ""false"",
                ""observaciones"": "" "",
                ""observacionesNotificaciones"": "" "",
                ""clasificaciones"": [""Reproducción producción de carne"",""xxxxxx""],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function

    Public Function ConsultaTitulares(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   {""nif"":""11123456A"",""nombre"":""Raul Garcia Bengoa"", ""relacion"":""Titular representante""},
                                {""nif"":""11123456B"",""nombre"":""Raul AAA Bengoa 2"", ""relacion"":""Titular representante 2""},
                                {""nif"":""11123456C"",""nombre"":""Raul BBB Bengoa 3"", ""relacion"":""Titular representante 3""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function

    Public Function ConsultaHistorialDeTramites(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""lista"":  [   {""identificador"":""1"",""descripcion"":""Alta Guia Matadero"",
                                    ""codigotramite"":""1"", ""fecha"":""01/08/2016"", ""imprimir"":[
                                {""color"":""#69DAFF"",""desc"":""Descargar pdf_eu"",""icon"":""pdf"",""tipotramite"":""1"",
                                ""formato"":""1""}
                                ,{""color"":"""",""desc"":""Descargar xls_eu"",""icon"":""xls"",""tipotramite"":"""",
                                ""formato"":""2""}]},
                                {""identificador"":""1"",""descripcion"":""Alta Guia Matadero"",
                                    ""codigotramite"":""1"", ""fecha"":""01/08/2016"", ""imprimir"":[
                                {""color"":""#69DAFF"",""desc"":""Descargar pdf_eu"",""icon"":""print"",""tipotramite"":""2"",
                                ""formato"":""1""}
                                ,{""color"":"""",""desc"":""Descargar xls_eu"",""icon"":"""",""tipotramite"":"""",
                                ""formato"":""2""}]},
                                {""identificador"":""1"",""descripcion"":""Alta Guia Matadero"",
                                    ""codigotramite"":""1"", ""fecha"":""01/08/2016"", ""imprimir"":[
                                {""color"":"""",""desc"":""Descargar pdf_eu"",""icon"":""pdf"",""tipotramite"":""1"",
                                ""formato"":""1""}
                                ,{""color"":"""",""desc"":""Descargar xls_eu"",""icon"":""xls"",""tipotramite"":"""",
                                ""formato"":""2""}]}                      
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function

    Public Function ImprimirHistorialDeTramite(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""url"":  ""http://www.industriaconectada40.gob.es/Documents/jornada-industria4.0-abril-16.pdf"",
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""}"

        Return res
    End Function

    Public Function ImprimirCensoAUnaFecha(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""url"":  ""http://www.industriaconectada40.gob.es/Documents/jornada-industria4.0-abril-16.pdf"",
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""}"

        Return res
    End Function

    Public Function ImprimirGuia(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""url"":  ""http://www.industriaconectada40.gob.es/Documents/jornada-industria4.0-abril-16.pdf"",
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""}"

        Return res
    End Function

    Public Function ConsultaAsociaciones(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   {""fechaalta"":""14/01/2003"",""asociacion"":""ELE""},
                                {""fechaalta"":""15/01/2003"",""asociacion"":""ALA""},
                                {""fechaalta"":""16/01/2003"",""asociacion"":""OLO""},
                                {""fechaalta"":""17/01/2003"",""asociacion"":""Z""},
                                {""fechaalta"":""14/04/2003"",""asociacion"":""K""},
                                {""fechaalta"":""14/05/2003"",""asociacion"":""M""},
                                {""fechaalta"":""14/06/2003"",""asociacion"":""Ñ""},
                                {""fechaalta"":""14/01/2007"",""asociacion"":""P""},
                                {""fechaalta"":""14/01/2008"",""asociacion"":""T""},
                                {""fechaalta"":""14/01/2009"",""asociacion"":""Y""},
                                {""fechaalta"":""14/01/2001"",""asociacion"":""F""},
                                {""fechaalta"":""14/12/2003"",""asociacion"":""LJSDFISADFJSBUFIUFSDIJVBIUBFHIBFVSIDUBHFV POIHSDFOIHSDFOISDFOIÑ""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function

    Public Function ConsultaCalificacion(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   {""fecha"":""14/01/2003"",""tipo"":""TUBERCULOSIS"",""resultado"":""INDEMNE""},
                                {""fecha"":""15/01/2003"",""tipo"":""TUBERCULOSIS"",""resultado"":""INDEMNE""},
                                {""fecha"":""14/02/2003"",""tipo"":""TUBERCULOSIS"",""resultado"":""INDEMNE""},
                                {""fecha"":""14/03/2003"",""tipo"":""TUBERCULOSIS"",""resultado"":""INDEMNE""},
                                {""fecha"":""14/04/2003"",""tipo"":""TUBERCULOSIS"",""resultado"":""INDEMNE""},
                                {""fecha"":""14/05/2003"",""tipo"":""TUBERCULOSIS"",""resultado"":""INDEMNE""},
                                {""fecha"":""14/06/2003"",""tipo"":""TUBERCULOSIS"",""resultado"":""INDEMNE""},
                                {""fecha"":""14/07/2003"",""tipo"":""TUBERCULOSIS"",""resultado"":""INDEMNE""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function

    Public Function ImprimirCensoActual(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""url"":  ""http://www.industriaconectada40.gob.es/Documents/jornada-industria4.0-abril-16.pdf"",
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""}"
        Return res
    End Function

    Public Function ConsultaLibroDeRegistro(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   {""campana"":""2010"",""descripcion"":""Libro de registro a 31/12/2010""},
                                {""campana"":""2011"",""descripcion"":""Libro de registro a 31/12/2011""},
                                {""campana"":""2012"",""descripcion"":""Libro de registro a 31/12/2012""},
                                {""campana"":""2013"",""descripcion"":""Libro de registro a 31/12/2013""},
                                {""campana"":""2014"",""descripcion"":""Libro de registro a 31/12/2014""},
                                {""campana"":""2015"",""descripcion"":""Libro de registro a 31/12/2015""},
                                {""campana"":""2016"",""descripcion"":""Libro de registro a 31/12/2016""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"
        Return res
    End Function
    Public Function ImprimirLibroDeRegistro(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""url"":  ""http://www.industriaconectada40.gob.es/Documents/jornada-industria4.0-abril-16.pdf"",
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""}"
        Return res
    End Function

    Public Function ConsultaGuias(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   
                        {""guia"":""153018200161365662"",""estado"":""1"",""expdestino"":""ES200010010012"",""fecsalida"":""14/10/2016"",
                        ""fecllegada"":""14/10/2016"",""imprimible"":""TRUE"",""matadero"":""TRUE"",""anulable"":""TRUE""},
                        {""guia"":""15010001130459188"",""estado"":""1"",""expdestino"":""ES200010010012"",""fecsalida"":""15/10/2016"",
                        ""fecllegada"":""14/10/2016"",""imprimible"":""FALSE"",""matadero"":""TRUE"",""anulable"":""TRUE""},
                        {""guia"":""15010001130459188"",""estado"":""2"",""expdestino"":""ES200010010012"",""fecsalida"":""14/10/2016"",
                        ""fecllegada"":""14/10/2016"",""imprimible"":""TRUE"",""matadero"":""TRUE"",""anulable"":""TRUE""},
                        {""guia"":""15010001130459188"",""estado"":""2"",""expdestino"":""ES200010010012"",""fecsalida"":""14/10/2016"",
                        ""fecllegada"":""14/10/2016"",""imprimible"":""FALSE"",""matadero"":""TRUE"",""anulable"":""TRUE""},
                        {""guia"":""15010001130459188"",""estado"":""1"",""expdestino"":""ES200010010012"",""fecsalida"":""16/10/2016"",
                        ""fecllegada"":""14/10/2016"",""imprimible"":""TRUE"",""matadero"":""TRUE"",""anulable"":""TRUE""},
                        {""guia"":""15010001130459188"",""estado"":""2"",""expdestino"":""ES200010010012"",""fecsalida"":""17/10/2016"",
                        ""fecllegada"":""14/10/2016"",""imprimible"":""FALSE"",""matadero"":""TRUE"",""anulable"":""TRUE""},
                        {""guia"":""15010001130459188"",""estado"":""1"",""expdestino"":""ES200010010012"",""fecsalida"":""18/10/2016"",
                        ""fecllegada"":""14/10/2016"",""imprimible"":""TRUE"",""matadero"":""TRUE"",""anulable"":""TRUE""},
                        {""guia"":""15010001130459188"",""estado"":""1"",""expdestino"":""ES200010010012"",""fecsalida"":""19/10/2016"",
                        ""fecllegada"":""14/10/2016"",""imprimible"":""FALSE"",""matadero"":""TRUE"",""anulable"":""TRUE""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"
        Return res
    End Function
    Public Function ConsultaGuiasCrotales(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""lista"":  [   {""crotal"":""ES011599992015""},
                                {""crotal"":""ES011599992016""},
                                {""crotal"":""ES011599992017""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"
        Return res
    End Function

    Public Function UltimoSaneamiento(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""fecha"": ""21/03/2012 "",
                ""veterinario"": ""SS258"",
                ""equipo"": ""LA413"",
                ""tipo"": ""CAMPAÑA"",
                ""tuberculosis"": {""realizada"":""true"",""P1"":""0"",""P2"":""0"",""DOL"":"""",""MT"":"""",""C"":""""},
                ""brucelosis"": {""realizada"":""true"",""RB"":""N"",""F"":"""",""C"":""""},
                ""perineumonia"": {""realizada"":""true"",""F"":""N"",""N"":"""",""MT"":"""",""C"":""""},
                ""leucosis"": {""realizada"":""true"",""EL"":""N"",""IDG"":"""",""C"":""""},
                ""ibr"": {""realizada"":""false""},
                ""lazul"": {""realizada"":""true"",""LA"":""N""},
                ""paratuberculosis"": {""realizada"":""true"",""C"":""N""},
                ""anticuerpos"": {""realizada"":""true"",""C"":""""},
                ""antigenos"": {""realizada"":""true"",""C"":""N""},
                ""neoesporas"": {""realizada"":""true"",""C"":""""},
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"
        Return res
    End Function

    Public Function ConsultaProvincias(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""lista"":  [   {""thcod"":""20"",""provincia"":""Gipuzkoa""},
                                {""thcod"":""21"",""provincia"":""Gipuzkoa2""},
                                {""thcod"":""22"",""provincia"":""Bizkaia""},
                                {""thcod"":""23"",""provincia"":""Álava""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function

    Public Function ConsultaMunicipios(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""lista"":  [   {""thcod"":""20"",""muncod"":""001"", ""municipio"":""Donostia""},
                                {""thcod"":""20"",""muncod"":""002"", ""municipio"":""Donostia1""},
                                {""thcod"":""20"",""muncod"":""003"", ""municipio"":""Bilbo""},
                                {""thcod"":""20"",""muncod"":""004"", ""municipio"":""Gasteiz""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function

    Public Function ValidarGuia(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""resultado"": ""2"",
                ""mensaje"": ""Guía procesada NO correctamente"",
                ""guia"": ""15010001130459188"",
                ""matadero"": ""true"",
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"
        res = "{""resultado"": ""1"",
                ""mensaje"": ""Guía procesada correctamente"",
                ""guia"": ""15010001130459188"",
                ""matadero"": ""true"",
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"
        Return res
    End Function

    Public Function AnularGuia(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""}"

        'res = "{""status"":200,""code"":300,""fieldErrors"":[],""message"":""message""}"
        Return res
    End Function

    Public Function ConsultaDatosAcceso(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""fechaultimoacceso"":""24/08/2016"", ""nombreusuario"":""Garbiñe Garmendia Etxeberria"",
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"
        Return res
    End Function

    Public Function ConsultaTitularPrincipal(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""nif"":""11123456A"", ""nombre"":""Raul Garcia Bengoa"",
                ""direccion"":""SAROBE BASERRIA"", ""cp"":""20269"",
                ""muncod"":""069"", ""thcod"":""20"",  ""telefono"":""943000000"",
                ""email"":""aaa@hotmail.com"",
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"
        Return res
    End Function


    Public Function BuscarCrotalGuia(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   {""guia"":""153018200161365662"",""estado"":""1"",""expdestino"":""ES200010010012"",""fecsalida"":""14/10/2016"",
                                ""fecllegada"":""14/10/2016"",""imprimible"":""FALSE"",""matadero"":""TRUE"",""anulable"":""TRUE""},
                                {""guia"":""15010001130459188"",""estado"":""1"",""expdestino"":""ES200010010012"",""fecsalida"":""14/10/2016"",
                                ""fecllegada"":""14/10/2016"",""imprimible"":""TRUE"",""matadero"":""TRUE"",""anulable"":""TRUE""},
                                {""guia"":""15010001130459188"",""estado"":""2"",""expdestino"":""ES200010010012"",""fecsalida"":""14/10/2016"",
                                ""fecllegada"":""14/10/2016"",""imprimible"":""FALSE"",""matadero"":""FALSE"",""anulable"":""TRUE""},
                                {""guia"":""15010001130459188"",""estado"":""2"",""expdestino"":""ES200010010012"",""fecsalida"":""14/10/2016"",
                                ""fecllegada"":""14/10/2016"",""imprimible"":""TRUE"",""matadero"":""FALSE"",""anulable"":""TRUE""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function

    Public Function ConsultaAutocrotalacion(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""fecha"":""30/01/2017"",
                ""estado"":""1"", ""estadodes"":""Validada"",
                ""mensaje"":""La explotación ha sido validada para autocrotalación."",
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK""
                }"

        Return res
    End Function

    Public Function PermisoAutocrotalacion(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""fecha"":""30/01/2017"",
                ""estado"":""1"", ""estadodes"":""Validada"",
                ""mensaje"":""La explotación ha sido validada para autocrotalación."",
                ""status"":200,""code"":300,""fieldErrors"":[],""message"":""OK""
                }"
        Return res
    End Function

    Public Function SolicitarCrotales(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""status"":200,""code"":200,""fieldErrors"":[],""message"":""La solicitud se ha realizado correctamente.""}"
        'res = "{""status"":400,""code"":200,""fieldErrors"":[],""message"":""La solicitud NO se ha realizado correctamente.""}"
        Return res
    End Function

    Public Function ConsultaSolicitudesCrotales(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)

        res = "{""lista"":[     {""id"":7101, ""fecpeticion"":""20/01/2017"", ""numero"": ""20"", ""tenazas"":""true"", ""estado"":""10"", ""estadodes"":""Solicitado"" },
                                {""id"":7102, ""fecpeticion"":""30/01/2017"", ""numero"": ""50"", ""tenazas"":""false"", ""estado"":""11"", ""estadodes"":""Disponibles en Oca"" },
                                {""id"":7103, ""fecpeticion"":""01/01/2017"", ""numero"": ""200"", ""tenazas"":""true"", ""estado"":""12"", ""estadodes"":""Entregado"" },
                                {""id"":7101, ""fecpeticion"":""20/01/2017"", ""numero"": ""20"", ""tenazas"":""true"", ""estado"":""10"", ""estadodes"":""Solicitado"" },
                                {""id"":7102, ""fecpeticion"":""30/01/2017"", ""numero"": ""50"", ""tenazas"":""false"", ""estado"":""11"", ""estadodes"":""Disponibles en Oca"" },
                                {""id"":7103, ""fecpeticion"":""01/01/2017"", ""numero"": ""200"", ""tenazas"":""true"", ""estado"":""12"", ""estadodes"":""Entregado"" },
                                {""id"":7101, ""fecpeticion"":""20/01/2017"", ""numero"": ""20"", ""tenazas"":""true"", ""estado"":""10"", ""estadodes"":""Solicitado"" },
                                {""id"":7102, ""fecpeticion"":""30/01/2017"", ""numero"": ""50"", ""tenazas"":""false"", ""estado"":""11"", ""estadodes"":""Disponibles en Oca"" },
                                {""id"":7103, ""fecpeticion"":""01/01/2017"", ""numero"": ""200"", ""tenazas"":""true"", ""estado"":""12"", ""estadodes"":""Entregado"" },
                                {""id"":7101, ""fecpeticion"":""20/01/2017"", ""numero"": ""20"", ""tenazas"":""true"", ""estado"":""10"", ""estadodes"":""Solicitado"" },
                                {""id"":7102, ""fecpeticion"":""30/01/2017"", ""numero"": ""50"", ""tenazas"":""false"", ""estado"":""11"", ""estadodes"":""Disponibles en Oca"" },
                                {""id"":7103, ""fecpeticion"":""01/01/2017"", ""numero"": ""200"", ""tenazas"":""true"", ""estado"":""12"", ""estadodes"":""Entregado"" },
                                {""id"":7101, ""fecpeticion"":""20/01/2017"", ""numero"": ""20"", ""tenazas"":""true"", ""estado"":""10"", ""estadodes"":""Solicitado"" },
                                {""id"":7102, ""fecpeticion"":""30/01/2017"", ""numero"": ""50"", ""tenazas"":""false"", ""estado"":""11"", ""estadodes"":""Disponibles en Oca"" },
                                {""id"":7103, ""fecpeticion"":""01/01/2017"", ""numero"": ""200"", ""tenazas"":""true"", ""estado"":""12"", ""estadodes"":""Entregado"" },
                                {""id"":7101, ""fecpeticion"":""20/01/2017"", ""numero"": ""20"", ""tenazas"":""true"", ""estado"":""10"", ""estadodes"":""Solicitado"" },
                                {""id"":7102, ""fecpeticion"":""30/01/2017"", ""numero"": ""50"", ""tenazas"":""false"", ""estado"":""11"", ""estadodes"":""Disponibles en Oca"" },
                                {""id"":7103, ""fecpeticion"":""01/01/2017"", ""numero"": ""200"", ""tenazas"":""true"", ""estado"":""12"", ""estadodes"":""Entregado"" } 
                            ] ,
              ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK""}"
        Return res
    End Function

    Public Function ImprimirAlbaranSolicitudCrotales(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)

        res = "{ ""url"": ""http://www.industriaconectada40.gob.es/Documents/jornada-industria4.0-abril-16.pdf"",
              ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK""}"
        Return res
    End Function

    Public Function SolicitudCrotales(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)

        res = "{""fechatramitacion"" : ""25/01/2017"",
                ""fechaentrega"": ""30/01/2017"",
	            ""lista"": [
                            {""crotal"": ""ES011599992015""},
		                    {""crotal"": ""ES071520424191""},
                            {""crotal"": ""ES011599992015""},
		                    {""crotal"": ""ES071520424191""},
                            {""crotal"": ""ES011599992015""},
		                    {""crotal"": ""ES071520424191""},
                            {""crotal"": ""ES011599992015""},
		                    {""crotal"": ""ES071520424191""},
                            {""crotal"": ""ES011599992015""},
		                    {""crotal"": ""ES071520424191""}
                           ],
                ""albaran"":""true"",
	            ""status"": 200, ""code"": 200, ""fieldErrors"": [], ""message"": ""OK""}"

        Return res
    End Function

    Public Function ConsultaCrotalesDisponibles(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        '// ”99”(Sin asignar), “00”(Crotal asignado), ”01”(Sin asignar - Deterioro) o “02”(Sin asignar – Perdido).
        res = "{
	""lista"": [
		{ ""crotal"": ""ES011599992015"", ""estado"": ""02"", ""estadodes"": ""Sin asignar - Perdido"", ""perdidas"": ""1"", ""notificable"": ""true"" },
        { ""crotal"": ""ES011699992016"", ""estado"": ""02"", ""estadodes"": ""Sin asignar - Perdido"", ""perdidas"": ""1"", ""notificable"": ""false"" },
        { ""crotal"": ""ES011759999217"", ""estado"": ""00"", ""estadodes"": ""Crotal asignado"", ""perdidas"": ""2"", ""notificable"": ""true"" },
        { ""crotal"": ""ES011859999218"", ""estado"": ""00"", ""estadodes"": ""Crotal asignado"", ""perdidas"": ""3"", ""notificable"": ""false"" },
        { ""crotal"": ""ES011699992019"", ""estado"": ""99"", ""estadodes"": ""Sin asignar"", ""perdidas"": ""0"", ""notificable"": ""true"" },
        { ""crotal"": ""ES011699992020"", ""estado"": ""99"", ""estadodes"": ""Sin asignar"", ""perdidas"": ""0"", ""notificable"": ""false"" },
        { ""crotal"": ""ES011999992021"", ""estado"": ""01"", ""estadodes"": ""Sin asignar - Deterioro"", ""perdidas"": ""2"", ""notificable"": ""true"" },
        { ""crotal"": ""ES011999992022"", ""estado"": ""01"", ""estadodes"": ""Sin asignar - Deterioro"", ""perdidas"": ""2"", ""notificable"": ""false"" }
	],
	""status"": 200,
	""code"": 200,
	""fieldErrors"": [],
	""message"": ""OK""
}"
        Return res
    End Function

    Public Function CrotalesPerdidas(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)

        res = "{
	""lista"": [
		{
			""fechacomunicacion"": ""17/01/2017"",
			""fechaperdida"": ""17/01/2017"",
			""fechafabrica"": ""24/01/2017"",
			""fechaentrega"": ""30/01/2017"",
""fechacolocacion"":""31/01/2017"",
			""comentario"": ""Perdido en monte"",
			""justificante"": ""true"",
            ""colocacion"":""true"",
			""albaran"": ""true""
		}
	],
	""status"": 200,
	""code"": 200,
	""fieldErrors"": [],
	""message"": ""OK""
}"
        Return res
    End Function

    Public Function NotificarPerdida(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)

        res = "{""status"":200,""code"":200,""fieldErrors"":[],""message"":""La notificación de Crotal sin asignar – Perdida se ha efectuado correctamente""}"
        'res = "{""status"":404,""code"":404,""fieldErrors"":[""Error al notificar""],""message"":""La notificación de Crotal sin asignar – Perdida NO se ha efectuado correctamente""}"
        Return res
    End Function

    Public Function ImprimirJustificantePerdidaCrotal(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)

        res = "{""url"":""http://www.industriaconectada40.gob.es/Documents/jornada-industria4.0-abril-16.pdf"",
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK""}"
        Return res
    End Function

    Public Function ConsultaNotificaciones(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   
                        { ""fechanotificacion"" :  ""01/01/2017"", ""ntcod"":""1"", ""ntdes"":""Notificación autocrotalacion"", ""notcod"":""112"", ""notdes"":""Solicitud autocrotalación aceptada"", ""ver"":""true"", ""eliminable"":""true""},
                        { ""fechanotificacion"" :  ""01/01/2017"", ""ntcod"":""1"", ""ntdes"":""Notificación autocrotalacion"", ""notcod"":""113"", ""notdes"":""Solicitud autocrotalación aceptada"", ""ver"":""false"", ""eliminable"":""true""},
                        { ""fechanotificacion"" :  ""01/01/2017"", ""ntcod"":""1"", ""ntdes"":""Notificación autocrotalacion"", ""notcod"":""114"", ""notdes"":""Solicitud autocrotalación aceptada"", ""ver"":""true"", ""eliminable"":""true""},
                        { ""fechanotificacion"" :  ""01/01/2017"", ""ntcod"":""1"", ""ntdes"":""Notificación autocrotalacion"", ""notcod"":""115"", ""notdes"":""Solicitud autocrotalación aceptada"", ""ver"":""false"", ""eliminable"":""true""},
                        { ""fechanotificacion"" :  ""01/01/2017"", ""ntcod"":""1"", ""ntdes"":""Notificación autocrotalacion"", ""notcod"":""116"", ""notdes"":""Solicitud autocrotalación aceptada"", ""ver"":""true"", ""eliminable"":""true""},
                        { ""fechanotificacion"" :  ""01/01/2017"", ""ntcod"":""1"", ""ntdes"":""Notificación autocrotalacion"", ""notcod"":""117"", ""notdes"":""Solicitud autocrotalación aceptada"", ""ver"":""true"", ""eliminable"":""false""},
                        { ""fechanotificacion"" :  ""01/01/2017"", ""ntcod"":""1"", ""ntdes"":""Notificación autocrotalacion"", ""notcod"":""118"", ""notdes"":""Solicitud autocrotalación aceptada"", ""ver"":""true"", ""eliminable"":""true""}
                           ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"
        Return res
    End Function


    Public Function ConsultaRazas(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""lista"":  [   {""razcod"":""001"", ""razdes"":""raza1""},
                                {""razcod"":""002"", ""razdes"":""raza2""},
                                {""razcod"":""003"", ""razdes"":""raza3""},
                                {""razcod"":""004"", ""razdes"":""raza4""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function


    Public Function ConsultaSexos(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""lista"":  [   {""sexcod"":""001"", ""sexdes"":""macho""},
                                {""sexcod"":""002"", ""sexdes"":""hembra""}
                       
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function


    Public Function ConsultaAptitudes(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""lista"":  [   {""aptcod"":""001"", ""aptdes"":""aptitud1""},
                                {""aptcod"":""002"", ""aptdes"":""aptitud2""},
                                {""aptcod"":""003"", ""aptdes"":""aptitud3""},
                                {""aptcod"":""004"", ""aptdes"":""aptitud4""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function


    Public Function ConsultaFacilidadParto(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""lista"":  [   {""fpcod"":""001"", ""fpdes"":""Parto fácil""},
                                {""fpcod"":""002"", ""fpdes"":""Parto medio""},
                                {""fpcod"":""003"", ""fpdes"":""Parto difícil""},
                                {""fpcod"":""004"", ""fpdes"":""Parto Extremo""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function

    Public Function NotificarNacimiento(ByVal inputJson As Object) As String
        Dim res As String
        res = "{  ""status"":200,""code"":200,""fieldErrors"":[],""message"":""La  notificación  del  nacimiento  del  animal  se  ha  efectuado correctamente"" }"

        Return res
    End Function


    Public Function ConsultaCensoActual(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   {""crotal"":""ES011599992011"",""sexo"":""H"",""fecnacimiento"":""15/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre"",""dib"":""true""},
                                {""crotal"":""ES011599992012"",""sexo"":""H"",""fecnacimiento"":""14/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre"",""dib"":""true""},
                                {""crotal"":""ES011599992013"",""sexo"":""H"",""fecnacimiento"":""13/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre"",""dib"":""false""},
                                {""crotal"":""ES011599992014"",""sexo"":""M"",""fecnacimiento"":""12/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre"",""dib"":""true""},
                                {""crotal"":""ES011599992015"",""sexo"":""M"",""fecnacimiento"":""11/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre"",""dib"":""false""},
                                {""crotal"":""ES011599992016"",""sexo"":""H"",""fecnacimiento"":""10/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre"",""dib"":""true""},
                                {""crotal"":""ES011599992017"",""sexo"":""H"",""fecnacimiento"":""09/02/2014"",""razdes"":""JACINTO"",""apto"":""false"",""motivonoapto"":""cojo"",""nombre"":""nombre"",""dib"":""true""},
                                {""crotal"":""ES011599992018"",""sexo"":""H"",""fecnacimiento"":""08/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre"",""dib"":""true""},
                                {""crotal"":""ES011599992019"",""sexo"":""H"",""fecnacimiento"":""07/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre"",""dib"":""true""},
                                {""crotal"":""ES011599992020"",""sexo"":""M"",""fecnacimiento"":""06/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre"",""dib"":""true""},
                                {""crotal"":""ES011599992021"",""sexo"":""H"",""fecnacimiento"":""05/02/2014"",""razdes"":""JACINTO"",""apto"":""true"",""motivonoapto"":"""",""nombre"":""nombre"",""dib"":""true""},
                                {""crotal"":""ES011599992022"",""sexo"":""H"",""fecnacimiento"":""04/02/2014"",""razdes"":""JACINTO"",""apto"":""false"",""motivonoapto"":""tuerto"",""nombre"":""nombre"",""dib"":""true""},
                                {""crotal"":""ES011599992023"",""sexo"":""H"",""fecnacimiento"":""03/02/2014"",""razdes"":""JACINTO"",""apto"":""false"",""motivonoapto"":""sordo"",""nombre"":""nombre"",""dib"":""true""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function


    Public Function ConsultaNacimientos(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        '”0”(Pendiente), “10”(Validado), ”2”(Anulado) o “20”(Error).
        res = "{""lista"":  [   
                                {""crotal"":""ES011599992001"",""nombre"":""nombre1"",""fechanacimiento"":""15/02/2017"",""razdes"":""raza 1"",""sexdes"":""hembra"",""estado"":""0"",""estadodes"":""estado 0""},
                                {""crotal"":""ES011599992002"",""nombre"":""nombre1"",""fechanacimiento"":""15/02/2017"",""razdes"":""raza 1"",""sexdes"":""hembra"",""estado"":""10"",""estadodes"":""estado 10""},
                                {""crotal"":""ES011599992003"",""nombre"":""nombre1"",""fechanacimiento"":""15/02/2017"",""razdes"":""raza 1"",""sexdes"":""hembra"",""estado"":""2"",""estadodes"":""estado 2""},
                                {""crotal"":""ES011599992004"",""nombre"":""nombre1"",""fechanacimiento"":""15/02/2017"",""razdes"":""raza 1"",""sexdes"":""hembra"",""estado"":""20"",""estadodes"":""estado 20""},

                                {""crotal"":""ES011599992005"",""nombre"":""nombre1"",""fechanacimiento"":""15/02/2017"",""razdes"":""raza 1"",""sexdes"":""hembra"",""estado"":""0"",""estadodes"":""estado 0""},
                                {""crotal"":""ES011599992006"",""nombre"":""nombre1"",""fechanacimiento"":""15/02/2017"",""razdes"":""raza 1"",""sexdes"":""hembra"",""estado"":""10"",""estadodes"":""estado 10""},
                                {""crotal"":""ES011599992007"",""nombre"":""nombre1"",""fechanacimiento"":""15/02/2017"",""razdes"":""raza 1"",""sexdes"":""hembra"",""estado"":""2"",""estadodes"":""estado 2""},
                                {""crotal"":""ES011599992008"",""nombre"":""nombre1"",""fechanacimiento"":""15/02/2017"",""razdes"":""raza 1"",""sexdes"":""hembra"",""estado"":""20"",""estadodes"":""estado 20""},

                                {""crotal"":""ES011599992009"",""nombre"":""nombre1"",""fechanacimiento"":""15/02/2017"",""razdes"":""raza 1"",""sexdes"":""hembra"",""estado"":""0"",""estadodes"":""estado 0""},
                                {""crotal"":""ES011599992010"",""nombre"":""nombre1"",""fechanacimiento"":""15/02/2017"",""razdes"":""raza 1"",""sexdes"":""hembra"",""estado"":""10"",""estadodes"":""estado 10""},
                                {""crotal"":""ES011599992011"",""nombre"":""nombre1"",""fechanacimiento"":""15/02/2017"",""razdes"":""raza 1"",""sexdes"":""hembra"",""estado"":""2"",""estadodes"":""estado 2""},
                                {""crotal"":""ES011599992012"",""nombre"":""nombre1"",""fechanacimiento"":""15/02/2017"",""razdes"":""raza 1"",""sexdes"":""hembra"",""estado"":""20"",""estadodes"":""estado 20""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function


    Public Function ConsultaMuertes(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   
                                {""crotal"":""ES011599992011"",""nombre"":""nombre1"",""fechamuerte"":""15/02/2017"",""fechanotificacion"":""15/02/2017"",""estado"":""01"",""estadodes"":""estado 01""},
                                {""crotal"":""ES011599992012"",""nombre"":""nombre2"",""fechamuerte"":""16/02/2017"",""fechanotificacion"":""16/02/2017"",""estado"":""01"",""estadodes"":""estado 01""},
                                {""crotal"":""ES011599992013"",""nombre"":""nombre3"",""fechamuerte"":""17/02/2017"",""fechanotificacion"":""17/02/2017"",""estado"":""01"",""estadodes"":""estado 01""},
                                {""crotal"":""ES011599992014"",""nombre"":""nombre4"",""fechamuerte"":""18/02/2017"",""fechanotificacion"":""18/02/2017"",""estado"":""01"",""estadodes"":""estado 01""},
                                {""crotal"":""ES011599992015"",""nombre"":""nombre5"",""fechamuerte"":""15/03/2017"",""fechanotificacion"":""15/03/2017"",""estado"":""01"",""estadodes"":""estado 01""},
                                {""crotal"":""ES011599992016"",""nombre"":""nombre6"",""fechamuerte"":""15/02/2017"",""fechanotificacion"":""15/02/2017"",""estado"":""01"",""estadodes"":""estado 01""},
                                {""crotal"":""ES011599992017"",""nombre"":""nombre7"",""fechamuerte"":""15/01/2017"",""fechanotificacion"":""15/01/2017"",""estado"":""01"",""estadodes"":""estado 01""}
                                
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function


    Public Function Muerte(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""observaciones"": ""una observación cualquiera"", ""justificante"":""true"", 
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message"" }"

        Return res
    End Function


    Public Function Nacimiento(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""peso"": ""65,5"", ""madre"":""una madre"", ""fechaimplantacion"":""12/03/2017"", ""aptdes"":""aptitud 1"",
                ""madreet"":""una madre et"", ""fechanotificacion"":""15/03/2017"", ""fpdes"":""texto facilidad parto"", 
                ""padre"":""un padre"", ""errordes"":""error 1"", ""imprimible"":""false"", 
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message"" }"

        Return res
    End Function

    Public Function ImprimirDIB(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""url"": ""http://www.industriaconectada40.gob.es/Documents/jornada-industria4.0-abril-16.pdf"", 
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK"" }"

        Return res
    End Function


    Public Function ImprimirJustificanteMuerte(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""url"": ""http://www.industriaconectada40.gob.es/Documents/jornada-industria4.0-abril-16.pdf"", 
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK"" }"

        Return res
    End Function


    Public Function ConsultaGuiasEntrada(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        'res = "{""lista"":  [   

        '                        {""fechaentrada"": ""17/01/2017"", ""guia"":""153010001110147739"", ""exploorigen"":""ES200010010010"", ""numcrotales"":""20"", ""estado"":""02"", ""estadodes"":""Rechazada""},
        '                        {""fechaentrada"": ""17/01/2017"", ""guia"":""153010001110147731"", ""exploorigen"":""ES200010010011"", ""numcrotales"":""30"", ""estado"":""03"", ""estadodes"":""Pendiente""},
        '                        {""fechaentrada"": ""17/01/2017"", ""guia"":""153010001110147732"", ""exploorigen"":""ES200010010012"", ""numcrotales"":""40"", ""estado"":""01"", ""estadodes"":""Confirmada""},
        '                        {""fechaentrada"": ""17/01/2017"", ""guia"":""153010001110147733"", ""exploorigen"":""ES200010010013"", ""numcrotales"":""50"", ""estado"":""02"", ""estadodes"":""Rechazada""},
        '                        {""fechaentrada"": ""17/01/2017"", ""guia"":""153010001110147734"", ""exploorigen"":""ES200010010014"", ""numcrotales"":""60"", ""estado"":""02"", ""estadodes"":""Rechazada""},
        '                        {""fechaentrada"": ""17/01/2017"", ""guia"":""153010001110147735"", ""exploorigen"":""ES200010010015"", ""numcrotales"":""70"", ""estado"":""02"", ""estadodes"":""Rechazada""},
        '                        {""fechaentrada"": ""17/01/2017"", ""guia"":""153010001110147736"", ""exploorigen"":""ES200010010016"", ""numcrotales"":""80"", ""estado"":""01"", ""estadodes"":""Confirmada""}

        '                    ],
        '        ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
        '        }"

        res = "{""lista"":  [   

                                {""fechaentrada"": ""17/01/2017"", ""guia"":""153010001110147739"", ""exploorigen"":""ES200010010010"", ""numcrotales"":""20"", ""estado"":""0"", ""estadodes"":""Sin Confirmar""},
                                {""fechaentrada"": ""17/01/2017"", ""guia"":""153010001110147731"", ""exploorigen"":""ES200010010011"", ""numcrotales"":""30"", ""estado"":""1"", ""estadodes"":""Confirmado""},
                                {""fechaentrada"": ""18/01/2017"", ""guia"":""153010001110147732"", ""exploorigen"":""ES200010010012"", ""numcrotales"":""40"", ""estado"":""2"", ""estadodes"":""Confirmado con error""},
                                {""fechaentrada"": ""19/01/2017"", ""guia"":""153010001110147733"", ""exploorigen"":""ES200010010013"", ""numcrotales"":""50"", ""estado"":""3"", ""estadodes"":""Rechazada""}
                                
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function

    Public Function BuscarCrotalGuiaEntrada(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   

                                {""fechaentrada"": ""17/01/2017"", ""guia"":""153010001110147739"", ""exploorigen"":""ES200010010010"", ""numcrotales"":""20"", ""estado"":""1"", ""estadodes"":""Confirmada""},
                                {""fechaentrada"": ""17/01/2017"", ""guia"":""153010001110147736"", ""exploorigen"":""ES200010010016"", ""numcrotales"":""80"", ""estado"":""2"", ""estadodes"":""Rechazada""}
                                
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function


    Public Function ConsultaResesVivas(ByVal inputJson As Object) As String
        Dim res As String

        res = "{ ""lista"":  [   
                                {""crotal"": ""ES011599992010"", ""nombre"":""PATXUKA""},
                                {""crotal"": ""ES011599992011"", ""nombre"":""PITUSA""},
                                {""crotal"": ""ES011599992012"", ""nombre"":""ROGELIA""},
                                {""crotal"": ""ES011599992013"", ""nombre"":""PATXUKA""},
                                {""crotal"": ""ES011599992014"", ""nombre"":""PITUSA""},
                                {""crotal"": ""ES011599992015"", ""nombre"":""ROGELIA""},                            
                                {""crotal"": ""ES011599992016"", ""nombre"":""PATXUKA""},
                                {""crotal"": ""ES011599992017"", ""nombre"":""PITUSA""},
                                {""crotal"": ""ES011599992018"", ""nombre"":""ROGELIA""},                            
                                {""crotal"": ""ES011599992019"", ""nombre"":""PATXUKA""},
                                {""crotal"": ""ES011599992020"", ""nombre"":""PITUSA""},
                                {""crotal"": ""ES011599992021"", ""nombre"":""ROGELIA""}                                                        
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK"" }"

        Return res
    End Function

    Public Function NotificarMuerte(ByVal inputJson As Object) As String
        Dim res As String

        res = "{ ""status"":200,""code"":200,""fieldErrors"":[],""message"":""La  notificación   muerte  del  animal  se  ha  efectuado correctamente"" }"
        'res = "{ ""status"":200,""code"":300,""fieldErrors"":[],""message"":""La  notificación  del  muerte  del  animal  NO se  ha  efectuado correctamente"" }"

        Return res
    End Function


    Public Property crotal As String
    Public Property sexdes As String
    Public Property razdes As String
    Public Property fechanacimiento As String
    Public Property imprimible As String

    Public Function CrotalesGuiaConfirmada(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""lista"":  [   
                                {""crotal"": ""ES011599992011"", ""razdes"":""Jacinta"", ""sexdes"":""Macho"", ""fechanacimiento"":""01/11/2015"", ""imprimible"":""true""},
                                {""crotal"": ""ES011599992012"", ""razdes"":""Jacinta"", ""sexdes"":""Hembra"", ""fechanacimiento"":""01/11/2015"", ""imprimible"":""false""},
                                {""crotal"": ""ES011599992013"", ""razdes"":""Jacinta"", ""sexdes"":""Macho"", ""fechanacimiento"":""01/11/2015"", ""imprimible"":""true""},
                                {""crotal"": ""ES011599992014"", ""razdes"":""Jacinta"", ""sexdes"":""Macho"", ""fechanacimiento"":""01/11/2015"", ""imprimible"":""true""},                  
                                {""crotal"": ""ES011599992015"", ""razdes"":""Jacinta"", ""sexdes"":""Macho"", ""fechanacimiento"":""01/11/2015"", ""imprimible"":""false""},
                                {""crotal"": ""ES011599992016"", ""razdes"":""Jacinta"", ""sexdes"":""Hembra"", ""fechanacimiento"":""01/11/2015"", ""imprimible"":""true""}
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message""
                }"

        Return res
    End Function


    Public Function GuiaEntrada(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""fechaentrada"": ""30/01/2017"", ""guia"":""153010001110147740"", ""exploorigen"":""ES200099992011"", ""numcrotales"":""20"", 
                ""confirmable"":""true"", ""rechazable"":""true"", ""descripcion"":""Esto es una descripción"", ""estado"":""1"", ""estadodes"":""Confirmada"",
                ""crotales"": [
                {""crotal"": ""ES011599992010"", ""sexdes"":""MACHO"", ""razdes"":""FRISONA"", ""fechanacimiento"":""01/11/2005"", ""seleccionado"":""true""},
                {""crotal"": ""ES011599992010"", ""sexdes"":""MACHO"", ""razdes"":""FRISONA"", ""fechanacimiento"":""01/11/2005"", ""seleccionado"":""false""},
                {""crotal"": ""ES011599992010"", ""sexdes"":""MACHO"", ""razdes"":""FRISONA"", ""fechanacimiento"":""01/11/2005"", ""seleccionado"":""true""}
                ], ""status"":200,""code"":200,""fieldErrors"":[],""message"":""message de respuesta"" }"

        Return res
    End Function

    Public Function ConfirmarGuia(ByVal inputJson As Object) As String
        Dim res As String

        res = "{ ""status"":200,""code"":200,""fieldErrors"":[],""message"":""La guía de entrada se ha confirmado correctamente"" }"
        'res = "{ ""status"":200,""code"":300,""fieldErrors"":[],""message"":""ERROR: La guía de entrada se ha confirmado correctamente"" }"

        Return res
    End Function


    Public Function RechazarGuia(ByVal inputJson As Object) As String
        Dim res As String

        res = "{ ""status"":200,""code"":200,""fieldErrors"":[],""message"":""La guía de entrada se ha rechazado correctamente"" }"
        'res = "{ ""status"":200,""code"":300,""fieldErrors"":[],""message"":""ERROR: La guía de entrada se ha confirmado correctamente"" }"

        Return res
    End Function

    Public Function ConsultaEstadoNotificaciones(ByVal inputJson As Object) As String
        Dim res As String

        res = "{ ""sinleer"": ""5"", ""total"": ""7"", ""status"":200,""code"":200,""fieldErrors"":[],
                ""message"":""La guía de entrada se ha rechazado correctamente"" }"

        Return res
    End Function

    Public Function NotificacionVista(ByVal inputJson As Object) As String
        Dim res As String

        res = "{ ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK"" }"

        Return res
    End Function

    Public Function NotificacionBorrar(ByVal inputJson As Object) As String
        Dim res As String

        res = "{ ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK"" }"

        Return res
    End Function

    Public Function PrecargaRazaAptitud(ByVal inputJson As Object) As String
        Dim res As String

        res = "{ ""razcod"":""003"", ""razdes"":""raza 3"", ""aptcod"":""004"", ""aptdes"":""aptitud 4"", 
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK"" }"
        'res = "{ ""razcod"":"""", ""razdes"":"""", ""aptcod"":"""", ""aptdes"":"""", 
        '""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK"" }"

        Return res
    End Function


    Public Function ConsultaTipoParto(ByVal inputJson As Object) As String
        Dim res As String

        res = "{""lista"":  [   

                                {""tpcod"": ""1"", ""tpdes"":""tipo parto 1""},
                                {""tpcod"": ""2"", ""tpdes"":""tipo parto 2""},
                                {""tpcod"": ""3"", ""tpdes"":""tipo parto 3""},
                                {""tpcod"": ""4"", ""tpdes"":""tipo parto 4""},
                                {""tpcod"": ""5"", ""tpdes"":""tipo parto 5""}
                                
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK""
                }"

        Return res
    End Function


    Public Function ConsultaTipoInseminacion(ByVal inputJson As Object) As String
        Dim res As String

        res = "{""lista"":  [   

                                {""ticod"": ""1"", ""tides"":""tipo insiminación 1""},
                                {""ticod"": ""2"", ""tides"":""tipo insiminación 2""},
                                {""ticod"": ""3"", ""tides"":""tipo insiminación 3""},
                                {""ticod"": ""4"", ""tides"":""tipo insiminación 4""},
                                {""ticod"": ""5"", ""tides"":""tipo insiminación 5""}
                                
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK""
                }"

        Return res
    End Function


    Public Function ObtenerMadre(ByVal inputJson As Object) As String
        Dim res As String

        res = "{""lista"":  [   
                                {""crotal"":""ES011599992015"", ""nombre"":""PATXUKA 1"", ""fechanacimiento"": ""17/01/2017""},
                                {""crotal"":""ES011599992016"", ""nombre"":""PATXUKA 2"", ""fechanacimiento"": ""18/01/2017""},
                                {""crotal"":""ES011599992017"", ""nombre"":""PATXUKA 3"", ""fechanacimiento"": ""19/01/2017""},
                                {""crotal"":""ES011699992018"", ""nombre"":""PATXUKA 4"", ""fechanacimiento"": ""20/01/2017""},
                                {""crotal"":""ES011699992019"", ""nombre"":""PATXUKA 4"", ""fechanacimiento"": ""20/01/2017""},
                                {""crotal"":""ES011799992020"", ""nombre"":""PATXUKA 4"", ""fechanacimiento"": ""20/01/2017""}
                                
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK""
                }"

        Return res
    End Function

    Public Function ObtenerMadreET(ByVal inputJson As Object) As String
        Dim res As String

        res = "{""lista"":  [   
                                {""crotal"":""ES011599992015"", ""nombre"":""PATXUKA 1"", ""fechanacimiento"": ""17/01/2017""},
                                {""crotal"":""ES011599992016"", ""nombre"":""PATXUKA 2"", ""fechanacimiento"": ""18/01/2017""},
                                {""crotal"":""ES011599992017"", ""nombre"":""PATXUKA 3"", ""fechanacimiento"": ""19/01/2017""},
                                {""crotal"":""ES011599992018"", ""nombre"":""PATXUKA 4"", ""fechanacimiento"": ""20/01/2017""}
                                
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK""
                }"

        Return res
    End Function

    Public Function ObtenerPadre(ByVal inputJson As Object) As String
        Dim res As String

        res = "{""lista"":  [   
                                {""crotal"":""ES011599992015"", ""nombre"":""PATXUKA 1"", ""fechanacimiento"": ""17/01/2017""},
                                {""crotal"":""ES011599992016"", ""nombre"":""PATXUKA 2"", ""fechanacimiento"": ""18/01/2017""},
                                {""crotal"":""ES011599992017"", ""nombre"":""PATXUKA 3"", ""fechanacimiento"": ""19/01/2017""},
                                {""crotal"":""ES011599992018"", ""nombre"":""PATXUKA 4"", ""fechanacimiento"": ""20/01/2017""}
                                
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK""
                }"

        Return res
    End Function

    Public Function ObtenerCrotalesSinAsignar(ByVal inputJson As Object) As String
        Dim res As String

        res = "{""lista"":  [   
                                {""crotal"":""ES011599992015""},
                                {""crotal"":""ES011599992016""},
                                {""crotal"":""ES011599992017""},
                                {""crotal"":""ES011599992018""}
                                
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK""
                }"

        Return res
    End Function

    Public Function ImprimirAltasEntreFechas(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""url"": ""http://www.industriaconectada40.gob.es/Documents/jornada-industria4.0-abril-16.pdf"", 
            ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK"" }"
        Return res
    End Function


    Public Function ImprimirBajasEntreFechas(ByVal inputJson As Object) As String
        Dim res As String
        'Dim ob As Object = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of Object)(inputJson)
        res = "{""url"": ""http://www.industriaconectada40.gob.es/Documents/jornada-industria4.0-abril-16.pdf"", 
            ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK"" }"

        Return res
    End Function

    Public Function ConsultaTipoTramite(ByVal inputJson As Object) As String
        Dim res As String

        res = "{""lista"":  [   
                                {""tracod"":""1"", ""trades"":""Alta guía""},
                                {""tracod"":""2"", ""trades"":""Censo actual""},
                                {""tracod"":""3"", ""trades"":""Censo a una fecha""},
                                {""tracod"":""4"", ""trades"":""Anular guía""}
                                
                                
                            ],
                ""status"":200,""code"":200,""fieldErrors"":[],""message"":""OK""
                }"

        Return res
    End Function

    Public Function ConsultaSerieCrotales(ByVal inputJson As Object) As String
        Dim res As String
        res = "{""code"":200,""fieldErrors"":[],""message"":""OK"",""status"":200,
                ""lista"":[{""caactual"":""30424499"",""cadesde"":""30424000"",""cahasta"":""30424499"",""fechaalta"":""01/01/2014"",""medes"":""Marcas auriculares"",""ocades"":""AZPEITIA""},
                          {""caactual"":""30437999"",""cadesde"":""30437500"",""cahasta"":""30437999"",""fechaalta"":""14/11/2014"",""medes"":""Marcas auriculares"",""ocades"":""AZPEITIA""},
                           {""caactual"":""30450499"",""cadesde"":""30450000"",""cahasta"":""30450499"",""fechaalta"":""08/04/2015"",""medes"":""Marcas auriculares"",""ocades"":""AZPEITIA""},
                           {""caactual"":""30467499"",""cadesde"":""30467000"",""cahasta"":""30467499"",""fechaalta"":""04/02/2016"",""medes"":""Marcas auriculares"",""ocades"":""AZPEITIA""},
                           {""caactual"":""30480999"",""cadesde"":""30480500"",""cahasta"":""30480999"",""fechaalta"":""29/07/2016"",""medes"":""Marcas auriculares"",""ocades"":""AZPEITIA""},
                           {""caactual"":""30493999"",""cadesde"":""30493500"",""cahasta"":""30493999"",""fechaalta"":""27/04/2017"",""medes"":""Marcas auriculares"",""ocades"":""AZPEITIA""},
                           {""caactual"":""30502999"",""cadesde"":""30502500"",""cahasta"":""30502999"",""fechaalta"":""28/09/2017"",""medes"":""Marcas auriculares"",""ocades"":""AZPEITIA""},
                           {""caactual"":""30512499"",""cadesde"":""30512000"",""cahasta"":""30512499"",""fechaalta"":""03/04/2018"",""medes"":""Marcas auriculares"",""ocades"":""AZPEITIA""},
                           {""caactual"":""30520999"",""cadesde"":""30520500"",""cahasta"":""30520999"",""fechaalta"":""17/09/2018"",""medes"":""Marcas auriculares"",""ocades"":""AZPEITIA""},
                           {""caactual"":""30530299"",""cadesde"":""30530000"",""cahasta"":""30530499"",""fechaalta"":""27/02/2019"",""medes"":""Marcas auriculares"",""ocades"":""AZPEITIA""},
                           {""caactual"":""30428999"",""cadesde"":""30428500"",""cahasta"":""30428999"",""fechaalta"":""01/01/2014"",""medes"":""Marcas auriculares"",""ocades"":""BERGARA""},
                           {""caactual"":""30471499"",""cadesde"":""30471000"",""cahasta"":""30471499"",""fechaalta"":""22/07/2016"",""medes"":""Marcas auriculares"",""ocades"":""BERGARA""},
                           {""caactual"":""30506499"",""cadesde"":""30506000"",""cahasta"":""30506499"",""fechaalta"":""30/11/2017"",""medes"":""Marcas auriculares"",""ocades"":""BERGARA""},
                           {""caactual"":""30534000"",""cadesde"":""30534000"",""cahasta"":""30534499"",""fechaalta"":""24/04/2019"",""medes"":""Marcas auriculares"",""ocades"":""BERGARA""},
                           {""caactual"":""30427499"",""cadesde"":""30427000"",""cahasta"":""30427499"",""fechaalta"":""01/01/2014"",""medes"":""Marcas auriculares"",""ocades"":""ELGOIBAR""},
                           {""caactual"":""30439499"",""cadesde"":""30439100"",""cahasta"":""30439499"",""fechaalta"":""08/04/2015"",""medes"":""Marcas auriculares"",""ocades"":""ELGOIBAR""},
                           {""caactual"":""30473499"",""cadesde"":""30473000"",""cahasta"":""30473499"",""fechaalta"":""30/03/2016"",""medes"":""Marcas auriculares"",""ocades"":""ELGOIBAR""},
                           {""caactual"":""30490999"",""cadesde"":""30490500"",""cahasta"":""30490999"",""fechaalta"":""22/03/2017"",""medes"":""Marcas auriculares"",""ocades"":""ELGOIBAR""},
                           {""caactual"":""30505999"",""cadesde"":""30505500"",""cahasta"":""30505999"",""fechaalta"":""29/11/2017"",""medes"":""Marcas auriculares"",""ocades"":""ELGOIBAR""},
                           {""caactual"":""30517999"",""cadesde"":""30517500"",""cahasta"":""30517999"",""fechaalta"":""03/09/2018"",""medes"":""Marcas auriculares"",""ocades"":""ELGOIBAR""},
                           {""caactual"":""30530749"",""cadesde"":""30530500"",""cahasta"":""30530999"",""fechaalta"":""08/03/2019"",""medes"":""Marcas auriculares"",""ocades"":""ELGOIBAR""},
                           {""caactual"":""30427999"",""cadesde"":""30427500"",""cahasta"":""30427999"",""fechaalta"":""01/01/2014"",""medes"":""Marcas auriculares"",""ocades"":""OIARTZUN""},
                           {""caactual"":""30465499"",""cadesde"":""30465000"",""cahasta"":""30465499"",""fechaalta"":""04/12/2015"",""medes"":""Marcas auriculares"",""ocades"":""OIARTZUN""},
                           {""caactual"":""30496499"",""cadesde"":""30496000"",""cahasta"":""30496499"",""fechaalta"":""08/05/2017"",""medes"":""Marcas auriculares"",""ocades"":""OIARTZUN""},
                           {""caactual"":""30507499"",""cadesde"":""30507000"",""cahasta"":""30507499"",""fechaalta"":""11/12/2017"",""medes"":""Marcas auriculares"",""ocades"":""OIARTZUN""},
                           {""caactual"":""30524239"",""cadesde"":""30524000 "",""cahasta"":""30524499"",""fechaalta"":""25/10/2018"",""medes"":""Marcas auriculares"",""ocades"":""OIARTZUN""}]}"
        Return res
    End Function
    Public Function NotificarSerieCrotales(ByVal inputJson As Object) As String
        Dim res As String

        res = "{ ""status"":200,""code"":200,""fieldErrors"":[],""message"":""La  asignacion de serie se  ha  efectuado correctamente"" }"
        ' res = "{ ""status"":200,""code"":300,""fieldErrors"":[],""message"":""La  asignacion de serie  NO se  ha  efectuado correctamente"" }"

        Return res
    End Function
    Public Function ConsultaOCAs(ByVal inputJson As Object) As String
        Dim res As String

        res = "{""code"":200,""fieldErrors"":[],""message"":""OK"",""status"":200,""lista"":[{""ocacod"":""00"",""ocades"":""DIPUTACION GIPUZKOA""},{""ocacod"":""01"",""ocades"":""AZPEITIA""},{""ocacod"":""02"",""ocades"":""BERGARA""},{""ocacod"":""03"",""ocades"":""ELGOIBAR""},{""ocacod"":""04"",""ocades"":""OIARTZUN""},{""ocacod"":""05"",""ocades"":""ORDIZIA""},{""ocacod"":""06"",""ocades"":""TOLOSA""},{""ocacod"":""07"",""ocades"":""ZARAUTZ""},{""ocacod"":""08"",""ocades"":""LABORATORIO FRAISORO""},{""ocacod"":""09"",""ocades"":""OINATI""},{""ocacod"":""10"",""ocades"":""BIDEGOIAN""},{""ocacod"":""11"",""ocades"":""ZEGAMA""}]}"
        Return res
    End Function

    'H0033 InformeBvd
    Public Function InformeBvd(ByVal inputJson As Object) As String
        Dim res As String

        res = "{""code"": 200, ""fieldErrors"": [], ""message"": ""OK"", ""status"": 200, ""url"": ""http://mobi.nekagip.eus/VisorReportBeta/RSRVisor.aspx?A1=Behikudeaketa&A2=ReportBvd&A3=1|0|0|4|&A4=parGuid=82406706-5a99-434b-937d-5f3c544e4e94|parIdioma=es&A5=2"" }"

        Return res
    End Function

End Class
