$(document).on("allLoaded", function () {

    function loadDataTable(dataSet) {
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
                { "data": "tipo", "title": literalesPage[51141] },
                { "data": "resultado", "title": literalesPage[51142] },
                { "data": "fecha", "title": literalesPage[51143] }
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