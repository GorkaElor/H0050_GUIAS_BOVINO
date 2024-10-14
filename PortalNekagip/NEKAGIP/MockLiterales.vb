Public Class MockLiterales
    Public Function Literales(ByVal inputJson As Object) As String
        Dim res As String = ""
        If inputJson.aplicacion = "ABE1002" Then
            If inputJson.idioma = "es" Then
                res = "{""lista"":  [   {""codigo"":""50001"",""literal"":""Página de inicio""},
                                    {""codigo"":""50002"",""literal"":""Avisos y eventos""},
                                    {""codigo"":""50003"",""literal"":""Actualidad del sector""},
                                    {""codigo"":""50004"",""literal"":""Servicios disponibles""},
                                    {""codigo"":""50005"",""literal"":""Acerca de""},
                                    {""codigo"":""50006"",""literal"":""Ayuda""},
                                    {""codigo"":""50007"",""literal"":""Contacto""},
                                    {""codigo"":""50008"",""literal"":""Otras secciones""},
                                    {""codigo"":""50009"",""literal"":""Menú general""},
                                    {""codigo"":""50010"",""literal"":""Idiomas""}
                                ]
                    }"
            Else
                res = "{""lista"":  [   {""codigo"":""50001"",""literal"":""Hasiera""},
                                        {""codigo"":""50002"",""literal"":""Oharrak eta ekitaldiak""},
                                        {""codigo"":""50003"",""literal"":""Sektorearen aktualitatea""},
                                        {""codigo"":""50004"",""literal"":""Eskurako zerbitzuak""},
                                        {""codigo"":""50005"",""literal"":""Honi buruz""},
                                        {""codigo"":""50006"",""literal"":""Laguntza""},
                                        {""codigo"":""50007"",""literal"":""Kontaktua""},
                                        {""codigo"":""50008"",""literal"":""Beste atalak""},
                                        {""codigo"":""50009"",""literal"":""Menu orokorra""},
                                        {""codigo"":""50010"",""literal"":""Hizkuntzak""}
                                    ]
                        }"
            End If
        ElseIf inputJson.aplicacion = "ABE1001" Then
            If inputJson.idioma = "es" Then
                If inputJson.grupo = "GEN" Then
                    res = "{""lista"":  [   {""codigo"":""50001"",""literal"":""Página de inicio""},
                                        {""codigo"":""50002"",""literal"":""Alta de una guía""},
                                        {""codigo"":""50003"",""literal"":""Consulta de datos""},
                                        {""codigo"":""50004"",""literal"":""Datos de explotación""},
                                        {""codigo"":""50005"",""literal"":""Historial de tramites""},
                                        {""codigo"":""50006"",""literal"":""Configuración""},
                                        {""codigo"":""50007"",""literal"":""Ayuda y contacto""},
                                        {""codigo"":""50008"",""literal"":""Censo actual""},
                                        {""codigo"":""50009"",""literal"":""Guías realizadas""},
                                        {""codigo"":""50010"",""literal"":""Censos a una fecha""},
                                        {""codigo"":""50011"",""literal"":""Libro de registro""},
                                        {""codigo"":""50012"",""literal"":""Datos""},
                                        {""codigo"":""50013"",""literal"":""Titulares""},
                                        {""codigo"":""50014"",""literal"":""Asociaciones""},
                                        {""codigo"":""50015"",""literal"":""Calificación""},
                                        {""codigo"":""50016"",""literal"":""Cambio de explotación de trabajo""},
                                        {""codigo"":""50017"",""literal"":""Área privada""},
                                        {""codigo"":""50018"",""literal"":""Explotación""},
                                        {""codigo"":""50019"",""literal"":""CAMBIAR EXPLOTACIÓN""},
                                        {""codigo"":""50020"",""literal"":""Cerrar sesión""},
                                        {""codigo"":""50021"",""literal"":""Diputación Foral de Gipuzkoa""},
                                        {""codigo"":""50022"",""literal"":""Aviso legal""},
                                        {""codigo"":""50023"",""literal"":""Politica de privacidad""},
                                        {""codigo"":""50024"",""literal"":""Sitemap""},
                                        {""codigo"":""50025"",""literal"":""Accesibilidad""},
                                        {""codigo"":""50026"",""literal"":""GESTIÓN BOVINO""},
                                        {""codigo"":""50027"",""literal"":""y regresar a la home de Nekagip""},
                                        {""codigo"":""50028"",""literal"":""Por favor, habilite las ventanas emergentes en su navegador.""},
                                        {""codigo"":""50029"",""literal"":""Crotales disponibles""},
                                        {""codigo"":""50030"",""literal"":""Solicitud de crotales""},
                                        {""codigo"":""50031"",""literal"":""Relación de solicitudes""},
                                        {""codigo"":""50032"",""literal"":""Notificar nacimiento""},
                                        {""codigo"":""50033"",""literal"":""Notificar muerte""},
                                        {""codigo"":""50034"",""literal"":""Listado nacimientos""},
                                        {""codigo"":""50035"",""literal"":""Listado muertes""},
                                        {""codigo"":""50036"",""literal"":""Gestión de crotales""},
                                        {""codigo"":""50037"",""literal"":""Altas/bajas animales""},
                                        {""codigo"":""50038"",""literal"":""Altas entre fechas""},
                                        {""codigo"":""50039"",""literal"":""Bajas entre fechas""},
                                        {""codigo"":""50040"",""literal"":""Altas por compra""},
                                        {""codigo"":""50041"",""literal"":""Confirmar guía de entrada""},
                                        {""codigo"":""53786"",""literal"":""Búsqueda de crotal""},
                                        {""codigo"":""53799"",""literal"":""Relación de series""}
	
                                        
                                ]
                    }"
                ElseIf inputJson.grupo = "INDEX" Then
                    res = "{""lista"":  [  {""codigo"":""50101"",""literal"":""Selección de explotación de trabajo""},
                                            {""codigo"":""50102"",""literal"":""Explotación""},
                                            {""codigo"":""50103"",""literal"":""Denominación""},
                                            {""codigo"":""50104"",""literal"":""Seleccionar""},
                                            {""codigo"":""50105"",""literal"":""Seleccione la explotación que desea gestionar""},
                                            {""codigo"":""50106"",""literal"":""Notificaciones""},
                                            {""codigo"":""50107"",""literal"":""Nuevas notificaciones""}
                                            

                                ]
                    }"
                ElseIf inputJson.grupo = "INICIO" Then
                    res = "{""lista"":  [  {""codigo"":""50201"",""literal"":""Bienvenido""},
                                            {""codigo"":""50202"",""literal"":""Explotación""},
                                            {""codigo"":""50203"",""literal"":""Último acceso""},
                                            {""codigo"":""50204"",""literal"":""Datos de la explotación""},
                                            {""codigo"":""50205"",""literal"":""Titular""},
                                            {""codigo"":""50206"",""literal"":""Últimos trámites realizados sobre esta explotación""},
                                            {""codigo"":""50207"",""literal"":""Fecha de solicitud""},
                                            {""codigo"":""50208"",""literal"":""Descripción del trámite""},
                                            {""codigo"":""50209"",""literal"":""Código trámite""},
                                            {""codigo"":""50210"",""literal"":""NOTIFICACIONES""},
                                            {""codigo"":""50211"",""literal"":""Nuevas notificaciones""},
                                            {""codigo"":""50212"",""literal"":""en total""},
                                            {""codigo"":""50213"",""literal"":""Ver notificaciones""},
                                            {""codigo"":""50214"",""literal"":""Clique aqui para solicitar el permiso de autocrotalación""},
                                            {""codigo"":""50215"",""literal"":""Solicitud de permiso de autocrotalación""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ALTA1" Then
                    res = "{""lista"":  [  {""codigo"":""50301"",""literal"":""Alta de una guía""},
                                            {""codigo"":""50302"",""literal"":""Complete los siguientes pasos para solicitar una guía.""},
                                            {""codigo"":""50303"",""literal"":""Paso""},
                                            {""codigo"":""50304"",""literal"":""Datos de la guía""},
                                            {""codigo"":""50305"",""literal"":""Selección de crotales""},
                                            {""codigo"":""50306"",""literal"":""Resumen y finalizar""},
                                            {""codigo"":""50307"",""literal"":""Explotación destino""},
                                            {""codigo"":""50308"",""literal"":""Buscar""},
                                            {""codigo"":""50309"",""literal"":""Nombre""},
                                            {""codigo"":""50310"",""literal"":""Municipio""},
                                            {""codigo"":""50311"",""literal"":""Provincia""},
                                            {""codigo"":""50312"",""literal"":""Sin seleccionar""},
                                            {""codigo"":""50313"",""literal"":""Fecha salida""},
                                            {""codigo"":""50314"",""literal"":""Fecha llegada""},
                                            {""codigo"":""50315"",""literal"":""Datos del transportista""},
                                            {""codigo"":""50316"",""literal"":""NIF/NIE transportista""},
                                            {""codigo"":""50317"",""literal"":""Matrícula del vehículo""},
                                            {""codigo"":""50318"",""literal"":""ATES""},
                                            {""codigo"":""50319"",""literal"":""Matadero""},
                                            {""codigo"":""50320"",""literal"":""Código""},
                                            {""codigo"":""50321"",""literal"":""Seleccionar""},
                                            {""codigo"":""50322"",""literal"":""Matrícula""},
                                            {""codigo"":""50323"",""literal"":""Siguiente paso""},
                                            {""codigo"":""50324"",""literal"":""La fecha de salida es obligatoria.""},
                                            {""codigo"":""50325"",""literal"":""La fecha de llega es obligatoria.""},
                                            {""codigo"":""50326"",""literal"":""El DNI del transportista es obligatorio.""},
                                            {""codigo"":""50327"",""literal"":""DNI no válido.""},
                                            {""codigo"":""50328"",""literal"":""El nombre del transportista es obligatorio.""},
                                            {""codigo"":""50329"",""literal"":""La matrícula del vehículo es obligatoria.""},
                                            {""codigo"":""50330"",""literal"":""Matrícula no válida.""},
                                            {""codigo"":""50331"",""literal"":""El ATES es obligatorio.""},
                                            {""codigo"":""50332"",""literal"":""Tiene que ser un código de expedición destino válido.""},
                                            {""codigo"":""50333"",""literal"":""La explotación destino deberá contener 14 caracteres.""},
                                            {""codigo"":""50334"",""literal"":""La fecha de salida como mucho puede ser 5 días anterior a la fecha actual.""},
                                            {""codigo"":""50335"",""literal"":""La fecha de llegada como mucho puede ser 5 días posterior a la fecha actual.""},
                                            {""codigo"":""50336"",""literal"":""La fecha de llegada tiene que ser igual o posterior a la fecha de salida.""},
                                            {""codigo"":""50337"",""literal"":""El ATES del transportista deberá contener 15 caracteres.""},
                                            {""codigo"":""50338"",""literal"":""Limpiar""},
                                            {""codigo"":""53871"",""literal"":""Hora salida""},
                                            {""codigo"":""53872"",""literal"":""Hora llegada""},
                                            {""codigo"":""53873"",""literal"":""Formato Incorrecto""},
                                            {""codigo"":""53874"",""literal"":""La hora de salida tiene que ser inferior a la de llegada, por tratarse del mismo día""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ALTA2" Then
                    res = "{""lista"":  [  {""codigo"":""50401"",""literal"":""Alta de una guía""},
                                            {""codigo"":""50402"",""literal"":""Complete los siguientes pasos para solicitar una guía.""},
                                            {""codigo"":""50403"",""literal"":""Paso""},
                                            {""codigo"":""50404"",""literal"":""Datos de la guía""},
                                            {""codigo"":""50405"",""literal"":""Selección de crotales""},
                                            {""codigo"":""50406"",""literal"":""Resumen y finalizar""},
                                            {""codigo"":""50407"",""literal"":""Crotal""},
                                            {""codigo"":""50408"",""literal"":""Sexo""},
                                            {""codigo"":""50409"",""literal"":""F. de nacim.""},
                                            {""codigo"":""50410"",""literal"":""Raza""},
                                            {""codigo"":""50411"",""literal"":""Seleccionar""},
                                            {""codigo"":""50412"",""literal"":""Seleccionado""},
                                            {""codigo"":""50413"",""literal"":""No seleccionable""},
                                            {""codigo"":""50414"",""literal"":""Siguiente paso""},
                                            {""codigo"":""50415"",""literal"":""Paso anterior""},
                                            {""codigo"":""50416"",""literal"":""Cancelar""},
                                            {""codigo"":""50417"",""literal"":""Nombre""},
                                            {""codigo"":""50418"",""literal"":""Debe seleccionar algún crotal""},
                                            {""codigo"":""50419"",""literal"":""ACEPTAR""},
                                            {""codigo"":""50420"",""literal"":""Fecha""},
                                            {""codigo"":""50421"",""literal"":""Veterinario""},
                                            {""codigo"":""50422"",""literal"":""Equipo""},
                                            {""codigo"":""50423"",""literal"":""Tipo""},
                                            {""codigo"":""50424"",""literal"":""Tuberculosis""},
                                            {""codigo"":""50425"",""literal"":""Brucelosis""},
                                            {""codigo"":""50426"",""literal"":""Perineumonía""},
                                            {""codigo"":""50427"",""literal"":""Leucosis""},
                                            {""codigo"":""50428"",""literal"":""Ibr""},
                                            {""codigo"":""50429"",""literal"":""Lazul""},
                                            {""codigo"":""50430"",""literal"":""Paratuberculosis""},
                                            {""codigo"":""50431"",""literal"":""Anticuerpos""},
                                            {""codigo"":""50432"",""literal"":""Antigenos""},
                                            {""codigo"":""50433"",""literal"":""Neoesporas""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ALTA3" Then
                    res = "{""lista"":  [  {""codigo"":""50501"",""literal"":""Alta de una guía""},
                                            {""codigo"":""50502"",""literal"":""Complete los siguientes pasos para solicitar una guía.""},
                                            {""codigo"":""50503"",""literal"":""Paso""},
                                            {""codigo"":""50504"",""literal"":""Datos de la guía""},
                                            {""codigo"":""50505"",""literal"":""Selección de crotales""},
                                            {""codigo"":""50506"",""literal"":""Resumen y finalizar""},
                                            {""codigo"":""50507"",""literal"":""Resumen de la solicitud de guía""},
                                            {""codigo"":""50508"",""literal"":""Exp. Destino""},
                                            {""codigo"":""50509"",""literal"":""Nombre""},
                                            {""codigo"":""50510"",""literal"":""Municipio""},
                                            {""codigo"":""50511"",""literal"":""Provincia""},
                                            {""codigo"":""50512"",""literal"":""Fecha salida""},
                                            {""codigo"":""50513"",""literal"":""Fecha llegada""},
                                            {""codigo"":""50514"",""literal"":""Transportista""},
                                            {""codigo"":""50515"",""literal"":""Matrícula""},
                                            {""codigo"":""50516"",""literal"":""NIF/NIE Transportista""},
                                            {""codigo"":""50517"",""literal"":""ATES""},
                                            {""codigo"":""50518"",""literal"":""Crotales""},
                                            {""codigo"":""50519"",""literal"":""Finalizar""},
                                            {""codigo"":""50520"",""literal"":""Paso anterior""},
                                            {""codigo"":""50521"",""literal"":""Cancelar""},
                                            {""codigo"":""53871"",""literal"":""Hora salida""},
                                            {""codigo"":""53872"",""literal"":""Hora llegada""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ALTA_FIN" Then
                    res = "{""lista"":  [  {""codigo"":""50601"",""literal"":""Alta de una guía""},
                                            {""codigo"":""50602"",""literal"":""Complete los siguientes pasos para solicitar una guía.""},
                                            {""codigo"":""50603"",""literal"":""Paso""},
                                            {""codigo"":""50604"",""literal"":""Datos de la guía""},
                                            {""codigo"":""50605"",""literal"":""Selección de crotales""},
                                            {""codigo"":""50606"",""literal"":""Resumen y finalizar""},
                                            {""codigo"":""50607"",""literal"":""¡Finalizado!""},
                                            {""codigo"":""50609"",""literal"":""La guía se ha procesado correctamente. Puede descargarla en formato PDF e imprimirla utilizando los siguientes botones""},
                                            {""codigo"":""50610"",""literal"":""Descargar guía""},
                                            {""codigo"":""50611"",""literal"":""Descargar guía anexo matadero""},
                                            {""codigo"":""50612"",""literal"":""Proceso no finalizado""},
                                            {""codigo"":""50613"",""literal"":""Volver al principio""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CENSO" Then
                    res = "{""lista"":  [  {""codigo"":""50701"",""literal"":""Censo actual""},
                                        {""codigo"":""50702"",""literal"":""Haga click sobre el siguiente botón para obtener el censo actual de animales""},
                                        {""codigo"":""50703"",""literal"":""PDF""},
                                        {""codigo"":""50704"",""literal"":""EXCEL""},
                                        {""codigo"":""50705"",""literal"":""Descarga en un documento el censo actual de la explotación""},
                                        {""codigo"":""50706"",""literal"":""Crotal""},
                                        {""codigo"":""50707"",""literal"":""Sexo""},
                                        {""codigo"":""50708"",""literal"":""F. de nacim.""},
                                        {""codigo"":""50709"",""literal"":""Raza""},
                                        {""codigo"":""50710"",""literal"":""Seleccionar""},
                                        {""codigo"":""50711"",""literal"":""Seleccionado""},
                                        {""codigo"":""50712"",""literal"":""No seleccionable""},
                                        {""codigo"":""50713"",""literal"":""Nombre""},
                                        {""codigo"":""50714"",""literal"":""Fecha""},
                                        {""codigo"":""50715"",""literal"":""Veterinario""},
                                        {""codigo"":""50716"",""literal"":""Equipo""},
                                        {""codigo"":""50717"",""literal"":""Tipo""},
                                        {""codigo"":""50718"",""literal"":""Tuberculosis""},
                                        {""codigo"":""50719"",""literal"":""Brucelosis""},
                                        {""codigo"":""50720"",""literal"":""Perineumonía""},
                                        {""codigo"":""50721"",""literal"":""Leucosis""},
                                        {""codigo"":""50722"",""literal"":""Ibr""},
                                        {""codigo"":""50723"",""literal"":""Lazul""},
                                        {""codigo"":""50724"",""literal"":""Paratuberculosis""},
                                        {""codigo"":""50725"",""literal"":""Anticuerpos""},
                                        {""codigo"":""50726"",""literal"":""Antigenos""},
                                        {""codigo"":""50727"",""literal"":""Neoesporas""},
                                        {""codigo"":""53720"",""literal"":""<6 M""},
                                        {""codigo"":""53721"",""literal"":""6-12 M""},
                                        {""codigo"":""53722"",""literal"":""12-24 M""},
                                        {""codigo"":""53723"",""literal"":"">= 2 A""},
                                        {""codigo"":""53724"",""literal"":""Total""},
                                        {""codigo"":""53725"",""literal"":""Hembra""},
                                        {""codigo"":""53726"",""literal"":""Macho""},
                                        {""codigo"":""53727"",""literal"":""Resumen""},
                                        {""codigo"":""53728"",""literal"":""Total de animales""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CONSULTA" Then
                    res = "{""lista"":  [  {""codigo"":""50801"",""literal"":""Consulta guías""},
                                            {""codigo"":""50802"",""literal"":""Número guía""},
                                            {""codigo"":""50803"",""literal"":""Explotación destino""},
                                            {""codigo"":""50804"",""literal"":""Fecha salida""},
                                            {""codigo"":""50805"",""literal"":""Fecha llegada""},
                                            {""codigo"":""50806"",""literal"":""Procesando""},
                                            {""codigo"":""50807"",""literal"":""Confirmación de anulación de guía""},
                                            {""codigo"":""50808"",""literal"":""¿Está seguro de anular esta guía?""},
                                            {""codigo"":""50809"",""literal"":""Aceptar""},
                                            {""codigo"":""50810"",""literal"":""Cancelar""},
                                            {""codigo"":""50811"",""literal"":""Crotal""},
                                            {""codigo"":""50812"",""literal"":""Buscar""},
                                            {""codigo"":""50813"",""literal"":""Explotación""},
                                            {""codigo"":""50814"",""literal"":""Consulta las guías realizadas en la explotación""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CENSO_FECHA" Then
                    res = "{""lista"":  [  {""codigo"":""50901"",""literal"":""Censo a una fecha""},
                                            {""codigo"":""50902"",""literal"":""Seleccione una fecha para obtener el censo animal a dicha fecha""},
                                            {""codigo"":""50903"",""literal"":""Fecha""},
                                            {""codigo"":""50904"",""literal"":""PDF""},
                                            {""codigo"":""50905"",""literal"":""EXCEL""},
                                            {""codigo"":""50906"",""literal"":""Consulta el censo de la explitación a una fecha""}
                                ]
                    }"
                ElseIf inputJson.grupo = "REGISTRO" Then
                    res = "{""lista"":  [  {""codigo"":""51001"",""literal"":""Libro de registro""},
                                            {""codigo"":""51002"",""literal"":""Campaña""},
                                            {""codigo"":""51003"",""literal"":""Documentación""},
                                            {""codigo"":""51004"",""literal"":""Libro de registro de trámites de la explotación""}
                                ]
                    }"
                ElseIf inputJson.grupo = "EXPLOTACION" Then
                    res = "{""lista"":  [  {""codigo"":""51101"",""literal"":""Datos explotación""},
                                            {""codigo"":""51102"",""literal"":""Nombre""},
                                            {""codigo"":""51103"",""literal"":""Dirección""},
                                            {""codigo"":""51104"",""literal"":""Municipio""},
                                            {""codigo"":""51105"",""literal"":""Provincia""},
                                            {""codigo"":""51106"",""literal"":""Fecha estado""},
                                            {""codigo"":""51107"",""literal"":""Sistema productivo""},
                                            {""codigo"":""51108"",""literal"":""Capacidad productiva""},
                                            {""codigo"":""51109"",""literal"":""Sostenibilidad""},
                                            {""codigo"":""51110"",""literal"":""Autoconsumo""},
                                            {""codigo"":""51111"",""literal"":""Inter. Intracomunitario""},
                                            {""codigo"":""51112"",""literal"":""Transhumante""},
                                            {""codigo"":""51113"",""literal"":""Observaciones""},
                                            {""codigo"":""51114"",""literal"":""Clasificaciones zootéctinas""},
                                            {""codigo"":""51115"",""literal"":""Detalle de datos de la explotación""}
                                ]
                    }"
                ElseIf inputJson.grupo = "TITULARES" Then
                    res = "{""lista"":  [  {""codigo"":""51121"",""literal"":""Titulares""},
                                            {""codigo"":""51122"",""literal"":""CIF/NIF""},
                                            {""codigo"":""51123"",""literal"":""Nombre""},
                                            {""codigo"":""51124"",""literal"":""Relación""},
                                            {""codigo"":""51125"",""literal"":""Listado de titulares de la explotación""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ASOCIACIONES" Then
                    res = "{""lista"":  [  {""codigo"":""51131"",""literal"":""Asociaciones""},
                                            {""codigo"":""51132"",""literal"":""Fecha alta""},
                                            {""codigo"":""51133"",""literal"":""Lista de asociaciones de la explotación""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CALIFICACION" Then
                    res = "{""lista"":  [  {""codigo"":""51141"",""literal"":""Tipo""},
                                            {""codigo"":""51142"",""literal"":""Calificación""},
                                            {""codigo"":""51143"",""literal"":""Fecha""},
                                            {""codigo"":""51144"",""literal"":""Calificaciones sanitarias de la explotación""}
                                ]
                    }"
                ElseIf inputJson.grupo = "TRAMITES" Then
                    res = "{""lista"":  [  {""codigo"":""51151"",""literal"":""Historial de trámites""},
                                            {""codigo"":""51152"",""literal"":""Fecha de solicitud""},
                                            {""codigo"":""51153"",""literal"":""Descripción de trámite""},
                                            {""codigo"":""51154"",""literal"":""Listado con el historial de trámites de la explotación""},
                                            {""codigo"":""51155"",""literal"":""FILTRO DE BÚSQUEDA SOBRE TRÁMITES""},
                                            {""codigo"":""51156"",""literal"":""Tipo de trámite""},
                                            {""codigo"":""51157"",""literal"":""Fecha desde""},
                                            {""codigo"":""51158"",""literal"":""Fecha hasta""},
                                            {""codigo"":""51159"",""literal"":""Limpiar Filtros""},
                                            {""codigo"":""51160"",""literal"":""Filtrar resultados""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CAMBIO" Then
                    res = "{""lista"":  [  {""codigo"":""51161"",""literal"":""Cambio de explotación de trabajo""},
                                            {""codigo"":""51162"",""literal"":""Explotación de trabajo actual""},
                                            {""codigo"":""51163"",""literal"":""Explotación""},
                                            {""codigo"":""51164"",""literal"":""Denominación""},
                                            {""codigo"":""51165"",""literal"":""Seleccionar""},
                                            {""codigo"":""51166"",""literal"":""Seleccionado""},
                                            {""codigo"":""51167"",""literal"":""Nuevas notificaciones""},
                                            {""codigo"":""51168"",""literal"":""Notificaciones""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ERROR" Then
                    res = "{""lista"":  [  {""codigo"":""51171"",""literal"":""Error""},
                                            {""codigo"":""51172"",""literal"":""Se ha producido un error al recuperar la información del servidor, inténtelo de nuevo más tarde. En caso de persistir el error póngase en contacto con el Administrador.""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CONTACTO" Then
                    res = "{""lista"":  [  {""codigo"":""51181"",""literal"":""Ayuda y contacto""},
                                            {""codigo"":""51182"",""literal"":""Email""},
                                            {""codigo"":""51183"",""literal"":""Teléfono""},
                                            {""codigo"":""51184"",""literal"":""Descargar manual Nekagip""},
                                            {""codigo"":""51185"",""literal"":""Zona de ayuda y contacto para usuarios""}
                                ]
                    }"
                ElseIf inputJson.grupo = "SOLICITUD_CROTALES" Then
                    res = "{""lista"":  [   {""codigo"":""52001"",""literal"":""Solicitud de crotales""},
                                            {""codigo"":""52002"",""literal"":""Formulario de solicitud de crotales para autocrotalación""},
                                            {""codigo"":""52003"",""literal"":""Permiso de autocrotalación""},
                                            {""codigo"":""52004"",""literal"":""Autorizado""},
                                            {""codigo"":""52005"",""literal"":""El número de crotales solicitados nunca podrá ser superior al número de hembras en su explotación.""},
                                            {""codigo"":""52006"",""literal"":""La cantidad de crotales solicitado siempre de be de ser un múltiplo de 10.""},
                                            {""codigo"":""52007"",""literal"":""Fecha de solicitud""},
                                            {""codigo"":""52008"",""literal"":""Número de crotales a solicitar""},
                                            {""codigo"":""52009"",""literal"":""Incluir tenazas""},
                                            {""codigo"":""52010"",""literal"":""Solicitar Crotales""},
                                            {""codigo"":""52011"",""literal"":""El Número de crotales a solicitar es obligatorio""},
                                            {""codigo"":""52012"",""literal"":""El Número de crotales a solicitar debe ser múltiplo de 10""},
                                            {""codigo"":""52013"",""literal"":""El Número de crotales a solicitar no puede ser superior al número de hembras en su explotación""},
                                            {""codigo"":""52014"",""literal"":""Introduce un múltiplo de 10""},
                                            {""codigo"":""52015"",""literal"":""Por favor introduce un número multiplo de 10 menor o igual que 100""},
                                            {""codigo"":""52016"",""literal"":""Si el número de crotales es 0, hay que indicar que se solicitan tenazas""}
                                ]
                    }"
                ElseIf inputJson.grupo = "RELACION_DE_SOLICITUDES" Then
                    res = "{""lista"":  [   {""codigo"":""52101"",""literal"":""Relación de solicitud de crotales""},
                                            {""codigo"":""52102"",""literal"":""Listado de solicitudes de crotales para la explotación""},
                                            {""codigo"":""52103"",""literal"":""Fecha petición""},
                                            {""codigo"":""52104"",""literal"":""Nº crotales""},
                                            {""codigo"":""52105"",""literal"":""Tenazas""},
                                            {""codigo"":""52106"",""literal"":""Estado""},
                                            {""codigo"":""52107"",""literal"":""Solicitado""},
                                            {""codigo"":""52108"",""literal"":""Disponibles en Oca""},
                                            {""codigo"":""52109"",""literal"":""Entregado""},
                                            {""codigo"":""52110"",""literal"":""Si""},
                                            {""codigo"":""52111"",""literal"":""No""},
                                            {""codigo"":""52112"",""literal"":""Fecha de tramitación""},
                                            {""codigo"":""52113"",""literal"":""Fecha de entrega""},
                                            {""codigo"":""52114"",""literal"":""Imprimir albarán""},
                                            {""codigo"":""52115"",""literal"":""Crotales enviados""}

                                ]
                    }"
                ElseIf inputJson.grupo = "SOLICITUD_PERMISO" Then
                    res = "{""lista"":  [   {""codigo"":""52201"",""literal"":""Solicitud de crotales""},
                                            {""codigo"":""52202"",""literal"":""Formulario de solicitud de crotales para autocrotalación""},
                                            {""codigo"":""52203"",""literal"":""Solicitud de permiso de autocrotalación""},
                                            {""codigo"":""52204"",""literal"":""Solicitar permiso""},
                                            {""codigo"":""52205"",""literal"":""Para que Vd. pueda crotalar y notificar los animales nacidos en su explotación es necesario solicitar un permiso de autocrotalación.""},
                                            {""codigo"":""52206"",""literal"":""Este permiso le habilita para solicitar crotales y poder autocrotalar. Durante el proceso de solicitud se comprobará si la explotación cumple con los requisitos establecidos para autocrotalación por el servicio de ganadería.""},
                                            {""codigo"":""52207"",""literal"":""El tiempo de respuesta de aceptación o rechazo de la solicitud oscila entre las 24 / 48 horas desde la emisión emisión de la misma.""}
                                ]
                    }"
                ElseIf inputJson.grupo = "SOLICITUD_PERMISO_EN_TRAMITE" Then
                    res = "{""lista"":  [   {""codigo"":""52301"",""literal"":""Solicitud de crotales""},
                                            {""codigo"":""52302"",""literal"":""Formulario de solicitud de crotales para autocrotalación""},
                                            {""codigo"":""52303"",""literal"":""Solicitud de permiso de autocrotalación""},
                                            {""codigo"":""52304"",""literal"":""Fecha de solicitud""},
                                            {""codigo"":""52305"",""literal"":""Estado de la solicitud""},
                                            {""codigo"":""52306"",""literal"":""En trámite""},
                                            {""codigo"":""52307"",""literal"":""Para que Vd. pueda crotalar y notificar los animales nacidos en su explotación es necesario solicitar un permiso de autocrotalación.""},
                                            {""codigo"":""52308"",""literal"":""Este permiso le habilita para solicitar crotales y poder autocrotalar. Durante el proceso de solicitud se comprobará si la explotación cumple con los requisitos establecidos para autocrotalación por el servicio de ganadería.""},
                                            {""codigo"":""52309"",""literal"":""El tiempo de respuesta de aceptación o rechazo de la solicitud oscila entre las 24 / 48 horas desde la emisión emisión de la misma.""}

                                ]
                    }"
                ElseIf inputJson.grupo = "SOLICITUD_PERMISO_DENEGADA" Then
                    res = "{""lista"":  [   {""codigo"":""52401"",""literal"":""Solicitud de crotales""},
                                            {""codigo"":""52402"",""literal"":""Formulario de solicitud de crotales para autocrotalación""},
                                            {""codigo"":""52403"",""literal"":""Solicitud de permiso de autocrotalación""},
                                            {""codigo"":""52404"",""literal"":""La solicitud de permiso de autocrotalación ha sido rechazada para esta explotación.""},
                                            {""codigo"":""52405"",""literal"":""Fecha de solicitud""},
                                            {""codigo"":""52406"",""literal"":""Estado de la solicitud""},
                                            {""codigo"":""52407"",""literal"":""Puede ponerse en contacto a través del número de teléfono""},
                                            {""codigo"":""52408"",""literal"":""Rechazada""},
                                            {""codigo"":""52409"",""literal"":""para gestionar su solicitud.""},
                                            {""codigo"":""52410"",""literal"":""Para que Vd. pueda crotalar y notificar los animales nacidos en su explotación es necesario solicitar un permiso de autocrotalación.""},
                                            {""codigo"":""52411"",""literal"":""Este permiso le habilita para solicitar crotales y poder autocrotalar. Durante el proceso de solicitud se comprobará si la explotación cumple con los requisitos establecidos para autocrotalación por el servicio de ganadería.""},
                                            {""codigo"":""52412"",""literal"":""El tiempo de respuesta de aceptación o rechazo de la solicitud oscila entre las 24 / 48 horas desde la emisión emisión de la misma.""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ALTAS_ENTRE_FECHAS" Then
                    res = "{""lista"":  [  {""codigo"":""52501"",""literal"":""Altas entre fechas""},
                                           {""codigo"":""52502"",""literal"":""Consulta las altas entre fechas en formato PDF o Excel""},
                                           {""codigo"":""52503"",""literal"":""Seleccione el tipo de alta y las fechas de la consulta""},
                                           {""codigo"":""52504"",""literal"":""Nacimiento de animal""},
                                           {""codigo"":""52505"",""literal"":""Compra / Guía de entrada""},
                                           {""codigo"":""52506"",""literal"":""Fecha desde""},
                                           {""codigo"":""52507"",""literal"":""Fecha hasta""},
                                           {""codigo"":""52508"",""literal"":""La fecha hasta debe ser mayor o igual a la fecha desde""}
                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "BAJAS_ENTRE_FECHAS" Then
                    res = "{""lista"":  [  {""codigo"":""52601"",""literal"":""Bajas entre fechas""},
                                           {""codigo"":""52602"",""literal"":""Consulta las bajas entre fechas en formato PDF o Excel""},
                                           {""codigo"":""52603"",""literal"":""Seleccione el tipo de baja y las fechas de la consulta""},
                                           {""codigo"":""52604"",""literal"":""Guías a vida""},
                                           {""codigo"":""52605"",""literal"":""Muerte del animal""},
                                           {""codigo"":""52606"",""literal"":""Guías a matadero""},
                                           {""codigo"":""52607"",""literal"":""Fecha desde""},
                                           {""codigo"":""52608"",""literal"":""Fecha hasta""},
                                           {""codigo"":""52609"",""literal"":""La fecha hasta debe ser mayor o igual a la fecha desde""}

                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "CROTALES_DISPONIBLES" Then
                    res = "{""lista"":  [  {""codigo"":""52701"",""literal"":""Crotales disponibles""},
                                           {""codigo"":""52702"",""literal"":""Imprimir justificante""},
                                           {""codigo"":""52703"",""literal"":""Proceso completado correctamente""},
                                           {""codigo"":""52704"",""literal"":""Aceptar""},
                                           {""codigo"":""52705"",""literal"":""Crotal""},
                                           {""codigo"":""52706"",""literal"":""Estado del crotal""},
                                           {""codigo"":""52707"",""literal"":""Pérdidas""},
                                           {""codigo"":""52708"",""literal"":""Notificar pérdida""},
                                           {""codigo"":""52709"",""literal"":""Crotal perdido / nº deshabilitado""},
                                           {""codigo"":""52710"",""literal"":""Fecha de comunicación""},
                                           {""codigo"":""52711"",""literal"":""Fecha de pérdida""},
                                           {""codigo"":""52712"",""literal"":""Fecha preparación fábrica""},
                                           {""codigo"":""52713"",""literal"":""Fecha entrega""},
                                           {""codigo"":""52714"",""literal"":""Observaciones""},
                                           {""codigo"":""52715"",""literal"":""Lista de pérdidas""}
                                ]
                    }"
                ElseIf inputJson.grupo = "NOTIFICAR_NACIMIENTO" Then
                    res = "{""lista"":  [  {""codigo"":""52801"",""literal"":""Notificacion de Nacimiento""},
                                           {""codigo"":""52802"",""literal"":""Datos del animal""},
                                           {""codigo"":""52803"",""literal"":""Nombre""},
                                           {""codigo"":""52804"",""literal"":""Raza""},
                                           {""codigo"":""52805"",""literal"":""Sexo""},
                                           {""codigo"":""52806"",""literal"":""Peso nacimiento""},
                                           {""codigo"":""52807"",""literal"":""Aptitud""},
                                           {""codigo"":""52808"",""literal"":""Nº Reg. Genealógico""},
                                           {""codigo"":""52809"",""literal"":""Tipo de parto""},
                                           {""codigo"":""52810"",""literal"":""Facilidad del parto""},
                                           {""codigo"":""52811"",""literal"":""Tipo de inseminación""},
                                           {""codigo"":""52814"",""literal"":""Fecha de nacimiento""},
                                           {""codigo"":""52815"",""literal"":""Madre""},
                                           {""codigo"":""52816"",""literal"":""Borrar""},
                                           {""codigo"":""52817"",""literal"":""Madre E.T.""},
                                           {""codigo"":""52818"",""literal"":""Padre""},
                                           {""codigo"":""52819"",""literal"":""Datos de crotalación""},
                                           {""codigo"":""52820"",""literal"":""Crotal""},
                                           {""codigo"":""52821"",""literal"":""F. implantación crotal""},
                                           {""codigo"":""52822"",""literal"":""Notificar nacimiento""},
                                           {""codigo"":""52823"",""literal"":""Nacimiento de animal""},
                                           {""codigo"":""52824"",""literal"":""Proceso completado correctamente""},
                                           {""codigo"":""52825"",""literal"":""Aceptar ""},
                                           {""codigo"":""52826"",""literal"":""El nombre es obligatorio""},
                                           {""codigo"":""52827"",""literal"":""El nombre no puede superar los 50 caracteres""},
                                           {""codigo"":""52828"",""literal"":""El crotal es obligatorio""},
                                           {""codigo"":""52829"",""literal"":""El crotal consta de 14 caracteres""},
                                           {""codigo"":""52830"",""literal"":""La raza es obligatoria""},
                                           {""codigo"":""52831"",""literal"":""La raza consta de hasta 3 caracteres""},
                                           {""codigo"":""52832"",""literal"":""El sexo es obligatorio""},
                                           {""codigo"":""52833"",""literal"":""El sexo consta de hasta 2 caracteres""},
                                           {""codigo"":""52834"",""literal"":""La aptitud es obligatoria""},
                                           {""codigo"":""52835"",""literal"":""La aptitud consta de hasta 2 caracteres""},
                                           {""codigo"":""52836"",""literal"":""El peso no es un número""},
                                           {""codigo"":""52837"",""literal"":""No se admiten '.'. use ',' en su lugar para especificar decimales""},
                                           {""codigo"":""52838"",""literal"":""La facilidad de parto es obligatoria""},
                                           {""codigo"":""52839"",""literal"":""La facilidad de parto consta de haswta dos caracteres""},
                                           {""codigo"":""52840"",""literal"":""El crotal madre es obligatorio""},
                                           {""codigo"":""52841"",""literal"":""El crotal madre consta de 14 caracteres""},
                                           {""codigo"":""52842"",""literal"":""El crotal madre et es obligatorio""},
                                           {""codigo"":""52843"",""literal"":""El crotal madre et consta de 14 caracteres""},
                                           {""codigo"":""52844"",""literal"":""El crotal padre es obligatorio""},
                                           {""codigo"":""52845"",""literal"":""El crotal padre consta de 14 caracteres""},
                                           {""codigo"":""52846"",""literal"":""La fecha de nacimiento es obligatoria""},
                                           {""codigo"":""52847"",""literal"":""la fecha de nacimiento tiene que ser válida y no superar la fecha de actual""},
                                           {""codigo"":""52848"",""literal"":""La fecha de implantación es obligatoria""},
                                           {""codigo"":""52849"",""literal"":""El número genealógico conta de hasta 12 caracteres""},
                                           {""codigo"":""52850"",""literal"":""El tipo de parto consta de hasta 2 caracteres""},
                                           {""codigo"":""52851"",""literal"":""El tipo de insiminación consta de hasta 2 caracteres""},
                                           {""codigo"":""52852"",""literal"":""La fecha de nacimiento no puede superar la fecha de implantación""}

                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "NOTIFICAR_MUERTE" Then
                    res = "{""lista"":  [  {""codigo"":""52901"",""literal"":""Notificación de muerte de animal""},
                                           {""codigo"":""52902"",""literal"":""A través del siguiente formulario Vd. podrá notificar las muertes de animales en su explotación""},
                                           {""codigo"":""52903"",""literal"":""Fecha de notificación""},
                                           {""codigo"":""52904"",""literal"":""Explotación""},
                                           {""codigo"":""52905"",""literal"":""Nº de crotal""},
                                           {""codigo"":""52906"",""literal"":""Nombre""},
                                           {""codigo"":""52907"",""literal"":""Fecha muerte""},
                                           {""codigo"":""52908"",""literal"":""Observaciones""},
                                           {""codigo"":""52909"",""literal"":""notificar muerte""},
                                           {""codigo"":""52910"",""literal"":""El crotal es obligatorio""},
                                           {""codigo"":""52911"",""literal"":""La longitud del crotal debe ser de 14 caracteres""},
                                           {""codigo"":""52912"",""literal"":""El nombre es obligatorio""},
                                           {""codigo"":""52913"",""literal"":""El nombre no puede superar los 50 caracteres""},
                                           {""codigo"":""52914"",""literal"":""La fecha debe ser válida y no superar a la de hoy""},
                                           {""codigo"":""52915"",""literal"":""Los comentarios no pueden superar los 150 caracteres""},
                                           {""codigo"":""52916"",""literal"":""Número de crotal""},
                                           {""codigo"":""52917"",""literal"":""Nombre""}
                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "LISTADO_MUERTES" Then
                    res = "{""lista"":  [  {""codigo"":""53001"",""literal"":""Listado de muertes""},
                                           {""codigo"":""53002"",""literal"":""Histórico de muertes en la explotación""},
                                           {""codigo"":""53003"",""literal"":""Observaciones""},
                                           {""codigo"":""53004"",""literal"":""Justificante Muerte""},
                                           {""codigo"":""53005"",""literal"":""Número de crotal""},
                                           {""codigo"":""53006"",""literal"":""Nombre""},
                                           {""codigo"":""53007"",""literal"":""Fec. Muerte""},
                                           {""codigo"":""53008"",""literal"":""Fec. Notificación""}
                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "LISTADO_DE_NACIMIENTOS" Then
                    res = "{""lista"":  [  {""codigo"":""53101"",""literal"":""Listado de nacimientos""},
                                           {""codigo"":""53102"",""literal"":""Histórico de nacimientos en la explotación""},
                                           {""codigo"":""53103"",""literal"":""Número de crotal""},
                                           {""codigo"":""53104"",""literal"":""Nombre""},
                                           {""codigo"":""53105"",""literal"":""Fec. Nacimiento""},
                                           {""codigo"":""53106"",""literal"":""Raza""},
                                           {""codigo"":""53107"",""literal"":""Sexo""},
                                           {""codigo"":""53108"",""literal"":""Pendiente""},
                                           {""codigo"":""53109"",""literal"":""Validado""},
                                           {""codigo"":""53110"",""literal"":""Anulado""},
                                           {""codigo"":""53111"",""literal"":""Error""},
                                           {""codigo"":""53112"",""literal"":""Peso nacimiento""},
                                           {""codigo"":""53113"",""literal"":""Aptitud""},
                                           {""codigo"":""53114"",""literal"":""Facilidad de parto""},
                                           {""codigo"":""53115"",""literal"":""Madre""},
                                           {""codigo"":""53116"",""literal"":""Madre E.T.""},
                                           {""codigo"":""53117"",""literal"":""Padre""},
                                           {""codigo"":""53118"",""literal"":""F. Implantación crotal""},
                                           {""codigo"":""53119"",""literal"":""F. Notif. Nacimiento""},
                                           {""codigo"":""53120"",""literal"":""Descripción de trámite""},
                                           {""codigo"":""53121"",""literal"":""Imprimir DIB""} 

                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "CONFIRMACION_DE_GUIAS" Then
                    res = "{""lista"":  [  {""codigo"":""53201"",""literal"":""Confirmación de guías de entrada""},
                                           {""codigo"":""53202"",""literal"":""Gestión de las guías de entrada a la explotación""},
                                           {""codigo"":""53203"",""literal"":""Volver""},
                                           {""codigo"":""53204"",""literal"":""Detalles de guía de entrada""},
                                           {""codigo"":""53205"",""literal"":""Fecha de entrada""},
                                           {""codigo"":""53206"",""literal"":""Nº de guía""},
                                           {""codigo"":""53207"",""literal"":""Explotación origen""},
                                           {""codigo"":""53208"",""literal"":""Crotales disponibles""},
                                           {""codigo"":""53209"",""literal"":""Lista de crotales""},
                                           {""codigo"":""53210"",""literal"":""Confirmar""},
                                           {""codigo"":""53211"",""literal"":""Rechazar""},
                                           {""codigo"":""53212"",""literal"":""Crotal""},
                                           {""codigo"":""53213"",""literal"":""Raza""},
                                           {""codigo"":""53214"",""literal"":""Sexo""},
                                           {""codigo"":""53215"",""literal"":""Fecha de nacimiento""},
                                           {""codigo"":""53216"",""literal"":""Debe seleccionar algún crotal""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CONFIRMA_GUIA_ENTRADA" Then
                    res = "{""lista"":  [  {""codigo"":""53301"",""literal"":""Confirmación de guías de entrada""},
                                           {""codigo"":""53302"",""literal"":""Gestión de las guías de entrada a la explotación""},
                                           {""codigo"":""53303"",""literal"":""Crotal""},
                                           {""codigo"":""53304"",""literal"":""Buscar""},
                                           {""codigo"":""53305"",""literal"":""Guía de entrada""},
                                           {""codigo"":""53306"",""literal"":""Proceso completado correctamente""},
                                           {""codigo"":""53307"",""literal"":""Aceptar ""},
                                           {""codigo"":""53308"",""literal"":""Fecha de entrada""},
                                           {""codigo"":""53309"",""literal"":""Número guía""},
                                           {""codigo"":""53310"",""literal"":""Explotación origen""},
                                           {""codigo"":""53311"",""literal"":""Crotales""},
                                           {""codigo"":""53312"",""literal"":""Estado""},
                                           {""codigo"":""53313"",""literal"":""ver""},
                                           {""codigo"":""53314"",""literal"":""Raza""},
                                           {""codigo"":""53315"",""literal"":""Sexo""},
                                           {""codigo"":""53316"",""literal"":""Fecha de nacimiento""}
                                ]
                    }"
                ElseIf inputJson.grupo = "NOTIFICACIONES" Then
                    res = "{""lista"":  [  {""codigo"":""53401"",""literal"":""Notificaciones""},
                                           {""codigo"":""53402"",""literal"":""Listado de notificaciones para la explotación""},
                                           {""codigo"":""53403"",""literal"":""Notificaciones sin leer""},
                                           {""codigo"":""53404"",""literal"":""Notificaciones en total""},
                                           {""codigo"":""53405"",""literal"":""Notificación""},
                                           {""codigo"":""53406"",""literal"":""Proceso completado correctamente""},
                                           {""codigo"":""53407"",""literal"":""Aceptar""},
                                           {""codigo"":""53408"",""literal"":""Tipo notificación""},
                                           {""codigo"":""53409"",""literal"":""Ver""},
                                           {""codigo"":""53410"",""literal"":""Borrar""},
                                           {""codigo"":""53411"",""literal"":""Visto""},
                                           {""codigo"":""53412"",""literal"":""Título""},
                                           {""codigo"":""53413"",""literal"":""Confirmación de eliminación de notificación""},
                                           {""codigo"":""53414"",""literal"":""¿Está seguro de eliminar esta notificación?""},
                                           {""codigo"":""53415"",""literal"":""Cancelar""},
                                           {""codigo"":""53416"",""literal"":""Aceptar""},
                                           {""codigo"":""53417"",""literal"":""Borrado de notificación""},
                                           {""codigo"":""53418"",""literal"":""Fecha""}
                                ]
                    }"
                ElseIf inputJson.grupo = "NOTIFICAR_PERDIDA_ASIGNADA" Then
                    res = "{""lista"":  [  {""codigo"":""53501"",""literal"":""Notificar pérdida""},
                                           {""codigo"":""53502"",""literal"":""Crotal asignado""},
                                           {""codigo"":""53503"",""literal"":""Número de crotal""},
                                           {""codigo"":""53504"",""literal"":""Fecha de  notificación""},
                                           {""codigo"":""53505"",""literal"":""Indique la fecha de pérdida (debe ser anterior a la fecha de comunicación de la misma)""},
                                           {""codigo"":""53506"",""literal"":""Observaciones relativas a la pérdida""},
                                           {""codigo"":""53507"",""literal"":""Volver""},
                                           {""codigo"":""53508"",""literal"":""Enviar notificación de pérdida""},
                                           {""codigo"":""53509"",""literal"":""Indique el motivo de la pérdida (opcional)""}
                                ]
                    }"
                ElseIf inputJson.grupo = "NOTIFICAR_PERDIDA_SIN_ASIGNAR" Then
                    res = "{""lista"":  [  {""codigo"":""53601"",""literal"":""Notificar pérdida""},
                                           {""codigo"":""53602"",""literal"":""Crotal sin asignar""},
                                           {""codigo"":""53603"",""literal"":""Número de crotal""},
                                           {""codigo"":""53604"",""literal"":""Fecha de  notificación""},
                                           {""codigo"":""53605"",""literal"":""Indique el motivo de la notificación de pérdida""},
                                           {""codigo"":""53606"",""literal"":""El crotal se ha perdido""},
                                           {""codigo"":""53607"",""literal"":""El crotal se ha deteriorado""},
                                           {""codigo"":""53608"",""literal"":""Observaciones relativas a la pérdida""},
                                           {""codigo"":""53609"",""literal"":""Volver""},
                                           {""codigo"":""53610"",""literal"":""Enviar notificación de pérdida""},
                                           {""codigo"":""53611"",""literal"":""Indique el motivo de la pérdida (opcional)""}

                                ]
                    }"
                ElseIf inputJson.grupo = "LOGIN" Then
                    res = "{""lista"":  [  {""codigo"":""53701"",""literal"":""Acceso a la aplicación""},
                                            {""codigo"":""53702"",""literal"":""Usuario""},
                                            {""codigo"":""53703"",""literal"":""Contraseña""},
                                            {""codigo"":""53704"",""literal"":""Enviar""},
                                            {""codigo"":""53705"",""literal"":""Se ha producido un error al recuperar la información del servidor, inténtelo de nuevo más tarde. En caso de persistir el error póngase en contacto con el Administrador.""}
                                ]
                    }"
                ElseIf inputJson.grupo = "RELACION_DE_SERIES" Then
                    res = "{""lista"":  [  
                                            {""codigo"":""53795"",""literal"":""Relacion de las asignaciones de las series de crotales  ""},
                                            {""codigo"":""53796"",""literal"":""Marca Electronica""},
                                            {""codigo"":""53797"",""literal"":""Oca""},
                                            {""codigo"":""53798"",""literal"":""Relacion de asignacion de series""}
                                ]
                    }"

                End If
            Else
                If inputJson.grupo = "GEN" Then
                    res = "{""lista"":  [   {""codigo"":""50001"",""literal"":""Hasiera""},
                                        {""codigo"":""50002"",""literal"":""Gida erregistratu""},
                                        {""codigo"":""50003"",""literal"":""Datuak kontsultatu""},
                                        {""codigo"":""50004"",""literal"":""Ustiapen datuak""},
                                        {""codigo"":""50005"",""literal"":""Tramite historiala""},
                                        {""codigo"":""50006"",""literal"":""Konfigurazioa""},
                                        {""codigo"":""50007"",""literal"":""Laguntza eta kontaktua""},
                                        {""codigo"":""50008"",""literal"":""Oraingo errolda""},
                                        {""codigo"":""50009"",""literal"":""Egindako gidak""},
                                        {""codigo"":""50010"",""literal"":""Data bateko erroldak""},
                                        {""codigo"":""50011"",""literal"":""Erregistro liburua""},
                                        {""codigo"":""50012"",""literal"":""Datuak""},
                                        {""codigo"":""50013"",""literal"":""Jabeak""},
                                        {""codigo"":""50014"",""literal"":""Elkarteak""},
                                        {""codigo"":""50015"",""literal"":""Kalifikazioa""},
                                        {""codigo"":""50016"",""literal"":""Lan ustiapen aldaketa""},
                                        {""codigo"":""50017"",""literal"":""Area pribatua""},
                                        {""codigo"":""50018"",""literal"":""Ustiapena""},
                                        {""codigo"":""50019"",""literal"":""Ustiapen aldaketa""},
                                        {""codigo"":""50020"",""literal"":""Sesioa amaitu""},
                                        {""codigo"":""50021"",""literal"":""Gipuzkoako Foru Aldundia""},
                                        {""codigo"":""50022"",""literal"":""Lege oharra""},
                                        {""codigo"":""50023"",""literal"":""Pribatutasun politika""},
                                        {""codigo"":""50024"",""literal"":""Sitemap""},
                                        {""codigo"":""50025"",""literal"":""Erabilerraztasuna""},
                                        {""codigo"":""50026"",""literal"":""BEHI KUDEAKETA""},
                                        {""codigo"":""50027"",""literal"":""eta Nekagip hasiera itzuli""},
                                        {""codigo"":""50028"",""literal"":""Mesedez gaitu pop-ups zure nabigatzailean.""},
                                        {""codigo"":""50029"",""literal"":""Belarritako erabilgarriak""},
                                        {""codigo"":""50030"",""literal"":""Belarritakoen eskaera""},
                                        {""codigo"":""50031"",""literal"":""Eskaeren harremanak""},
                                        {""codigo"":""50032"",""literal"":""Jaiotze jakinarazpena""},
                                        {""codigo"":""50033"",""literal"":""Heriotz jakinarazpena""},
                                        {""codigo"":""50034"",""literal"":""Jaiotze zerrenda""},
                                        {""codigo"":""50035"",""literal"":""Heriotz zerrenda""},
                                        {""codigo"":""50036"",""literal"":""Belarritakoen kudeaketa""},
                                        {""codigo"":""50037"",""literal"":""Animalien altak/bajak""},
                                        {""codigo"":""50038"",""literal"":""Daten arteko altak""},
                                        {""codigo"":""50039"",""literal"":""Daten arteko heriotzak""},
                                        {""codigo"":""50040"",""literal"":""Altak erosketagatik""},
                                        {""codigo"":""50041"",""literal"":""Berretsi sarrera gida""},
                                        {""codigo"":""53786"",""literal"":""Búsqueda de crotal_eu""},
                                        {""codigo"":""53799"",""literal"":""Relación de series_eu""}
                                    ]
                        }"
                ElseIf inputJson.grupo = "INDEX" Then
                    res = "{""lista"":  [  {""codigo"":""50101"",""literal"":""Lan ustiapena aukeratu""},
                                            {""codigo"":""50102"",""literal"":""Ustiapena""},
                                            {""codigo"":""50103"",""literal"":""Izendapena""},
                                            {""codigo"":""50104"",""literal"":""Aukeratu""},
                                            {""codigo"":""50105"",""literal"":""Ustiapena kudeatzeko aukeratu""},
                                            {""codigo"":""50106"",""literal"":""Jakinarazpenak""},
                                            {""codigo"":""50107"",""literal"":""Jakinarazpen berriak""}
                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "INICIO" Then
                    res = "{""lista"":  [ {""codigo"":""50201"",""literal"":""Ongi etorri""},
                                        {""codigo"":""50202"",""literal"":""Ustiapenaren""},
                                        {""codigo"":""50203"",""literal"":""Azken sarbidea""},
                                        {""codigo"":""50204"",""literal"":""Ustiapen datuak""},
                                        {""codigo"":""50205"",""literal"":""Jabea""},
                                        {""codigo"":""50206"",""literal"":""Ustiapenaren azkenego tramiteak""},
                                        {""codigo"":""50207"",""literal"":""Eskaera data""},
                                        {""codigo"":""50208"",""literal"":""Tramitearen deskripzioa""},
                                        {""codigo"":""50209"",""literal"":""Tramitearen kodea""},
                                        {""codigo"":""50210"",""literal"":""JAKINARAZPENAK""},
                                        {""codigo"":""50211"",""literal"":""Jakinarazpen berriak""},
                                        {""codigo"":""50212"",""literal"":""guztira""},
                                        {""codigo"":""50213"",""literal"":""Jakinarazpenak ikusi""},
                                        {""codigo"":""50214"",""literal"":""Autokrotalazio baimena eskatzeko, kilkatu hemen""},
                                        {""codigo"":""50215"",""literal"":""Autokrotalaziorako baimen-eskaera""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ALTA1" Then
                    res = "{""lista"":  [  {""codigo"":""50301"",""literal"":""Gida erregistratu""},
                                            {""codigo"":""50302"",""literal"":""Gida eskaera egiteko bete hurrengo pausuak.""},
                                            {""codigo"":""50303"",""literal"":""Pausua""},
                                            {""codigo"":""50304"",""literal"":""Gidaren datuak""},
                                            {""codigo"":""50305"",""literal"":""Belarritakoak aukeratu""},
                                            {""codigo"":""50306"",""literal"":""Laburpena eta amaiera""},
                                            {""codigo"":""50307"",""literal"":""Helmuga ustiapena""},
                                            {""codigo"":""50308"",""literal"":""Bilatu""},
                                            {""codigo"":""50309"",""literal"":""Izena""},
                                            {""codigo"":""50310"",""literal"":""Herria""},
                                            {""codigo"":""50311"",""literal"":""Probintzia""},
                                            {""codigo"":""50312"",""literal"":""Aukeratu gabe""},
                                            {""codigo"":""50313"",""literal"":""Irteera data""},
                                            {""codigo"":""50314"",""literal"":""Helmuga data""},
                                            {""codigo"":""50315"",""literal"":""Garraiolari datuak""},
                                            {""codigo"":""50316"",""literal"":""Garraiolariaren NANa""},
                                            {""codigo"":""50317"",""literal"":""Ibilgailuaren matrikula""},
                                            {""codigo"":""50318"",""literal"":""ATES""},
                                            {""codigo"":""50319"",""literal"":""Hiltegia""},
                                            {""codigo"":""50320"",""literal"":""Kodea""},
                                            {""codigo"":""50321"",""literal"":""Aukeratu""},
                                            {""codigo"":""50322"",""literal"":""Matrikula""},
                                            {""codigo"":""50323"",""literal"":""Hurrengo pausua""},
                                            {""codigo"":""50324"",""literal"":""Irteera data derrigorrezkoa da.""},
                                            {""codigo"":""50325"",""literal"":""Helmuga data derrigorrezkoa da.""},
                                            {""codigo"":""50326"",""literal"":""Garraiolariaren NANa derrigorrezkoa da.""},
                                            {""codigo"":""50327"",""literal"":""NANa ez da baliozkoa.""},
                                            {""codigo"":""50328"",""literal"":""Garraiolariaren izena derrigorrezkoa da.""},
                                            {""codigo"":""50329"",""literal"":""Ibilgailuaren matrikula derrigorrezkoa da.""},
                                            {""codigo"":""50330"",""literal"":""Matrikula ez da baliozkoa.""},
                                            {""codigo"":""50331"",""literal"":""ATESa derrigorrezkoa da""},
                                            {""codigo"":""50332"",""literal"":""Helmuga ustiapena ez da baliozkoa.""},
                                            {""codigo"":""50333"",""literal"":""Helmuga ustiapena 14 karaktere izan behar ditu.""},
                                            {""codigo"":""50334"",""literal"":""Irteera data, gehienez gaurko data baino 5 egun lehenago izan daiteke""},
                                            {""codigo"":""50335"",""literal"":""Helmuga data, gehienez gaurko data baino 5 egun beranduago izan daiteke""},
                                            {""codigo"":""50336"",""literal"":""Helmuga data, irteera dataren berdina edo beranduago izan behar du.""},
                                            {""codigo"":""50337"",""literal"":""Garraiolariaren ATESa 15 karaktere izan behar ditu.""},
                                            {""codigo"":""50338"",""literal"":""Garbitu""},
                                            {""codigo"":""53871"",""literal"":""Irteera-ordua""},
                                            {""codigo"":""53872"",""literal"":""Iristeko ordua""},
                                            {""codigo"":""53873"",""literal"":""formatu okerra""},
                                            {""codigo"":""53874"",""literal"":""Irteera-orduak iritsitakoa baino txikiagoa izan behar du, egun bera delako""}
                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "ALTA2" Then
                    res = "{""lista"":  [  {""codigo"":""50401"",""literal"":""Gida erregistratu""},
                                            {""codigo"":""50402"",""literal"":""Gida eskaera egiteko bete hurrengo pausuak.""},
                                            {""codigo"":""50403"",""literal"":""Pausua""},
                                            {""codigo"":""50404"",""literal"":""Gidaren datuak""},
                                            {""codigo"":""50405"",""literal"":""Belarritakoak aukeratu""},
                                            {""codigo"":""50406"",""literal"":""Laburpena eta amaiera""},
                                            {""codigo"":""50407"",""literal"":""Belarritakoa""},
                                            {""codigo"":""50408"",""literal"":""Sexu""},
                                            {""codigo"":""50409"",""literal"":""Jaiotze d.""},
                                            {""codigo"":""50410"",""literal"":""Arraza""},
                                            {""codigo"":""50411"",""literal"":""Aukeratu""},
                                            {""codigo"":""50412"",""literal"":""Aukeratuta""},
                                            {""codigo"":""50413"",""literal"":""Ezin da aukeratu""},
                                            {""codigo"":""50414"",""literal"":""Hurrengo pausua""},
                                            {""codigo"":""50415"",""literal"":""Aurreko pausua""},
                                            {""codigo"":""50416"",""literal"":""Ezeztatu""},
                                            {""codigo"":""50417"",""literal"":""Izena""},
                                            {""codigo"":""50418"",""literal"":""Belarritako bat aukeratu behar duzu""},
                                            {""codigo"":""50419"",""literal"":""ONARTU""},
                                            {""codigo"":""50420"",""literal"":""Data""},
                                            {""codigo"":""50421"",""literal"":""Albaitaria""},
                                            {""codigo"":""50422"",""literal"":""Taldea""},
                                            {""codigo"":""50423"",""literal"":""Mota""},
                                            {""codigo"":""50424"",""literal"":""Tuberkulosia""},
                                            {""codigo"":""50425"",""literal"":""Maltar sukar""},
                                            {""codigo"":""50426"",""literal"":""Perineumonia""},
                                            {""codigo"":""50427"",""literal"":""Leukosia""},
                                            {""codigo"":""50428"",""literal"":""Behien infekziozko errinotrakeitisa""},
                                            {""codigo"":""50429"",""literal"":""Lazul""},
                                            {""codigo"":""50430"",""literal"":""Paratuberkulosia""},
                                            {""codigo"":""50431"",""literal"":""Antigorputzak""},
                                            {""codigo"":""50432"",""literal"":""Antigenoak""},
                                            {""codigo"":""50433"",""literal"":""Neoesporak""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ALTA3" Then
                    res = "{""lista"":  [  {""codigo"":""50501"",""literal"":""Gida erregistratu""},
                                            {""codigo"":""50502"",""literal"":""Gida eskaera egiteko bete hurrengo pausuak.""},
                                            {""codigo"":""50503"",""literal"":""Pausua""},
                                            {""codigo"":""50504"",""literal"":""Gidaren datuak""},
                                            {""codigo"":""50505"",""literal"":""Belarritakoak aukeratu""},
                                            {""codigo"":""50506"",""literal"":""Laburpena eta amaiera""},
                                            {""codigo"":""50507"",""literal"":""Gida eskaeraren laburpena""},
                                            {""codigo"":""50508"",""literal"":""Helmuga ustiapena""},
                                            {""codigo"":""50509"",""literal"":""Izena""},
                                            {""codigo"":""50510"",""literal"":""Herria""},
                                            {""codigo"":""50511"",""literal"":""Probintzia""},
                                            {""codigo"":""50512"",""literal"":""Irteera data""},
                                            {""codigo"":""50513"",""literal"":""Helmuga data""},
                                            {""codigo"":""50514"",""literal"":""Garraiolaria""},
                                            {""codigo"":""50515"",""literal"":""Matrikula""},
                                            {""codigo"":""50516"",""literal"":""Garraiolariaren NANa""},
                                            {""codigo"":""50517"",""literal"":""ATES""},
                                            {""codigo"":""50518"",""literal"":""Belarritakoak""},
                                            {""codigo"":""50519"",""literal"":""Amaitu""},
                                            {""codigo"":""50520"",""literal"":""Aurreko pausua""},
                                            {""codigo"":""50521"",""literal"":""Ezeztatu""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ALTA_FIN" Then
                    res = "{""lista"":  [  {""codigo"":""50601"",""literal"":""Gida erregistratu""},
                                            {""codigo"":""50602"",""literal"":""Gida eskaera egiteko bete hurrengo pausuak.""},
                                            {""codigo"":""50603"",""literal"":""Pausua""},
                                            {""codigo"":""50604"",""literal"":""Gidaren datuak""},
                                            {""codigo"":""50605"",""literal"":""Belarritakoak aukeratu""},
                                            {""codigo"":""50606"",""literal"":""Laburpena eta amaiera""},
                                            {""codigo"":""50607"",""literal"":""Amaituta!""},
                                            {""codigo"":""50609"",""literal"":""Gida ongi prozesatua izan da. PDF formatuan deskargatu daiteke eta ondorengo botoiekin imprimatu""},
                                            {""codigo"":""50610"",""literal"":""Gida deskargatu""},
                                            {""codigo"":""50611"",""literal"":""Hiltegi gehigarria deskargatu""},
                                            {""codigo"":""50612"",""literal"":""Prozesua amaitu gabe""},
                                            {""codigo"":""50613"",""literal"":""Hasierara joan""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CENSO" Then
                    res = "{""lista"":  [  {""codigo"":""50701"",""literal"":""Oraingo errolda""},
                                            {""codigo"":""50702"",""literal"":""Animalien oraingo errolda ikusteko klikatu hurrengo botoia""},
                                            {""codigo"":""50703"",""literal"":""PDF""},
                                            {""codigo"":""50704"",""literal"":""EXCEL""},
                                            {""codigo"":""50705"",""literal"":""Ustiapenaren orango errola deskargatu""},
                                            {""codigo"":""50706"",""literal"":""Belarritakoa""},
                                            {""codigo"":""50707"",""literal"":""Sexu""},
                                            {""codigo"":""50708"",""literal"":""Jaiotze d.""},
                                            {""codigo"":""50709"",""literal"":""Arraza""},
                                            {""codigo"":""50710"",""literal"":""Aukeratu""},
                                            {""codigo"":""50711"",""literal"":""Aukeratuta""},
                                            {""codigo"":""50712"",""literal"":""Ezin da aukeratu""},
                                            {""codigo"":""50713"",""literal"":""Izena""},
                                            {""codigo"":""50714"",""literal"":""Data""},
                                            {""codigo"":""50715"",""literal"":""Albaitaria""},
                                            {""codigo"":""50716"",""literal"":""Taldea""},
                                            {""codigo"":""50717"",""literal"":""Mota""},
                                            {""codigo"":""50718"",""literal"":""Tuberkulosia""},
                                            {""codigo"":""50719"",""literal"":""Maltar sukar""},
                                            {""codigo"":""50720"",""literal"":""Perineumonia""},
                                            {""codigo"":""50721"",""literal"":""Leukosia""},
                                            {""codigo"":""50722"",""literal"":""behien infekziozko errinotrakeitisa""},
                                            {""codigo"":""50723"",""literal"":""Lazul""},
                                            {""codigo"":""50724"",""literal"":""Paratuberkulosia""},
                                            {""codigo"":""50725"",""literal"":""Antigorputzak""},
                                            {""codigo"":""50726"",""literal"":""Antigenoak""},
                                            {""codigo"":""50727"",""literal"":""Neoesporak""},
                                            {""codigo"":""53720"",""literal"":""<6 H""},
                                            {""codigo"":""53721"",""literal"":""6-12 H""},
                                            {""codigo"":""53722"",""literal"":""12-24 H""},
                                            {""codigo"":""53723"",""literal"":"">= 2 U""},
                                            {""codigo"":""53724"",""literal"":""Guztira""},
                                            {""codigo"":""53725"",""literal"":""Emea""},
                                            {""codigo"":""53726"",""literal"":""Arra""},
                                            {""codigo"":""53727"",""literal"":""Laburpena""},
                                            {""codigo"":""53728"",""literal"":""Animalien guztira""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CONSULTA" Then
                    res = "{""lista"":  [  {""codigo"":""50801"",""literal"":""Giden kontsulta""},
                                            {""codigo"":""50802"",""literal"":""Gida zenbakia""},
                                            {""codigo"":""50803"",""literal"":""Helmuga ustiapena""},
                                            {""codigo"":""50804"",""literal"":""Irteera data""},
                                            {""codigo"":""50805"",""literal"":""Helmuga data""},
                                            {""codigo"":""50806"",""literal"":""Prozesatzen""},
                                            {""codigo"":""50807"",""literal"":""Gida baliogabetzeko baieztapena""},
                                            {""codigo"":""50808"",""literal"":""¿Ziur zaude gida baliogabetu nahi duzula?""},
                                            {""codigo"":""50809"",""literal"":""Onartu""},
                                            {""codigo"":""50810"",""literal"":""Ezeztatu""},
                                            {""codigo"":""50811"",""literal"":""Belarritakoa""},
                                            {""codigo"":""50812"",""literal"":""Bilatu""},
                                            {""codigo"":""50813"",""literal"":""Ustiapena""},
                                            {""codigo"":""50814"",""literal"":""Ustiapenaren egindako gidak kontsultatu""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CENSO_FECHA" Then
                    res = "{""lista"":  [  {""codigo"":""50901"",""literal"":""Data baketo errolda""},
                                            {""codigo"":""50902"",""literal"":""Animalien data bateko errolda ikusteko aukeratu data""},
                                            {""codigo"":""50903"",""literal"":""Data""},
                                            {""codigo"":""50904"",""literal"":""PDF""},
                                            {""codigo"":""50905"",""literal"":""EXCEL""},
                                            {""codigo"":""50906"",""literal"":""Ustiapenaren data bateko errolda kontsultatu""}
                                ]
                    }"
                ElseIf inputJson.grupo = "REGISTRO" Then
                    res = "{""lista"":  [  {""codigo"":""51001"",""literal"":""Erregistro liburua""},
                                            {""codigo"":""51002"",""literal"":""Kanpaina""},
                                            {""codigo"":""51003"",""literal"":""Dokumentazioa""},
                                            {""codigo"":""51004"",""literal"":""Ustiapenaren tramite erregistro liburua""}
                                ]
                    }"
                ElseIf inputJson.grupo = "EXPLOTACION" Then
                    res = "{""lista"":  [  {""codigo"":""51101"",""literal"":""Ustiapen datuak""},
                                            {""codigo"":""51102"",""literal"":""Izena""},
                                            {""codigo"":""51103"",""literal"":""Helbidea""},
                                            {""codigo"":""51104"",""literal"":""Herria""},
                                            {""codigo"":""51105"",""literal"":""Probintzia""},
                                            {""codigo"":""51106"",""literal"":""Egoera data""},
                                            {""codigo"":""51107"",""literal"":""Ekoizpen-sistema""},
                                            {""codigo"":""51108"",""literal"":""Ekoizpen-ahalmena""},
                                            {""codigo"":""51109"",""literal"":""Iraunkortasun""},
                                            {""codigo"":""51110"",""literal"":""Autokontsumo""},
                                            {""codigo"":""51111"",""literal"":""Inter. Intrakomunitarioa""},
                                            {""codigo"":""51112"",""literal"":""Transhumantea""},
                                            {""codigo"":""51113"",""literal"":""Oharrak""},
                                            {""codigo"":""51114"",""literal"":""Klasifikazio zooteknikoa""},
                                            {""codigo"":""51115"",""literal"":""Ustiapenaren informazioa""}
                                ]
                    }"
                ElseIf inputJson.grupo = "TITULARES" Then
                    res = "{""lista"":  [  {""codigo"":""51121"",""literal"":""Jabeak""},
                                            {""codigo"":""51122"",""literal"":""CIF/NAN""},
                                            {""codigo"":""51123"",""literal"":""Izena""},
                                            {""codigo"":""51124"",""literal"":""Erlazioa""},
                                            {""codigo"":""51125"",""literal"":""Ustiapenaren jabeen zerrenda""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ASOCIACIONES" Then
                    res = "{""lista"":  [  {""codigo"":""51131"",""literal"":""Elkarteak""},
                                            {""codigo"":""51132"",""literal"":""Alta data""},
                                            {""codigo"":""51133"",""literal"":""Ustiapenaren elkarte zerrenda""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CALIFICACION" Then
                    res = "{""lista"":  [  {""codigo"":""51141"",""literal"":""Mota""},
                                            {""codigo"":""51142"",""literal"":""Kalifikazioa""},
                                            {""codigo"":""51143"",""literal"":""Data""},
                                            {""codigo"":""51144"",""literal"":""Ustiapenaren osasun kalifikazioak""}
                                ]
                    }"
                ElseIf inputJson.grupo = "TRAMITES" Then
                    res = "{""lista"":  [  {""codigo"":""51151"",""literal"":""Tramiteen historiala""},
                                            {""codigo"":""51152"",""literal"":""Eskaera-data""},
                                            {""codigo"":""51153"",""literal"":""Tramiteen deskripzioa""},
                                            {""codigo"":""51154"",""literal"":""Ustiategiko tramiteen historiala duen zerrenda""},

                                            {""codigo"":""51155"",""literal"":""TRAMITEEN BILAKETARAKO IRAGAZKIA""},
                                            {""codigo"":""51156"",""literal"":""Tramite-mota""},
                                            {""codigo"":""51157"",""literal"":""Data noiztik""},
                                            {""codigo"":""51158"",""literal"":""Data noiz arte""},
                                            {""codigo"":""51159"",""literal"":""Iragazkiak garbitu""},
                                            {""codigo"":""51160"",""literal"":""Emaitzak iragazi""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CAMBIO" Then
                    res = "{""lista"":  [  {""codigo"":""51161"",""literal"":""Lan ustiapen aldaketa""},
                                            {""codigo"":""51162"",""literal"":""Oraingo lan ustiapena""},
                                            {""codigo"":""51163"",""literal"":""Ustiapena""},
                                            {""codigo"":""51164"",""literal"":""Izendapena""},
                                            {""codigo"":""51165"",""literal"":""Aukeratu""},
                                            {""codigo"":""51166"",""literal"":""Aukeratuta""},
                                            {""codigo"":""51167"",""literal"":""Jakinarazpen berriak""},
                                            {""codigo"":""51168"",""literal"":""Jakinarazpenak""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ERROR" Then
                    res = "{""lista"":  [  {""codigo"":""51171"",""literal"":""Errorea""},
                                            {""codigo"":""51172"",""literal"":""Informazioan jasotzean errore bat gertatu da, beranduago saiatu. Errorea ez bada desagertzen kontaktatu administratzailearekin.""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CONTACTO" Then
                    res = "{""lista"":  [  {""codigo"":""51181"",""literal"":""Laguntza eta kontaktua""},
                                            {""codigo"":""51182"",""literal"":""Email-a""},
                                            {""codigo"":""51183"",""literal"":""Telefono-zenbakia""},
                                            {""codigo"":""51184"",""literal"":""Deskargatu Nekagip eskuliburua""},
                                            {""codigo"":""51185"",""literal"":""Erabiltzaileen lagunta eta kontaktu gunea""}
                                ]
                    }"
                ElseIf inputJson.grupo = "SOLICITUD_CROTALES" Then
                    res = "{""lista"":  [   {""codigo"":""52001"",""literal"":""Belarritakoen eskaera""},
                                            {""codigo"":""52002"",""literal"":""Autokrotalaziorako belarritakoen Eskaeraren formularioa""},
                                            {""codigo"":""52003"",""literal"":""Autokrotalazio-baimena""},
                                            {""codigo"":""52004"",""literal"":""Baimenduta""},
                                            {""codigo"":""52005"",""literal"":""Eskatutako belarritakoen kopurua ezin da inoiz izan bere ustiategiko emeen kopurua baino handiagoa.""},
                                            {""codigo"":""52006"",""literal"":""Eskatutako belarritakoen kantitateak beti 10aren anizkoitza izan behar du.""},
                                            {""codigo"":""52007"",""literal"":""Eskaera-data""},
                                            {""codigo"":""52008"",""literal"":""Eskatuko diren belarritako-kopurua""},
                                            {""codigo"":""52009"",""literal"":""Kurrikak barnean sartu""},
                                            {""codigo"":""52010"",""literal"":""Belarritakoak eskatu""},
                                            {""codigo"":""52011"",""literal"":""Eskatu behar den belarritako-kopurua derrigorra da""},
                                            {""codigo"":""52012"",""literal"":""Eskatu behar den belarritako-kopuruak 10aren anizkoitza izan behar du.""},
                                            {""codigo"":""52013"",""literal"":""Eskatutako belarritakoen kopurua ezin da izan bere ustiategiko emeen kopurua baino handiagoa.""},
                                            {""codigo"":""52014"",""literal"":""10aren anizkoitz bat sartu ""},
                                            {""codigo"":""52015"",""literal"":""Mesedez, 10aren anizkoitz bat sartu 100 edo 100 baino txikiagoa dena""},
                                            {""codigo"":""52016"",""literal"":""Krotal kopurua 0 izanez gero, kurrikak eskatzen direla adierazi behar da""}
                                ]
                    }"
                ElseIf inputJson.grupo = "RELACION_DE_SOLICITUDES" Then
                    res = "{""lista"":  [   {""codigo"":""52101"",""literal"":""Belarritakoen eskaeren erlazioa""},
                                            {""codigo"":""52102"",""literal"":""Ustiategirako belarritakoen eskaeren zerrenda""},
                                            {""codigo"":""52103"",""literal"":""Eskaera-data""},
                                            {""codigo"":""52104"",""literal"":""Eskaera kop.""},
                                            {""codigo"":""52105"",""literal"":""Kurrikak""},
                                            {""codigo"":""52106"",""literal"":""Egoera""},
                                            {""codigo"":""52107"",""literal"":""Eskaera""},
                                            {""codigo"":""52108"",""literal"":""Eskaera""},
                                            {""codigo"":""52109"",""literal"":""Entregatuta""},
                                            {""codigo"":""52110"",""literal"":""Bai""},
                                            {""codigo"":""52111"",""literal"":""Ez""},
                                            {""codigo"":""52112"",""literal"":""Tramitazio-data""},
                                            {""codigo"":""52113"",""literal"":""Entregatze-data""},
                                            {""codigo"":""52114"",""literal"":""Emate-agiria""},
                                            {""codigo"":""52115"",""literal"":""Bidalitako belarritakoak""}


                                ]
                    }"
                ElseIf inputJson.grupo = "SOLICITUD_PERMISO" Then
                    res = "{""lista"":  [   {""codigo"":""52201"",""literal"":""Belarritakoen eskaera""},
                                            {""codigo"":""52202"",""literal"":""Autokrotalaziorako belarritakoen eskaera-formularioa""},
                                            {""codigo"":""52203"",""literal"":""Autokrotalaziorako baimen-eskaera""},
                                            {""codigo"":""52204"",""literal"":""Baimena eskatu""},
                                            {""codigo"":""52205"",""literal"":""Belarritakoa jarri eta zure ustiategian jaiotako animalien berri emateko, autokrolazio-baimena izan behar duzu.""},
                                            {""codigo"":""52206"",""literal"":""Baimen honek belarritakoak eskatzeko eta autokrolatzeko aukera emango dizu. Eskaera-prozesuan zehar egiaztatuko da ustiategiak ezarritako baldintzak ganadutegiak autokrolaziorako betetzen dituen""},
                                            {""codigo"":""52207"",""literal"":""Eskabidea onartzeko edo ukatzeko denbora 24/48 ordukoa izango da, hori berori bidali den momentutik.""}
                                ]
                    }"
                ElseIf inputJson.grupo = "SOLICITUD_PERMISO_EN_TRAMITE" Then
                    res = "{""lista"":  [   {""codigo"":""52301"",""literal"":""Belarritakoen eskaera""},
                                            {""codigo"":""52302"",""literal"":""Autokrotalaziorako belarritakoen eskaera-formularioa""},
                                            {""codigo"":""52303"",""literal"":""Autokrotalazio-baimen eskaera""},
                                            {""codigo"":""52304"",""literal"":""Eskaera-data""},
                                            {""codigo"":""52305"",""literal"":""Eskaeraren egoera""},
                                            {""codigo"":""52306"",""literal"":""Tramitean""},
                                            {""codigo"":""52307"",""literal"":""Belarritakoa jarri eta zure ustiategian jaiotako animalien berri emateko, autokrolazio-baimena izan behar duzu.""},
                                            {""codigo"":""52308"",""literal"":""Baimen honek belarritakoak eskatzeko eta autokrolatzeko aukera emango dizu. Eskaera-prozesuan zehar egiaztatuko da ustiategiak ezarritako baldintzak ganadutegiak autokrolaziorako  betetzen dituen.""},
                                            {""codigo"":""52309"",""literal"":""Eskabidea onartzeko edo ukatzeko denbora 24/48 ordukoa izango da, hori berori bidali den momentutik.""}

                                ]
                    }"
                ElseIf inputJson.grupo = "SOLICITUD_PERMISO_DENEGADA" Then
                    res = "{""lista"":  [   {""codigo"":""52401"",""literal"":""Belarritakoen eskaera""},
                                            {""codigo"":""52402"",""literal"":""Autokrotalaziorako belarritakoen eskabide-formularioa""},
                                            {""codigo"":""52403"",""literal"":""Autokrotalazio-baimen eskaera""},
                                            {""codigo"":""52404"",""literal"":""Autokrotalazio-baimenaren eskabidea ustiategi honetarako ukatu da""},
                                            {""codigo"":""52405"",""literal"":""Eskaera-data""},
                                            {""codigo"":""52406"",""literal"":""Eskaeraren egoera""},
                                            {""codigo"":""52407"",""literal"":""Telefono-zenbaki honen bidez, harremanetan jar zaitezke""},
                                            {""codigo"":""52408"",""literal"":""Ukatuta""},
                                            {""codigo"":""52409"",""literal"":""Zure eskabidea kudeatzeko""},
                                            {""codigo"":""52410"",""literal"":""Belarritakoa jarri eta zure ustiategian jaiotako animalien berri emateko, autokrolazio-baimena izan behar duzu.""},
                                            {""codigo"":""52411"",""literal"":""Baimen honek belarritakoak eskatzeko eta autokrolatzeko aukera emango dizu. Eskaera-prozesuan zehar egiaztatuko da ustiategiak ezarritako baldintzak ganadutegiak autokrolaziorako  betetzen dituen.""},
                                            {""codigo"":""52412"",""literal"":""Eskabidea onartzeko edo ukatzeko denbora 24/48 ordukoa izango da, hori berori bidali den momentutik.""}
                                ]
                    }"
                ElseIf inputJson.grupo = "ALTAS_ENTRE_FECHAS" Then
                    res = "{""lista"":  [  {""codigo"":""52501"",""literal"":""Altak daten artean""},
                                           {""codigo"":""52502"",""literal"":""Daten arteko altak kontsultatu PDF edo Excel formatuan""},
                                           {""codigo"":""52503"",""literal"":""Baja-mota eta kontsultarako datak hautatu""},
                                           {""codigo"":""52504"",""literal"":""Animaliaren jaiotza""},
                                           {""codigo"":""52505"",""literal"":""Erosketa / Sarrera-gida""},
                                           {""codigo"":""52506"",""literal"":""Data noiztik""},
                                           {""codigo"":""52507"",""literal"":""Data noiz arte""},
                                           {""codigo"":""52508"",""literal"":""Noiz arte datak, noiztik data baino lehenagokoa edo berdina izan behar du""}
                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "BAJAS_ENTRE_FECHAS" Then
                    res = "{""lista"":  [  {""codigo"":""52601"",""literal"":""Daten arteko bajak""},
                                           {""codigo"":""52602"",""literal"":""Daten arteko bajak PDF edo Excel formatuan kontsultatu""},
                                           {""codigo"":""52603"",""literal"":""Baja-mota eta kontsultarako datak hautatu""},
                                           {""codigo"":""52604"",""literal"":""Bizitzarako gidak""},
                                           {""codigo"":""52605"",""literal"":""Animaliaren heriotza""},
                                           {""codigo"":""52606"",""literal"":""Hiltegirako gidak""},
                                           {""codigo"":""52607"",""literal"":""Data noiztik""},
                                           {""codigo"":""52608"",""literal"":""Data noiz arte""},
                                           {""codigo"":""52609"",""literal"":""Noiz arte datak noiztik dataren berdina edo lehenagokoa izan behar du""}

                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "CROTALES_DISPONIBLES" Then
                    res = "{""lista"":  [  {""codigo"":""52701"",""literal"":""Belarritako eskuragarriak""},
                                           {""codigo"":""52702"",""literal"":""Frogagiria inprimatu""},
                                           {""codigo"":""52703"",""literal"":""Prozesua behar bezala bete da""},
                                           {""codigo"":""52704"",""literal"":""Onartu""},
                                           {""codigo"":""52705"",""literal"":""Krotal""},
                                           {""codigo"":""52706"",""literal"":""Belarritakoaren egoera""},
                                           {""codigo"":""52707"",""literal"":""Galtzeak""},
                                           {""codigo"":""52708"",""literal"":""Galtzea jakinarazi""},
                                           {""codigo"":""52709"",""literal"":""Galdutako belarritakoa / zk. ezgaitua""},
                                           {""codigo"":""52710"",""literal"":""Komunikazio-data""},
                                           {""codigo"":""52711"",""literal"":""Galtze-data""},
                                           {""codigo"":""52712"",""literal"":""Lantegian prestaketa-data""},
                                           {""codigo"":""52713"",""literal"":""Emate-data""},
                                           {""codigo"":""52714"",""literal"":""Oharrak""},
                                           {""codigo"":""52715"",""literal"":""Galtze zerrenda""}

                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "NOTIFICAR_NACIMIENTO" Then
                    res = "{""lista"":  [  {""codigo"":""52801"",""literal"":""Jaiotza-data""},
                                           {""codigo"":""52802"",""literal"":""Animaliaren datuak""},
                                           {""codigo"":""52803"",""literal"":""Izena""},
                                           {""codigo"":""52804"",""literal"":""Arraza""},
                                           {""codigo"":""52805"",""literal"":""Sexua""},
                                           {""codigo"":""52806"",""literal"":""Jaiotza-pisua""},
                                           {""codigo"":""52807"",""literal"":""Gaitasuna""},
                                           {""codigo"":""52808"",""literal"":""Erreg. Genealogikoaren zk.""},
                                           {""codigo"":""52809"",""literal"":""Erditze-mota""},
                                           {""codigo"":""52810"",""literal"":""Erditzearen erraztasuna""},
                                           {""codigo"":""52811"",""literal"":""Intseminazio-mota""},
                                           {""codigo"":""52812"",""literal"":""Intseminazio-mota""},
                                           {""codigo"":""52814"",""literal"":""Jaiotza-data""},
                                           {""codigo"":""52815"",""literal"":""Ama""},
                                           {""codigo"":""52816"",""literal"":""Ezabatu""},
                                           {""codigo"":""52817"",""literal"":""E.T. ama""},
                                           {""codigo"":""52818"",""literal"":""Aita""},
                                           {""codigo"":""52819"",""literal"":""Krotalazio datuak""},
                                           {""codigo"":""52820"",""literal"":""Belarritakoa""},
                                           {""codigo"":""52821"",""literal"":""Belarritakoaren ezartze-data""},
                                           {""codigo"":""52822"",""literal"":""Jaiotza jakinarazpena""},
                                           {""codigo"":""52823"",""literal"":""Animaliaren jaiotza""},
                                           {""codigo"":""52824"",""literal"":""Prozesua behar bezala egin da""},
                                           {""codigo"":""52825"",""literal"":""Onartu""},
                                           {""codigo"":""52826"",""literal"":""Izena derrigorra da""},
                                           {""codigo"":""52827"",""literal"":""Izenak ezin du 50 karaktere baino gehiago izan""},
                                           {""codigo"":""52828"",""literal"":""Belarritakoa derrigorra da""},
                                           {""codigo"":""52829"",""literal"":""Belarritakoak 14 karaktere ditu""},
                                           {""codigo"":""52830"",""literal"":""Arraza derrigorra da""},
                                           {""codigo"":""52831"",""literal"":""Arrazak 3 karaktere arte ditu""},
                                           {""codigo"":""52832"",""literal"":""Sexua derrigorra da""},
                                           {""codigo"":""52833"",""literal"":""Sexuak 2 karaktere ditu""},
                                           {""codigo"":""52834"",""literal"":""Gaitasuna derrigorra da""},
                                           {""codigo"":""52835"",""literal"":""Gaitasunak 2 karaktere arte ditu""},
                                           {""codigo"":""52836"",""literal"":""Pisua ez da zenbaki bat""},
                                           {""codigo"":""52837"",""literal"":""Ez dira  '.'. use ',' bere lekuan onartuko dezimalak zehazteko""},
                                           {""codigo"":""52838"",""literal"":""Erditzeko erraztasuna derrigorra da""},
                                           {""codigo"":""52839"",""literal"":""Erditzeko erraztasunak bi karaktere arte ditu""},
                                           {""codigo"":""52840"",""literal"":""Ama belarritakoa derrigorra da""},
                                           {""codigo"":""52841"",""literal"":""Ama belarritakoak 14 karaktere ditu""},
                                           {""codigo"":""52842"",""literal"":""Ama belarritakoa derrigorra da""},
                                           {""codigo"":""52843"",""literal"":""Ama belarritakoak 14 karaktere ditu""},
                                           {""codigo"":""52844"",""literal"":""Aita belarritakoa derrigorra da""},
                                           {""codigo"":""52845"",""literal"":""Aita belarritakoak 14 karaktere ditu""},
                                           {""codigo"":""52846"",""literal"":""Jaiotza-data derrigorra da""},
                                           {""codigo"":""52847"",""literal"":""Jaiotza-datak baliozkoa izan behar du eta ezin da izan gaurko data baino beranduagokoa""},
                                           {""codigo"":""52848"",""literal"":""Ezarpen-data derrigorra da""},
                                           {""codigo"":""52849"",""literal"":""Zenbaki genealogikoak 12 karaktere arte ditu""},
                                           {""codigo"":""52850"",""literal"":""Erditze-motak 2 karaktere arte ditu""},
                                           {""codigo"":""52851"",""literal"":""Inseminazio-motak 2 karaktere arte ditu""},
                                           {""codigo"":""52852"",""literal"":""Jaiotza-data ezin da izan ezarpen data baino beranduagokoa""}

                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "NOTIFICAR_MUERTE" Then
                    res = "{""lista"":  [  {""codigo"":""52901"",""literal"":""Animaliaren heriotza-jakinarazpena""},
                                           {""codigo"":""52902"",""literal"":""Honako formulario honen bidez, zure ustiategiko animalien heriotzak jakinaraz ditzakezu""},
                                           {""codigo"":""52903"",""literal"":""Jakinarazpen-data""},
                                           {""codigo"":""52904"",""literal"":""Ustiategia""},
                                           {""codigo"":""52905"",""literal"":""Belarritako zk.""},
                                           {""codigo"":""52906"",""literal"":""Izena""},
                                           {""codigo"":""52907"",""literal"":""Heriotza-data""},
                                           {""codigo"":""52908"",""literal"":""Oharrak""},
                                           {""codigo"":""52909"",""literal"":""Heriotza jakinarazi""},
                                           {""codigo"":""52910"",""literal"":""Belarritakoa derrigorra da""},
                                           {""codigo"":""52911"",""literal"":""Belarritakoaren luzerak 14 karakterekoa izan behar du""},
                                           {""codigo"":""52912"",""literal"":""Izena derrigorra da""},
                                           {""codigo"":""52913"",""literal"":""Izenak ezin ditu 50 karaktere baino gehiago izan""},
                                           {""codigo"":""52914"",""literal"":""Datak baliozkoa izan behar du eta ezin da gaurkoa baino beranduagokoa izan""},
                                           {""codigo"":""52915"",""literal"":""Iruzkinek ezin dituzte 150 karaktere baino gehiago izan""},
                                           {""codigo"":""52916"",""literal"":""Belarritako zenbakia""},
                                           {""codigo"":""52917"",""literal"":""Izena""}
                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "LISTADO_MUERTES" Then
                    res = "{""lista"":  [  {""codigo"":""53001"",""literal"":""Heriotzen zerrenda""},
                                           {""codigo"":""53002"",""literal"":""Ustiategiko heriotzen zerrenda""},
                                           {""codigo"":""53003"",""literal"":""Oharrak""},
                                           {""codigo"":""53004"",""literal"":""Heriotza-frogagiria""},
                                           {""codigo"":""53005"",""literal"":""Belarritako zenbakia""},
                                           {""codigo"":""53006"",""literal"":""Izena""},
                                           {""codigo"":""53007"",""literal"":""Heriotza-data""},
                                           {""codigo"":""53008"",""literal"":""Jakinarazpen-data""}
                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "LISTADO_DE_NACIMIENTOS" Then
                    res = "{""lista"":  [  {""codigo"":""53101"",""literal"":""Jaiotza-zerrenda""},
                                           {""codigo"":""53102"",""literal"":""Ustiategiko jaiotzen historikoa""},
                                           {""codigo"":""53103"",""literal"":""Belarritakoen zenbakia""},
                                           {""codigo"":""53104"",""literal"":""Izena""},
                                           {""codigo"":""53105"",""literal"":""Jaiotza dat.""},
                                           {""codigo"":""53106"",""literal"":""Arraza""},
                                           {""codigo"":""53107"",""literal"":""Sexua""},
                                           {""codigo"":""53108"",""literal"":""Zain""},
                                           {""codigo"":""53109"",""literal"":""Baliozkotuta""},
                                           {""codigo"":""53110"",""literal"":""Ezeztatuta""},
                                           {""codigo"":""53111"",""literal"":""Akatsa""},
                                           {""codigo"":""53112"",""literal"":""Pisua jaiotza""},
                                           {""codigo"":""53113"",""literal"":""Gaitasuna""},
                                           {""codigo"":""53114"",""literal"":""Erditzeko erraztasuna""},
                                           {""codigo"":""53115"",""literal"":""Ama""},
                                           {""codigo"":""53116"",""literal"":""E.T Ama""},
                                           {""codigo"":""53117"",""literal"":""Aita""},
                                           {""codigo"":""53118"",""literal"":""Belarritakoaren jartze-data""},
                                           {""codigo"":""53119"",""literal"":""Jaiotza Jakin. D.""},
                                           {""codigo"":""53120"",""literal"":""Tramitearen deskribapena""},
                                           {""codigo"":""53121"",""literal"":""DIBa inprimatu""} 

                                            
                                ]
                    }"
                ElseIf inputJson.grupo = "CONFIRMACION_DE_GUIAS" Then
                    res = "{""lista"":  [  {""codigo"":""53201"",""literal"":""Sarrera giden egiaztapena""},
                                           {""codigo"":""53202"",""literal"":""Ustiategirako sarreren giden kudeaketa""},
                                           {""codigo"":""53203"",""literal"":""Itzuli""},
                                           {""codigo"":""53204"",""literal"":""Sarrera giden xehetasunak""},
                                           {""codigo"":""53205"",""literal"":""Sarrera-data""},
                                           {""codigo"":""53206"",""literal"":""Gida kop.""},
                                           {""codigo"":""53207"",""literal"":""Jatorri ustiategia""},
                                           {""codigo"":""53208"",""literal"":""Belarritako eskuragarriak""},
                                           {""codigo"":""53209"",""literal"":""Belarritakoen zerrenda""},
                                           {""codigo"":""53210"",""literal"":""Egiaztatu""},
                                           {""codigo"":""53211"",""literal"":""Ukatu""},
                                           {""codigo"":""53212"",""literal"":""Belarritakoa""},
                                           {""codigo"":""53213"",""literal"":""Arraza""},
                                           {""codigo"":""53214"",""literal"":""Sexua""},
                                           {""codigo"":""53215"",""literal"":""Jaiotza-data""},
                                           {""codigo"":""53216"",""literal"":""Belarritako bat aukeratu behar duzu""}
                                ]
                    }"
                ElseIf inputJson.grupo = "CONFIRMA_GUIA_ENTRADA" Then
                    res = "{""lista"":  [  {""codigo"":""53301"",""literal"":""Sarrera-gidak egiaztatu""},
                                           {""codigo"":""53302"",""literal"":""Ustiategirako sarrera-giden kudeaketa""},
                                           {""codigo"":""53303"",""literal"":""Belarritakoak""},
                                           {""codigo"":""53304"",""literal"":""Bilatu""},
                                           {""codigo"":""53305"",""literal"":""Sarrera-gida""},
                                           {""codigo"":""53306"",""literal"":""Prozesua behar bezala bete da""},
                                           {""codigo"":""53307"",""literal"":""Onartu  ""},
                                           {""codigo"":""53308"",""literal"":""Sarrera-data""},
                                           {""codigo"":""53309"",""literal"":""Gida-zenbakia""},
                                           {""codigo"":""53310"",""literal"":""Ustiategia jatorria""},
                                           {""codigo"":""53311"",""literal"":""Belarritakoak""},
                                           {""codigo"":""53312"",""literal"":""Egoera""},
                                           {""codigo"":""53313"",""literal"":""Ikusi""},
                                           {""codigo"":""53314"",""literal"":""Arraza""},
                                           {""codigo"":""53315"",""literal"":""Sexua""},
                                           {""codigo"":""53316"",""literal"":""Jaiotza-data""}
                                ]
                    }"
                ElseIf inputJson.grupo = "NOTIFICACIONES" Then
                    res = "{""lista"":  [  {""codigo"":""53401"",""literal"":""Jakinarazpenak""},
                                           {""codigo"":""53402"",""literal"":""ustiategirako jakinarazpen-zerrendak""},
                                           {""codigo"":""53403"",""literal"":""Irakurri gabeko jakinarazpenen zerrenda""},
                                           {""codigo"":""53404"",""literal"":""Jakinarazpenak guztira""},
                                           {""codigo"":""53405"",""literal"":""Jakinarazpena""},
                                           {""codigo"":""53406"",""literal"":""Prozesua behar bezala bete da""},
                                           {""codigo"":""53407"",""literal"":""Onartu""},
                                           {""codigo"":""53408"",""literal"":""Jakinarazpen-mota""},
                                           {""codigo"":""53409"",""literal"":""Ikusi""},
                                           {""codigo"":""53410"",""literal"":""Ezabatu""},
                                           {""codigo"":""53411"",""literal"":""Ikusita""},
                                           {""codigo"":""53412"",""literal"":""Izenburua""},
                                           {""codigo"":""53413"",""literal"":""Jakinarazpena ezabatu""},
                                           {""codigo"":""53414"",""literal"":""Jakinarazpena ezabatu nahi duzu?""},
                                           {""codigo"":""53415"",""literal"":""Ezeztatuta""},
                                           {""codigo"":""53416"",""literal"":""Onartu""},
                                           {""codigo"":""53417"",""literal"":""Jakinarazpena ezabatzea""},
                                           {""codigo"":""53418"",""literal"":""Data""}
                                ]
                    }"
                ElseIf inputJson.grupo = "NOTIFICAR_PERDIDA_ASIGNADA" Then
                    res = "{""lista"":  [  {""codigo"":""53501"",""literal"":""Galtzea jakinarazi""},
                                           {""codigo"":""53502"",""literal"":""Belarritako esleitua""},
                                           {""codigo"":""53503"",""literal"":""Belarritako zenbakia""},
                                           {""codigo"":""53504"",""literal"":""Jakinarazpen data""},
                                           {""codigo"":""53505"",""literal"":""Galtze data adierazi (Datak baliozkoa izan behar du eta ezin da komunikazio data baino beranduagokoa izan)""},
                                           {""codigo"":""53506"",""literal"":""Galtzeari buruzko oharrak""},
                                           {""codigo"":""53507"",""literal"":""Itzuli""},
                                           {""codigo"":""53508"",""literal"":""Galtze jakinarazpena bidali""},
                                           {""codigo"":""53509"",""literal"":""Galtzearen arrazoia azaldu (hautazkoa)""}
                                ]
                    }"
                ElseIf inputJson.grupo = "NOTIFICAR_PERDIDA_SIN_ASIGNAR" Then
                    res = "{""lista"":  [  {""codigo"":""53601"",""literal"":""Galtze jakinarazpena bidali""},
                                           {""codigo"":""53602"",""literal"":""Esleitu gabeko belarritakoa""},
                                           {""codigo"":""53603"",""literal"":""Belarritako zenbakia""},
                                           {""codigo"":""53604"",""literal"":""Jakinarazpen data""},
                                           {""codigo"":""53605"",""literal"":""Galtze jakinarazpenaren arrazoia azaldu""},
                                           {""codigo"":""53606"",""literal"":""Belarritakoa galdu da""},
                                           {""codigo"":""53607"",""literal"":""Belarritakoa hondatu da""},
                                           {""codigo"":""53608"",""literal"":""Galtzeari buruzko oharrak""},
                                           {""codigo"":""53609"",""literal"":""Itzuli""},
                                           {""codigo"":""53610"",""literal"":""Galtze jakinarazpena bidali""},
                                           {""codigo"":""53611"",""literal"":""Galtzearen arrazoia azaldu (hautazkoa)""}
                                ]
                    }"
                ElseIf inputJson.grupo = "LOGIN" Then
                    res = "{""lista"":  [  {""codigo"":""53701"",""literal"":""Webgune sarbidea""},
                                            {""codigo"":""53702"",""literal"":""Erabiltzailea""},
                                            {""codigo"":""53703"",""literal"":""Pasahitza""},
                                            {""codigo"":""53704"",""literal"":""Bidali""},
                                            {""codigo"":""53705"",""literal"":""Informazioan jasotzean errore bat gertatu da, beranduago saiatu. Errorea ez bada desagertzen administratzailearekin harremanetan jarri.""}
                                        ]
                    }"
                ElseIf inputJson.grupo = "RELACION_DE_SERIES" Then
                    res = "{""lista"":  [  
                                            {""codigo"":""53795"",""literal"":""Relacion de las asignaciones de las series de crotales_eu  ""},
                                            {""codigo"":""53796"",""literal"":""Marca Electronica_eu""},
                                            {""codigo"":""53797"",""literal"":""Oca_eu""},
                                            {""codigo"":""53798"",""literal"":""Relacion de asignacion de series_eu""}
                                ]
                    }"
                End If

            End If
        End If
        Return res
    End Function
End Class
