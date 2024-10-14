// Boton Solicitar Permiso
$(document).on("allLoaded", function () {


    $('#alert-confirmacion-continuar').on('click', '.btn-Nook', function (e) {
        $("#alert-confirmacion-continuar").modal('hide');

    });
    $('#alert-confirmacion-continuar').on('click', '.btn-ok', function (e) {
        $("#alert-confirmacion-continuar").modal('hide');
        solicitarPermisoAutocrotalacion();

    });

    $("#btnSolicitarPermiso").click(function () {
        $("#msg-error").hide();
        $("#alert-confirmacion-continuar").modal('show');
        

    });

    function limpiarErrores() {
        $("#messageBox").html("");
    }


    function mostrarMsgRespuestaERROR(mensaje) {
        $(".solicitud-error .texto4").text(mensaje)
        $("#msg-error").show();
    }

    function solicitarPermisoAutocrotalacion() {
        //$.ajax({
        //    url: location.protocol + "//" + location.host + location.pathname + "/permisoAutocrotalacion",
        //    type: "post",
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    success: function (response) {
        //        response = JSON.parse(response.d);
        //        if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
        //            errorManagement(response, null);
        //        }
        //        else if (response.status == 200 && response.code == 200) {
        //            location = "solicitud_permiso_en_tramite.aspx";
        //        }
        //        else {
        //            mostrarMsgRespuestaERROR(response.mensaje);
        //        }
        //    },
        //    error: function (response) {
        //        errorManagement(response, null);
        //        //mostrarMsgRespuesta(ERROR DEFINIDO EN LITERALES);
        //    }
        //});


        successFn = function (response) {
            location = "solicitud_permiso_en_tramite.aspx";
        };
        
        errorFn = function(response){
            mostrarMsgRespuestaERROR(response.mensaje);
        };

        requestWS({ wsMethod: "/permisoAutocrotalacion", data: "", "successFn": successFn, "errorFn": errorFn });
    }

});
