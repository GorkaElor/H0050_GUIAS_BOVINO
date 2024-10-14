var nacimientosTable = null;


$(document).on("allLoaded", function () {
    getListadoNacimientos();
})


function getListadoNacimientos() {
    
    successFn = function (response) {
        loadDataTable(response.lista);
    };
    errorFn = null;
    requestWS({ wsMethod: "/getListadoNacimientos", data: "", "successFn": successFn, "errorFn": errorFn });
}


function loadDataTable(dataSet) {
    if (nacimientosTable != null) {
        //Eliminar la tabla y los eventos de click.
        crotalesDisponiblesTable.destroy();
        //$('#table-nacimientos').off('click');
        $('#table-nacimientos').off();
        $('#table-nacimientos').children().off();
    }

    $.fn.dataTable.moment(selectedLanguageMomentDateType2);
    
    nacimientosTable = $('#table-nacimientos').DataTable({
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
                "title": literalesPage[53103],
                "orderable": true,
                "render": function (data, type, full, meta) {
                    var html = "";
                    if (full.colorcrotal != "") {
                        html = '<strong style="color: ' + full.colorcrotal + ';">' + full.crotal + '</strong>';
                    } else {
                        html = full.crotal;
                    }


                    return html;
                }
            },
            {
                "data": "nombre",
                "orderable": true,
                "title": literalesPage[53104]
            }, 
            {
                "title": literalesPage[53105],
                "orderable": true,
                "data": "fechanacimiento"
                
            },
            {
                "data": "razdes",
                "orderable": true,
                "title": literalesPage[53106]
            
            },
            {
                "data": "sexdes",
                "orderable": true,
                "title": literalesPage[53107]
            },
            {
                "data": null,
                "orderable": true,
                "title": literalesPage[52106],
                "render": function (data, type, full, meta) {
                    //”0”(Pendiente), “10”(Validado), ”2”(Anulado) o “20”(Error).
                    var html = "";
                    if (data.estado == "0")
                        html = "<span class='text-center texto_pendiente'>" + literalesPage[53108] + "</span>";
                    else if (data.estado == "10")
                        html = "<span class='text-center texto_validado'>" + literalesPage[53109] + "</span>";
                    else if (data.estado == "2")
                        html = "<span class='text-center texto_anulado'>" + literalesPage[53110] + "</span>";
                    else if (data.estado == "20")
                        html = "<span class='text-center texto_error'>" + literalesPage[53111] + "</span>";
                    return html;
                }
            }
        ],
        "order": [],
        "language": {
            "url": datatableLanguageUrl
        }
    });


    // Add event listener for opening and closing details
    $('#table-nacimientos tbody').delegate('td.details-control', 'click', function () {
        var tr = $(this).closest('tr');
        var row = nacimientosTable.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            //row.child(format(row.data())).show();
            //tr.addClass('shown');
            getNacimientoData(row, tr);
        }
    });
}

function getNacimientoData(row, tr) {
    d = row.data();
    data = { "crotal": d.crotal };

    successFn = function (response) {
        formatList(response, row, tr);
    };
    errorFn = null;
    requestWS({ wsMethod: "/getNacimiento", data: data, "successFn": successFn, "errorFn": errorFn });
}


/* Formatting function for row details - modify as you need */
function formatList(data, row, tr) {
   
    data2 = row.data();    

    var html = '<div class="col-md-12"><dl class="lista_datos_nacimientos"><dt>' + literalesPage[53112] + ':</dt><dd>' + isNull(data.peso) +
            '</dd><dt>' + literalesPage[53113] + ':</dt><dd>' + isNull(data.aptdes) + '</dd><dt>' + literalesPage[53114] + ':</dt><dd>' + isNull(data.fpdes) +
            '</dd><dt>' + literalesPage[53115] + ':</dt><dd>' + isNull(data.madre) +
            '</dd><dt>' + literalesPage[53116] + ':</dt><dd>' + isNull(data.madreet) +
            '</dd><dt>' + literalesPage[53117] + ':</dt><dd>' + isNull(data.padre) +
            '</dd><dt>' + literalesPage[53118] + ':</dt><dd>' + isNull(data.fechaimplantacion) +
            '</dd><dt>' + literalesPage[53119] + ':</dt><dd>' + isNull(data.fechanotificacion);
        if (data2.estado == "20") {
            html += '</dd><dt>' + literalesPage[53120] + ': </dt><dd class="descripcion">' + isNull(data.errordes);
        }
        if (data.imprimible.toLowerCase() == "true") {
            html += '</dd></dl><div class="bot_nacimiento"><button onclick="getAssociatedFileSub(\'' +
                tr.context.nextElementSibling.innerText + '\');"><i class="fa fa-print"></i>' + literalesPage[53121] + '</button>';
            html += '</div>';
        }        html += '</div>';    row.child(html).show();
    tr.addClass('shown');
}

function getAssociatedFileSub(crotal) {
    data = { "crotal": d.crotal };
    getAssociatedFile(data);
}

