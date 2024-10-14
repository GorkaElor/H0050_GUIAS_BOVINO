var selectedEartags = [];
var crotal = "";
function getAssociatedFileSub(print) {
    data = { "print": print }
    getAssociatedFile(data);
}
function llamarImprimirDIB(crotal) {
   
    var data = { "crotal": crotal };

    successFn = function (response) {
        //location = "crotales_disponibles.aspx";
        var a;
      
            if (response.status = "200") {
                var url = response.url
                var openTab = window.open(url, '_blank');
                if (openTab) {
                    //Browser has allowed it to be opened
                    openTab.focus();
                } else {
                    //Browser has blocked it
                    alert(literalesGen[50028]); //'Por favor, habilite las ventanas emergentes en su navegador.'
                }

            }
            else {
                //errorManagement(response, null);
                console.log(response);
            }
        
    };
    errorFn = null;
    requestWS({ wsMethod: "/ImprimirDIB", data: data, "successFn": successFn, "errorFn": errorFn });
}
$(document).on("allLoaded", function () {
   $('#myModal').modal({ backdrop: 'static', keyboard: false });
    crotal = "";
    getEartagList();

    // Esta función se llama cuando se obtienen los crotales desde el webmethod y
    // hay que añadirlos al datatable.
    function loadEartagsDataTable(dataSet) {
        //console.log(dataSet);
        var columnDefs = [
               {
                   "targets": [1],
                   "sClass": "encoge"
               },
                {
                    "targets": [4],
                    "sClass": "encoge"
                }
        ];

        
        $.fn.dataTable.moment(selectedLanguageMomentDateType2);
        var table = $('#tabla-crotales').on('init.dt', function () {
            customColumnHeader();
            $('#myModal').modal('hide');
        })
            .DataTable({
               "data": dataSet,
               "columnDefs": columnDefs,
                "deferRender": true,
                "columns": [
                   {
                        "data": "crotal",
                        "title": "<div id='name' class='asc'>" + literalesPage[50706] + "</div>",
                        
                        "render": function (data, type, full, meta) {
                            var html = "";
                            if (full.color != "") {
                                html = '<strong style="color: ' + full.color + ';">' + full.crotal + '</strong>';
                            } else {
                                html = full.crotal;
                            };
                          

                            return html;
                        }
                    },
                    { "data": "nombre", "title": "<div id='name'><div id='show'></div> <div class='t_encoge'>" + literalesPage[50713] + "</div></div>" },
                    { "data": "sexo", "title": "<div id='name'>" + literalesPage[50707] + "</div>" },
                    { "data": "fecnacimiento", "title": "<div id='name'>" + literalesPage[50708] + "</div>" },
                    { "data": "razdes", "title": "<div id='name'><div id='show'></div> <div class='t_encoge'>" + literalesPage[50709] + "</div></div>" },     
                   {
                       "data": "pendientesan",
                       "title": "<div id='name'>" + literalesPage[53857] + "</div>",
                       "render": function (data, type, full, meta) {
                           var html2 = "";
                           if (full.colorpendientesan != "") {
                               html2 = '<strong style="color: ' + full.colorpendientesan + ';">' + full.pendientesan + '</strong>';
                           } else {
                               html2 = full.pendientesan;
                           }


                           return html2;
                       }
                   },
                   {
                       "data": "pendientevac",
                       "title": "<div id='name'>" + literalesPage[53858] + "</div>",
                       "render": function (data, type, full, meta) {
                           var html2 = "";
                           if (full.colorpendientevac != "") {
                               html2 = '<strong style="color: ' + full.colorpendientevac + ';">' + full.pendientevac + '</strong>';
                           } else {
                               html2 = full.pendientevac;
                           };
                          

                           return html2;
                       }
                   },
                   { "data": "fecvacprox", "title": "<div id='name'>" + literalesPage[53859] + "</div>" },
                   { "data": "tipovacprox", "title": "<div id='name'>" + literalesPage[53860] + "</div>" }
             
                ],
                "order": [],
                "language": {
                    "url": datatableLanguageUrl
                }
            });


        

       
        $('body').on('click', function (e) {
            //did not click a popover toggle or popover
            if ($(e.target).data('toggle') !== 'popover'
                && $(e.target).parents('.popover.in').length === 0) {
                $('[data-toggle="popover"]').popover('hide');
            }
        });

     
      
   
     
       

        function customColumnHeader() {
            $('#tabla-crotales th').each(function (index, th) {
                $(th).unbind('click');
                $(th).on('click', '#name', function (e) {
                    if ($(e.target).is('#show')) {
                        showHide(e, this);
                        return false;
                    }
                    if ($(th).find('#name').hasClass('asc')) {
                        $(th).find('#name').addClass('desc');
                        $(th).find('#name').removeClass('asc');
                        table.column(index).order('desc').draw();
                    }
                    else {
                        $(th).find('#name').addClass('asc');
                        $(th).find('#name').removeClass('desc');
                        table.column(index).order('asc').draw();
                    }
                    controlOrderShowHide();
                });
            });
        };

        $('#tabla-crotales').on('draw.dt', function () {
            controlOrderShowHide();
        });

        function controlOrderShowHide() {
            $.each(columnDefs, function (i, elem) {
                if (elem.sClass == "encoge") {
                    var index = elem.targets[0];
                    if ($(table.column(index).header()).hasClass('encoge')) {
                        $(table.column(index).nodes()).addClass('encoge');
                    }
                    else {
                        $(table.column(index).nodes()).removeClass('encoge');
                    }
                }
            });
        };

        function showHide(e, _this) {
            var th = table.column(_this.parentElement).index();
            var colIdx = table.column(th).index();
            console.log(colIdx);
            $(table.column(colIdx).header()).toggleClass('encoge');
            $(table.column(colIdx).nodes()).toggleClass('encoge');
        };

    }

   

    function getEartagList() {
        successFn = function (response) {
            loadEartagsDataTable(response.lista);
        };
        errorFn = function (response) {
            $('#myModal').modal('hide');
        };

        controlledErrorFn = function (response) {
            $('#myModal').modal('hide');
        }

        requestWS({ wsMethod: "/getEartagList", data: "", "successFn": successFn, "errorFn": errorFn, controlledErrorFn: controlledErrorFn });

        /*
        // Cargamos el datatable desde el webmethod
        $.ajax({
            url: location.protocol + "//" + location.host + location.pathname + "/getEartagList",
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                response = JSON.parse(response.d);
                if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
                    errorManagement(response, null);
                    $('#myModal').modal('hide');
                }
                else {
                    loadEartagsDataTable(response);
                }
            },
            error: function (response) {
                errorManagement(response, null);
            }
        });*/
    }
  

   
});




