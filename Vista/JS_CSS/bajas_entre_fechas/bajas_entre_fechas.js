var tipo = "";


$(document).on("allLoaded", function () {

    $('.fecha_desde').datepicker(
        {
            autoclose: true,
            todayHighlight: true,
            weekStart: 1,
            format: selectedLanguageDateType,
            language: selectedLanguage
        });
    $('.fecha_desde').datepicker('setDate', new Date());

    $('.fecha_hasta').datepicker(
        {
            autoclose: true,
            todayHighlight: true,
            weekStart: 1,
            format: selectedLanguageDateType,
            language: selectedLanguage
        });
    $('.fecha_hasta').datepicker('setDate', new Date());


});


function getTipoBaja() {
    var tipo = "3";
    if ($("input[id='s-option']:checked").val() == "on") {
        tipo = "1";
    }
    if ($("input[id='t-option']:checked").val() == "on") {
        tipo = "2";
    };
    return tipo;
}



function getAssociatedFileSub(tipo) {

    var fechaDesde = $("#fecha_desde").val();
    var fechaHasta = $("#fecha_hasta").val();
    var tipoBaja = getTipoBaja();

    fechaDesde = moment(fechaDesde, selectedLanguageMomentDateType).format(WSMomentDateType);
    fechaHasta = moment(fechaHasta, selectedLanguageMomentDateType).format(WSMomentDateType);
    data = { "tipobaja": tipoBaja, "tipo": tipo, "fechadesde": fechaDesde, "fechahasta": fechaHasta };
    getAssociatedFile(data);
}


var validationError = {
    validFechaDesdeMenorFechaHasta: literalesPage[52609],
};



$("#btnPDF").click(function () {
    tipo = "pdf";
    formValidate();
    $('#bajas_entre_fechas').valid();
    $('#bajas_entre_fechas').validate({});

});

$("#btnExcel").click(function () {
    tipo = "excel";
    formValidate();
    $('#bajas_entre_fechas').valid();
    $('#bajas_entre_fechas').validate({});

});


jQuery.validator.addMethod("validFechaDesdeMenorFechaHasta", function (value, element) {
    var fechaHasta = moment(value, selectedLanguageMomentDateType);
    var fechaDesde = moment($("#fecha_desde").val(), selectedLanguageMomentDateType);
    if (fechaDesde <= fechaHasta) {
        return true;
    }
    else {
        return false;
    }
}, validationError.validFechaDesdeMenorFechaHasta);


function formValidate() {

    $("#bajas_entre_fechas").validate({
        errorClass: 'validationerror',
        rules: {
            fecha_hasta:
            {
                validFechaDesdeMenorFechaHasta: true
            }
        },
        errorLabelContainer: "#messageBox",
        wrapper: "li",
        messages: {
            fecha_hasta:
            {
                validFechaDesdeMenorFechaHasta: validationError.validFechaDesdeMenorFechaHasta
            }
        },
        submitHandler: function (form) {
            getAssociatedFileSub(tipo);
        }
    });
}