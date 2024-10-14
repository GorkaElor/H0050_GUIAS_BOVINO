$(document).on("allLoaded", function () {
 
    function loadDataTable(dataSet) {
        var table = $('#libroRegistro').DataTable({
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
                { "data": "campana", "title": literalesPage[51002] },
                { "data": "descripcion", "title": literalesPage[51003] },
                {
                    "data": null,
                    "orderable": false,
                    "render": function (data, type, full, meta) {                                                    
                        button = '<button class="btn btn-default icono"><i class="fa fa-print"></i></button>';
                        return button;
                    }
                }
            ],
            "order": [],
            "language": {
                "url": datatableLanguageUrl
                }
        });

        $('#libroRegistro').on('click', 'button', function (e) {
            var row = table.row($(this).parents('tr')).data();
            data = { "row": row, "print": print };
            getAssociatedFile(data);
        });
    }
    
    //$.ajax({
    //    url: location.protocol + "//" + location.host + location.pathname + "/getRegisterBook",
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
       

    requestWS({ wsMethod: "/getRegisterBook", data: "", "successFn": successFn, "errorFn": null });
   
})