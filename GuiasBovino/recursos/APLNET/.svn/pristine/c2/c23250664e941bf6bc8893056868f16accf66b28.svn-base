<%@ Page Language="vb" ContentType="text/css"  Inherits="WEB.masterCSS" CodeBehind="masterCSS.aspx.vb" %>
<%@ OutputCache Duration="216000" VaryByParam="None" %>
<%@ Import Namespace="IKT.RecAplNet.VistaWeb"  %>

/* generic */

html,body,form{
	margin:0;
	padding:0;
	height:100%;
	width:100%;
	overflow:hidden;
	font-family:"Trebuchet MS", "Lucida Grande","Lucida Sans",Arial,sans-serif;
}

body
{
	font-size:62.5%;
	/* scrollbar personalizado - solo IE */
	scrollbar-3dlight-color:<%=Me.CssManager().masterMainBC()%>; 
	scrollbar-arrow-color:<%=Me.CssManager().masterHeaderBC()%>; 
	scrollbar-base-color:<%=Me.CssManager().masterMainBC()%>; 
	scrollbar-darkshadow-color:<%=Me.CssManager().masterMainBC()%>; 
	scrollbar-face-color:<%=Me.CssManager().masterMainBC()%>; 
	scrollbar-highlight-color:<%=Me.CssManager().masterHeaderBC()%>; 
	scrollbar-shadow-color:<%=Me.CssManager().masterHeaderBC()%>;
}

img{
    max-width:100%;
    max-height:100%;
    margin:auto;
    display:block;
}

.clear
{
	clear:both;
}

.loading_ikt{
    background: url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/ajax-loader.gif")%>") no-repeat;
    background-position: left top;
    display: block;
    width:40em;
    height:40em;
    margin:1em;
}

.ui-button {
    margin-left: -1px;
}

.ui-autocomplete {
    height: 10em;
    max-height: 10em;
    /*min-width: 300px;*/
    overflow-x: hidden;
    overflow-y: auto;
    /*width: 300px;*/
}

.btnComboBox span.ui-button-text, .btnComboBox span.ui-button-text
{
    margin:0px;
    padding:0px;
}

/* master page format */

.container{
	height:100%;
	overflow:hidden;
}

.header{
	height:7%;
	background-color:<%=Me.CssManager().masterHeaderBC()%>;
}

.main {
	background:<%=Me.CssManager().masterMainBC()%>;
	height:90%;
}	

.footer{
	height:3%;
	background:<%=Me.CssManager().masterFooterBC()%>;
}

.footer_element_center
{
	width:100%;
	text-align:center;
	font-size:1.1em;
	color:<%=Me.CssManager().menuStateDefaultC()%>;
	margin-left: auto;
	margin-right:auto;
}

#edicion
{
	display:none;
} 

/* login */

#loginform 
{
	height:100%;
	overflow:hidden;
	width:100%;
	<%
		if not Me.CssManager().loginFormBC() is nothing then
			response.write("background-color:" & Me.CssManager().loginFormBC() & ";")
		else
			response.write("background: url('" & ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/" & Me.CssManager().loginFormImage()) & "');")
			response.write ("background-position: center;")
		end if
	%>
	font-family:"Trebuchet MS", Lucida Grande,Lucida Sans,Arial,sans-serif;
}

#loginform .loginBox
{
	-moz-border-radius: 0.5em;
	-webkit-border-radius: 0.5em;
	border-radius:0.5em;
	background-color: <%=Me.CssManager().loginFormLoginBC()%>;
	border: 1px solid <%=Me.CssManager().loginFormLoginBoC()%>;
	clear:both;
	color: <%=Me.CssManager().loginFormLoginC()%>;
	margin-left:auto;
	margin-right:auto;
	margin-top: 2em;
	padding:2em;
	width:40%;
	font-size:1.1em;
}

#loginform .loginBox p
{
	padding:0.5em;
}

#loginform .botonera
{
	margin-top:1em;
	text-align:center;
}

#loginform .loginButton
{
	-moz-border-radius: 0.5em;
	-webkit-border-radius: 0.5em;
	border-radius:0.5em;
	background: url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/imgMenu/ui-bg_highlight-soft_75_363636_1x100.png")%>") repeat-x scroll 50% 50% #363636; border: 1px solid #d3d3d3; font-weight: normal; color: #ffffff; outline: none;
	cursor:pointer;
	padding:0.5em;
	font-size:1em;
	font-family:"Trebuchet MS", Lucida Grande,Lucida Sans,Arial,sans-serif;
}

#loginform #valErr
{
	padding:0.5em;
}	
	
#loginform .lblValidacion
{
	color: Red;
}

#loginform .titApp
{
	font-size:1.4em;
	font-weight:600;
	letter-spacing: 0.1em;
	margin:1em;
	text-align:center;	
	color: <%=Me.CssManager().loginTitC()%>;
}

#loginform .logoApp
{
    padding:1em;
	width:100%;
	height:30%;
}


/* jalert */
body #popup_container
{
	font-size: 1.2em;
	min-width: 30em; /* Dialog will be no smaller than this */
	max-width: 60em; /* Dialog will wrap after this width */
	background: none repeat scroll 0 0 <%=Me.CssManager().jAlertContainerBC()%>;
	border: solid 0.2em <%=Me.CssManager().jAlertContainerBoC()%>;
	color: #000;
	-moz-border-radius: 0.2em;
	-webkit-border-radius: 0.2em;
	border-radius: 0.2em;
}

#popup_container #popup_title
{
	font-weight: bold;
	font-size:1.4em;
	color: #000;
	margin: 0;
	padding: 0.5em 1em 0.5em 1em;
	background: none repeat scroll 0 0 <%=Me.CssManager().jAlertContainerBC()%>;
	border:none;
}

#popup_container #popup_content
{
	background: none repeat scroll 0 0 <%=Me.CssManager().jAlertContainerBC()%>;
}

#popup_content #popup_message
{
	padding-left: 0em;
	overflow:auto;
	max-height: 30em ;
	max-width: 30em ;
	_height:expression(document.body.clientHeight > 300? "30em": "auto" );
	_width:expression(document.body.clientWidth > 300? "30em": "auto" );

}

#popup_panel
{
	text-align: center;
	margin: 1em 0em 0em 1em;
}

#popup_prompt
{
	margin: .5em 0em;
}

.divjAlert
{
	padding: 1em; margin: 0em 2em 2em 2em; 
}

#divErr
{
	background:<%=Me.CssManager().jAlertDivErrBC()%>;
}
	
#divAlert
{
	background:<%=Me.CssManager().jAlertDivAlertBC()%>;
}

/* loading img */
.loadingImg{
    background:url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/loader.gif")%>") no-repeat center;
    width: 6em;
    height:6em;
    display:block;
}

/* header img and titles */ 

.appTitle
{
    float:right;
    font-size: 1.1em;
    color:<%=Me.CssManager().menuStateDefaultC()%>;
}

.imgLogo
{
    height: 100%;
    margin:0px 15px 0px 5px; 
    float:left;
}

/* dialog header */

 .ui-dialog-titlebar.ui-widget-header
{
	background:none;
	border:none;
}

.ui-dialog-titlebar.ui-widget-header .ui-icon
{
	background-image:url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/" & Me.CssManager().iconFileSC)%>")
}

 .ui-dialog-title
{
	color: #000000;	
}

.ui-dialog .ui-dialog-titlebar{
    text-align: start;
}

/* dialog search */
.ui-dialog-content .searchBarTitle 
{
	color:<%=Me.CssManager().searchBarTitleC()%>;
}

.ui-dialog-content .searchBarTitle .ui-icon
{
	background-image:url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/" & Me.CssManager().iconFileSC)%>")
}

/* dialog button bar */
.dialog_throbber { background:url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/dialog_throbber.gif")%>") center center no-repeat !important; height:16px; width:16px;}

/* generic content format */

.content
{
	height:95%;
	width:100%;
}

.contentHeader
{
	background :<%=Me.CssManager().contentHeaderBC()%>;
	color: <%=Me.CssManager().contentHeaderC()%>;
	height:5%;
	overflow:hidden;
}

.contentHeaderTitle
{
	margin-left:1em;
	display: inline;
    float: left;
    font-weight:bold;
	font-size:1.2em;
    margin: 0.5em 1em;
}

.contentHeaderClose
{
	float: right;
	background-image: url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/" & Me.CssManager().iconFileSC)%>");
	background-position: -80px -128px;
	height:16px;
	width:16px;
	cursor:pointer;
	margin:0.5em;
}
	
/* search bar */
.searchBar
{
	height:6%;
	width:100%;
}

.searchBarTitle
{
	font-weight:bold;
	font-size:1.1em;
	color:<%=Me.CssManager().searchBarTitleC()%>;
	border:1px solid <%=Me.CssManager().searchBarTitleBoC()%>;
	margin: 0em 0.5em 0em 0.5em;
	padding:0.5em 1em 0.5em 1em;
}

.searchBarTitle .ui-icon
{
	background-image:url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/" & Me.CssManager().iconFileMC)%>")
}

.searchDiv
{
	border:1px solid <%=Me.CssManager().searchDivBoC()%>;
	z-index:1002;
}

.bodyBusqueda 
{
   padding:0.5em;
}

.bodyBusqueda ul
{
    list-style-type:none;
    margin:0px;
    padding:0px;
}
.bodyBusqueda .linea ul
{
	list-style-type:none;
	padding:0px;
	margin:0px;
	display: inline;
}

.bodyBusqueda .linea{
	margin-top:0.5em;
	margin-bottom:0.5em;
}

.bodyBusqueda .linea li
{
	display: inline;
	margin-right:1.5em
}

.footerBusqueda 
{
	text-align:left;
	padding: 0.4em;
}


.busquedatitulo
{
	float:left;
	cursor:pointer;
}

.abusFlec
{
	float:right;
	width:17px;
	margin-left:-1em;
	padding:0.1em;
	height:15px;
	cursor:pointer;
}

/* button bar */
.buttonBar{
	height:8%;
	padding-left:0.5em;
	text-align:left;
}
.buttonBar input{
    margin:0em 0.2em;
}

/* form */
.formContainer
{
	height:92%;
	width:100%;
}
	
.formButton
{
	height:8%;
	padding-left:0.5em;
}

.formButton input
{
	margin:0em;
}

.formContent
{
	margin:1em 1.5em;
	padding:0px;
}

.formularioEdicion
{
	overflow:auto;
	height:100%;
}

.formularioEdicion ul
{
	list-style-type:none;
	padding:0px;
}

.formularioEdicion .linea ul
{
	list-style-type:none;
	padding:0px;
	margin:0px;
	display: inline;
}

.formularioEdicion  .linea{
	margin-top:0.5em;
	margin-bottom:0.5em;
}

.formularioEdicion .linea li
{
	display: inline;
	margin-right:1.5em
}

.formularioEdicion .linea li label
{
	margin-right:1.5em;
}

.formularioEdicion .linea li label .ui-icon-bullet
{
	display: inline-block;
    vertical-align: bottom;
    cursor: pointer;
}

#campoObligatorioLegend{
    text-size:0.8em;
    font-style:italic;
}

#campoObligatorioLegend .ui-icon-bullet{
    display:inline-block;
}


.formularioEdicion fieldset ul
{
	margin:0.2em;
}

.text_blanco
{
	background-color:White !important;
	border:1px solid black;
}
.text_gris
{
	background-color:rgb(235, 235, 228) !important;
	border:1px solid black;
}
.gris
{
      background-color:rgb(235, 235, 228) !important;
      border:1px solid black;
}

/* botonera de un formulario*/
.formContainer .btnEditar
{
	/*display:inline;*/
}	
.formContainer .btnAceptar
{
	display:none;
}	
.formContainer .btnCancelar
{
	display:none;
}	
	
/* tabs */ 	
.tabsContainer .ui-tabs
{
	padding:0px;
	border:0px;
}

.tabSelector
{
	height:5%;
	padding:0px;
	overflow:hidden!important;
	*overflow: none;
}

.tabsContainer .ui-tabs .ui-tabs-nav
{
	padding:0px;
}

#ul_tabs li{
    padding:0px;
    margin:0px;
    top:0px;
}
	
.tabsContainer .ui-tabs .ui-tabs-panel
{
	background: none;
	border: 0px;
	display: block;
	height: 95%;
	padding:0px;
}

.tabsContainer
{
	height:100%;	
	width:100%;	
}

.tabs
{
	overflow-x:auto;
	overflow-y:hidden;
	position:relative;
	margin: 0 0.5em;
	border:0px;
}

.tabsWN
{
	height:100%;
}

.tabsWS
{
	height:93%; 
	padding:0px;
}
	
.tabsWSWB
{
	height:87%;
}

.tabsButton
{
	text-align:left;
	height:7%;	
	padding-left:0.5em;
}

.tabsButton input
{
	margin:0.2em;
}

/* grid */ 

.gridWrapper
{
    height:100%;
    overflow:hidden;
    width:100%;
}

.gridWrapper .ui-jqgrid
{
    margin:0em 0.5em;
}

.gridHeader
{
    height:2%;
    width:100%;
}

/* common class for all types of grid */
.grid
{
    overflow-x:auto;
    overflow-y:hidden;
    position:relative;
    width:100%;
}

.dgrid
{
    height:100%;
}

/*
	WH: with header
	WB: with button
	WS: with search bar 
*/

.dgridWH
{
    height:98%;
}

.dgridWB
{
    height:92%;
}

.dgridWS
{
    height:94%;
}

.dgridWHWB
{
    height:90%;
}

.dgridWHWS
{
    height:92%;
}

.dgridWBWS
{
    height:86%;
}

.dgridWHWBWS{
    height:84%;
}

/* en construccion */
.enconstruccion
{
	background:url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/enConstruccion.gif")%>") no-repeat center center;
	height:19px;
	width:100%;
}


/* TREE */

.leftcontent {
	width: 19.5%;
	float:left;
	height:95%;
}	

.rightcontent {
	float:right;
	width:80%;
	overflow:hidden;
	height:95%;
}

.rightcontent.noBckgnd{
    background: none;
}

/* arbol con parte derecha */
.leftcontent .containerArbol
{
	border: solid 0.1em <%=Me.CssManager().masterHeaderBC()%>;
	background: <%=Me.CssManager().masterMainBC()%>;
}

/* arbol sin parte derecha */
.containerArbol 
{
    border-bottom: solid thin <%=Me.CssManager().containerArbolBoC()%>;
	overflow:auto;
	width:100%;
	height:100%;
	background: <%=Me.CssManager().divArbolBC()%>;
}

.containerArbolWS
{
	height:95%;
}

.containerArbolWSWB
{
	height:89%;
}

.containerArbolWB
{
	height:93%;
}

.leftContentBar
{
	height:7%;
}

.leftContentBar input
{
	margin:0.2em;
}

/* --- arbol sin parte derecha */
.divOcultarArbol
{
	height:4%;
	background: <%=Me.CssManager().divOcultarArbolBC()%>;
	border-bottom: solid thin <%=Me.CssManager().divOcultarArbolBoC()%>;
}

.divArbol 
{
	height:100%;
	background:<%=Me.CssManager().divArbolBC()%>;
}
/* --- FIN arbol sin parte derecha */

/* --- arbol con parte derecha */
.leftcontent .divOcultarArbol
{
	background: <%=Me.CssManager().masterMainBC()%>;
	border:none;
}

.leftcontent .divArbol 
{
	background:<%=Me.CssManager().masterMainBC()%>;
}
/* --- FIN arbol con parte derecha */

.clear{
	clear: both;
}

#treeBusPanel
{
    position:absolute; 
    left:1.5em; 
    top:1.5em; 
    display:none;
    z-index:1001;
    border:1px solid <%=Me.CssManager().treeBusPanelBoC()%>;
}

#btnBuscarTree
{
	background-image: url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/" & Me.CssManager().iconFileSC)%>");
}

.divArbol .ui-state-highlight
{
	border:0px;
}

/*   tooltip   */
#toolTipBox {
   display: none;
   padding: 5;
   font-size: 10px !important;
   border: black solid 1px;
   font-family: Verdana;
   position: absolute;
   background-color: #EFEFEF;
   color: #000000;
   z-index : 1005;
}

/* TREE V1 */

.jstree-IKT li, 
.jstree-IKT ins { background-image:url("d.png"); background-repeat:no-repeat; background-color:transparent; }
.jstree-IKT li { background-position:-90px 0; background-repeat:repeat-y; }
.jstree-IKT li.jstree-last { background:transparent; }
.jstree-IKT .jstree-open > ins { background:url("<%=ResolveUrl("/Recursos/APLNET/jqt/css/imgArbol/nodabi.gif")%>") no-repeat; }
.jstree-IKT .jstree-closed > ins { background:url("<%=ResolveUrl("/Recursos/APLNET/jqt/css/imgArbol/nodcerr.gif")%>") no-repeat; }
.jstree-IKT .jstree-leaf > ins { background:transparent; }

/*
.jstree-IKT .jstree-hovered { background:url("<%=ResolveUrl("/Recursos/APLNET/css/IKT/images/ui-bg_highlight-soft_65_ccc27b_1x100.png")%>") repeat-x 50% 50% }
.jstree-IKT .jstree-clicked {background:url("<%=ResolveUrl("/Recursos/APLNET/css/IKT/images/ui-bg_highlight-soft_65_ccc27b_1x100.png")%>") repeat-x 50% 50% }
*/
.jstree-IKT a .jstree-icon { background-position:-56px -19px; }
.jstree-IKT a.jstree-loading .jstree-icon { background:url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/imgArbol/throbber.gif")%>") center center no-repeat !important; }

/* arbol con parte derecha*/
.leftcontent .jstree-IKT.jstree-focused { background:<%=Me.CssManager().masterMainBC()%> }
/* arbol sin parte derecha */
.jstree-IKT.jstree-focused { background:<%=Me.CssManager().divArbolBC()%> }

.jstree-IKT .jstree-no-dots li, 
.jstree-IKT .jstree-no-dots .jstree-leaf > ins { background:transparent; }
.jstree-IKT .jstree-no-dots .jstree-open > ins { background:url("<%=ResolveUrl("/Recursos/APLNET/jqt/css/imgArbol/nodabi.gif")%>") no-repeat;  }
.jstree-IKT .jstree-no-dots .jstree-closed > ins { background:url("<%=ResolveUrl("/Recursos/APLNET/jqt/css/imgArbol/nodcerr.gif")%>") no-repeat;  }

.jstree-IKT .jstree-no-icons a .jstree-icon { display:none; }

.jstree-IKT .jstree-search { font-style:italic; }

.jstree-IKT .jstree-no-icons .jstree-checkbox { display:inline-block; }
.jstree-IKT .jstree-no-checkboxes .jstree-checkbox { display:none !important; }
.jstree-IKT .jstree-checked > a > .jstree-checkbox { background-position:-38px -19px; }
.jstree-IKT .jstree-unchecked > a > .jstree-checkbox { background-position:-2px -19px; }
.jstree-IKT .jstree-undetermined > a > .jstree-checkbox { background-position:-20px -19px; }
.jstree-IKT .jstree-checked > a > .jstree-checkbox:hover { background-position:-38px -37px; }
.jstree-IKT .jstree-unchecked > a > .jstree-checkbox:hover { background-position:-2px -37px; }
.jstree-IKT .jstree-undetermined > a > .jstree-checkbox:hover { background-position:-20px -37px; }

#vakata-dragged.jstree-IKT ins { background:transparent !important; }
#vakata-dragged.jstree-IKT .jstree-ok { background:url("d.png") -2px -53px no-repeat !important; }
#vakata-dragged.jstree-IKT .jstree-invalid { background:url("<%=ResolveUrl("/Recursos/APLNET/jqt/css/imgArbol/d.png")%>") -18px -53px no-repeat !important; }
#jstree-marker.jstree-IKT { background:url("<%=ResolveUrl("/Recursos/APLNET/jqt/css/imgArbol/d.png")%>") -41px -57px no-repeat !important; text-indent:-100px; }

.jstree-IKT a.jstree-search { color:aqua; }
.jstree-IKT .jstree-locked a { color:silver; cursor:default; }

#vakata-contextmenu.jstree-IKT-context, 
#vakata-contextmenu.jstree-IKT-context li ul { background:#f0f0f0; border:1px solid #979797; -moz-box-shadow: 1px 1px 2px #999; -webkit-box-shadow: 1px 1px 2px #999; box-shadow: 1px 1px 2px #999; }
#vakata-contextmenu.jstree-IKT-context li { }
#vakata-contextmenu.jstree-IKT-context a { color:black; }
#vakata-contextmenu.jstree-IKT-context a:hover, 
#vakata-contextmenu.jstree-IKT-context .vakata-hover > a { padding:0 5px; background:#e8eff7; border:1px solid #aecff7; color:black; -moz-border-radius:2px; -webkit-border-radius:2px; border-radius:2px; }
#vakata-contextmenu.jstree-IKT-context li.jstree-contextmenu-disabled a, 
#vakata-contextmenu.jstree-IKT-context li.jstree-contextmenu-disabled a:hover { color:silver; background:transparent; border:0; padding:1px 4px; }
#vakata-contextmenu.jstree-IKT-context li.vakata-separator { background:white; border-top:1px solid #e0e0e0; margin:0; }
#vakata-contextmenu.jstree-IKT-context li ul { margin-left:-4px; }

/* IE6 BEGIN */
.jstree-IKT li, 
.jstree-IKT ins,
#vakata-dragged.jstree-IKT .jstree-invalid, 
#vakata-dragged.jstree-IKT .jstree-ok, 
/*#jstree-marker.jstree-IKT { _background-image:url("d.gif"); }*/
.jstree-IKT .jstree-open ins { background:url("<%=ResolveUrl("/Recursos/APLNET/jqt/css/imgArbol/nodabi.gif")%>") no-repeat;  }
.jstree-IKT .jstree-closed ins {background:url("<%=ResolveUrl("/Recursos/APLNET/jqt/css/imgArbol/nodcerr.gif")%>") no-repeat;  }
.jstree-IKT .jstree-leaf ins { background:none; }
.jstree-IKT a ins.jstree-icon { _background-position:-56px -19px; }
#vakata-contextmenu.jstree-IKT-context ins { _display:none; }
#vakata-contextmenu.jstree-IKT-context li { _zoom:1; }
.jstree-IKT .jstree-undetermined a .jstree-checkbox { _background-position:-20px -19px; }
.jstree-IKT .jstree-checked a .jstree-checkbox { _background-position:-38px -19px; }
.jstree-IKT .jstree-unchecked a .jstree-checkbox { _background-position:-2px -19px; }
/* IE6 END */

/* TREE V2 */
.jstree-IKT a ins.noIcon{
   background: none;
   width: 0px;
}

/* MENU */

.menu
{
    font-size: 1.1em;
     z-index:1003;
}

.menu *
{
    z-index:1003;
}

*html #nav ul {
    margin:0 0 0 -0.2em;
}

#nav
{
	margin:0px;
	padding:0px;
}

#nav ul {
    position:absolute; 
    left:0; 
    display:none; 
    margin:-0.1em 0 0 -0.1em; 
    padding:0; 
    list-style:none;
}
  
#nav li{
    float:left; 
    display:block; 
    min-width:10em; 
    position:relative;
    margin:0 0.1em;
    padding-left:0.5em;
}

#nav ul li {
    float:left; 
    text-align:left;
    border-top:1px solid <%=Me.CssManager().navULLIBoC()%>;
}

#menuTexto #nav ul li {
    border:none;
}

#nav li ul
{
	background-color: <%=Me.CssManager().navLIULBC()%>;
	border:1px solid <%=Me.CssManager().navLIULBoC()%>;
	border-top:1px solid <%=Me.CssManager().navLIULBC()%>;
}

#menuTexto #nav li ul {
    background-color:<%=Me.CssManager().masterHeaderBC()%>;
    border:none;
}


#nav li ul .menu-state-default a
{
	color: <%=Me.CssManager().menuStateDefaultC()%>;
}


.menu-button {
  display: inline-block;
  margin-right: 0.1em;
  overflow: visible;
  position: relative;
  text-decoration: none !important;
}

.menu-button a
{
	padding:0.5em;
	cursor: pointer;
}

.menu-state-default, .menu-widget-content .menu-state-default { 
    background: url("<%=ResolveUrl("/Recursos/APLNET/css/IKT/images/imgMenu/ui-bg_highlight-soft_75_363636_1x100.png")%>") repeat-x scroll 50% 50% #363636;
    border: 1px solid <%=Me.CssManager().menuStateDefaultBoC()%> ; 
    font-weight: normal; 
    color: <%=Me.CssManager().menuStateDefaultC()%>; 
    outline: none; 
 }
.menu-state-default a, .menu-state-default a:link, .menu-state-default a:visited {
    color: <%=Me.CssManager().menuStateDefaultC()%>; 
    text-decoration: none; 
    outline: none; 
}

#menuTexto .menu-state-default{
    background:none;
    border:none;
    font-weight: bold; 
    font-decoration: none;
    outline: none; 
}

#menuTexto #nav ul li ul .menu-state-default a{
 /* color: <%=Me.CssManager().menuStateHoverC()%>;  */
     color: <%=Me.CssManager().menuStateDefaultC()%>;
}

#menuTexto #nav ul li ul .menu-state-hover a, #menuTexto .menu-state-hover a:hover{
 /* color: <%=Me.CssManager().menuStateDefaultC()%>; */
    color: <%=Me.CssManager().menuStateHoverC()%>;
}

.menu-state-hover, .menu-widget-content .menu-state-hover, .menu-state-focus, .menu-widget-content .menu-state-focus { 
    border: 1px solid <%=Me.CssManager().menuStateHoverBoC()%>; 
    background: #dadada url("<%=ResolveUrl("/Recursos/APLNET/css/IKT/images/imgMenu/ui-bg_highlight-soft_50_dadada_1x100.png")%>") 50% 50% repeat-x; 
    font-weight: normal; 
    color: <%=Me.CssManager().menuStateHoverC()%>; 
    outline: none; 
}
.menu-state-hover a, .menu-state-hover a:hover { 
    color: <%=Me.CssManager().menuStateHoverC()%>; 
    text-decoration: none; 
    outline: none; 
}

.menu-state-active, .menu-widget-content .menu-state-active { 
    border: 1px solid <%=Me.CssManager().menuStateActiveBoC()%>; 
    background: #dadada url("<%=ResolveUrl("/Recursos/APLNET/css/IKT/images/imgMenu/ui-bg_highlight-soft_50_dadada_1x100.png")%>") 50% 50% repeat-x; 
    font-weight: normal; 
    color: <%=Me.CssManager().menuStateActiveC()%>; 
    outline: none; 
}

.menu-state-active a, .menu-state-active a:link, .menu-state-active a:visited { 
    color: <%=Me.CssManager().menuStateActiveC()%>; 
    outline: none; 
    text-decoration: none; 
}

/* nuevo */

#menuTexto .menu-state-active a, .menu-state-active a:link, .menu-state-active a:visited { 
    color: <%=Me.CssManager().menuStateDefaultC()%>; 
    outline: none; 
    text-decoration: none; 
}

#menuTexto .menu-state-active, .menu-widget-content .menu-state-active { 
    color: <%=Me.CssManager().menuStateDefaultC()%>; 
}
/* fin nuevo */

.menu-corner-all {
	-moz-border-radius: 0.4em;
	-webkit-border-radius: 0.4em;
	border-radius: 0.4em;
}

.menu-corner-top  
{
	-moz-border-radius-topleft: 0.4em/*{cornerRadius}*/;
	-webkit-border-top-left-radius: 0.4em/*{cornerRadius}*/; 
	-moz-border-radius-topright: 0.4em/*{cornerRadius}*/; 
	-webkit-border-top-right-radius: 0.4em/*{cornerRadius}*/; 
	border-bottom:none;
}

.menu-corner-bottom { 
    -moz-border-radius-bottomleft: 0.4em; 
    -webkit-border-bottom-left-radius: 0.4em; 
    -moz-border-radius-bottomright: 0.4em; 
    -webkit-border-bottom-right-radius: 0.4em; 
}

.menu-icon
{
	height:16px;
	width:16px;
	background-repeat: no-repeat;
	display: block;
	overflow: hidden;
	text-indent: -99999px;
	float:left;
}

#menuTexto .menu-icon{
    background-image:url("<%=ResolveUrl("/Recursos/APLNET/css/IKT/images/ui-icons_ffffff_256x240.png")%>");
}

.menu-icon-down
{
	background-image:url("<%=ResolveUrl("/Recursos/APLNET/css/IKT/images/ui-icons_000000_256x240.png")%>");
	background-position:-64px -16px;
}

.menu-icon-left
{
	background-image:url("<%=ResolveUrl("/Recursos/APLNET/css/IKT/images/ui-icons_ffffff_256x240.png")%>");
	background-position:-32px -16px;
}

/* MENU WIJMO

#navWijmo a{
    cursor:pointer;
}
#navWijmo>li>a
{
    padding:1em;
    font-weight:bold;
    color:White;
}

#navWijmo>li.ui-state-default>a .ui-icon
{
    background: url("/Recursos/APLNET/css/NASDAP/images/ui-icons_ffffff_256x240.png");
    background-position:-64px -16px;
}

#navWijmo>li.ui-state-default>a.ui-state-active .ui-icon
{
    background-image: url("/Recursos/APLNET/css/NASDAP/images/ui-icons_f9bd01_256x240.png");
    background-position:-64px -16px;
}


#navWijmo>li>a.ui-state-hover,
#navWijmo>li>a.ui-state-focus,
#navWijmo>li>a.ui-state-active
{
    background:none;
}

.header .ui-widget-header
{
    border:none;
    background:none;
}

#header .wijmo-wijmenu{
    padding:0px;
    height:100%;
    max-height:100%;
}
*/


/* ICONBUTTON - botones sin relieve*/
.ui-iconbutton {
    background: transparent;
    border: none;
}

/* botones de edicion, buscar, limpiar, aceptar, cancelar, goma de borrar */

.ui-widget-content .ui-icon.ui-icon-limpiar{
     background-image: url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/clean.png")%>"); 
}

.ui-widget-content .ui-iconbutton .ui-icon-eraser, .ui-icon.ui-icon-eraser
{ 
    background-image: url("<%=ResolveUrl("/Recursos/APLNET/css/" & MasterIKT.tipoappcssdes() & "/images/eraser.png")%>"); 
}