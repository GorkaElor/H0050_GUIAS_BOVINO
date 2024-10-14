/************************* VALORES POR DEFECTO *************************/

var ikt_formulario_conf = {
	inicializar: function (){
		return {	
			"formulario_id" : "",
			"source" : "", // por ejemplo, Edi_XXX.aspx
			"instanciar_controles" : function (){return;},
			"CamposExtras" : function (obj){return obj;}, // datos extras para la llamada al GetEdicion
			"CamposExtrasSave" : function (obj){return obj;}, // datos extras para la llamada al Save
			"bloquearEdicion" : true, // carga por defecto los botones de Editar / Aceptar - Cancelar
			"guardado" : function (obj){return;},
			"noGuardado": function(obj) { return; },
			"cancelado": function() { return; },
			"cargado": function(obj) { return; },
			"guardaAsync":false,
			"modo" : 'M',
			"valida_usuario" : function(valRes){
				return valRes;
            },
			"valoresAltaEstablecer": null,
			"bloquearFormulario": null,
			"formatoBloqueo": ikt_formulario_conf.formatoBloqueo.etiquetas,
			"marcarCamposObligatorios" : false,
			"mostrar" : function (){
				$("#"+this.formulario_id).ikt_form(this);                  
			}
		};
	},
	formatoBloqueo : {
	    'etiquetas' : 0,
	    'cajas' : 1
	}
};

$.widget("ui.ikt_form", {
    version: "@2.0",
    getVersion: function() {
        return this.version;
    },
    _alertEL: null,
    _datos_form: {},
    _init: function() {
        var self = this;
        var options = this.options;

        this._loadLabels();
        if (options.modo == "M") {
            this._loadData();
        }
        else {
            if ($.isFunction(options.valoresAltaEstablecer)) {
                var valAlta = $.Callbacks();
                var data = new Object();
                valAlta.add(options.valoresAltaEstablecer(data));
                valAlta.add(this._loadData(data));
                valAlta.fire()
            }
        }

        if ($.isFunction(options.instanciar_controles)) {
            options.instanciar_controles.call(this, self._datos_form);
        }
        this._setFieldsTabIndex();

        $("#" + options.formulario_id + "_loading").css("display", "none");
        $("#" + options.formulario_id).css("display", "block");
        if (options.bloquearEdicion) {
            self.formatoBloqueo = options.formatoBloqueo;

            if (!$.isFunction(options.bloquearFormulario)) {
                self.bloquearFormulario();
            }
            else {
                options.bloquearFormulario.call(self);
            }

            this._initButtons();
            var botonera = $("#botonera" + options.formulario_id);
            var alertEL;
            if ($(".alertaEdicion", $(botonera)).size() == 0) {
                alertEL = $('<div class="ui-state-highlight ui-corner-all alertaEdicion" style="display:inline-block; font-size:1.1em;"><p style="margin:auto;padding:0.4em 1em;"><span class="ui-icon ui-icon-info" style="float: left; margin-right: .3em;"></span><span class="textoAlerta">' + $.Literales['72125'] + '</span></p></div>').toggle(false).appendTo($("body"));
            }
            else {
                alertEL = $(".alertaEdicion", $(botonera));
            }
            self._alertEL = alertEL;
        }
        else {
            $("#botonera" + options.formulario_id).toggle(false);
        }

        if ($('#' + options.formulario_id).parent(".ui-dialog-content").size() > 0) {
            $('#' + options.formulario_id).parent(".ui-dialog-content").ikt_dialogo("abrir");
        }



    },
    _loadLabels: function() {
        var identificador = '';
        var self = this;
        var options = this.options;
        var formulario_id = options.formulario_id;

        var miLiteral = '';
        $("#" + formulario_id).find(":not(div,form,ul,li,fieldset,table,thead,tbody,th,tr,td, col, colgroup, input:text, button, button>span)").each(function() {
            identificador = $(this).attr("id") != null ? $(this).attr("id") : "";
            try {
                identificador = identificador.split('_jqLit_')[1];
                miLiteral = $.Literales[identificador] == undefined ? "" : $.Literales[identificador];
                if (miLiteral != "") $(this).text(miLiteral);

                if ($(this).is("label") && options.marcarCamposObligatorios && $(this).parent("li").hasClass("O")) {
                    var text = $(this).text();
                    $(this).attr("title", $.Literales['99999']).html(text + '<span title="' + $.Literales['99999'] + '" class="ui-icon ui-icon-bullet"></span>');
                    if ($(this).parents(".formularioEdicion").find("#campoObligatorioLegend").size() != 0) {
                        $(this).parents(".formularioEdicion").find("#campoObligatorioLegend").remove();
                    }
                    $(this).parents(".formularioEdicion").append('<p id="campoObligatorioLegend" style="text-size:0.8em;font-style:italic"><span class="ui-icon ui-icon-bullet" style="display:inline-block"></span>' + $.Literales['99999'] + '</p>');
                }
            } catch (err) {
                identificador = '';
            }
        });
    },
    _loadData: function(obj) {
        var self = this;
        var options = this.options;

        if (obj == null) {
            self._datos_form = {};

            var miAjax = $.ikt_ajax_obj.inicializar();
            miAjax.pagina = options.source + "/GetEdicion_" + options.formulario_id;
            miAjax.async = false;
            var iktdialogparam;
            iktdialogparam = options.CamposExtras({});
            iktdialogparam.hash = viewHash;

            miAjax.parametros = { 'data': {} };

            $.extend(true, miAjax.parametros.data, iktdialogparam);

            miAjax.correcto = function(objeto) {
                var data = JSON.parse(objeto.responseText).d;
                if (data != null) {
                    self._datos_form = data.data;
                    self._set_FData(data.data);
                    if ($.isFunction(options.cargado)){
						options.cargado(data.data);
					}
                }
            };
            miAjax.error = function(objeto) {
                self._datos_form = objeto;
            };
            miAjax.enviar();
        }
        else {
            self._datos_form = obj;
            self._set_FData(obj);
        }
    },
    _set_FData: function(data) {
        var self = this;
        var options = this.options;

        var o = data;
        for (var k in o) {
            var id = "#" + k.toUpperCase();
            if ($(id, self.element).length > 0) {
                if ($(id, self.element).attr("type") == "checkbox" || $(id, self.element).attr("type") == "radio") {
                    $(id, self.element).attr("checked", (o[k] != null && o[k] != "" && o[k] != 0 && o[k] != "False" && o[k] != "false" && o[k] != false ? true : false))
                } else {
                    $(id, self.element).attr("value", o[k]);
                }
            } else {
                if (id.indexOf(getSufijo()) > 0 && k.toUpperCase().indexOf(getSufijo()) > 0) {
                    id = id.replace(getSufijo(), "");
                    if ($(id, self.element).length > 0) $(id, self.element).attr("value", o[k]);
                }
            }
        }
    },
    _get_FData: function(obj) {
        var self = this;
        var options = this.options;

        var campos = "";
        var nombre = "";
        var valor = "";

        $("#" + options.formulario_id + " :input").not(".dontSendData").each(function() {
            nombre = $(this).attr("name") != null ? $(this).attr("name") : "";
            if ($(this).attr("type") == "checkbox") {
                valor = $(this).valor() != null && $(this).is(":checked") ? true : false;
            } else if ($(this).attr("type") == "radio") {
                valor = $("input[name='" + nombre + "']:checked", $("#" + options.formulario_id)) != null ? $("input[name='" + nombre + "']:checked").val() : "";
            } else {
                valor = $(this).valor() != null ? $(this).valor() : "";
            }
            if (nombre !== "") {
                obj[nombre] = valor;
            }
        });
        return obj;
    },
    recargarForm: function() {
        //recargar datos de formulario
        var self = this;
        var options = this.options;
        var formulario_id = options.formulario_id;

        $("#" + formulario_id + "_loading").css("display", "block");
        $("#" + formulario_id).css("display", "inherit;");

        // En caso de tener alertas o errores en el formulario se establecen de nuevo
        $("#" + formulario_id + " input").each(function() {
            if ($(this).hasClass("ui-state-error") && !$(this).hasClass("text_gris"))
            { $(this).attr('class', 'text_blanco'); }
        });
        if (self.options.modo == "M") {
            this._loadData();
        }
        else {
            this._resetFields();
        }

        $("#" + formulario_id + "_loading").css("display", "none");
        $("#" + formulario_id).css("display", "inherit;");


        this.ocultarAlerta();

    },
    _bloquearFormulario: function() {
        var self = this;
        var options = this.options;
        var formulario_id = options.formulario_id;
        var botonera = "#botonera" + formulario_id;
        var e;

        if (!$.isFunction(options.bloquearFormulario)) {
            var bck = $("#" + formulario_id).css("background-color");
            $("form", "#" + formulario_id).find("input,select,textarea,a,.ui-button").each(function(i, el) {
                e = $(el);
                e.attr("readonly", "readonly");
                e.css({
                    "border": "none",
                    "background-color": bck
                });
                if (e.hasClass("ui-button")) {
                    e.toggle(false);
                }
            }
              );

            $("label", "#" + formulario_id).css({ "font-weight": "bold" });
            $("form", "#" + formulario_id).find("input:checkbox, input:radio").each(function(i, el) {
                $(el).attr("disabled", "disabled");
            });
            $("form", "#" + formulario_id).find(".hasDatepicker").datepicker("destroy");
            $("form", "#" + formulario_id).find(".ui-state-error").removeClass("ui-state-error");
            $("form", "#" + formulario_id).find(".ui-corner-all").removeClass("ui-corner-all");

            $(document).find(".divArbol li a, .ui-accordion h3, .ui-tabs-nav a, .wijmo-wijmenu-link, .leftContentBar .ui-button, .divOcultarArbol .ui-button, .contentHeaderClose, .searchBar a, .buttonBar .ui-button, .grid .ui-pg-button, .gridTable").each(function() {
                $(this).unbind('click', clickHandler);
            });

            $(self._alertEL).fadeOut();

        }
        else {
            options.bloquearFormulario.call(self);
        }
    },
    _bloquearFormularioCajas: function() {
        var self = this;
        var options = this.options;
        var formulario_id = options.formulario_id;
        var botonera = "#botonera" + formulario_id;
        var e;

        if (!$.isFunction(options.bloquearFormulario)) {
            var bck = $("#" + formulario_id).css("background-color");
            $("form", "#" + formulario_id).find("input,select,textarea,a,.ui-button").each(function(i, el) {
                e = $(el);
                e.attr("readonly", "readonly");
                e.css({
                    "background-color": "InactiveBorder"
                });
                if (e.hasClass("ui-button")) {
                    e.toggle(false);
                }
            });

            //$("label", "#" + formulario_id).css({ "font-weight": "bold" });
            $("form", "#" + formulario_id).find("input:checkbox, input:radio").each(function(i, el) {
                $(el).attr("disabled", "disabled");
            });
            $("form", "#" + formulario_id).find(".hasDatepicker").datepicker("destroy");
            $("form", "#" + formulario_id).find(".ui-state-error").removeClass("ui-state-error");
            $("form", "#" + formulario_id).find(".ui-corner-all").removeClass("ui-corner-all");
            $(document).find(".divArbol li a, .ui-accordion h3, .ui-tabs-nav a, .wijmo-wijmenu-link, .leftContentBar .ui-button, .divOcultarArbol .ui-button, .contentHeaderClose, .searchBar a, .buttonBar .ui-button, .grid .ui-pg-button, .gridTable").each(function() {
                $(this).unbind('click', clickHandler);
            });

            $(self._alertEL).fadeOut();
        }
        else {
            options.bloquearFormulario.call(self);
        }
    },
    _desbloquearFormulario: function() {
        var self = this;
        var options = this.options;
        var formulario_id = options.formulario_id;
        var botonera = "#botonera" + formulario_id;
        var e;

        $("form", "#" + formulario_id).find('input,select,textarea,a,.ui-button').not(".text_gris").each(function(i, el) {
            e = $(el);
            // el estado readonly de los combobox es gestionado directamente por el plugin de combobox, atributo inputReadonly
            if ($(e).data("combobox") == undefined) {
                e.removeAttr("readonly");
            }
            else {
                // restaurar el atributo de lectura original del combobox
                e.attr("readonly", $(e).data("combobox").options.inputReadonly);
            }
            e.removeAttr("style");
            if (e.hasClass("ui-button")) {
                e.toggle(true);
            }
        }
        );
        $("form", "#" + formulario_id).find("input:checkbox, input:radio").each(function(i, el) { $(el).removeAttr("disabled") });
        $("label", "#" + formulario_id).css({ "font-weight": "normal" });

        $(document).find(".divArbol li a, .ui-accordion h3, .ui-tabs-nav a, .wijmo-wijmenu-link, .leftContentBar .ui-button, .divOcultarArbol .ui-button, .contentHeaderClose, .searchBar a, .buttonBar .ui-button, .grid .ui-pg-button, .gridTable").not(function() {
            if ($(this).parents("#" + formulario_id).size() > 0 || $(this).parents(botonera).size() > 0) {
                return true;
            }
            return false;
        }).each(function() {
            $(this)
                .bind('click', { self: self, elementID: formulario_id }, clickHandler);
            //$(this)
            //.on('click', { self: self, elementID: formulario_id }, clickHandler);
            var lastEl = $(this).data("events").click.splice($(this).data("events").click.length - 1, 1);
            $(this).data("events").click.splice(0, 0, lastEl[0]);
        });

        if ($.isFunction(options.instanciar_controles)) {
            options.instanciar_controles.call(this, self._datos_form);
        }
    },
    _initButtons: function() {
        var self = this;
        var options = this.options;
        var formulario_id = options.formulario_id;

        $(".btnEditar", "#botonera" + formulario_id).button({ "label": $.Literales['50010'] }).bind('click', function() {
            self._desbloquearFormulario();
            $(".btnAceptar, .btnCancelar, .btnEditar, .btnLibre", "#botonera" + formulario_id).toggle();
        });
        $(".btnAceptar", "#botonera" + formulario_id).button({ "label": $.Literales['50015'] }).toggle(false).bind('click', function() {
            self.guardar();
        });
        $(".btnCancelar", "#botonera" + formulario_id).button({ "label": $.Literales['50016'] }).toggle(false).bind('click', function() {
            if ($.isFunction(options.cancelado)) {
                options.cancelado.call(self);
            }
            self.recargarForm();
            self.bloquearFormulario();

            $(".btnAceptar, .btnCancelar, .btnEditar, .btnLibre", "#botonera" + formulario_id).toggle();
        });
    },
    _setFieldsTabIndex: function() {
        $(':input[type=text]:visible, :input[type=submit]:visible, :input[type=reset]:visible, :radio:visible, :checkbox:visible, select:visible, textarea:visible', "#" + this.options.formulario_id).each(function(index, element) {
            $(element).attr("tabindex", index + 1);
        });
    },
    guardar: function() {
        var self = this;
        var options = this.options;
        var formulario_id = options.formulario_id;

        var valRes = { "errores": [], "alertas": [] };
        valRes = Validacion(valRes, formulario_id);
        //validaciones personalizadas por usuario
        valRes = options.valida_usuario(valRes);
        if (valRes.errores.length <= 0) {
            var miAjax = $.ikt_ajax_obj.inicializar();
            miAjax.pagina = options.source + "/Save_" + formulario_id;
            miAjax.async = options.guardaAsync;

            var iktdialogparam;
            iktdialogparam = options.CamposExtras({});
            iktdialogparam.hash = viewHash;
            iktdialogparam.modo = options.modo;

            iktdialogparam = options.CamposExtrasSave(iktdialogparam);

            miAjax.parametros = { 'data': {} };
            $.extend(true, miAjax.parametros.data, iktdialogparam);

            var miData = self._get_FData(miAjax.parametros.data);

            miAjax.correcto = function(objeto) {
                var data = JSON.parse(objeto.responseText).d;
                if (data.errores == null ) {
                    // Se llama a la función libre
                    if (options.bloquearEdicion) {
                        $(".btnAceptar, .btnCancelar, .btnEditar, .btnLibre", "#botonera" + formulario_id).toggle();
                        self.bloquearFormulario();
                    }
                    options.guardado(data);
                    if ($('#' + options.formulario_id).parent(".ui-dialog-content").size() > 0) {
                        $('#' + options.formulario_id).parent(".ui-dialog-content").ikt_dialogo("cerrar");
                    }
                    valRes.alertas = data.alertas != null ? data.alertas : valRes.alertas;
                    if (valRes.alertas != null && valRes.alertas.length > 0) jAlert(creaDivErrores(valRes), $.Literales['50066']);
                } else {
                    valRes.errores = data.errores != null ? data.errores : valRes.errores;
                    valRes.alertas = data.alertas != null ? data.alertas : valRes.alertas;
                    jAlert(creaDivErrores(valRes), $.Literales['50066']);
                    options.noGuardado(data);
                }
            };
            miAjax.error = function(objeto) {
                valRes.errores.push(objeto.responseText);
                jAlert(creaDivErrores(valRes), $.Literales['50067']);
            };
            miAjax.enviar();
        }
        else {
            jAlert(creaDivErrores(valRes), $.Literales['50066']);
        }
    },
    getModo: function() {
        return this.options.modo;
    },
    setModo: function(modo) {
        this.options.modo = modo;
        this._init;
    },
    destroy: function() {
        var self = this;
        $(self._alertEL).remove();
        $.Widget.prototype.destroy.call(this);
    },
    mostrarAlerta: function(textoAlerta, duracion) {
        var self = this;
        var container = $("#" + self.options.formulario_id);
        var botonera = $("#botonera" + self.options.formulario_id);
        var pos = {};

        if ($(botonera).children(".ui-button:visible").size() == 0) {
            pos.of = $(botonera);
            pos.at = "left center";
        }
        else {
            pos.of = $(botonera).children(".ui-button:visible").last();
            pos.at = "right center";
        }
        pos.my = "left center";
        pos.using = function(calcPos) {
            $(this).css({ top: calcPos.top, left: calcPos.left + 10 });
        };

        $(self._alertEL).find(".textoAlerta").text(textoAlerta);
        $(self._alertEL).css({ "margin": "0.3em" }).toggle(true).position(pos);
        $(self._alertEL).toggle(false).fadeIn();
        if (duracion) {
            setTimeout(function() {
                $(self._alertEL).fadeOut();
            }, duracion);
        }
    },
    ocultarAlerta: function() {
        var self = this;
        $(self._alertEL).toggle(false);
    },
    bloquearFormulario: function() {
        var self = this;
        switch (self.formatoBloqueo) {
            case ikt_formulario_conf.formatoBloqueo.cajas:
                self._bloquearFormularioCajas();
                break;
            case ikt_formulario_conf.formatoBloqueo.etiquetas:
                self._bloquearFormulario();
                break;
            default:
                self._bloquearFormulario();
        }
    },
    desbloquearFormulario: function() {
        var self = this;
        self._desbloquearFormulario();
    },
    set_FData: function(data) {
        var self = this;
        self._set_FData(data);
    },
    get_FData: function(obj) {
        var self = this;
        return self._get_FData(obj);
    },
    _resetFields: function() {
        var self = this;
        $("input", self.element).each(function(i, el) {
            $(el).val("");
        })
    },
    loadLabels: function() {
        var self = this;
        self._loadLabels();
    }
});
