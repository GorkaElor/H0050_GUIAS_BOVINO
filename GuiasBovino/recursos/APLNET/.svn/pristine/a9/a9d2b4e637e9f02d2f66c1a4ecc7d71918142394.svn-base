//This file should be used if you want to debug and develop
function jqGridInclude()
{
    var pathtojsfiles = "js/"; // need to be ajusted
    // set include to false if you do not want some modules to be included
    var modules = [
        { include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/js/i18n/grid.locale-es.js' }, // jqGrid translation
        {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.base.js' }, // jqGrid base
        {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.common.js' }, // jqGrid common for editing
        {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.formedit.js' }, // jqGrid Form editing
        {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.inlinedit.js' }, // jqGrid inline editing
        {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.celledit.js' }, // jqGrid cell editing
        {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.subgrid.js' }, //jqGrid subgrid
        {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.treegrid.js' }, //jqGrid treegrid
	    {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.grouping.js' }, //jqGrid grouping
        {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.custom.js' }, //jqGrid custom
        {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.tbltogrid.js' }, //jqGrid table to grid
        {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.import.js' }, //jqGrid import
        {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.jqueryui.js' }, //jQuery UI utils
        {include: true, incfile: '../../Recursos/APLNET/jqg.4.5.4/src/grid.filter.js'} // filter Plugin
    ];
    var filename;
    for(var i=0;i<modules.length; i++)
    {
        if(modules[i].include === true) {
        	filename = pathtojsfiles+modules[i].incfile;
			if(jQuery.browser.safari) {
				jQuery.ajax({url:filename,dataType:'script', async:false, cache: true});
			} else {
				if (jQuery.browser.msie) {
					document.write('<script charset="utf-8" type="text/javascript" src="'+filename+'"></script>');
				} else {
					IncludeJavaScript(filename);
				}
			}
		}
    }
	function IncludeJavaScript(jsFile)
    {
        var oHead = document.getElementsByTagName('head')[0];
        var oScript = document.createElement('script');
        oScript.setAttribute('type', 'text/javascript');
        oScript.setAttribute('language', 'javascript');
        oScript.setAttribute('src', jsFile);
        oHead.appendChild(oScript);
    }
}
jqGridInclude();
