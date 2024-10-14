var guiasTable = null;
var ESTADO_SIN_CONFIRMAR = "0";
var ESTADO_CONFIRMADO = "1";
var ESTADO_CONFIRMADO_CON_ERROR = "2";
var ESTADO_RECHAZADO = "3";

$(document).on("allLoaded", function () {
    
    getConsultaGuiasEntrada();

    $('#alert-confirmacion').on('click', '.btn-ok', function (e) {
        $("#alert-confirmacion").modal('hide');
    });
    
})
function denyGuide(guide) {
   $('#confirm-anular').modal({ backdrop: 'static', keyboard: false });
    //$('#messageBox').html("");
    data = { "guide": guide };
    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/denyGuide",
    //    type: "post",
    //    data: JSON.stringify(data),
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        $('#myModal').modal('hide');
    //        response = JSON.parse(response.d);
    //        if (response.code != undefined && response.code != null && response.code == 200) {
    //            $("#success-alert").text(response.message);
    //            $("#success-alert").show();
    //            $("#success-alert").alert();
    //            $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
    //                $("#success-alert").slideUp(500);
    //            });
    //            getGuides();
    //        }
    //        else if (response.message != undefined && response.message != null) {
    //            message = "<li><label class='validationerror'> " + response.message + "</label></li>";
    //            $("#messageBox").html(message);
    //        }
    //        else {
    //            errorManagement(response, "");
    //        }
    //    },
    //    error: function (response) {
    //        errorManagement(response, null);
    //    }
    //});


    successFn = function (response) {
        /*
         $("#success-alert").text(response.message);
         $("#success-alert").show();
         $("#success-alert").alert();
         $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
             $("#success-alert").slideUp(500);
         });*/
      
   

        getConsultaGuiasEntrada();
    };

    finallyFn = function (response) {
       
        $('#confirm-anular').modal('hide');
       // debugger;
        //apaño porque se me quedan dos capas negras 
        var miElto = document.getElementsByClassName("modal-backdrop fade in")[0];
        var miElto2 = document.getElementsByClassName("modal-backdrop fade in")[1];
           miElto.className = "";miElto2.className = "";
     
    };

    requestWS({ wsMethod: "/denyGuide", data: data, "successFn": successFn, "errorFn": null, finallyFn: finallyFn });
}

function getConsultaGuiasEntrada() {

    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/getConsultaGuiasEntrada",
    //    type: "post",
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        response = JSON.parse(response.d);
    //        if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
    //            errorManagement(response, null);
    //        }
    //        else {
    //            //console.log(response);
    //            loadDataTable(response);
    //        }
    //    },
    //    error: function (response) {
    //        console.log(response);
    //        //errorManagement(response, null);
    //    }
    //});

    $('#myModal').modal({ backdrop: 'static', keyboard: false });

    successFn = function (response) {
        loadDataTable(response.lista);
    };

    finallyFn = function (response) {
        $('#myModal').modal('hide');
    };

    requestWS({ wsMethod: "/getConsultaGuiasEntrada", data: "", "successFn": successFn, "errorFn": null, finallyFn: finallyFn });
}

function buscar()
{
    var data = {
        "crotal": $("#crotal").val()
    };

    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/BuscarCrotalGuiaEntrada",
    //    type: "post",
    //    contentType: "application/json; charset=utf-8",
    //    data: JSON.stringify(data),
    //    dataType: "json",
    //    success: function (response) {
    //        response = JSON.parse(response.d);
    //        if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
    //            errorManagement(response, null);
    //        }
    //        else {
    //            //console.log(response);
    //            loadDataTable(response);
    //        }
    //    },
    //    error: function (response) {
    //        //console.log(response);
    //        errorManagement(response, null);
    //    }
    //});

    successFn = function (response) {
        loadDataTable(response.lista);
    };

    requestWS({ wsMethod: "/BuscarCrotalGuiaEntrada", data: data, "successFn": successFn, "errorFn": null });

}
            
function loadDataTable(dataSet) {
    if (guiasTable != null) {
        //Eliminar la tabla y los eventos de click.
        guiasTable.destroy();
        //$('#table-guias-entrada').off('click');
        $('#table-guias-entrada').off();
        $('#table-guias-entrada').children().off();
    }

    $.fn.dataTable.moment(selectedLanguageMomentDateType2);

    guiasTable = $('#table-guias-entrada').DataTable({
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
                            "data": null,
                            "className": 'estado',
                            "orderable": false,
                            "width": 10,
                            "render": function (data, type, full, meta) {
                                //console.log(data.estadodes)
                                //console.log(data.estado)
                                //console.log("---------------")
                                if (data.estado == ESTADO_CONFIRMADO) {
                                    html = '<i class="fa fa-dot-circle-o guia_confirmada"></i>';
                                }
                                else if (data.estado == ESTADO_RECHAZADO) {
                                    html = '<i class="fa fa-dot-circle-o estado guia_rechazada"></i>';
                                }
                                else if (data.estado == ESTADO_SIN_CONFIRMAR) {
                                    html = '<i class="fa fa-clock-o guia_sin_confirmar"></i>';
                                }
                                else if (data.estado == ESTADO_CONFIRMADO_CON_ERROR) {
                                    html = '<i class="fa fa-dot-circle-o guia_confirmada_errores"></i>';
                                }
                                else {

                                    html = '';
                                }
                                return html;
                            }
                        },
            {
                //"className": 'details-control2',
                "orderable": false,
                "data": null,
                "defaultContent": '',
                "data": "estado",
                "createdCell": function (td, cellData, rowData, row, col) {
                    if (cellData == ESTADO_CONFIRMADO) {
                    $(td).addClass("details-control");
                    }
                },



                "render": function (data, type, full, meta) {
                    return "";
                }
            },
            {
                "data": "fechaentrada",
                "title": literalesPage[53308],
                "orderable": true,
            },
            {
                "data": "guia",
                "title": literalesPage[53309],
                "orderable": true
            },
            {
                "title": literalesPage[53310],
                "data": "exploorigen",
                "orderable": true
            },
            {
                "data": "numcrotales",
                "title": literalesPage[53311],
                "orderable": true

            },
            {
                "data": null,
                "orderable": true,
                "title": literalesPage[53112],
                "className": 'estado_text',
                "createdCell": function (td, cellData) {
                    if (cellData.estado == ESTADO_SIN_CONFIRMAR) {
                        $(td).closest('tr').addClass("sin_confirmar");
                    }
                },
                "render": function (data, type, full, meta) {

                    //<td class="guia_confirmada">Confirmada</td>
                    //<td class="guia_confirmada">Confirmada</td>
                    //<td class="guia_rechazada">Rechazada</td>

                    var html = "";
                    if (data.estado == ESTADO_CONFIRMADO) //aceptada
                        html = "<span class='text-center guia_confirmada'>" + isNull(data.estadodes) + "</span>";
                    else if (data.estado == ESTADO_RECHAZADO) {
                        html = "<span class='text-center guia_rechazada'>" + isNull(data.estadodes) + "</span>";
                    }
                    else if (data.estado == ESTADO_SIN_CONFIRMAR) {
                        html = "<span class='text-center guia_sin_confirmar'>" + isNull(data.estadodes) + "</span>";
                    }
                    else if (data.estado == ESTADO_CONFIRMADO_CON_ERROR) {
                        html = "<span class='text-center guia_confirmada_errores'>" + isNull(data.estadodes) + "</span>";
                    }
                    return html;
                }
            },
            {
                "data": null,
                "orderable": true,
                "title": "",
                "render": function (data, type, full, meta) {
                    html = '<a href="confirmacion_de_guias.aspx?guia=' + data.guia + '"><button class="btn btn-default">' + literalesPage[53313] + '</button></a>';
                    return html;
                }
            }, {
                "data": null,
                "orderable": false,
                "render": function (data, type, full, meta) {
                    button = "";
                    if ((data.exploorigen.substring(0, 4) == "ES20") && ($('#esMatadero').val() == "true") && (data.estado == ESTADO_CONFIRMADO)) {
                        //if  ((data.estado == ESTADO_CONFIRMADO)|| (data.estado == ESTADO_SIN_CONFIRMAR)) {
                        button = '<button id="guia" class="btn btn-default icono" title="' + literalesPage[53793] + '"  onclick="javascript:imprimirGuia(&#34;' + data.guia + '&#34;); return false;">' +
                            '<i id="guia" class="fa fa-print"></i></button>';
                        button += '<button id="guia_anexo_matadero" class="btn btn-default icono blue" title="' + literalesPage[53794] + '" onclick="javascript:imprimirAnexo(&#34;' + data.guia + '&#34;); return false;">' +
                                '<i id="guia_anexo_matadero" class="fa fa-print"></i></button>';
                       
                    }
                    
                     return button;
                }
            }, {
                "data": null,
                "className": 'anular',
                "orderable": false,
                "render": function (data, type, full, meta) {
                    html = "";
                    if (data.larretoki == "1" && data.estado == ESTADO_CONFIRMADO && (permisoAnularGuia.toUpperCase() == "TRUE" || esexplotacionpropia.toUpperCase() == "TRUE")) {
                        //html = '<i id="anular" class="fa fa-times">';
                        html = '<a data-toggle="modal" data-target="#confirm-anular"><i id="anular" class="fa fa-times"></a>';
                    }
                    return html;
                }
            }
        ],
        "order": [],
        "language": {
            "url": datatableLanguageUrl
        }
    });
    //$('#table-guias-entrada').on('click', 'button', function (e) {
    //    debugger;
    //    var print = e.target.id;
    //    if (print != "") {
    //        var row = guiasTable.row($(this).parents('tr')).data();
    //        data = { "row": row, "print": print };
    //        getAssociatedFile(data);
    //    };
    //});

    // Bind click to OK button within popup
    $('#confirm-anular').on('click', '.btn-ok', function (e) {
        var id = $(".modal-body #guia").val()
        $("#confirm-anular").modal('hide');
        denyGuide(id);
    });
    $('#table-guias-entrada').on('click', "[id='anular']", function (e) {
        var row = guiasTable.row($(this).parents('tr')).data();
        $(".modal-body #guia").val(row.guia);
     
        //Antes de javier
        //var row = guidesTable.row($(this).parents('tr')).data();
        //denyGuide(row.guia);

    });
    // Add event listener for opening and closing details
    $('#table-guias-entrada tbody').delegate('td.details-control', 'click', function () {
        var tr = $(this).closest('tr');
        var row = guiasTable.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            //row.child(format(row.data())).show();
            //tr.addClass('shown');

            //comentado para pruebas
            verCrotales(row, tr);
        }
    });
}


//function ver(guia)
//{
//    location = "confirmacion_de_guias.aspx?guia=" + guia;
//}

function verCrotales(row, tr)
{
    d = row.data();
    var data = {
        "guia": d.guia
    };
      

    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/crotalesGuiaConfirmada",
    //    type: "post",
    //    contentType: "application/json; charset=utf-8",
    //    data: JSON.stringify(data),
    //    dataType: "json",
    //    success: function (response) {
    //        response = JSON.parse(response.d);
    //        if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
    //            errorManagement(response, null);
    //        }
    //        else {
    //            //console.log(response);
    //            formatList(response, row, tr, d.guia);
    //        }
    //    },
    //    error: function (response) {
    //        //console.log(response);
    //        errorManagement(response, null);
    //    }
    //});

    successFn = function (response) {
        formatList(response.lista, row, tr, d.guia);
    };

    requestWS({ wsMethod: "/crotalesGuiaConfirmada", data: data, "successFn": successFn, "errorFn": null });

}




function formatList(data, row, tr, guia) {

    var html = ""

    var filas = "";

    html = '<table id="tabla-crotales" class="table table-responsive tableguia">' +
    '<thead><tr><th>' + literalesPage[53303] + '</th><th>' + literalesPage[53314] + '</th><th>' + literalesPage[53315] + '</th><th>' + literalesPage[53316] + '</th><th></th></tr></thead>' +
    '<tbody>';
 
     $.each(data, function (i, item) {

         filas = filas + '<tr><td>' + isNull(item.crotal) +
             '</td><td>' + isNull(item.razdes) +
             '</td><td>' + isNull(item.sexdes) +
             '</td><td>' + isNull(item.fechanacimiento);
         if ((item.imprimible == "true") && (permisoDIB.toUpperCase() == "TRUE" || esexplotacionpropia.toUpperCase() == "TRUE")) {

             //€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€               
             //$('.imprimirDIB').delegate('button', 'click', function (e) {
             //    console.log("delegate");
             //    var id = $(this).parents('tr').first().children().first().text();
             //    console.log(id);
             //    data = { "id": id };
             //    getAssociatedFile(data);
             //});
             //#############################

             filas = filas + '</td><td class="text-center"><button class="btn btn-default icono" title="Imprimir" onclick="javascript:imprimirDIB(&#34;' + item.crotal + '&#34;); return false;"><i class="fa fa-print"></i> DIB</button></td></tr>';
         } else {
             filas = filas + '</td><td class="text-center"><button class="btn btn-default icono" title="Imprimir" style="visibility: hidden;"><i class="fa fa-print"></i> DIB</button></td></tr>';;
         }
         

         //filas = filas + '<tr>' +
         //           '<td>' + isNull(item.crotal) + '</td>' +
         //           '<td>' + isNull(item.raza) + '</td>' +
         //           '<td>' + isNull(item.sexo) + '</td>' +
         //           '<td>' + isNull(item.edad) + '</td>' +
         //           '<td><button class="btn btn-default icono" onclick="javascript:confirmarCrotal(' + guia + ',&#34;' + item.crotal + '&#34;); return false;"><i class="fa fa-check"></i> Confirmar crotal</button></td>' +
         //           '<td><button class="btn btn-default icono remove-button" onclick="javascript:rechazarCrotal(' + guia + ',&#34;' + item.crotal + '&#34;); return false;"><i class="fa fa-times"></i> Rechazar crotal</button></td>' +
         //        '</tr>';
     });

     html = html + filas;

     html = html + '</tbody>' + '</table>';




    '</tbody>' +
    '</table>';

    row.child(html).show();
    tr.addClass('shown');
}

function imprimirDIB(crotal) {
    data = { "crotal": crotal };
    getAssociatedFile(data);
}

function imprimirGuia(guia) {
    data = { "guia": guia, "print": "guia" };
    successFn = function (response) {
        var url;
        url = response.url;
        if (url != "") {
            window.open(url);
        }
    };

    finallyFn = function (response) {
        var a;
        a = 1;
    };

    requestWS({ wsMethod: "/ImprimirGuia", data: data, "successFn": successFn, "errorFn": null, finallyFn: finallyFn });

}

function imprimirAnexo(guia) {
    data = { "guia": guia, "print": "guia_anexo_matadero" };
    successFn = function (response) {
        var url;
        url = response.url;
        if (url != "") {
            window.open(url);
        }
    };

    finallyFn = function (response) {
        var a;
        a = 1;
    };

    requestWS({ wsMethod: "/ImprimirGuia", data: data, "successFn": successFn, "errorFn": null, finallyFn: finallyFn });


}






            


                