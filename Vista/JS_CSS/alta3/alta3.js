
var finalizandoguia = 0;
$(document).on("allLoaded", function () {
    if ($("#acuerdoICA").is(':visible')) {
        if (!$("#acuerdoICA").is(':checked')) {
            $("#btnFinalizar").hide();
            $("#btnRellenarICA").show();
        }else {
            $("#btnFinalizar").show();
            $("#btnRellenarICA").hide();
        }

    } else {
        $("#btnFinalizar").show();
        $("#btnRellenarICA").hide();

    }
    $("#btnFinalizar").click(function (e) {
        //$.ajax({
        //    url: location.protocol + "//" + location.host + location.pathname + "/finalizeGuide",
        //    type: "post",
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    success: function (response) {
        //        response = JSON.parse(response.d);
        //        if (response.resultado == 1 || response.resultado == 2) {
        //            location = "alta_fin.aspx";
        //        }
        //        else {
        //            location = "error.aspx";
        //        }
        //    },
        //    error: function (response) {
        //        errorManagement(response, null);
        //    }
        //});
       
        if (finalizandoguia == 0) {
            finalizandoguia = 1;
            $('#myModal').modal({ backdrop: 'static', keyboard: false });

            successFn = function (response) {
                if (response.resultado == 1 || response.resultado == 2) {
                   // 
                   
                }
                else {
                    location = "error.aspx";
                }
            };

            finallyFn = function (response) {
                $('#myModal').modal('hide');
                finalizandoguia = 0;
            };

            requestWS({ wsMethod: "/finalizeGuide", data: "", "successFn": successFn, "errorFn": null, finallyFn: finallyFn });
        };

        location = "alta_fin.aspx";
        return false;

        //asincrona
        //$.ajax({
        //    async: true,
        //    cache: false,
        //    dataType: "json",
        //    type: 'POST',
        //    url: location.protocol + "//" + location.host + location.pathname + "/finalizeGuide",
        //    data: "",//"nombre=" + nombre,
        //    success: function (respuesta) {
                
        //    },
        //    error: function (objXMLHttpRequest) { }
        //});




    });
    $('#acuerdoICA').click(function () {
        if (!$(this).is(':checked')) {
            $("#btnFinalizar").hide();
            $("#btnRellenarICA").show();
           
        } else {
            $("#btnFinalizar").show();
            $("#btnRellenarICA").hide();
            
        }
    });
    function CancelGuide() {
        $.ajax({
            url: location.protocol + "//" + location.host + location.pathname + "/CancelGuide",
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });       
    }

    $("#btnCancelar").click(function (e) {
        CancelGuide();
    });
    
});




