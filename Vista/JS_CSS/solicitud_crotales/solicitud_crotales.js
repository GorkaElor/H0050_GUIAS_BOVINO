$(document).on("allLoaded", function () {

    $('.date').datepicker(
        {
            autoclose: true,
            todayHighlight: true,
            weekStart: 1,
            format: selectedLanguageDateType,
            language: selectedLanguage
        });
    $('.date').datepicker('setDate', new Date());


    $("#btnSolicitarCrotales").click(function () {
        $("#msg-error").hide();
        $("#msg-ok").hide();
        formValidate();
        $('.solicitud-crotales-form').valid();
        $('.solicitud-crotales-form').validate({});
        //return false;
    });


    $("#incluir_tenazas").change(function () {
        if ($("#num_crotales").hasClass("validationerror")) {
            formValidate();
            $('.solicitud-crotales-form').valid();
        }
        
    });


    // Mensajes de error al validar el formulario.
    var validationError = {
        numCrotalesRequiredErrorMsg: literalesPage[52013],
        multipleOf10ErrorMsg: literalesPage[52014],
        numCrotSuperiorACienMsg: literalesPage[52015],
        soloTenazas: literalesPage[52016]
        //, numFemalesErrorMsg: "El número de crotales solicitados es mayor que num hembras"
    };

    function formValidate() {
        // Validarlos datos del formulario
        $(".solicitud-crotales-form").validate({
            errorClass: 'validationerror',
            rules: {
                num_crotales: {
                    required: true,
                    max: 100,
                    //minlength: 2,
                    multiples: 10, // esta regla la creamos nosotros para validar que es multiplo de 10
                    soloTenazas: true
                    //numFemalesRule: numFemales // esta regla la creamos nosotros para validar que es menor o igual que el numero de hembras
                },
                fecha_solicitud: {
                    required: true
                }
         
            },
            errorLabelContainer: "#messageBox",
            wrapper: "li",
            messages: {
                fecha_solicitud: {
                    required: validationError.numCrotalesRequiredErrorMsg
                },
                num_crotales: {
                    max: validationError.numCrotSuperiorACienMsg,
                    required: validationError.numCrotalesRequiredErrorMsg,
                    minlength: validationError.multipleOf10ErrorMsg,
                    soloTenazas: validationError.soloTenazas
                    //numFemales: validationError.numFemalesErrorMsg
                }
            },
            submitHandler: function (form) {
                solicitarCrotales();
            }
        });
    }


    // Esta regla comprueba que cuando el campo de texto es 0 o vacio el checkbox de incluir tenazas debe de estar habilitado
    jQuery.validator.addMethod("soloTenazas", function (value, element) {
        //return this.optional(element) || (parseInt(value, 10) % param == 0)
        //return parseInt(value, 10) == 0;
        if (parseInt(value, 10) == 0) {
            return $('#incluir_tenazas').is(':checked');
        } else return true;
    }, validationError.soloTenazas);


    // Esta regla comprueba que el valor introducido es multiplo de "param"
    jQuery.validator.addMethod("multiples", function (value, element, param) {
        //if ($('#incluir_tenazas').is(':checked')) {
        //    return true;
        //}
        //else { return this.optional(element) || (parseInt(value, 10) % param == 0) }

        return this.optional(element) || (parseInt(value, 10) % param == 0)
        
    }, validationError.multipleOf10ErrorMsg);



    // Esta regla comprueba que el valor introducido es menor que el numero de hembras (numFemales)
    //jQuery.validator.addMethod("numFemalesRule", function (value, element) {
    //    return this.optional(element) || (parseInt(value, 10) <= numFemales)
    //}, validationError.numFemalesErrorMsg);

    function mostrarMsgRespuestaOK(mensaje) {
        $(".texto4ok").empty();
        $(".texto4ok").append(mensaje);
        $("#msg-ok").show();
        $("#msg-error").hide();
        $("form.solicitud-crotales-form").hide();
    }

    function mostrarMsgRespuestaERROR(mensaje) {
        $(".texto4error").empty();
        $(".texto4error").append(mensaje);
        $("#msg-error").show();
        $("#msg-ok").hide();
    }


    function solicitarCrotales() {
        var fecha = $("#fecha_solicitud").val();
        fecha = moment(fecha, selectedLanguageMomentDateType).format(WSMomentDateType);
        var data = {
            "fecha": fecha, "numCrotales": $('#num_crotales').val(), "incluirTenazas": $('#incluir_tenazas').is(':checked') ? "true" : "false"
        };

        successFn = function (response) {
            mostrarMsgRespuestaOK(response.message);
        };
        errorFn = function (response) {
            mostrarMsgRespuestaERROR(response.message);
        };
        requestWS({ wsMethod: "/solicitarCrotales", data: data, "successFn": successFn, "errorFn": errorFn });
       
    }
});