var crotalesDisponiblesTable = null;

$(document).on("allLoaded", function () {

    getCrotalesDisponibles();

    $('#alert-confirmacion').on('click', '.btn-ok', function (e) {
        $("#alert-confirmacion").modal('hide');
    });

    //
    $('.date').datepicker(
       {
           autoclose: true,
           todayHighlight: true,
           weekStart: 1,
           format: selectedLanguageDateType,
           language: selectedLanguage
       });
    $('.date').datepicker('setDate', new Date());
    

    //

})


function getCrotalesDisponibles() {

    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/getCrotalesDisponibles",
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
    //        errorManagement(response, null);
    //    }
    //});

    successFn = function (response) {
        loadDataTable(response.lista);
    };

    requestWS({ wsMethod: "/getCrotalesDisponibles", data: "", "successFn": successFn, "errorFn": null });
}


function loadDataTable(dataSet) {
    if (crotalesDisponiblesTable != null) {
        //Eliminar la tabla y los eventos de click.
        crotalesDisponiblesTable.destroy();
        $('#table-crotales').off();
        $('#table-crotales').children().off();
    }

    
    crotalesDisponiblesTable = $('#table-crotales').DataTable({
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
                "title":  literalesPage[52705],
                "orderable": true,
                //"width": 15,
                //"className": "invoice.centrar",
                //"render": function (data, type, full, meta) {
                //    console.log(data);
                //    if (data == "true") {
                //        html = '<img src="/vista/img/notif_new.png" alt="Nueva notificación"/>';
                //    }
                //    else if (data == "0") {
                //        html = '<img src="/vista/img/notif_opened.png" alt="Notificación leída"/>';
                //    }
                //    else {
                //        html = '';
                //    }
                //    return html;
                //}
            }, {
                "title": literalesPage[52706],
                "orderable": true,
                "data": "estadodes"
                
            }, {
                "data": "perdidas",
                "orderable": true,
                "title": literalesPage[52707]
            }, {
                "data": "notificable",
                "orderable": false,
                "render": function (data, type, full, meta) {
                    var html = "";
                    if (data == "true") {
                        // ”99”(Sin asignar), “00”(Crotal asignado), ”01”(Sin asignar - Deterioro) o “02”(Sin asignar – Perdido).
                        if (full.estado == "00"){
                            html = '<a href="notificar_perdida_asignada.aspx?crotal=' + full.crotal + '"><button class="boton_notif_perida">' + literalesPage[52708] + '</button></a>';
                         
                        } else if (full.estado == "99" || full.estado == "01" || full.estado == "02") {
                            html = '<a href="notificar_perdida_sin_asignar.aspx?crotal=' + full.crotal + '"><button class="boton_notif_perida">' + literalesPage[52708] + '</button></a>';
                        }                 
                    }
                    else {
                        html = '<i class="fa fa-minus-circle crotal_disabled" aria-hidden="true"></i> ' + literalesPage[52709];

                    }
                    //<i class="fa fa-exclamation-triangle tramite-perdida" aria-hidden="true"></i> Notificación de pérdida en trámite
                    return html;
                }
            }
        ],
        "order": [],
        "language": {
            "url": datatableLanguageUrl
        }
    });


    $('#table-crotales tbody').delegate('td.details-control', 'click', function () {
        var tr = $(this).closest('tr');
        var row = crotalesDisponiblesTable.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            //row.child(format(row.data())).show();
            //tr.addClass('shown');
            getCrotalData(row, tr);
        }
    });
}

function getCrotalData(row, tr) {
    
    d = row.data();
    input = { "crotal": d.crotal };
    
    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/getCrotalesPerdidas",
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
        formatList(response.lista, row, tr, d.crotal);
    };

    requestWS({ wsMethod: "/getCrotalesPerdidas", data: input, "successFn": successFn, "errorFn": null });

}


function formatList(data, row, tr, crotal) {
    var html = "";
    
    $.each(data, function (i, item) {

        html = html + '<h4 class="lista_perdidas">' + literalesPage[52715] + ':</h4>' +
                        '<div class="bloque_perdida">' +
                            '<div class="linea_estado_crotal">'+
                                '<p class="fecha_perdida">' + literalesPage[52710] + ': <span>' + isNull(item.fechacomunicacion) + '</span></p>' +
                                '<p class="fecha_perdida">' + literalesPage[52711] + ': <span>' + isNull(item.fechaperdida) + '</span></p>' +
	                            '<p class="fecha_perdida">' + literalesPage[52712] + ': <span>' + isNull(item.fechafabrica) + '</span></p>' +
                                '<p class="fecha_perdida">' + literalesPage[52713] + ': <span>' + isNull(item.fechaentrega) + '</span></p>' +
                                '<p class="fecha_perdida">' + literalesPage[53715] + ': <span>' + isNull(item.fechacolocacion) + '</span></p>' +
                                getJustificante(item.justificante, crotal, item.fechaperdida) + getFechaColocacion(item.colocacion, crotal, item.fechaentrega, item.fechaperdida) +
                             '</div>'+
	                        '<div class="linea_estado_crotal">' +
                                '<span>' + literalesPage[52714] + ':</span>' +
                                '<p>' + isNull(item.comentario) + '</p>' +
                            '</div>' +
                        '</div>';
        });


    row.child(html).show();
    tr.addClass('shown');
}


function getJustificante(justificante, crotal, fechaPerdida)
{
    if (justificante == "true")
        return '<div class="botones_perdida"><button onclick ="javascript:imprimirJustificantePerdidaCrotal(&#34;' + crotal + '&#34;,&#34;' + fechaPerdida + '&#34); return false; "><i class="fa fa-print"></i> ' + literalesPage[52702] + '</button></div>';
    else
        return "";
}
function getFechaColocacion(colocacion,  crotal, fechaentrega,fechaperdida) {
    if (colocacion == "true")
        return '<div  style="margin-top:5px" class="botones_perdida"><a href="notificar_fecha_colocacion.aspx?crotal=' + crotal +'&fechaperdida=' + fechaperdida + '&fechaentrega=' + fechaentrega +'"><button class="boton_notif_perida">' + literalesPage[53714] + '</button></a></div>';
    else
        return "";
}
//   html = '<a href="notificar_fecha_colocacion.aspx?crotal=' + full.crotal + '"><button class="boton_notif_perida">Notificar fecha colocación</button></a>';
function imprimirListadoPerdida(explotacion) {
    fechadesde = $("#fecha_desde").val();
    fechadesde = moment(fechadesde, selectedLanguageMomentDateType).format(WSMomentDateType);
    fechahasta = $("#fecha_hasta").val();
    fechahasta = moment(fechahasta, selectedLanguageMomentDateType).format(WSMomentDateType);

    //LLAMDA A AJAX
    data = { "explotacion": explotacion, "fechadesde": fechadesde, "fechahasta": fechahasta };
     $.ajax({
        url: location.protocol + "//" + location.host + location.pathname + "/imprimirListadoPerdidaCrotales",
        type: "post",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            response = JSON.parse(response.d);
            if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
                //errorManagement(response, null);
                //$("#message").text(response.message);
                console.log(response);
            }
            else {
                if (response.status = "200")
                {
                    var url =response.url
                    var openTab = window.open(url, '_blank');
                    if (openTab) {
                        //Browser has allowed it to be opened
                        openTab.focus();
                    } else {
                        //Browser has blocked it
                        alert(literalesGen[50028]); //'Por favor, habilite las ventanas emergentes en su navegador.'
                    }

                }
                else
                {
                    //errorManagement(response, null);
                    console.log(response);
                }
            }
        },
        error: function (response) {
            console.log(response);
            //errorManagement(response, null);
        }
    });




    //var url = "http://www.nekagip.net/metodologia/RSRVISOR.asp?A1=PetiCro&A2=RpJustificanteNotificacionPetCrotal&A3=1|0|0|4|&A4=ParFECDESDE=" + fechadesde + "|ParFECHASTA=" + fechahasta + "|ParEXPLO="+ explotacion +"&A5=2"
    //var openTab = window.open(url, '_blank');
    //if (openTab) {
    //    //Browser has allowed it to be opened
    //    openTab.focus();
    //} else {
    //    //Browser has blocked it
    //    alert(literalesGen[50028]); //'Por favor, habilite las ventanas emergentes en su navegador.'
    //}




       
    //data = { "print": print }
    //getAssociatedFile(data);

}

function imprimirJustificantePerdidaCrotal(crotal, fechaPerdida) {

    data = { "crotal": crotal, "fechaPerdida": fechaPerdida };
    getAssociatedFile(data);

    
    //data = { "crotal": crotal, "fechaPerdida": fechaPerdida };
    //alert(fechaPerdida);
    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/imprimirJustificantePerdidaCrotal",
    //    type: "post",
    //    data: JSON.stringify(data),
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        response = JSON.parse(response.d);
    //        if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
    //            //errorManagement(response, null);
    //            //$("#message").text(response.message);
    //            console.log(response);
    //        }
    //        else {
    //            if (response.status = "200")
    //            {
    //                getAssociatedFileSub(response.url);
    //            }
    //            else
    //            {
    //                //errorManagement(response, null);
    //                console.log(response);
    //            }
    //        }
    //    },
    //    error: function (response) {
    //        console.log(response);
    //        //errorManagement(response, null);
    //    }
    //});
}

function getAssociatedFileSub(print) {
    data = { "print": print }
    getAssociatedFile(data);
}