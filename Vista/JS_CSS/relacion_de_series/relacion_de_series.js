$(document).on("allLoaded", function () {

 

    $("#fecha_notificacion").val(moment(moment()).format(selectedLanguageMomentDateType));


    $('#btnAlta').on('click', function (e) {
        $('#myModal').modal({ backdrop: 'static', keyboard: false });
    });
      
    

    $('#btnGuardar').on('click', function (e) {
      
        var fecha_notificacion, mecod, ocacod, cadesde, cahasta, caactual
        $("#messageBox").hide();
        fecha_notificacion = moment($("#fecha_notificacion").val(), selectedLanguageMomentDateType).format(WSMomentDateType);
        debugger;
        mecod = 1; //$('#mecod').val();
        ocacod = $('#ocas').val();
        cadesde = $('#cadesde').val();
        cahasta = $('#cahasta').val();
        caactual = $('#caactual').val();
        var valido = true;
        
        if ((valido) && (cadesde == "")) {
            valido = false;
            message = "<li><label class='validationerror'>" + literalesPage[53808] + "</label></li>";
            $("#messageBox").html(message);
            $("#messageBox").show();
        }
        if ((valido) && (isNaN(cadesde))) {
            valido = false;
            message = "<li><label class='validationerror'>" + literalesPage[53809] + "</label></li>";
            $("#messageBox").html(message);
            $("#messageBox").show();
        }
         


        if ((valido) && (cahasta == "")) {
            valido = false;
            message = "<li><label class='validationerror'>" + literalesPage[53810] + "</label></li>";
            $("#messageBox").html(message);
            $("#messageBox").show();
        }

        if ((valido) && (isNaN(cahasta))) {
            valido = false;
            message = "<li><label class='validationerror'>" + literalesPage[53811] + "</label></li>";
            $("#messageBox").html(message);
            $("#messageBox").show();
        }
        if ((valido) && (caactual == "")) {
            valido = false;
            message = "<li><label class='validationerror'>" + literalesPage[53812] + "</label></li>";
            $("#messageBox").html(message);
            $("#messageBox").show();
        }
        if ((valido) && (isNaN(caactual))) {
            valido = false;
            message = "<li><label class='validationerror'>" + literalesPage[53813] + "</label></li>";
            $("#messageBox").html(message);
            $("#messageBox").show();
        }
        if ((valido) && (ocacod == "")) {
            valido = false;
            message = "<li><label class='validationerror'>" + literalesPage[53814] + "</label></li>";
            $("#messageBox").html(message);
            $("#messageBox").show();
        } 
        if (valido) {
            $("#messageBox").hide();
            //alert(fecha_notificacion + "\n" + mecod + "\n" + cadesde + "\n" + cahasta + "\n" + caactual);


            successFn = function (response) {
                $("#messageBox").hide();
                alert(response.message);
                $('#myModal').modal('hide');
                location = "relacion_de_series.aspx";
            };
            errorFn = function (response) {
                $("#messageBox").html(response.message);
                $("#messageBox").show();
            };
            try {
                var data = { "fechaalta": fecha_notificacion, "mecod": mecod, "ocacod": ocacod, "cadesde": cadesde, "cahasta": cahasta, "caactual": caactual };
                requestWS({ wsMethod: "/notificarSerieCrotales", data: data, "successFn": successFn, "errorFn": null });

               

            } catch (ex) {
                $("#messageBox").html(ex.message);
                $("#messageBox").show();
            }

           

          

        }
      
    });

    
    $('#btnCerrar').on('click', function (e) {
        $('#myModal').modal('hide');

    });

    function loadDataTable(dataSet) {
        var table = $('#relacionSeries').DataTable({
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
                { "data": "ocades", "title": literalesPage[53797] },
                { "data": "medes", "title": literalesPage[53807] },
                { "data": "fechaalta", "title": literalesPage[51132] },
                { "data": "cadesde", "title": literalesPage[53803] },
                { "data": "cahasta", "title": literalesPage[53804] },
                { "data": "caactual", "title": literalesPage[53805] }//,
                //{
                //    "data": null,
                //    "orderable": false,
                //    "render": function (data, type, full, meta) {                                                    
                //        button = '<button class="btn btn-default icono"><i class="fa fa-pencil"></i></button>';
                //        return button;
                //    }
                //}
            ],
            "order": [],
            "language": {
                "url": datatableLanguageUrl
                }
        });

        $('#relacionSeries').on('click', 'button', function (e) {
            $('#myModal').modal({ backdrop: 'static', keyboard: false });


            //var row = table.row($(this).parents('tr')).data();
            //data = { "row": row, "print": print };
            //getAssociatedFile(data);
        });
    }
    
   


    successFn = function (response) {
        loadDataTable(response.lista);
    };
       

    requestWS({ wsMethod: "/getConsultaSerieCrotales", data: "", "successFn": successFn, "errorFn": null });
   
})