
validaExtra = 
{
	tipos: {'error':'errores','alerta':'alertas'},
	inicializar: function ()
	{
		return {
			valElementos:{ "errores": [], "alertas": [] },
			add: function (valor, tipo)
			{
				this.valElementos[tipo].push(valor); // Se añade el error o alerta
			}
		};
	}
};

(function( $ ){
  $.fn.ikt_grid = function(conf, options) {
    // Se establece ondblClickRow siempre y cuando el gríd sea editable
    if (options.editable)
    {
        conf.ondblClickRow = function (id)
        {
            if (!options.alDblClickFila(id)) {return false};
            if ($.ikt_grid_conf.getPropiedad(options.grid_id,'estado') != "M") {
                $.ikt_grid_conf.setPropiedad(options.grid_id,'estado','M');
                $.ikt_grid_conf.setPropiedad(options.grid_id,'filaEdit', id);
                // Se bloquean el resto de divs
                $(".tabSelector").block({ message: null });
                $(".leftcontent").block({ message: null });
                $(".header").block({ message: null });
				$(".contentHeader").block({ message: null });
                $(".footer").block({ message: null });
				$(".buttonBar").block({ message: null });	
				$(".searchDiv").block({ message: null });	
				
                // Se recupera la información que se quiere representar en modo edición, aqui se 
                // llamará a un webmetodo que nos devuelva un json que se cargará
                // en $.Grid_Cont_SolDocu.datos_form
                $("#"+options.grid_id)[0].datos_form_establecer(id);
            }                                
            
        }  //onSelectRow
	} 
    if (options.editable || options.altable)
    {	
        conf.onSelectRow = function (id)
        {
            if (!$.ikt_grid_conf.getPropiedad(options.grid_id,'altacontrol')) {
                if ($.ikt_grid_conf.getPropiedad(options.grid_id,'estado') == "M") {
                    if (id != $.ikt_grid_conf.getPropiedad(options.grid_id,'filaEdit')) {
                        $("#"+options.grid_id)[0].grabarGrid(id);
                    }
                }
            }  
            options.alSelFila(id);
        }    
        // Si es editable se recorren todas las columnas para introducir la función valor establecer
        $.each(conf.colModel, function() {
			if (this.personalizado)//if (this.formatter!= undefined && this.formatter == 'showlink')
			{
				this.editable = false;
			}
			else
			{
				this.editable = true;
				this.editoptions.custom_value = function (elemento, accion) 
				{
					if (accion == 'get') // Se establece cuando se graba la información en el servidor
					{
						// aquí se puede buscar información para rellenar en los controles una vez grabada la información
						//return $("#"+options.grid_id)[0].datos_form_buscar(elemento[0].id);
						try
							{
								return $("#"+options.grid_id)[0].datos_form_buscar(elemento[0].id);
							}
						catch(err)
							{
								return "";
							}
					}
					else // se establece cuando se crea el control
					{
						// Se comprueba que si estamos en el alta no se pasa nada, salvo que hayamos rellenado datos_form en AltaEstablecer
						if ($.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit').indexOf('new',0) != -1 &&
						    $.isEmptyObject($.ikt_grid_conf.getPropiedad(options.grid_id,'datos_form')))
						{
							return "";
						}
						else
						{
							return $("#"+options.grid_id)[0].datos_form_buscar(elemento);
						}
					}
				};				
				this.editoptions['grid_id'] = options.grid_id;
			}		
         }
       );   
    }        
    var settings = {
		//loadonce: true,
		gridComplete: function () {
			/*if (!options.multiselec) // Si no es de multiselección se posiciona en la primera fila
			{
				$('#'+options.grid_id).setSelection($('#'+options.grid_id+' tr:first').attr('id'));
			}*/
			options.gridCargado();
			$("#Contenido"+options.grid_id+"_loading").css("display", "none");
			$("#Contenido"+options.grid_id).css("display", "block");
		},
        datatype: function() {
            /*$.miWhereGrid = "'grid_id':'"+options.grid_id+"'";
            options.where().elementos;
            $.each(options.where().elementos, function() {
                $.miWhereGrid += ",'"+this.id+"':'"+this.valor+"'";
            });*/
            $(".loading").css("display", "block");
            $.ajax(
                {
                    url: options.ventana+".aspx/GetGrid_"+options.grid_id, //PageMethod
                    data: "{'pPageSize':'" + $('#'+options.grid_id).getGridParam("rowNum") +
                    "','pCurrentPage':'" + $('#'+options.grid_id).getGridParam("page") +
                    "','pSortColumn':'" + $('#'+options.grid_id).getGridParam("sortname") +
                    "','pSortOrder':'" + $('#'+options.grid_id).getGridParam("sortorder") +
					"','hash':'" + viewHash +
                    "','where':{" + options.where_establecer() + "}}", //PageMethod Parametros de entrada
                    dataType: "json",
                    type: "post",
                    contentType: "application/json; charset=utf-8",
                    complete: function(jsondata, stat) {
                        if (stat == "success") {
                            $("#"+options.grid_id)[0].addJSONData(JSON.parse(jsondata.responseText).d);
                            $(".loading").css("display", "none");
                        } else
                            alert($.Literales['50067']);
                            $(".loading").css("display", "none");
                    }
                }
            );
        },
        jsonReader: 
		{
		    root: "Items",page: "CurrentPage",total: "PageCount",records: "RecordCount",	repeatitems: true,
		    overlay: 0,cell: "Row",id: "ID",where: "where", userdata: "totales"
        },
		hidegrid:false,
		pager: "#pager"+options.grid_id,
		emptyrecords: $.Literales['50090'], 
		recordtext: $.Literales['50060'], 
		pgtext: $.Literales['50064'], 
		rowNum: "15",
		altRows: true, rownumbers: true, 
		viewrecords: true,
		deselectAfterSort: false, 
		loadui: 'block',
		autowidth: false
    };
    // Se realiza un merge de los valores por defecto y los que llegan
    if ( conf ) { 
        $.extend( settings, conf );
    }
    // En principio ventana se le mente desde la definición del objeto,
    // por lo tanto llega ya en options
    $("#"+options.grid_id).jqGrid(settings).navGrid('#pager'+options.grid_id, { add: false, edit: false, del: false, search: false, view: false, refresh: true }, {}, {}, {}, {}, { navkeys: [true, 38, 40], height: 300, jqModal: true, closeOnEscape: true });

    // Se inicializa la propiedades del grid no existentes en el plugin
    $("#"+options.grid_id)[0].datos_form = {};
    $("#"+options.grid_id)[0].vdata = {};
    $("#"+options.grid_id)[0].estado = "L";
    $("#"+options.grid_id)[0].filaedit = "";
    $("#"+options.grid_id)[0].altable = options.altable;
    $("#"+options.grid_id)[0].editable= options.editable;
    $("#"+options.grid_id)[0].bajable = options.bajable;
    $("#"+options.grid_id)[0].altacontrol= false;
	$("#"+options.grid_id)[0].modo= options.modo;

    // Se prepara el keypress
    var miCancelar = function checkKey(e) {
        //alert(options.grid_id);
        switch (e.keyCode) {
            case 27:
                if ($.ikt_grid_conf.getPropiedad(options.grid_id,'estado') == "M") {
                    var sr = $("#"+options.grid_id).getGridParam('selrow')
                    if (sr == 'new') {
                        // Control de variables
                        $.ikt_grid_conf.setPropiedad(options.grid_id,'altacontrol',true);
                        $("#"+options.grid_id).delRowData(sr);
                        $.ikt_grid_conf.setPropiedad(options.grid_id,'altacontrol',false);
                    }
                    else {
                        $("#"+options.grid_id).restoreRow(sr);
                        $("#"+options.grid_id).setSelection(sr);
                    }
                    $.ikt_grid_conf.setPropiedad(options.grid_id,'estado','L');
					
                }
                // Se desbloquean el resto de divs
		        $(".tabSelector").unblock();
		        $(".leftcontent").unblock();
		        $(".header").unblock();
        		
		        $(".header").css("position","");
        		
		        $(".contentHeader").unblock();
		        $(".footer").unblock();
		        $(".buttonBar").unblock();		
		        $(".searchBar").unblock();
		        $(".searchDiv").unblock();		
                break;
            case 13:
                if ($.ikt_grid_conf.getPropiedad(options.grid_id,'estado') == "M") {
                    sr = $("#"+options.grid_id).getGridParam('selrow')
                    $("#"+options.grid_id)[0].grabarGrid(sr);
                }
                // Se desbloquean el resto de divs
		        $(".tabSelector").unblock();
		        $(".leftcontent").unblock();
		        $(".header").unblock();
        		
		        $(".header").css("position","");
        		
		        $(".contentHeader").unblock();
		        $(".footer").unblock();
		        $(".buttonBar").unblock();		
		        $(".searchBar").unblock();
		        $(".searchDiv").unblock();		
				
                break;
        }
    }
    
    // Se establece 
    if ($.browser.mozilla) {
        $("#"+options.grid_id).keypress(miCancelar);
    } else {
        $("#"+options.grid_id).keydown(miCancelar);
    }


    // Se establece datos_form_establecer
    if ($.ikt_grid_conf.getPropiedad(options.grid_id,'editable') || $.ikt_grid_conf.getPropiedad(options.grid_id,'altable'))
    {                            
        $("#"+options.grid_id)[0].datos_form_establecer= function (id) {   // Aqui se llama al negocio (Web método) para que nos devuelva un JSon
            var valRes = { "errores": [], "alertas": [] };
            if ($.ikt_grid_conf.getPropiedad(options.grid_id,'estado') == 'M') {
                $.ikt_ajax({
                    url: options.ventana+".aspx/GetEdicion_"+options.grid_id,
                    data: "{ 'ID': '" + id + "','hash':'" + viewHash +"'}",
                    complete: function(jsondata, stat) 
                    {
                        if (stat == "success") {
                            $.ikt_grid_conf.setPropiedad(options.grid_id,'vdata',JSON.parse(jsondata.responseText).d);
                            if ($.ikt_grid_conf.getPropiedad(options.grid_id,'vdata').errores == null && $.ikt_grid_conf.getPropiedad(options.grid_id,'vdata').alertas == null) {
                                // si ha ido todo bien se rellena datos_form para mostrar en el grid
                                $.ikt_grid_conf.setPropiedad(options.grid_id,'datos_form',$.ikt_grid_conf.getPropiedad(options.grid_id,'vdata'))
                                $("#"+options.grid_id).editRow(id, false);
                                // Si tenemos textareas se quita el keypress heredado del mismo
                                // Se establece 
                                if ($.browser.mozilla) {
                                    $("textarea", $('#'+options.grid_id)).bind('keypress', function(e) {
                                                                if(e.keyCode!=27)e.stopPropagation(); 
                                                                });                       
                                } else {
                                    $("textarea", $('#'+options.grid_id)).bind('keydown', function(e) {
                                                                if(e.keyCode!=27)e.stopPropagation(); 
                                                                });     
                                }                                
                                // La función $.Grid_Cont_SolDocu.Instanciar_Controles, puede ser utilizada para instanciar algún control,
                                // como por ejemplo un autocompletar
                                if (options.instanciarControles != undefined)
                                {
                                    options.instanciarControles();
                                }
                                    
                            } else {
                                valRes.errores = $.ikt_grid_conf.getPropiedad(options.grid_id,'vdata').errores != null ? $.ikt_grid_conf.getPropiedad(options.grid_id,'vdata').errores : valRes.errores;
                                valRes.alertas = $.ikt_grid_conf.getPropiedad(options.grid_id,'vdata').alertas != null ? $.ikt_grid_conf.getPropiedad(options.grid_id,'vdata').alertas : valRes.alertas;
                                valRes.errores.push(jsondata.responseText);
                                jAlert(creaDivErrores(valRes),$.Literales['7']);
                            }
                        } else {
                            valRes.errores.push(jsondata.responseText);
                            jAlert(creaDivErrores(valRes),$.Literales['7']);
                        }                                        
                    }                
                });                                
            }

            return
        }  
        
        $("#"+options.grid_id)[0].datos_form_buscar= function (valor) {
            var Resultado ='';
            if ($.ikt_grid_conf.getPropiedad(options.grid_id,'estado')  == 'M') {
                valor = valor.toLowerCase()    
                if($.ikt_grid_conf.getPropiedad(options.grid_id,'datos_form').data!=undefined)
                {Resultado = $.ikt_grid_conf.getPropiedad(options.grid_id,'datos_form').data[valor];}
                else
                {Resultado='';}
            }
            // Si el estado es lectura quiere decir que devolvemos lo que se ha grabado
            if ($.ikt_grid_conf.getPropiedad(options.grid_id,'estado') == 'L') {
                // También se reemplaza en caso que venga un new, cuando es un alta
                valor = valor.replace('new_', '')
                valor = valor.replace($.ikt_grid_conf.getPropiedad(options.grid_id,'datos_form').ID + '_', '')
                valor = valor.toLowerCase()
                if($.ikt_grid_conf.getPropiedad(options.grid_id,'datos_form').data!=undefined)
                {Resultado = $.ikt_grid_conf.getPropiedad(options.grid_id,'datos_form').data[valor];}
                else
                {Resultado = '';}
            }
            return Resultado;
        }     
        
        // Se define el método datos_form_buscar
        // Si es editable se define la función valor_establecer en el plugin
        $("#"+options.grid_id)[0].valor_establecer=function (elem, action, val) 
        {
            if (action == 'get') // Se establece cuando se graba la información en el servidor
            {
                // aquí se puede buscar información para rellenar en los controles una vez grabada la información
                return $("#"+options.grid_id)[0].datos_form_buscar(elem[0].id);
            }
            else // se establece cuando se crea el control
            {
                // Se comprueba que si estamos en el alta no se pasa nada
                if ($.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit').indexOf('new',0) != -1)
                {
                    return "";
                }
                else{
                    return $("#"+options.grid_id)[0].datos_form_buscar(elem);
                }
            }    
         }
        // getFData
        $("#"+options.grid_id)[0].getFData= function () {
            var control = true;
            var camposextras = options.getCamposExtras(options.grid_id,$.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit'),$.ikt_grid_conf.getCamposExtras.inicializar()).elementos;
            var campos="'ID':'" + $.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit') + "','hash':'" + viewHash +"'";
            var nombre="";
            var valor="";
			
            //$('#' + $.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit') +' input',$('#'+options.grid_id)).each
			$('#' + $.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit') +' input,textarea ',$('#'+options.grid_id)).each(function(){
                nombre=$(this).attr("name")!=null?$(this).attr("name"):"";
                if($(this).attr("type") == "checkbox"){
                     valor=$(this).valor()!=null && $(this).is(":checked")?true:false;
                     control = true;
                }
                else if($(this).attr("type") == "radio"){
                     if ($(this).is(":selected"))   
                        {
                            valor=$(this).valor()==null ? '0':$(this).valor();
                            control = true;
                        }
                     else  {control = false;}    
                        
                }                
                else{
                    valor=$(this).valor()!=null?$(this).valor():"";
                    control = true;
                }
                if(nombre!="" && control) campos+=",'"+nombre+"':'"+valor+"'";
            });
            $.each(camposextras, function() {
               campos+=",'"+this.id+"':'"+this.valor+"'";
            });
            
            var ret = "{'data':{"+campos;
            ret = ret + "}}";
            return ret;
        }        
        // Grabar grid
        $("#"+options.grid_id)[0].grabarGrid=function (id) {
            // Se crea el JSon que se enviará al servidor para ser grabado
            var fdata = $("#"+options.grid_id)[0].getFData()
            var valRes = $.ikt_grid_conf.validaExtra.inicializar()
            //validaciones personalizadas por usuario
            valRes = options.validaExtra(valRes,id,options.grid_id);
            //validaciones estandar 
            valRes = Validacion_Grid(valRes,$.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit'),options.grid_id);
            if (valRes.valElementos.errores.length <= 0) {
                $.ikt_ajax({
                    url: options.ventana+".aspx/Save_"+options.grid_id,
                    data: fdata,
                    complete: function(jsondata, stat) 
                    {
                        if (stat == "success") {
                            var vdata = JSON.parse(jsondata.responseText).d;
                            if (vdata.errores == null && vdata.alertas == null) {
                                // si ha ido todo bien se rellena datos_form para mostrar en el grid
                                $.ikt_grid_conf.setPropiedad(options.grid_id,'datos_form',vdata);
                                // Se cambia el estado del grid y por lo tanto se establecen los valores a mostrar en el grid
                                $.ikt_grid_conf.setPropiedad(options.grid_id,'estado',"L");
                                $("#"+options.grid_id).saveRow($.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit'), false, 'clientArray');
                                $('#'+$.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit'), '#'+options.grid_id).attr("id",vdata.ID)
                                // Se vacía la variable de edición
                                $.ikt_grid_conf.setPropiedad(options.grid_id,'filaedit',"");
								// Si tiene pie de grid se establecen los valores
								if (options.piegrid)
								{	// Se recorre el dataExtra para pintar los resultados en el pie del grid
									for (var prop in vdata.dataExtra)
									{
										if (vdata.dataExtra.hasOwnProperty(prop))
										{
											$('.ui-jqgrid-ftable td[aria-describedby="'+options.grid_id+'_'+prop+'"]').text(vdata.dataExtra[prop]);
											$('.ui-jqgrid-ftable td[aria-describedby="'+options.grid_id+'_'+prop+'"]').attr("title",vdata.dataExtra[prop]);
										}
									}
								}
								// Se selecciona el registro si se pulsa el enter para que la fila del objeto grid, no tenga el new
								if (id=='new'){$.ikt_grid_conf.seleccionarFila(options.grid_id,vdata.ID)}
								// Se desbloquean el resto de divs
								$(".tabSelector").unblock();
								$(".leftcontent").unblock();
								$(".header").unblock();
								
								$(".header").css("position","");
								
								$(".contentHeader").unblock();
								$(".footer").unblock();
								$(".buttonBar").unblock();
								$(".searchBar").unblock();
								$(".searchDiv").unblock();
								
								options.Guardado(vdata);
                                return true;
                            } else {
                                valRes.valElementos.errores = vdata.errores != null ? vdata.errores : valRes.valElementos.errores;
                                valRes.valElementos.alertas = vdata.alertas != null ? vdata.alertas : valRes.valElementos.alertas;
                                if (vdata.errores == null && vdata.alertas != null) {
                                   // si ha ido todo bien se rellena datos_form para mostrar en el grid
                                    $.ikt_grid_conf.setPropiedad(options.grid_id,'datos_form',vdata);
                                    // Se cambia el estado del grid y por lo tanto se establecen los valores a mostrar en el grid
                                    $.ikt_grid_conf.setPropiedad(options.grid_id,'estado',"L");
                                    $("#"+options.grid_id).saveRow($.ikt_grid_conf.getPropiedad('filaedit'), false, 'clientArray');
                                    $('#'+j$.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit')).attr("id",vdata.ID)
                                    // Se vacía la variable de edición
                                    $.ikt_grid_conf.setPropiedad(options.grid_id,'filaedit',"");
                                    options.Guardado(vdata);
                                    return true;
                                }
                                else {
                                    $.ikt_grid_conf.setPropiedad(options.grid_id,'estado',"M");
                                    if (id != $.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit')) {
                                        $("#"+options.grid_id).setSelection($.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit'))
                                    }
                        			jAlert(creaDivErrores(valRes.valElementos),XmlValor_Chequear($.Literales['70005']));
                                    $("#popup_container").focus();
                                    options.noGuardado(vdata);
                                    return false;
                                }
                            }
                        } else {
                            $.ikt_grid_conf.setPropiedad(options.grid_id,'estado',"M");
                            if (id != $.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit')) {
                                $("#"+options.grid_id).setSelection($.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit'))
                            }
	                        valRes.valElementos.errores.push(jsondata.responseText);
	                        jAlert(creaDivErrores(valRes.valElementos),XmlValor_Chequear($.Literales['70005']));
	                        $("#popup_container").focus();
                            return false;
                        }                                        
                    }                
                });                      
            } else {
                $.ikt_grid_conf.setPropiedad(options.grid_id,'estado',"M");
                if (id != $.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit')) {
                    $("#"+options.grid_id).setSelection($.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit'))
                }
                jAlert(creaDivErrores(valRes.valElementos),XmlValor_Chequear($.Literales['70005']));
                $("#popup_container").focus();
                return false;

            }
            $.ikt_grid_conf.setPropiedad(options.grid_id,'estado',"M");
            return false;
        }

    } 
    if ($.ikt_grid_conf.getPropiedad(options.grid_id,'altable'))
    { 
        // Alta en el grid editable
        $("#"+options.grid_id)[0].alta=function () {
			// Se bloquean el resto de divs
			$(".tabSelector").block({ message: null });
			$(".leftcontent").block({ message: null });
			$(".header").block({ message: null });
			$(".contentHeader").block({ message: null });
			$(".footer").block({ message: null });
			$(".buttonBar").block({ message: null });	
			$(".searchBar").block({ message: null });	
            // Se recuperan el colmodel y se recorre ya que hay que quitar la primera columna en caso que
            // no tenga index ya que es el contador de filas.
            var columnas = {};
            $.each($('#'+options.grid_id).getGridParam('colModel'), 
                function() {
                    if (this.index!='' && this.index!=undefined)
                    {columnas[this.index]='';}
                }    
            ); 
			$.ikt_grid_conf.setPropiedad(options.grid_id,'filaedit',"new");
            $("#"+options.grid_id).addRowData("new", columnas);
            $("#IDgrid").attr("value", $.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit'))
            $("#"+options.grid_id).setSelection($.ikt_grid_conf.getPropiedad(options.grid_id,'filaedit'));
            $.ikt_grid_conf.setPropiedad(options.grid_id,'estado',"M")
            $.ikt_grid_conf.setPropiedad(options.grid_id,'datos_form',{});
			var miDatos_Form = options.altaestablecer($.ikt_grid_conf.getPropiedad(options.grid_id,'datos_form'));
			$.ikt_grid_conf.setPropiedad(options.grid_id,'datos_form',miDatos_Form);
			//options.altaestablecer($.ikt_grid_conf.getPropiedad(options.grid_id,'datos_form'));// Se ejecuta la función que permitirá rellenar la variable datos_form
            $('#'+options.grid_id).editRow('new', false); // Se le pasa un false para que no intente guardar al pulsar en el enter.
            if (options.instanciarControles != undefined)// Se instancian los plugin's especiales
            {
                options.instanciarControles();
            }                
            return;
        }            
    }
    
    if ($.ikt_grid_conf.getPropiedad(options.grid_id,'bajable'))
    { 
        // Alta en el grid editable
        $("#"+options.grid_id)[0].baja=function () {
        var sr = $("#"+options.grid_id).getGridParam('selrow');
        if (sr == null) { jAlert('Debe seleccionar una fila'); return false; }

        jConfirm($.Literales[50054], $.Literales[50054], function(ok){
			var valRes = $.ikt_grid_conf.validaExtra.inicializar();
            if (ok) {
                $.ikt_ajax({
                    url: options.ventana+".aspx/Delete_"+options.grid_id,
                    data: "{'hash':'" + viewHash + "', 'ID': '" + sr +"' }",
                    complete: function(jsondata, stat) 
                    {            
	                    if (stat == "success") {
						   var vdata = JSON.parse(jsondata.responseText).d;
						   if (vdata.errores == null && vdata.alertas == null) {	
							   $("#"+options.grid_id).delRowData(sr);		
							                                                           
								// Si tiene pie de grid se establecen los valores
								if (options.piegrid)
								{	// Se recorre el dataExtra para pintar los resultados en el pie del grid
									for (var prop in vdata.dataExtra)
									{
										if (vdata.dataExtra.hasOwnProperty(prop))
										{
											$('.ui-jqgrid-ftable td[aria-describedby="'+options.grid_id+'_'+prop+'"]').text(vdata.dataExtra[prop]);
											$('.ui-jqgrid-ftable td[aria-describedby="'+options.grid_id+'_'+prop+'"]').attr("title",vdata.dataExtra[prop]);
										}
									}
								}	
							}
							else							
							{
                                valRes.valElementos.errores = vdata.errores != null ? vdata.errores : valRes.valElementos.errores;
                                valRes.valElementos.alertas = vdata.alertas != null ? vdata.alertas : valRes.valElementos.alertas;	
								jAlert(creaDivErrores(valRes.valElementos),XmlValor_Chequear($.Literales['50074']));
								$("#popup_container").focus();
								return false;
							}
	                    } 
		            } 
  	            });
            }
            else{
                return;
            } 
        });
        }            
    }    
	// Se establecen las propiedades de la búsqueda
	if (options.busqueda)
	{
		$(".abusFlec","#searchBar"+options.ventana).bind('click', function() {
			if ($("#searchBar"+options.ventana+" .busFlec").attr("class") == "busFlec ui-icon ui-icon-circle-triangle-s")  
			{
				$("#searchBody"+options.ventana).css("position","absolute")
				$("#searchBody"+options.ventana).css("width",$("#Contenido"+options.ventana+" .searchBarTitle").innerWidth())
				if ($("#"+$("#Contenido"+options.ventana).parent().get(0).id).hasClass('ui-dialog-content'))
				{	// Si el grid está contenido en una modal
					$("#searchBody"+options.ventana+"").css("left", $("#Contenido"+options.ventana+" .searchBar").position().left + parseInt($("#Contenido"+options.ventana+" .searchBarTitle").css("margin-left").substring(0,$("#Contenido"+options.ventana+" .searchBarTitle").css("margin-left").length - 2)) + 'px')
					$("#searchBody"+options.ventana+"").css("top", $("#Contenido"+options.ventana+" .searchBarTitle").position().top + $("#Contenido"+options.ventana+" .searchBarTitle").innerHeight() + 'px')
				}
				else
				{
					$("#searchBody"+options.ventana).css("left",$("#Contenido"+options.ventana+" .searchBarTitle").offset().left )    
					$("#searchBody"+options.ventana).css("top",$("#Contenido"+options.ventana+" .searchBarTitle").offset().top + $("#Contenido"+options.ventana+" .searchBarTitle").innerHeight())   
				}
				$("#searchBody"+options.ventana).show(); 
				$("#Contenido"+options.ventana+" .busFlec").attr("class", "busFlec ui-icon ui-icon-circle-triangle-n");
				
			} else {
				$("#searchBody"+options.ventana).hide();      
				$("#busFlec").attr("class", "busFlec ui-icon ui-icon-circle-triangle-s");
			}
		});
		
		
		$(".busquedatitulo","#Contenido"+options.ventana).bind('click', function() {
		   $(".abusFlec","#Contenido"+options.ventana).click();
		});
		$(".ui-button:first","#searchFooter"+options.ventana).bind('click', function() {
		   $(".abusFlec","#Contenido"+options.ventana).click();
		});		
    }	
	
  };
})( jQuery );

$.extend({
      ikt_grid_conf:  
      {
        opciones:
            {
                where:function (){},
                altura:100, 
                colOrd:"",
                colOrdTipo:"",
                ventana:"",
                grid_id:"",
                gridCargado:function (){},
                alSelFila:function () {},
                alDblClickFila:function () {},
                ctlCampoEditable:function () {},
                instanciarControles:function () {},
                getCamposExtras: function () {},
                validaExtra: function () {},
                altaestablecer: function () {},
				piegrid: false,
                altable:false,
                editable:false,
                bajable:false,
				busqueda:false,
				titulo:'',
				modo:'',
				Guardado: function (obj) {return true},                
				noGuardado: function (obj) {return true}                
            }
      }
});
$.extend($.ikt_grid_conf,
      {
        columna:
            { ancho:"",
              id:"",
              etiqueta:"",
			  personalizado:false,
              alineacion:"",
              sortable:false,
              editable:false,
              multiple:false,
			  oculta:false,
              control_edicion:[], 
              eventos:[], 
              formatter: "",
              formatoptions: {},
              add:function () {
                var col = { index: this.id, 
                          name: this.id, 
                          width: this.ancho, 
                          align: this.alineacion, 
                          label: this.etiqueta, 
                          editable: this.editable,
                          sortable: this.sortable,
						  hidden: this.oculta,
						  personalizado:this.personalizado
                };
                
                if (this.formatter != ""){
                    col.formatter = this.formatter;
                    col.formatoptions = this.formatoptions;
                }        

                // Si es un grid editable se prepara la columna
                if (($.ikt_grid_conf.opciones.editable || $.ikt_grid_conf.opciones.altable) && !this.link)          
                    {
                        col.edittype= "custom";
                        col.editoptions = {
                                            custom_element: $.controles.crear,
                                            custom_value: function () {},
                                            elementos: this.control_edicion
                                            
                                            };                                                      
                    }
                $.ikt_grid_conf.conf.colModel.push(col);
                // Se inicializa la columna con los valores por defecto ///////
                var settings = {
                    ancho:"",
                    id:"",
                    etiqueta:"",
                    alineacion:"",
                    sortable:false,
                    editable:false,
                    altable:false,
                    bajable:false,
                    multiple:false,
					oculta:false,
					personalizado:false,
                    control_edicion:[], 
                    formatter: "",
                    formatoptions:[]                                    
                };
                $.extend($.ikt_grid_conf.columna,settings);                
                //////////////////////////////////////////////////////////////
              }, 
             add_control: function (obj)      
                {
                    this.control_edicion.push(obj);
                },
             add_evento: function (evento,valor)   
                {
                    var obj = {'tipo':evento, 'valor':valor}
                    this.eventos.push(obj);
                }
            }
      }
);

$.extend($.ikt_grid_conf,{
    /*inicializar: function(ventana,grid_id)
    {
        grid_id=grid_id==undefined?ventana:grid_id;
        // Se inicializa el grid con los valores por defecto
        var settings={
            opciones:
                {
                where:function (){return ""},
                altura:100,
				numFilas:-1,
                colOrd:"",
                colOrdTipo:"",
                ventana:ventana,
                grid_id:grid_id,
                gridCargado:function (){},
                alSelFila:function () {},
                alDblClickFila:function () {},
                ctlCampoEditable:function () {},
                grabarGrid: function () {},
                instanciarControles: function () {},
                getCamposExtras: function () {return {elementos:[]}},
                validaExtra: function () {return { "errores": [], "alertas": [] };},
                altaestablecer: function () {},
				piegrid:false,
                altable:false,
                editable:false,
                bajable:false,
				multiselec:false,
				busqueda:false,
				titulo:'',
				modo:''				
                },
             conf:
                {
                colModel:[]
                }
        };
        $.extend($.ikt_grid_conf,settings);
      
    },*/
    mostrar:function ()
    {
        $.ikt_grid_conf.conf.sortname= $.ikt_grid_conf.opciones.colOrd;
        $.ikt_grid_conf.conf.sortorder= $.ikt_grid_conf.opciones.colOrdTipo;
        $.ikt_grid_conf.conf.height= $.ikt_grid_conf.opciones.altura;
		$.ikt_grid_conf.conf.rowNum= $.ikt_grid_conf.opciones.numFilas;
        //$.ikt_grid_conf.conf.gridComplete= $.ikt_grid_conf.opciones.gridCargado;
        $.ikt_grid_conf.conf.onSelectRow= $.ikt_grid_conf.opciones.alSelFila;
        $.ikt_grid_conf.conf.ondblClickRow= $.ikt_grid_conf.opciones.alDblClickFila;
        $.ikt_grid_conf.conf.ctlCampoEditable= $.ikt_grid_conf.opciones.ctlCampoEditable;
        $.ikt_grid_conf.conf.grabarGrid = $.ikt_grid_conf.opciones.grabarGrid;  
        $.ikt_grid_conf.conf.instanciarControles = $.ikt_grid_conf.opciones.instanciarControles;  
		if ($.ikt_grid_conf.opciones.piegrid)
		{
			$.ikt_grid_conf.conf['footerrow'] = true;
			$.ikt_grid_conf.conf['userDataOnFooter'] = true;
		}
		else
		{
			$.ikt_grid_conf.conf['footerrow'] = false;
			$.ikt_grid_conf.conf['userDataOnFooter'] = false;
		}		
		$.ikt_grid_conf.conf.altable = $.ikt_grid_conf.opciones.altable;  
        $.ikt_grid_conf.conf.editable = $.ikt_grid_conf.opciones.editable;  
        $.ikt_grid_conf.conf.bajable = $.ikt_grid_conf.opciones.bajable;  
        $.ikt_grid_conf.conf.getCamposExtras = $.ikt_grid_conf.opciones.getCamposExtras;  
        $.ikt_grid_conf.conf.altaestablecer = $.ikt_grid_conf.opciones.altaestablecer;  
		$.ikt_grid_conf.conf.multiselect = $.ikt_grid_conf.opciones.multiselec;  
		$.ikt_grid_conf.conf.modo = $.ikt_grid_conf.opciones.modo;  
		$.ikt_grid_conf.conf.busqueda = $.ikt_grid_conf.opciones.busqueda;  
		if ($.ikt_grid_conf.opciones.titulo!='')
		{$.ikt_grid_conf.conf.caption = $.ikt_grid_conf.opciones.titulo;}
		$.ikt_grid_conf.conf.Guardado = $.ikt_grid_conf.opciones.Guardado;  
		$.ikt_grid_conf.conf.noGuardado = $.ikt_grid_conf.opciones.noGuardado;  
        $('#'+$.ikt_grid_conf.opciones.grid_id).ikt_grid($.ikt_grid_conf.conf,$.ikt_grid_conf.opciones);        
    },
    conf:
        {    
            sortname: "", 
            sortorder: "",
            height: "",
            gridComplete:function (){},
            ondblClickRow: function () {},
            onSelectRow: function () {},    
            colModel:[]        
        },
    getPropiedad: function (grid_id, propiedad)
    {
        propiedad = propiedad.toLowerCase();
        return $("#"+grid_id)[0][propiedad];
    },
    setPropiedad: function (grid_id, propiedad, valor)
    {
        propiedad = propiedad.toLowerCase();
        $("#"+grid_id)[0][propiedad] = valor;    
    },
    addFila: function (grid_id)
    {
        return $("#"+grid_id)[0].alta();
        
    },  
    delFila: function (grid_id)
    {
        return $("#"+grid_id)[0].baja();
    },
	actualizar: function (grid_id)
	{
		return $("#"+grid_id).trigger("reloadGrid");
	},
	getSeleccion: function (grid_id)
	{
		return $("#"+grid_id).getGridParam('selarrrow');
	},
	getFilasID: function (grid_id)
	{	
		return $("#"+grid_id).getDataIDs();
	},
	getSelFila: function (grid_id)
	{
		return $("#"+grid_id).getGridParam('selrow')
	},	
	seleccionarFila: function (grid_id,id)
	{
		return jQuery("#"+grid_id).setSelection(id);
	},	
	seleccionarFilas: function (grid_id,ids)
	{
		 $.each(ids, function() {
			$.ikt_grid_conf.seleccionarFila(grid_id,this)
		 })	
	},	
	selPrimeraFila: function (grid_id)
	{
		return jQuery("#"+grid_id).setSelection($("#"+grid_id+" tr:first").attr("id"));
	},	
	vueltaPestaña: function (grid_id,campoOculto)
	{
		// campoOculto es un objeto con "n" campos ocultos
		campoOculto = campoOculto.elementos;
		if ($.ikt_grid_conf.getPropiedad(grid_id,'estado')=='L' && $.ikt_grid_conf.getPropiedad(grid_id,'filaedit')!='new')
		{
            if($("#"+campoOculto[0].id).valor() == ""){
                $.ikt_grid_conf.selPrimeraFila(grid_id);
				var miFilaSel = $.ikt_grid_conf.getSelFila(grid_id);
				miFilaSel = miFilaSel==null?'':miFilaSel;
				$("#"+campoOculto[0].id).attr("value",miFilaSel);
            }
            else{
                $.ikt_grid_conf.seleccionarFila(grid_id,$("#"+campoOculto[0].id).valor());
            }
            if( $('#'+grid_id+' tr:first').attr('id')==null) {$("#"+campoOculto[0].id).attr("value","")};
			$.each(campoOculto, function() {
					if (this.id != campoOculto[0].id)
					{
						$("#"+this.id).attr("value","");
					}
				}	
			)
		}
	},
	setColData: function (grid_id, row_id, col_id, valor)
	{
		var miValor ={};
		miValor[col_id] = valor;
		$("#"+grid_id).setRowData(row_id, miValor);
	},
	getFilaData: function (grid_id, row_id)
	{
		return $("#"+grid_id).getRowData(row_id);
	},	
    getCamposExtras:
    {
        inicializar: function ()
        {
           return {
            elementos:[],
            add: function (id, valor)
            {
              var campoextra = {'id':id, 'valor':valor}; 
              this.elementos.push(campoextra);
            }
           }
        }
    },
	campoOculto: function ()
	{
	   return {
		elementos:[],
		add: function (id)
		{
		  var campooculto = {'id':id}; 
		  this.elementos.push(campooculto);
		}
	   }	
	},
    where:
    {
        inicializar: function ()
        {
           return {
            elementos:[],
            add: function (id, valor)
            {
              var where = {'id':id, 'valor':valor}; 
              this.elementos.push(where);
            }
           }
        }
    },    
    validaExtra:
    {
        tipos: {'error':'errores','alerta':'alertas'},
        inicializar: function ()
        {
           return {
            valElementos:{ "errores": [], "alertas": [] },
            add: function (valor, tipo)
            {
              this.valElementos[tipo].push(valor); // Se añade el error o alerta
            }
           }
        }    
    }
    
});
$.extend({
      ikt_grid:  
      {
		inicializar: function ()
		{
        // Se inicializa el grid con los valores por defecto
        var settings={
            opciones:
                {
                where:function (obj){return obj},
				where_establecer: function (){
					var miWhereGrid = "'grid_id':'"+this.grid_id+"'";
					//this.where($.ikt_grid_conf.getCamposExtras.inicializar()).elementos;
					$.each(this.where($.ikt_grid_conf.getCamposExtras.inicializar()).elementos, function() {
						miWhereGrid += ",'"+this.id+"':'"+this.valor+"'";
					});				
					return miWhereGrid;
				},
                altura:100,
				numFilas:-1,
                colOrd:"",
                colOrdTipo:"",
                ventana:"",
                grid_id:"",
                gridCargado:function (){},
                alSelFila:function () {},
                alDblClickFila:function () {},
                ctlCampoEditable:function () {},
                grabarGrid: function () {},
                instanciarControles: function () {},
                getCamposExtras: function () {return {elementos:[]}},
                validaExtra: function () {return { "errores": [], "alertas": [] };},
                altaestablecer: function () {return {}},
				piegrid:false,
                altable:false,
                editable:false,
                bajable:false,
				multiselec:false,
				busqueda:false,
				modo:'',
				titulo:'',
				Guardado: function (obj) {return true;},
				noGuardado: function (obj) {return true;}
                },
             conf:
                {
                colModel:[]
                }
        };
        $.extend($.ikt_grid_conf,settings);		
			return $.ikt_grid_conf;
		}
      }
});
 