var table = null;

$(document).on("allLoaded", function () {
   
    function parseNotifications(data) {
        var notificaciones = 0;
        if (data.notificaciones != null)
            notificaciones = data.notificaciones.length;
         return notificaciones;
    };    

    function loadDataTable(dataSet) {
        table = $('#selectionTable').DataTable({
            "data": dataSet,
            "ordering": true,
            "searching": true,
            "paging": true,
            "lengthChange": false,
            "info": false,
            "autoWidth": false,
            "deferRender": true,
            "order": [],
            "columns": [
                { "data": "explotacion", "title": literalesPage[50102] },
                { "data": "denominacion", "title": literalesPage[50103] },
                {
                    "data": null, "title": literalesPage[50106],
                    "render": function (data, type, full, meta) {
                        

                        var col = "";
                        if (full.propia=='true'){
                            if (data.notificaciones != null && data.notificaciones.length > 0) {
                                notificaciones = data.notificaciones.length;
                                col = '<img src="img/notif_new.png" /><span class="separa_formu">' + notificaciones + ' ' + literalesPage[50107] + '</span>';
                            }
                            else{
                                col = '<img src="img/notif_opened.png" /><span class="separa_formu">0 ' + literalesPage[50107] + '</span>';
                            };
                        };
                        return col;
                    }
                }
      
                //{
                //    "data": null, "title": literalesPage[50104],
                //    //"defaultContent": '<button class="btn seleccionar">Seleccionar</button>'
                //    "render": function (data, type, full, meta) {
                //        //if (data.explotacion == selectedExploitationID)
                //        //    button = '<button class="btn seleccionar activo">Seleccionado</button>';
                //        //else
                //        button = '<button class="btn seleccionar"></button>';
                //        return button;

                //    }
                //}

            ],
            "language": {
                "url": datatableLanguageUrl
            }
        });

        $('#selectionTable tbody').on('click', 'tr', function () {
            if ($(this).hasClass('shown')) {
                $(this).removeClass('shown');
            }
            else {
                table.$('tr.selected').removeClass('shown');
                $(this).addClass('shown');

                var data = table.row($(this)).data();
                // Cargar la explotación seleccionada.
                
                notifications = parseNotifications(data);
                loadSelectedExploitation(data.explotacion, data.denominacion, notifications,data.matadero,data.propia,data.pasto,data.tieneAnimales);
            }
        });

        $('#selectionTable').on('click', 'button', function (e) {

            var data = table.row($(this).parents('tr')).data();
            // Cargar la explotación seleccionada.

            notifications = parseNotifications(data);
           
            loadSelectedExploitation(data.explotacion, data.denominacion, notifications, data.matadero,data.propia,data.tieneAnimales);
        });

    }

    function loadSelectedExploitation(exploitation, description, notificaciones, matadero, propia, pasto, tieneAnimales) {
        //debugger;
        data = { "exploitation": exploitation, "description": description, "notificaciones": notificaciones, "matadero": matadero, "propia": propia, "pasto": pasto, "tieneAnimales": tieneAnimales }
        $.ajax({
            async: false,
            url: location.protocol + "//" + location.host + location.pathname + "/loadSelectedExploitation",
            type: "post",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                // Si se ha cargado correctamente la explotación seleccionada redirigimos
                // a la pagina de inicio.            
               location = "inicio.aspx";
              
            },
            error: function (response) {
                console.log(response);
                errorManagement(response, null);
            }
        });
    }

    successFn = function (response) {
        response = response.lista;
        if (response.length == 1) {
            notifications = parseNotifications(response[0]);
            loadSelectedExploitation(response[0].explotacion, response[0].denominacion, notifications, response[0].matadero, response[0].propia, response[0].pasto, response[0].tieneAnimales);
        }
        else {
            console.log(response);
            var respuesta = response.filter(function (car) {
                return car.explotacion.substring(0, 4) != 'ES01';
            });
            loadDataTable(respuesta);
        }
    };
    errorFn = null;
    requestWS({ wsMethod: "/getExploitationList", data: "", "successFn": successFn, "errorFn": errorFn });
    
});