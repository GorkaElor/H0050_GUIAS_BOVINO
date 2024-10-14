var table = null;

$(document).on("allLoaded", function () {

    function loadDataTable(dataSet) {
        table = $('#cambioTable').on('init.dt', function () {
            selectedRow();
        })
           .DataTable({
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
                   { "data": "explotacion", "title": literalesPage[51163] },
                   { "data": "denominacion", "title": literalesPage[51164] },
                   {
                       "data": null, "title": literalesPage[51168],
                       "render": function (data, type, full, meta) {

                           var col = "";
                           if (full.propia == 'true') {

                               if (data.notificaciones != null && data.notificaciones.length > 0) {
                                   notificaciones = data.notificaciones.length;
                                   col = '<img src="img/notif_new.png" /><span class="separa_formu">' + notificaciones + ' ' + literalesPage[51167] + '</span>';
                               }
                               else{
                                   col = '<img src="img/notif_opened.png" /><span class="separa_formu">0 ' + literalesPage[51167] + '</span>';
                               }
                           };
                           return col;
                       }
                   }


                   //{
                   //    "data": null, "title": literalesPage[51165],
                   //    "render": function (data, type, full, meta) {
                   //        if (data.explotacion == selectedExploitationID)
                   //            button = '<button class="btn seleccionar activo"></button>';
                   //        else
                   //            button = '<button class="btn seleccionar"></button>';
                   //        return button;

                   //    }
                   //}

               ],
               "language": {
                   "url": datatableLanguageUrl
               }
           });



        $('#cambioTable tbody').on('click', 'tr', function () {
            if (!$(this).hasClass('shown')) {
                table.$('tr.selected').removeClass('shown');
                $(this).addClass('shown');
                $(this).addClass('selected');

                var data = table.row($(this)).data();
                // Cargar la explotación seleccionada.
                var notificaciones = 0;
                if (data.notificaciones != null)
                    notificaciones = data.notificaciones.length;

                loadSelectedExploitation(data.explotacion, data.denominacion, notificaciones,data.matadero,data.propia,data.pasto,data.tieneAnimales);
            }
        });

        function selectedRow() {
            $('#cambioTable tbody tr').each(function () {
                //var rowHTML = $($(this).html());
                var row = table.row($(this)).data();
                if (row.explotacion == selectedExploitationID) {
                    if (!$(this).hasClass('shown')) {
                        $(this).addClass('shown');
                        $(this).addClass('selected');
                    }
                }
            });
        };

        function DeselectRow() {
            $('#cambioTable tbody tr').each(function () {
                if ($(this).hasClass('shown')) {
                    $(this).removeClass('shown');
                }
            });
        };    

    }

    function loadSelectedExploitation(exploitation, description, notificaciones,matadero,propia,pasto,tieneAnimales) {
        data = { "exploitation": exploitation, "description": description, "notificaciones": notificaciones, "matadero": matadero, "propia": propia, "pasto": pasto, "tieneAnimales": tieneAnimales }
        $.ajax({
            url: location.protocol + "//" + location.host + location.pathname + "/loadSelectedExploitation",
            type: "post",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                // Recargo la página
                //location.reload();
                location="inicio.aspx"
                
            },
            error: function (response) {
                errorManagement(response, null);
            }
        });
    }

    successFn = function (response) {
      
        loadDataTable(response.lista);
    };
    errorFn = null;
    requestWS({ wsMethod: "/getExploitationList", data: "", "successFn": successFn, "errorFn": errorFn });
});