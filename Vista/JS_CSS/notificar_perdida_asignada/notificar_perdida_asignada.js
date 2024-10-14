var crotal = null;
var params = null;

$(document).on("allLoaded", function () {
    params = getRequests2();
    crotal = params["crotal"];
    $("#id_crotal").text(" " + crotal);
    $("#fecha_actual").text(" " + moment(moment()).format(selectedLanguageMomentDateType));

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

function enviar_notificacion_perdida()
{
    var tipoBaja = "";
    fechaNotificacion = moment($("#fecha_actual").text(), selectedLanguageMomentDateType).format(WSMomentDateType);
    fechaPerdida = moment($("#fecha_perdida").val(), selectedLanguageMomentDateType).format(WSMomentDateType);

    var data = { "crotal": crotal, "fechaPerdida": fechaPerdida, "fechaNotificacion": fechaNotificacion,"tipoBaja": tipoBaja, "observaciones": $("#observaciones").val() };

    successFn = function (response) {
        location = "crotales_disponibles.aspx";
    };
    errorFn = null;
    requestWS({ wsMethod: "/notificarPerdida", data: data, "successFn": successFn, "errorFn": errorFn }); 
}
