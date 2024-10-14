

$(document).on("allLoaded", function () {
   
    $("#btnFinalizar").click(function (e) {
       
        var redireccion=false;
        e1 = $('#E1').val();

        e2 = $("#RADIOE2SI")[0].checked;// $('input:radio[name=E2]').val() == 1; RADIOE2SI
        e21 = $('#E21').val();

        e3 = $("#RADIOE3SI")[0].checked;//$('input:radio[name=E3]').val() == 1;
        e31 = $('#E31').val();

        e4 = $("#RADIOE4SI")[0].checked;//$('input:radio[name=E4]').val() == 1;
        e411 = $('#E411').val();
        e412 = $('#E412').val();
        e421 = $('#E421').val();
        e422 = $('#E422').val();

        e5 = $("#RADIOE5SI")[0].checked;//$('input:radio[name=E5]').val() == 1;
        e511 = $('#E511').val();
        e512 = $('#E512').val();
        e521 = $('#E521').val();
        e522 = $('#E522').val();


        e6 = $("#RADIOE6SI")[0].checked;//$('input:radio[name=E6]').val() == 1;
        e61 = $('#E61').val();

        e7 = $("#RADIOE7SI")[0].checked;//$('input:radio[name=E7]').val() == 1;
        e71 = $('#E71').val();

        e81 = $('input:checkbox[name=E81]').prop('checked') + ""
        e82 = $('input:checkbox[name=E82]').prop('checked') + ""
        e83 = $('input:checkbox[name=E83]').prop('checked') + ""
        e84 = $('input:checkbox[name=E84]').prop('checked') + ""
        e85 = $('input:checkbox[name=E85]').prop('checked') + ""
        e86 = $('input:checkbox[name=E86]').prop('checked') + ""
        e87 = $('input:checkbox[name=E87]').prop('checked') + ""
        e88 = $('input:checkbox[name=E88]').prop('checked') + ""
        e89 = $('input:checkbox[name=E89]').prop('checked') + ""
        e810 = $('input:checkbox[name=E810]').prop('checked') + ""

        e9 = $('#E9').val();

        e101 = $('input:checkbox[name=E101]').prop('checked') + ""
        e102 = $('input:checkbox[name=E102]').prop('checked') + ""
        e103 = $('input:checkbox[name=E103]').prop('checked') + ""
        e104 = $('input:checkbox[name=E104]').prop('checked') + ""

        var data = {
            "e1": e1, "e2": e2, "e21": e21, "e3": e3, "e31": e31,
            "e4": e4, "e411": e411, "e412": e412, "e421": e421, "e422": e422,
            "e5": e5, "e511": e511, "e512": e512, "e521": e521, "e522": e522,
            "e6": e6, "e61": e61,
            "e7": e7, "e71": e71,
            "e81": e81, "e82": e82, "e83": e83, "e84": e84, "e85": e85, "e86": e86, "e87": e87, "e88": e88, "e89": e89, "e810": e810,
            "e9": e9,
            "e101": e101, "e102": e102, "e103": e103, "e104": e104
        };
        $.ajax({
            url: location.protocol + "//" + location.host + location.pathname + "/setMainValuesICA2",
            type: "post",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                redireccion=true
                $('#myModal').modal({ backdrop: 'static', keyboard: false });

                successFn = function (response) {
                    if (response.resultado == 1 || response.resultado == 2) {
                        location = "alta_fin.aspx";
                    }
                    else {
                        location = "error.aspx";
                    }
                };

                finallyFn = function (response) {
                    $('#myModal').modal('hide');
                };

                requestWS({ wsMethod: "/finalizeGuide", data: "", "successFn": successFn, "errorFn": null, finallyFn: finallyFn });

            },
            error: function (response) {
                window.alert("Error en los datos");
                redireccion=false
            }
        });

        if (redireccion) {

          
        }
        return false;
    });
    $('#acuerdoICA').click(function () {
        if (!$(this).is(':checked')) {
            $("#Finalizar").prop('disabled', false);

           
        } else {
            $("#Finalizar").prop('disabled', true);

            
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




