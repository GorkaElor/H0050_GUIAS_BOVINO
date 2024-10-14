$.widget( "ui.ikt_form", {
	version: "@1.0",
    getVersion: function(){
	    return this.version;
	},	
	datos_form : {},
	_defaults: {
		ventana:'',
		instanciar_controles: function () {return;},
		CamposExtras: function (obj){return obj;},
		valida_usuario: function (valRes) {return valRes;},
		modo:'M',
		Guardado: function(obj){return;},
		noGuardado: function(obj){return;}
	},	  	
	_settings: {},		
	_create: function() {
		$.blockUI.defaults.fadeOut=0;
        $.blockUI.defaults.fadeIn=0;		
		$.blockUI.defaults.baseZ= 1000;
		$.blockUI.defaults.overlayCSS.cursor = 'default';  
        $.blockUI.defaults.overlayCSS.opacity = 0.04;	
		$(".formularioEdicion").block({message:""});
		$(window).resize(function() {
			//AJUSTAR LA ANCHURA Y ALTURA DE LA CAPA DE BLOQUEO
			if($(".blockOverlay").css("display") != "none"){
				$(".blockOverlay").css("height",$(".formularioEdicion","#"+miVentana).innerHeight());
				$(".blockOverlay").css("width",$(".formularioEdicion","#"+miVentana).innerWidth());
			}
		});			
		this._settings = $.extend(this._defaults,this.options);
			
		this._loadLabels();
		this._loadData();
		this._setFieldsTabIndex();
		
		if (this._settings.modo == 'A') {
		    var miVentana =	this._settings.ventana.replace('.aspx','');
		    $('.formularioEdicion').unblock();  	
		    $("#botonera"+miVentana).toggle(false);
		}	
		else
		{
		    this._initButtons();
		}
	},

	_loadLabels: function() {
		var identificador = '';
		var miVentana = this._settings.ventana.replace('.aspx','')
		var miLiteral = '';
		//$("#"+miVentana+" label").each(function(){
		$("#"+miVentana).find(":not(div,form,ul,li,fieldset,table,thead,tbody,th,tr,td, col, colgroup, input:text, button, button>span)").each(function(){
			identificador=$(this).attr("id")!=null?$(this).attr("id"):"";
			try{
				identificador=identificador.split('_jqLit_')[1];
				miLiteral=$.Literales[identificador]==undefined?"":$.Literales[identificador];
				$(this).text(miLiteral);                     
			}catch(err){
				identificador='';
				//$(this).text(miLiteral);                     
			}/*finally{
				identificador='';
				$(this).text(miLiteral);                     
			}*/                
		});		
	},

	_loadData: function() {
		// Se comprueba si existe el objeto datos_form
		var self = this;
		this.datos_form = {};
		var miVentana = this._settings.ventana.replace('.aspx','')
		var miAjax = $.ikt_ajax_obj.inicializar();
		miAjax.pagina=this._settings.ventana+"/GetEdicion_"+miVentana;
		miAjax.async=false;
		// se incluye el hash
		var iktdialogparam;
		iktdialogparam = this._getCamposExtras;
		iktdialogparam = this._settings.CamposExtras(iktdialogparam);
		iktdialogparam.add('hash',viewHash);
		
		var instanciar_controles = this._settings.instanciar_controles;
		miAjax.parametros = {'data':{}}
		$.extend(true, miAjax.parametros.data,iktdialogparam.elementos);			
		miAjax.correcto=function (objeto){
			var data=JSON.parse(objeto.responseText).d;
			if (data!=null)	// Es nulo si desde el negocio se devuelve nothing
			{
				$("#"+miVentana).ikt_form("option", "datos_form", data.data);
				$("#"+miVentana).ikt_form("set_FData", data.data);
			}
			else
			{
			    $("#"+miVentana+"_loading").css("display", "none");
		        $("#"+miVentana).css("display", "block");
			}
			instanciar_controles(self.datos_form);
		};
		miAjax.error=function (objeto){
			$("#"+miVentana).ikt_form("option", "datos_form", objeto);
		};
		miAjax.enviar();
	},
	set_FData: function (data){
		var miVentana = this._settings.ventana.replace('.aspx','');
		var o=data;
			for(var k in o){
					var id="#"+k.toUpperCase();
					if($(id).length>0){
					    $(id).attr("value", o[k] != null ? o[k] : "")
					}else{
						if(id.indexOf(getSufijo())>0 && k.toUpperCase().indexOf(getSufijo())>0){
							id=id.replace(getSufijo(),"");
							if($(id).length>0)$(id).attr("value",o[k]!=null?o[k]:"");
						}
					}
			}	
		$("#"+miVentana+"_loading").css("display", "none");
		$("#"+miVentana).css("display", "block");
	},
	get_FData: function (obj)
	{
		// Se carga el modo de ejecución "Alta/Modificación" y el hash
		var campos=""
		var nombre="";
		var valor="";
		var miVentana = this._settings.ventana.replace('.aspx','');
		$("#FRM"+miVentana+" :input").each(function(){
			nombre=$(this).attr("name")!=null?$(this).attr("name"):"";
			if($(this).attr("type") == "checkbox"){
				 valor=$(this).valor()!=null && $(this).is(":checked")?true:false;
			}
			else{
				valor=$(this).valor()!=null?$(this).valor():"";
			}
			if(nombre!=""){
				obj[nombre]=valor;
				}
		});
		return obj;                      
	},	
	recargarForm: function(formName){
		//recargar datos de formulario
		var miVentana =	this._settings.ventana.replace('.aspx','');
		$("#"+miVentana+"_loading").css("display", "block");
		$("#"+miVentana).css("display", "none");		
		$("#" + formName)[0].reset();
		// En caso de tener alertas o errores en el formulario se establecen de nuevo
		$("#"+formName+" input").each(function(){
			if($(this).hasClass("ui-state-error") && !$(this).hasClass("text_gris"))
				{$(this).attr('class','text_blanco');}		
		});
		this._loadData();
    },	
	_getCamposExtras: {
		elementos:{},
		add: function (id, valor)
		{
		  this.elementos[id]=valor;
		}
	},
	_getCamposExtrasSave:  {
		elementos:{},
		add: function (id, valor)
		{
		  this.elementos[id]=valor;
		}
	},
	_bloquearFormulario: function () {
		var miVentana =	this._settings.ventana.replace('.aspx','');
        $(".formularioEdicion").block({message:""});
        $(".tabSelector").unblock();  
        $(".leftcontent").unblock();  
        $(".header").unblock();  
        $(".footer").unblock();
        //AJUSTAR DIMENSIONES DE CAPA DE BLOQUEO POR OVERFLOW DEL FORMULARIO
        $(".blockOverlay").css("height",$(".formularioEdicion","#"+miVentana).innerHeight());
        $(".blockOverlay").css("width",$(".formularioEdicion","#"+miVentana).innerWidth());	
	},
	_desbloquearFormulario: function () {
		$(".tabSelector").block({ message: null });  
		$(".leftcontent").block({ message: null });  
		$(".header").block({ message: null });  
		$(".footer").block({ message: null });
		$('.formularioEdicion').unblock();  	
	},
	_initButtons: function(){
		var miVentana =	this._settings.ventana.replace('.aspx','');
		var miFormulario = this;
		$(".btnEditar","#botonera"+miVentana).button().bind('click', function(){
			miFormulario._desbloquearFormulario();
			$(".btnAceptar, .btnCancelar, .btnEditar, .btnLibre","#botonera"+miVentana).toggle();
        });
		$(".btnAceptar","#botonera"+miVentana).toggle(false).button().bind('click', function(){
			var valRes = {"errores": [], "alertas": [] };
			valRes = Validacion(valRes,miVentana);
			//validaciones personalizadas por usuario
			valRes = miFormulario._settings.valida_usuario(valRes);
			if (valRes.errores.length <= 0) 
			{        
				var miAjax = $.ikt_ajax_obj.inicializar();
				miAjax.pagina=miVentana+".aspx/Save_"+miVentana;
				miAjax.async=false;
				// se incluye el hash establecido en el getEdición

				var iktdialogparam;
				iktdialogparam = miFormulario._getCamposExtras;
				iktdialogparam = miFormulario._settings.CamposExtras(iktdialogparam);
				iktdialogparam.add('hash',viewHash);
				iktdialogparam.add('modo',miFormulario._settings.modo);
				
				
				// Se añaden los parámetros extras
				var iktdialogparamsave;
				iktdialogparamsave = miFormulario._getCamposExtrasSave;
				iktdialogparamsave = miFormulario._settings.CamposExtrasSave(iktdialogparamsave);
				
				$.extend(true, iktdialogparam, iktdialogparamsave);
				
				miAjax.parametros = {'data':{}}
				$.extend(true, miAjax.parametros.data,iktdialogparam.elementos);
				
				/*Se recupera los datos del formulario*/
				var miData = miFormulario.get_FData(miAjax.parametros.data);
				
		
				miAjax.correcto=function (objeto){
					var data=JSON.parse(objeto.responseText).d;
					if (data.errores == null && data.alertas == null) {
							// Se llama a la función libre
							$(".btnAceptar, .btnCancelar, .btnEditar, .btnLibre","#botonera"+miVentana).toggle();
							miFormulario._bloquearFormulario();						
							miFormulario._settings.Guardado(data.data);
					} else {
						valRes.errores = data.errores != null ? data.errores : valRes.errores;
						valRes.alertas = data.alertas != null ? data.alertas : valRes.alertas;
						jAlert(creaDivErrores(valRes),$.Literales['50066']);						
						miFormulario._settings.noGuardado(data.data);
					}				
				};
				miAjax.error=function (objeto){
					valRes.errores.push(objeto.responseText);
					jAlert(creaDivErrores(valRes),$.Literales['50067']);
				};
				miAjax.enviar();		
			 }
			 else
			 {
				jAlert(creaDivErrores(valRes),$.Literales['50066']);
			 }
        });
		$(".btnCancelar","#botonera"+miVentana).toggle(false).button().bind('click', function(){
			miFormulario.recargarForm("FRM"+miVentana);
			miFormulario._bloquearFormulario();
			$(".btnAceptar, .btnCancelar, .btnEditar, .btnLibre","#botonera"+miVentana).toggle();
        });
    },
    _setFieldsTabIndex: function(){
        $(':input[type=text]:visible, :input[type=submit]:visible, :input[type=reset]:visible, :radio:visible, :checkbox:visible, select:visible, textarea:visible').each(function(index,element) {
            $(element).attr("tabindex", index+1);
        });
    }
});
$.extend({
      ikt_formulario:  
      {
		inicializar: function ()
		{
			return {
				ventana:'',
				instanciar_controles:function () {return;},
				CamposExtras: function (obj) {return obj;},
				CamposExtrasSave: function (obj) {return obj;},
				modo:'M',
				Guardado:function (obj) {return;},
				noGuardado:function (obj) {return;},
				valida_usuario: function(valRes){
					return valRes;
				},
				mostrar: function ()
				{
					$("#"+this.ventana).ikt_form({
						ventana:this.ventana+'.aspx',
						instanciar_controles: this.instanciar_controles,
						CamposExtras: this.CamposExtras,
						CamposExtrasSave: this.CamposExtrasSave,
						modo: this.modo,
						Guardado: this.Guardado,
						noGuardado: this.noGuardado,
						valida_usuario: this.valida_usuario
					});                  
				}
			};
		}
      }
});