$.widget( "ui.ikt_tagcloud", {
	version: "@1.0",
    getVersion: function(){
	    return this.version;
	},	
	_defaults: {
		ventana:'',
		id:'',
		titulo:'',
		CamposExtras: function (obj){return obj;},
		click: function (id) {return id}
	},	  	
	_settings: {},		
	_create: function() {
		this._settings = $.extend(this._defaults,this.options);
		this._loadData();
	},
	_loadData: function() {
		// Se comprueba si existe el objeto datos_form
		var miVentana = this._settings.ventana.replace('.aspx','')
		var miAjax = $.ikt_ajax_obj.inicializar();
		miAjax.pagina=this._settings.ventana+"/GetNube_"+this._settings.id;
		miAjax.async=false;
		// se incluye el hash
		var iktdialogparam;
		iktdialogparam = this._getCamposExtras;
		iktdialogparam = this._settings.CamposExtras(iktdialogparam);
		iktdialogparam.add('hash',viewHash);
		miAjax.parametros = {'data':{}}
		$.extend(true, miAjax.parametros.data,iktdialogparam.elementos);			
		var mitagcloud = this._settings.id;
		var miclick = this._settings.click;
		var miTitulo = this._settings.titulo;
		miAjax.correcto=function (objeto){
			var data = JSON.parse(objeto.responseText).d
			//create list for tag links
			var ul = $("<ul>").attr("id", "tagList_"+mitagcloud);
			ul.addClass("tagList");
			ul.appendTo("#"+mitagcloud);
			// Se establece el título
			$("#"+mitagcloud+" h2").text(miTitulo);
			//create tags
			$.each(data.tags, function(i, val) {
				//create item
				var li = $("<li>");
				//create link
				$("<a>").text(val.tag).attr({title:"Ver todos las coincidencias de " + val.tag, href:"#"}).appendTo(li);
				//set tag size
				li.children().css("fontSize", (val.freq / 10 < 1) ? val.freq / 10 + 1 + "em": (val.freq / 10 > 2) ? "2em" : val.freq / 10 + "em");
				li.children().click(function ()
				{
					miclick(val.valor);
				})
				//add to list
				li.appendTo("#tagList_"+mitagcloud);
			});
		};
		miAjax.error=function (objeto){
			alert('Ha ocurrido un error en la carga de los procesos')
		};
		miAjax.enviar();
	},
	_getCamposExtras: {
		elementos:{},
		add: function (id, valor)
		{
		  this.elementos[id]=valor;
		}
	}
});

$.extend({
      ikt_tagcloud:  
      {
		inicializar: function ()
		{
			return {
				ventana:'',
				id:'',
				titulo:'',
				CamposExtras: function (obj) {return obj;},
				click: function(id) {return id;},
				mostrar: function ()
				{
					$("#"+this.ventana).ikt_tagcloud("destroy");
					$("#tagList_"+this.id).html('');
					$("#"+this.ventana).ikt_tagcloud({
						ventana:this.ventana+'.aspx',
						CamposExtras: this.CamposExtras,
						id: this.id,
						titulo: this.titulo,
						click: this.click
					});                  
				}
			};
		}
      }
});