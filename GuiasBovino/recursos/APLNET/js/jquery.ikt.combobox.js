var vopen, vpredata, vmap,vpostmap

(function($) {
    $.widget("ui.combobox", {
        // autocomplete defaults
        defaults: {
            delay: 0,
            minLength: 0,
            cache: null,
            contexto: document,
            source: function(request, response) {
                var options = this.options;
                request.term = request.term == "" ? $((options.campoDes.indexOf("#") == -1 ? "#" + options.campoDes : options.campoDes)).val() : request.term;
                if (request.term == "") {
                    $((options.campoCod.indexOf("#") == -1 ? "#" + options.campoCod : options.campoCod), options.contexto).val('');
                    $((options.campoDes.indexOf("#") == -1 ? "#" + options.campoDes : options.campoDes), options.contexto).val('');
                }
                // bloquear la entrada de texto
                if (options.url != "" && (!options.cache || request.term == "")) {
                    $(".ui-autocomplete:visible").scrollTop(0);
                    var data = "{'data':{'hash':'" + viewHash + "','pterm':'" + request.term + "'"
                    if (options.extraData) {
                        $.each(options.extraData, function(i, item) {
                            data = data + ",'" + i + "':'"
                            if ($(item).length > 0 && (item.charAt(0) == "#" || item.charAt(0) == ".")) {
                                if (options.contexto != "") {
                                    data = data + $(item, options.contexto).valor();
                                }
                                else {
                                    data = data + $(item).valor();
                                }
                            }
                            else {
                                data = data + item;
                            }
                            data = data + "'"
                        });
                    }
                    data = data + "}}"

                    $.ajax({
                        url: options.url,
                        datatype: "json",
                        data: data,
                        type: "post",
                        contentType: "application/json; charset=utf-8",
                        success: function(data) {
                            options.cache = data.d.Items;
                            response($.map(data.d.Items, function(item) {
                                return {
                                    labelMatch: item.label.replace(
									    new RegExp(
										    "^(" +
										    $.ui.autocomplete.escapeRegex(request.term) +
										    ")(?![^<>]*>)(?![^&;]+;)", "gi"
									    ), "<strong>$1</strong>"),
                                    value: item.value,
                                    label: item.label,
                                    dataExtra: item.dataExtra
                                }
                            }));

                        }
                    })
                }
                else {
                    response($.map(options.cache, function(item) {
                        return {
                            labelMatch: item.label.replace(
									    new RegExp(
										    "^(" +
										    $.ui.autocomplete.escapeRegex(request.term) +
										    ")(?![^<>]*>)(?![^&;]+;)", "gi"
									    ), "<strong>$1</strong>"),
                            value: item.value,
                            label: item.label,
                            dataExtra: item.dataExtra
                        }
                    }));
                }
            },
            focus: function(event, ui) {
                var options = $(this).data("autocomplete").options;
                var separador = $(this).data("combobox").options.separador;
                ui.item.label = ui.item.label.replace(eval("/" + separador + "/g"), "");
                $((options.campoDes.indexOf("#") == -1 ? "#" + options.campoDes : options.campoDes)).val(ui.item.label);
                return false;
            },
            select: function(event, ui) {
                // changing val does not trigger change event unless the field has the focus
                var options = $(this).data("autocomplete").options;
                $((options.campoCod.indexOf("#") == -1 ? "#" + options.campoCod : options.campoCod), options.contexto).val(ui.item.value);
                $((options.campoDes.indexOf("#") == -1 ? "#" + options.campoDes : options.campoDes), options.contexto).val(ui.item.label);
                $((options.campoCod.indexOf("#") == -1 ? "#" + options.campoCod : options.campoCod), options.contexto).change();
                options.onSelect(ui.item.value, ui.item.label, ui.item.dataExtra);
                return false;
            },
            open: function(event, ui) {
                var d = new Date();
                vopen = d.getTime();
                if ($(".ui-autocomplete:visible strong:not(:empty)").length > 0) {
                    //there is a match
                    $(".ui-autocomplete:visible").scrollTop($(".ui-autocomplete:visible").scrollTop() + $(".ui-autocomplete:visible strong:not(:empty)").eq(0).position().top);
                }

                return true;
            },
            search: function(event, ui) {
                var options = $(this).data("autocomplete").options;
                if (options.width > 0) {
                    $("#" + $(this).attr("id") + "_comboBox").css("width", options.width);
                    $("#" + $(this).attr("id") + "_comboBox").css("max-width", options.width);
                    $("#" + $(this).attr("id") + "_comboBox").css("min-width", options.width);
                }
                if (options.height > 0) {
                    $("#" + $(this).attr("id") + "_comboBox").css("height", options.height);
                    $("#" + $(this).attr("id") + "_comboBox").css("max-height", options.height);
                    $("#" + $(this).attr("id") + "_comboBox").css("min-height", options.height);
                }
            },
            inputReadonly: false
        },
        //creation of the combobox widget 
        _create: function() {
            var self = this;
            var input = this.element;
            var firstMatch = null;
            // this.settings refers to the variable settings for the component
            // this.options to the options defined on creation
            var empty = {};
            var settings = $.extend(empty, this.defaults, this.options);

            if (settings.extraData) {
                $.each(settings.extraData, function(i, item) {
                    if ($(item).length > 0) {
                        $(item).bind('change', function() {
                            cache = null;
                            $(settings.campoDes, settings.contexto).val("");
                            $(settings.campoCod, settings.contexto).val("");
                            $(settings.campoDes, settings.contexto).data("autocomplete").options.cache = null;
                        });
                    }
                });
            }

            $(settings.campoCod, settings.contexto).addClass("ui-autocomplete-hidden")

            input.autocomplete(settings)
            .data("autocomplete")._renderItem = function(ul, item) {
                return $("<li><a>" + item.labelMatch + "</a></li>")
				.data("item.autocomplete", item)
				.appendTo(ul)
            }

            if (settings.inputReadonly) {
                $(input).addClass("text_gris");
                $(input).removeClass("text_blanco");
                $(input).attr("readonly", true);
            }
            else {
                $(input).addClass("text_blanco");
                $(input).removeClass("text_gris");
                $(input).attr("readonly", false);
            }

            input.autocomplete("widget").attr("id", input.attr("id") + "_comboBox");

            this.button = $("<button type='button'>&nbsp;</button>")
			.attr("tabIndex", -1)
			.attr("title", ($.Literales['50201'] == null || $.Literales['50201'] ==""? "Mostrar todos" : $.Literales['50201']))
			.insertAfter(input)
			.button({
			    icons: {
			        primary: "ui-icon-triangle-1-s"
			    },
			    text: false
			})
			.removeClass("ui-corner-all")
			.addClass("ui-corner-right")
			.addClass("btnComboBox")
			.click(function() {
			    $(this).removeClass("ui-state-hover ui-state-focus").addClass("ui-state-default");
			    // close if already visible
			    if (input.autocomplete("widget").is(":visible")) {
			        input.autocomplete("close");
			        return false;
			    }

			    // pass empty string as value to search for, displaying all results
			    input.autocomplete("search", "");
			    input.focus();
			    return false;
			});


        }
    });
})(jQuery);
$.extend({
      ikt_combobox:  
      {
		inicializar: function ()
		{
			return {
				pagina:'',
				campodes:'',
				campooculto:'',
				contexto:'',
				separador:'',
				extradata: {},
				cache:null,
				ancho:0,
				alto: 0,
				inputReadonly: false,
				onSelect: function(campoCodVal, campoDesVal){
					return true;
				},
				add_extradata: function (id, valor)
				{
					this.extradata[id]=valor;
				},
				mostrar: function ()
				{
					$("#"+this.campodes, this.contexto == ""? document : $("#"+this.contexto) ).combobox({url:this.pagina ,campoDes: '#'+this.campodes, campoCod:'#'+this.campooculto,contexto:(this.contexto == ""? document : $("#"+this.contexto)), extraData: this.extradata, width: this.ancho, height: this.alto, onSelect: this.onSelect, inputReadonly : this.inputReadonly,cache:this.cache});                 
				}
			};
		}
      }
});