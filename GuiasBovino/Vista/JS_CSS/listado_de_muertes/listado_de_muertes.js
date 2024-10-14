var muertesTable = null;


$(document).on("allLoaded", function () {

    $('#myModal').modal({ backdrop: 'static', keyboard: false });
    getListadoMuertes();


})

function getListadoMuertes() {

    successFn = function (response) {
        loadDataTable(response.lista);
    };

    controlledErrorFn = function (response) {
        $('#myModal').modal('hide');
    }

    requestWS({ wsMethod: "/getListadoMuertes", data: "", "successFn": successFn, "errorFn": null, controlledErrorFn: controlledErrorFn });
}


function loadDataTable(dataSet) {
    if (muertesTable != null) {
        //Eliminar la tabla y los eventos de click.
        muertesTable.destroy();
        //$('#table-muertes').off('click');
        $('#table-muertes').off();
        $('#table-muertes').children().off();
    }

    $.fn.dataTable.moment(selectedLanguageMomentDateType2);
    
    muertesTable = $('#table-muertes').on('init.dt', function () {
        $('#myModal').modal('hide');
    }).DataTable({
        "data": dataSet,
        //"pageLength": 4,
        "ordering": true,
        "searching": true,
        "paging": true,
        "info": true,
        //"lengthChange": false,
        "autoWidth": false,
        "deferRender": true,
        "columns": [
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "crotal",
                "title": literalesPage[53005],
                "orderable": true,
            },
            {
                "data": "nombre",
                "orderable": true,
                "title": literalesPage[53006]
            },
            {
                "data": "fechamuerte",
                "title": literalesPage[53007],
                "orderable": true
            }, {
                "data": "fechanotificacion",
                "title": literalesPage[53008],
                "orderable": true
            }
        ],
        "order": [],
        "language": {
            "url": datatableLanguageUrl
        }
    });


    // Add event listener for opening and closing details
    $('#table-muertes tbody').delegate('td.details-control', 'click', function () {
        var tr = $(this).closest('tr');
        var row = muertesTable.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            //row.child(format(row.data())).show();
            //tr.addClass('shown');
            getMuerteData(row, tr);
        }
    });
}


function getMuerteData(row, tr) {
    d = row.data();
    data = { "crotal": d.crotal };
    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/getMuerte",
    //    type: "post",
    //    data: JSON.stringify(data),
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        response = JSON.parse(response.d);
    //        if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
    //            errorManagement(response, null);
    //        }
    //        else {
    //            //console.log(response);
    //            formatList(response, row, tr, d.crotal);
    //        }
    //    },
    //    error: function (response) {
    //        errorManagement(response, null);
    //    }
    //});

    successFn = function (response) {
        //console.log(response);
        formatList(response, row, tr, d.crotal);
    };
    
    requestWS({ wsMethod: "/getMuerte", data: data, "successFn": successFn, "errorFn": null });
}

function formatList(data, row, tr, crotal) {
    var checked
    if (data.recogido == "true") {
        checked = "checked=checked"
    } else {
        checked=""
    }
    var html = '<div class="row">' +
   '<div class="col-xs-14">' +
   '<dl class="dl-horizontal">' +

   '<dt class="align-left">' + literalesPage[53003] + ':</dt>' +
   '<dd>' + isNull(data.observaciones) + '</dd>' +

   '</dl>' +
     '<dl class="dl-horizontal">' +

  // '<dt class="align-left">' + literalesPage[53783] + ':</dt>' +
   //'<dd> <input type="checkbox" class="" id="recogido" disabled="disabled"' + checked + '"></dd>' +

    '<dt> <input type="checkbox" class="" id="recogido" disabled="disabled"' + checked + '"></dt>' +
  '<dd class="align-left" style="font-weight: bold">' + literalesPage[53783] + '</dd>' +


   '</dl>' +
   '</div>' +
   '<div>' + getJustificante(data, crotal);
     
   '</div>';

    row.child(html).show();
    tr.addClass('shown');
}

function getAssociatedFileSub(crotal) {

    var data = { "crotal": crotal };
    getAssociatedFile(data);
}

function getJustificante(data, crotal)
{
    //console.log(data);
    if (data.justificante.toString().toLowerCase() == "false")
        return "";
    else
        return '<button id="ImprimirJustificanteMuerte" class="pull-right" onclick="getAssociatedFileSub(\'' + crotal + '\')"><i class="fa fa-print"></i>' + literalesPage[53004] + '</button>';
}