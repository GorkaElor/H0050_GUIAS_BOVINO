/**
Formato para mostrar las fechas en las tablas dataTable
**/
selectedLanguageDataTableDateType = 'date-yyyy-mmm-dd';
selectedLanguageDateType = 'yyyy-mm-dd';
selectedLanguageMomentDateType = 'YYYY-MM-DD';
datatableLanguageUrl = "./JS_CSS/datatables_language/Basque.json";
WSMomentDateType = 'DD/MM/YYYY';
var QueryString = null;


$(document).ready(function () {
    finishLoading();
    QueryString = getRequests();

});


function finishLoading() {
    $(".main-footer").css("visibility", "visible");
    $.event.trigger("allLoaded");

}

function loadCrotales() {
    var deferred = $.Deferred();

    $.ajax({
        url: location.protocol + "//" + location.host + location.pathname + "/getCrotales",
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            response = JSON.parse(response.d);
            if (!isWSError(response)) {
                crotalData = response;
                $.each(response, function (key, element) {
                    crotalList[element.thcod] = {
                        crotal: element.crotal,
                        thcod: element.thcod
                    }
                });
                obj = {
                    crotalData: crotalData,
                    crotalList: crotalList
                };
                deferred.resolve(obj);
            }
        },
        error: function (response) {
            deferred.reject();
        }
    });

    return deferred.promise();
}






function loadCountries() {
    var deferred = $.Deferred();

    $.ajax({
        url: location.protocol + "//" + location.host + location.pathname + "/getCountries",
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            response = JSON.parse(response.d);
            if (!isWSError(response)) {
                countriesData = response;
                $.each(response, function (key, element) {
                    countriesList[element.thcod] = {
                        provincia: element.provincia,
                        thcod: element.thcod
                    }
                });
                obj = {
                    countriesData: countriesData,
                    countriesList: countriesList
                };
                deferred.resolve(obj);
            }
        },
        error: function (response) {
            deferred.reject();
        }
    });

    return deferred.promise();
}


function loadCities() {
    var deferred = $.Deferred();
    var data = {
        "thcod": ""
    };
    $.ajax({
        url: location.protocol + "//" + location.host + location.pathname + "/getCities",
        type: "post",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            response = JSON.parse(response.d);
            if (!isWSError(response)) {
                $.each(response, function (key, element) {
                    if (citiesList[element.thcod] == undefined) {
                        citiesList[element.thcod] = {}
                    }
                    citiesList[element.thcod][element.muncod] = {
                        municipio: element.municipio,
                        thcod: element.thcod
                    }
                });
                obj = {
                    citiesData: response,
                    citiesList: citiesList
                }
                deferred.resolve(obj);
            }
        },
        error: function (response) {
            deferred.reject();
        }
    });

    return deferred.promise();
}


$(document).on("allLoaded", function () {
    /**
    Bindeos para guardar en sesion el estado del menú lateral
    **/
    $(document).on('expanded.pushMenu', 'body', function () {
        sideBarStatus(false);
    });

    $(document).on('collapsed.pushMenu', 'body', function () {
        sideBarStatus(true);
    });

    function sideBarStatus(param) {
        data = { "collapsed": param };
        $.ajax({
            url: location.protocol + "//" + location.host + location.pathname + "/sideBarStatusCollapsed",
            type: "post",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                response = JSON.parse(response.d);
            },
            error: function (response) {
                errorManagement(response, null);
            }
        });
    }
});

/**
Función llamada desde el aspx para que pinte el idoma seleccionado
y cree los eventos click en los idomas.
**/
function InitializeCommon() {
    $(document).on("allLoaded", function () {
        SetLanguageTextStyle(selectedLanguage);
        $(document).delegate("#languageEU", "click", function () {
            ChangeLanguage("eu");
        });
        $(document).delegate("#languageES", "click", function () {
            ChangeLanguage("es");
        });

        /**
        Función que se llama al cambiar de idioma.
        Cambia el estilo tanto del seleccionado como el del que quitamos.
        Fuerza la recarga de la página para que se cargue con los literales
        en el idioma seleccionado.
        **/
        function ChangeLanguage(selectedLanguage) {
            data = { "languageCode": selectedLanguage };
            $.ajax({
                url: location.protocol + "//" + location.host + location.pathname + "/SetCambioIdioma",
                type: "post",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(data),
                success: function (response) {
                    // Establecemos los estilos
                    SetLanguageTextStyle(selectedLanguage);
                    // Recargo la página
                    location.reload();
                },
                error: function (response) {
                    errorManagement(response, null);
                }
            });
        }

        /**
        Función que pone con estilo activo el idioma seleccionado y
        desactivados el resto.
        **/
        function SetLanguageTextStyle(selectedLanguage) {
            // Euskera seleccionado. Activamos Euskera, desactivamos el resto.
            if (selectedLanguage == "eu") {
                //Las fechas de las tablas siempre se muestran en formato español
                selectedLanguageDataTableDateType = 'date-dd-mmm-yyyy';
                selectedLanguageDateType = 'yyyy-mm-dd';
                selectedLanguageMomentDateType = 'YYYY-MM-DD';
                datatableLanguageUrl = "./JS_CSS/datatables_language/Basque.json";
            }
            // Español seleccionado. Activamos Español, desactivamos el resto.
            if (selectedLanguage == "es") {
                selectedLanguageDataTableDateType = 'date-dd-mmm-yyyy';
                selectedLanguageDateType = 'dd-mm-yyyy';
                selectedLanguageMomentDateType = 'DD-MM-YYYY';

                datatableLanguageUrl = "./JS_CSS/datatables_language/Spanish.json";
            }
            selectedLanguageMomentDateType2 = 'DD/MM/YYYY';
        }

    });
}


/**
Abrir fichero seleccionado
**/
//function getAssociatedFile(data) {
   
//    $.ajax({
//        url: location.protocol + "//" + location.host + location.pathname + "/getAssociatedFile",
//        type: "post",
//        data: JSON.stringify(data),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (response) {
//            response = JSON.parse(response.d);
//            if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
//                message = "<li><label class='validationerror'> " + response.message + "</label></li>";
//                $("#messageBox").html(message);
//            }
//            else if (response.code == 200) {
//                var openTab = window.open(response.url, '_blank');
//                if (openTab) {
//                    //Browser has allowed it to be opened
//                    openTab.focus();

//                } else {
//                    //Browser has blocked it
//                    //TODO: Traducir este mensaje
//                    //message = 'Please allow popups for this website';
//                    //errorManagement(null, message);
//                    alert(literalesGen[50028]); //'Por favor, habilite las ventanas emergentes en su navegador.'
//                }
//            }
//            else {
//                errorManagement(null, null);
//            }

//        },
//        error: function (response) {
//            //console.log(response);
//            errorManagement(response, null);
//        }
//    });
//    return false;
//}

function getAssociatedFile(data) {
    successFn = function (response) {
        var openTab = window.open(response.url, '_blank');
        if (openTab) {
            //Browser has allowed it to be opened
            openTab.focus();
        } else {
            //Browser has blocked it
            alert(literalesGen[50028]); //'Por favor, habilite las ventanas emergentes en su navegador.'
        }
    };
    errorFn = null;
    requestWS({ wsMethod: "/getAssociatedFile", data: data, "successFn": successFn, "errorFn": errorFn });
}

/**
Cierre de sesión
**/
function closeSession() {
    $.ajax({
        url: location.protocol + "//" + location.host + location.pathname + "/closeSession",
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            response = JSON.parse(response.d);
        },
        error: function (response) {
            errorManagement(response, null);
        }
    });
}

/**
Gestión de errores
**/
function errorManagement(response, message) {
    if (response.readyState != undefined && response.readyState==0){
        //es un abort de la llamada, no hacer nada
    } else {
        //otro tipo de error, redirigir a error.aspx
        location = location.protocol + "//" + location.host + "/Vista/error.aspx";
    }
    return false;
}

//TODO: mirar si hay error o no en la respuesta del WS
function isWSError(response) {
    if ((response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) ||
        (response.code != undefined && response.code != null && response.code != 200)) {
        errorManagement(response, null);
        return true;
    }
    else {
        return false;
    }
}



function getRequests() {
    var s1 = location.search.substring(1, location.search.length).split('&'),
        r = {}, s2, i;
    for (i = 0; i < s1.length; i += 1) {
        s2 = s1[i].split('=');
        r[decodeURIComponent(s2[0]).toLowerCase()] = decodeURIComponent(s2[1]);
    }
    return r;
};


function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = dd + '/' + mm + '/' + yyyy;
    return today;

}



function isNull(object)
{
    if (object != undefined && object != null)
        return object;
    else
        return "";
}


function requestWS(obj) {
    wsMethod = obj.wsMethod;
    data = obj.data;
    successFn = obj.successFn;
    errorFn = obj.errorFn;
    finallyFn = obj.finallyFn;
    controlledErrorFn = obj.controlledErrorFn;
    customErrorFn = obj.customErrorFn;

    ajaxObj = {
        url: location.protocol + "//" + location.host + location.pathname + wsMethod,
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            response = JSON.parse(response.d);
            if (finallyFn != undefined && finallyFn != null) {
                finallyFn(response);
            }
            if ((response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) ||
                (response.code > parseInt("200"))) {
                if (response.message == null || response.message == "") {
                    errorManagement(response, null);
                }
                else {
                    message = "<li><label class='validationerror'> " + response.message + "</label></li>";
                    $("#messageBox").html(message);
                    $("#messageBox").show();
                    if (controlledErrorFn != undefined && controlledErrorFn != null) {
                        controlledErrorFn(response);
                    }
                }
            }
            else {
                if (response.status != "200") {
                    if (errorFn == null) {
                        errorManagement(response, null);
                    }
                    else {
                        errorFn(response);
                       
                    }
                }
                else {
                    $("#messageBox").html("");
                    $("#messageBox").hide();
                    successFn(response);
                }
            }
        },
        error: function (response) {
            if (customErrorFn != undefined && customErrorFn != null) {
                customErrorFn(response);
            }
            else {
                errorManagement(response, null);
            }
            //console.log(response)
        }
    };

    if (data != null && data != "") {        
        ajaxObj.data = JSON.stringify(data);
    }

    $.ajax(ajaxObj);
}