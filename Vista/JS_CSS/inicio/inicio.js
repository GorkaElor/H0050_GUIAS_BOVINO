var countriesList = {};
var citiesList = {};

$(document).ready(function () {
    /*H0033 check de permisos mediante ajax*/
  $.ajax({
        url: location.protocol + "//" + location.host + location.pathname + "/checkPermisos",
        type: "post",
        data: "",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {            
            response = JSON.parse(response.d);
            if (response) {
                $("#Permiso_R1").show();
            } else {
                $("#Permiso_R1").hide();
            }
        },
        error: function (response) {            
            console.log(response);
            //errorManagement(response, null);
        }
    });

    /**H0037 Permisos neoesporas*/
    /*H0037 check de permisos mediante ajax*/
$.ajax({
        url: location.protocol + "//" + location.host + location.pathname + "/checkPermisosNeoEsporas",
        type: "post",
        data: "",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            response = JSON.parse(response.d);
            if (response) {
                $("#Permiso_R1").show();
            } else {
                $("#Permiso_R1").hide();
            }
        },
        error: function (response) {
            console.log(response);
            //errorManagement(response, null);
        }
    });


});

$(document).on("allLoaded", function () {



    function addInfo() {
        var info_titular = "";
        if (pasto == "false") {

            if (datos_tit.code == 200) {
                var info_titular = "";
                info_titular += "<strong>" + datos_tit.nombre + "</strong><br>";
                info_titular += datos_tit.nif + "<br>";
                info_titular += datos_tit.direccion + "<br>";
                if (citiesList != null && citiesList.length > 0) {
                    info_titular += citiesList[datos_tit.thcod][datos_tit.muncod].municipio + " " + datos_tit.cp + "<br>";
                }
                if (countriesList != null && countriesList.length > 0) {
                    info_titular += countriesList[datos_tit.thcod].provincia + "<br>";
                }
                info_titular += datos_tit.telefono + "<br>";
                info_titular += datos_tit.email;
            }
            else {
                info_titular = datos_tit.message;
            }
        };
        $("#datos_titular").append(info_titular);
    }

    //Cargar las provincias
    $.when(loadCountries())
    .then(function (response) {
        countriesList = response.countriesList;

        //Cargar los municipios
        $.when(loadCities())
        .then(function (response) {
            citiesList = response.citiesList;
            addInfo();
        })
        .fail(function () {
            errorManagement(null, null);
        });

    })
    .fail(function () {
        errorManagement(null, null);
    });

    function loadDataTable(dataSet) {
        $('#tramHistTable').DataTable({
            "data": dataSet,
            //"pageLength": 2,
            "ordering": false,
            "searching": false,
            "paging": false,
            "info": false,
            "deferRender": true,
            "columns": [
                { "type": selectedLanguageDataTableDateType, "data": "fecha", "title": literalesPage[50207] },
                { "data": "descripcion", "title": literalesPage[50208] }//,
                //{ "data": "identificador", "title": literalesPage[50209] }
            ],
            "language": {
                "url": datatableLanguageUrl
            }
        });
    }

    $.ajax({
        url: location.protocol + "//" + location.host + location.pathname + "/getHistProcedures",
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            response = JSON.parse(response.d);
            if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
                errorManagement(response, null);
            }
            else {
                loadDataTable(response);
            }
        },
        error: function (response) {
              errorManagement(response, null);
        }
    });

    

});

/*
    H0033
    */
function generarInforme() {

    document.body.style.cursor = "wait"; 

    $.ajax({
        url: location.protocol + "//" + location.host + location.pathname + "/getDataInforme",
        type: "post",
        data: "",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            document.body.style.cursor = "";
            response = JSON.parse(response.d);
            var windowFeatures = "top=0,left=0,resizable=yes,width=" + (screen.width) + ",height=" + (screen.height);
            window.open(response.url, "", windowFeatures);
        },
        error: function (response) {
            console.log(response);
            //errorManagement(response, null);
        }
    });


};

/**H0037-Nuevo informe de esporas*/

function generarInformeNeoEsporas() {

    document.body.style.cursor = "wait";

    $.ajax({
        url: location.protocol + "//" + location.host + location.pathname + "/getDataInformeNeoEsporas",
        type: "post",
        data: "",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            document.body.style.cursor = "";
            response = JSON.parse(response.d);
            var windowFeatures = "top=0,left=0,resizable=yes,width=" + (screen.width) + ",height=" + (screen.height);
            window.open(response.url, "", windowFeatures);
        },
        error: function (response) {
            console.log(response);
            //errorManagement(response, null);
        }
    });


};