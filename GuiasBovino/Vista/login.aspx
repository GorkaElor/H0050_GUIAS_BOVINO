<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="login.aspx.vb" Inherits="WEB.login" %>

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
  <link rel="stylesheet" href="css/estilos_login.css?<%=Session("version") %>">
</head>
   
  
<body>

    <%
    Dim invisibleEspera=""
    Dim invisibleLogin=""
    if Session("strIDSesion")<>"" then 
         invisibleEspera=""
         invisibleLogin="hidden='hidden'"
    else
         invisibleEspera="hidden='hidden'"
         invisibleLogin=""
    End if
    %>
    
    <div id="espera" <%=invisibleEspera%> style="z-index:9999"><img src="img/loading.gif" alt="" /></div>
    <div class="login-page" <%=invisibleLogin%>>
        <h1><img src="img/logo_nekagip.png" alt="Nekagip"> </h1>
      <div class="form">
        <p><%= Me.LiteralesPage("53701") %></p>
        <p id="message" class="login_error" runat="server"></p>
        <form class="login-form"  action="" method="post">

        <!-- ***** variables para recoger los parametros que nos envía GIPUZKOATARIA Request.UserHostAddress-->
        <input id="strIPAdd" hidden="hidden" value="<%=Request.ServerVariables("REMOTE_ADDR")%>"/>
        <input id="strIDSesion"  hidden="hidden" value="<%=Session("strIDSesion")%>"/>
        <input id="idPortal" hidden="hidden" value="<%=Session("idPortal")%>"/>
        <input id="IDIOMA" hidden="hidden" value="<%=Session("IDIOMA")%>"/>
        <!-- ***** FIN variables para recoger los parametros que nos envía GIPUZKOATARIA -->
     
        <input type="text" value="" placeholder="<%= Me.LiteralesPage("53702") %>" id="username"/>
        <input type="password" value="" placeholder="<%= Me.LiteralesPage("53703") %>" id="password"/>
          <button type="button" id="submit"><%= Me.LiteralesPage("53704") %></button>
          <ul id="login_language">
            <li><a id="languageEU" href="#" class="<%= languageSelector("eu") %>">EU</a></li>
            <li><a id="languageES" href="#" class="<%= languageSelector("es") %>">ES</a></li>
          </ul>
        </form>
      </div>
    </div>  

  <!-- jQuery 2.2.3 -->
  <script src="JS_CSS/jquery-2.2.3.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/jQueryUI/jquery-ui.min.js?<%=Session("version") %>"></script>

    <script src="../recursos/AdminLTEv2/bootstrap/js/bootstrap.min.js?<%=Session("version") %>"></script>
    <script src="JS_CSS/raphael-min.js"></script>
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
    <script src="../recursos/AdminLTEv2/dist/js/app.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datepicker/locales/bootstrap-datepicker.eu.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datepicker/locales/bootstrap-datepicker.es.js?<%=Session("version") %>"></script>
    <script src="JS_CSS/jquery.validate.min.js?<%=Session("version") %>"></script>
    <script src="JS_CSS/additional-methods.min.js?<%=Session("version") %>"></script>
    <script src="../recursos/AdminLTEv2/plugins/datatables/dataTables.bootstrap.min.js?<%=Session("version") %>"></script>
    <script src="JS_CSS/typeahead.bundle.js?<%=Session("version") %>"></script>
    <!-- Funcionalidad propia del proyecto -->
    <!-- CSS -->

    <!-- JS -->        
    
    <script src="JS_CSS/Common.js?<%=Session("version") %>"></script>
    <script>
        var selectedLanguage = '<%= NEKAGIP.SessionNekagip.SelectedLanguage %>';        
        var literalesPage = JSON.parse('<%= New System.Web.Script.Serialization.JavaScriptSerializer().Serialize(Me.LiteralesPage()) %>');
        //var selectedLanguageDataTableDateType;
        //var datatableLanguageUrl;
        InitializeCommon();
    </script>    
    
    <script src="JS_CSS/login/login.js?<%=Session("version") %>"></script>
</body>

</html>
