$(document).on("allLoaded", function () {
    
    function loadDataTable(dataSet) {
        $('#titularesTable').DataTable({
            "data": dataSet,
            //"pageLength": 2,
            "ordering": true,
            "searching": true,
            "paging": true,
            "info": true,
            "autoWidth": false,
            "deferRender": true,
            "columns": [
                { "data": "nif", "title": literalesPage[51122] },
                { "data": "nombre", "title": literalesPage[51123] },
                { "data": "relacion", "title": literalesPage[51124]
                }
            ],
            "order": [],
            "language": {
                "url": datatableLanguageUrl
                }
        });
    }
    
    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/getHolders",
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

    requestWS({ wsMethod: "/getHolders", data: "", "successFn": successFn, "errorFn": null });

   
})