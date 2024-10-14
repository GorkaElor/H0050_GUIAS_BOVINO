/*
 * parURLAle
 * Devuelve un número aleatorio 
 */
function parURLAle(){
    return Math.round(Math.random() * 100000);
}

/* 
 * getSufijo
 * Devuelve el sufijo de idioma
 */
function getSufijo() {
    return idioma == '0'? '_C' : '_E';
}

/* 
 * XmlValor_Chequear
 * Devuelve la cadena de texto de entrada con:
 *   los caracteres reservados en HTML 
 *   y
 *   los caracteres y simbolos ISO-8859-1
 * reemplazados por la entidad HTML correspondiente.
 */
function XmlValor_Chequear (cadena) {
    var sValor = "";
    if (cadena != null && cadena != "") {
        sValor = cadena;
        sValor = $.replaceAll(sValor, String.fromCharCode(38), "&amp;"); // &
        sValor = $.replaceAll(sValor, String.fromCharCode(96), "&apos;"); //
        sValor = $.replaceAll(sValor, String.fromCharCode(34), "&quot;"); // "
        sValor = $.replaceAll(sValor, String.fromCharCode(60), "&lt;"); // <
        sValor = $.replaceAll(sValor, String.fromCharCode(62), "&gt;"); // >
        sValor = $.replaceAll(sValor, String.fromCharCode(225), "&#225;"); // á
        sValor = $.replaceAll(sValor, String.fromCharCode(233), "&#233;"); // é
        sValor = $.replaceAll(sValor, String.fromCharCode(237), "&#237;"); // í
        sValor = $.replaceAll(sValor, String.fromCharCode(243), "&#243;"); // ó
        sValor = $.replaceAll(sValor, String.fromCharCode(250), "&#250;"); // ú
        sValor = $.replaceAll(sValor, String.fromCharCode(191), "&#191;"); // ¿
        sValor = $.replaceAll(sValor, String.fromCharCode(193), "&#193;"); // Á
        sValor = $.replaceAll(sValor, String.fromCharCode(201), "&#201;"); // É
        sValor = $.replaceAll(sValor, String.fromCharCode(205), "&#205;"); // Í
        sValor = $.replaceAll(sValor, String.fromCharCode(211), "&#211;"); // Ó
        sValor = $.replaceAll(sValor, String.fromCharCode(218), "&#218;"); // Ú 
        sValor = $.replaceAll(sValor, String.fromCharCode(209), "&#209;"); // Ñ 
        sValor = $.replaceAll(sValor, String.fromCharCode(241), "&#241;"); //ñ
        sValor = $.replaceAll(sValor, String.fromCharCode(228), "&#228;"); //ä
        sValor = $.replaceAll(sValor, String.fromCharCode(235), "&#235;"); //ë
        sValor = $.replaceAll(sValor, String.fromCharCode(239), "&#239;"); //ï
        sValor = $.replaceAll(sValor, String.fromCharCode(246), "&#246;"); //ö
        sValor = $.replaceAll(sValor, String.fromCharCode(252), "&#252;"); //ü
        sValor = $.replaceAll(sValor, String.fromCharCode(196), "&#196;"); //Ä
        sValor = $.replaceAll(sValor, String.fromCharCode(203), "&#203;"); //Ë
        sValor = $.replaceAll(sValor, String.fromCharCode(207), "&#207;"); //Ï
        sValor = $.replaceAll(sValor, String.fromCharCode(214), "&#214;"); //Ö
        sValor = $.replaceAll(sValor, String.fromCharCode(220), "&#220;"); //Ü
        sValor = $.replaceAll(sValor, String.fromCharCode(186), "&#186;"); //º
        sValor = $.replaceAll(sValor, String.fromCharCode(170), "&#170;"); //ª
        sValor = $.replaceAll(sValor, String.fromCharCode(92), "&#92;"); //\
        sValor = $.replaceAll(sValor, String.fromCharCode(47), "&#47;"); // /
        sValor = $.replaceAll(sValor, String.fromCharCode(183), "&#183;"); //·
        sValor = $.replaceAll(sValor, String.fromCharCode(172), "&#172;"); //¬
        sValor = $.replaceAll(sValor, String.fromCharCode(199), "&#199;"); //ç
    }
    return sValor;
}

function eliminaAcentos(cadena) {
    var sValor = "";
    if (cadena != null && cadena != "") {
        sValor = cadena;
        sValor = $.replaceAll(sValor, String.fromCharCode(38), "&amp;"); // &
        sValor = $.replaceAll(sValor, String.fromCharCode(96), ""); //
        sValor = $.replaceAll(sValor, String.fromCharCode(34), ""); // "
        sValor = $.replaceAll(sValor, String.fromCharCode(60), "&lt;"); // <
        sValor = $.replaceAll(sValor, String.fromCharCode(62), "&gt;"); // >
        sValor = $.replaceAll(sValor, String.fromCharCode(225), "a"); // á
        sValor = $.replaceAll(sValor, String.fromCharCode(233), "e"); // é
        sValor = $.replaceAll(sValor, String.fromCharCode(237), "i"); // í
        sValor = $.replaceAll(sValor, String.fromCharCode(243), "o"); // ó
        sValor = $.replaceAll(sValor, String.fromCharCode(250), "u"); // ú
        sValor = $.replaceAll(sValor, String.fromCharCode(191), "&#191;"); // ¿
        sValor = $.replaceAll(sValor, String.fromCharCode(193), "A"); // Á
        sValor = $.replaceAll(sValor, String.fromCharCode(201), "E"); // É
        sValor = $.replaceAll(sValor, String.fromCharCode(205), "I"); // Í
        sValor = $.replaceAll(sValor, String.fromCharCode(211), "O"); // Ó
        sValor = $.replaceAll(sValor, String.fromCharCode(218), "U"); // Ú 
        sValor = $.replaceAll(sValor, String.fromCharCode(209), "Ni"); // Ñ 
        sValor = $.replaceAll(sValor, String.fromCharCode(241), "ni"); //ñ
        sValor = $.replaceAll(sValor, String.fromCharCode(228), "a"); //ä
        sValor = $.replaceAll(sValor, String.fromCharCode(235), "e"); //ë
        sValor = $.replaceAll(sValor, String.fromCharCode(239), "i;"); //ï
        sValor = $.replaceAll(sValor, String.fromCharCode(246), "o"); //ö
        sValor = $.replaceAll(sValor, String.fromCharCode(252), "u"); //ü
        sValor = $.replaceAll(sValor, String.fromCharCode(196), "A"); //Ä
        sValor = $.replaceAll(sValor, String.fromCharCode(203), "E"); //Ë
        sValor = $.replaceAll(sValor, String.fromCharCode(207), "I"); //Ï
        sValor = $.replaceAll(sValor, String.fromCharCode(214), "O"); //Ö
        sValor = $.replaceAll(sValor, String.fromCharCode(220), "U"); //Ü
        sValor = $.replaceAll(sValor, String.fromCharCode(186), "num"); //º
        sValor = $.replaceAll(sValor, String.fromCharCode(170), "sra"); //ª
        sValor = $.replaceAll(sValor, String.fromCharCode(92), ""); //\
        sValor = $.replaceAll(sValor, String.fromCharCode(47), ""); // /
        sValor = $.replaceAll(sValor, String.fromCharCode(183), ""); //·
        sValor = $.replaceAll(sValor, String.fromCharCode(172), ""); //¬
        sValor = $.replaceAll(sValor, String.fromCharCode(199), ""); //ç
    }
    return sValor;
}

function splitKey(key){
    return key.split(keySep);
}

jQuery.contiene = function (haystack, needle) {
    return haystack.indexOf(needle) !== -1;
}; 

// Se recuperan los procesos del usuario
    
var scriptArray = new Array();
$(document).ready(function() {

    $("form:not(form#frmServidor)").keydown(function(e)
    {
        if (e.keyCode == 27)
        {
            return false;
        }
    });        

    
    jQuery.fn.escaparBackSlash = function(fn){
        var ret=fn;
        try 
        {
		    ret=ret.replace(/'/g, "\\'");
		    ret=ret.replace(/"/g, "\\\"");
		    return ret;
	    }
	    catch(e)
	    {
	        return;
	    }
    };       
    //Devuelve la fucnion val escapada
    jQuery.fn.valor = function(fun){
        var ret=jQuery.fn.escaparBackSlash(this.val());
        try 
        {
		   
		    return ret;    
	    }
	    catch(e)
	    {
	        return;
	    }
    };
    
	var miAjax = $.ikt_ajax_obj.inicializar();
	miAjax.pagina="Procesos.aspx/GetProcesos";
	miAjax.async = false;
	miAjax.correcto=function (objeto){
		jQuery.ProcesosUsuarios = JSON.parse(objeto.responseText).d

	};
	miAjax.error=function (objeto){
		alert('Ha ocurrido un error en la carga de los procesos')
	};
	miAjax.enviar();   
	  
});

var clickHandler = function(e) {
    var self = e.data.self;
    var elementID = e.data.elementID;

    var container = $("#" + elementID);
    var botonera = $("#botonera" + elementID);
    //En el caso de que el elemento no tenga botonera casca al posicionarlo, por eso se ha incluido la siguiente sentencia.
    if ($("#botonera" + elementID).length === 0) return false;
    var vOf = $(botonera).children(".ui-button:visible").last().size() > 0 ? $(botonera).children(".ui-button:visible").last() : $(botonera);
    var vAt = $(botonera).children(".ui-button:visible").last().size() > 0 ? "right center" : "left center";

    if (container.has(e.target).length === 0 && botonera.has(e.target).length === 0) {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        $(self._alertEL).css({ "margin": "0.3em" }).toggle(true).position({ of: vOf, my: "left center", at: vAt, using: function(calcPos) {
            $(this).css({ top: calcPos.top, left: calcPos.left + 10 });
        }
        });
        $(self._alertEL).toggle(false).fadeIn();
    }
    return false;
}

jQuery(function ($) {
  $.datepicker.regional['es'] =
  {
      clearText: 'Borra',
      clearStatus: 'Borra fecha actual',
      closeText: 'Cerrar',
      closeStatus: 'Cerrar sin guardar',
      prevStatus: 'Mostrar mes anterior',
      prevBigStatus: 'Mostrar año anterior',
      nextStatus: 'Mostrar mes siguiente',
      nextBigStatus: 'Mostrar año siguiente',
      currentText: 'Hoy',
      currentStatus: 'Mostrar mes actual',
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      monthStatus: 'Seleccionar otro mes',
      yearStatus: 'Seleccionar otro año',
      weekHeader: 'Sm',
      weekStatus: 'Semana del año',
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
      dayStatus: 'Set DD as first week day',
      dateStatus: 'Select D, M d',
      dateFormat: 'dd/mm/yy',
      firstDay: 1,
      initStatus: 'Seleccionar fecha',
      isRTL: false
  };
$.datepicker.regional['eu'] =
	{
	clearText: 'Ezabatu',
	clearStatus: 'Uneko data ezabatu',
	closeText: 'Itxi',
	closeStatus: 'Gorde gabe itxi',
	prevStatus: 'Aurreko hilabetea erakutsi',
	prevBigStatus: 'Aurreko urtea erakutsi',
	nextStatus: 'Hurrengo hilabetea erakutsi',
	nextBigStatus: 'Hurrengo urtea erakutsi',
	currentText: 'Gaur',
	currentStatus: 'Uneko hilabetea erakutsi',
	monthNames: ['Urtarrila', 'Otsaila', 'Martxoa', 'Apirila', 'Maiatza', 'Ekaina', 'Uztaila', 'Abuztua', 'Iraila', 'Urria', 'Azaroa', 'Abendua'],
	monthNamesShort: ['Urt', 'Ots', 'Mar', 'Api', 'Mai', 'Eka', 'Uzt', 'Abu', 'Ira', 'Urr', 'Aza', 'Abe'],
	monthStatus: 'Beste hilabete bat aukeratu',
	yearStatus: 'Beste urte bat aukeratu',
	weekHeader: 'As',
	weekStatus: 'Urteko astea',
	dayNames: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata'],
	dayNamesShort: ['Ig.', 'Al.', 'Ar.', 'Az.', 'Og.', 'Ol.', 'Lr.'],
	dayNamesMin: ['Ig', 'Al', 'Ar', 'Az', 'Og', 'Ol', 'Lr'],
	dayStatus: 'Asteko lehen egun bezala DD jarri',
	dateStatus: 'D, M d aukeratu',
	dateFormat: 'yy/mm/dd',
	firstDay: 1,
	initStatus: 'Data aukeratu',
	isRTL: false
	};
  if (idioma == '0')
  {$.datepicker.setDefaults($.datepicker.regional['es']);}
  else
  {$.datepicker.setDefaults($.datepicker.regional['eu']);}
});
$.cargado = false;
$.extend(
    { 
    loadLabelsGen: function(id) {
		var identificador = '';
		var miLiteral = '';
		$("#"+id.replace("#","")).find(":not(div,form,ul,li,fieldset,table,thead,tbody,th,tr,td, col, colgroup, input:text, button, button>span)").each(function(){
			identificador=$(this).attr("id")!=null?$(this).attr("id"):"";
			try{
				identificador=identificador.split('_jqLit_')[1];
				miLiteral=$.Literales[identificador]==undefined?"":$.Literales[identificador];
				$(this).text(miLiteral);                     
			}catch(err){
				identificador='';                 
			}              
		});		
	},
    left:
                function (str, n) {
                    if (n <= 0)
                        return "";
                    else if (n > String(str).length)
                        return str;
                    else
                        return String(str).substring(0, n);
                },
        right:
            function (str, n) {
                if (n <= 0)
                    return "";
                else if (n > String(str).length)
                    return str;
                else {
                    var iLen = String(str).length;
                    return String(str).substring(iLen, iLen - n);
                }
            },
                    
        desglosar_CIF_NIF:
            function (str) {
                var resul = new Array(3);
                if (isNaN(jQuery.left(str, 1))) {
                    resul[0] = jQuery.left(str, 1);
                    resul[1] = str.substring(1);
                    resul[2] = "";
                }
                else {
                    resul[0] = "";
                    resul[1] = str.substring(0, str.length - 1);
                    resul[2] = jQuery.right(str, 1); ;
                }
                return resul
            },
        replaceAll: function (pCadena, pCarOri, pCarFin) {
            while (pCadena.indexOf(pCarOri) >= 0) { pCadena = pCadena.replace(pCarOri, pCarFin); }
            return pCadena;
        },
        labelWidth: function (idFieldset) {
            var vWidth = 0
            $("#" + idFieldset + " label").each(function () {
                vWidth = $(this).html().toString().length > vWidth ? $(this).html().toString().length : vWidth;
            });

            $("#" + idFieldset + " label").each(function () {
                var lon = vWidth - $(this).html().toString().length;
                $(this).html("<pre>" + $(this).html())
                for (var i = 0; i < lon; i++) $(this).html($(this).html() + "");
                $(this).html($(this).html() + "</pre>")
            });
        }
        ,loadEl:function(el){
            var oHead = document.getElementsByTagName("head")[0] || document.documentElement;
            var oScript;
            oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = el.attr("src") + "?prand=" + parURLAle();

                 // Attach handlers for all browsers
                  var done = false;
                  oScript.onload = oScript.onreadystatechange = function() {
                   if ( !done && (!this.readyState ||
                     this.readyState === "loaded" || this.readyState === "complete") ) 
                   {
                    done = true;
                    
                    // Handle memory leak in IE
                    oScript.onload = oScript.onreadystatechange = null;
                    if ( oHead && oScript.parentNode ) {
                     oHead.removeChild( oScript );
                    }
                    
                    $.getElFromScriptArray();
                   }
                   else{
                        return;
                   }
                  };
                  
                  // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
                  // This arises when a base node is used (#2709 and #4378).
                  
                  oHead.insertBefore( oScript, oHead.firstChild );              
        },
        getElFromScriptArray:function(){
            if (scriptArray.length > 0){
                $.loadEl(scriptArray.pop())
            }
        },
        incluirJS: function (nomVentana) {
            $("#imgTitVenCerrar").bind('click', function() {$(".main").html('');})
            
            $.ajax({
                  url: nomVentana + '.xml',
                  dataType: 'xml',
                  success: function(response) {    

                    var oHead = document.getElementsByTagName("head")[0] || document.documentElement;
     
                    $(response).find('link').each(function(){
                        var oCssFile;
                        //alert($(this).attr('href'));
                        oCssFile = document.createElement("link");
                        oCssFile.type = 'text/css';
                        oCssFile.rel = 'stylesheet';
                        oCssFile.href = $(this).attr('href') + "?prand=" + parURLAle();
                        oHead.appendChild(oCssFile);
                    });

                     $(response).find('script').each(
                         function(){
                            scriptArray.push($(this))
                         }
                     );
                    scriptArray.reverse();
                    $.getElFromScriptArray();
                    return true;
                  }
                });
        },
		gridSel:''
        ,
        incluirJSAgruPados: function (nomVentana,Grupo) {
            $.ajax({
                  url:  nomVentana,
                  dataType: 'xml',
                  success: function(response) {    
                    var oHead = document.getElementsByTagName("head")[0] || document.documentElement;
     
                     $(response).find(Grupo).children('link').each(function(){
                        var oCssFile;
                        oCssFile = document.createElement("link");
                        oCssFile.type = 'text/css';
                        oCssFile.rel = 'stylesheet';
                        oCssFile.href = $(this).attr('href') + "?prand=" + parURLAle();
                        oHead.appendChild(oCssFile);
                    });

                     $(response).find(Grupo).children('script').each(function(){
                            scriptArray.push($(this))
                         }
                     );
                     scriptArray.reverse();
                    $.getElFromScriptArray();
                    return true;
                  }
                });
        },
 		Literales_calls:{}, // Alberga  las llamadas de los diferentes aspx de esta manera se controla las llamadas al servidor
		Literales:{},
        cargaLiterales:function (nomVentana){
			if ($.Literales_calls[nomVentana]==undefined || !$.Literales_calls[nomVentana])
			{
				var ret;
				var miAjax = $.ikt_ajax_obj.inicializar();
				miAjax.pagina=nomVentana + ".aspx/GetLiterales";
				miAjax.parametros ={'datos':{'Gru_Literales': nomVentana,'hash':viewHash}}
				miAjax.async = false;
				miAjax.correcto=function (objeto){
								$.extend( $.Literales, JSON.parse(objeto.responseText).d);   
								$.Literales_calls[nomVentana] = true;
                                ret = true;				
				};
				miAjax.error=function (objeto){
                                alert('Ha ocurrido un error en la carga de los literales');
								$.Literales_calls[nomVentana] = false;
                                ret = false;
				};
				miAjax.enviar();
				
				return ret;   
			}
			else
			{
				return true;
			}
        },
        cargaLiteralesApp:function (){
            // Se inicializa en los literales de aplicación
            jQuery.Literales ={}
            var ret;
			var miAjax = $.ikt_ajax_obj.inicializar();
			miAjax.pagina="Procesos.aspx/GetLiterales";
			miAjax.parametros ={'datos':{'Gru_Literales': 'GEN','hash':viewHash}};
			miAjax.async = false;
			miAjax.correcto=function (objeto){

							$.Literales = JSON.parse(objeto.responseText).d;
							ret = true;				
			};
			miAjax.error=function (objeto){
							alert('Ha ocurrido un error en la carga de los literales');
							ret = false;
			};
			miAjax.enviar();   				
            return ret;   
        },		
       ProcesosUsuarios: {}
       ,
       BuscarProcesosUsuarios:function(ProCod)  {
        if (jQuery.ProcesosUsuarios[ProCod]!= undefined)
        {
            return true;
        }
        else
        {   return false;
        }
       },     
       redimensionarArbol:function(){
            //ajustar dimensiones del arbol ante posibles overflows
            if ($("#arbol li:first").innerWidth() > $(".containerArbol").width()){
                var newW = $("#arbol li:first").innerWidth();
                $("#arbol").css("width", newW + 9 + 'px' );
                /*$("#divOcultar").css("width", newW + 9 + 'px');*/
            }
            else{
                $("#arbol").css("width","");
                $("#divOcultar").css("width","");
            }
            if ($("#arbol li:first").innerHeight() > $(".containerArbol").height()){
                var newH = $("#arbol li:first").innerHeight()
                $("#arbol").css("height", newH + 19 + 'px' );
            }
            else{
                $("#arbol").css("height","");
                $("#divOcultar").css("height","");
            }
        }
    }
);


$.ajaxSetup({
    beforeSend: function(jqXHR, settings) {
        if (settings.dataType == "json") {
            try {
                if (typeof settings.data!="object")settings.data = replaceJQInvalidCharacters(settings.data);
            }catch(ex){}
        }
    }
});

function replaceJQInvalidCharacters(str) {
    /*
    #;&,.+*~':"!^$[]()=>|/
    */
    str = str.replace(new RegExp("jq" + "#".charCodeAt(0) + "jq", "g"), "#");
    str = str.replace(new RegExp("jq" + ";".charCodeAt(0) + "jq", "g"), ";");
    str = str.replace(new RegExp("jq" + "&".charCodeAt(0) + "jq", "g"), "&");
    str = str.replace(new RegExp("jq" + ",".charCodeAt(0) + "jq", "g"), ",");
    str = str.replace(new RegExp("jq" + ".".charCodeAt(0) + "jq", "g"), ".");
    str = str.replace(new RegExp("jq" + "+".charCodeAt(0) + "jq", "g"), "+");
    str = str.replace(new RegExp("jq" + "*".charCodeAt(0) + "jq", "g"), "*");
    str = str.replace(new RegExp("jq" + "~".charCodeAt(0) + "jq", "g"), "~");
    str = str.replace(new RegExp("jq" + "'".charCodeAt(0) + "jq", "g"), "'");
    str = str.replace(new RegExp("jq" + ":".charCodeAt(0) + "jq", "g"), ":");
    str = str.replace(new RegExp("jq34jq", "g"), String.fromCharCode(34));
    str = str.replace(new RegExp("jq" + "!".charCodeAt(0) + "jq", "g"), "!");
    str = str.replace(new RegExp("jq" + "^".charCodeAt(0) + "jq", "g"), "^");
    str = str.replace(new RegExp("jq" + "$".charCodeAt(0) + "jq", "g"), "$");
    str = str.replace(new RegExp("jq" + "[".charCodeAt(0) + "jq", "g"), "[");
    str = str.replace(new RegExp("jq" + "]".charCodeAt(0) + "jq", "g"), "]");
    str = str.replace(new RegExp("jq" + ")".charCodeAt(0) + "jq", "g"), "(");
    str = str.replace(new RegExp("jq" + ")".charCodeAt(0) + "jq", "g"), ")");
    str = str.replace(new RegExp("jq" + "=".charCodeAt(0) + "jq", "g"), "=");
    str = str.replace(new RegExp("jq" + ">".charCodeAt(0) + "jq", "g"), ">");
    str = str.replace(new RegExp("jq" + "|".charCodeAt(0) + "jq", "g"), "|");
    str = str.replace(new RegExp("jq" + "/".charCodeAt(0) + "jq", "g"), "/");
    str = str.replace(new RegExp("jq32jq", "g"), String.fromCharCode(32));

    return str;
}
function getFechaFormateada(fecha){
	return $.datepicker.formatDate($.datepicker.regional[(idioma != "0" ? 'eu' : 'es')].dateFormat, fecha);
}