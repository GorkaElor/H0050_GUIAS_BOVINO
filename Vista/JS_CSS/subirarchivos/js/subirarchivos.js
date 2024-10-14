function capaErrorAjax(capapadre, ok, texto, callback) {
    
    if (!ok) {
        var capa = '<div id="capaErrorAjax" class="alert alert-danger alert-dismissable mt-20 mb-20">';
    }
    else {
        var capa = '<div id="capaErrorAjax" class="alert alert-success alert-dismissable mt-20 mb-20">';
    }
    capa = capa + '<i class="fa fa-ban"></i>';
    capa = capa + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>';
    capa = capa + '<b>ATENCIÓN   </b>  ' + texto + '';
    capa = capa + '</div>';

    // se oculta la anterior
    $("#capaErrorAjax").remove();
    jQuery(capapadre).append(capa);
    jQuery("#capaErrorAjax").show("fast", function () {
        $('html, body').animate({ scrollTop: $("#capaErrorAjax").offset().top }, 'fast', function () {
            if ((callback != "") && (callback != undefined)) {
                // ejecutar el callback
                callback();
                // eval(callback);
            }
        });
    });
}


$(function () {

    /*Volver*/
    $("#btn-volver").on("click", function () {
        
        salirpagina();
    });


    function salirpagina() {


        var fase = $("#fase").val();
        var doc = $("#doc").val();
        var tramite = $("#tramite").val();
        var validez = $("#validez").val();
        var observaciones = $("#observaciones").val();

        var expid = $("#expid").val();
        var efasid = $("#efasid").val();
        var fasid = $("#fasid").val();
        var traid = $("#traid").val();
        var docid = $("#docid").val();
        var eftdocid = $("#eftdocid").val();

        $("div[id^='acc-display']").remove();
        // Se inserta un div donde se cargará la edición
        $("<div id='acc-display'></div>").insertAfter("#box-docu-actions");
        var divLoad = div_loading_ret();
        $('#acc-display').html(divLoad);

        $('#acc-display').load("documarchivos.aspx", { observaciones: observaciones, validez: validez, tramite: tramite, fase: fase, doc: doc, desde: "entregada", expid: expid, fasid: fasid, efasid: efasid, traid: traid, docid: docid, eftdocid: eftdocid }), function () {
            $('#acc-display').show("fast");
        };

    };


    $("#archivo").fileinput({
        showPreview: false,
        allowedFileExtensions: ["pdf"],
        elErrorContainer: "#errorBlock",
        showRemove: true,
        showUpload: false,
        uploadAsync: true,
        uploadUrl: "../vista/upload.ashx",
        minFileCount: 1,
        maxFileCount: 1,
        language: 'es'
    }).on("filebatchselected", function (event, files) {

        $("#capaErrorAjax").hide();

        //$("#archivo").fileinput("upload");
        
        var borrar = $("#borrararch").val();
        // Si se va a borrar el archivo anterior, mensaje de aviso
        if (borrar == 1) {
            var arrVerBotones = [$.Literales["50075"], function () {
                $("#archivo").fileinput("upload");
            }];
            creaMsgBox("confirm-generico", $.Literales["50080"], $.Literales["50126"], $.Literales["50076"], null, arrVerBotones);


        } else {
            $("#archivo").fileinput("upload");
        };

    }).on('fileuploaded', function (event, data, previewId, index) {
        

        $('#confirm-generico').modal('hide');

        response = data.response, reader = data.reader;

        /* -----------------------------------------------------------------------
        ---------------------------------------------------------------------------*/
        var fname = 'box-subirarchivo';

        var fase = $("#fase").val();
        var doc = $("#doc").val();
        var expid = $("#expid").val();
        var efasid = $("#efasid").val();
        var traid = $("#traid").val();
        var docid = $("#docid").val();
        var eftdocid = $("#eftdocid").val();

        // Recoge los errores y alertas en el negocio
        var valRes = { "errores": [], "alertas": [] };        

        var miAjax = $.ikt_ajax_obj.inicializar();
        miAjax.pagina = "subirarchivos.aspx/alta_archivo";


        // Pasarle los datos seleccionados de la ventana
        miAjax.add_parametro("ExpID", $("#expid").val());
        miAjax.add_parametro("EFasID", $("#efasid").val());
        miAjax.add_parametro("TraID", $("#traid").val());
        miAjax.add_parametro("DocID", $("#docid").val());
        miAjax.add_parametro("EFTDocID", $("#eftdocid").val());
        miAjax.add_parametro("Archivo", $("#archivo").fileinput("getFileStack")[0].name);
        miAjax.add_parametro("ArchivoNew", data.response.filename);

        $("#archivo").find("i").addClass("fa-spin");
        $("#archivo").prop("disabled", true);
        $("#archivo").find("span").text("Comprobando el documento de solicitud");    // Guardando


        miAjax.correcto = function (objeto) {
            
            var data = JSON.parse(objeto.responseText).d;
            
            if (data.errores == null && data.alertas == null) {
                
                
                // Si no hay errores volver a la ventana anterior
                salirpagina();                
                

            } else {
                // Se cambia el icono del botón y se habilita
                $("#archivo").find("i").removeClass("fa-spin");
                $("#archivo").prop("disabled", false);
                $("#archivo").find("span").text("Enviar Solicitud");    // Guardando

                
                valRes.errores = data.errores != null ? data.errores : valRes.errores;
                valRes.alertas = data.alertas != null ? data.alertas : valRes.alertas;

                var mierror = "<b>Revise el formulario, tiene campos erróneos</b><br>";

                $.each(valRes.errores, function (index, value) {
                    mierror = mierror + "<br>" + value;
                });
                capaErrorAjax('#' + fname, false, mierror, function () {
                    // calback
                });

            }
        };
        miAjax.error = function (objeto) {
            // Se cambia el icono del botón y se habilita                
            $("#archivo").find("i").removeClass("fa-spin");
            $("#archivo").prop("disabled", false);
            $("#archivo").find("span").text("Enviar Solicitud");    // Guardando

            alert("Error al guardar el archivo"); //'No se ha guardado la información'; 
        };

        miAjax.enviar();
    });


});
    