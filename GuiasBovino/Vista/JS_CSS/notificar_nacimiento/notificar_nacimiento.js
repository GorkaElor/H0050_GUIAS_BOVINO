//var table1 = null;
var table2 = null;

//var opcion = 0;


$(document).on("allLoaded", function () {

    typesObj = {
        1: {
            tableName: "tabla-madre",
            divName: "madreTable",
            table: null,
            input1: 'madre_crotal',
            input2: 'madre_nombre',
            btnDelete: 'btnDeleteMadre'
        },
        2: {
            tableName: "tabla-madreET",
            divName: "madreETTable",
            table: null,
            input1: 'madreET_crotal',
            input2: 'madreET_nombre',
            btnDelete: 'btnDeleteMadreET'
        },
        3: {
            tableName: "tabla-padre",
            divName: "padreTable",
            table: null,
            input1: 'padre_crotal',
            input2: 'padre_nombre',
            btnDelete: 'btnDeletePadre'
        }
    };

    $(typesObj[1].divName).hide();
    $(typesObj[2].divName).hide();
    $(typesObj[3].divName).hide();
    $("#nombre_2").hide();
       

    $('#alert-confirmacion').on('click', '.btn-ok', function (e) {
        $("#alert-confirmacion").modal('hide');
    });


    $('#alert-confirmacion-continuar').on('click', '.btn-Nook', function (e) {
        $("#alert-confirmacion-continuar").modal('hide');

    });
    $('#alert-confirmacion-continuar').on('click', '.btn-ok', function (e) {
        $("#alert-confirmacion-continuar").modal('hide');
       // $('#notificar_nacimiento').validate({});
        notificar_nacimiento();
    });

    $('.date').datepicker({
        autoclose: true,
        todayHighlight: true,
        weekStart: 1,
        format: selectedLanguageDateType,
        language: selectedLanguage
    });

    $('.date').datepicker('setDate', new Date());

    var validationError = {
        nombreRequired: literalesPage[52826],
        nombreLength: literalesPage[52827],
        crotalRequired: literalesPage[52828],
        crotalLength: literalesPage[52829],
        razaRequired: literalesPage[52830],
        razaLength: literalesPage[52831],
        sexRequired:   literalesPage[52832],
        sexLength: literalesPage[52833],
        aptcodRequired: literalesPage[52834],
        aptcodLength: literalesPage[52835],
        pesonacimientoValidDecimal: literalesPage[52836],
        pesonacimientoValidComa: literalesPage[52837],
        fpcodRequired: literalesPage[52838],
        fpcodLength: literalesPage[52839],
        madreRequired: literalesPage[52840],
        madreLength: literalesPage[52841],
        madreetRequired: literalesPage[52842],
        madreetLength: literalesPage[52843],
        padreRequired: literalesPage[52844],
        padreLength: literalesPage[52845],
        fechanacimientoRequired: literalesPage[52846],
        validFechaNacimiento: literalesPage[52847],
        fechaimplantacionRequired: literalesPage[52848],
        numgenealogicoLength: literalesPage[52849],
        tpcodLength: literalesPage[52850],
        tpcodLength: literalesPage[52851],
        validFechaNacimientoMenorFechaImplantacion:literalesPage[52852]

    };

    $("#btnNotificarNacimiento").click(function () {

        //control de rendimiento 
        //sino ha rellenado los campos :
        //nombre,peso nacimiento,facilidad de parto,numnero genealogico,tipo de parto, tipo de inseminacion
        //se muestra una ventana msgbox donde se le avisa que hay datos sin rellenar
        //y se le da la opcion de si quiere continuar o no con el alta de nacimiento
       
      

        //**ORIGINAL
         formValidate();
         $('#notificar_nacimiento').valid();
        // $('#notificar_nacimiento').validate({});
        
        //return true;
    });

    function formValidate() {

        $("#notificar_nacimiento").validate({
            errorClass: 'validationerror',
            rules: {
                crotal_animal:
                {
                    required: true,
                    rangelength: [14, 14]
                },
                nombre_animal: {
                    rangelength: [0, 50]
                },
                raza:
                {
                    required: true
                },
                sexo:
                {
                    required: true
                },
                aptitud:
                {
                    required: true
                },
                peso_animal:
                {
                    //validDecimalNumber: true,
                    //validComa: true
                },
                facilidadParto:
                {
                },
                madre_crotal:
                {
                    required: true,
                    rangelength: [0, 14]
                },
                madreET_crotal:
                {
                    rangelength: [14, 14]
                },
                padre_crotal:
                {
                    rangelength: [0, 14]
                },
                fecha_nacimiento:
                {
                    required: true,
                    validFechaMaximaActual: true,
                    validFechaNacimientoMenorFechaImplantacion: true
                },
                impl_animal:
                {
                    required: true,
                    validFechaMaximaActual: true
                },
                registro_genealogico:
                {
                    rangelength: [0, 12]
                },
                tipoParto:
                {
                },
                inseminacion:
                {
                }
            },
            errorLabelContainer: "#messageBox",
            wrapper: "li",
            messages: {
                crotal_animal:
                {
                    required: validationError.crotalRequired,
                    rangelength: validationError.crotalLength
                },
                nombre_animal: {
                   rangelength: validationError.nombreLength
                },
                raza:
                {
                    required: validationError.razaRequired,
                    rangelength: validationError.razaLength
                },
                sexo:
                {
                    required: validationError.sexRequired,
                    rangelength: validationError.sexLength
                },
                aptitud:
                {
                    required: validationError.aptcodRequired,
                    rangelength: validationError.aptcodLength
                },
                facilidadParto:
                {
                    required: validationError.fpcodRequired,
                    rangelength: validationError.fpcodLength
                },
                madre_crotal:
                {
                    required: validationError.madreRequired,
                    rangelength: validationError.madreLength
                },
                madreET_crotal:
                {
                    required: validationError.madreetRequired,
                    rangelength: validationError.madreetLength
                },
                padre_crotal:
                {
                    required: validationError.padreRequired,
                    rangelength: validationError.padreLength
                },
                fecha_nacimiento:
                {
                    required: validationError.fechanacimientoRequired
                },
                impl_animal:
                {
                    required: validationError.fechaimplantacionRequired
                },
                registro_genealogico:
                {
                    rangelength: validationError.numgenealogicoLength
                },
                tipoParto:
                {
                    rangelength: validationError.tpcodLength
                },
                inseminacion:
                {
                    rangelength: validationError.tpcodLength
                }
            },
            submitHandler: function (form) {
                  
                //notificar_nacimiento();
                var a;
                a = 1;

                if ($("#messageBox")[0].innerText == "") {
                    if ($("#nombre_animal").val() == "" || $("#peso_animal").val() == "" || $("#registro_genealogico").val() == "" || $("#tipoParto").val() == "" || $("#inseminacion").val() == "" || $("#facilidadParto").val() == "") {
                          aviso_explotacion_rendimiento();
                    }else{
                        notificar_nacimiento();
                    }
                }

                
            }
        });
    }

    jQuery.validator.addMethod("validFechaMaximaActual", function (value, element) {
        var fecha = moment(value, selectedLanguageMomentDateType);
        if (moment(fecha) < moment()) {
            return true;
        }
        else {
            return false;
        }
    }, validationError.validFechaNacimiento);


    jQuery.validator.addMethod("validFechaNacimientoMenorFechaImplantacion", function (value, element) {
        var fechaImplantacion = moment($("#impl_animal").val(), selectedLanguageMomentDateType);
        var fecha = moment(value, selectedLanguageMomentDateType);
        if (fecha <= fechaImplantacion) {
            return true;
        }
        else {
            return false;
        }
    }, validationError.validFechaNacimientoMenorFechaImplantacion);


    $('#peso_animal').focusout(function () {
        if ($('#peso_animal').val() != "") {
            numero = $.number($('#peso_animal').val(), 2, ',');
            $('#peso_animal').val(numero);
        }
    });

    function notificar_nacimiento() {

        var nombre = $("#nombre_animal").val();
        var raza = $("#raza").val();
        var sexo = $("#sexo").val();
        var pesoNacimiento = $("#peso_animal").val();
        var aptitud = $("#aptitud").val();
        var registroGenealogico = $("#registro_genealogico").val();
        var tipoParto = $("#tipoParto").val();
        var tipoInseminacion = $("#inseminacion").val();
        var facilidadParto = $("#facilidadParto").val();
        var madre = $("#madre_crotal").val();
        var madreET = $("#madreET_crotal").val();
        var padre = $("#padre_crotal").val();
        var fechaNacimiento = moment($("#fecha_nacimiento").val(), selectedLanguageMomentDateType).format(WSMomentDateType);
        var crotal = $("#crotal_animal").val();
        var fechaImplantacion = moment($("#impl_animal").val(), selectedLanguageMomentDateType).format(WSMomentDateType);

        var data = {
            "crotal": crotal, "nombre": nombre, "razcod": raza, "sexcod": sexo, "aptcod": aptitud, "pesonacimiento": pesoNacimiento, "registroGenealogico": registroGenealogico,
            "tipoParto": tipoParto, "tipoInseminacion": tipoInseminacion, "fpcod": facilidadParto, "madre": madre, "madreet": madreET, "padre": padre, "fechanacimiento": fechaNacimiento, "fechaimplantacion": fechaImplantacion
        };

        successFn = function (response) {
            $("#alert-confirmacion").modal('show');
            $("#btnYes").click(function (e) {
                location = "notificar_nacimiento.aspx";
            });
        };
        errorFn = null;
        requestWS({ wsMethod: "/notificarNacimiento", data: data, "successFn": successFn, "errorFn": errorFn });
    }
    function aviso_explotacion_rendimiento() {
        
        var nombre = $("#nombre_animal").val();
        var pesoNacimiento = $("#peso_animal").val();
         var registroGenealogico = $("#registro_genealogico").val();
        var tipoParto = $("#tipoParto").val();
        var tipoInseminacion = $("#inseminacion").val();
        var facilidadParto = $("#facilidadParto").val();
      
        var data = {
            "nombre": nombre,  "pesonacimiento": pesoNacimiento, "registroGenealogico": registroGenealogico,
            "tipoParto": tipoParto, "tipoInseminacion": tipoInseminacion, "fpcod": facilidadParto
        };

        successFn = function (response) {
            if (response.resultado == "true") {
                $("#alert-confirmacion-continuar").modal('show');              
            } else {
                notificar_nacimiento();

            }
            
        };
        errorFn = function (response) {
            

        };
        requestWS({ wsMethod: "/aviso_explotacion_rendimiento", data: data, "successFn": successFn, "errorFn": errorFn });


       // return resultado;
    }
    $("#raza").change(function () {
        $('#padre_crotal').val("");
        $('#padre_nombre').val("");
        $("#padreTable").hide();
    });

    function loadCrotales(data, type, singleResult) {
        if (type == 4) {
            func1 = "/getCrotalesSinAsignar";
            func2 = cargarTabla2;
        }
        else if (type == 1 || type == 2 || type == 3){
            if (type == 1) {
                func1 = "/getCrotalesMadre";
                func2 = cargarTabla1;
            }
            else if (type == 2) {
                func1 = "/getCrotalesMadreET";
                func2 = cargarTabla1;
            }
            else if (type == 3) {
                func1 = "/getCrotalesPadre";
                func2 = cargarTabla1;
                data.ticod = $("#inseminacion").val();
            }
        }
        else {
            console.log("No existe el tipo de llamada indicado. tipo= " + type);
        }
 
        errorFn = null;
        successFn = function (data) {
            func2(data.lista, type, singleResult);
            if (type == 1 || type == 2 || type == 3) {
                $("#" + typesObj[type].btnDelete).prop('disabled', false);
            }
        };

        requestWS({ wsMethod: func1, data: data, "successFn": successFn, "errorFn": errorFn });
        /*
        $.ajax({
            url: location.protocol + "//" + location.host + location.pathname + func1,
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(data),
            success: function (response) {
                response = JSON.parse(response.d);
                func2(response, type);
            },
            error: function (response) {
                errorManagement(response, null);
            }
        });*/
    }

    $('#madre_crotal, #madre_nombre').keyup(function (event) {
        var longitud1 = $('#madre_crotal').val().length;
        var longitud2 = $('#madre_nombre').val().length;
    
        if (longitud1 > 3 || longitud2 > 3)
        {
            $("#btnDeleteMadre").prop('disabled', true);
            singleResult = (event.keyCode === 8 ? false : true);
            data = {
                crotal: $('#madre_crotal').val(),
                nombre: $('#madre_nombre').val()
            }
            loadCrotales(data, 1, singleResult);
        }
        else
        {
            $("#madreTable").hide();
        }
    });

    $('#madreET_crotal, #madreET_nombre').keyup(function (event) {
        var longitud1 = $('#madreET_crotal').val().length;
        var longitud2 = $('#madreET_nombre').val().length;
    
        if (longitud1 > 3 || longitud2 > 3)
        {
            $("#btnDeleteMadreET").prop('disabled', true);
            singleResult = (event.keyCode === 8 ? false : true);
            data = {
                crotal: $('#madreET_crotal').val(),
                nombre: $('#madreET_nombre').val()
            }
            loadCrotales(data, 2, singleResult);
        }
        else {
            $("#madreETTable").hide();
        }
    });

    $('#padre_crotal, #padre_nombre').keyup(function (event) {
        var longitud1 = $('#padre_crotal').val().length;
        var longitud2 = $('#padre_nombre').val().length;

        if (longitud1 > 3 || longitud2 > 3)
        {
            $("#btnDeletePadre").prop('disabled', true);
            singleResult = (event.keyCode === 8 ? false : true);
            data = {
                crotal: $('#padre_crotal').val(),
                nombre: $('#padre_nombre').val(),
                razcod: $('#raza').val()
            }
            loadCrotales(data, 3, singleResult);
        }
        else {
            $("#padreTable").hide();
        }
    });

    $('#crotal_animal').keyup(function (event) {
        var longitud = $('#crotal_animal').val().length;

        if (longitud > 3) {
            singleResult = (event.keyCode === 8 ? false : true);
            data = {
                crotal: $('#crotal_animal').val()
            }
            loadCrotales(data, 4, singleResult);
        }
        else {
            $("#nombre_2").hide();
        }
    });

    function cargarTabla1(dataSet, type, singleResult)
    {        
        divName = typesObj[type].divName;
        if (dataSet.length == 1 && singleResult) {
            //Lo cargamos automáticamente
            input1 = typesObj[type].input1;
            input2 = typesObj[type].input2;
            $("#" + input1).val(dataSet[0].crotal);
            $("#" + input2).val(dataSet[0].nombre);
        
            $("#" + divName).hide();
        }
        else {
            tableName = typesObj[type].tableName;

            if (typesObj[type].table != null) {
                //Eliminar la tabla y los eventos de click.
                table1 = typesObj[type].table;
                table1.destroy();
                //$('#' + tableName + ' tbody').off('click');
                $('#' + tableName).off();
                $('#' + tableName).children().off();
                typesObj[type].table = null;
            }

            $.fn.dataTable.moment(selectedLanguageMomentDateType2);

            table1 = $('#' + tableName).DataTable({
                "data": dataSet,
                //"pageLength": 4,
                "ordering": true,
                "searching": false,
                "paging": false,
                "info": true,
                //"lengthChange": false,
                "autoWidth": false,
                "deferRender": true,
                "columns": [
                    {
                        "data": "crotal",
                        "title": literalesPage[52820],
                        "orderable": true,
                    },
                    {
                        "data": "nombre",
                        "orderable": true,
                        "title": literalesPage[52803]
                    },
                    {
                        "data": "fechanacimiento",
                        "title": literalesPage[52814],
                        "orderable": true
                    }
                ],
                "order": [],
                "language": {
                    "url": datatableLanguageUrl
                }
            });


            $("#" + divName).show();

            typesObj[type].table = table1;

            tableRowClick(typesObj[type]);
        }
        
    }

    function tableRowClick(typeElem) {
        tablename = typeElem.tableName;

        $('#' + tableName + ' tbody').on('click', 'tr',
            (function (elem) {
                return function (event) {   // returns a function that is bound to the "tag" parameter value
                    divName = elem.divName;
                    table1 = elem.table;
                    input1 = elem.input1;
                    input2 = elem.input2;
                    if ($(this).hasClass('shown')) {
                        $(this).removeClass('shown');
                    }
                    else {
                        table1.$('tr.selected').removeClass('shown');
                        $(this).addClass('shown');
                        var data = table1.row($(this)).data();
                        $("#" + input1).val(data.crotal);
                        $("#" + input2).val(data.nombre);

                        $("#" + divName).hide();
                    }
                }
            })(typeElem));
    }

    //Tabla 2
    function cargarTabla2(dataSet, type, singleResult) {
        if (dataSet.length == 1 && singleResult) {
            //Lo cargamos automáticamente
            $('#crotal_animal').val(dataSet[0].crotal);
            $("#nombre_2").hide();
        }
        else {
            if (table2 != null) {
                //Eliminar la tabla y los eventos de click.
                table2.destroy();
                //$('#tabla-crotales-sin-asignar').off('click');
                $('#tabla-crotales-sin-asignar').off();
                $('#tabla-crotales-sin-asignar').children().off();
            }

            $.fn.dataTable.moment(selectedLanguageMomentDateType2);

            table2 = $('#tabla-crotales-sin-asignar').DataTable({
                "data": dataSet,
                //"pageLength": 4,
                "ordering": true,
                "searching": false,
                "paging": false,
                "info": true,
                //"lengthChange": false,
                "autoWidth": false,
                "deferRender": true,
                "columns": [
                    {
                        "data": "crotal",
                        "title": literalesPage[52820],
                        "orderable": true,
                    }
                ],
                "order": [],
                "language": {
                    "url": datatableLanguageUrl
                }
            });


            $("#nombre_2").show();
        }


        $('#tabla-crotales-sin-asignar tbody').on('click', 'tr', function () {
            if ($(this).hasClass('shown')) {
                $(this).removeClass('shown');
            }
            else {
                table2.$('tr.selected').removeClass('shown');
                $(this).addClass('shown');

                var data = table2.row($(this)).data();
                // Cargar la explotación seleccionada.
            
                $('#crotal_animal').val(data.crotal);
                $("#nombre_2").hide();
            }
        });


    }


    $("#notificar_nacimiento").on('submit', function (evt) {
        evt.preventDefault();
        //event.stopPropagation(); en el evento click
        // tu codigo aqui

    });

    $('#btnDeleteMadre').click(function () {
        deleteValues($('#madre_crotal'), $('#madre_nombre'), "madreTable");
    });

    $('#btnDeleteMadreET').click(function () {
        deleteValues($('#madreET_crotal'), $('#madreET_nombre'), "madreETTable");
    });

    $('#btnDeletePadre').click(function () {
        deleteValues($('#padre_crotal'), $('#padre_nombre'), "padreTable");
    });

    function deleteValues(input1, input2)
    {
        $(input1).val("");
        $(input2).val("");
        $("#" + divName).hide();
    }
    /**
    Cambios tarea H0050_js. Deshabilitamos lo relacionado con el padre, si no hay valor en tipo de inseminacion
    */

    $("#padre_crotal").prop("disabled", true);
    $("#padre_nombre").prop("disabled", true);
    $("#btnDeletePadre").prop("disabled", true);

    /** Si hay valor en el combo, se habilitan*/

    $("#inseminacion").change(function () {
        var valorInseminacion = $("#inseminacion").val();
        if (valorInseminacion !== null && (valorInseminacion !== "" || valorInseminacion !== '')){
            $("#padre_crotal").val('');
            $("#padre_nombre").val('');
         
            if ($("#padreTable").is(":visible")) { $("#padreTable").hide(); }
            $("#padre_crotal").prop("disabled", false);
            $("#padre_nombre").prop("disabled", false);
            $("#btnDeletePadre").prop("disabled", false);
        } else {
            $("#padre_crotal").val('');
            $("#padre_nombre").val('');
            $("#padreTable").hide();
            $("#padre_crotal").prop("disabled", true);
            $("#padre_nombre").prop("disabled", true);
            $("#btnDeletePadre").prop("disabled", true);
        }
    });

    
   
 
})

