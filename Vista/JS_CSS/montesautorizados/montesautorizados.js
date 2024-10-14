$(document).on("allLoaded", function () {

    function loadDataTable(dataSet) {
        var ultimacampana = dataSet[0].campana;
        $.fn.dataTable.moment(selectedLanguageMomentDateType2);
        $('#qualificationTable').DataTable({
            "data": dataSet,
            //"pageLength": 2,
            "ordering": true,
            "searching": true,
            "paging": true,
            "info": true,
            "deferRender": true,
            "columns": [
                { "data": "campana", "title": literalesPage[51002] },
                { "data": "explotacion", "title": literalesPage[50320] },
                { "data": "denominacion", "title": literalesPage[50713] },
                {
                    "data": "animalesautorizados", "title": literalesPage[53833]
                },
                {
                    "data": "animalesporsubir", "title": literalesPage[53834],
                    "render": function (data, type, full, meta) {
                        dato = '';
                        if (full.campana == ultimacampana) {
                            dato = data;
                            // button = '<button class="btn seleccionar click activo"  onclick="clikadoCrotal(this,\'' + isNull(data.crotal) + '\')"></button>';
                        }
                        return dato;
                    }
                }
            ],
            "order": [],
            "language": {
                "url": datatableLanguageUrl
                }
        });
    }

    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/getQualifications",
    //    type: "post",
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        response = JSON.parse(response.d);
    //        if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
    //            //console.log(response);
    //            errorManagement(response, null);
    //        }
    //        else {
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

    requestWS({ wsMethod: "/getQualifications", data: "", "successFn": successFn, "errorFn": null });


})