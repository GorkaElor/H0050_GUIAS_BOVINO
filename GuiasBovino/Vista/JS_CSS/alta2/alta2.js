var selectedEartags = [];

var selectedEartagsComputables = [];
/*
var crotales = [];


function anadirCrotal(crotal) {
    if (crotales.indexOf(crotal) == -1) {
        crotales.push(crotal);
    }
};
function eliminarCrotal(crotal) {
    if (crotales.indexOf(crotal) > -1) {
        //el crotal está en el array
        //hay que eliminar
        var index = crotales.indexOf(crotal);
        crotales.splice(index, 1);
    }
};

function clikadoCrotal(b, crotal) {
    if (b.className == 'btn seleccionar click activo') {
        //viene de estar activo y se desactiva
        //hay que sacarlo de la lista de crotales
        eliminarCrotal(crotal);
    }
    else {
        if (b.className == 'btn seleccionar click') {
            //viene de estar desactivado y se activa
            //hay que meterlo en la lista de crotales
            anadirCrotal(crotal);
        }
    }
};
*/

$(document).on("allLoaded", function () {

    $('#myModal').modal({ backdrop: 'static', keyboard: false });
   
    function getSelectedEarTags() {
        $.ajax({
            url: location.protocol + "//" + location.host + location.pathname + "/getSelectedEarTags",
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                response = JSON.parse(response.d);
                if (response != null) {
                    selectedEartags = response;
                }
                getEartagList();
            },
            error: function (response) {
                errorManagement(response, null);
            }
        });

        //successFn = function (response) {
        //    if (response != null) {
        //        selectedEartags = response;
        //    }
        //    getEartagList();
        //};

        //requestWS({ wsMethod: "/getSelectedEarTags", data: "", "successFn": successFn, "errorFn": null });
    }

    // Al cargar la página marcar como seleccionados los crotales que hayan podido
    // ser seleccionados anteriormente.
    getSelectedEarTags();


   


    // Esta función se llama cuando se obtienen los crotales desde el webmethod y
    // hay que añadirlos al datatable.
    function loadEartagsDataTable(dataSet) {
        //console.log(dataSet);
        var columnDefs = [
             {
                 "targets": [7],
                 "visible": false
             },
             {
                 "targets": [1],
                 //"orderDataType": 'dom-checkbox'
                 "orderData": [7]
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
        /*
        $.fn.dataTable.ext.order['dom-checkbox'] = function (settings, col) {
            return this.api().column(col, { order: 'index' }).nodes().map(function (td, i) {
                return $(td).closest('tr').hasClass('selected') ? '1' : '0';
            });
        }*/

        $.fn.dataTable.moment(selectedLanguageMomentDateType2);
        var table = $('#tabla-crotales').on('init.dt', function () {
            customColumnHeader();
            //selectedRows();
            selectClickEvents();
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
                        //"width": 15
                    },
                    {
                        //"width":25,
                        "data": null, "title": "<div id='name'>" + literalesPage[50411] + "</div>",
                        "render": function (data, type, full, meta) {
                            if (selectedEartags.indexOf(data.crotal) > -1) {
                                button = '<button class="btn seleccionar click activo"></button>';
                               // button = '<button class="btn seleccionar click activo"  onclick="clikadoCrotal(this,\'' + isNull(data.crotal) + '\')"></button>';
                            }
                            else if (data.apto == "true") {
                                button = '<button class="btn seleccionar click"></button>';
                                //button = '<button class="btn seleccionar click" onclick="clikadoCrotal(this,\'' + isNull(data.crotal) + '\')"></button>';
                            }
                            else {/*
                            tooltip = "&#34;" + data.motivonoapto + "&#34;";
                            var pop = '<a href="#" id="motivo" class="btn btn-lg btn-info" rel="popover" data-content="' + tooltip + '">m</a>';
                            //pop = ' <button id="motivo" class="btn btn-info" rel="popover"  data-content="' + tooltip + '" style="width:25px;"><i class="fa fa-info"></i></button>';
                            var pop = '<a id="popover" class="btn btn-lg btn-info" role="button" rel="popover" data-content="' + tooltip + '" data-placement="top"><i class="fa fa-info"></i></a>';
                            button = '<div style="display:inline;"><button title="' + tooltip + '" class="btn seleccionar" disabled>No seleccionable</button>' + pop + '</div>';
                            */

                                var id = "pop" + meta.row;
                                button = '<button id="' + id + '" class="btn seleccionar noclick"  rel="popover" data-container="body" data-toggle="popover" data-placement="top">' + literalesPage[50413] + '</button>';

                                //button = '<button class="btn seleccionar noclick"  rel="popover" data-container="body_'+data.crotal+'" data-toggle="popover" data-placement="top">' + literalesPage[50413] + '</button>';
                                //var tooltipFN = function (dataP) {
                                //    var tooltip = dataP.motivonoapto;
                                //    var popOverSettings = {
                                //        placement: 'top',
                                //        container: 'body',
                                //        html: true,
                                //        selector: '[rel="popover"]',
                                //        content: function () {
                                //            return tooltip;
                                //        }
                                //    }

                                //    return popOverSettings;
                                //};
                              
                                //$('#body_' + data.crotal).popover(tooltipFN(data));
                            }


                            return button;
                        }
                    },
                    { "data": "crotal", "title": "<div id='name' class='asc'>" + literalesPage[50407] + "</div>" },
                    { "data": "nombre", "title": "<div id='name'><div id='show'></div> <div class='t_encoge'>" + literalesPage[50417] + "</div></div>" },
                    { "data": "sexo", "title": "<div id='name'>" + literalesPage[50408] + "</div>" },
                    { "data": "fecnacimiento", "title": "<div id='name'>" + literalesPage[50409] + "</div>" },
                    { "data": "razdes", "title": "<div id='name'><div id='show'></div> <div class='t_encoge'>" + literalesPage[50410] + "</div></div>" }
                    ,
                    {
                        "data": "seleccion", "title": "<div id='name' class='asc'> hidden</div>"
                    }
                ],
                "order": [],
                "language": {
                    "url": datatableLanguageUrl
                }
            });

        $('#tabla-crotales').on('draw.dt',
            function () {
                $('button[id^="pop"]').each(
                    function (index, button) {
                        var motivonoapto = table.row($(button).closest('tr')).data().motivonoapto;
                        $(button).parents('td').popover({ 'placement': 'top', 'content': motivonoapto, 'container': 'td' });
                    }
                );
            }
        );

        /*
        function selectedRows() {
            $('#tabla-crotales tbody tr').each(function () {
                //var rowHTML = $($(this).html());
                var row = table.row($(this)).data();
                if (row != undefined) {
                    if (selectedEartags.indexOf(row.crotal) > -1) {
                        $(this).toggleClass('selected');
                    }
                }
            });
        };
        */
        /*
        function selectClickEvents() {
            //// Activar o desactivar el boton de selección
            $('#tabla-crotales').delegate("button.seleccionar.click", "click", function (e) {
                e.preventDefault();
                var row = table.row($(this).parents('tr')).data();
                $(this).toggleClass('activo');
                if ($(this).hasClass('activo')) {
                    $(this).parents("tr").toggleClass('selected');
                    selectedEartags.push(row.crotal);
                }
                else {
                    var index = selectedEartags.indexOf(row.crotal);
                    selectedEartags.splice(index, 1);
                    $(this).parents("tr").toggleClass('selected');
                }
                return false;
            });

            $('#tabla-crotales').delegate("button.seleccionar.noclick", "click", function (e) {
                e.preventDefault();

            });
        }
        */
    
        function selectClickEvents() {
            //// Activar o desactivar el boton de selección
            $('#tabla-crotales').delegate("button.seleccionar.click", "click", function (e) {
                //debugger;
                e.preventDefault();
                $("#messageBox").html('')

                if (selectedEartags.length > 49) {
                    return false;
                };
            


                var row = table.row($(this).parents('tr')).data();
                if (row.seleccion == 1) {
                    if ((tipoguia == "0") || (tipoguia == "2")) {
                        //el destino es un monte, hay que controlar animales que puede subir

                        //SE QUITA EL 04/05/2020 
                        //se quiere que solo los mayores de 6 meses cuenten para el balance
                        //desde el web services vendra como computable="-1"
                       // if ((animalespermitidospasto - selectedEartags.length) == 0) {
                        if (((animalespermitidospasto - selectedEartagsComputables.length) == 0) && (row.computable=="true")) {
                       
                            //mostrar mensaje "No puede subir mas animales al monte"
                            $("#messageBox").show()

                            $("#messageBox").html(" <li><label class='validationerror' id='autorizacion_monte-error' style='display: inline-block;' for='autorizacion_monte'>No puede subir mas animales al monte.</label></li>");

                            return false;
                        };
                    };
                    row.seleccion = 2;
                    selectedEartags.push(row.crotal);
                    if (row.computable == "true") {
                        selectedEartagsComputables.push(row.crotal);
                    };
                    table.row($(this).parents('tr')).data(row).draw(false);
                }
                else {
                    var index = selectedEartags.indexOf(row.crotal);
                    selectedEartags.splice(index, 1);
                    if (row.computable == "true") {
                        selectedEartagsComputables.splice(index, 1);
                    };
                    row.seleccion = 1;
                    table.row($(this).parents('tr')).data(row).draw(false);
                }
                return false;
            });

            $('#tabla-crotales').delegate("button.seleccionar.noclick", "click", function (e) {
                e.preventDefault();

            });
        }

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

            //console.log(data);

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

            if (data.lazul != null)
            {
                if (data.lazul.realizada == "true") {
                    lazul_realizada = "checked";
                }
                //lazul_pcr_realizada
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

            var fecha = literalesPage[50420];
            var veterinario = literalesPage[50421];
            var equipo = literalesPage[50422];
            var tipo = literalesPage[50423];
            var tuberculosis = literalesPage[50424];
            var brucelosis = literalesPage[50425];
            var perineumonia = literalesPage[50426];
            var leucosis = literalesPage[50427];
            var ibr = literalesPage[50428];
            var lazul = literalesPage[50429];
            var lazulpcr = "LA PCR";
            var paratuberculosis = literalesPage[50430];
            var anticuerpos = literalesPage[50431];
            var antigenos = literalesPage[50432];
            var neoesporas = literalesPage[50433];
            
            


            html = '<div class="row">' +
          '<div class="col-xs-4">' +
          '<dl class="dl-horizontal">' +
          '<dt>' + fecha + ':</dt>' +
          '<dd>' + data.fecha + '</dd>' +
          '<dt>' + veterinario + ':</dt>' +
          '<dd>' + data.veterinario + '</dd>' +
          '<dt>' + equipo + ':</dt>' +
          '<dd>' + data.equipo + '</dd>' +
          '<dt>' + tipo + ':</dt>' +
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
            '<dt>LA:</dt> <dd>' + isNull(isNull(data.lazulpcr).C) + '</dd>' +
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
            /*
            $.ajax({
                url: location.protocol + "//" + location.host + location.pathname + "/getUltimoSaneamiento",
                type: "post",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    response = JSON.parse(response.d);
                    if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
                        errorManagement(response, null);
                    }
                    else {
                        formatList(response, row, tr);
                    }
                },
                error: function (response) {
                    errorManagement(response, null);
                }
            });*/
        }
        /*
        function selectClickEvents() {
            //// Activar o desactivar el boton de selección
            $('#tabla-crotales').delegate("button.seleccionar.click", "click", function (e) {
                e.preventDefault();
                var row = table.row($(this).parents('tr')).data();
                $(this).toggleClass('activo');
                if ($(this).hasClass('activo')) {
                    $(this).parents("tr").toggleClass('selected');
                    selectedEartags.push(row.crotal);
                }
                else {
                    var index = selectedEartags.indexOf(row.crotal);
                    selectedEartags.splice(index, 1);
                    $(this).parents("tr").toggleClass('selected');
                }
                return false;
            });

            $('#tabla-crotales').delegate("button.seleccionar.noclick", "click", function (e) {
                e.preventDefault();

            });
        }*/

        // Al darle al boton siguiente se añaden a la guia a validar los
        // crotales seleccionados.
        $("#btnSiguientePaso").click(function (e) {
            // selectedRows = $.map(table.rows('.btn seleccionar click activo').data(), function (value, key) {
            //     return { "crotal": value.crotal };
            //});

            /*
            selectedEartagsList = $.map(selectedEartags, function (value, key) {
                return { "crotal": value };
            });
            */

            //Comprobamos que haya seleccionado algún crotal.
            if (selectedEartags != null && selectedEartags.length > 0) {
                e.preventDefault();
                e.stopPropagation();
                SetCrotalesInValidarGuia(selectedEartags,3);
            }
            else {
                $("#alert-crotales").modal('show');
                //alert("SIN CROTALES");
                return false;
            }


        });

        $("#btnPasoAnterior").click(function (e) {
            //Comprobamos que haya seleccionado algún crotal.
            if (selectedEartags != null && selectedEartags.length > 0) {
                SetCrotalesInValidarGuia(selectedEartags,1);
            }

        });

        $('#alert-crotales').on('click', '.btn-ok', function (e) {
            $("#alert-crotales").modal('hide');
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
            //console.log(colIdx);
            $(table.column(colIdx).header()).toggleClass('encoge');
            $(table.column(colIdx).nodes()).toggleClass('encoge');
        };

    }

    function setSelectedValues(response) {
        response = $.map(response, function (val, key) {
            if (val.apto.toLowerCase() == "false") {
                val["seleccion"] = 0;
            }
            else if (val.apto.toLowerCase() == "true") {
                val["seleccion"] = 1;
            }

            index = selectedEartags.indexOf(val.crotal);
            if (index > -1) {
                if (val.apto.toLowerCase() == "false") {
                    selectedEartags.splice(index, 1);
                }
                else {
                    val["seleccion"] = val.crotal;
                }
            }
            return val;
        });
        return response;
    }


    function getEartagList() {
        successFn = function (response) {
            response = response.lista
            /*
            selectedEartags = $.map(selectedEartags, function (val, i) {
                //index = response.indexOf(val); console.log(index);
                crotal_ok = $.grep(response, function (val_) {
                    return val_.crotal == val && val_.apto.toLowerCase() == "true";
                });
                if (crotal_ok.length > 0) {
                    return crotal_ok[0].crotal;
                };
            });
            */
            response = setSelectedValues(response);
            loadEartagsDataTable(response);
        };
        errorFn = function (response) {
            $('#myModal').modal('hide');
        };

        controlledErrorFn = function (response) {
            $('#myModal').modal('hide');
        }

        requestWS({ wsMethod: "/getEartagList", data: "", "successFn": successFn, "errorFn": errorFn, controlledErrorFn: controlledErrorFn });
        /*
        $.ajax({
            url: location.protocol + "//" + location.host + location.pathname + "/getEartagList",
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                response = JSON.parse(response.d);
                if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
                    errorManagement(response, null);
                }
                else {
                    //console.log(selectedEartags);
                    selectedEartags = $.map(selectedEartags, function (val, i) {
                        //index = response.indexOf(val); console.log(index);
                        crotal_ok = $.grep(response, function (val_) {
                            return val_.crotal == val && val_.apto == "true";
                        });
                        if (crotal_ok.length > 0) {
                            return crotal_ok[0].crotal;
                        };
                    });

                    loadEartagsDataTable(response);
                }
            },
            error: function (response) {
                errorManagement(response, null);
            }
        });*/
    }

    function SetCrotalesInValidarGuia(eartags, step) {
        var data = { "crotales": JSON.stringify(eartags) };

        $.ajax({
            url: location.protocol + "//" + location.host + location.pathname + "/setCrotalesInValidarGuia",
            type: "post",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (step == 1) {
                    location = "alta1.aspx";
                }
                else {
                    location = "alta3.aspx";
                }
                return location;
            },
            error: function (response) {
                errorManagement(response, null);
            }
        });


        //successFn = function (response) {
        //        if (step == 1) {
        //            location = "alta1.aspx";
        //        }
        //        else {
        //            location = "alta3.aspx";
        //        }
        //        return location;
        //};

        //errorFn = function (response) {
        //}

        //requestWS({ wsMethod: "/setCrotalesInValidarGuia", data: data, "successFn": successFn, "errorFn": errorFn });
    }

    function CancelGuide() {
        $.ajax({
            url: location.protocol + "//" + location.host + location.pathname + "/CancelGuide",
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });

    }

    $("#btnCancelar").click(function (e) {
        CancelGuide();
    });

});