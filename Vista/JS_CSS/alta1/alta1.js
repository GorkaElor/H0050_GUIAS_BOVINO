var exploitationSelected = false;
var exploitationId = null;
var exploitationsDataTable = null;

var exploitationSelectedInicial = false;
var exploitationIdInicial = null;
var exploitationsDataTableInicial = null;


var destinopasto = "false";

var carriersDataTable = null;
var thcod = "";
var provincia = "";
var muncod = "";
var municipio = "";
var countriesList = {};
var countriesData = []
var citiesList = {};

//Cargar los municipios
$.when(loadCities())
.then(function (response) {
    citiesList = response.citiesList;
})
.fail(function () {
    errorManagement(null, null);
});


// Botones buscar
$(document).on("allLoaded", function () {
    //inicialmente capa comprador no visible
    $("#capacomprador").hide();
    $("#exp_destino_matadero").hide();

    if ($("#exp_destino").val().length == 14) {
        exploitationId = $("#exp_destino").val();
        exploitationSelected = true;
    }
    //inicialmente si pasto ejecutar el click de tipotransporte2,sino tipotransporte1
    if (transporteseleccionado == "0") {
        //guia nueva
        if ((pasto == "true")) {
            $("#tipotransporte2").click();

        } else {
            $("#tipotransporte1").click();

        }
    } else {
        //ya hay guia creada
        if (transporteseleccionado == 2) {
            $("#tipotransporte2").click();

        } else {
            if (transporteseleccionado == 1) {
                $("#tipotransporte1").click();
            };

        }
    };
   


    function parseTransporteData(nombre, provincia, municipio) {
        $("#nombre").val(nombre);
        $("#provincia").val(countriesList[provincia].provincia);
        //$("#municipio").val(citiesList[countriesList[provincia].thcod + "_" + municipio].municipio);
        $("#municipio").val(citiesList[countriesList[provincia].thcod][municipio].municipio);
    }

    // Carga los municipios
    function citiesTypeahead(citiesData) {
        var cities = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('municipio'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: citiesData
        });

        cities.initialize();

        $('#municipiob').typeahead(
        null, {
            name: 'cities',
            displayKey: 'municipio',
            source: cities.ttAdapter()
        }).on('typeahead:selected', function (event, data) {
            muncod = data.muncod;
            municipio = data.municipio;
        }).on('typeahead:change', function (event, data) {
            if ($('#municipiob').val() != municipio) {
                $('#municipiob').val("");
                muncod = "";
                municipio = "";
            }
        });
    };

    function loadCities(thcod) {
        /*
        var data = {
            "thcod": thcod
        };
        $.ajax({
            url: location.protocol + "//" + location.host + location.pathname + "/getCities",
            type: "post",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                $("#municipiob").val("");
                $("#municipiob").removeAttr("disabled");
                response = JSON.parse(response.d);
                if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
                    errorManagement(response, null);
                }
                else {
                    citiesTypeahead(response);
                }
            },
            error: function (response) {
                errorManagement(response, null);
            }
        });
        */
        var arr = $.map(citiesList[thcod], function (el, key) {
            el.muncod = key;
            return el;
        });
        $("#municipiob").val("");
        $("#municipiob").removeAttr("disabled");
        citiesTypeahead(arr)

    }

    // Carga las provincias
    function countriesTypeahead(countriesData) {

        var countries = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('provincia'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: countriesData
        });

        countries.initialize();

        $('#provinciab').typeahead(
        null, {
            name: 'countries',
            displayKey: 'provincia',
            source: countries.ttAdapter()
        }).on('typeahead:selected', function (event, data) {
            $('#municipiob').typeahead('destroy');
            muncod = "";
            thcod = data.thcod;
            provincia = data.provincia;
            loadCities(thcod);
        }).on('typeahead:change', function (event, data) {
            if ($('#provinciab').val() != provincia) {
                $('#municipiob').typeahead('destroy');
                $('#provinciab').val("");
                $("#municipiob").val("");
                thcod = "";
                provincia = "";
                muncod = "";
                municipio = "";
            }
        });
    };




    //Cargar las provincias
    $.when(loadCountries())
    .then(function (response) {
        countriesData = response.countriesData;
        countriesList = response.countriesList;
        countriesTypeahead(countriesData);
    })
    .fail(function () {
        errorManagement(null, null);
    });

    // Comportamiento al hacer click en el boton buscarExplotacion:
    //   - Cambiar la visibilidad de los campos de búsqueda avanzada
    //   - Cargar las explotaciones en función de los datos introducidos
    //   -modificacion maria:y si es un matadero mostrar el comprador
    $("#buscarExplotacion").click(function () {
        $("#limpiarBuscarExplotacion").prop('disabled', true);
        limpiarErrores();
        loadExplotations();
        if ($("#matadero").is(':checked')) {
            $("#capacomprador").show();
        } else {
            $("#capacomprador").hide();
        }
        
        return false;
    });

    $("#limpiarBuscarExplotacion").click(function () {
        limpiarErrores();
        $("#exp_destino").val("");
        $("#nombre").val(literalesPage[50312]);
        $("#provincia").val(literalesPage[50312]);
        $("#municipio").val(literalesPage[50312]);

        $("#nombreb").val("");
        $("#provinciab").val("");
        $("#matadero").prop("checked", false);
        $("#municipiob").val("");
        return false;
    });

    $("#buscarExplotacionInicial").click(function () {
        $("#limpiarBuscarExplotacionInicial").prop('disabled', true);
        limpiarErrores();
        loadExplotationsInicial();
        return false;
    });

    $("#limpiarBuscarExplotacionInicial").click(function () {
        limpiarErrores();
        $("#exp_inicial").val("");
        $("#nombreinicial").val(literalesPage[50312]);
        //$("#provinciainicial").val(literalesPage[50312]);
        //$("#municipioinicial").val(literalesPage[50312]);

        $("#nombreinicialb").val("");
        $("#provinciainicialb").val("");
        $("#municipioinicialb").val("");
        return false;
    });

    $("#exp_destino").focusout(function () {
        $("#buscarExplotacion").trigger("click");
        if ($("#matadero").is(':checked')) {
            $("#capacomprador").show();
            $("#exp_destino_matadero").val("true");
        } else {
            $("#capacomprador").hide();
            $("#exp_destino_matadero").val("false");
        }
    });


    $("#buscarTransportista").click(function () {
        //$("#limpiarBuscarTransportista").prop('disabled', true);
        loadCarriers();
        return false;
    });

    $("#limpiarBuscarTransportista").click(function () {
        $("#dni_trans").val("");
        $("#nombre_trans").val("");
        $("#matricula").val("");
        $("#ates").val("");
        dni_trans = "";
        nombre_trans = "";
        matricula = "";
        ates = "";
        return false;
    });

    $("#btnSiguientePaso").click(function () {
        formValidate();
        $('#alta1Form').valid();
        $('#alta1Form').validate({});
        //let resultado = comprobarValorHoras();
        //if (resultado) {

        //    comprobacionHoras();
        //}
        //bloquearBoton();
        //return false;
    });


    $('#datePickerFechaLlegada').datepicker({
        autoclose: true,
        todayHighlight: true,
        weekStart: 1,
        format: selectedLanguageDateType,
        language: selectedLanguage
    })


    // Mostrar el selector de fechas en el idioma que corresponda
    $('#datePickerFechaSalida').datepicker({
        autoclose: true,
        todayHighlight: true,
        weekStart: 1,
        format: selectedLanguageDateType,
        language: selectedLanguage
    }).on('changeDate', function (e) {
        if ($("#fecha_llegada").val() == "") {
            $('#datePickerFechaLlegada').datepicker('setDate', e.date);
        }
    });


    function limpiarErrores()
    {
        $("#messageBox").html("");
    }

    $("#dni_trans").change(function () {
        $("#ates").val("");
        ates = "";
    });

    $("#nombre_trans").change(function () {
        $("#ates").val("");
        ates = "";
    });

    $("#matricula").change(function () {
        $("#ates").val("");
        ates = "";
    });

    $("#dni_trans").focusout(function () {
        var dni;
        dni = $("#dni_trans").val();
        $("#dni_trans").val(dni.toUpperCase());
    });
    $("#nombre_trans").focusout(function () {
        var nombre;
        nombre = $("#nombre_trans").val();
        $("#nombre_trans").val(nombre.toUpperCase());
    });
    $("#matricula").focusout(function () {
        var matricula;
        matricula = $("#matricula").val();
        $("#matricula").val(matricula.toUpperCase());
    });
    $("#ates").focusout(function () {
        var ates;
        ates = $("#ates").val();
        $("#ates").val(ates.toUpperCase());
    });

    // Carga explotaciones
    function loadExplotationsInicial() {
        var data = {
            "explotacion": $("#exp_inicial").val(),
            "denominacion":"",// $("#nombreinicialb").val(),
            "muncod": muncod,
            "thcod": thcod
           
        };
        successFn = function (response) {
            loadExploitationsDataInicial(response.lista);
        };

        finallyFn = function (response) {
            $("#limpiarBuscarExplotacionInicial").prop('disabled', false);
        };
        requestWS({ wsMethod: "/getExpListInicial", data: data, "successFn": successFn, "errorFn": null, finallyFn: finallyFn });
    }

    function loadExploitationsDataInicial(dataSet) {
        if (dataSet.length > 1 || dataSet.length == 0) {
            // Mostrar la busqueda avanzada.
            $("#busqueda_avanzada_inicial").css("display", "block");
            loadExploitationsDataTableInicial(dataSet);
        }
        else if (dataSet.length == 1) {
            $("#exp_inicial").val();
            $("#enombreinicial").val();
            $("#busqueda_avanzada_inicial").css("display", "none");
            $("#exp_inicial").val(dataSet[0].explotacion);
            $("#enombreinicial").val(dataSet[0].denominacion);
            exploitationId = dataSet[0].explotacion;
           

          
            exploitationSelectedInicial = true;
        }
        else {
            errorManagement(null, "Error en alta1");
        }
    }

    function loadExploitationsDataTableInicial(dataSet) {
        if (exploitationsDataTableInicial != null) {
            //Eliminar la tabla y los eventos de click.
            exploitationsDataTableInicial.destroy();
            //$('#tabla-explotacion').off('click', 'button');
            $('#tabla-explotacionInicial').off();
            $('#tabla-explotacionInicial').children().off();
        }
        exploitationsDataTableInicial = $('#tabla-explotacionInicial').DataTable({
            "destroy": true,
            "data": dataSet,
            "ordering": true,
            "searching": false,
            "paging": true,
            "lengthChange": false,
            "autoWidth": false,
            "deferRender": true,
            "pagingType": "full",
            "order": [],
            "columns": [
                { "data": "explotacion", "title": literalesPage[50320], "orderable": true },
                { "data": "denominacion", "title": literalesPage[50309], "orderable": true }
             
               
            ],
            "language": {
                "url": datatableLanguageUrl
            }
        });

        $('#tabla-explotacionInicial tbody').on('click', 'tr', function () {
            if ($(this).hasClass('shown')) {
                $(this).removeClass('shown');
            }
            else {
                exploitationsDataTableInicial.$('tr.selected').removeClass('shown');
                $(this).addClass('shown');
           

                var row = exploitationsDataTableInicial.row($(this)).data();
                var codigo = row.explotacion;
                var nombre = row.denominacion;
                var municipio = row.muncod;
                var provincia = row.thcod;
                var matadero = row.matadero;

                $("#exp_inicial").val(codigo);
                exploitationIdInicial = codigo
                $("#nombreinicial").val(nombre);

                // Ocultamos la busqueda avanzada al seleccionar uno de las explotaciones.
                $("#busqueda_avanzada_inicial").css("display", "none");
                //$("#provinciainicialb").val("");
                //$("#municipioinicialb").val("");

                //miamos si la explotacion inicial  es alavesa
                //en ese  caso cargamos ya la explotacion destino con esa misma explotacion
                //if (codigo.substring(0, 3) = "ES01") {
                   if (permisoBajadaAlava) {
                    $("#exp_destino").val(codigo);
                    $("#exp_destino_matadero").val(row.matadero);
                    exploitationId = codigo

                    //parseTransporteData(nombre, provincia, municipio);


                    //// Ocultamos la busqueda avanzada al seleccionar uno de las explotaciones.
                    //$("#busqueda_avanzada").css("display", "none");
                    //$("#provinciab").val("");
                    //$("#municipiob").val("");

                    //ocultamos la capacomprador si es matadero
                    $("#capacomprador").hide();
                    

                    //si es un pasto el seleccionado o el origen es un pasto ,mostrar la capa tipotransporte , seleccionar a pie y ocultar la capa transporte
                    destinopasto = row.pasto;
                    if ((row.pasto == "true") || (pasto == "true")) {
                        $("#capatransporte").show();
                        //$("#tipotransporte2").attr('checked', true);//
                        $("#tipotransporte2").click();
                        $("#transporte").hide();
                        //destinopasto = true;
                    } else {
                        $("#capatransporte").hide();
                        //$("#tipotransporte1").attr('checked', true);
                        $("#tipotransporte1").click();
                        $("#transporte").show();
                        // destinopasto = false;
                    }
                    exploitationSelected = true;
                };



                exploitationSelectedInicial = true;

            }
        });     

    }
    // Carga explotaciones
    function loadExplotations() {
        var data = {
            "explotacioninicial": $("#exp_inicial").val(),
            "explotacion": $("#exp_destino").val(),
            "denominacion": $("#nombreb").val(),
            "muncod": muncod,
            "thcod": thcod,
            "matadero": ($("#matadero").is(':checked')) ? "true" : "false"
        };
        //$.ajax({
        //    url: location.protocol + "//" + location.host + location.pathname + "/getExpList",
        //    type: "post",
        //    data: JSON.stringify(data),
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    success: function (response) {
        //        response = JSON.parse(response.d);
        //        if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
        //            //errorManagement(response, null);
        //            loadExploitationsData(response);
        //        }
        //        else {
        //            loadExploitationsData(response);
        //        }
        //    },
        //    error: function (response) {
        //        errorManagement(response, null);
        //    }
        //});


        successFn = function (response) {
            loadExploitationsData(response.lista);
        };
        
        finallyFn = function (response) {
            $("#limpiarBuscarExplotacion").prop('disabled', false);
        };
        requestWS({ wsMethod: "/getExpList", data: data, "successFn": successFn, "errorFn": null, finallyFn: finallyFn });
    }

    function loadExploitationsData(dataSet) {
        if (dataSet.length > 1 || dataSet.length == 0) {
            // Mostrar la busqueda avanzada.
            $("#busqueda_avanzada").css("display", "block");
            loadExploitationsDataTable(dataSet);
        }
        else if (dataSet.length == 1) {
                        // //si es un pasto el seleccionado, mirar sie s un monte autorizado
            if (dataSet[0].pasto == "true") {
                var data = {
                    "explotacion": dataSet[0].explotacion,
                    "montesautorizados": montesautorizados,
                    "explotacioninicial": $("#exp_inicial").val()
                };

                $.ajax({
                    url: location.protocol + "//" + location.host + location.pathname + "/esMonteAutorizado",
                    type: "post",
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        //si response="true" -->monte autorizado y se carga
                        //si response="false" -->monte autorizado y mostrar mensaje de no autorizado y no se carga
                        if (response.d == "true") {
                            //es un pasto autorizado
                            $("#exp_destino").val();
                            $("#busqueda_avanzada").css("display", "none");
                            $("#exp_destino").val(dataSet[0].explotacion);
                            exploitationId = dataSet[0].explotacion;
                            $("#exp_destino_matadero").val(dataSet[0].matadero);
                            parseTransporteData(dataSet[0].denominacion, dataSet[0].thcod, dataSet[0].muncod);
                            $("#provinciab").val("");
                            $("#municipiob").val("");

                            //mostrar la capacomprador si es matadero
                            if (dataSet[0].matadero == "true") {
                                $("#capacomprador").show();
                            } else {
                                $("#capacomprador").hide();
                            }
                            //si es un pasto el seleccionado o el origen es un pasto ,mostrar la capa tipotransporte , seleccionar a pie y ocultar la capa transporte
                            destinopasto = dataSet[0].pasto;
                            if ((dataSet[0].pasto == "true") || (pasto == "true")) {
                                $("#capatransporte").show();
                                //$("#tipotransporte2").attr('checked', true);//
                                $("#tipotransporte2").click();
                                $("#transporte").hide();
                               // destinopasto = true;
                            } else {
                                $("#capatransporte").hide();
                                //$("#tipotransporte1").attr('checked', true);
                                $("#tipotransporte1").click();
                                $("#transporte").show();
                               // destinopasto = false;
                            }
                            exploitationSelected = true;
                        } else {
                            //mensaje de error
                            $("#messageBox").show()

                            $("#messageBox").html(" <li><label class='validationerror' id='autorizacion_monte-error' style='display: inline-block;' for='autorizacion_monte'>No tiene autorizacion para subir a este monte.</label></li>");

                        };
                    },
                    error: function (response) {
                        errorManagement(response, null);
                    }
                });
            } else {
                //explotacion normal, no es pasto 
                $("#exp_destino").val();
                $("#busqueda_avanzada").css("display", "none");
                $("#exp_destino").val(dataSet[0].explotacion);
                exploitationId = dataSet[0].explotacion;
                $("#exp_destino_matadero").val(dataSet[0].matadero);
                parseTransporteData(dataSet[0].denominacion, dataSet[0].thcod, dataSet[0].muncod);
                $("#provinciab").val("");
                $("#municipiob").val("");

                //mostrar la capacomprador si es matadero
                if (dataSet[0].matadero == "true") {
                    $("#capacomprador").show();
                } else {
                    $("#capacomprador").hide();
                }
                //si es un pasto el seleccionado o el origen es un pasto ,mostrar la capa tipotransporte , seleccionar a pie y ocultar la capa transporte
                destinopasto = dataSet[0].pasto;
                if ((dataSet[0].pasto == "true") || (pasto == "true")) {
                    $("#capatransporte").show();
                    //$("#tipotransporte2").attr('checked', true);//
                    $("#tipotransporte2").click();
                    $("#transporte").hide();
                    //destinopasto = true;
                } else {
                    $("#capatransporte").hide();
                    //$("#tipotransporte1").attr('checked', true);
                    $("#tipotransporte1").click();
                    $("#transporte").show();
                    //destinopasto = false;
                }
                exploitationSelected = true;
            }

        
        }
        else {
            errorManagement(null, "Error en alta1");
        }
    }

    function loadExploitationsDataTable(dataSet) {
        if (exploitationsDataTable != null) {
            //Eliminar la tabla y los eventos de click.
            exploitationsDataTable.destroy();
            //$('#tabla-explotacion').off('click', 'button');
            $('#tabla-explotacion').off();
            $('#tabla-explotacion').children().off();
        }
        exploitationsDataTable = $('#tabla-explotacion').DataTable({
            "destroy": true,
            "data": dataSet,
            "ordering": true,
            "searching": false,
            "paging": true,
            "lengthChange": false,
            "autoWidth": false,
            "deferRender": true,
            "pagingType": "full",
            "order": [],
            "columns": [
                { "data": "explotacion", "title": literalesPage[50320], "orderable": true },
                { "data": "denominacion", "title": literalesPage[50309], "orderable": true },
                {
                    "data": "muncod", "title": literalesPage[50310], "orderable": true,
                    "render": function (data, type, full, meta) {
                        //html = citiesList[full.thcod + "_" + full.muncod].municipio;
                        html = citiesList[full.thcod][full.muncod].municipio;
                        return html;
                    }
                },
                {
                    "data": "thcod", "title": literalesPage[50311], "orderable": true,
                    "render": function (data, type, full, meta) {
                        html = countriesList[data].provincia;
                        return html;
                    }
                }
                //{
                //    "data": "matadero", "title": literalesPage[50319], "orderable": false,
                //    "render": function (data, type, full, meta) {
                //        html = '<input type="checkbox"'
                //        html += (data.toUpperCase() == "TRUE" ? "checked" : "")
                //        html += ' disabled>';
                //        return html;
                //    }
                //},
                //{
                //    "data": null, "orderable": false,
                //    "render": function (data, type, full, meta) {
                //        button = '<button class="btn seleccionar"></button>';
                //        return button;
                //    }
                //}
            ],
            "language": {
                "url": datatableLanguageUrl
            }
        });

        $('#tabla-explotacion tbody').on('click', 'tr', function () {
            if ($(this).hasClass('shown')) {
                $(this).removeClass('shown');
            }
            else {
                exploitationsDataTable.$('tr.selected').removeClass('shown');
                $(this).addClass('shown');
                limpiarErrores();
               
              
                var row = exploitationsDataTable.row($(this)).data();
                var correcto = true;
                // //si es un pasto el seleccionado, mirar sie s un monte autorizado
                if (row.pasto == "true") {
                    var data = {
                        "explotacion": row.explotacion,
                        "montesautorizados": montesautorizados,
                        "explotacioninicial":$("#exp_inicial").val()
                    };

                    $.ajax({
                        url: location.protocol + "//" + location.host + location.pathname + "/esMonteAutorizado",
                        type: "post",
                        data: JSON.stringify(data),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (response) {
                            //si response="true" -->monte autorizado y se carga
                            //si response="false" -->monte autorizado y mostrar mensaje de no autorizado y no se carga
                            if (response.d == "true") {
                                //se carga la explotacion, monte autorizado
                                var codigo = row.explotacion;
                                var nombre = row.denominacion;
                                var municipio = row.muncod;
                                var provincia = row.thcod;
                                var matadero = row.matadero;

                                $("#exp_destino").val(codigo);
                                $("#exp_destino_matadero").val(row.matadero);
                                exploitationId = codigo
                                parseTransporteData(nombre, provincia, municipio);


                                // Ocultamos la busqueda avanzada al seleccionar uno de las explotaciones.
                                $("#busqueda_avanzada").css("display", "none");
                                $("#provinciab").val("");
                                $("#municipiob").val("");

                                //mostrar la capacomprador si es matadero
                                if (row.matadero == "true") {
                                    $("#capacomprador").show();
                                } else {
                                    $("#capacomprador").hide();
                                }
                                destinopasto = row.pasto;
                                //si es un pasto el seleccionado o el origen es un pasto ,mostrar la capa tipotransporte , seleccionar a pie y ocultar la capa transporte
                                if ((row.pasto == "true") || (pasto == "true")) {
                                    $("#capatransporte").show();
                                    //$("#tipotransporte2").attr('checked', true);//
                                    $("#tipotransporte2").click();
                                    $("#transporte").hide();
                                   // destinopasto = true;
                                } else {
                                    $("#capatransporte").hide();
                                    //$("#tipotransporte1").attr('checked', true);
                                    $("#tipotransporte1").click();
                                    $("#transporte").show();
                                  //  destinopasto = false;
                                }
                                exploitationSelected = true;
                            } else {
                                //mensaje de error
                                $("#messageBox").show()
                               
                                $("#messageBox").html(" <li><label class='validationerror' id='autorizacion_monte-error' style='display: inline-block;' for='autorizacion_monte'>No tiene autorizacion para subir a este monte.</label></li>");
                                
                            };
                        },
                        error: function (response) {
                            errorManagement(response, null);
                        }
                    });
                } else {
                    //se ha seleccionado una explotacion no pasto
                    var codigo = row.explotacion;
                    var nombre = row.denominacion;
                    var municipio = row.muncod;
                    var provincia = row.thcod;
                    var matadero = row.matadero;

                    $("#exp_destino").val(codigo);
                    $("#exp_destino_matadero").val(row.matadero);
                    exploitationId = codigo
                    parseTransporteData(nombre, provincia, municipio);


                    // Ocultamos la busqueda avanzada al seleccionar uno de las explotaciones.
                    $("#busqueda_avanzada").css("display", "none");
                    $("#provinciab").val("");
                    $("#municipiob").val("");

                    //mostrar la capacomprador si es matadero
                    if (row.matadero == "true") {
                        $("#capacomprador").show();
                    } else {
                        $("#capacomprador").hide();
                    }

                    //si es un pasto el seleccionado o el origen es un pasto ,mostrar la capa tipotransporte , seleccionar a pie y ocultar la capa transporte
                    destinopasto = row.pasto;
                    if ((row.pasto == "true") || (pasto == "true")) {
                        $("#capatransporte").show();
                        //$("#tipotransporte2").attr('checked', true);//
                        $("#tipotransporte2").click();
                        $("#transporte").hide();
                        //destinopasto = true;
                    } else {
                        $("#capatransporte").hide();
                        //$("#tipotransporte1").attr('checked', true);
                        $("#tipotransporte1").click();
                        $("#transporte").show();
                       // destinopasto = false;
                    }
                    exploitationSelected = true;
                }
             

            }
        });

        //$('#tabla-explotacion').on('click', 'button', function (e) {

        //    var row = exploitationsDataTable.row($(this).parents('tr')).data();
        //    var codigo = row.explotacion;
        //    var nombre = row.denominacion;
        //    var municipio = row.muncod;
        //    var provincia = row.thcod;
        //    var matadero = row.matadero;
        //    $("#exp_destino").val(codigo);
        //    exploitationId = codigo  
        //    parseTransporteData(nombre, provincia, municipio);


        //    // Ocultamos la busqueda avanzada al seleccionar uno de las explotaciones.
        //    $("#busqueda_avanzada").css("display", "none");
        //    $("#provinciab").val("");
        //    $("#municipiob").val("");
        //    exploitationSelected = true;
        //    // Para que no continúe adelante con las validaciones (solo hay que hacerlas al dar 
        //    // al botón de siguiente paso).
        //    return false;
        //});

    }

    // Carga transportistas
    function loadCarriers() {
        var data = {
            "nif": $("#dni_trans").val(),
            "nombre": $("#nombre_trans").val(),
            "matricula": $("#matricula").val(),
            "ates": $("#ates").val()
        };
        //$.ajax({
        //    url: location.protocol + "//" + location.host + location.pathname + "/getCarrierList",
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
        //            if (response.length == 1) {
        //                loadTheCarrier(response[0]);
        //            }
        //            else {
        //                loadCarriersDataTable(response);
        //            }
        //        }
        //    },
        //    error: function (response) {
        //        errorManagement(response, null);
        //    }
        //});


        successFn = function (response) {
            if (response.lista.length == 1) {
                loadTheCarrier(response.lista[0]);
            }
            else {
                loadCarriersDataTable(response.lista);
            }
        };

        finallyFn = function (response) {
            $("#limpiarBuscarTransportista").prop('disabled', false);
        };
        requestWS({ wsMethod: "/getCarrierList", data: data, "successFn": successFn, "errorFn": null });
    }
    function loadCarriersDataTable(dataSet) {
        if (carriersDataTable != null) {
            //Eliminar la tabla y los eventos de click.
            carriersDataTable.destroy();
            //$('#tabla-transporte').off('click', 'button');
            $('#tabla-transporte').off();
            $('#tabla-transporte').children().off();
        }
        carriersDataTable = $('#tabla-transporte').DataTable({
            "destroy": true,
            "data": dataSet,
            "ordering": true,
            "searching": false,
            "paging": true,
            "lengthChange": false,
            "autoWidth": false,
            "deferRender": true,
            "columns": [
                { "data": "nif", "title": literalesPage[50316], "orderable": true },
                { "data": "nombre", "title": literalesPage[50309], "orderable": true },
                { "data": "matricula", "title": literalesPage[50322], "orderable": true },
                { "data": "ates", "title": literalesPage[50318], "orderable": true }
                //{
                //    "data": null, "orderable": false,
                //    "render": function (data, type, full, meta) {
                //        button = '<button class="btn seleccionar"></button>';
                //        return button;
                //    }
                //}
            ],
            "language": {
                "url": datatableLanguageUrl
            }
        });


        $('#tabla-transporte tbody').on('click', 'tr', function () {
            if ($(this).hasClass('shown')) {
                $(this).removeClass('shown');
            }
            else {
                carriersDataTable.$('tr.selected').removeClass('shown');
                $(this).addClass('shown');

                var row = carriersDataTable.row($(this)).data();
                loadTheCarrier(row);

                // Ocultamos la busqueda avanzada al seleccionar uno de los transportistas.
                $("#busqueda_avanzada2").css("display", "none");
            }
        });


        //$('#tabla-transporte').on('click', 'button', function (e) {

        //    //loadTheCarrier($(this).parents('tr'))

        //    var row = carriersDataTable.row($(this).parents('tr')).data();
        //    loadTheCarrier(row);

        //    // Ocultamos la busqueda avanzada al seleccionar uno de los transportistas.
        //    $("#busqueda_avanzada2").css("display", "none");

        //    // Para que no continúe adelante con las validaciones (solo hay que hacerlas al dar 
        //    // al botón de siguiente paso).
        //    return false;
        //});

        $("#busqueda_avanzada2").css("display", "block");
    }

    function loadTheCarrier(row)
    {
        var dni = row.nif;
        var nombre = row.nombre;
        var matricula = row.matricula;
        var ates = row.ates;
        $("#dni_trans").val(dni);
        $("#nombre_trans").val(nombre);
        $("#matricula").val(matricula);
        $("#ates").val(ates);
        $("#busqueda_avanzada2").css("display", "none");

    }


    // Mensajes de error al validar el formulario.
    var validationError = {
        exploitationDestination: literalesPage[50332],
        exploitationDestinationLength: literalesPage[50333],
        departureDateRequired: literalesPage[50324], validDepartureDate: literalesPage[50334],
        arrivalDateRequired: literalesPage[50325], validArrivalDate: literalesPage[50335],
        validateTripDates: literalesPage[50336],
        dniRequired: literalesPage[50326], dniNotValid: literalesPage[50327],
        nameRequired: literalesPage[50328],
        plateRequired: literalesPage[50329], plateNotValid: literalesPage[50330],
        atesRequired: literalesPage[50331], atesLength: literalesPage[50337],
        validHourLl: literalesPage[53873],
        validHourSali:literalesPage[53873],
        validHourDeparture:literalesPage[53874]

    };
    //Tarea H0007-4
    function formValidate() {
        // Validarlos datos del formulario, y si todo es correcto guardarlas
        // en la variable de sesión y pasar al siguiente paso del alta de guia.
        $("#alta1Form").validate({
            errorClass: 'validationerror',
            rules: {
                exp_destino: {
                    required: true,
                    rangelength: [14, 14],
                    ValidExp: true // esta regla la creamos nosotros para validar que la explotación ha sido seleccionada
                },
                fecha_salida: {
                    required: true,
                    validDepartureDate: true
                },
                fecha_llegada: {
                    required: true,
                    validArrivalDate: true,
                    validateTripDates: true
                },
                dni_trans: {
                    required: !destinopasto, //true
                    validNIF_NIE: true // esta regla la creamos nosotros para validar que el nif es valído
                },
                nombre_trans: {
                    required: !destinopasto, //true,
                    // minlength: 1
                    rangelength: [1, 50]


                },
                matricula: {
                    required: !destinopasto, //true
                },
                ates: {
                    required: !destinopasto, //true,
                    rangelength: [15, 15]
                },
                fecha_llegada: {
                    required: true,
                    
                },
                fecha_salida: {
                    required: true
                },
                hora_salida: {
                    required: true,
                    validHourSali: true,
                    validHourDeparture:true
                },
                hora_llegada: {
                    required: true,
                    validHourLl:true
                }

            },
            errorLabelContainer: "#messageBox",
            wrapper: "li",
            messages: {
                exp_destino: {
                    required: validationError.exploitationDestination,
                    rangelength: validationError.exploitationDestinationLength
                },
                fecha_salida: {
                    required: validationError.departureDateRequired
                },
                fecha_llegada: {
                    required: validationError.arrivalDateRequired
                },
                
                nombre_trans: {
                    required: validationError.nameRequired, //"Nombre de transportista obligatorio.",
                    //minlength: "El nombre del transportista deberá contener como mínimo 2 caracteres"
                },
                dni_trans: {
                    required: validationError.dniRequired
                },
                matricula: {
                    required: validationError.plateRequired
                },
                ates: {
                    required: validationError.atesRequired,
                    rangelength: validationError.atesLength
                },
                hora_salida: {
                    required: validationError.validHourSali,
                    required:validationError.validHourDeparture
                    
                },
                hora_llegada: {
                    required: validationError.validHourLl
                }
           
            },
            submitHandler: function (form) {
                SetMainValuesInValidarGuia();
            }
        });
    }
    // Creamos una nueva regla para el validador.
    // Esta regla comprueba que el valor introducido o seleccionado de expedición
    // y los datos asociados como nombre, municipio y provincia son correctos
    jQuery.validator.addMethod("ValidExp", function (value, element) {
        if (exploitationSelected) {
            return true;
        }
        else {
            return false;
        }
    }, validationError.exploitationDestination);

    // Creamos una nueva regla para el validador.
    // Esta regla comprueba que 
    // La fecha de salida como mucho puede ser 5 días anterior a la fecha actual.
    jQuery.validator.addMethod("validDepartureDate", function (value, element) {
        var fecha = moment(value, selectedLanguageMomentDateType);
        if (moment(fecha).diff(moment(), 'days') > -6) {
            return true;
        }
        else {
            return false;
        }
    }, validationError.validDepartureDate);

    // Creamos una nueva regla para el validador.
    // Esta regla comprueba que 
    // La fecha de llegada como mucho puede ser 5 días posterior a la fecha actual.
    jQuery.validator.addMethod("validArrivalDate", function (value, element) {
        var fecha = moment(value, selectedLanguageMomentDateType);
        var ahora = moment('00:00', 'HH:mm');
        if (moment(fecha).diff(ahora, 'days') < 6) {
            return true;
        }
        else {
            return false;
        }
    }, validationError.validArrivalDate);

    // Creamos una nueva regla para el validador.
    // Esta regla comprueba que 
    // La fecha de llegada no puede ser anterior a la fecha de salida.
    jQuery.validator.addMethod("validateTripDates", function (value, element) {

        if (value != undefined && $("#fecha_salida").val() != undefined) {
            var fecha_salida = moment($("#fecha_salida").val(), selectedLanguageMomentDateType);
            var fecha_llegada = moment(value, selectedLanguageMomentDateType);
            if (moment(fecha_llegada).diff(fecha_salida, 'days') > -1) {
                return true;
            }
            else {
                return false;
            }
        }
    }, validationError.validateTripDates);

    // Creamos una nueva regla para el validador.
    // Esta regla comprueba que el valor introducido si se ha introducido un
    // DNI con formato correcto y si la letra intoducida está bien.
    jQuery.validator.addMethod("validNIF", function (value, element) {
        var numero
        var letr
        var letra
        var expresion_regular_dni

        //expresión regular que valida si el DNI está compuesto por 8 letras y un caracter, ya sea en mayúscula o minúscula.
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

        if (expresion_regular_dni.test(value) == true) {
            // Extraemos el número del DNI (es decir, un substring con la longitud del DNI entero menos una letra)
            numero = value.substr(0, value.length - 1);
            // y la letra (un substring de un solo caracter que empieza en la posición de la longitud total menos uno).
            letr = value.substr(value.length - 1, 1);
            // Hacemos la operación de módulo entre el número extraído y 23, reutilizando la variable número para almacenar el resultado.
            // Hacemos esto porque lo necesitamos para calcular si la letra del NIF es válida.
            numero = numero % 23;
            // Creamos una string con las letras del abecedario ( sin la ñ) en ese orden que se pone arriba.
            letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
            // Cogemos un substring de un solo caracter de esa cadena de letras que empiece en la posición marcada por el 
            // número que conseguimos en el punto cuatro al hacer la operación de módulo, reutilizando la variable módulo.
            letra = letra.substring(numero, numero + 1);
            // Comprobamos que la letra cogida de la cadena de letras sea igual a la letra cogida del DNI
            if (letra != letr.toUpperCase()) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }, validationError.dniNotValid);

    // Creamos una nueva regla para el validador.
    // Esta regla comprueba que el valor introducido si se ha introducido un
    // DNI con formato correcto y si la letra intoducida está bien.
    jQuery.validator.addMethod("validNIF_NIE", function (value, element) {
        //NIF
        value = value.toUpperCase();

        // Basic format test
        if (!value.match('((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)')) {
            return false;
        }

        // Test NIF
        if (/^[0-9]{8}[A-Z]{1}$/.test(value)) {
            return ("TRWAGMYFPDXBNJZSQVHLCKE".charAt(value.substring(8, 0) % 23) === value.charAt(8));
        }
        // Test specials NIF (starts with K, L or M)
        if (/^[KLM]{1}/.test(value)) {
            return (value[8] === String.fromCharCode(64));
        }

        //NIE
        value = value.toUpperCase();

        // Basic format test
        if (!value.match('((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)')) {
            return false;
        }

        // Test NIE
        //T
        if (/^[T]{1}/.test(value)) {
            return (value[8] === /^[T]{1}[A-Z0-9]{8}$/.test(value));
        }

        //XYZ
        if (/^[XYZ]{1}/.test(value)) {
            return (
             value[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(
              value.replace('X', '0')
               .replace('Y', '1')
               .replace('Z', '2')
               .substring(0, 8) % 23
             )
            );
        }

        //CIF
        var sum,
          num = [],
          controlDigit;

        value = value.toUpperCase();

        // Basic format test
        if (!value.match('((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)')) {
            return false;
        }

        for (var i = 0; i < 9; i++) {
            num[i] = parseInt(value.charAt(i), 10);
        }

        // Algorithm for checking CIF codes
        sum = num[2] + num[4] + num[6];
        for (var count = 1; count < 8; count += 2) {
            var tmp = (2 * num[count]).toString(),
             secondDigit = tmp.charAt(1);

            sum += parseInt(tmp.charAt(0), 10) + (secondDigit === '' ? 0 : parseInt(secondDigit, 10));
        }

        // CIF test
        if (/^[ABCDEFGHJNPQRSUVW]{1}/.test(value)) {
            sum += '';
            controlDigit = 10 - parseInt(sum.charAt(sum.length - 1), 10);
            value += controlDigit;
            return (num[8].toString() === String.fromCharCode(64 + controlDigit) || num[8].toString() === value.charAt(value.length - 1));
        }

        return false;

    }, validationError.dniNotValid);

    //Comprobamos que los datos de horas son correctos:Tarea H0007-IV

    jQuery.validator.addMethod("validHourLl", function (value, element) {
        var valorHoraLLegada = document.getElementById('hora_llegada').value;
      
        let condicionLlegada = valorHoraLLegada.indexOf(":") !== -1 || valorHoraLLegada.indexOf(":") == 2
        let condicionNoVacio = valorHoraLLegada.length > 0;

        if (valorHoraLLegada.length === 0 ) {
            return false;
        }

        if (condicionNoVacio && ((valorHoraLLegada.length > 0 && valorHoraLLegada.length !== 5) )) {

            return false;
        }

        if (condicionNoVacio && ((valorHoraLLegada.length > 0 && valorHoraLLegada.indexOf(":") === -1) ) || !condicionLlegada) {

            return false;

        }
        let horaLLegadaSeparado = valorHoraLLegada.split(":");
       



        if (condicionNoVacio && (horaLLegadaSeparado.length !== 2)) {

            return false;
        }
        //Convertimos a números 
        let numeroHoras = parseInt(horaLLegadaSeparado[0])
        let numeroMinutos = parseInt(horaLLegadaSeparado[1]);
        
        let formatoIncorrectoHoras = numeroHoras < 0 || numeroHoras > 24;
        let formatoIncorrectoMinutos = numeroMinutos < 0 || numeroMinutos > 60;
        if (formatoIncorrectoHoras || formatoIncorrectoMinutos) {

            return false;
        }

        return true;
    }, validationError.validHourLl);

    jQuery.validator.addMethod("validHourSali", function (value, element) {
       
        let valorHoraSalida = document.getElementById('hora_salida').value;
        let condicionSalida = valorHoraSalida.indexOf(":") !== -1 || valorHoraSalida.indexOf(":") == 2
        let condicionNoVacio =  valorHoraSalida.length > 0;

        if (valorHoraSalida.length === 0) {
            return false;
        }

        if (condicionNoVacio && valorHoraSalida.length > 0 && valorHoraSalida.length !== 5) { 

            return false;
        }

        if (condicionNoVacio && valorHoraSalida.length > 0 && valorHoraSalida.indexOf(":") !== 2 || !condicionSalida) {

            return false;

        }
       
        let horaSalidaSeparado = valorHoraSalida.split(":");



        if (condicionNoVacio && (horaSalidaSeparado.length !== 2)) {

            return false;
        }
        //Convertimos a números 
     
        let numeroHorasSalida = parseInt(horaSalidaSeparado[0]);
        let numeroMinutosSalida = parseInt(horaSalidaSeparado[1]);

        let formatoIncorrectoHorasSalida = numeroHorasSalida < 0 || numeroHorasSalida > 24;
        let formatoIncorrectoMinutosSalida = numeroMinutosSalida < 0 || numeroMinutosSalida > 60

        
        if (formatoIncorrectoHorasSalida || formatoIncorrectoMinutosSalida) {

            return false;
        }

        return true;
    }, validationError.validHourSali);

    //Validación horasalida si son del mismo día. H0007-IV
    jQuery.validator.addMethod("validHourDeparture", function (value, element) {
        var hsalida = $("#hora_salida").val().split(":");
        var hllegada = $("#hora_llegada").val().split(":");

        var horassalida = parseInt(hsalida[0]);
        var minsalida = parseInt(hsalida[1]);

        var horasllegada = parseInt(hllegada[0]);
        var minllegada = parseInt(hllegada[1]);

        if (horasllegada === horassalida && minsalida >= minllegada) {

            $("#hora_salida").focus();
            return false;
        } if (horassalida > horasllegada) {

            $("#hora_salida").focus();
            return false;
        }

        return true;
    }, validationError.validHourDeparture);

    // Comprueba si se han introducido todos los datos y si son válidos, si es así se guardarán en la
    // variable de sesión y se pasará al siguiente paso del alta de guia. 
    function SetMainValuesInValidarGuia() {

        explotacioninicial = "";
        if (destinopasto) {
            explotacioninicial = $("#exp_inicial").val();
        };

        //***comprobamos si cumple los controles a nivel de explotacion para poder hacer una guia
        var correcto = true;
        var data = {
            "explotacioninicial": explotacioninicial,
            "explodestino": exploitationId
        };
        successFn = function (response) {
            if ((response.status != "200") || (response.code != "200")) {
                correcto = false;
                //mostrar mensaje no cumple control
                //mostrar mensaje "No puede subir mas animales al monte"
                $("#messageBox").show()
                $("#messageBox").html("<li><label class='validationerror' id='autorizacion_monte-error' style='display: inline-block;' for='autorizacion_monte'>" + response.message + "</label></li>");

            } else {
                //controles a nivel de explotacion han ido correctos
                //podemos crear la guia con los valores recogidos
                fechasalida = moment($("#fecha_salida").val(), selectedLanguageMomentDateType).format(WSMomentDateType);
                fechallegada = moment($("#fecha_llegada").val(), selectedLanguageMomentDateType).format(WSMomentDateType);


                //miramos si a pie o transporte.
                //si la capa transporte esta visible es que se ha seleccionado Vehiculo, sino A pie
                var niftransportista = "";
                var nombretransportista = "";
                var matricula = "";
                var ates = "";
                if ($("#transporte")[0].style.display != "none") {
                    niftransportista = $("#dni_trans").val();
                    nombretransportista = $("#nombre_trans").val();
                    matricula = $("#matricula").val();
                    ates = $("#ates").val();
                }

                var data = {
                    "destinopasto": destinopasto,
                    "explotacioninicial": explotacioninicial,
                    "explodestino": exploitationId,
                    "fechasalida": fechasalida,
                    "fechasalidaWeb": $("#fecha_salida").val(),
                    "fechallegada": fechallegada,
                    "fechallegadaWeb": $("#fecha_llegada").val(),
                    "comprador": $("#comprador").val(),
                    "niftransportista": niftransportista,
                    "nombretransportista": nombretransportista,
                    "matricula": matricula,
                    "ates": ates,
                    "explodestinoNombre": $("#nombre").val(),
                    "explodestinoMunicipio": $("#municipio").val(),
                    "explodestinoProvincia": $("#provincia").val(),
                    "explodestinomatadero": $("#exp_destino_matadero").val(),
                    "horallegada": $("#hora_llegada").val(),
                    "horasalida":$("#hora_salida").val(),
                    "montesautorizados": montesautorizados
                };
                $.ajax({
                    url: location.protocol + "//" + location.host + location.pathname + "/setMainValuesInValidarGuia",
                    type: "post",
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        location = "alta2.aspx";
                    },
                    error: function (response) {
                        window.alert("Error en los datos");
                    }
                });
            };
            
        };

        errorFn = function (response) {
            correcto = false;
        };
        requestWS({ wsMethod: "/ControlesGuiaNivelExplotacion", data: data, "successFn": successFn, "errorFn": errorFn });


       
    }




    //funciones transporte
    $("input[name=tipotransporte]").click(function () {
       // limpiarErrores();
        //alert("La tipotransporte seleccionada es: " + $('input:radio[name=tipotransporte]:checked').val());
        //alert("La tipotransporte seleccionada es: " + $(this).val());
        if ($('input:radio[name=tipotransporte]:checked').val() == 2) {
            $("#transporte").hide();
        } else {
            $("#transporte").show();
        };
    });

});

//funciones alta fecha llegada y alta fecha salida TAREA H007-Parte 4

function validaNumericosYDosPuntos(event) {
    if ((event.charCode >= 48 && event.charCode <= 57) || event.charCode == 58) {
        return true;
    }
    return false;
}



//Revisamos que tenga formato correcto al introducir en fecha_hora y fecha_salida

function comprobarValorHoras() {
    
    var valorHoraLLegada = document.getElementById('hora_llegada').value;
    let valorHoraSalida = document.getElementById('hora_salida').value;
    let condicionSalida = valorHoraLLegada.indexOf(":") !== -1 || valorHoraSalida.indexOf(":") == 2
    let condicionNoVacio = valorHoraLLegada.length > 0 || valorHoraSalida.length > 0;

    if (valorHoraLLegada.length === 0 || valorHoraSalida.length === 0) {
        return false;
    }

    if (condicionNoVacio && ((valorHoraLLegada.length > 0 && valorHoraLLegada.length !== 5) || (valorHoraSalida.length > 0 && valorHoraSalida.length !== 5))) {
     
        return false;
    }
   
    if (condicionNoVacio && ((valorHoraLLegada.length > 0 && valorHoraLLegada.indexOf(":") === -1) || (valorHoraSalida.length > 0 && valorHoraLLegada.indexOf(":") !== 2)) || !condicionSalida) {
      
        return false;
        
    }
    let horaLLegadaSeparado = valorHoraLLegada.split(":");
    let horaSalidaSeparado = valorHoraSalida.split(":");

    

    if (condicionNoVacio && (horaLLegadaSeparado.length !== 2 || horaSalidaSeparado.length !== 2)) {
       
        return false;
    }
    //Convertimos a números 
    let numeroHoras = parseInt(horaLLegadaSeparado[0])
    let numeroMinutos = parseInt(horaLLegadaSeparado[1]);
    let numeroHorasSalida = parseInt(horaSalidaSeparado[0]);
    let numeroMinutosSalida = parseInt(horaSalidaSeparado[1]);

    let formatoIncorrectoHorasSalida = numeroHorasSalida < 0 || numeroHorasSalida > 24;
    let formatoIncorrectoMinutosSalida = numeroMinutosSalida < 0 || numeroMinutosSalida > 60

    let formatoIncorrectoHoras = numeroHoras < 0 || numeroHoras > 24 || formatoIncorrectoHorasSalida;
    let formatoIncorrectoMinutos = numeroMinutos < 0 || numeroMinutos > 60 || formatoIncorrectoMinutosSalida;

    if (formatoIncorrectoHoras || formatoIncorrectoMinutos) {
       
        return false;
    }

    return true;

}

/**function bloquearBoton() {
    let resultadoValorHoras = comprobarValorHoras();
    let resultadoValidacionSalida = validarHoraSalida();
    if (!resultadoValorHoras || !resultadoValidacionSalida) {
        $("#btnSiguientePaso").attr("disabled", true);
    } else {
        $("#btnSiguientePaso").attr("disabled", false);
    }
}*/
//Asignamos eventos por Jquery
$("#hora_llegada").on("keypress", function validaNumericosYDosPuntos(event) {
    if ((event.charCode >= 48 && event.charCode <= 57) || event.charCode == 58) {
        return true;
    }
    return false;
});

$("#hora_salida").on("keypress", function validaNumericosYDosPuntos(event) {
    if ((event.charCode >= 48 && event.charCode <= 57) || event.charCode == 58) {
        return true;
    }
    return false;
});

//Validamos horas si fecha y hora de salida son iguales


function comprobacionHoras() {
    var hsalida = $("#hora_salida").val().split(":");
    var hllegada = $("#hora_llegada").val().split(":");

    var horassalida = parseInt(hsalida[0]);
    var minsalida = parseInt(hsalida[1]);

    var horasllegada = parseInt(hllegada[0]);
    var minllegada = parseInt(hllegada[1]);

    if (horasllegada === horassalida && minsalida >= minllegada) {
       
        $("#hora_salida").focus();
        return false;
    } if (horassalida > horasllegada) {
       
        $("#hora_salida").focus();
        return false;
    }

    return true;
}