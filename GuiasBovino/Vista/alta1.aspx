<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="alta1.aspx.vb" Inherits="WEB.alta1" %>

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
    <!-- jvectormap -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/plugins/jvectormap/jquery-jvectormap-1.2.2.css?<%=Session("version") %>">
    <!-- Date Picker -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/plugins/datepicker/datepicker3.css?<%=Session("version") %>">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="JS_CSS/daterangepicker.css?<%=Session("version") %>">
    <!-- DataTables -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/plugins/datatables/dataTables.bootstrap.css?<%=Session("version") %>">
    <!-- bootstrap wysihtml5 - text editor -->
    <link rel="stylesheet" href="../recursos/AdminLTEv2/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css?<%=Session("version") %>">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js?<%=Session("version") %>"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js?<%=Session("version") %>"></script>
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
                        <li style="display: none"><a onclick="closeSession()" href="login.aspx"><span class="fa fa-close"></span><%= Me.Literales("50020") %><span class="text_xtend"> <%= Me.Literales("50027") %></span></a></li>
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
                    <%= explotationData() %>
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
                    <li class="menu_inicio">
                        <a href="inicio.aspx">
                            <i class="fa fa-home"></i><span><%= Me.Literales("50001") %></span>
                        </a>
                    </li>

                    <%--Gestión de crotales--%>
                    <%
                        Dim noVisibleGestioCrotales = ""
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("GES_CROTALES") = True Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
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
                                If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("CRO_DISPONIBLES") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                                    noVisibleCrotalesDisponibles = "style='display:none'"
                                End If
                                If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("SOLICITUD_CRO") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                                    noVisibleSolicitudCrotales = "style='display:none'"
                                End If

                                If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("RELACION_CRO") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                                    noVisibleRelacionSolicitudes = "style='display:none'"
                                End If
                                If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("REL_ASIG_SERIES") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
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
                                If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("NOT_NACIMIENTO") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then

                                    noVisibleNotificarNacimiento = "style='display:none'"
                                End If
                                If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("NOT_MUERTE") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                                    noVisibleNotificarMuerte = "style='display:none'"
                                End If
                                If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("LIST_NACIMIENTO") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                                    noVisibleListadoNacimientos = "style='display:none'"
                                End If
                                If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("LIST_MUERTE") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
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
                    <li class="menu_alta1 menu_alta2 menu_alta3 menu_alta_fin active" <%=noVisibleAltaGuia%>>
                        <a href="alta1.aspx">
                            <i class="fa fa-edit active"></i><span><%= Me.Literales("50002") %></span>
                        </a>
                    </li>


                    <%--busqueda crotal--%>
                    <%           Dim noVisibleBusquedaCrotal = ""
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("BUSQUEDA_CROTAL") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                            noVisibleBusquedaCrotal = "style='display:none'"
                        End If
                    %>
                    <li <%=noVisibleBusquedaCrotal%>><a href="busqueda_crotal.aspx"><i class="fa fa-search"></i><span><%= Me.Literales("53786") %></span>        </a></li>
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
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("ALTAS_FECHAS") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                            noVisibleAltasEntreFechas = "style='display:none'"
                        End If
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("BAJAS_FECHAS") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                            noVisibleBajasEntreFechas = "style='display:none'"
                        End If
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("CENSO_FECHAS") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                            noVisibleCensoAUnaFecha = "style='display:none'"
                        End If
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRAB_MONTES")) And (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("GUIAS") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                            noVisibleGuiasRealizadas = "style='display:none'"
                        End If
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("LIBRO_REG") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
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
                            <li class="menu_censo fase2"><a href="altas_entre_fechas.aspx" <%=noVisibleAltasEntreFechas%>><i class="fa fa-circle-o"></i><%= Me.Literales("50038") %></a></li>
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
                        Dim noVisibleMontesAutorizados = ""

                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("EXPLOTACION") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                            noVisibleDatosExplotacion = "style='display:none'"
                        End If
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("EXP_DATOS") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                            noVisibleDatos = "style='display:none'"
                        End If
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("EXP_TITULARES") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                            noVisibleTitulares = "style='display:none'"
                        End If
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("EXP_ASOCIACIONES") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                            noVisibleAsociaciones = "style='display:none'"
                        End If
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("EXP_CALIFICA") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                            noVisibleCalificacion = "style='display:none'"
                        End If
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("EXP_MONTES") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
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
                        If (Not NEKAGIP.SessionNekagip.PermisosData.lista.Contains("HISTORIAL") Or NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto = "true") And (Not (isPropia And NEKAGIP.SessionNekagip.PermisosData.lista.Contains("TRA_EXP_PROP"))) Then
                            noVisibleTramites = "style='display:none'"
                        End If
                    %>
                    <li class="menu_tramites" <%=noVisibleTramites%>>
                        <a href="tramites.aspx">
                            <i class="fa fa-list"></i><span><%= Me.Literales("50005") %></span>
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
                            <i class="fa fa-cog"></i><span><%= Me.Literales("50006") %>
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
                            <i class="fa fa-question-circle"></i><span><%= Me.Literales("50007") %></span>
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
                <h1><%= Me.LiteralesPage("50301") %></h1>
                <p><%= Me.LiteralesPage("50302") %></p>

            </section>

            <!-- Main content -->
            <section class="content alta">
                <div class="row">
                    <ul class="pasos">
                        <li class="activo"><%= Me.LiteralesPage("50303") %> 1<span class="pasos_total">/3</span> <span><%= Me.LiteralesPage("50304") %></span></li>
                        <li><%= Me.LiteralesPage("50303") %> 2 <span><%= Me.LiteralesPage("50305") %></span></li>
                        <li><%= Me.LiteralesPage("50303") %> 3 <span><%= Me.LiteralesPage("50306") %></span></li>
                    </ul>
                </div>
                <div class="row">

                    <form action="" class="form-inline" id="alta1Form">
                        <div class="invoice">
                            <div class="row">
                                <ul id="messageBox"></ul>
                            </div>

                            <div class="caja_formu" id="cajaExplotacionInicial" runat="server">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="exp_inicial"><%= Me.LiteralesPage("53821") %>:</label>
                                            <input type="text" class="form-control" id="exp_inicial" placeholder="" value="" runat="server">
                                            <input type="text" id="nombreinicial" runat="server" readonly>
                                        </div>

                                        <button runat="server" id="buscarExplotacionInicial" class="pull-right"><i class="fa fa-list"></i><%= Me.LiteralesPage("50308") %></button>
                                        <button runat="server" id="limpiarBuscarExplotacionInicial" class="pull-right"><i class="fa fa-eraser"></i><%= Me.LiteralesPage("50338") %></button>
                                    </div>

                                </div>
                                <div id="busqueda_avanzada_inicial">
                                    <!--  <div class="col-md-6">
                    <div class="form-group" >
                      <label for="nombreinicialb"><%= Me.LiteralesPage("50309") %>:</label>
                      <input type="text" class="form-control" id="nombreinicialb" runat="server">
                    </div>
                    <div class="form-group">
                      <label for="provinciainicialb"><%= Me.LiteralesPage("50311") %>:</label>
                      <input type="text" class="form-control" id="provinciainicialb">
                    </div>
                  </div>-->
                                    <%--<div class="col-md-6">
                     <div class="form-group">
                      <label for="municipioinicialb"><%= Me.LiteralesPage("50310") %>:</label>
                      <input type="text" class="form-control" id="municipioinicialb" disabled>
                    </div>
                  </div>--%>
                                    <div class="table-responsive ancho_100pc">
                                        <table id="tabla-explotacionInicial" class="table table-bordered table-striped">
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <%--    <div class="row separa_formu" id="cajaExplotacionInicial2" runat="server">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="nombreinicial"><%= Me.LiteralesPage("50309") %>:</label>
                   
                  </div>


<%--                  <div class="form-group">
                    <label for="municipioinicial"><%= Me.LiteralesPage("50310") %>:</label>
                    <input type="text" id="municipioinicial" runat="server" readonly>
                  </div>


                  <div class="form-group">
                    <label for="provincia"><%= Me.LiteralesPage("50311") %>:</label>
                    <input type="text" id="provinciainicial" runat="server" readonly>
                  </div>

                
                </div>
                 
              </div>
                            --%>



                            <div class="caja_formu" id="cajaExplotacionDestino" runat="server">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="exp_destino"><%= Me.LiteralesPage("50307") %>:</label>
                                            <input type="text" class="form-control" id="exp_destino" placeholder="" value="" runat="server">
                                            <input type="text" placeholder="Matadero" class="form-control" id="exp_destino_matadero" value="" runat="server">
                                        </div>

                                        <button id="buscarExplotacion" class="pull-right"><i class="fa fa-list"></i><%= Me.LiteralesPage("50308") %></button>
                                        <button id="limpiarBuscarExplotacion" class="pull-right"><i class="fa fa-eraser"></i><%= Me.LiteralesPage("50338") %></button>
                                    </div>

                                </div>
                                <% 
                                    Dim noVisibleBusqueda = ""
                                    If (NEKAGIP.SessionNekagip.PermisosData.lista.Contains("GUIAMONTEAALAVA")) Then
                                        noVisibleBusqueda = "style='display:none'"
                                    End If

                                %>
                                <div id="busqueda_avanzada" <%=noVisibleBusqueda%>>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="nombreb"><%= Me.LiteralesPage("50309") %>:</label>
                                            <input type="text" class="form-control" id="nombreb" runat="server">
                                        </div>
                                        <div class="form-group">
                                            <label for="provinciab"><%= Me.LiteralesPage("50311") %>:</label>
                                            <input type="text" class="form-control" id="provinciab">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group" id="capamatadero" runat="server">
                                            <input type="checkbox" class="" id="matadero">
                                            <label for="matadero"><%= Me.LiteralesPage("50319") %>:</label>

                                        </div>
                                        <div class="form-group">
                                            <label for="municipiob"><%= Me.LiteralesPage("50310") %>:</label>
                                            <input type="text" class="form-control" id="municipiob" disabled>
                                        </div>
                                    </div>
                                    <div class="table-responsive ancho_100pc">
                                        <table id="tabla-explotacion" class="table table-bordered table-striped">
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <% 
                                Dim noVisibleBusqueda = ""
                                If (NEKAGIP.SessionNekagip.PermisosData.lista.Contains("GUIAMONTEAALAVA")) Then
                                    noVisibleBusqueda = "style='display:none'"
                                End If

                            %>
                            <div id="resultadobusqueda" class="row separa_formu" <%=noVisibleBusqueda%>>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="nombre"><%= Me.LiteralesPage("50309") %>:</label>
                                        <input type="text" id="nombre" runat="server" readonly>
                                    </div>


                                    <div class="form-group">
                                        <label for="municipio"><%= Me.LiteralesPage("50310") %>:</label>
                                        <input type="text" id="municipio" runat="server" readonly>
                                    </div>


                                    <div class="form-group">
                                        <label for="provincia"><%= Me.LiteralesPage("50311") %>:</label>
                                        <input type="text" id="provincia" runat="server" readonly>
                                    </div>


                                </div>

                            </div>
                            <div class="row separa_formu">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label><%= Me.LiteralesPage("50313") %>:</label>
                                        <div class="input-group date" id="datePickerFechaSalida">
                                            <div class="input-group-addon">
                                                <i class="fa fa-calendar"></i>
                                            </div>
                                            <input type="text" class="form-control pull-right" id="fecha_salida" value="" runat="server">
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label><%= Me.LiteralesPage("50314") %>:</label>

                                        <div class="input-group date" id="datePickerFechaLlegada">
                                            <div class="input-group-addon">
                                                <i class="fa fa-calendar"></i>
                                            </div>
                                            <input type="text" class="form-control pull-right" id="fecha_llegada" value="" runat="server">
                                        </div>

                                    </div>
                                </div>

                                <!-- Tarea H0007-4 Cambios hora de llegada y hora de salida -->

                                <div class="row separa_formu">
                                    <div class="col-md-6">
                                        <div class="form-group">

                                            <label><%= Me.LiteralesPage("53871") %></label>
                                            <div class="input-group date" id="datePickerHoraSalida">

                                                <input type="text" maxlength="5" required="required" class="form-control pull-right" id="hora_salida" placeholder="hh:mm" runat="server">
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label><%= Me.LiteralesPage("53872") %></label>

                                            <div class="input-group date" id="datePickerHorallegada">

                                                <input type="text" maxlength="5" required="required" class="form-control pull-right" id="hora_llegada" placeholder="hh:mm" runat="server">
                                            </div>

                                        </div>
                                    </div>

                                </div>


                                <div class="row separa_formu">
                                    <div class="col-md-6">
                                        <div class="form-group" id="capacomprador">
                                            <label for="comprador"><%= Me.LiteralesPage("53719") %>:</label>
                                            <input type="text" class="form-control" id="comprador" placeholder="" runat="server">
                                        </div>
                                    </div>
                                </div>
                                <fieldset>
                                    <legend><%= Me.LiteralesPage("50315") %></legend>
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="form-group" id="capatransporte" runat="server">
                                                <input type="radio" name="tipotransporte" id="tipotransporte1" value="1" runat="server"><label for="tipotransporte1"><%= " Vehiculo" %>:</label>
                                                <input type="radio" name="tipotransporte" id="tipotransporte2" value="2" cheked runat="server"><label for="tipotransporte2"><%= " A pie" %>:</label>


                                            </div>
                                        </div>



                                        <div class="caja_formu" id="transporte" runat="server">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="dni_trans"><%= Me.LiteralesPage("50316") %>:</label>
                                                        <input type="text" class="form-control" id="dni_trans" placeholder="" value="" runat="server">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="nombre_trans"><%= Me.LiteralesPage("50309") %>:</label>
                                                        <input type="text" class="form-control" id="nombre_trans" placeholder="" runat="server">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="matricula"><%= Me.LiteralesPage("50317") %>:</label>
                                                        <input type="text" class="form-control" id="matricula" placeholder="" value="" runat="server">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="ates"><%= Me.LiteralesPage("50318") %>:</label>
                                                        <input type="text" class="form-control" id="ates" placeholder="" value="" runat="server" disabled>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" id="buscarTransportista" class="pull-right margen20Inf"><i class="fa fa-list"></i><%= Me.LiteralesPage("50308") %></button>
                                            <button id="limpiarBuscarTransportista" class="pull-right"><i class="fa fa-eraser"></i><%= Me.LiteralesPage("50338") %></button>
                                            <div id="busqueda_avanzada2">
                                                <div class="table-responsive ancho_100pc">
                                                    <table id="tabla-transporte" class="table table-bordered table-striped">
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                </fieldset>

                            </div>
                            <div class="botonera">
                                <button type="submit" id="btnSiguientePaso" class="pull-right"><%= Me.LiteralesPage("50323") %></button>
                            </div>
                    </form>
                </div>

            </section>
            <!-- /.content -->
        </div>
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
    <script src="JS_CSS/datetime-moment.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/daterangepicker/daterangepicker.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datepicker/bootstrap-datepicker.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/slimScroll/jquery.slimscroll.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/fastclick/fastclick.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/dist/js/app.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datepicker/locales/bootstrap-datepicker.eu.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datepicker/locales/bootstrap-datepicker.es.js?<%=Session("version") %>"></script>
    <script src="JS_CSS/jquery.validate.min.js?<%=Session("version") %>"></script>
    <script src="JS_CSS/additional-methods.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datatables/dataTables.bootstrap.min.js?<%=Session("version") %>"></script>
    <script src="JS_CSS/typeahead.bundle.js?<%=Session("version") %>"></script>
    <!-- page script -->
    <!-- Funcionalidad propia del proyecto -->
    <!-- CSS -->

    <!-- JS -->
    <script src="JS_CSS/Common.js?<%=Session("version") %>"></script>
    <script>
        var selectedLanguage = '<%= NEKAGIP.SessionNekagip.SelectedLanguage %>';
        var pasto = '<%=NEKAGIP.SessionNekagip.ExplotacionSeleccionada.pasto%>';

        <%
        If NEKAGIP.SessionNekagip.GuideData Is Nothing Then%>
        var transporteseleccionado ='<%="0"%>';
        <%  Else%>
        var transporteseleccionado ='<%=NEKAGIP.SessionNekagip.GuideData.tipotransporte%>';
        <%end if%>

        var montesautorizados = JSON.parse('<%= New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(NEKAGIP.SessionNekagip.ExplotacionSeleccionada.ConsultaMontesAutorizados()) %>');
        var permisoBajadaAlava ='<%=NEKAGIP.SessionNekagip.PermisosData.lista.Contains("GUIAMONTEAALAVA")%>';
        var literalesPage = JSON.parse('<%= New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(Me.LiteralesPage()) %>');
        var selectedLanguageDataTableDateType;
        var selectedLanguageMomentDateType;
        InitializeCommon();
    </script>

    <script src="JS_CSS/alta1/alta1.js?<%=Session("version") %>"></script>
</body>

</html>
