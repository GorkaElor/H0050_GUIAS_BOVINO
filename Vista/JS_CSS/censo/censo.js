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
                   "targets": [2],
                   "sClass": "encoge"
               },
                {
                    "targets": [3],
                    "sClass": "encoge"
                },
               {
                   "targets": [6],
                   "sClass": "encoge"
               }
        ];

        
        $.fn.dataTable.moment(selectedLanguageMomentDateType2);
        var table = $('#tabla-crotales').on('init.dt', function () {
            customColumnHeader();
            $('#myModal').modal('hide');
        })
            .DataTable({
                //"destroy": true,
                "data": dataSet,
                //"ordering": false,
                //"searching": false,
                //"paging": true,
                //"lengthChange": false,
                //"autoWidth": false,
                "columnDefs": columnDefs,
                "deferRender": true,
                "columns": [
                    {
                        "className": 'details-control',
                        "orderable": false,
                        "data": null,
                        "defaultContent": ''
                        //width:30
                    },
                    {
                        "data": "crotal",
                        "title": "<div id='name' class='asc'>" + literalesPage[50706] + "</div>",
                        
                        "render": function (data, type, full, meta) {
                            var html = "";
                            if (full.enmonte == "1") {
                                html = '<strong style="color: rgb(255, 0, 0);">' + full.crotal + '</strong>';

                            } else {
                                html = full.crotal;
                            };

                            return html;
                        }
                    },
                    { "data": "madre", "title": "<div id='name'><div id='show'></div> <div class='t_encoge'>" + literalesPage[53115] + "</div></div>" },
                    { "data": "nombre", "title": "<div id='name'><div id='show'></div> <div class='t_encoge'>" + literalesPage[50713] + "</div></div>" },
                    { "data": "sexo", "title": "<div id='name'>" + literalesPage[50707] + "</div>" },
                    { "data": "fecnacimiento", "title": "<div id='name'>" + literalesPage[50708] + "</div>" },
                    { "data": "razdes", "title": "<div id='name'><div id='show'></div> <div class='t_encoge'>" + literalesPage[50709] + "</div></div>" },       
                    {
                "data": "dib",
                "orderable": false,
                "render": function (data, type, full, meta) {
                    var html = "";
                    if (data == "true") {
                        html = '<button class="btn btn-default" onclick ="javascript:llamarImprimirDIB(&#34;' + full.crotal + '&#34); return false;"><i class="fa fa-print"></i>DIB</button></a>';
                        
                    }
                    return html;
                }
            }
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

        // Add event listener for opening and closing details
        $('#tabla-crotales tbody').delegate('td.details-control', 'click', function () {
            var tr = $(this).closest('tr');
            var row = table.row(tr);

            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            }
            else {
                // Open this row
                //row.child(format(row.data())).show();
                //tr.addClass('shown');
                getGuideEartagData(row, tr);
            }
        });

        /* Formatting function for row details - modify as you need */
        function formatList(data, row, tr) {
            tuberculosis_realizada = "";
            brucelosis_realizada = "";
            perineumonia_realizada = "";
            leucosis_realizada = "";
            ibr_realizada = "";
            lazul_realizada = "";
            lazul_pcr_realizada = "";
            paratuberculosis_realizada = "";
            anticuerpos_realizada = "";
            antigenos_realizada = "";
            neoesporas_realizada = "";

            if (data.tuberculosis.realizada == "true") {
                tuberculosis_realizada = "checked";
            }
            if (data.brucelosis.realizada == "true") {
                brucelosis_realizada = "checked";
            }
            if (data.perineumonia.realizada == "true") {
                perineumonia_realizada = "checked";
            }
            if (data.leucosis.realizada == "true") {
                leucosis_realizada = "checked";
            }
            if (data.ibr.realizada == "true") {
                ibr_realizada = "checked";
            }

            if (data.lazul != null) {
                if (data.lazul.realizada == "true") {
                    lazul_realizada = "checked";
                }
                if (data.lazulpcr.realizada == "true") {
                    lazul_pcr_realizada = "checked";
                }
                if (data.paratuberculosis.realizada == "true") {
                    paratuberculosis_realizada = "checked";
                }
                if (data.anticuerpos.realizada == "true") {
                    anticuerpos_realizada = "checked";
                }
                if (data.antigenos.realizada == "true") {
                    antigenos_realizada = "checked";
                }
                if (data.neoesporas.realizada == "true") {
                    neoesporas_realizada = "checked";
                }

            }
            //console.log(literalesPage);

            var fecha = literalesPage[50714];
            var veterinario = literalesPage[50715];
            var equipo = literalesPage[50716];
            var tipo = literalesPage[50717];
            var tuberculosis = literalesPage[50718];
            var brucelosis = literalesPage[50719];
            var perineumonia = literalesPage[50720];
            var leucosis = literalesPage[50721];
            var ibr = literalesPage[50722];
            var lazul = literalesPage[50723];
            var lazulpcr = literalesPage[50723] + " PCR";
            var paratuberculosis = literalesPage[50724];
            var anticuerpos = literalesPage[50725];
            var antigenos = literalesPage[50726];
            var neoesporas = literalesPage[50727];

            

            html = '<div class="row">' +
          '<div class="col-xs-4">' +
          '<dl class="dl-horizontal">' +
          '<dt>' + fecha + ':</dt>' +
          '<dd>' + data.fecha + '</dd>' +
          '<dt>' + veterinario + ':</dt>' +
          '<dd>' + data.veterinario + '</dd>' +
          '<dt>' + equipo + ':</dt>' +
          '<dd>' + data.equipo + '</dd>' +
          '<dt>Tipo:</dt>' +
          '<dd>' + data.tipo + '</dd>' +
          '</dl>' +
          '</div>' +
          '<div class="col-xs-8">' +
          '<dl class="dl-horizontal">' +
          '<dt>' + tuberculosis + ':<input type="checkbox" class="enf_check"  disabled ' + tuberculosis_realizada + '></dt>' +
          '<dd><dl>' +
            '<dt>P1:</dt> <dd>' + data.tuberculosis.P1 + '</dd>' +
            '<dt>P2:</dt> <dd>' + data.tuberculosis.P2 + '</dd>' +
            '<dt>DOL:</dt> <dd>' + data.tuberculosis.DOL + '</dd>' +
            '<dt>MT:</dt> <dd>' + data.tuberculosis.MT + '</dd>' +
            '<dt>C:</dt> <dd>' + data.tuberculosis.C + '</dd></dl></dd>' +
          '<dt>' + brucelosis + ' :<input type="checkbox" class="enf_check"  disabled ' + brucelosis_realizada + '></dt>' +
          '<dd><dl>' +
            '<dt>RB:</dt> <dd>' + data.brucelosis.RB + '</dd>' +
            '<dt> F:</dt> <dd>' + data.brucelosis.F + '</dd>' +
            '<dt>C:</dt> <dd>' + data.brucelosis.C + '</dd> </dl></dd>' +
          '<dt>' + perineumonia + ':<input type="checkbox" class="enf_check"  disabled ' + perineumonia_realizada + '></dt>' +
          '<dd><dl>' +
            '<dt>F:</dt> <dd>' + data.perineumonia.F + '</dd>' +
            //'<dt> N:</dt> <dd>' + data.perineumonia.N + '</dd>' +
            '<dt> MT:</dt> <dd>' + data.perineumonia.MT + '</dd>' +
            '<dt>C:</dt> <dd>' + data.perineumonia.C + '</dd> </dl></dd>' +

          '<dt>' + leucosis + ':<input type="checkbox" class="enf_check"  disabled ' + leucosis_realizada + '></dt>' +
          '<dd><dl>' +
            '<dt>EL:</dt> <dd>' + data.leucosis.EL + '</dd>' +
            '<dt>IDG:</dt> <dd>' + data.leucosis.IDG + '</dd>' +
            '<dt>C:</dt> <dd>' + data.leucosis.C + '</dd> </dl></dd>' +


            '<dt>' + ibr + ':<input type="checkbox" class="enf_check" disabled ' + ibr_realizada + '></dt>' +
          '<dd><dl>' +
               '<dt>GE:</dt> <dd>' + isNull(isNull(data.ibr).I) + '</dd>' +
               '<dt>GB:</dt> <dd>' + isNull(isNull(data.ibr).IBRGB) + '</dd>' +
             '</dl></dd>' +


          '<dt>' + lazul + ':<input type="checkbox" class="enf_check"  disabled ' + lazul_realizada + '></dt>' +
          '<dd><dl>' +
            '<dt>LA:</dt> <dd>' + isNull(isNull(data.lazul).LA) + '</dd>' +
          '</dl></dd>' +

            '<dt>' + lazulpcr + ':<input type="checkbox" class="enf_check"  disabled ' + lazul_pcr_realizada + '></dt>' +
          '<dd><dl>' +
            '<dt>C:</dt> <dd>' + isNull(isNull(data.lazulpcr).C) + '</dd>' +
          '</dl></dd>' +

          '<dt>' + paratuberculosis + ':<input type="checkbox" class="enf_check"  disabled ' + paratuberculosis_realizada + '></dt>' +
          '<dd><dl>' +
            '<dt>C:</dt> <dd>' + isNull(isNull(data.paratuberculosis).C) + '</dd>' +
          '</dl></dd>' +

          '<dt>' + anticuerpos + ' :<input type="checkbox" class="enf_check"  disabled ' + anticuerpos_realizada + '></dt>' +
          '<dd><dl>' +
            '<dt>C:</dt> <dd>' + isNull(isNull(data.anticuerpos).C) + '</dd>' +
          '</dl></dd>' +

          '<dt>' + antigenos + ':<input type="checkbox" class="enf_check"  disabled ' + antigenos_realizada + '></dt>' +
          '<dd><dl>' +
            '<dt>C:</dt> <dd>' + isNull(isNull(data.antigenos).C) + '</dd>' +
          '</dl></dd>' +

          '<dt>' + neoesporas + ':<input type="checkbox" class="enf_check"  disabled ' + neoesporas_realizada + '></dt>' +
          '<dd><dl>' +
            '<dt>C:</dt> <dd>' + isNull(isNull(data.neoesporas).C) + '</dd>' +
          '</dl></dd>' +


          '</div>';
            //información de vacunas
            html = html + '<div class="row"><div class="inline"><table><tbody><tr><td><dl class="dl-horizontal"><dt>' + literalesPage[53840] + ':</dt><dd>' + data.vacuna.tipo + '</dd></dl></td><td><dl class="dl-horizontal"><dt>' + literalesPage[53841] + ':</dt><dd>' + data.vacuna.fechavacunacion + '</dd></dl></td><td><dl class="dl-horizontal"><dt>' + literalesPage[53842] + ':</dt><dd>' + data.vacuna.proximafechavacunacion + '</dd></dl></td></tr></tbody></table></div>';

            row.child(html).show();
            tr.addClass('shown');
        }

        function getGuideEartagData(row, tr) {
            d = row.data();
            data = { "crotal": d.crotal };

            successFn = function (response) {
                formatList(response, row, tr);
            };
                        
            requestWS({ wsMethod: "/getUltimoSaneamiento", data: data, "successFn": successFn, "errorFn": null });
        

            //$.ajax({
            //    url: location.protocol + "//" + location.host + location.pathname + "/getUltimoSaneamiento",
            //    type: "post",
            //    data: JSON.stringify(data),
            //    contentType: "application/json; charset=utf-8",
            //    dataType: "json",
            //    success: function (response) {
            //        response = JSON.parse(response.d);
            //        if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
            //            errorManagement(response, null);
            //        }
            //        else {
            //            formatList(response, row, tr);
            //        }
            //    },
            //    error: function (response) {
            //        errorManagement(response, null);
            //    }
            //});
        }

        //// Activar o desactivar el boton de selección
        //$('#tabla-crotales').delegate("button.seleccionar.click", "click", function (e) {
        //    e.preventDefault();
        //    var row = table.row($(this).parents('tr')).data();
        //    $(this).toggleClass('activo');
        //    if ($(this).hasClass('activo')) {
        //        //$(this).text('Seleccionado');
        //        //$(this).parents("tr").toggleClass('selected');
        //        selectedEartags.push(row.crotal);
        //    }
        //    else {
        //        //$(this).text('Seleccionar');
        //        var index = selectedEartags.indexOf(row.crotal);
        //        selectedEartags.splice(index, 1);
        //    }
        //    return false;
        //});

        //$('#tabla-crotales').delegate("button.seleccionar.noclick", "click", function (e) {
        //    e.preventDefault();

        //});


       

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




