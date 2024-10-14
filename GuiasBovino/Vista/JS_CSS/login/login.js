$(document).on("allLoaded", function () {
    //cuando se carga la pagina
    //comprobar si viene de gipuzkoataria

    $("#submit").click(function () {
        sendForm();
    });
});
//$(document).on('ready', function () {
$(document).ready(function () {
    // Instrucciones a ejecutar al terminar la carga

    strIPAdd = $("#strIPAdd").val(); //Request.ServerVariables("REMOTE_ADDR")//ip de la maquina
    strIDSesion = $("#strIDSesion").val(); //request("strIDSesion")
    idPortal = $("#idPortal").val(); //request("idPortal")
    idioma = $("#IDIOMA").val(); //request("IDIOMA")
    if (strIDSesion == "") {
        //no viene de gipuzkoataria
       // location =location.protocol + "//" + location.host + "/default.aspx"
       // window.close();
    } else {
        //viene de gipuzkoataria
        //hay que comprobar si la sesion sigue activa
        data = { "strIDSesion": strIDSesion, "idPortal": idPortal, "strIPAdd": strIPAdd, "idioma": idioma }

        successFn = function (response) {
            location = "index.aspx";
        };

        controlledErrorFn = function (response) {

            alert(response.message);
            window.location = "../Default.aspx";

            //$("#message").html(response.message + literalesPage[53785]);
            //$("#message").show();
        };

        customErrorFn = function (response) {
            $("#message").html(literalesPage[53705]);
            $("#message").show();
        };

        requestWS({
            wsMethod: "/ComprobarSesionActivaGipuzkoataria", data: data, successFn: successFn,
            errorFn: controlledErrorFn, controlledErrorFn: controlledErrorFn,
            customErrorFn: customErrorFn
        });
    }

});



//});
function sendForm() {

    username = $("#username").val();
    password = $("#password").val();

    data = { "username": username, "password": password }

    successFn = function (response) {
        if (response.status == "200") {
            location = "index.aspx";
        } else {
            $("#message").html(response.message);
            $("#message").show();
        }
    };

    controlledErrorFn = function (response) {
        $("#message").html(response.message);
        $("#message").show();
    };

    customErrorFn = function (response) {
        $("#message").html(literalesPage[53705]);
        $("#message").show();
    };

    requestWS({
        wsMethod: "/Autentificacion", data: data, successFn: successFn,
        errorFn: controlledErrorFn, controlledErrorFn: controlledErrorFn,
        customErrorFn: customErrorFn
    });
}