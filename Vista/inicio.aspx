﻿<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="inicio.aspx.vb" Inherits="WEB.inicio" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Nekagip | <%= Me.Literales("50017") %></title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/bootstrap/css/bootstrap.min.css?<%=Session("version") %>">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="css/font-awesome.min.css?<%=Session("version") %>">
    <!-- Theme style -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/dist/css/AdminLTE.min.css?<%=Session("version") %>">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/dist/css/skins/_all-skins.min.css?<%=Session("version") %>">
    <!-- iCheck -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/plugins/iCheck/flat/blue.css?<%=Session("version") %>">
    <!-- Morris chart -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/plugins/morris/morris.css?<%=Session("version") %>">
    <!-- jvectormap -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/plugins/jvectormap/jquery-jvectormap-1.2.2.css?<%=Session("version") %>">
    <!-- Date Picker -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/plugins/datepicker/datepicker3.css?<%=Session("version") %>">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="JS_CSS/daterangepicker.css?<%=Session("version") %>">
    <!-- bootstrap wysihtml5 - text editor -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css?<%=Session("version") %>">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

    <link rel="stylesheet" href="css/fonts.css?<%=Session("version") %>">
    <link rel="stylesheet" href="css/estilos.css?<%=Session("version") %>">
    <link rel="stylesheet" href="css/estilos_privada.css?<%=Session("version") %>">
</head>

<body class="hold-transition sidebar-mini <%= sideBarStatusCollapsed() %>">

    
    <%Dim isPropia As Boolean = Not NEKAGIP.SessionNekagip.ExplotacionSeleccionada Is Nothing AndAlso NEKAGIP.SessionNekagip.ExplotacionSeleccionada.propia = "true"%>
    <%Dim isTieneAnimales As Boolean = Not NEKAGIP.SessionNekagip.ExplotacionSeleccionada Is Nothing AndAlso NEKAGIP.SessionNekagip.ExplotacionSeleccionada.tieneAnimales = "true"%>
    <div class="wrapper">
        <!-- <aside id="general">-->
        <!-- HEADER -->
        <header class="main-header">
            <!-- Logo -->
            <a href="inicio.aspx" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini">
                    <img src="img/logo_nekagip_mini_priv.png" alt="Nekagip">
                </span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg">
                    <img src="img/logo_nekagip.png" alt="Nekagip">
                </span>
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top">
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">Toggle navigation</span>
                </a>

                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav menu_general">
                        <li style="display:none"><a onclick="closeSession()" href="login.aspx"><span class="fa fa-close"></span><%= Me.Literales("50020") %><span class="text_xtend"> <%= Me.Literales("50027") %></span></a></li>
                    </ul>
                    <ul class="nav navbar-nav idiomas">
                        <li><a id="languageEU" href="#" class="<%= languageSelector("eu") %>">EU</a></li>
                        <li><a id="languageES" href="#" class="<%= languageSelector("es") %>">ES</a></li>
                    </ul>

                </div>
            </nav>
        </header>
        <div class="cabecera_privada row">
            <div class="area_privada col-md-4">
                <i class="fa fa-lock"></i>
                <h2 class="hpriv"><%= Me.Literales("50017") %></h2>
                <h2 class="htit"><%= Me.Literales("50026") %></h2>
            </div>
            <div class="col-md-8">
                <div class="cambiar">
                    <button onclick="location.href = 'cambio.aspx';"><%= Me.Literales("50019") %></button>
                </div>
                <div id="ficha" class="ficha">
                    <%= 
                        explotationData() 
                    %>
                </div>
            </div>

        </div>
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                <div class="user-panel">
                    <div id="divBadge" class="notification-badge fase2"><%=Session("Notificaciones") %></div>
                    <div class="pull-left image">
                        <img src="img/user_nekagip.png" alt="User Image">
                    </div>
                    <div class=" info">
                        <p id="sidebar_nombre_usuario"><%= nameData() %></p>
                        <%--<a href="#"><i class="fa fa-circle text-success fase2_online"></i>Online</a>
                        <a href="notificaciones.aspx" class="userinfo-notif fase2_notificaciones"><%= Session("Notificaciones") %>  nuevas notificaciones</a>--%>
                    </div>
                </div>
                <!-- sidebar menu: : style can be found in sidebar.less -->
               <ul class="sidebar-menu">
        <li class="menu_inicio active">
        <a href="inicio.aspx">
            <i class="fa fa-home active"></i> <span><%= Me.Literales("50001") %></span>
        </a>
        </li>

       <%--Gestión de crotales--%>
         <%
             Dim noVisibleGestioCrotales = ""
             If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("GES_CROTALES") = True or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP")))  Then
                 noVisibleGestioCrotales = "style='display:none'"
               
             End If

             'control para la presentacion de los submenus 
             'si la explotacion es matadero no debe presentarse
             If Not NEKAGIP.SessionNekagip.ExplotacionSeleccionada Is Nothing Then
                 If NEKAGIP.SessionNekagip.ExplotacionSeleccionada.matadero = "true" Then
                     noVisibleGestioCrotales = "style='display:none'"
                 End If
             End If
          %>
         <li class="treeview fase2" <%=noVisibleGestioCrotales%>>
              <a href="#">
                 <i class="fa fa-tags"></i>
                 <span><%= Me.Literales("50036") %></span>
                 <span class="pull-right-container">
                 <i class="fa fa-angle-left pull-right"></i>
                 </span>
              </a>
              <ul class="treeview-menu">
                    <%      
                     Dim noVisibleCrotalesDisponibles = ""
                     Dim noVisibleSolicitudCrotales = ""
                     Dim noVisibleRelacionSolicitudes = ""
                     Dim noVisibleRelacionSeries = ""
                     If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("CRO_DISPONIBLES") or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                         noVisibleCrotalesDisponibles = "style='display:none'"
                     End If
                     If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("SOLICITUD_CRO") or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                         noVisibleSolicitudCrotales = "style='display:none'"
                     End If
                     
                     If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("RELACION_CRO") or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                         noVisibleRelacionSolicitudes = "style='display:none'"
                    End If
                     If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("REL_ASIG_SERIES") or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                         noVisibleRelacionSeries = "style='display:none'"
                     End If
                     If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("REL_ASIG_SERIES") or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                         noVisibleRelacionSeries = "style='display:none'"
                     End If
                 %>
                 <li <%=noVisibleCrotalesDisponibles%>><a href="crotales_disponibles.aspx"><i class="fa fa-circle-o"></i><%= Me.Literales("50029") %></a></li>
                 <li <%=noVisibleSolicitudCrotales%>><a href="solicitud_crotales.aspx"><i class="fa fa-circle-o"></i><%= Me.Literales("50030") %></a></li>
                 <li <%=noVisibleRelacionSolicitudes%>><a href="relacion_de_solicitudes.aspx"><i class="fa fa-circle-o"></i><%= Me.Literales("50031") %></a></li>
                 <li <%=noVisibleRelacionSeries%>><a href="relacion_de_series.aspx"><i class="fa fa-circle-o"></i><%= Me.Literales("53799") %></a></li>
                 
             </ul>
         </li>
                         
          <%--Alta y baja de animales--%>
         <%
             Dim noVisibleSubMenuAltaBaja = ""
             Dim noVisibleNotificarNacimiento = ""
             Dim noVisibleNotificarMuerte = ""
             Dim noVisibleListadoNacimientos = ""
             Dim noVisibleListadoMuertes = ""
             Dim noVisibleConfirmarGuias = ""
             If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRAB_MONTES")) And (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("ALT_BAJ_ANIMALES") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                 noVisibleSubMenuAltaBaja = "style='display:none'"


             End If

             'control para la presentacion de los submenus 
             'si la explotacion es matadero no debe presentarse
             If Not NEKAGIP.SessionNekagip.ExplotacionSeleccionada Is Nothing Then
                 If NEKAGIP.SessionNekagip.ExplotacionSeleccionada.matadero = "true" Then


                     noVisibleNotificarNacimiento = "style='display:none'"
                     noVisibleNotificarMuerte = "style='display:none'"
                     noVisibleListadoNacimientos = "style='display:none'"
                     noVisibleListadoMuertes = "style='display:none'"
                 End If
             End If
          %>     
         <li class="treeview fase2" <%=noVisibleSubMenuAltaBaja%>>
            <a href="#">
              <i class="fa fa-sort"></i>
              <span><%= Me.Literales("50037") %></span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
                  <% 
                      If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("NOT_NACIMIENTO")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then

                          noVisibleNotificarNacimiento = "style='display:none'"
                      End If
                      If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("NOT_MUERTE")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                          noVisibleNotificarMuerte = "style='display:none'"
                      else
                          'no se permite notificar muerte mientras estemos sin comunicar a SITRAN    
                          If (Now>cdate(System.Configuration.ConfigurationManager.AppSettings("fechainiSINCOMUNICACION"))) and (Now<cdate(System.Configuration.ConfigurationManager.AppSettings("fechafinSINCOMUNICACION"))) Then
                              noVisibleNotificarMuerte = "style='display:none'"
                          End If
                      End If
                      If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("LIST_NACIMIENTO")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                          noVisibleListadoNacimientos = "style='display:none'"
                      End If
                      If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("LIST_MUERTE")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                          noVisibleListadoMuertes = "style='display:none'"
                      End If
                      If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRAB_MONTES")) And (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("CONFIRM_GUIA") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                          noVisibleConfirmarGuias = "style='display:none'"
                      End If
                 %>
              <li><a href="notificar_nacimiento.aspx" <%=noVisibleNotificarNacimiento%>><i class="fa fa-circle-o"></i><%= Me.Literales("50032") %></a></li>
              <li><a href="notificar_muerte.aspx" <%=noVisibleNotificarMuerte%>><i class="fa fa-circle-o"></i><%= Me.Literales("50033") %></a></li>
              <li><a href="listado_de_nacimientos.aspx" <%=noVisibleListadoNacimientos%>><i class="fa fa-circle-o"></i><%= Me.Literales("50034") %></a></li>
              <li><a href="listado_muertes.aspx" <%=noVisibleListadoMuertes%>><i class="fa fa-circle-o"></i><%= Me.Literales("50035") %></a></li>
              <li><a href="confirma_guia_entrada.aspx" <%=noVisibleConfirmarGuias%>><i class="fa fa-circle-o"></i><%= Me.Literales("50041") %></a></li>
            </ul>
          </li>

                      
          <%--Saneamientos de animales--%>
         <%
             Dim noVisibleSubMenuSaneamientos = ""
             Dim noVisibleListadoSaneamientos = ""
             If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRAB_MONTES")) And (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("SANEAMIENTOS") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                 noVisibleSubMenuSaneamientos = "style='display:none'"
             End If
             'control para la presentacion de los submenus 
             'si la explotacion es matadero no debe presentarse
             If Not NEKAGIP.SessionNekagip.ExplotacionSeleccionada Is Nothing Then
                 If Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("SANEAMIENTOS") Then
                     noVisibleListadoSaneamientos = "style='display:none'"
                 End If
             End If

          %>
            <li class="treeview fase2" <%=noVisibleListadoSaneamientos%>>
            <a href="#">
              <i class="fa fa-eyedropper"></i>
              <span><%= Me.Literales("53847") %></span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
                 <% 
                      If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("LIST_SANEAMIENTOS") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                          noVisibleListadoSaneamientos = "style='display:none'"
                      End If
                 %>
              <li><a href="listado_saneamientos.aspx" <%=noVisibleListadoSaneamientos%>><i class="fa fa-circle-o"></i><%= Me.Literales("53843") %></a></li>
                         </ul>
          </li>
           
           <%--Alta guia--%>
          <%
              Dim noVisibleAltaGuia = ""
              If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("ALTA_GUIA")) And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                  If (Not isTieneAnimales) Then
                      noVisibleAltaGuia = "style='display:none'"
                  End If
              End If
              'control para la presentacion del menu Alta Guia
              'si la explotacion es matadero no debe presentarse
              If Not NEKAGIP.SessionNekagip.ExplotacionSeleccionada Is Nothing Then
                  If NEKAGIP.SessionNekagip.ExplotacionSeleccionada.matadero = "true" Then
                      noVisibleAltaGuia = "style='display:none'"
                  End If
              End If

          %>     
        <li class="menu_alta1 menu_alta2 menu_alta3 menu_alta_fin" <%=noVisibleAltaGuia%>  >
        <a href="alta1.aspx">
            <i class="fa fa-edit"></i> <span><%= Me.Literales("50002") %></span>
        </a>
        </li>
     

      <%--busqueda crotal--%>
       <%           Dim noVisibleBusquedaCrotal= ""
           If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("BUSQUEDA_CROTAL")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
               noVisibleBusquedaCrotal = "style='display:none'"
           End If
       %>        <li <%=noVisibleBusquedaCrotal%>>        <a href="busqueda_crotal.aspx">            <i class="fa fa-search" ></i> <span><%= Me.Literales("53786") %></span>        </a>        </li>		
<%--Consulta datos --%>
         <%

             Dim noVisibleConsultaDatos = ""
             Dim noVisibleCenso = ""
             Dim noVisibleAltasEntreFechas = ""
             Dim noVisibleBajasEntreFechas = ""
             Dim noVisibleCensoAUnaFecha = ""
             Dim noVisibleGuiasRealizadas = ""
             Dim noVisibleLibroRegistro = ""
             Dim noVisibleSeguimiento = ""


             If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRAB_MONTES")) And (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("CONSULTA_DAT") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                 noVisibleConsultaDatos = "style='display:none'"
             End If
             If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRAB_MONTES")) And (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("CENSO_ACTUAL") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                 noVisibleCenso = "style='display:none'"
             End If
             If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("ALTAS_FECHAS")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                 noVisibleAltasEntreFechas = "style='display:none'"
             End If
             If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("BAJAS_FECHAS")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                 noVisibleBajasEntreFechas = "style='display:none'"
             End If
             If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("CENSO_FECHAS")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                 noVisibleCensoAUnaFecha = "style='display:none'"
             End If
             If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRAB_MONTES")) And (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("GUIAS") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                 noVisibleGuiasRealizadas = "style='display:none'"
             End If
             If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("LIBRO_REG")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                 noVisibleLibroRegistro = "style='display:none'"
             End If
             If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("SEGUIMIENTO_SAN_VAC") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                 noVisibleSeguimiento = "style='display:none'"
             End If

             'control para la presentacion de los submenus 
             'si la explotacion es matadero no debe presentarse
             If Not NEKAGIP.SessionNekagip.ExplotacionSeleccionada Is Nothing Then
                 If NEKAGIP.SessionNekagip.ExplotacionSeleccionada.matadero = "true" Then
                     noVisibleCenso = "style='display:none'"
                     noVisibleBajasEntreFechas = "style='display:none'"
                     noVisibleCensoAUnaFecha = "style='display:none'"
                     noVisibleGuiasRealizadas = "style='display:none'"
                     noVisibleLibroRegistro = "style='display:none'"
                     noVisibleSeguimiento = "style='display:none'"
                 End If
             End If
          %>   
        <li class="treeview menu_censo menu_consulta menu_censo_fecha menu_registro" <%=noVisibleConsultaDatos%>>
        <a href="#">
            <i class="fa fa-calendar-check-o"></i>
            <span><%= Me.Literales("50003") %>
            <i class="fa fa-angle-left pull-right"></i>
        </span>
        </a>
        <ul class="treeview-menu">
            <li class="menu_censo"><a href="censo.aspx" <%=noVisibleCenso%>><i class="fa fa-circle-o"></i><%= Me.Literales("50008") %></a></li>
            <li class="menu_censo fase2"><a href="altas_entre_fechas.aspx" <%=noVisibleAltasEntreFechas%> ><i class="fa fa-circle-o"></i><%= Me.Literales("50038") %></a></li>
            <li class="menu_censo fase2"><a href="bajas_entre_fechas.aspx" <%=noVisibleBajasEntreFechas%>><i class="fa fa-circle-o"></i><%= Me.Literales("50039") %></a></li>
            <li class="menu_censo_fecha"><a href="censo_fecha.aspx" <%=noVisibleCensoAUnaFecha%>><i class="fa fa-circle-o"></i><%= Me.Literales("50010") %></a></li>
            <li class="menu_consulta"><a href="consulta.aspx" <%=noVisibleGuiasRealizadas%>><i class="fa fa-circle-o"></i><%= Me.Literales("50009") %></a></li>
            <li class="menu_registro"><a href="registro.aspx" <%=noVisibleLibroRegistro%>><i class="fa fa-circle-o"></i><%= Me.Literales("50011") %></a></li>
            <li class="menu_seguimiento"><a href="seguimiento_san_vac.aspx" <%=noVisibleSeguimiento%>><i class="fa fa-circle-o"></i><%= Me.Literales("53853") %></a></li>
          
        </ul>
        </li>
                   <%--Consulta datos de explotacion --%>
        <%

            Dim noVisibleDatosExplotacion = ""
            Dim noVisibleDatos = ""
            Dim noVisibleTitulares = ""
            Dim noVisibleAsociaciones = ""
            Dim noVisibleCalificacion = ""
            Dim noVisibleMontesAutorizados=""

            If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("EXPLOTACION") or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                noVisibleDatosExplotacion = "style='display:none'"
            End If
            If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("EXP_DATOS")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                noVisibleDatos = "style='display:none'"
            End If
            If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("EXP_TITULARES")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                noVisibleTitulares = "style='display:none'"
            End If
            If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("EXP_ASOCIACIONES")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                noVisibleAsociaciones = "style='display:none'"
            End If
            If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("EXP_CALIFICA")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                noVisibleCalificacion = "style='display:none'"
            End If

            If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("EXP_MONTES")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                noVisibleMontesAutorizados = "style='display:none'"
            End If





          %> 
        <li class="treeview menu_explotacion menu_titulares menu_asociaciones menu_calificacion" <%=noVisibleDatosExplotacion%>>
        <a href="#">
            <i class="fa fa-laptop"></i>
            <span><%= Me.Literales("50004") %>
            <i class="fa fa-angle-left pull-right"></i>
        </span>
        </a>
        <ul class="treeview-menu">
            <li class="menu_explotacion"><a href="explotacion.aspx" <%=noVisibleDatos%>><i class="fa fa-circle-o"></i><%= Me.Literales("50012") %></a></li>
            <li class="menu_titulares"><a href="titulares.aspx" <%=noVisibleTitulares%>><i class="fa fa-circle-o"></i><%= Me.Literales("50013") %></a></li>
            <li class="menu_asociaciones"><a href="asociaciones.aspx" <%=noVisibleAsociaciones%>><i class="fa fa-circle-o"></i><%= Me.Literales("50014") %></a></li>
            <li class="menu_calificacion"><a href="calificacion.aspx" <%=noVisibleCalificacion%>><i class="fa fa-circle-o"></i><%= Me.Literales("50015") %></a></li>
            <li class="menu_montesautorizados"><a href="montesautorizados.aspx" <%=noVisibleMontesAutorizados%>><i class="fa fa-circle-o"></i><%= Me.Literales("53831") %></a></li>
   
        </ul>
        </li>
         <%--HISTORIAL--%>
         <%

             Dim noVisibleTramites = ""
             If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("HISTORIAL")  or  NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto="true") AND (not (isPropia and NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                 noVisibleTramites = "style='display:none'"
             End If
        %>
        <li class="menu_tramites" <%=noVisibleTramites%>>
        <a href="tramites.aspx">
            <i class="fa fa-list"></i> <span><%= Me.Literales("50005") %></span>
        </a>
        </li>
       <%--CONFICURACION--%>
       <%
           Dim noVisibleConfiguracion = ""
           Dim noVisibleCambio = ""
           If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("CONFIGURACION")) Then
               noVisibleConfiguracion = "style='display:none'"
           End If
           If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("CAMBIO_EXPLO")) Then
               noVisibleCambio = "style='display:none'"
           End If
       %>
        <li class="treeview menu_cambio " <%=noVisibleConfiguracion%>>
        <a href="#">
            <i class="fa fa-cog"></i> <span><%= Me.Literales("50006") %>
            <i class="fa fa-angle-left pull-right"></i>
        </span>
        </a>
        <ul class="treeview-menu">
            <li class="menu_cambio " <%=noVisibleCambio%>><a href="cambio.aspx"><i class="fa fa-circle-o"></i><%= Me.Literales("50016") %></a></li>
        </ul>
        </li>
         <%--AYUDA Y CONTACTO--%>
       <%
           Dim noVisibleContacto = ""
           If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("AYUDA_CONTACTO")) Then
               noVisibleContacto = "style='display:none'"
           End If
       %>
        <li <%=noVisibleContacto%>>
        <a href="contacto.aspx">
            <i class="fa fa-question-circle"></i> <span><%= Me.Literales("50007") %></span>
        </a>
        </li>

    </ul>
            </section>
            <!-- /.sidebar -->
        </aside>

        <!-- SIDEBAR -->
        <!--  </aside> -->

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1 id="nomre_usuario" runat="server"></h1>
            </section>

            <!-- Main content -->
            <section class="content">


                <!-- Main content -->
                <section class="invoice">
                    <!-- title row -->
                    <div class="row">
                           
                         <div class="col-xs-12" id="caparestriccionessalida" runat ="server" >
                          <h5 class="page-header" style="color: #FF0000; font-weight: bold;">  <i class="fa fa-bell-o"></i><span id="restriccionesSalida" runat="server"></span><small id="Small3" runat="server" class="pull-right ult_acc"></small></h5>
                        </div> 
                        </div>
                    <div class="row">
                        <% 

                            Dim noVisibleMensajeParonSITRAN = ""
                            Dim mensaje=""
                            Dim fechaini=cdate(System.Configuration.ConfigurationManager.AppSettings("fechainiSINCOMUNICACION"))
                            Dim fechafin=cdate(System.Configuration.ConfigurationManager.AppSettings("fechafinSINCOMUNICACION"))

                            if System.Web.HttpContext.Current.Session("SelectedLanguage") ="es" then
                                mensaje="     Por motivos de mantenimiento, no se podrán notificar muertes, anular, confirmar y rechazar guías, ni efectuar guías a fuera de Gipuzkoa desde "& fechaini &" hasta "& fechafin &". Perdonen las molestias."
                            else
                                mensaje="      Mantentze-arrazoiengatik, "& fechaini &" eta "& fechafin &" artean ezin izango dira heriotzak jakinarazi, gidak baliogabetu, baieztatu eta ukatu, ezta Gipuzkoa kanpora doazen gidak berriak egin. Barka itzazue eragozpenak."
                            end if

                            If (Now>fechafin) Then
                                noVisibleMensajeParonSITRAN = "style='display:none'"
                            End If
                        %>
                           <% 
                               Dim mensajeinfo = ""
                               Dim noVisibleMensaje = ""
                               Dim mensaje_c = System.Configuration.ConfigurationManager.AppSettings("mensaje_c")
                               Dim mensaje_eu = System.Configuration.ConfigurationManager.AppSettings("mensaje_e")
                               Dim fechainimensaje = CDate(System.Configuration.ConfigurationManager.AppSettings("fechainiMENSAJE"))
                               Dim fechafinmensaje = CDate(System.Configuration.ConfigurationManager.AppSettings("fechafinMENSAJE"))

                               If System.Web.HttpContext.Current.Session("SelectedLanguage") = "es" Then
                                   mensajeinfo = "     " & mensaje_c
                               Else
                                   mensajeinfo = "      " & mensaje_eu
                               End If

                               If (Now > fechafinmensaje) Then
                                   noVisibleMensaje = "style='display:none'"
                               End If
                        %>
                    
                        <div class="col-xs-12" id ="Mensaje" <%=noVisibleMensaje%>>
                          <h5 class="page-header" style="color: #FF0000; font-weight: bold;">  <i class="fa fa-bell-o"></i><span id="Span2" runat="server"></span><%=mensajeinfo%><small id="Small2" runat="server" class="pull-right ult_acc"></small></h5>
                        </div>
                        
                        <div class="col-xs-12" id ="MensajeParonSITRAN" <%=noVisibleMensajeParonSITRAN%>>
                          <h5 class="page-header" style="color: #FF0000; font-weight: bold;">  <i class="fa fa-bell-o"></i><span id="Span1" runat="server"></span><%=mensaje%><small id="Small1" runat="server" class="pull-right ult_acc"></small></h5>
                        </div>   
                       
                        <div class="col-xs-12">
                            <h2 class="page-header"><i class="fa fa-globe"></i><span id="encabezado" runat="server"></span><small id="ultimo_acceso" runat="server" class="pull-right ult_acc"></small></h2>
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- info row -->
                    <div class="row invoice-info">
                        <div class="col-sm-6 col-md-6 col-lg-4 invoice-col">
                            
                                                
                           
                             <%= Me.LiteralesPage("50204") %>
                            <address id="datos_explotacion" runat="server">
                            </address>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-6 col-md-6 col-lg-4  invoice-col" id="capatitular" runat="server">
                            <%= Me.LiteralesPage("50205") %>:
              <address id="datos_titular">
              </address>
                        </div>
                        <span id="permiso_autocrot" runat="server"  runat="server">
                            <%--<a href="solicitud_permiso.aspx" class="anuncio">
                                <div class="col-md-4 anuncio-autocrotalacion">
                                    <h3>Solicitud de permiso de autocrotalación</h3>
                                    <p>Clique aqui para solicitar el permiso de autocrotalación</p>
                                </div>
                            </a>--%>
                        </span>
                      <div id="Permiso_R1" class="col-md-4 text-right" > <!-- H0033 -->        
                            <br />
                            <button name="boton_BVD" id="boton_BVD" onclick="generarInforme()" style="margin-right: 12px;"><%= Me.LiteralesPage("53875") %> </button>
                             <button name="boton_NEOESPORAS" id="boton_NEOESPORAS" onclick="generarInformeNeoEsporas()" style="margin-right: 12px;"><%= Me.LiteralesPage("53876") %> </button>
                      </div>
                    </div>                      
                    <!-- /.row -->
                      
</div>                     
                    <div class="row home-notificaciones fase2" id="capanotificaciones"  runat="server">

                        <div class="col-md-8 notif-info">
                            <b> <%= Me.LiteralesPage("50210") %>:</b>
                            <i class="fa fa-envelope"></i>
                            <a href="notificaciones.aspx"><span runat="server" id="numNotificaciones">
                                                          </span> <%= Me.LiteralesPage("50211") %></a>
                            <span class="notif-totales">
                                <span runat="server" id="numNotificacionesTotales"></span> <%= Me.LiteralesPage("50212") %></span>

                        </div>
                        <div class="col-md-4 text-right">
                            <a href="notificaciones.aspx">
                                <button><i class="fa fa-envelope"></i><%= Me.LiteralesPage("50213") %></button></a>
                        </div>

                    </div>
                       <div class="row home-notificaciones fase2" id="capadocumentacion"  runat="server">

                        <div class="col-md-8 notif-info">
                            <b> <%= Me.LiteralesPage("53864") %>:</b>
                            <i class="fa fa-envelope"></i>
                            <a href="documentaciones.aspx"><span runat="server" id="numDocumentaciones">
                                                          </span> <%= Me.LiteralesPage("53863") %></a>
                            <span class="notif-totales">
                                <span runat="server" id="numDocumentacionesTotales"></span> <%= Me.LiteralesPage("50212") %></span>

                        </div>
                        <div class="col-md-4 text-right">
                            <a href="documentaciones.aspx">
                                <button><i class="fa fa-envelope"></i><%= Me.LiteralesPage("53862") %></button></a>
                        </div>

                    </div>

                    <!-- Table row -->
                    <div class="row" id="capatramites" runat="server">
                        <div class="col-xs-12 table-responsive">
                            <p class="lead"><%= Me.LiteralesPage("50206") %>:</p>
                            <div class="table-responsive">
                                <table id="tramHistTable" class="table table-striped">
                                </table>
                            </div>
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->

                </section>



            </section>
            <!-- /.content -->
            
          

        </div>
        <!-- /.content-wrapper -->
        <!-- /.content-wrapper -->
        <footer class="main-footer">
            <%= Me.Literales("50021") %> -<%= Me.LiteralesPage("53706")%> - <%= Me.LiteralesPage("53707")%>
      <ul>
          <li><a href="#"><%= Me.Literales("50022") %></a></li>
          <%--<li><a href="#"><%= Me.Literales("50023") %></a></li>
          <li><a href="#"><%= Me.Literales("50024") %></a></li>
          <li><a href="#"><%= Me.Literales("50025") %></a></li>--%>
      </ul>
        </footer>
    </div>
    <!-- ./wrapper -->

    <!-- jQuery 2.2.3 -->
    <script src="JS_CSS/jquery-2.2.3.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/jQueryUI/jquery-ui.min.js?<%=Session("version") %>"></script>

    <script src="../recursos/AdminLTEv2/bootstrap/js/bootstrap.min.js?<%=Session("version") %>"></script>
    <script src="JS_CSS/raphael-min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/morris/morris.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datatables/jquery.dataTables.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datatables/dataTables.bootstrap.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/sparkline/jquery.sparkline.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/jvectormap/jquery-jvectormap-world-mill-en.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/knob/jquery.knob.js?<%=Session("version") %>"></script>
    <script src="JS_CSS/moment.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/daterangepicker/daterangepicker.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datepicker/bootstrap-datepicker.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/slimScroll/jquery.slimscroll.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/fastclick/fastclick.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/dist/js/app.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datepicker/locales/bootstrap-datepicker.eu.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datepicker/locales/bootstrap-datepicker.es.js?<%=Session("version") %>"></script>
    <script src="JS_CSS/jquery.validate.min.js?<%=Session("version") %>"></script>
    <script src="JS_CSS/additional-methods.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datatables/dataTables.bootstrap.min.js?<%=Session("version") %>"></script>
    <script src="JS_CSS/typeahead.bundle.js?<%=Session("version") %>"></script>
    <!-- Funcionalidad propia del proyecto -->
    <!-- CSS -->

    <!-- DataTables -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/plugins/datatables/dataTables.bootstrap.css?<%=Session("version") %>">

    <!-- JS -->
    <script src="JS_CSS/Common.js?<%=Session("version") %>"></script>
    <script>
        var selectedLanguage = '<%= NEKAGIP.SessionNekagip.SelectedLanguage %>';
         var pasto = '<%= NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto %>';
        var literalesPage = JSON.parse('<%= New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(Me.LiteralesPage()) %>');
        var datos_tit = JSON.parse('<%= New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(NEKAGIP.SessionNekagip.ExplotacionSeleccionada.ConsultaTitularPrincipal()) %>');
        //var selectedLanguageDataTableDateType;
        //var datatableLanguageUrl;
        InitializeCommon();
    </script>

    <script src="JS_CSS/inicio/inicio.js?<%=Session("version") %>"></script>
</body>

</html>
