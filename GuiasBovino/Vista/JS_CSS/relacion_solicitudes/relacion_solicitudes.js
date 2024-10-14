function NotificarEntregaCrotales(id) {
    //alert(id);
    var data = {
        "id": id
    };
    successFn = function (response) {
        window.location.reload();
    };
        errorFn= function (response) {
            response = JSON.parse(response.d);
            $("#messageBox").show()
            $("#messageBox").html("<li><label class='validationerror' id='notificar_entrega' style='display: inline-block;' for='notificar_entrega'>" + response.message + "</label></li>");


       
    };

    requestWS({ wsMethod: "/NotificarEntregaCrotales", data:data, "successFn": successFn, "errorFn": null });

};



$(document).on("allLoaded", function () {


    function loadDataTable(dataSet) {

        $.fn.dataTable.moment(selectedLanguageMomentDateType2);

        //10- Solicitado  11- En tramite  12- Enviado
        var stateClass = { 10: "", 11: "en_tramite", 12: "enviado" };

        var table = $('#relacion-solicitudes').DataTable({
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
                {
                    "orderable": false, "data": null, "defaultContent": '',
                    "createdCell": function (td, cellData, rowData, row, col) {
                        if ((rowData.estado == 12) || (rowData.estado == 11)) {
                            $(td).addClass('details-control');
                        }
                    }
                },
                { "data": "fecpeticion", "title": literalesPage[52103] },
                { "data": "numero", "title": literalesPage[52104] },
                {
                    "data": "tenazas", "title": literalesPage[52105],
                    "render": function (data, type, row) {
                        if (data == 'true') { return literalesPage[52110] }
                        else { return literalesPage[52111] }
                    }
                },
                {
                    "data": "estadodes", "title": literalesPage[52106], sClass: stateClass["estadodes"],
                    "createdCell": function (td, cellData, rowData, row, col) {
                        $(td).addClass(stateClass[rowData.estado]);
                    }
                },
                 {
                     "data": "entregable",
                     "title": literalesPage[52713],
                     "orderable": false,
                     "render": function (data, type, full, meta) {
                         button = "";
                         etiqueta = "";
                         if ((full.entregable == 'true') && (full.editable == 'true')) {
                             button = '<button id="entregar" class="btn btn-default icono"  onclick="javascript:NotificarEntregaCrotales(&#34;' + full.id + '&#34;); return false;">' +
                                 '<i id="guia" class="glyphicon glyphicon-share"></i>' + literalesPage[53861] + '</button>';
                             return button;
                         } else {
                             etiqueta =  full.fechaentrega ;

                             return etiqueta;

                         }
                     }
                 }
            ],
            "order": [],
            "language": {
                "url": datatableLanguageUrl
            }
        });



        // Add event listener for opening and closing details
        $('#relacion-solicitudes tbody').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = table.row(tr);

            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            } else {
                // Open this row
                getSolicitudCrotales(row, tr);
                //row.child(format(row.data())).show();
                //tr.addClass('shown');
            }
        });

    }


    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/getSolicitudesCrotales",
    //    type: "post",
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        response = JSON.parse(response.d);
    //        if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
    //            errorManagement(response, null);
    //        }
    //        else {
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

    requestWS({ wsMethod: "/getSolicitudesCrotales", data: "", "successFn": successFn, "errorFn": null });




    //Desplegar solicitud

    function getSolicitudCrotales(row, tr) {
        d = row.data();
        var data = {
            "id": d.id
        };

        //$.ajax({
        //    url: location.protocol + "//" + location.host + location.pathname + "/getSolicitudCrotales",
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
        //            format(response, row, tr);
        //            //console.log(data);                   
        //        }
        //    },
        //    error: function (response) {
        //        errorManagement(response, null);
        //    }
        //});

        successFn = function (response) {
            format(response, row, tr);
        };

        requestWS({ wsMethod: "/getSolicitudCrotales", data: data, "successFn": successFn, "errorFn": null });
    }


    function format(data, row, tr) {
        console.log(literalesPage);
        html = '<div class="linea_solicitud_crotal">' + literalesPage[52112] + ': <span>' + data.fechatramitacion + '</span></div><div class="linea_solicitud_crotal"> ' + literalesPage[52113] + ': <span>' + data.fechaentrega + '</span></div>';
        if (data.albaran == 'true') {
            html += '<button class="imp_albaran"><i class="fa fa-print"></i>' + literalesPage[52114] + '</button>';
        }

        html += '<h4 class="head-tabla">' + literalesPage[52115] + '</h4><ul class="lista_crotales">';
        for (var i in data.lista) {
            html += '<li>' + data.lista[i].crotal + '</li>';
        }
        html += '</ul>';

        row.child(html).show();
        tr.addClass('shown');
    }

    $('#relacion-solicitudes').delegate('button', 'click', function (e) {
        var rowData = $('#relacion-solicitudes').DataTable().row($(this).parents('tr').prev()).data();
        data = { "id": rowData.id };
        getAssociatedFile(data);
    });
  

});