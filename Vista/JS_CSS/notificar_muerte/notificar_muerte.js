/*
var crotalList = {};
var crotalData = [];
var crotal = "";
*/

$(document).on("allLoaded", function () {

    $("#fecha_notificacion").val(moment(moment()).format(selectedLanguageMomentDateType));

    $('.date').datepicker({
        autoclose: true,
        todayHighlight: true,
        weekStart: 1,
        format: selectedLanguageDateType,
        language: selectedLanguage
    });

    $('.date').datepicker('setDate', new Date());

    $("#sendForm").click(function () {
        formValidate();
        $('#notificarMuerteForm').valid();
        $('#notificarMuerteForm').validate({});
    });

    typesObj = {
        1: {
            tableName: "tabla-muerte",
            divName: "muerteTable",
            table: null,
            input1: 'crotal_muerte',
            input2: 'nombre_muerte'
        }
    };

    $(typesObj[1].divName).hide();

    $('#crotal_muerte, #nombre_muerte').keyup(function (event) {
        var longitud1 = $('#crotal_muerte').val().length;
        var longitud2 = $('#nombre_muerte').val().length;

        if (longitud1 > 3 || longitud2 > 3) {

            singleResult = (event.keyCode === 8 ? false : true);

            getResesVivas($('#crotal_muerte').val(), $('#nombre_muerte').val(), 1, singleResult);
        }
        else {
            $("#muerteTable").hide();
        }
    });


    

});

// Mensajes de error al validar el formulario.
var validationError = {
    crotalRequired: literalesPage[52910],
    crotalLength: literalesPage[52911],
    nombreRequired: literalesPage[52912],
    nombreMaxLength: literalesPage[52913],
    validDate: literalesPage[52914],
    observacionesLength:literalesPage[52915]
};

function formValidate() {
    
    $("#notificarMuerteForm").validate({
        errorClass: 'validationerror',
        rules: {
            crotal_muerte: {
                required: true,
                rangelength: [0, 14]
            },
            nombre_muerte: {
                //required: true,
                rangelength: [0, 50]
            },
            fecha_muerte: {
                validDate: true
            },
            observaciones: {
                rangelength: [0, 150]
            }

        },
        errorLabelContainer: "#messageBox",
        wrapper: "li",
        messages: {
            crotal_muerte: {
                required: validationError.crotalRequired,
                rangelength: validationError.crotalLength
            },
            nombre_muerte: {
                //required: validationError.nombreRequired,
                rangelength: validationError.nombreMaxLength
            },
            fecha_muerte: {
                required: validationError.maxDateRange
            },
            observaciones: {
                rangelength: validationError.observacionesLength
            }
        },
        submitHandler: function (form) {
            sendDieNotification();
        }
    });

}

jQuery.validator.addMethod("validDate", function (value, element) {
    var fecha = moment(value, selectedLanguageMomentDateType);
    if (moment(fecha).diff(moment(), 'days') < 1) {
        return true;
    }
    else {
        return false;
    }
}, validationError.validDate);

function sendDieNotification() {

    fechaNotificacion = moment($("#fecha_notificacion").val(), selectedLanguageMomentDateType).format(WSMomentDateType);
    fechaMuerte = moment($("#fecha_muerte").val(), selectedLanguageMomentDateType).format(WSMomentDateType);

    
    
        var data = {
            "crotal": $("#crotal_muerte").val(),
            "fechamuerte": fechaMuerte,
            "fechanotificacion": fechaNotificacion,
            "nombre": $("#nombre_muerte").val(),
            "observaciones": $("#observaciones").val(),
            "recogido": $('#recogidaGanadoBiltzen').is(':checked')
        };

        successFn = function (response) {
            mostrarMsgRespuestaOK(response.message);
        };
        errorFn = null;

        finallyFn = function (response) {
            $('#myModal').modal('hide');
        };

        $('#myModal').modal({ backdrop: 'static', keyboard: false });

        requestWS({ wsMethod: "/notificar_muerte", data: data, "successFn": successFn, "errorFn": errorFn, "finallyFn": finallyFn });
}

function cargarTabla1(dataSet, type, singleResult) {
    if (dataSet.length == 1 && singleResult) {
        //Lo cargamos automáticamente
        input1 = typesObj[type].input1;
        input2 = typesObj[type].input2;
        $("#" + input1).val(dataSet[0].crotal);
        $("#" + input2).val(dataSet[0].nombre);

        $("#" + divName).hide();
    }
    else {
        tableName = typesObj[type].tableName;
        divName = typesObj[type].divName;

        if (typesObj[type].table != null) {
            //Eliminar la tabla y los eventos de click.
            table1 = typesObj[type].table;
            table1.destroy();
           // $('#' + tableName + ' tbody').off('click');
            $('#' + tableName).off();
            $('#' + tableName).children().off();
            typesObj[type].table = null;
        }

        table1 = $('#' + tableName).DataTable({
            "data": dataSet,
            //"pageLength": 4,
            "ordering": true,
            "searching": false,
            "paging": false,
            "info": true,
            //"lengthChange": false,
            "autoWidth": false,
            "deferRender": true,
            "columns": [
                {
                    "data": "crotal",
                    "title": literalesPage[52916],
                    "orderable": true,
                },
                {
                    "data": "nombre",
                    "orderable": true,
                    "title": literalesPage[52917]
                }
            ],
            "order": [],
            "language": {
                "url": datatableLanguageUrl
            }
        });


        $("#" + divName).show();
    }

    typesObj[type].table = table1;

    tableRowClick(typesObj[type]);
}

function tableRowClick(typeElem) {
    tablename = typeElem.tableName;

    $('#' + tableName + ' tbody').on('click', 'tr',
        (function (elem) {
            return function (event) {   // returns a function that is bound to the "tag" parameter value
                divName = elem.divName;
                table1 = elem.table;
                input1 = elem.input1;
                input2 = elem.input2;
                if ($(this).hasClass('shown')) {
                    $(this).removeClass('shown');
                }
                else {
                    table1.$('tr.selected').removeClass('shown');
                    $(this).addClass('shown');
                    var data = table1.row($(this)).data();
                    $("#" + input1).val(data.crotal);
                    $("#" + input2).val(data.nombre);

                    $("#" + divName).hide();
                }
            }
        })(typeElem));
}

function getResesVivas(crotal, nombre, type, singleResult) {
    var data = {
        "crotal": crotal,
        "nombre": nombre
    };

    successFn = function (response) {
        cargarTabla1(response.lista, type, singleResult);
    };
    errorFn = null;
    requestWS({ wsMethod: "/ConsultaResesVivas", data: data, "successFn": successFn, "errorFn": errorFn });
}

function mostrarMsgRespuestaOK(mensaje) {
    $(".texto4ok").empty();
    $(".texto4ok").append(mensaje);
    $("#msg-ok").show();
    $("#notificarMuerteForm").hide();
}