// Controla el handle de error
function handleAjaxError(xhr, textStatus, error) {
    if (textStatus === 'timeout') {
        alert($.Literales["50168"]);
    }
    else {
        // Si el error es Unauthorized, significa que la sesión ha expirado y el usuario ya no tiene acceso al webmethod
        if (error == "Unauthorized") {
            var path = path_info;
            alert($.Literales["50166"]);
            window.location = path;
        }
        else {
            alert($.Literales["50167"]);
        }
    }
}

/*Loading para mostrar en la carga de los menús*/
function div_loading_ret() {
    return '<div class="box box-danger"> <div class="box-header"> <h3 class="box-title">Cargando datos ...</h3> </div> <div class="box-body"> <p> 	Puede tardar varios segundos </p> </div> <div class="overlay"></div> <div class="loading-img"></div> </div>';
}

/*Recuperar los datos de un formulario*/
function get_fdata(formulario, miAjax) {
    var self = this;
    var options = this.options;

    var campos = "";
    var nombre = "";
    var valor = "";

    $("#" + formulario + " :input").not(".dontSendData").each(function () {
        nombre = $(this).attr("name") != null ? $(this).attr("name") : "";
        if ($(this).attr("type") == "checkbox") {
            valor = $(this).valor() != null && $(this).is(":checked") ? true : false;
        } else if ($(this).attr("type") == "radio") {
            valor = $("input[name='" + nombre + "']:checked", $("#" + formulario)) != null ? $("input[name='" + nombre + "']:checked").val() : "";
        } else {
            valor = $(this).valor() != null ? $(this).valor() : "";
        }
        if (nombre !== "") {
            miAjax.add_parametro(nombre, valor);
        }
    });
    return miAjax;
}

/***************************************************************************/
/*  Muestra una capa respuesta a una llamada
/*
/*  - capapadre - capa en la que se va incluir la respuesta , ejemplo nav#topbar
/*  - ok . 1 -> resultado ok, 0 no ok
/*  - texto. texto que se mostrará
/*  - callback, lo que se ejecutará al finalizar esta función. En blanco 
/*    en blanco si no se quiere ejecutar nada
/****************************************************************************/
function capaRespuesta(capapadre, ok, texto, callback) {
    if (ok == 1) {
        var capa = '<div id="capaRetornoAjax" class="alert alert-success alert-dismissable">';
        capa = capa + '<i class="fa fa-check"></i>';
        capa = capa + '<b>!</b>' + texto + '';
        capa = capa + '</div>';
    } else {
        var capa = '<div id="capaRetornoAjax" class="alert alert-danger alert-dismissable">';
        capa = capa + '<i class="fa fa-ban"></i>';
        capa = capa + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>';
        capa = capa + '<b>Atención !</b>' + texto + '';
        capa = capa + '</div>';
    }
    jQuery(capapadre).append(capa);
    jQuery("#capaRetornoAjax").show("fast", function () {
        // Animation complete.
        if (ok == 1) {
            setTimeout(function () {
                $("#capaRetornoAjax").hide("fast", function () {
                    if (callback != "") {
                        eval(callback);
                    }
                });
            }, 3000);
        } else { // error, no ejecutamos el callback
        }
    });
}

function capaErrorAjax(capapadre, ok, texto, callback) {

    var capa = '<div id="capaErrorAjax" class="alert alert-danger alert-dismissable mt-20">';
    capa = capa + '<i class="fa fa-ban"></i>';
    capa = capa + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>';
    capa = capa + '<b>Atención !</b>' + texto + '';
    capa = capa + '</div>';

    // se oculta la anterior
    $("#capaErrorAjax").remove();
    jQuery(capapadre).append(capa);
    jQuery("#capaErrorAjax").show("fast", function () {
        $('html, body').animate({ scrollTop: $("#capaErrorAjax").offset().top }, 'fast', function () { });
    });
}

/*Validación de fechas*/
// En euskera
function isValidDate_eu(date) {
    // basado en http://jsfiddle.net/4gure/1/
    var matches = /(\d{4})[\/](\d{2})[\/](\d{2})/.exec(date);
    if (matches == null) return false;
    var day = matches[3];
    var month = matches[2] - 1;
    var year = matches[1];
    var composedDate = new Date(year, month, day);
    return composedDate.getDate() == day &&
             composedDate.getMonth() == month &&
             composedDate.getFullYear() == year;
}
// En castellano
function isValidDate_es(date) {
    // basado en http://jsfiddle.net/4gure/1/
    var matches = /(\d{2})[\/](\d{2})[\/](\d{4})/.exec(date);
    if (matches == null) return false;
    var day = matches[1];
    var month = matches[2] - 1;
    var year = matches[3];
    var composedDate = new Date(year, month, day);
    return composedDate.getDate() == day &&
             composedDate.getMonth() == month &&
             composedDate.getFullYear() == year;
}
// Dependiendo el idioma se valida euskera o castellano
function isValidDate(date) {
    if (idioma == 0) {
        return isValidDate_es(date);
    }
    else {
        return isValidDate_eu(date);
    }
}

/***************************************************************************/
/*  Muestra una capa como MsgBox
/*  creaMsgBox(sModID, sModTitulo, sModTexto, sModTxtDefault, [fnModDefault, arrModBotones])
/*
/*  - sModID: ID de la capa MsgBox
/*  - sModTitulo: Título del MsgBox
/*  - sModTexto: Texto del cuerpo del MsgBox
/*  - sModTxtDefault: Texto del botón por defecto 
/*  - fnModDefault: (Opcional) Función que ejecuta el botón por defecto. Si no se 
/*    asocia ninguna función, al pulsar el botón solo cerrará la ventana. Si no se
/*    quiere asociar ninguna función y hay más botones (mediante arrModBotones), se
/*    pasará el valor null.
/*  - arrModBotones: (Opcional) Array que contiene parejas de Texto y Función asociadas 
/*    a un botón. Por cada botón adicional del MsgBox debe haber un par de valores
/*    en arrModBotones (el primero será el texto del botón, el segundo será la función
/*    a ejecutar por el botón).
/*
/*  NOTA:   El MsgBox se almacenará en un div con id="zona-modal". En el caso de 
/*          que no exista lo creará.
/****************************************************************************/
function creaMsgBox(sModID, sModTitulo, sModTexto, sModTxtDefault, fnModDefault, arrModBotones) {
    if (null == document.getElementById("zona-modal")) {
        $('body').append('<div id="zona-modal"></div>');
    }

    sHTML = '<div class="modal fade " id="' + sModID + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
    sHTML += '<div class="modal-dialog  modal-lg">';
    sHTML += '<div class="modal-content">';
    sHTML += '<div class="modal-header">';
    sHTML += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    sHTML += '<h4 class="modal-title" id="myModalLabel"><i class="fa fa-info"></i> <span id="spnModalTit">' + sModTitulo + '</span> </h4>';
    sHTML += '</div>';
    sHTML += '<div class="modal-body">';
    sHTML += '<div class="callout callout-info">';
    sHTML += '<h4 id="spnModalTxt">' + sModTexto + '</h4>';
    sHTML += '</div>';
    sHTML += '</div>';
    sHTML += '<div class="modal-footer">';
    if (arrModBotones != undefined) {
        for (var i = 0; i < arrModBotones.length; i = i + 2) {
            sHTML += '<button type="button" class="btn btn-primary" id="confirm-btn-Add-' + ((i / 2) + 1) + '">' + arrModBotones[i] + '</button>';
        }
    }
    sHTML += '<button type="button" class="btn btn-primary" id="confirm-btn-default" data-dismiss="modal" >' + sModTxtDefault + '</button>';
    sHTML += '</div>';
    sHTML += '</div>';
    sHTML += '</div>';
    sHTML += '</div>';

    if ($("#" + sModID).length > 0) {
        $("#" + sModID).remove();
    }
    $("#zona-modal").append(sHTML);

    if (fnModDefault != undefined && fnModDefault != null) {
        $("#" + sModID).find("#confirm-btn-default").click(fnModDefault);
    }
    if (arrModBotones != undefined) {
        for (var i = 0; i < arrModBotones.length; i = i + 2) {
            $("#" + sModID).find("#confirm-btn-Add-" + ((i / 2) + 1)).click(arrModBotones[i + 1]);
        }
    }

    /*Se muestra la capa con el fondo fijo para que no se pueda interactuar
    fuera de ella (backdrop: "static")*/
    $("#" + sModID).modal({ backdrop: "static" });

}

function cerrarMenu() {
    if ($(window).width() < 768) {
        //cerramos menú
        $("body").removeClass("sidebar-open");
    }
}

// Función para cargar la portada
function CargarPortada() {
    $('#content').hide();
    $('#cabcontent').hide();
    $("#tituloDoc").text($.Literales["50114"]);
    var divLoad = div_loading_ret();
    $('#maincontentgen').html(divLoad);
    $('#maincontentgen').load("expedientes.aspx", $.extend({}, { prand: parURLAle() }, {}), function () {
        $('#maincontentgen').show("fast");
        cerrarMenu();
    });

}



// Guardamos el objeto row de cada tabla para utilizarlo en las updatessss
var RowExp;
// Función para referescar una fila de la tabla del expecdiente
function ExpedienteActualizarDT() {

    
    // Recogemos la información del objeto row
    var datatr = $('#dt-expedientes').DataTable().row(RowExp).data();

    //RowExp

    var miAjax = $.ikt_ajax_obj.inicializar();
    miAjax.pagina = "expedientes_lista_box.aspx/getExpediente";


    // Pasarle los datos seleccionados de la ventana
    miAjax.add_parametro("expid", datatr.expid);
    miAjax.add_parametro("proid", datatr.proid);
    miAjax.add_parametro("conid", datatr.conid);
    miAjax.add_parametro("ayuid", datatr.ayuid);




    miAjax.correcto = function (objeto) {
        var result = JSON.parse(objeto.responseText).d;


        if (result.errores == null && result.alertas == null) {

            

            var DT_RowId = result.data.expid + 'jqCod' + result.data.proid + 'jqCod' + result.data.conid + 'jqCod' + result.data.ayuid;
            
            var newdata = {};

            
            
            if (idioma == 0) {
                newdata = {
                    'DT_RowId': DT_RowId, 'proid': result.data.proid, 'conid': result.data.conid, 'ayuid': result.data.ayuid, 'expid': result.data.expid,
                    'efasid': result.data.efasid, 'expcod': result.data.expcod,
                    'exppronom': result.data.exppronom, 'procod': result.data.procod, 'prodes': result.data.prodes_c,
                    'ayucod': result.data.ayucod, 'fascod': result.data.fascod_c,
                    'esolcn': result.data.esolcn, 'esolnomape': result.data.esolnomape,
                    'ayudes': result.data.ayudes_c, 'expfecorden': result.data.expfecorden,
                    'expfecsistema': result.data.expfecsistema, 'expfirele': result.data.expfirele,
                    'efasdocnoent': result.data.efasdocnoent, 'efasdocpenver': result.data.efasdocpenver,
                    'efasdoccor': result.data.efasdoccor, 'efasdocasub': result.data.efasdocasub,
                    'efasdocnoobl': result.data.efasdocnoobl, 'traid': result.data.traid,
                    'etraid': result.data.etraid, 'trades': result.data.trades_c
                };
            }
            else {
                newdata = {
                    'DT_RowId': DT_RowId, 'proid': result.data.proid, 'conid': result.data.conid, 'ayuid': result.data.ayuid, 'expid': result.data.expid,
                    'efasid': result.data.efasid, 'expcod': result.data.expcod,
                    'exppronom': result.data.exppronom, 'procod': result.data.procod,
                    'prodes': result.data.prodes_e, 'ayucod': result.data.ayucod,
                    'fascod': result.data.fascod_e, 'esolcn': result.data.esolcn, 'esolnomape': result.data.esolnomape,
                    'ayudes': result.data.ayudes_e, 'expfecorden': result.data.expfecorden,
                    'expfecsistema': result.data.expfecsistema, 'expfirele': result.data.expfirele,
                    'efasdocnoent': result.data.efasdocnoent, 'efasdocpenver': result.data.efasdocpenver,
                    'efasdoccor': result.data.efasdoccor, 'efasdocasub': result.data.efasdocasub,
                    'efasdocnoobl': result.data.efasdocnoobl, 'traid': result.data.traid,
                    'etraid': result.data.etraid, 'trades': result.data.trades_e
                };
            }
            

            
            $('#dt-expedientes').DataTable().row(RowExp).data(newdata);


        } else {
            // Se cambia el icono del botón y se habilita
            $("#archivo").find("i").removeClass("fa-spin");
            $("#archivo").prop("disabled", false);
            //$("#archivo").find("span").text("Alta Expediente");    // Guardando


            valRes.errores = result.errores != null ? result.errores : valRes.errores;
            valRes.alertas = result.alertas != null ? result.alertas : valRes.alertas;

            //var mierror = "<b>Revise el formulario, tiene campos erróneos</b><br>";
            var mierror = "<br>";

            $.each(valRes.errores, function (index, value) {
                mierror = mierror + "<br>" + value;
            });
            capaErrorAjax('#' + fname, false, mierror, function () {
                // calback
            });
        }
    };
    miAjax.error = function (objeto) {
        alert("Error"); //'No se ha guardado la información'; 
    };

    miAjax.async = false;

    miAjax.enviar();


}



$(function () {

    /*definimos el formato que deben de tener algunos controles*/

    var patEmail = new RegExp("^[a-z0-9_\\-\\.]+\\@[a-z0-9_\\-\\.]+\\.[a-z]{2,3}$");
    var patTelFax = new RegExp("[0-9]{9}");
    var patTelFijo = new RegExp("9[0-9]{8}");
    var patTelMovil = new RegExp("6[0-9]{8}");

    
    /*Se define el formato para el datatable*/
    if (idioma == 0) {
        //configuración de soporte fechas en datatables
        //$.fn.dataTable.moment('DD/MM/YYYY HH:MM:SS');
        $.fn.dataTable.moment('DD/MM/YYYY HH:mm:ss');
    }
    else {
        //configuración de soporte fechas en datatables
        //$.fn.dataTable.moment('YYYY/MM/DD HH:MM:SS');
        $.fn.dataTable.moment('YYYY/MM/DD HH:mm:ss');
    }

    /*Traducción datepicker*/
    if (idioma == 0) {

        $.extend(true, $.fn.datepicker.defaults, { language: 'es', weekStart: 8, format: 'dd/mm/yyyy' });
    }
    else {
        $.extend(true, $.fn.datepicker.defaults, { language: 'eu', weekStart: 8, format: 'yyyy/mm/dd' });
    }

    /*Traducción datetimepicker
    if (idioma == 0) {

        $.extend(true, $.fn.datetimepicker.defaults, { language: 'es', weekStart: 8, format: 'dd/mm/yyyy hh:ii:ss' });
    }
    else {
        $.extend(true, $.fn.datetimepicker.defaults, { language: 'eu', weekStart: 8, format: 'dd/mm/yyyy hh:ii:ss' });
    }*/
    var idiomatime;
    if (idioma == 0) {
        idiomatime = 'es';
    }
    else {
        idiomatime = 'eu';
    }

    // datetimepicker
    $.fn.datetimepicker.defaults = {
        maskInput: true,           // disables the text input mask
        pickDate: true,            // disables the date picker
        pickTime: true,            // disables de time picker
        pick12HourFormat: false,   // enables the 12-hour format time picker
        pickSeconds: true,         // disables seconds in the time picker
        startDate: -Infinity,      // set a minimum date
        endDate: Infinity,          // set a maximum date
        language: idiomatime
    };


    // **** DATATABLE SORT DECIMALS
    // Se sobreescribe el método sort cuando haya un campo de tipo decimal
    jQuery.extend(jQuery.fn.dataTableExt.oSort, {
        "numeric-comma-pre": function (a) {
            // Se limpia el html de render    
            a = $(a).text();
            var x = (a == "-") ? 0 : a.replace(/\./g, '').replace(/\,/g, '.');
            return parseFloat(x);
        },

        "numeric-comma-asc": function (a, b) {
            return ((a < b) ? -1 : ((a > b) ? 1 : 0));
        },

        "numeric-comma-desc": function (a, b) {
            return ((a < b) ? 1 : ((a > b) ? -1 : 0));
        }
    });


    // Se configura por defecto el datatable para que haga caso a la llamada al webmethod ...
    $.extend($.fn.dataTable.defaults, {
        "ajax": {
            "type": "post",
            "contentType": "application/json; charset=utf-8",
            "dataType": "json",
            "dataSrc": function (json) {
                return json.d.data;
            }
        }
        //"processing": true,
    });

    /*Traducción datepicker*/
    if (idioma == 0) {
        $.extend(true, $.fn.datepicker.defaults, { language: 'es', weekStart: 8, format: 'dd/mm/yyyy' });
    }
    else {
        $.extend(true, $.fn.datepicker.defaults, { language: 'eu', weekStart: 8, format: 'yyyy/mm/dd' });
    }

    var tradu = "";
    if (idioma == 0) {
        tradu = 'plugins/DataTables-1.10.9/i18n/Spanish.txt'
    }
    else {
        tradu = 'plugins/DataTables-1.10.9/i18n/Basque.txt'
    }
    $.ajax({
        dataType: 'json',
        url: url_recursos_lte + tradu,
        success: function (json) {
            $.extend(true, jQuery.fn.dataTable.defaults.oLanguage, json);

        },
        error: function () {
            // Error occurred loading language file, continue on as best we can
            //_fnInitialise( oSettings );
        }
    });

    //Por defecto carga la portada
    CargarPortada();
    

    $("li[id^='menu-']").click(function (e) {
        var docmenu = "";
        var tipousu = "";
        var id = "";

        id = this.id;
        docmenu = $(this).text();

        if (docmenu == "Jasotakoa") {

            docmenu = "Recibida";
        }
        else if (docmenu == "Emandakoa") {

            docmenu = "Entregada";

        }
        
        switch (id) {
            case "menu-portada":
                
                $("#tituloDoc").text($.Literales["50166"]);
                var divLoad = div_loading_ret();
                $('#content').hide();
                $('#cabcontent').hide();
                $('#maincontentgen').html(divLoad);
                $('#maincontentgen').load("portada.aspx", $.extend({}, { prand: parURLAle() }, {}), function () {
                    $('#maincontentgen').show("fast");
                    //cerrarMenu();
                });
                
                break;
            case "menu-expedientes":
                CargarPortada();
                break;

        }


    });

    $(".small-box").click(function (e) {
        //se cargará en la parte derecha cuando el id contenga "menu-"
        if ($(this).attr("id").indexOf("menu-") > -1) {
            var divLoad = div_loading_ret();
            $('#content').html(divLoad);
            $('#content').load($(this).attr("id").split("-")[1] + ".aspx", $.extend({}, { prand: parURLAle() }, { opcion: '' }), function () {
            });
        }
    });

    // override jquery validate plugin defaults
    $.validator.setDefaults({
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });


    // Validar fecha
    jQuery.validator.addMethod("fecha_validar", function (value, element) {
        // se valida que sea correcto el formato de la fecha
        return isValidDate(value);
    }, $.Literales["50146"]);

    // Controlar el resize de los datatable de tipo responsive 
    $(window).resize(function () {
        $($.fn.dataTable.tables(true)).DataTable().responsive.recalc();
    });


});