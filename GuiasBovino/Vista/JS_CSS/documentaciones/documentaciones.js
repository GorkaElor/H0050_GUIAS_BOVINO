var documentacionesTable = null;
var codDocumentacion = "";

$(document).on("allLoaded", function () {
    
   
    getDocumentaciones();
 
  

})


function getDocumentaciones() {
   
   

    successFn = function (response) {
        $("#documentaciones_totales").html(response.lista.length);
        loadDataTable(response.lista);
    };

    requestWS({ wsMethod: "/getDocumentaciones", data: "", "successFn": successFn, "errorFn": null });
}


function loadDataTable(dataSet) {
    if (documentacionesTable != null) {
        //Eliminar la tabla y los eventos de click.
        documentacionesTable.destroy();
        //$('#table-notificaciones').off('click');
        $('#table-documentaciones').off();
        $('#table-documentaciones').children().off();
    }

    var cont = 0;

    $.fn.dataTable.moment(selectedLanguageMomentDateType2);

    documentacionesTable = $('#table-documentaciones').DataTable({
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
                        html = '<img src="img/notif_new.png" alt="Nueva documenación"/>';
                    }
                    else if (data == "false") {
                        html = '<img src="img/notif_opened.png" alt="Documenación leída"/>';
                    }
                    else {
                        html = '';
                    }
                    return html;
                }
            },  {
                "data": "docdes",
                "orderable": true,
                "title": literalesPage[53869]
            }, {
                "data": null,
                "orderable": false,
                "render": function (data, type, full, meta) {
                    var html = "";
                    html = '<button id="descargar_' + full.doccod + '" class="btn btn-default icono"><i class="fa fa-download"></i></button>';


                    return html;
                }
            }
        ],
        "order": [],
        "language": {
            "url": datatableLanguageUrl
        }
    });



    $('#table-documentaciones').on('click', 'button', function (e) {
        var abutton = e.target.id.split("_");
        var button = abutton[0];
        var rowIndex = abutton[1];

        var data = documentacionesTable.row($(this).parents('tr')).data();

        if (button == "descargar")
        {
            
            //'marcamos vista la documntacion'
            var data2 = { "documentacion": rowIndex }


            successFn = function (response) {
                //location = "documentaciones.aspx";
                getDocumentaciones();
                //descargamos la documntacion
                var openTab = window.open(data.docurl, '_blank');
                if (openTab) {
                    //Browser has allowed it to be opened
                    openTab.focus();
                } else {
                    //Browser has blocked it
                    alert(literalesGen[50028]); //'Por favor, habilite las ventanas emergentes en su navegador.'
                }
            };

            requestWS({ wsMethod: "/documentacionVista", data: data2, "successFn": successFn, "errorFn": null });

          
         
        }

       
    });
}



function existeIndex(aIndex, index)
{
    $.each(aIndex, function (i, index) {
        if (aIndex[i] == index)
            return true;
        
    });
    return false;
}


