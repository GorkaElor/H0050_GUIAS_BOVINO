<%@ Page Language="vb" AutoEventWireup="false"  MasterPageFile="~/Contenida.master" CodeBehind="GridSelGen.aspx.vb" Inherits="WEB.Vista_GridSelGen" %>



<asp:Content ID="ContentJqGrid" ContentPlaceHolderID="content" runat="Server">
    <script type="text/javascript">
            function cargarLiteralesGridSel (grupo){
			        if ($.Literales_calls[grupo]==undefined || !$.Literales_calls[grupo])
			        {
				        var ret;
				        var miAjax = $.ikt_ajax_obj.inicializar();
				        miAjax.pagina= rutaGridSelGen+"/GetLiterales";
				        miAjax.parametros ={'datos':{'Gru_Literales': grupo,'hash':viewHash}}
				        miAjax.async = false;
				        miAjax.correcto=function (objeto){
								        $.extend( $.Literales, JSON.parse(objeto.responseText).d);   
								        $.Literales_calls[grupo] = true;
                                        ret = true;				
				        };
				        miAjax.error=function (objeto){
                                        alert('Ha ocurrido un error en la carga de los literales');
								        $.Literales_calls[grupo] = false;
                                        ret = false;
				        };
				        miAjax.enviar();
        				
				        return ret;   
			        }
			        else
			        {
				        return true;
			        }
           }
           
            var idElemento='<%=me.idElemento %>';
            var selElem=$("#"+idElemento);
            if (cargarLiteralesGridSel(selElem.seleccion('option','grulits'))){
                if(selElem.seleccion('option','include')!=''){
                    jQuery.incluirJS(selElem.seleccion('option','include'));
                }
           } 
                    
    </script>
    <div id="Grid_contentHeader"></div> 
    <div id="ContenidoGridSelGen_loading"  class="loading_ikt" ></div>
    <div id="ContenidoGridSelGen" class="gridWrapper" style="display:none;">
        <div class="gridHeader"></div>
        <input type="hidden" id="hdnDes" value="hdnDes" />
         <input type="hidden" id="hdnCod" value="hdnCod" />
         <%
         If Not Me.Literales Is Nothing andalso Me.Literales.Count>0   Then
         %>
         <div id="searchBarGridSelGen" class="searchBar">
            <div id="searchBarTitleGridSelGen" class="ui-corner-all ui-helper-clearfix searchBarTitle">
                <a class="busquedatitulo"><span id="TitBusqueda_jqLit_50025"><%=IF(IKT.RecAplNet.General.SessionIKT.Idioma=IKT.RecAplNet.General.IdiomaIKT.IKT_CASTELLANO,"Filtro de Búsqueda","Bilaketa-iragazkia") %></span> </a><a class="abusFlec"
                    id="abusFlec"><span class="busFlec ui-icon ui-icon-circle-triangle-s" id="busFlec">
                    </span></a>
            </div>
        </div>
         <div id="searchBodyGridSelGen"  class="ui-widget ui-widget-content ui-corner-all searchDiv" style="display:none;">
            <div class="bodyBusqueda ui-widget-content" id="searchBodyGridSelGen">
                <ul>
                <%For Each key As Integer In Me.arrLits%>
                    <%If key <> 50025 AndAlso key <> 50026 AndAlso Me.Literales.ContainsKey(key) Then%>
                        <li class="linea">
                                <ul>
                                    <li>
                                        <label class="label" id="lbl<%=key %>" for="busExpediente"><%=Me.Literales(key)  %>:</label>
                                        <input type="text" size="17" maxlength="15" name="bus<%=key %>" id="bus<%=key %>" class="text_blanco" />
                                    </li>
                                </ul> 
                         </li> 
                     <%End If %>     
                 <% Next%>
                </ul>    
            </div>
            <div class="footerBusqueda" id="searchFooterGridSelGen">
                <input type="button" class="ui-widget ui-state-default ui-corner-all  ui-button "
                    name="btnBuscarGridSelGen" id="btnBuscarGridSelGen" value="<%=Me.Literales(50025)%>" role="button" aria-disabled="false"/>
                <input type="button" class="ui-widget ui-state-default ui-corner-all  ui-button"
                    name="btnLimpiarGridSelGen" id="btnLimpiarGridSelGen" value="<%=Me.Literales(50026)%>" role="button" aria-disabled="false"/>
            </div>
        </div>
        <%End If%>
        <div id="ghGridSelGen" class="gridHeader"></div>
        <div id="dGridSelGen" class="grid dgridWHWS">
            <table id="GridSelGen" class="gridTable">
            </table>
            <div id="pagerGridSelGen" class="gridPager">
            </div>
        </div>
    </div>    
</asp:Content>
