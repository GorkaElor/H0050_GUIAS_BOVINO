(function( $ ){
  $.fn.ikt_dialog = function(options) {
    var ikt_buttons = {};
	if (options.tipo==0)
	{
		ikt_buttons[$.Literales['50015']] = function(event) {
			var valRes = {"errores": [], "alertas": [] };
			valRes = Validacion(valRes,'FRM'+options.ventana);
			//validaciones personalizadas por usuario
			valRes = $.ikt_dialogo_conf.valida_usuario(valRes);
			$(event.target).removeClass("ui-state-focus");
			if (valRes.errores.length <= 0) 
			{        
				var miAjax = $.ikt_ajax_obj.inicializar();
				miAjax.pagina=options.ventana+".aspx/Save_"+options.ventana;
				miAjax.async=false;
				// se incluye el hash establecido en el getEdición
				var iktdialogparam;
				
				iktdialogparam = $.ikt_dialogo_conf.getCamposExtras.inicializar();
				iktdialogparam = $.ikt_dialogo_conf.CamposExtras(iktdialogparam);
				iktdialogparam.add('hash',viewHash);
				iktdialogparam.add('modo',$.ikt_dialogo_conf.opciones.modo);
				
				// Se añaden los parámetros extras
				var iktdialogparamsave;
				iktdialogparamsave = $.ikt_dialogo_conf.getCamposExtrasSave.inicializar();
				iktdialogparamsave = $.ikt_dialogo_conf.CamposExtrasSave(iktdialogparamsave);
				
				$.extend(true, iktdialogparam, iktdialogparamsave);
				//iktdialogparam.elementos = $.ikt_dialogo_conf.extender_matriz(iktdialogparam.elementos,iktdialogparamsave.elementos);
				
				miAjax.parametros = {'data':{}}
				$.extend(true, miAjax.parametros.data,iktdialogparam.elementos);
				
				/*Se recupera los datos del formulario*/
				var miData = $.ikt_dialogo_conf.get_FData(miAjax.parametros.data);
				
				/*$.each(iktdialogparam.elementos, function() {
					miAjax.parametros.data[this.id] = this.valor
				});*/
				miAjax.correcto=function (objeto){
					vdata = JSON.parse(objeto.responseText).d;
					if (vdata.errores == null && vdata.alertas == null) {
							// Se llama a la función libre
							$.ikt_dialogo_conf.Guardado(vdata);                        
							$("#edicion").dialog('close');
					} else {
						valRes.errores = vdata.errores != null ? vdata.errores : valRes.errores;
						valRes.alertas = vdata.alertas != null ? vdata.alertas : valRes.alertas;
						jAlert(creaDivErrores(valRes),$.Literales['50066']);
						$.ikt_dialogo_conf.noGuardado(vdata);
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
			
		}      
		ikt_buttons[$.Literales['50016']] = function(event) {
			$(this).dialog('close');
		}		
	}
	
    var settings = {
        autoOpen: false,
        modal: true,
        overlay: 0,
        buttons:ikt_buttons,
        height:options.alto_def,
        width:options.ancho_def,
        resizable:true,
		closeOnEscape: false,
        title: options.titulo_def,
        open: function(event, ui){
        },
        close: function() {
        } 
    };
    // Se realiza un merge de los valores por defecto y los que llegan
    if ( options ) { 
        $.extend( settings, options );
    }
    // En principio ventana se le mente desde la definición del objeto,
    // por lo tanto llega ya en options
    $("#edicion").dialog("destroy");
    $("#edicion").dialog(settings);
	// Se carga la información del load
	$("#edicion").load(options.ventana+".aspx", 
		{ prand: parURLAle(), par : options.ventanaPar },
		function(response, status, xhr) 
		{
		}
	);	
  };
})( jQuery );

$.extend({
      ikt_dialogo_conf:  
      {
        mostrar_ventana: function ()
        {
            this.centrar_ventana();
			$("#edicion").keypress(function(e) {
				if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
					$(".ui-dialog:visible").find('.ui-dialog-buttonpane').find('button').eq(1).click();
					return false;
				}
			});   			
			$("#edicion").dialog('open');		
			
			if (this.opciones.tipo == 0)
			{
				// Aquí se reemplazan los literales de la ventana de forma automática
				this.cargar_literales();
				// Aquí se buscan los datos con una nueva llamada ajax
				this.cargar_datos();
				// Se instancian los controles
				this.instanciar_controles();
			}
			else
			{
				this.cargar_contenido();
				$("#Contenido"+$.ikt_dialogo_conf.opciones.ventana+"_loading").css("display", "none");
				$("#Contenido"+$.ikt_dialogo_conf.opciones.ventana).css("display", "block");  				
			}
			
			//$('#edicion').closest('.ui-dialog').css("display", "block");
        },
		abrir: function ()
		{
		    $('#edicion').ikt_dialog({'ventana' : this.opciones.ventana, 'ventanaPar' : this.opciones.ventanaPar, 'tipo':this.opciones.tipo,'alto_def':this.opciones.alto_def, 'ancho_def':this.opciones.ancho_def, 'titulo_def':this.opciones.titulo_def});
		},
		cerrar: function ()
		{
			$("#edicion").dialog('close');
		},
        centrar_ventana: function ()
        {
            // estableciendo ventana modal en el centro
            $("#edicion").dialog('option', 'position', [(($(window).height() - $('#edicion').height() ) / 2)+'px', (($(window).width() - $('#edicion').width() ) / 2)+'px']);
        },
        opciones:
        {
            botones:
                {
				    elementos: {},
				    add:function (id, valor)
                    {
						this.elementos = $("#edicion").dialog( "option", "buttons" );
					    this.elementos[id] = valor;
						this.botones_establecer();
                    },
					del:function (id)
					{
						this.elementos = $("#edicion").dialog( "option", "buttons" );
					    delete this.elementos[id];
						this.botones_establecer();					
					},
				    botones_establecer: function ()
                    {
                        $.ikt_dialogo_conf.option_establecer('buttons',this.elementos);
                    }
                },
            alto:function (valor)
                {
                    $.ikt_dialogo_conf.option_establecer('height',valor);
                },
            ancho:function (valor)
                {
                    $.ikt_dialogo_conf.option_establecer('width',valor);
                },          
            titulo:function (valor)
                {
                    $.ikt_dialogo_conf.option_establecer('title',valor);
                },  
            ventana:'',
            ventanaPar: '',
			alto_set: 0,
			ancho_set: 0,
			titulo_set: '',
			modo:'',
			tipo: 0 // 0 -> formulario, 1 -> Selección
        },
        option_establecer: function (obj,valor)      
        {
            $("#edicion" ).dialog( "option", obj, valor);
        },
        cargar_literales: function ()
        {
            var identificador = '';
            //$("#"+this.opciones.ventana+" label").each(function(){
			$("#"+this.opciones.ventana).find(":not(div,form,ul,li,fieldset)").each(function(){
                identificador=$(this).attr("id")!=null?$(this).attr("id"):"";
                try{
                    identificador=identificador.split('_jqLit_')[1];
                    $.literal=$.Literales[identificador]==undefined?"":$.Literales[identificador];
                    $(this).text($.literal);                     
                }catch(err){
                    identificador='';
                    //$(this).text($.literal);                     
                }/*finally{
                    identificador='';
                    $(this).text($.literal);                     
                }*/                
            });
        },
		instanciar_controles:function(){},
        datos_form: {},
        cargar_datos: function ()
        {
            // Se comprueba si existe el objeto datos_form
            this.datos_form = {};
			var miAjax = $.ikt_ajax_obj.inicializar();
			miAjax.pagina=this.opciones.ventana+".aspx/GetEdicion_"+this.opciones.ventana;
			miAjax.async=false;
			// se incluye el hash
			var iktdialogparam;
			iktdialogparam = this.getCamposExtras.inicializar();
			iktdialogparam = this.CamposExtras(iktdialogparam);
			iktdialogparam.add('hash',viewHash);
			iktdialogparam.add('modo',this.opciones.modo);
			/*var ikdialogparamDes='';*/
			miAjax.parametros = {'data':{}}
			$.extend(true, miAjax.parametros.data,iktdialogparam.elementos);			
			miAjax.correcto=function (objeto){
				var data=JSON.parse(objeto.responseText).d;
				if (data!=null)	// Es nulo si desde el negocio se devuelve nothing
				{
					$.ikt_dialogo_conf.datos_form=data.data;
					$.ikt_dialogo_conf.set_FData();
				}
				$.ikt_dialogo_conf.cargar_datos_finalizado();	// Función libre que se llama una vez que la carga de datos ha finalizado
				$("#Contenido"+$.ikt_dialogo_conf.opciones.ventana+"_loading").css("display", "none");
				$("#Contenido"+$.ikt_dialogo_conf.opciones.ventana).css("display", "block");  				
			};
			miAjax.error=function (objeto){
				$.ikt_dialogo_conf.datos_form=null;
			};
			miAjax.enviar();			
        },
		cargar_datos_finalizado: function ()
		{return true},
		cargar_contenido: function (){},
        set_FData: function ()    // Se recorre el formulario para establecer los valores
        {
            var o=$.ikt_dialogo_conf.datos_form
                for(var k in o){
                        var id="#"+k.toUpperCase();
                        if($(id).length>0){
                            $(id).attr("value",o[k])
                        }else{
                            if(id.indexOf(getSufijo())>0 && k.toUpperCase().indexOf(getSufijo())>0){
                                id=id.replace(getSufijo(),"");
                                if($(id).length>0)$(id).attr("value",o[k]);
                            }
                            else{
                                id="#"+k.toUpperCase();
                                if($(id).length>0){
                                   $(id).attr("checked",o[k]==1?true:false);
                                }
                            }
                        }
                }            
        },
        get_FData: function (obj)
        {
			// Se carga el modo de ejecución "Alta/Modificación" y el hash
            var campos=""
            var nombre="";
            var valor="";
            $("#FRM"+$.ikt_dialogo_conf.opciones.ventana+" :input").each(function(){
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
		CamposExtras:function(){},
	    getCamposExtras:
		{
			inicializar: function ()
			{
			   return {
				elementos:{},
				add: function (id, valor)
				{
				  $.campoextra = {'id':id, 'valor':valor}; 
				  this.elementos[id]=valor;
				}
			   }
			}
		},
		CamposExtrasSave:function(){},        
	    getCamposExtrasSave:
		{
			inicializar: function ()
			{
			   return {
				elementos:{},
				add: function (id, valor)
				{
				  $.campoextra = {'id':id, 'valor':valor}; 
				  this.elementos[id]=valor;
				}
			   }
			}
		},	
		extender_matriz: function (obj1, obj2)	
		{
			$.each(obj2, function() {
				// Se comprueba 
				var miControl = false;
				var miID = this.id;
				var miValor = this.valor;
				$.each(obj1, function() {
					if (this.id == miID)
					{
						this.valor = miValor;
						miControl = true;
					}
				});		
				if (!miControl)
				{
					var miObj = {};
					miObj[miID]=miValor;
					obj1.push(miObj);
				}
			});	
			return obj1;			
		},
        valida_usuario: function (valRes)
        {
           return valRes;
        },
        Guardado:function(){},
        noGuardado:function(){}
      }
});
$.extend({
      ikt_dialogo:  
      {
		inicializar: function ()
		{
		$.ikt_dialogo_conf.opciones.ventana="";
		$.ikt_dialogo_conf.opciones.ventanaPar="";
		$.ikt_dialogo_conf.opciones.tipo=0;
		$.ikt_dialogo_conf.opciones.modo="";
		$.ikt_dialogo_conf.opciones.botones.elementos={};
        // Se inicializa el grid con los valores por defecto
        var settings={
            datos_form :{},
			CamposExtras:function(obj){return obj},
			CamposExtrasSave:function(obj){return obj},
            Guardado: function(){return true},
            noGuardado: function(){return true},
            instanciar_controles: function() { },
			valida_usuario:function(valRes){return valRes;}
        };
        $.extend($.ikt_dialogo_conf,settings);		
			return $.ikt_dialogo_conf;
		}
      }
});
(function( $ ){
  $.fn.ikt_texto_largo = function(id,size,maxlength) {
    var ikt_buttons = {};

    ikt_buttons[$.Literales['50015']] = function(event) {
        // Se deja en el texto origen
        $("#"+id).attr("value",$("#textarea_IKT").attr("value"))
        $(this).dialog('close');
        $("#"+id).focus();
        $("#"+id).setCursorPosition($("#"+id).val().length);
    }
    ikt_buttons[$.Literales['50016']] = function(event) {
        $(this).dialog('close');
    }	
    // Dependiendo el tamaño se muestra la pantalla más grande o más pequeña
    var alto=0;
    var ancho=0;
    var filas=0;
    var columnas=0;
    switch (size) 
    {
        case '0': // pequeña
            alto=200;
            ancho=500;
            filas=8;
            columnas=75;
            break;           
        case '1': // mediana
            alto=400;
            ancho=700;
            filas=21;
            columnas=105;
            break;                       
        case '2': // grande
            alto=600;
            ancho=900;
            filas=35;
            columnas=140;
            break;                       
    }
  

    $.settings = {
        autoOpen: false,
        modal: true,
        overlay: 0,
        buttons:ikt_buttons,
        height:alto,
        width:ancho,
        resizable:false,
		closeOnEscape: false,
        title: options.titulo_def,  //$.Literales['50065']
        open: function(event, ui){
            $("#edicion").closest('.ui-dialog').css("display", "none");
            $("#edicion").html('<div><textarea id="textarea_IKT" rows="'+filas+'" cols="'+columnas+'" '+maxlength+' style="overflow:auto;">'+$("#"+id).attr("value")+'</textarea></div>')
            $("#edicion").dialog('option', 'position', [(($(window).height() - $('#edicion').height() ) / 2)+'px', (($(window).width() - $('#edicion').width() ) / 2)+'px']);            
            $("#edicion").closest('.ui-dialog').css("display", "block");
            $("#textarea_IKT").focus();
            $("#textarea_IKT").setCursorPosition($("#textarea_IKT").val().length);
        },
        close: function() {
        } 
    };
    // En principio ventana se le mente desde la definición del objeto,
    // por lo tanto llega ya en options
    $("#edicion").dialog("destroy");
    $("#edicion").dialog($.settings);
    $("#edicion").dialog('open');
  };
})( jQuery );
 $.extend({
      ikt_textos_largos:  
      {
        inicializar: function(id,size,maxlength)
        {
            $('#edicion').ikt_texto_largo(id,size,maxlength);
        }
       }
      });
(function($) {
  $.fn.ikt_editor_html = function(id, size, maxlength) {
    var ikt_buttons = {};

    ikt_buttons[$.Literales['50015']] = function(event) {
      // Se deja en el texto origen
      $("#" + id).attr("value", $.editor_ikt.getData())

      $(this).dialog('close');
      $("#" + id).focus();
      $("#" + id).setCursorPosition($("#" + id).val().length);
    }
    ikt_buttons[$.Literales['50016']] = function(event) {
      $(this).dialog('close');
    }
    // Dependiendo el tamaño se muestra la pantalla más grande o más pequeña
    var alto = 0;
    var ancho = 0;
    var filas = 0;
    var columnas = 0;
    switch (size) {
      case '0': // pequeña
        alto = 200;
        ancho = 500;
        filas = 8;
        columnas = 75;
        break;
      case '1': // mediana
        alto = 420;
        ancho = 700;
        filas = 23;
        columnas = 105;
        break;
      case '2': // grande
        alto = 600;
        ancho = 900;
        filas = 38;
        columnas = 140;
        break;
    }

    $.settings = {
      autoOpen: false,
      modal: true,
      overlay: 0,
      buttons: ikt_buttons,
      height: alto,
      width: ancho,
      resizable: false,
	  closeOnEscape: false,
      title: $.Literales['50065'],
      open: function(event, ui) {
        $("#edicion").closest('.ui-dialog').css("display", "none");
        $("#edicion").html('<div id="div_editor_IKT_padre" class="loading_ikt"></div><div id="div_editor_IKT"></div>')
        $("#edicion").dialog('option', 'position', [(($(window).height() - $('#edicion').height()) / 2) + 'px', (($(window).width() - $('#edicion').width()) / 2) + 'px']);

        if ($.editor_ikt) { return; }


        // Create a new editor inside the <div id="editor">, setting its value to html

        /*KEDITOR.editorConfig = function(config) {
        config.toolbar = 'Ikt';
        config.toolbar_Ikt =
        [
        { name: 'document', items: ['Source', '-', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates'] },
        { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
        { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt'] },
        '/',
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'] },
        '/',
        { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
        { name: 'colors', items: ['TextColor', 'BGColor'] },
        { name: 'tools', items: ['Maximize', 'ShowBlocks', '-', 'About'] }
        ];
        };*/


        /*
        CKEDITOR.config.toolbar_Ikt =
        [
        { name: 'document', items: ['Source', '-', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates'] },
        { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
        { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt'] },
        '/',
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'] },
        '/',
        { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
        { name: 'colors', items: ['TextColor', 'BGColor'] },
        { name: 'tools', items: ['Maximize', 'ShowBlocks', '-', 'About'] }
        ];
        CKEDITOR.config.toolbar = "Ikt";

          ['Source', '-', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates'],
        ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'],
        ['Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt'],
        ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'],
        ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'],
        ['Styles', 'Format', 'Font', 'FontSize'],
        ['TextColor', 'BGColor'],
        ['Maximize', 'ShowBlocks', '-', 'About']
        */

        $.config = { height: '240px', toolbar: [
          ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'],
          ['Find', 'Replace', '-', 'SelectAll', '-', 'RemoveFormat'],
          '/',
          ['Bold', 'Italic', 'Underline', '-', 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-'],      
          ['Font', 'FontSize', 'TextColor']
        ]
        };

        $.editor_ikt = CKEDITOR.appendTo('div_editor_IKT', $.config, $("#" + id).attr("value"));

        $.editor_ikt.on('instanceReady', function(e) { $("#div_editor_IKT_padre").removeClass("loading_ikt") })
        $("#edicion").closest('.ui-dialog').css("display", "block");
        $("#div_editor_IKT").focus();
        $("#div_editor_IKT").setCursorPosition($("#div_editor_IKT").val().length);
      },
      close: function() {
        $.editor_ikt.destroy();
        $.editor_ikt = null;
      }
    };
    // En principio ventana se le mente desde la definición del objeto,
    // por lo tanto llega ya en options
    $("#edicion").dialog("destroy");
    $("#edicion").dialog($.settings);
    $("#edicion").dialog('open');
  };
})(jQuery);
 $.extend({
      ikt_editor_html:  
      {
        inicializar: function(id,size,maxlength)
        {
            $('#edicion').ikt_editor_html(id,size,maxlength);
        }
       }
      });      
new function($) {
  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }
}(jQuery);