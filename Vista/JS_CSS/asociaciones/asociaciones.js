$(document).on("allLoaded", function () {

   

    function loadDataTable(dataSet) {
        $.fn.dataTable.moment(selectedLanguageMomentDateType2);
        $('#associationTable').DataTable({
            "data": dataSet,
            //"pageLength": 2,
            "ordering": true,
            "searching": true,
            "paging": true,
            "info": true,
            "deferRender": true,
            "columns": [
                { "data": "fechaalta", "title": literalesPage[51132] },
                { "data": "asociacion", "title": literalesPage[51131] }
            ],
            "order": [],
            "language": {
                "url": datatableLanguageUrl
                }
        });
    }

    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/getAssociations",
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

    requestWS({ wsMethod: "/getAssociations", data: "", "successFn": successFn, "errorFn": null });


})