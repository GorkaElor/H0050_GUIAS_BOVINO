/************************* VALORES POR DEFECTO *************************/
var ikt_iNettuts = {
    inicializar : function(){
        return {
            colNumber: '',
			maxElementsPerColumn: '',
			columns : '.column',
			widgetSelector: '.widget',
			handleSelector: '.widget-head',
			contentSelector: '.widget-content',
			widgetDefault : {
				movable: true,
				removable: true,
				collapsible: true,
				colorClasses : ['color-yellow', 'color-red', 'color-blue', 'color-white', 'color-orange', 'color-green']
			},
			widgetIndividual : {
			},
			widgetType:function() {
                return {
                    movable: false,
					removable: false,
					collapsible: false
                } 
			},
			addWidgetType : function (wdg)
            {
                this.widgetIndividual[wdg.id] = wdg;
            }
		}
	}
};

/************************* WIDGET *************************/

$.widget("ui.ikt_iNettuts", {
	_self:"",
	_settings:"",
  
	_create: function() {
	    _self = this;
        _settings = this.options ;

		_self._deployColumns();
        _self._addWidgetControls();
        _self._makeSortable();
	},
	_deployColumns:function(){
			$('<div id="columns"></div>').appendTo($(_self.element));
			
			if (_settings.colNumber == ""){
				_settings.colNumber = Math.ceil($(_settings.widgetSelector).length / _settings.maxElementsPerColumn);
			}
			if(_settings.maxElementsPerColumn == ""){
				_settings.maxElementsPerColumn = Math.ceil($(_settings.widgetSelector).length / _settings.colNumber);
			}
			// create columns
			for (i=1; i<=_settings.colNumber;i++){
				$('<ul id="column' + i + '" class="column"></ul>').appendTo("#columns");
			}		
			// adjust column size
			$(_settings.columns, $(_self.element)).css("width", 100/_settings.colNumber + '%');			
			// append elements to column
			$(_settings.widgetSelector).each(function(index, element){
				$(element).appendTo("#column" + Math.ceil( (index + 1) / _settings.maxElementsPerColumn));
			})
			// delete original widget element container
			$(_self.element).children("ul").remove();
	},
	_getWidgetSettings : function (id) {
        return (id&&_settings.widgetIndividual[id]) ? $.extend({},_settings.widgetDefault,_settings.widgetIndividual[id]) : _settings.widgetDefault;
    },
	_attachStylesheet : function (href) {
        return $('<link href="' + href + '" rel="stylesheet" type="text/css" />').appendTo('head');
    },
	_addWidgetControls : function () {            
        $(_settings.widgetSelector, $(_settings.columns)).each(function () {  
            var thisWidgetSettings = _self._getWidgetSettings(this.id);
            if (thisWidgetSettings.removable) {
                $('<a href="#" class="remove">CLOSE</a>').mousedown(function (e) {
                    e.stopPropagation();    
                }).click(function () {
                    
                        $(this).parents(_settings.widgetSelector).animate({
                            opacity: 0    
                        },function () {
                            $(this).wrap('<div/>').parent().slideUp(function () {
                                $(this).remove();
                            });
                        });

                    return false;
                }).appendTo($(_settings.handleSelector, this));
            }

            if (thisWidgetSettings.collapsible) {
                $('<a href="#" class="collapse">COLLAPSE</a>').mousedown(function (e) {
                    e.stopPropagation();    
                }).toggle(function () {
                    $(this).css({backgroundPosition: '-38px 0'})
                        .parents(_settings.widgetSelector)
                            .find(_settings.contentSelector).hide();
                    return false;
                },function () {
                    $(this).css({backgroundPosition: ''})
                        .parents(_settings.widgetSelector)
                            .find(_settings.contentSelector).show();
                    return false;
                }).prependTo($(_settings.handleSelector,this));
            }
        });
        
        $('.edit-box').each(function () {
            $('input',this).keyup(function () {
                $(this).parents(_settings.widgetSelector).find('h3').text( $(this).val().length>20 ? $(this).val().substr(0,20)+'...' : $(this).val() );
            });
            $('ul.colors li',this).click(function () {
                var colorStylePattern = /\bcolor-[\w]{1,}\b/,
                    thisWidgetColorClass = $(this).parents(_settings.widgetSelector).attr('class').match(colorStylePattern)
                if (thisWidgetColorClass) {
                    $(this).parents(_settings.widgetSelector)
                        .removeClass(thisWidgetColorClass[0])
                        .addClass($(this).attr('class').match(colorStylePattern)[0]);
                }
                return false;
            });
        });
    },
    
    _makeSortable : function () {
		$sortableItems = (function () {
			var notSortable = '';
			$(_settings.widgetSelector,$(_settings.columns)).each(function (i) {
				if (!_self._getWidgetSettings(this.id).movable) {
					if(!this.id) {
						this.id = 'widget-no-id-' + i;
					}
					notSortable += '#' + this.id + ',';
				}
			});
			
			return $('> li' + (notSortable != "" ? ':not(' + notSortable + ')' : ''), _settings.columns);
		})();
        
        $sortableItems.find(_settings.handleSelector).css({
            cursor: 'move'
        }).mousedown(function (e) {
            $sortableItems.css({width:''});
            $(this).parent().css({
                width: $(this).parent().width() + 'px'
            });
        }).mouseup(function () {
            if(!$(this).parent().hasClass('dragging')) {
                $(this).parent().css({width:''});
            } else {
                $(_settings.columns).sortable('disable');
            }
        });

        $(_settings.columns).sortable({
            items: $sortableItems,
            connectWith: $(_settings.columns),
            handle: _settings.handleSelector,
            placeholder: 'widget-placeholder',
            forcePlaceholderSize: true,
            revert: 300,
            delay: 100,
            opacity: 0.8,
            containment: 'document',
            start: function (e,ui) {
                $(ui.helper).addClass('dragging');
            },
            stop: function (e,ui) {
                $(ui.item).css({width:''}).removeClass('dragging');
                $(_settings.columns).sortable('enable');
            }
        });
    }
});

