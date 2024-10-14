var crotal = null;
var params = null;
var fechaentrega = null;
var fechaperdida = null;
$(document).on("allLoaded", function () {
    params = getRequests2();
    crotal = params["crotal"];
    fechaentrega = params["fechaentrega"];
    fechaperdida=params["fechaperdida"]
    $("#id_crotal").text(" " + crotal);
    $("#fecha_entrega").text(" " + fechaentrega);//moment(moment()).format(selectedLanguageMomentDateType));

    $('.date').datepicker(
    {
        autoclose: true,
        todayHighlight: true,
        weekStart: 1,
        format: selectedLanguageDateType,
        language: selectedLanguage
    });
    $('.date').datepicker('setDate', new Date());

    $('#btnNotificar').click(function (e) {
        enviar_notificacion_perdida();
    });
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

function enviar_notificacion_colocacion()
{
    fechacolocacion = $("#fecha_colocacion").val();
    fechacolocacion = moment(fechacolocacion, selectedLanguageMomentDateType).format(WSMomentDateType);
   
     fechaentrega = moment(fechaentrega, selectedLanguageMomentDateType).format(WSMomentDateType);

    
    fechaperdida = moment(fechaperdida, selectedLanguageMomentDateType).format(WSMomentDateType);



    var data = { "crotal": crotal, "fechaperdida": fechaperdida, "fechaentrega": fechaentrega, "fechacolocacion": fechacolocacion };

    successFn = function (response) {
        location = "crotales_disponibles.aspx";
    };
    errorFn = null;
    requestWS({ wsMethod: "/notificarColocacion", data: data, "successFn": successFn, "errorFn": errorFn });
}

