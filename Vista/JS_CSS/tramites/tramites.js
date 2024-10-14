var table;
var fecha_desde = "";
var fecha_hasta = "";

$(document).on("allLoaded", function () {

    $('#fecha_desde_group').datepicker(
        {
            autoclose: true,
            todayHighlight: true,
            weekStart: 1,
            format: selectedLanguageDateType,
            language: selectedLanguage
        });
    //$('#fecha_desde_group').datepicker('setDate', new Date());

    $('#fecha_hasta_group').datepicker(
        {
            autoclose: true,
            todayHighlight: true,
            weekStart: 1,
            format: selectedLanguageDateType,
            language: selectedLanguage
        });
    //$('#fecha_hasta_group').datepicker('setDate', new Date());


    getHistProcedures();
})




function loadDataTable(dataSet) {

    if (table != null) {
        //Eliminar la tabla y los eventos de click.
        table.destroy();
        //$('#tramHistTable').off('click');
        $('#tramHistTable').off();
        $('#tramHistTable').children().off();
        //Elimino filtros
        //$.fn.dataTableExt.afnFiltering.splice(0, 1);
        //$.fn.dataTableExt.afnFiltering.splice(1, 1);
    }

    $.fn.dataTable.moment(selectedLanguageMomentDateType2);
    
    table = $('#tramHistTable').DataTable({
        "data": dataSet,
        //"pageLength": 4,
        //"ordering": true,
        "searching": true,
        "paging": true,
        "info": true,
        //"lengthChange": false,
        "autoWidth": false,
        "deferRender": true,
        "columns": [
            { "data": "fecha", "title": literalesPage[51152] },
            { "data": "descripcion", "title": literalesPage[51153] },
            //{ "data": "identificador", "title": literalesPage[51154] },
            {
                "data": null,
                "orderable": false,
                "render": function (data, type, full, meta) {
                    buttons = printControl(data.imprimir);
                    return buttons;
                }
            },
            {
                "data": "codigotramite",
                "visible": false,
            }
        ],
        "order": [],
        "language": {
            "url": datatableLanguageUrl
        }
    });

    $('#tramHistTable').on('click', 'button', function (e) {
        var print = e.target.id;
        var row = table.row($(this).parents('tr')).data();
        data = { "row": row, "print": print };
        getAssociatedFile(data);
    });
}

function printControl(data) {
    html = "";
    icon_values = {
            print: "fa fa-print",
            xls: "fa fa-file-excel-o",
            pdf: "fa fa-file-pdf-o"
    };
    icon = icon_values["print"];
    $.each(data, function (index, value) {
        if (value.icon in icon_values) {
            icon = icon_values[value.icon];
        }
        if (value.color != null || value.color != "") {
            color = 'style = "background: ' + value.color + ';"';
        }
        html += '<button id="' + index + '" class="btn btn-default icono" ' + color + ' title="' + value.desc + '">' +
                  '<i id="' + index + '" class="' + icon + '"></i></button>';
    });
    return html;
};

function getHistProcedures() {
    $('#myModal').modal({ backdrop: 'static', keyboard: false });
    fecha_desde = $('#fecha_desde').val();
    if (fecha_desde != "") {
        fecha_desde = moment(fecha_desde, selectedLanguageMomentDateType).format(WSMomentDateType);
    }
    fecha_hasta = $('#fecha_hasta').val();
    if (fecha_hasta != "") {
        fecha_hasta = moment(fecha_hasta, selectedLanguageMomentDateType).format(WSMomentDateType);
    }
    tipoTramite = $('#tipoTramite').val();

    data = { "tipotramite": tipoTramite, "fechadesde": fecha_desde, "fechahasta": fecha_hasta };
    successFn = function (response) {
        if ((fecha_hasta == "") & (fecha_desde == "") & (tipoTramite == "")) {
            $('#etiqueta_ultimos').show();
        } else {
            $('#etiqueta_ultimos').hide();
        };
        loadDataTable(response.lista);
        $('#myModal').modal('hide');
    };
    errorFn = null;
    requestWS({ wsMethod: "/getHistProcedures", data: data, "successFn": successFn, "errorFn": errorFn });
}

function limpiarFiltros()
{
    $('#fecha_desde').val("");
    $('#fecha_hasta').val("");
    $("#tipoTramite")[0].selectedIndex = 0;

    getHistProcedures();
}


$("#filtrar").click(function () {
    formValidate();
    $('#tramites').valid();
    $('#tramites').validate({});
});

var validationError = {
    validFechaDesdeMenorFechaHasta: "La fecha hasta debe ser mayor o igual a la fecha desde",
};

jQuery.validator.addMethod("validFechaDesdeMenorFechaHasta", function (value, element) {
    if ($("#fecha_desde").val() == "" && value == ""){
        return true;
    }
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

    $("#tramites").validate({
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
            getHistProcedures();
            /*
            fecha_desde = $('#fecha_desde').val();
            fecha_hasta = $('#fecha_hasta').val();
            var tipoTramite = $('#tipoTramite').val();
            
            table.columns(3).search(tipoTramite).draw();

            filterByDate(0, fecha_desde, fecha_hasta); // We call our filter function

            $('#tramHistTable').dataTable().fnDraw(); // Manually redraw the table after
            */
        }
    });
}

/*

var normalizeDate = function (dateString) {

    var datos = dateString.split("-");

    if (datos.length == 3) {

        var ano = datos[2];
        var mes = datos[1];
        var dia = datos[0];

        var normalized = ano + '/' + mes + '/' + dia;
        return normalized;
    }
    else
    {
        return normalizeDate2(dateString);
    }
}


var normalizeDate2 = function (dateString) {

    var datos = dateString.split("/");
    var ano = datos[2];
    var mes = datos[1];
    var dia = datos[0];

    var normalized = ano + '/' + mes + '/' + dia;
    
    return normalized;
}


var filterByDate = function (column, startDate, endDate) {
    // Custom filter syntax requires pushing the new filter to the global filter array
    $.fn.dataTableExt.afnFiltering.push(
        function (oSettings, aData, iDataIndex) {
            var rowDate = normalizeDate(aData[column]),
             start = normalizeDate(startDate),
             end = normalizeDate(endDate);

            // If our date from the row is between the start and end
            if (start <= rowDate && rowDate <= end) {
                return true;
            } else if (rowDate >= start && end === '' && start !== '') {
                return true;
            } else if (rowDate <= end && start === '' && end !== '') {
                return true;
            } else {
                return false;
            }
        }
    );
};*/
