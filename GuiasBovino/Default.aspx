<%@ Page Language="VB" AutoEventWireup="false" CodeBehind="Default.aspx.vb" Inherits="WEB.Default" %>
<!-- <%@ Import Namespace="IKT.RecAplNet.VistaWeb" %> -->
<!-- <%@ Import  Namespace="IKT.NegocioAyudas_II.Entidades" %> -->
<!-- <%@ Import  Namespace="IKT.RecAplNet.General" %> -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" class="img-fondo">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
     <head>

	 
       <% 
           Dim RutaImg As String
        %>

        <meta charset="UTF-8">
        <title id="titulo" name="titulo"></title>
        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
        <!-- Bootstrap 3.3.4 -->
        <link href="<%=ResolveUrl("/Recursos/AdminLTEv2/bootstrap/css/bootstrap.min.css")%>" rel="stylesheet" type="text/css" />
        <!-- Font Awesome Icons -->
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <!-- Ionicons -->
        <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
        <!-- Theme style -->
        <link href="<%=ResolveUrl("/Recursos/AdminLTEv2/dist/css/AdminLTE.css")%>" rel="stylesheet" type="text/css" />
       
        
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="<%="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"%>"></script>
          <script src="<%="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"%>"></script>
        <![endif]-->

        <script language="javascript" type="text/javascript" >

            var ser = '<%=Request.ServerVariables("PATH_INFO")%>';
            if (window.location.href.indexOf(ser) == -1 || window.location.href.indexOf("/Vista") != -1) {
                alert('El tiempo de sesión ha expirado, debe hacer login de nuevo');
                window.location = ser; 
            }
        </script>

    
    </head>
        <%
            Dim sClassColor As String
            'if trim(Me.nomApp_C) <> "" then
            sClassColor = "bg-yellow"
            'Else
            '    sClassColor = "bg-gray"
            'End If
        %>
    
    <!--  Formulario de entrada con usuario y contraseña -->
    <body class="bg-gray">    
        <div class="login-box" id="login-box">
                  
     <div class="login-box-body">
            <div class="form-group has-feedback" style="text-align: right;">
                           <a href="default.aspx?len=2" id="aeus">Euskara</a>                 
                            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                            <a href="default.aspx?len=1" id="aes">Castellano</a>
                            <input type="hidden" id="idiomalen" name="idiomalen" value="<%=Me.idioma %>" />
           </div>
              
            <h3 id="verayuda">Tramitación de ayudas</h3>
            <form id="login" name="login" runat="server">
                 <input type="hidden" id="idioma" name="idioma" value="es" /> 
                <div class="form-group has-feedback">
                    <input type="text" name="txtUsuario" id="txtUsuario" class="form-control" placeholder="Usuario" value=""  />
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" name="txtPassword" id="txtPassword" class="form-control" placeholder="Contraseña" value="" />
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="form-group">
                    <asp:Button ID="btnAcceder" runat="server" UseSubmitBehavior="true" Text="Acceder"
                    class="btn bg-blue btn-block" data-loading-text="Cargando..."/>
                </div>
                <div class="alert-warning" role="alert" id="err-box">
                          <span class="sr-only">Error:</span><asp:Label ID="lblValidacion" runat="server"></asp:Label>
                </div>  
            </form>    
        </div>

    </div>
    
        <!-- jQuery 2.1.4 -->
        <script type="text/javascript" src="<%=ResolveUrl("/Recursos/AdminLTEv2/plugins/jQuery/jQuery-2.1.4.min.js")%>"></script>
        <!-- varios ikt -->
        <script src="<%=ResolveUrl("/Recursos/APLNET/js/JsonXml.js")%>" type="text/javascript"></script>
        <script src="<%=ResolveUrl("/Recursos/APLNET/js/json2.js")%>" type="text/javascript"></script>
        <script src="<%=ResolveUrl("/Recursos/APLNET/js/jquery.ikt.ajax.js")%>" type="text/javascript"></script>
        <!--<script src="<%=ResolveUrl("/Recursos/APLNET/js/jquery.ikt.func.js")%>" type="text/javascript"></script>-->
        <script src="<%=ResolveUrl("/Recursos/APLNET/js/ikt_Validaciones.js")%>" type="text/javascript"></script>

        <script src="<%="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"%>" type="text/javascript"></script>
        <!-- Bootstrap 3.3.2 JS -->
        <script src="<%=ResolveUrl("/Recursos/AdminLTEv2/bootstrap/js/bootstrap.min.js")%>" type="text/javascript"></script>
        <!-- datepicker -->
        <script src="<%=ResolveUrl("/Recursos/AdminLTEv2/plugins/datepicker/bootstrap-datepicker.js")%>" type="text/javascript"></script>
        <script src="<%=ResolveUrl("/Recursos/AdminLTEv2/plugins/datepicker/locales/bootstrap-datepicker.es.js")%>" type="text/javascript" charset="UTF-8"></script>
        <script src="<%=ResolveUrl("/Recursos/AdminLTEv2/plugins/datepicker/locales/bootstrap-datepicker.eu.js")%>" type="text/javascript" charset="UTF-8"></script>


	    <script src="<%=ResolveUrl("/Recursos/AdminLTEv2/plugins/jquery-validation-1.13.1/dist/jquery.validate.js")%>" type="text/javascript"></script>
        <script src="<%=ResolveUrl("/Recursos/AdminLTEv2/plugins/jquery-validation-1.13.1/dist/additional-methods.js")%>" type="text/javascript"></script>
 

        <script type="text/javascript">

         var url_recursos_lte = '<%=ResolveUrl("/Recursos/AdminLTEv2/")%>'

        $(document).ready(function () {
            $("#aes").css("color", "#5C9CCC");
            $("#aes").css("font-weight", "normal");
            $("#lower a").not("#aes").css("color", "#0883e0");
            $("#lower a").not("#aes").css("font-weight", "bolder");
            $.urlParam = function (name) {

                var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
                if (results != null)
                    return results[1] || 0;
                else
                    return results;
            };
            
            //Parametro idioma
            if ($.urlParam('len') != null) {
                if ($.urlParam('len') == 1) {
                    var idioma = "es";
                }
                else {
                    var idioma = "eus";
                }
            }
            else {
                var idioma = "es";
            }
       

            //$("#lengua").val(idioma);
            $("#a" + idioma).css("color", "#5C9CCC");
            $("#a" + idioma).css("font-weight", "normal");
            
            switch (idioma) {
                
                case "es":
                    $("#titulo").text("XXX | LOGIN");
                    $("#idioma").val("es");
                    $("#idiomalen").val("es");
                    $("#txtUsuario").attr("placeholder","Usuario");
                    $("#txtPassword").attr("placeholder", "Contraseña");
                    $("#verayuda").text("XXX");
                    $("#btnAcceder").val("Entrar");
                    $("#link_ayudas").text("XXX"); 
                    $("#direccion1").text("");
                    $("#check_remember").find("span").text("Recuérdame");
                    
                    if ($("#lblValidacion").text() != "") {                       
                        $("#lblValidacion").text("Usuario - Contraseña no válidos");

                    }
                    $("#aeus").css("color", "#0883e0");
                    $("#aeus").css("font-weight", "bolder");
                    break;
                case "eus":
                    $("#titulo").text("XXX | LOGIN-a");
                    $("#idioma").val("eus");
                    $("#idiomalen").val("eus");
                    $("#txtUsuario").attr("placeholder","Erabiltzailea");
                    $("#txtPassword").attr("placeholder", "Pasahitza");
                    $("#verayuda").text("XXX");
                    $("#btnAcceder").val("Sartu");
                    $("#link_ayudas").text("XXX");
                    $("#direccion1").text("");
                    
                    $("#check_remember").find("span").text("Gogoratu");
                    if ($("#lblValidacion").text() != "") {
                        $("#lblValidacion").text("Erabiltzaile - Pasahitza okerra");
                    }
                    $("#aes").css("color", "#0883e0");
                    $("#aes").css("font-weight", "bolder");
                    break;
            }
        
        });
      
   </script>    
    
          <!-- Empieza el Footer -->
          <div class="main-footer">
            <center></center>            
          </div>

        
    </body> 

 </html>



    


   

 
