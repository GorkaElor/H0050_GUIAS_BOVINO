/* widget vcw */
var textoConfVNormal = ""
var textoConf=""
if (vRutaConfVisor == null || vRutaConfVisor=="") {
    textoConfVNormal = '<?xml version="1.0" encoding="iso-8859-1"?><ConfiguracionVisor>   <Layers>     <OlLayer name="orto2013etrs89" isBaseLayer="true" label="Ortofoto 2013"/>     <OlLayer name="Sigpac_2015_ETRS89" isBaseLayer="false" label="Sigpac actual"/>     <OlLayer name="Sigpac_2014_ETRS89" isBaseLayer="false" label="Sigpac 2014"/>     <OlLayer name="ControlesCampoGipuzkoaEtrs89" isBaseLayer="false" label="Controles 2013" style="ControlesCampoGipuzkoa"/>     <OlLayer name="Toponimia_Sigpac_2015_ETRS89" isBaseLayer="false" label="Etiquetas SIGPAC"/>  <OlLayer name="Toponimia_Sigpac_2014_ETRS89" isBaseLayer="false" label="Etiquetas SIGPAC 2014"/>   </Layers>   <ToolList>     <Tool name="basic_tools" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>     <Tool name="ScaleBar" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>     <Tool name="LayerSwitcher" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>     <Tool name="MapOverview" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>     <Tool name="IktPrintTool" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false"/>     <Tool name="IktLocateXY" layer="Sigpac_2015_ETRS89" tieneFuncionReceptora="" funcionReceptora="" identificador="" visible="false"/>     <Tool name="Highlight" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoEtiquetar" identificador="" visible="false">       <OLLyrName name="" desc="Etiquetar" displayClass="olIktInfoLila"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoImagen" identificador="" visible="false">       <OLLyrName name="" desc="Historico SIGPAC" displayClass="olIktInfoVerde"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoSIGPAC" identificador="" visible="false">       <OLLyrName name="" desc="Información de Recintos SigPac"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoReg" identificador="" visible="false">       <OLLyrName name="" desc="Información Registro" displayClass="olIktInfoLila"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoAlta" identificador="" visible="false">       <OLLyrName name="" desc="Alta en Registro" displayClass="olIktInfoAdd"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoCat" identificador="" visible="false">       <OLLyrName name="" desc="Información Catastro" displayClass="olIktInfoAzul"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpac2014Etrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoSIGPAC2013" identificador="" visible="false">       <OLLyrName name="" desc="Información de Recintos SigPac 2014"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoEliminar" identificador="" visible="false">       <OLLyrName name="" desc="Eliminar en Registro" displayClass="olIktInfoAdd"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoModificar" identificador="" visible="false">       <OLLyrName name="" desc="Modificar Registro" displayClass="olIktInfoAdd"/>     </Tool>     <Tool name="IktReportDocument" layer="" tieneFuncionReceptora="true" funcionReceptora="prepareReport" identificador="" visible="false">       <OLLyrName name="" desc="Informe"/>     </Tool>     <Tool name="DrawPolygon" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="DrawLine" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="DrawPoint" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktDeleteFeature" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="ModifyFeature" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="SelectFeature" layer="" tieneFuncionReceptora="true" funcionReceptora="showSelectFeature" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktMergeFeatures" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktExtractGeometry" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="" identificador="Q1" visible="false">       <OLLyrName name="pila" desc="Seleccion de recintos SigPac" displayClass="olSelectTool"/>       <Simbologia contornoColor="0,0,255" contornoGrosor="1" contornoOpacity="0.55" rellenoColor="255,15,203" rellenoOpacity="0.65"/>     </Tool>     <Tool name="IktCutFeature" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktBusquedaSigpac" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>   </ToolList>   <Idioma>es</Idioma>   <NumZoomLevels>15</NumZoomLevels>   <SRS>EPSG:25830</SRS>   <hostname>http://npb-pac.nekanet.net</hostname>   <DesactivaAlerts>false</DesactivaAlerts> </ConfiguracionVisor>';
} else {
//        var miAjax = $.ikt_ajax_obj.inicializar();
//        miAjax.pagina = vRutaConfVisor;
//        miAjax.tipo = "post";
//        miAjax.correcto = function(obj) {
//            textoConfVNormal = obj.responseText;
//        }
//        miAjax.error = function() {
//            textoConfVNormal = '<?xml version="1.0" encoding="iso-8859-1"?><ConfiguracionVisor>   <Layers>     <OlLayer name="orto2013etrs89" isBaseLayer="true" label="Ortofoto 2013"/>     <OlLayer name="Sigpac_2015_ETRS89" isBaseLayer="false" label="Sigpac actual"/>     <OlLayer name="Sigpac_2014_ETRS89" isBaseLayer="false" label="Sigpac 2014"/>     <OlLayer name="ControlesCampoGipuzkoaEtrs89" isBaseLayer="false" label="Controles 2013" style="ControlesCampoGipuzkoa"/>     <OlLayer name="Toponimia_Sigpac_2015_ETRS89" isBaseLayer="false" label="Etiquetas SIGPAC"/>  <OlLayer name="Toponimia_Sigpac_2014_ETRS89" isBaseLayer="false" label="Etiquetas SIGPAC 2014"/>   </Layers>   <ToolList>     <Tool name="basic_tools" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>     <Tool name="ScaleBar" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>     <Tool name="LayerSwitcher" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>     <Tool name="MapOverview" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>     <Tool name="IktPrintTool" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false"/>     <Tool name="IktLocateXY" layer="Sigpac_2015_ETRS89" tieneFuncionReceptora="" funcionReceptora="" identificador="" visible="false"/>     <Tool name="Highlight" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoEtiquetar" identificador="" visible="false">       <OLLyrName name="" desc="Etiquetar" displayClass="olIktInfoLila"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoImagen" identificador="" visible="false">       <OLLyrName name="" desc="Historico SIGPAC" displayClass="olIktInfoVerde"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoSIGPAC" identificador="" visible="false">       <OLLyrName name="" desc="Información de Recintos SigPac"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoReg" identificador="" visible="false">       <OLLyrName name="" desc="Información Registro" displayClass="olIktInfoLila"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoAlta" identificador="" visible="false">       <OLLyrName name="" desc="Alta en Registro" displayClass="olIktInfoAdd"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoCat" identificador="" visible="false">       <OLLyrName name="" desc="Información Catastro" displayClass="olIktInfoAzul"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpac2014Etrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoSIGPAC2013" identificador="" visible="false">       <OLLyrName name="" desc="Información de Recintos SigPac 2014"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoEliminar" identificador="" visible="false">       <OLLyrName name="" desc="Eliminar en Registro" displayClass="olIktInfoAdd"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoModificar" identificador="" visible="false">       <OLLyrName name="" desc="Modificar Registro" displayClass="olIktInfoAdd"/>     </Tool>     <Tool name="IktReportDocument" layer="" tieneFuncionReceptora="true" funcionReceptora="prepareReport" identificador="" visible="false">       <OLLyrName name="" desc="Informe"/>     </Tool>     <Tool name="DrawPolygon" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="DrawLine" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="DrawPoint" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktDeleteFeature" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="ModifyFeature" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="SelectFeature" layer="" tieneFuncionReceptora="true" funcionReceptora="showSelectFeature" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktMergeFeatures" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktExtractGeometry" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="" identificador="Q1" visible="false">       <OLLyrName name="pila" desc="Seleccion de recintos SigPac" displayClass="olSelectTool"/>       <Simbologia contornoColor="0,0,255" contornoGrosor="1" contornoOpacity="0.55" rellenoColor="255,15,203" rellenoOpacity="0.65"/>     </Tool>     <Tool name="IktCutFeature" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktBusquedaSigpac" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>   </ToolList>   <Idioma>es</Idioma>   <NumZoomLevels>15</NumZoomLevels>   <SRS>EPSG:25830</SRS>   <hostname>http://npb-pac.nekanet.net</hostname>   <DesactivaAlerts>false</DesactivaAlerts> </ConfiguracionVisor>';
//        }
//        miAjax.enviar();



var settings = {
    dataType: "xml",
    type: "post",
    async: false,
    contentType: "application/json; charset=utf-8",
    data: null,
    url: vRutaConfVisor,
    complete: function(jsondata, stat) {
        if (stat == "success") {
            textoConfVNormal = jsondata.responseText;
        } else {
            textoConfVNormal = '<?xml version="1.0" encoding="iso-8859-1"?><ConfiguracionVisor>   <Layers>     <OlLayer name="orto2013etrs89" isBaseLayer="true" label="Ortofoto 2013"/>     <OlLayer name="Sigpac_2015_ETRS89" isBaseLayer="false" label="Sigpac actual"/>     <OlLayer name="Sigpac_2014_ETRS89" isBaseLayer="false" label="Sigpac 2014"/>     <OlLayer name="ControlesCampoGipuzkoaEtrs89" isBaseLayer="false" label="Controles 2013" style="ControlesCampoGipuzkoa"/>     <OlLayer name="Toponimia_Sigpac_2015_ETRS89" isBaseLayer="false" label="Etiquetas SIGPAC"/>  <OlLayer name="Toponimia_Sigpac_2014_ETRS89" isBaseLayer="false" label="Etiquetas SIGPAC 2014"/>   </Layers>   <ToolList>     <Tool name="basic_tools" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>     <Tool name="ScaleBar" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>     <Tool name="LayerSwitcher" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>     <Tool name="MapOverview" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>     <Tool name="IktPrintTool" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false"/>     <Tool name="IktLocateXY" layer="Sigpac_2015_ETRS89" tieneFuncionReceptora="" funcionReceptora="" identificador="" visible="false"/>     <Tool name="Highlight" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoEtiquetar" identificador="" visible="false">       <OLLyrName name="" desc="Etiquetar" displayClass="olIktInfoLila"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoImagen" identificador="" visible="false">       <OLLyrName name="" desc="Historico SIGPAC" displayClass="olIktInfoVerde"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoSIGPAC" identificador="" visible="false">       <OLLyrName name="" desc="Información de Recintos SigPac"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoReg" identificador="" visible="false">       <OLLyrName name="" desc="Información Registro" displayClass="olIktInfoLila"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoAlta" identificador="" visible="false">       <OLLyrName name="" desc="Alta en Registro" displayClass="olIktInfoAdd"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoCat" identificador="" visible="false">       <OLLyrName name="" desc="Información Catastro" displayClass="olIktInfoAzul"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpac2014Etrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoSIGPAC2013" identificador="" visible="false">       <OLLyrName name="" desc="Información de Recintos SigPac 2014"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoEliminar" identificador="" visible="false">       <OLLyrName name="" desc="Eliminar en Registro" displayClass="olIktInfoAdd"/>     </Tool>     <Tool name="IktInfo" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="showInfoModificar" identificador="" visible="false">       <OLLyrName name="" desc="Modificar Registro" displayClass="olIktInfoAdd"/>     </Tool>     <Tool name="IktReportDocument" layer="" tieneFuncionReceptora="true" funcionReceptora="prepareReport" identificador="" visible="false">       <OLLyrName name="" desc="Informe"/>     </Tool>     <Tool name="DrawPolygon" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="DrawLine" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="DrawPoint" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktDeleteFeature" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="ModifyFeature" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="SelectFeature" layer="" tieneFuncionReceptora="true" funcionReceptora="showSelectFeature" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktMergeFeatures" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktExtractGeometry" layer="RecintosSigpacEtrs89" tieneFuncionReceptora="true" funcionReceptora="" identificador="Q1" visible="false">       <OLLyrName name="pila" desc="Seleccion de recintos SigPac" displayClass="olSelectTool"/>       <Simbologia contornoColor="0,0,255" contornoGrosor="1" contornoOpacity="0.55" rellenoColor="255,15,203" rellenoOpacity="0.65"/>     </Tool>     <Tool name="IktCutFeature" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="false">       <OLLyrName name="pila" desc="" displayClass=""/>     </Tool>     <Tool name="IktBusquedaSigpac" layer="" tieneFuncionReceptora="false" funcionReceptora="" identificador="" visible="true"/>   </ToolList>   <Idioma>es</Idioma>   <NumZoomLevels>15</NumZoomLevels>   <SRS>EPSG:25830</SRS>   <hostname>http://npb-pac.nekanet.net</hostname>   <DesactivaAlerts>false</DesactivaAlerts> </ConfiguracionVisor>';
        }
    }
};
        // Se realiza la llamada ajax
        $.ajax(settings);
        
        
        
        
}


//var textoConfVNormal = "<?xml version='1.0' encoding='iso-8859-1'?><ConfiguracionVisor>  <Layers>    <OlLayer name='orto2013etrs89' isBaseLayer='true' label='Ortofoto 2013'></OlLayer>    <OlLayer name='Sigpac_2014_ETRS89' isBaseLayer='false' label='Sigpac actual'></OlLayer>    <OlLayer name='Sigpac_2013_ETRS89' isBaseLayer='false' label='Sigpac 2013'></OlLayer>    <OlLayer name='ControlesCampoGipuzkoaEtrs89' isBaseLayer='false' label='Controles 2013' style='ControlesCampoGipuzkoa'></OlLayer>    <OlLayer name='Toponimia_Sigpac_2014_ETRS89' isBaseLayer='false' label='Etiquetas SIGPAC' ></OlLayer>  </Layers>  <ToolList>    <Tool name='basic_tools' layer='' tieneFuncionReceptora='false' funcionReceptora='' identificador='' visible='true'/>    <Tool name='ScaleBar' layer='' tieneFuncionReceptora='false' funcionReceptora='' identificador='' visible='true'/>    <Tool name='LayerSwitcher' layer='' tieneFuncionReceptora='false' funcionReceptora='' identificador='' visible='true'/>    <Tool name='MapOverview' layer='' tieneFuncionReceptora='false' funcionReceptora='' identificador='' visible='true'/>    <Tool name='Highlight' layer='RecintosSigpacEtrs89' tieneFuncionReceptora='false' funcionReceptora='' identificador='' visible=''>      <OLLyrName name='pila' desc='' displayClass=''/>    </Tool>    <Tool name='IktReportDocument' layer='' tieneFuncionReceptora='true' funcionReceptora='prepareReport' identificador='' visible='false'>      <OLLyrName name='' desc='Informe'/>    </Tool>    <Tool name='DrawPolygon' layer='' tieneFuncionReceptora='false' funcionReceptora='' identificador='' visible='false'>      <OLLyrName name='pila' desc='' displayClass=''/>    </Tool>    <Tool name='DrawLine' layer='' tieneFuncionReceptora='false' funcionReceptora='' identificador='' visible='false'>      <OLLyrName name='pila' desc='' displayClass=''/>    </Tool>    <Tool name='DrawPoint' layer='' tieneFuncionReceptora='false' funcionReceptora='' identificador='' visible='false'>      <OLLyrName name='pila' desc='' displayClass=''/>    </Tool>    <Tool name='IktDeleteFeature' layer='' tieneFuncionReceptora='false' funcionReceptora='' identificador='' visible='false'>      <OLLyrName name='pila' desc='' displayClass=''/>    </Tool>    <Tool name='ModifyFeature' layer='' tieneFuncionReceptora='false' funcionReceptora='' identificador='' visible='false'>      <OLLyrName name='pila' desc='' displayClass=''/>    </Tool>    <Tool name='SelectFeature' layer='' tieneFuncionReceptora='true' funcionReceptora='showSelectFeature' identificador='' visible='false'>      <OLLyrName name='pila' desc='' displayClass=''/>    </Tool>    <Tool name='IktMergeFeatures' layer='' tieneFuncionReceptora='false' funcionReceptora='' identificador='' visible='false'>      <OLLyrName name='pila' desc='' displayClass=''/>    </Tool>    <Tool name='IktCutFeature' layer='' tieneFuncionReceptora='false' funcionReceptora='' identificador='' visible='false'>      <OLLyrName name='pila' desc='' displayClass=''/>    </Tool>            </ToolList>  <Idioma>es</Idioma>  <NumZoomLevels>13</NumZoomLevels>  <SRS>EPSG:25830</SRS>  <hostname>http://www.iktlan.net</hostname>  <DesactivaAlerts>true</DesactivaAlerts></ConfiguracionVisor>"
//var xmlDoc = $.parseXML(textoConfVNormal);
//var xmlDoc=jQuery.parseXML(textoConfVNormal);
function StringToXML(oString) {
    //code for IE4. 
    if (window.ActiveXObject) {
        var oXML = new ActiveXObject("MSXML2.DOMDocument");
        oXML.loadXML(oString);
        return oXML;
    }
    // code for Chrome, Safari, Firefox, Opera, etc. 
    else {
        return (new DOMParser()).parseFromString(oString, "text/xml");
    }
}




$.widget("ui.vcw", {
    _objConfiguracion: null,
    _objXML: null,
    _vcw: null,
    _alertEL: null,
    _originalSLD: null,
    options: {
        confFile: null,
        confCallback: null,
        queryURL: null,
        dataQueryCallback: null,
        finAnadirFunc: null,
        hideFeatureFunc: null,
        additionalDataQueries: function(obj) {
            return obj;
        },
        statusBar: false,
        toolBar: true
    },
    // Use the _setOption method to respond to changes to options
    _setOptions: function(options) {
        var self = this;
        var underlyingEl = this.element;
        // actualizamos las opciones
        $.extend(self.options, options);
        // cuando cambiemos el origen xml o el origen query, reiniciamos el mapa
        // reiniciar visor

        //*modificaciones maria*//

        /* var oXML =  new ActiveXObject("MSXML2.DOMDocument");
        oXML.loadXML(textoConfVNormal);
        self._objConfiguracion = oXML;*/
        //self._objConfiguracion = xmlDoc;

        self._objConfiguracion = StringToXML(textoConfVNormal)

        //self._getConfiguracion();



        $(underlyingEl).empty();
        self._vcw = new VisorCartograficoWeb($(underlyingEl).attr("id"), self._objConfiguracion);
        self.cargaMapa();
    },
    _init: function() {
        var self = this;
        //SOBREESCRIBIR EL ALERT DEL BROWSER
        if ($.isFunction(self.options.messageHandler)) {
            window.alert = function() {
                self.options.messageHandler(arguments[0]);
            }
        }

        var underlyingEl = this.element;

        //*modificaciones maria*//
        /*var oXML =  new ActiveXObject("MSXML2.DOMDocument");
        oXML.loadXML(textoConfVNormal);
        self._objConfiguracion = oXML;
        */
        //self._objConfiguracion = xmlDoc;
        self._objConfiguracion = StringToXML(textoConf)


        //self._getConfiguracion();

        self._vcw = new VisorCartograficoWeb($(underlyingEl).attr("id"), self._objConfiguracion);

        //David
        //Para evitar BUG Highlight/cutfeature/modifyfeature
        var visor = self._vcw;
        var control = visor.map.getControlsBy("CLASS_NAME", "OpenLayers.Control.ModifyFeature");
        if (control[0] != undefined) {
            control[0].events.on({
                "activate": function() {
                    var ctrls = visor.map.getControlsBy("CLASS_NAME", "OpenLayers.Control.SelectFeature");
                    for (var i = 0; i <= ctrls.length - 1; i++) {
                        if (ctrls[i].highlightOnly)
                            ctrls[i].deactivate();
                    }
                },
                "deactivate": function() {
                    var ctrls = visor.map.getControlsBy("CLASS_NAME", "OpenLayers.Control.SelectFeature");
                    for (var i = 0; i <= ctrls.length - 1; i++) {
                        if (ctrls[i].highlightOnly)
                            ctrls[i].activate();
                    }
                }
            });
        }

        control = visor.map.getControlsBy("CLASS_NAME", "OpenLayers.Control.IktCutFeature");
        if (control[0] != undefined) {
            control[0].events.on({
                "activate": function() {
                    var ctrls = visor.map.getControlsBy("CLASS_NAME", "OpenLayers.Control.HighLight");
                    for (var i = 0; i <= ctrls.length - 1; i++) {
                        if (ctrls[i].highlightOnly)
                            ctrls[i].activate();
                    }
                },
                "deactivate": function() {
                    var ctrls = visor.map.getControlsBy("CLASS_NAME", "OpenLayers.Control.HighLight");
                    for (var i = 0; i <= ctrls.length - 1; i++) {
                        if (ctrls[i].highlightOnly)
                            ctrls[i].deactivate();
                    }
                }
            });
            //-----
        }
        self.cargaMapa();
    },
    _getConfiguracion: function() {
        var self = this;

        $.ajax({
            type: "GET",
            url: self.options.confFile + "?prand=" + parURLAle(),
            dataType: "xml",
            async: false,
            success: function(xml) {
                self._objConfiguracion = xml;
                if ($.isFunction(self.options.confCallback)) {
                    self._objConfiguracion = self.options.confCallback.call(this, self._objConfiguracion);
                }
            }
        });
    },
    _getXML: function() {
        var self = this;
        var objData = { 'prand': parURLAle(), 'hash': viewHash };
        objData = self.options.additionalDataQueries(objData);
        objData = { 'data': objData };

        $.ajax(
		{
		    type: "POST",
		    url: self.options.queryURL,
		    data: JSON.stringify(objData),
		    dataType: "xml",
		    contentType: "application/json; charset=utf-8",
		    async: false,
		    success: function(xml) {
		        self._objXML = xml;
		        if ($.isFunction(self.options.dataQueryCallback)) {
		            self._objXML = self.options.dataQueryCallback.call(this, self._objXML);
		        }
		    }
		});
    },
    cargaMapa: function() {
        var self = this;
        self._vcw.DoMapa();
        self._getXML();
        self.pilaAnadir(self._objXML, true, true);

        var alertEL;

        if ($(".alertaEdicion", $("#botoneraVCW")).size() == 0) {
            alertEL = $('<div class="ui-state-highlight ui-corner-all alertaEdicion" style="display:inline-block; font-size:1.1em;"><p style="margin:auto;padding:0.4em 1em;white-space:nowrap;"><span class="ui-icon ui-icon-info" style="float: left; margin-right: .3em;"></span><span class="textoAlerta"></span><a>' + $.Literales['50016'] + '</a></p></div>').toggle(false).appendTo($(".main"));
        }
        else {
            alertEL = $(".alertaEdicion", $("#botoneraVCW"));
        }
        self._alertEL = alertEL;

        if (!self.options.statusBar) {
            $(self.element).find("#divStatusBar").toggle(false);
        }

        if (!self.options.toolBar) {
            $(self.element).find("#toolpanel").toggle(false);
        }

        if (self.options.labelArray != undefined) {
            self._vcw.labelFeatures(self.options.labelArray);
        }
    },
    setTool: function(tool, message, id) {
        var self = this;
        //  desactivar todas las herramientas activadas
        var panel = self._vcw.map.getControlsBy("id", "toolpanel")
        var controls = panel[0].controls;
        for (i = 0; i < controls.length; i++) {
            controls[i].deactivate();
        }
        self._vcw.setActiveTool_Msg(tool, message, id);
    },
    deactivateTool: function(tool) {
        var self = this;
        var control = self._vcw.map.getControlsBy("id", tool);
        if (control.length > 0)
            control[0].deactivate();
        else {
            control = self._vcw.map.getControlsBy("CLASS_NAME", tool);
            if (control.length > 0)
                control[0].deactivate();
            else {
                alert("No se ha encontrado el control especificado.");
            }
        }
    },
    pilaLimpiar: function() {
        var self = this;
        self._vcw.PilaLimpiar();
    },
    mostrarAlerta: function(obj) {
        var self = this;

        var textoAlerta = obj.textoAlerta;
        var cancelarAccion = obj.cancelarAccion;
        var funcionCancelar = obj.funcionCancelar;
        var claseAlerta = obj.claseAlerta;
        var iconoAlerta = obj.iconoAlerta;
        var duracionAlerta = obj.duracionAlerta;

        var botonera = $("#botoneraVCW");
        var pos = {};
        var accion = cancelarAccion != undefined ? cancelarAccion : false;

        if ($(botonera).children(".ui-button:visible").size() == 0) {
            pos.of = $(botonera);
            pos.at = "left center";
        }
        else {
            pos.of = $(botonera).children(".ui-button:visible").not(".floatRight").last();
            pos.at = "right center";
        }
        pos.my = "left center";
        pos.using = function(calcPos) {
            $(this).css({ top: calcPos.top, left: calcPos.left + 10 });
        };

        if (iconoAlerta != undefined) {
            $(self._alertEL).find(".ui-icon").attr("class", "ui-icon " + iconoAlerta);
        }

        if (claseAlerta != undefined) {
            $(self._alertEL).children("div").addClass(claseAlerta);
        }

        $(self._alertEL).find(".textoAlerta").text(textoAlerta);
        if (!accion) {
            // ocultar link de cancelar accion
            $(self._alertEL).find("a").toggle(false);
        }
        else {
            $(self._alertEL).find("a").toggle(true).click(function() {
                self.cancelarAccion();
                if ($.isFunction(funcionCancelar)) {
                    funcionCancelar.call(this, self._alertEL);
                }
            });
        }
        $(self._alertEL).css({ "margin": "0.3em" }).toggle(true).position(pos);
        if (duracionAlerta != undefined) {
            $(self._alertEL).toggle(false).fadeIn().delay(duracionAlerta).fadeOut();
        }
        else {
            $(self._alertEL).toggle(false).fadeIn();
        }

        if ($.isFunction(obj.callback)) {
            obj.callback.call(this, self._alertEL);
        }
    },
    ocultarAlerta: function() {
        var self = this;
        $(self._alertEL).fadeOut();
    },
    doMapa: function() {
        var self = this;
        self._vcw.DoMapa();
    },
    pilaLocalizar: function() {
        var self = this;
        self._vcw.PilaLocalizar();
    },
    pilaQuitar: function(id) {
        var self = this;
        self._vcw.PilaQuitar(id);
    },
    pilaQuitarByFID: function(fid) {
        var self = this;
        var layerFeatures, featuresToRemove = new Array();
        layerFeatures = self._vcw.map.getLayersByName("pila")[0].features;

        for (var i = 0; i <= layerFeatures.length - 1; i++) {
            if (layerFeatures[i].fid == fid) {
                featuresToRemove.push(layerFeatures[i]);
            }
        }
        self._vcw.map.getLayersByName("pila")[0].removeFeatures(featuresToRemove);
    },
    setLayerVisibility: function(layer, visible) {
        var self = this;
        self._vcw.setLayerVisibility(layer, visible);
    },
    cancelarAccion: function() {
        // selecciona la herramienta de navegacion
        var self = this;
        self.setTool("OpenLayers.Control.DragPan");
        self.ocultarAlerta();
    },
    saveVisorData: function() {
        var self = this;
        self._vcw.saveVisorData(false);
    },
    registrarHandler: function(evento, funcion) {
        var self = this;
        var vectorLayer = self._vcw.map.getLayersByName("pila")[0];
        vectorLayer.events.register(evento, vectorLayer, function(evt) {
            /*evt.feature.state = OpenLayers.State.INSERT;
                
            var id_pila = evt.feature.attributes["pila_id"];
            evt.feature.attributes = new Array();
                
            evt.feature.attributes["PAR_DES"] = "";
            evt.feature.attributes["PAR_AREA"] = 0.0;
            evt.feature.attributes["PAR_PERI"] = 0.0;
            evt.feature.attributes["CONUSUCOD"] = "";
            evt.feature.attributes["CONMODFEC"] = null;
              
            evt.feature.attributes["pila_id"] = id_pila;
            */
            funcion.call(self, evt)
        });
    },
    getVCW: function() {
        return this._vcw;
    },
    setParameters: function(obj) {
        var self = this;
        self._vcw.setParameters(obj);
    },
    selectFeature: function(vFID) {
        var self = this;
        var controlSel = self.getControl("OpenLayers.Control.SelectFeature")
        controlSel.select(self.getFeature(vFID));
    },
    unselectFeature: function(vFID) {
        var self = this;

        controlSel.unselect(self.getFeature(vFID));
    },
    selectFeatures: function(vFIDs) {
        var self = this;
        var controlSel = self.getControl("OpenLayers.Control.SelectFeature")
        $.each(vFIDs, function(index, el) {
            controlSel.select(self.getFeature(el.fid));
        });
    },
    getFeature: function(vFID) {
        var self = this;
        //recuperar el control select feature
        var controlSel = self.getControl("OpenLayers.Control.SelectFeature");
        // seleccionar la feature
        var feature = null;
        var features = self._vcw.map.getLayersByName("pila")[0].features;
        for (i = 0; i < features.length; i++) {
            if (features[i].fid == vFID) {
                feature = features[i];
                break;
            }
        }
        return feature;
    },
    getControl: function(controlName) {
        var self = this;
        return self._vcw.map.getControlsBy("CLASS_NAME", controlName)[0];
    },
    unselectAll: function() {
        var self = this;
        var controlSel = self.getControl("OpenLayers.Control.SelectFeature")
        controlSel.unselectAll();
    },
    getSelectedFeatures: function() {
        var self = this;
        var controlSel = self.getControl("OpenLayers.Control.SelectFeature")
        return controlSel.layer.selectedFeatures;
    },
    regetXML: function() {
        var self = this;
        self._getXML();
        self.pilaAnadir(self._objXML, false, true);
    },
    tratarQuerys: function(self, bZoomTo, dataPila) {
        return function(req) {
            var data;
            if (navigator.userAgent.toLowerCase().indexOf('msie') != -1)
                data = req.responseXML;
            else
                data = req.responseText;

            data = req.responseText;

            if (data.length > 0) {
                //Proceso la información de la obtenida de la pila para sacar los TypeNames, es decir, los nombres de las capas
                //Obtengo la pila
                var vectorLayer = self._vcw.map.getLayersByName("pila")[0];
                var vectorFeatures = new Array();
                //Utilizando Firefox, al hacer la petición a GeoServer, la respuesta incluye un 1 al final del texto
                //pero en IE parece que no es necesario. Como las aplicaciones de IKT están enmarcadas en el 
                //ámbito de desarrollo de IE - Microsoft, en rpincipio no hacemos un tratamiento especial.
                var theParser = new OpenLayers.Format.GML();
                theParser.internalProjection = null;
                theParser.externalProjection = null;
                theParser.extractStyles = false;
                theParser.extractAttributes = true;
                var features = theParser.read(data);
                // Modificaciones para procesar más de una query en la misma llamada.
                var querys = dataPila[1];
                if (features.length > 0) {
                    for (var j = 0; j <= querys.length - 1; j++) {
                        var queryActualID = querys[j].layer.toLowerCase()
                        var queryActual = querys[j];
                        //Cojo el estilo
                        var style = new Object();

                        if (queryActual.getRellenoColor()) {
                            style.fillColor = "#" + queryActual.getRellenoColor();
                            style.fill = true;
                        } else {
                            style.fill = false;
                        }

                        if (queryActual.getRellenoTransparencia())
                            style.fillOpacity = queryActual.getRellenoTransparencia();
                        if (queryActual.getContornoColor()) {
                            style.strokeColor = "#" + queryActual.getContornoColor();
                            style.stroke = true;
                        } else {
                            style.stroke = false;
                        }
                        if (queryActual.getContornoGrosor())
                            style.strokeWidth = queryActual.getContornoGrosor();
                        if (queryActual.getContornoTransparencia())
                            style.strokeOpacity = queryActual.getContornoTransparencia();
                        if (queryActual.getContornoTipo())
                            style.strokeDashstyle = queryActual.getContornoTipo();

                        for (var k = 0; k <= features.length - 1; k++) {
                            if (features[k].fid.toLowerCase().indexOf(queryActualID) != -1) {
                                features[k].attributes["pila_id"] = queryActual.getID();
                            }
                            if (features[k].fid == queryActual.name && $.isFunction(self.options.hideFeatureFunc) && self.options.hideFeatureFunc.call(this, queryActual, self._objXML)) {
                                features[k].style = OpenLayers.Feature.Vector.style["delete"]
                            }
                        }

                        //Creo la regla
                        var rule = new OpenLayers.Rule({
                            filter: new OpenLayers.Filter.Comparison({
                                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                                property: "pila_id",
                                value: queryActual.getID()
                            }),
                            symbolizer: style
                        });

                        //Añado la regla correspondiente
                        vectorLayer.styleMap.styles["default"].addRules([rule, new OpenLayers.Rule({ elseFilter: true })]);

                    }

                    vectorLayer.addFeatures(features);
                } else {
                    alert("No se han encontrado datos que cargar.");
                    self._vcw.setStatusBarMessage("&nbsp;" + OpenLayers.i18n("lblStatusBarVisorInicializado") + "&nbsp;");
                }
                //No se deberian pasar 2 querys en la misma peticion de la PILA ya que no tenemos la manera de 
                //identificar los elementos resultantes a que query deberian ir.
                //Asignamos el ID a las features
                //Si hay puntos
                if (dataPila[0].length > 0) {
                    var geom = new Array();
                    for (var j = 0; j <= dataPila[0].length - 1; j++) {
                        var pto = dataPila[0][j];
                        var coords = pto.getCoords().split(",");

                        //Preparo el estilo personalizado para cada Punto					
                        var pointStyle = {
                            pointRadius: pto.getGrosor(),
                            fillOpacity: 1,
                            strokeOpacity: 1,
                            strokeColor: "#000000",
                            label: pto.getLabelText(),
                            labelAlign: "rt",
                            strokeWidth: 1,
                            fillColor: "#" + pto.getColor(),
                            graphicName: pto.getTipo(),
                            fontColor: "#" + pto.getLabelColor(),
                            fontSize: pto.getLabelSize(),
                            fontWeight: "bold"
                        };

                        //Creo la feature que representa al punto
                        var feat = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(coords[0], coords[1]), null, pointStyle);

                        if (feat) {
                            //inicializo su array de atributos y le asocio el código de la PILA
                            feat.attributes["pila_id"] = pto.getID();
                            feat.fid = "punto." + pto.getCoords();
                            geom.push(feat);
                        } else {
                            alert("No se han podido cargar los puntos.");
                            self._vcw.setStatusBarMessage("&nbsp;" + OpenLayers.i18n("lblStatusBarVisorInicializado") + "&nbsp;");
                        }

                    }

                    //Finalmente añado las features a la capa
                    vectorLayer.addFeatures(geom);


                }
                //Si nos piden que hagamos zoom a los datos
                if (bZoomTo && vectorLayer.getDataExtent() != null)
                    self._vcw.map.zoomToExtent(vectorLayer.getDataExtent());

                self._vcw.setStatusBarMessage("&nbsp;" + OpenLayers.i18n("lblStatusBarVisorInicializado") + "&nbsp;");
            }
            if ($.isFunction(self.options.finAnadirFunc)) {
                self.options.finAnadirFunc.call(this, self._objXML);
            }

        }
    },
    pilaAnadir: function(bAppend, bZoomTo) {
        var self = this;
        /*var self = this;
        self._vcw.PilaAnadir(xml, append, zoomTo);*/
        var sXML = self._objXML;
        //Si nos dicen que no hay que añadir, eliminamos todas las entidades anteriores
        if (!bAppend) self._vcw.PilaLimpiar();
        //Añadimos las nuevas entidades
        //Primero transformo la información que me pasan en información que el visor puede entender
        var dataPila = (new PilaObjectsManager(sXML)).getDataObjects();
        //Datos para la funcion de retorno
        var pila = self._vcw.Pila();
        //Si hay querys, entonces necesitamos hacer una petición al servicio WFS mediante AJAX
        if (dataPila[1].length > 0) {
            self._vcw.setStatusBarMessage("&nbsp;" + OpenLayers.i18n("lblStatusBarVisorCargandoDatos") + "...&nbsp; <img src='" + networkSettings.appImageDir + "processing_statusbar_blue.gif' height='12' width='12'></img>");
            //Creo el objeto encargado de preguntar al WFS this
            var wfsMan = new WFSManager(self._vcw.ogcServicesManager);
            //Obtengo el fichero XML que representa la petición GetFeature
            var filtro = wfsMan.preparePilaQueryFeatureRequest(dataPila[1]);
            //Hago la petición GetFeature mediante AJAX al servicio WFS
            wfsMan.getFeaturePILA(self.tratarQuerys(self, bZoomTo, dataPila), filtro);
        } else {
            //si hay puntos
            if (dataPila[0].length > 0) {
                var geom = new Array();
                for (var j = 0; j <= dataPila[0].length - 1; j++) {
                    var pto = dataPila[0][j];
                    var coords = pto.getCoords().split(",");

                    //Preparo el estilo personalizado para cada Punto					
                    var pointStyle = {
                        pointRadius: pto.getGrosor(),
                        fillOpacity: 1,
                        strokeOpacity: 1,
                        strokeColor: "black",
                        label: pto.getLabelText(),
                        labelAlign: "rt",
                        strokeWidth: 1,
                        fillColor: "#" + pto.getColor(),
                        graphicName: pto.getTipo(),
                        fontColor: "#" + pto.getLabelColor(),
                        fontSize: pto.getLabelSize(),
                        fontWeight: "bold"
                    };

                    //Creo la feature que representa al punto
                    var feat = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(coords[0], coords[1]), null, pointStyle);

                    if (feat) {
                        //inicializo su array de atributos y le asocio el código de la PILA
                        feat.attributes["pila_id"] = pto.getID();
                        feat.fid = "punto." + pto.getCoords();
                        geom.push(feat);
                    } else {
                        alert("No se han podido cargar los puntos.");
                        self._vcw.setStatusBarMessage("&nbsp;" + OpenLayers.i18n("lblStatusBarVisorInicializado") + "&nbsp;");
                    }

                }
                //Finalmente añado las features a la capa

                pila.addFeatures(geom);
                //Si nos piden que hagamos zoom a los datos
                if (bZoomTo && pila.getDataExtent() != null)
                    self._vcw.map.zoomToExtent(pila.getDataExtent());
                self._vcw.setStatusBarMessage("&nbsp;" + OpenLayers.i18n("lblStatusBarVisorInicializado") + "&nbsp;");
            }
        }
        if ($.isFunction(self.options.finAnadirFunc)) {
            self.options.finAnadirFunc.call(this, sXML);
        }
    },
    anadirPila: function(xmlAnadir, bAppend, bZoomTo) {
        var self = this;
        /*var self = this;
        self._vcw.PilaAnadir(xml, append, zoomTo);*/


        var sXML = xmlAnadir;

        //Si nos dicen que no hay que añadir, eliminamos todas las entidades anteriores
        if (!bAppend) self._vcw.PilaLimpiar();
        //Añadimos las nuevas entidades
        //Primero transformo la información que me pasan en información que el visor puede entender
        var dataPila = (new PilaObjectsManager(sXML)).getDataObjects();
        //Datos para la funcion de retorno
        var pila = self._vcw.Pila();
        //Si hay querys, entonces necesitamos hacer una petición al servicio WFS mediante AJAX
        if (dataPila[1].length > 0) {
            self._vcw.setStatusBarMessage("&nbsp;" + OpenLayers.i18n("lblStatusBarVisorCargandoDatos") + "...&nbsp; <img src='" + networkSettings.appImageDir + "processing_statusbar_blue.gif' height='12' width='12'></img>");
            //Creo el objeto encargado de preguntar al WFS this
            var wfsMan = new WFSManager(self._vcw.ogcServicesManager);
            //Obtengo el fichero XML que representa la petición GetFeature
            var filtro = wfsMan.preparePilaQueryFeatureRequest(dataPila[1]);
            //Hago la petición GetFeature mediante AJAX al servicio WFS
            wfsMan.getFeaturePILA(self.tratarQuerys(self, bZoomTo, dataPila), filtro);
        } else {
            //si hay puntos
            if (dataPila[0].length > 0) {
                var geom = new Array();
                for (var j = 0; j <= dataPila[0].length - 1; j++) {
                    var pto = dataPila[0][j];
                    var coords = pto.getCoords().split(",");

                    //Preparo el estilo personalizado para cada Punto					
                    var pointStyle = {
                        pointRadius: pto.getGrosor(),
                        fillOpacity: 1,
                        strokeOpacity: 1,
                        strokeColor: "black",
                        label: pto.getLabelText(),
                        labelAlign: "rt",
                        strokeWidth: 1,
                        fillColor: "#" + pto.getColor(),
                        graphicName: pto.getTipo(),
                        fontColor: "#" + pto.getLabelColor(),
                        fontSize: pto.getLabelSize(),
                        fontWeight: "bold"
                    };

                    //Creo la feature que representa al punto
                    var feat = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(coords[0], coords[1]), null, pointStyle);

                    if (feat) {
                        //inicializo su array de atributos y le asocio el código de la PILA
                        feat.attributes["pila_id"] = pto.getID();
                        feat.fid = "punto." + pto.getCoords();
                        geom.push(feat);
                    } else {
                        alert("No se han podido cargar los puntos.");
                        self._vcw.setStatusBarMessage("&nbsp;" + OpenLayers.i18n("lblStatusBarVisorInicializado") + "&nbsp;");
                    }

                }
                //Finalmente añado las features a la capa

                pila.addFeatures(geom);
                //Si nos piden que hagamos zoom a los datos
                if (bZoomTo && pila.getDataExtent() != null)
                    self._vcw.map.zoomToExtent(pila.getDataExtent());
                self._vcw.setStatusBarMessage("&nbsp;" + OpenLayers.i18n("lblStatusBarVisorInicializado") + "&nbsp;");
            }
        }
        if ($.isFunction(self.options.finAnadirFunc)) {
            self.options.finAnadirFunc.call(this, sXML);
        }
    }
    ,
    setSeleccionPrevia: function(obj) {
        this._seleccionPrevia = obj;
    },
    getSeleccionPrevia: function() {
        var obj = this._seleccionPrevia;
        this._seleccionPrevia = null;
        return obj;
    },
    getFeatureArea: function(fid) {
        return this._vcw.getFeatureArea(fid);
    },
    showFeatures: function(arrFIDs) {
        this._vcw.showFeatures(arrFIDs);
    },
    hideFeatures: function(arrFIDs) {
        this._vcw.hideFeatures(arrFIDs);
    },
    addWMSLayer: function(layerName, layerCaption) {
        var self = this;
        self._vcw.addWMSLayer(layerName, layerCaption, vServidorWMS, "image/png", "wms", "single");
    },
    removeWMSLayer: function(layerName) {
        var self = this;
        self._vcw.removeLayer(layerName)
    },
    applyStyleToLayer: function(layerCaption, styleURL, styleParameters) {
        var self = this;
        $.get(styleURL, $.extend(styleParameters, { 'prand': parURLAle() }), function(data) {
            self._originalSLD = data;
            if ($.isFunction(self.options.SLDCallback)) {
                self.options.SLDCallback.call(this, data, layerCaption, function(data) {
                    self._vcw.applyStyleToLayer(layerCaption, { 'SLD_BODY': data });
                });
            }
            else {
                self._vcw.applyStyleToLayer(layerCaption, { 'SLD_BODY': data })
            }
        })
    },
    getOriginalSLD: function() {
        var self = this;
        return self._originalSLD;
    },
    applyStyleToLayerXML: function(layerCaption, styleXMLData) {
        var self = this;
        self._vcw.applyStyleToLayer(layerCaption, { 'SLD_BODY': styleXMLData });
    },
    setToolSourceLayer: function(tool, sourceLayerName) {
        var self = this;
        var ctrl = self.getControl(tool);
        ctrl.setSourceLayer(sourceLayerName);
    },
    getToolSourceLayer: function(tool) {
        var self = this;
        var ctrl = self.getControl(tool);
        return ctrl.getSourceLayer();
    },
    labelFeatures: function(arr) {
        var self = this;
        self._vcw.labelFeatures(arr);
    },
    _destroy: function() {
        var self = this;
        if ($.isFunction(self.options.messageHandler)) {
            window.alert = _alert;
        }
    },
    changeFeatureAttribute: function(fid, attribute, value) {
        var self = this;
        var feature = self.getFeature(fid);
        feature.attributes[attribute] = value;
    },
    toolProxy: function(tool, method, parameters) {
        var self = this;
        var ctrl = self.getControl(tool);
        ctrl[method].apply(ctrl, parameters);
    },

    setGraficosWKT: function(lista) {
        var self = this;
        self._vcw.setGraficosWKT(lista);
    },

    getGraficosWKT: function() {
        var self = this;
        return self._vcw.getGraficosWKT();
    },
    desactivarTool: function() {
        var self = this;
        //  desactivar todas las herramientas activadas
        var panel = self._vcw.map.getControlsBy("id", "toolpanel")
        var controls = panel[0].controls;
        for (i = 0; i < controls.length; i++) {
            controls[i].deactivate();
        }
    },
    clearGraficosWKT: function(id) {
        var self = this;
        self._vcw.clearGraficosWKT(id);
    },
    showFeatureToolTip: function(f1, f2) {
        var self = this;
        self._vcw.showFeatureToolTip(f1, f2);
    },
    setLayerOpacity: function(layerName, opacity) {
        var self = this;
        self._vcw.setLayerOpacity(layerName, opacity);
    },
    PilaGetPilaObject: function(idPila) {
        var self = this;
        return self._vcw.PilaGetPilaObject(idPila);
    }
});