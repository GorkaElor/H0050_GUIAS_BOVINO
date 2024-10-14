/// <reference path="../../../../Recursos/js/jquery-1.4.2-vsdoc.js" />

$(document).ready(function () {
    $.cargado = false;
    jQuery(function () {
        jQuery('ul.sf-menu').superfish();
    });   
    var pathtojsfiles = "Recursos/js/"; // need to be ajusted
    // set include to false if you do not want some modules to be included
    var modules = [
    // jqGrid translation
      
    //Archivos a retocar    
        {include: true, incfile: 'jquery.ikt.edi.fungen.js' }, //
        {include: true, incfile: 'jquery.ikt.func.js' } //
    ];
    var filename;
    for (var i = 0; i < modules.length; i++) {
        if (modules[i].include === true) {

            //filename = i <= 1 ? modules[i].incfile : pathtojsfiles + modules[i].incfile;
            filename = pathtojsfiles + modules[i].incfile;
            if (jQuery.browser.safari) {
                jQuery.ajax({ url: filename, dataType: 'script', async: false, cache: true });
            } else {
                IncludeJavaScript(filename);
            }
        }
    }
    function IncludeJavaScript(jsFile) {
        var oHead = document.getElementsByTagName('head')[0];
        var oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.charset = 'utf-8';
        oScript.src = jsFile;
        oHead.appendChild(oScript);
    };
}
);