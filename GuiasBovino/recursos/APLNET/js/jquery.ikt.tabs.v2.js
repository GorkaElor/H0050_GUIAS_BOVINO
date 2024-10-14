var ikt_tabs_conf = {
		inicializar: function ()
		{
			return {
				opciones:{
					'tabId':'',
					'onSelectTab': function () {return true;},
					'busqueda':false
				},
				mostrar: function ()
				{
					$('#'+this.opciones.tabId).ikttabs(this.opciones);   
					$("#Contenido"+this.opciones.tabId+"_loading").css("display","none");
					$("#Contenido"+this.opciones.tabId).css("display","block");					
				},
				busqueda: {'si':true,'no':false}
			};
		}
};
		
$.widget("ui.ikttabs", {
	_defaults: {
		ajaxOptions: {
            error: function(xhr, status, index, anchor) {
                $(anchor.hash).html($.Literales['50067']);
            }
        },
        cache:false,
        select: function(event, ui) {
        }
	},  
	_create: function() {
		var self = this;
		var underlyingEl = this.element;

		var empty = {};
        var settings = $.extend(empty, this._defaults);
		var options = this.options;
		
		settings.select = function(event, ui){
			var isValid = true ;
			$(ui.panel).children('[id^="Contenido"]').not('[id$="_loading"]').toggle(false);
            isValid = options.onSelectTab(event, ui,options.tabId);
            return isValid;
		};
		
		// En principio ventana se le mente desde la definición del objeto,
		// por lo tanto llega ya en options
		$("#"+options.tabId).tabs(settings);
		
		if (options.busqueda)
		{
			$(".abusFlec","#Contenido"+options.tabId).bind('click', function() {
				if ($("#Contenido"+options.tabId+" .busFlec").attr("class") == "busFlec ui-icon ui-icon-circle-triangle-s") {
					$("#searchBody"+options.tabId).css("position","absolute")
					$("#searchBody"+options.tabId).css("width",$("#Contenido"+options.tabId+" .searchBarTitle").innerWidth());
					$("#searchBody"+options.tabId).css("left",$("#Contenido"+options.tabId+" .searchBarTitle").offset().left );    
					$("#searchBody"+options.tabId).css("top",$("#Contenido"+options.tabId+" .searchBarTitle").offset().top + $("#Contenido"+options.tabId+" .searchBarTitle").innerHeight());
					$("#searchBody"+options.tabId).show(); 
					$("#Contenido"+options.tabId+" .busFlec").attr("class", "busFlec ui-icon ui-icon-circle-triangle-n");
				} else {
					$("#searchBody"+options.tabId).hide();      
					$("#Contenido"+options.tabId+" .busFlec").attr("class", "busFlec ui-icon ui-icon-circle-triangle-s");
				}
			});

			$(".busquedatitulo","#Contenido"+options.tabId).bind('click', function() {
				$(".abusFlec","#Contenido"+options.tabId).click();
			});
		}
	}
});
 