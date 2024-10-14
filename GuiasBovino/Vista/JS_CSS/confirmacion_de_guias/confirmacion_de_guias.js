var guiasTable = null;
var ESTADO_SIN_CONFIRMAR = "0";
var ESTADO_CONFIRMADO = "1";
var ESTADO_CONFIRMADO_CON_ERROR = "2";
var ESTADO_RECHAZADO = "3";
var crotales = [];
$(document).on("allLoaded", function () {

    params = getRequests2();
    guia = params["guia"];

    getConsultaGuiasEntrada(guia);

    //eventos click!!

    $("#aceptar").click(function () {
        confirmarGuia(guia);
    })

    $("#rechazar").click(function () {
        rechazarGuia(guia);
    })

    $("#volver").click(function () {
        location = "confirma_guia_entrada.aspx";
    })

})



function getRequests2() {
    var s1 = location.search.substring(1, location.search.length).split('&'),
        r = {}, s2, i;
    for (i = 0; i < s1.length; i += 1) {
        s2 = s1[i].split('=');
        r[decodeURIComponent(s2[0]).toLowerCase()] = decodeURIComponent(s2[1]);
    }
    return r;
};


function setEstadoColor(estado)
{
    switch(estado)
    {
        case ESTADO_SIN_CONFIRMAR:
            {
                $("#estado").addClass("font_size_large guia_sin_confirmar");
                $("#estado_icono").addClass('fa fa-clock-o guia_sin_confirmar');
                break;
            }
        case ESTADO_CONFIRMADO:
            {
                $("#estado").addClass("font_size_large guia_confirmada");
                $("#estado_icono").addClass('fa fa-dot-circle-o guia_confirmada');
                break;
            }
        case ESTADO_CONFIRMADO_CON_ERROR:
            {
                $("#estado").addClass("font_size_large guia_confirmada_errores");
                $("#estado_icono").addClass('fa fa-dot-circle-o guia_confirmada_errores');
                break;
            }
        case ESTADO_RECHAZADO:
            {
                $("#estado").addClass("font_size_large guia_rechazada");
                $("#estado_icono").addClass('fa fa-dot-circle-o estado guia_rechazada');
                break;
            }
    }

}






function getConsultaGuiasEntrada(guia) {

    var data = {
        "guia": guia
    };
    successFn = function (response) {

        setEstadoColor(response.estado);

        $("#estado").append(response.estadodes);
        $("#fecha_entrada").append(response.fechaentrada);
        $("#num_guia").append(response.guia);
        $("#expl_origen").append(response.exploorigen);
        $("#num_crotales").append(response.numcrotales);

        loadDataTable(response.crotales);

        var table = $('#tabla-crotales').on('init.dt', function () {
            //Nuevo
            if (response.confirmable == "false" || response.rechazable == "false") {
                //bloquear lista check

                $('#tabla-crotales button.seleccionar').removeClass("click");
                $('#tabla-crotales button.seleccionar').addClass("disabled");

                //ocultar botonera
                $("#botonera").hide();
            }

            if (response.descripcion != "" && response.descripcion != null) {
                //mostrar descripcion
                $("#txt_descripcion").append(response.descripcion);
            }
        })



        //// Activar o desactivar el boton de selección
        $('#tabla-crotales').delegate("button.seleccionar.click", "click", function (e) {
            e.preventDefault();
            $(this).toggleClass('activo');
        });
    };
    errorFn = function (response) {
    };

    requestWS({ wsMethod: "/getGuiaEntrada", data: data, "successFn": successFn, "errorFn": null });

}
function anadirCrotal(crotal) {
    if (crotales.indexOf(crotal) == -1) {
        crotales.push(crotal);
    }
}
function eliminarCrotal(crotal) {
    if (crotales.indexOf(crotal) > -1) {
        //el crotal está en el array
        //hay que eliminar
        var index = crotales.indexOf(crotal);
        crotales.splice(index, 1);
    }
}
function loadDataTable(dataSet) {
    crotales = [];
    if (guiasTable != null) {
      
        //Eliminar la tabla y los eventos de click.
        guiasTable.destroy();
        //$('#tabla-crotales').off('click');
        $('#tabla-crotales').off();
       // $('#tabla-crotales').children().off();
    }

    $.fn.dataTable.moment(selectedLanguageMomentDateType2);

    guiasTable = $('#tabla-crotales').DataTable({
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
                "data": "seleccionado",
                "title": "",
                "class": "text-center",
                "orderable": false,
                "render": function (data, type, full, meta) {

                    if (data == "true") {
                        html = '<button class="btn seleccionar click activo" onclick="clikadoCrotal(this,\'' + isNull(full.crotal) + '\')"  value=\'' + isNull(full.crotal) + '\'  ></button>';
                        anadirCrotal(full.crotal);
                    } else {
                        html = '<button class="btn seleccionar click"  onclick="clikadoCrotal(this,\'' + isNull(full.crotal) + '\')" value=\'' + isNull(full.crotal) + '\'  ></button>';
                    }

                    return html;
                }
                        
            },
            {
                "data": "crotal",
                "title": literalesPage[53212],
                "orderable": true,
            },
            {
                "data": "razdes",
                "title": literalesPage[53213],
                "orderable": true,
            },
            {
                "data": "sexdes",
                "title": literalesPage[53214],
                "orderable": true,
            },
            {
                "data": "fechanacimiento",
                "title": literalesPage[53215],
                "orderable": true,
            }
        ],
        "order": [],
        "language": {
            "url": datatableLanguageUrl
        }
    });

}




//function isSelected(seleccionado) {
//    if (seleccionado == "true") return "activo";
//    else return "";
//}


//function formatList(data) {

//    var html = ""

//    var filas = "";
//    var html = '<table id="tabla-crotales" class="table table-bordered table-striped">' +
//                  '<thead>' +
//                    '<tr>' +
//                      '<th>Crotal</th>' +
//                      '<th>Raza</th>' +
//                      '<th>Sexo</th>' +
//                      '<th>Fecha de nacimiento</th>' +
//                      '<th></th>' +
//                    '</tr>'+
//    '</thead>' +
//    '<tbody>';

//    $.each(data.crotales, function (i, item) {

//        filas = filas + '<tr>' +
//                   '<td>' + isNull(item.crotal) + '</td>' +
//                   '<td>' + isNull(item.razdes) + '</td>' +
//                   '<td>' + isNull(item.sexdes) + '</td>' +
//                   '<td>' + isNull(item.fechanacimiento) + '</td>' +
//                   '<td class="text-center"> <button class="btn seleccionar click ' + isSelected(isNull(item.seleccionado)) + '"  value=\'' + isNull(item.crotal) + '\'  ></button> </td>' +
//                '</tr>';
//    });

//    filas = filas + '</tbody></table>';
//    html = html + filas;

//    html = html + '<div id="txt_descripcion"><p><strong>' + isNull(data.descripcion) + '</strong></p></div>';

//    html = html + '<div class="row text-center row-query-buttons">' +
//                        '<button class="btn btn-default icono" onclick="javascript:confirmarGuia(\'' + guia + '\'); return false;"><i class="fa fa-check"></i> Confirmar guía</button>' +
//                        '<button class="btn btn-default icono remove-button" onclick="javascript:rechazarGuia(\'' + guia + '\'); return false;"><i class="fa fa-times"></i> Rechazar guía</button>' +
//                   '</div>'

//    $(".table-responsive").append(html);

//    //Nuevo
//    if (data.confirmable == "false" || data.rechazable == "false"){
//        //bloquear lista check

//        $('#tabla-crotales button.seleccionar').removeClass("click");
//        $('#tabla-crotales button.seleccionar').addClass("disabled");

//        //ocultar botonera
//        $(".row-query-buttons").hide();
//    }

//    if (data.descripcion != "" && data.descripcion != null) {
//        //mostrar descripcion

//    }
//}

function clikadoCrotal(b,crotal) {
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
}
function confirmarGuia(guia) {

    //var crotales = [];

    //$(".crotal_checkbox:enabled:checked").each(function () {
    //    crotales.push($(this).val());
    //});

    //$('#tabla-crotales button.seleccionar.activo').each(function () {
    //    crotales.push($(this).val());
    //});

   

    

    if (crotales.length == 0) {
        message = "<li><label class='validationerror'> " + literalesPage[53216] + "</label></li>";
        $("#messageBox").html(message);
        $("#messageBox").show();
    }
    else {
        $('#myModal').modal({ backdrop: 'static', keyboard: false });
        var data = {
            "guia": guia.toString(),
            "crotales": crotales
        };

        successFn = function (response) {
            location = "confirma_guia_entrada.aspx";
        };

        finallyFn = function (response) {
            $('#myModal').modal('hide');
        };

        requestWS({ wsMethod: "/confirmarGuia", data: data, "successFn": successFn, "errorFn": null, finallyFn: finallyFn });
    }
}

function rechazarGuia(guia) {

    $('#myModal').modal({ backdrop: 'static', keyboard: false });

    var data = {
        "guia": guia
    };

    successFn = function (response) {
        location = "confirma_guia_entrada.aspx";
    };

    finallyFn = function (response) {
        $('#myModal').modal('hide');
    };

    requestWS({ wsMethod: "/rechazarGuia", data: data, "successFn": successFn, "errorFn": null, finallyFn: finallyFn });
}