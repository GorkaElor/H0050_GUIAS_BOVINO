var notificacionesTable = null;
var codNotificacion = "";

$(document).on("allLoaded", function () {
    
    getNotificaciones();
 
    $('#alert-confirmacion').on('click', '.btn-ok', function (e) {
        $("#alert-confirmacion").modal('hide');
    });


    // Bind click to OK button within popup
    $('#confirm-eliminar').on('click', '.btn-ok', function (e) {
        
        notificacionBorrar(codNotificacion);
    });

})


function getNotificaciones() {
   
    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/getNotificaciones",
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
    //            $("#notificaciones_totales").html(response.length);
    //            loadDataTable(response);
    //        }
    //    },
    //    error: function (response) {
    //        errorManagement(response, null);
    //    }
    //});

    successFn = function (response) {
        $("#notificaciones_totales").html(response.lista.length);
        loadDataTable(response.lista);
    };

    requestWS({ wsMethod: "/getNotificaciones", data: "", "successFn": successFn, "errorFn": null });
}


function loadDataTable(dataSet) {
    if (notificacionesTable != null) {
        //Eliminar la tabla y los eventos de click.
        notificacionesTable.destroy();
        //$('#table-notificaciones').off('click');
        $('#table-notificaciones').off();
        $('#table-notificaciones').children().off();
    }

    var cont = 0;

    $.fn.dataTable.moment(selectedLanguageMomentDateType2);

    notificacionesTable = $('#table-notificaciones').DataTable({
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
                "data": "ver",
                "orderable": false,
                "width": 15,
                "className": "invoice.centrar",
                "render": function (data, type, full, meta) {
                    //console.log(data);
                    if (data == "true") {
                        html = '<img src="img/notif_new.png" alt="Nueva notificación"/>';
                    }
                    else if (data == "false") {
                        html = '<img src="img/notif_opened.png" alt="Notificación leída"/>';
                    }
                    else {
                        html = '';
                    }
                    return html;
                }
            }, {
                "className": 'Fecha',
                "orderable": true,
                "data": "fechanotificacion",
                "defaultContent": '',
                "title": literalesPage[53418]
            }, {
                "data": "ntdes",
                "orderable": true,
                "title": literalesPage[53408]
            }, {
                "data": "notdes", "title": literalesPage[53412]
            }, {
                "data": null,
                "orderable": false,
                "render": function (data, type, full, meta) {
                    var html = "";
                    if (type == "display")
                            cont++;
                    
                    //if (data.eliminable == "true")
                    //{
                    //    if (data.ver == "true") {
                    //        html = '<button class="btn btn-default icono" onclick="javascript:notificacionVista(&#34;' + data.notcod + '&#34;,' + cont + ',' + data.eliminable + '); return false;"><i class="fa fa-envelope"></i> ' + literalesPage[53411] + ' </button>' +
                    //            '<button class="btn btn-default icono remove-button" onclick="javascript:notificacionBorrar(&#34;' + data.notcod + '&#34;); return false;"><i class="fa fa-trash"></i> ' + literalesPage[53410] + '</button>';
                    //    }
                    //    else
                    //    {
                    //        html = '<span class="btn btn-default cursor_default"> ' + literalesPage[53411] + '</span>' +
                    //            '<button class="btn btn-default icono remove-button" onclick="javascript:notificacionBorrar(&#34;' + data.notcod + '&#34;); return false;"><i class="fa fa-trash"></i> ' + literalesPage[53410] + '</button>';
                    //    }
                    //}
                    //else
                    //{
                    //    if (data.ver == "true") {
                          
                    //        html = '<button class="btn btn-default icono" onclick="javascript:notificacionVista(&#34;' + data.notcod + '&#34;,' + cont + ',' + data.eliminable + '); return false;"><i class="fa fa-envelope"></i> ' + literalesPage[53411] + '</button>';
                    //    }
                    //    else
                    //    {
                    //        html = '<span class="btn btn-default cursor_default">' + literalesPage[53411] + '</span>';
                    //    }
                          
                    //}


                    if (data.eliminable == "true") {
                        if (data.ver == "true") {
                            html = '<button id="ver_' + cont + '" class="btn btn-default icono"><i class="fa fa-envelope"></i> ' + literalesPage[53411] + ' </button>' +
                                '<button id="borrar_' + cont + '" class="btn btn-default icono remove-button"><i class="fa fa-trash"></i> ' + literalesPage[53410] + '</button>';
                        }
                        else {
                           // html = '<span class="btn btn-default cursor_default"> ' + literalesPage[53411] + '</span>' +
                            //     '<button id="borrar_' + cont + '" class="btn btn-default icono remove-button"><i class="fa fa-trash"></i> ' + literalesPage[53410] + '</button>';
                            html = '<button id="borrar_' + cont + '" class="btn btn-default icono remove-button"><i class="fa fa-trash"></i> ' + literalesPage[53410] + '</button>';
                        }
                    }
                    else {
                        if (data.ver == "true") {

                            html = '<button id="ver_' + cont + '" class="btn btn-default icono"><i class="fa fa-envelope"></i> ' + literalesPage[53411] + '</button>';
                        }
                        else {
                            html = '<span class="btn btn-default cursor_default">' + literalesPage[53411] + '</span>';
                        }

                    }

                    if (meta.type == "display")
                        cont++;
                   

                    //if (data.eliminable == "true") {
                    //    html = '<button class="btn btn-default icono" onclick="javascript:notificacionVista(&#34;' + data.notcod + '&#34;); return false;" rel="popover" data-container="body" data-toggle="popover" data-placement="top"><i class="fa fa-envelope"></i> Ver</button>' +
                    //           '<button class="btn btn-default icono remove-button" onclick="javascript:notificacionBorrar(&#34;' + data.notcod + '&#34;); return false;"><i class="fa fa-trash"></i> Borrar</button>';
                    //}
                    //else {
                    //    html = '<button class="btn btn-default icono" onclick="javascript:notificacionVista(&#34;' + data.notcod + '&#34;); return false;"><i class="fa fa-envelope" rel="popover" data-container="body" data-toggle="popover" data-placement="top"></i> Ver</button>';

                    //}

                    ////mostrar detalle como un tooltip
                    //tooltip = data.notdes;
                    //var popOverSettings = {
                    //    placement: 'top',
                    //    container: 'body',
                    //    html: true,
                    //    selector: '[rel="popover"]',
                    //    content: function () {
                    //        return tooltip;
                    //    }
                    //}
                    //$('body').popover(popOverSettings);

                    return html;
                }
            }
        ],
        "order": [],
        "language": {
            "url": datatableLanguageUrl
        }
    });



    $('#table-notificaciones').on('click', 'button', function (e) {
        var abutton = e.target.id.split("_");
        var button = abutton[0];
        var rowIndex = abutton[1];

        var data = notificacionesTable.row($(this).parents('tr')).data();

        if (button == "ver")
        {
            var eliminable = 0;
            if (data.eliminable.toString().toString().toUpperCase() == "TRUE")
                eliminable = 1;
           notificacionVista(data.notcod, rowIndex, eliminable);
        }

        if (button == "borrar")
        {
            codNotificacion = data.notcod;
            $("#confirm-eliminar").modal('show');
        }
    });
}


function notificacionVista(notificacion, rowIndex, eliminable)
{
    var data = { "notificacion": notificacion }
    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/notificacionVista",
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
    //            if (response.status != "200") {
    //                errorManagement(response, null);
    //            }
    //            else {
                    
    //                //if ($(this).hasClass('shown')) {
    //                //    $(this).removeClass('shown');
    //                //}
    //                //else {
    //                //    notificacionesTable.$('tr.selected').removeClass('shown');
    //                //    $(this).addClass('shown');

    //                //}
    //                //var html = '';
                    
    //                //if (eliminable == 1)
    //                //{
    //                //    html = '<span class="btn btn-default cursor_default"> ' + literalesPage[53411] + '</span><button id="borrar_' + rowIndex + '" class="btn btn-default icono remove-button"><i class="fa fa-trash"></i> ' + literalesPage[53410] + '</button>';
    //                //}
    //                //if (eliminable == 0) 
    //                //{
    //                //    html = '<span class="btn btn-default cursor_default">' + literalesPage[53411] + '</span>';
    //                //}
    //                //$('#table-notificaciones tr:eq(' + rowIndex + ') td:eq(4)').html(html);
    //                //$('#table-notificaciones tr:eq(' + rowIndex + ') td:eq(0)').html("");

    //                location = "notificaciones.aspx";

    //                //Consultar Notificaciones
    //            }
    //        }
    //    },
    //    error: function (response) {
    //        errorManagement(response, null);
    //    }
    //});


    successFn = function (response) {
        location = "notificaciones.aspx";
    };

    requestWS({ wsMethod: "/notificacionVista", data: data, "successFn": successFn, "errorFn": null });
    

}


function notificacionBorrar(notificacion) {
    
    $("#confirm-eliminar").modal('hide');

    var data = { "notificacion": notificacion }
    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/notificacionBorrar",
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
    //            if (response.status != "200") {
    //                //$("#message").text(response.message);
    //                errorManagement(response, null);
    //            }
    //            else {
    //                $("#cabecera").text(literalesPage[53417]);
    //                $("#alert-confirmacion").modal('show');
    //            }
    //        }
    //    },
    //    error: function (response) {
    //        errorManagement(response, null);
    //    }
    //});


    successFn = function (response) {
        location = "notificaciones.aspx";
        //$("#cabecera").text(literalesPage[53417]);
        //$("#alert-confirmacion").modal('show');
    };

    requestWS({ wsMethod: "/notificacionBorrar", data: data, "successFn": successFn, "errorFn": null });
   

}



function existeIndex(aIndex, index)
{
    $.each(aIndex, function (i, index) {
        if (aIndex[i] == index)
            return true;
        
    });
    return false;
}



//function ConsultaEstadoNotificaciones()
//{
//    $.ajax({
//        url: location.protocol + "//" + location.host + location.pathname + "/consultaEstadoNotificaciones",
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        data: JSON.stringify(data),
//        dataType: "json",
//        success: function (response) {
//            response = JSON.parse(response.d);
//            if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
//                errorManagement(response, null);
//            }
//            else {
//                //console.log(response);
//                if (response.status != "200") {
//                    //$("#message").text(response.message);
//                    errorManagement(response, null);
//                }
//                else {
//                    '<%Session["Notificaciones"] = "' + response.sinleer + '"; %>';
                    
//                }
//            }
//        },
//        error: function (response) {
//            errorManagement(response, null);
//        }
//    });

//}