/************************* VALORES POR DEFECTO *************************/
var ikt_dialogo_conf = {
    inicializar: function() {
        return {
            "dialogo_id": "",
            "ventana": "",
            "ventanaPar": {},
            "cargaFinalizada": function() { return true; },
            "modal": true,
            "draggable": false,
            "alto": "auto",
            "ancho": "auto",
            "titulo": "",
            "botones": {},
            "aceptar": "", // funcion a ejecutar, solo para dialogos con botones por defecto
            "cancelar": "", // function a ejecutar, solo para dialogos con botones por defecto
            "aceptarBtnLit": "",
            "cancelarBtnLit": "",
            "detectaColisionCon": "",
            "colisionDetectada": "",
            "position": {},
            "salir": null,
            "appendTo": null,
            "mostrar": function() {
                try{this.destroy}catch(e){}
                if (this.dialogo_id == "") {
                    this.dialogo_id = "edicion";
                }

                if ($("#" + this.dialogo_id).size() > 0) {
                    $("#" + this.dialogo_id).ikt_dialogo(this);
                }
                else {
                    $('<div id="' + this.dialogo_id + '"></div>').ikt_dialogo(this);
                }
            }
        };
    }
};

/************************* WIDGET *************************/

$.widget("ui.ikt_dialogo", {
    version: "@2.0",
    getVersion: function() {
        return this.version;
    },
    blockButtonBar: function(block) {
        var self = this;
        var underlyingEl = self.element;

        if (block) {
            if($("#" + $(underlyingEl).attr("id") + '_loading').size() == 0){
                $(underlyingEl).siblings(".ui-dialog-buttonpane").find(".ui-button").button("disable");
                jQuery('<div/>', {
                    'id': $(underlyingEl).attr("id") + '_loading',
                    'class': "dialog_throbber",
                    'display': "none"
                }).appendTo($(underlyingEl).siblings(".ui-dialog-buttonpane"));

                $("#" + $(underlyingEl).attr("id") + '_loading').position({
                    of: $(underlyingEl).siblings(".ui-dialog-buttonpane").find(".ui-button").eq(0),
                    at: "left center",
                    my: "right center",
                    offset: "-2em"
                });
            }
        }
        else {
            $(underlyingEl).siblings(".ui-dialog-buttonpane").find(".ui-button").button("enable");
            $("#" + $(underlyingEl).attr("id") + '_loading').remove();
        }
    },
    _defaults: {
        autoOpen: false,
        overlay: 0,
        resizable: false,
        closeOnEscape: false,
        open: function(event, ui) {
        },
        close: function() {
        },
        appendTo : ".main"
    },
    _init: function() {
        var self = this;
        var underlyingEl = this.element;
        var options = self.options;

        var empty = {};
        var settings = $.extend(empty, self._defaults);
        var _buttons = {};

        if ($.isEmptyObject(options.botones)) {
            options.aceptarBtnLit = options.aceptarBtnLit !== "" ? options.aceptarBtnLit : $.Literales['50015'];
            options.cancelarBtnLit = options.cancelarBtnLit !== "" ? options.cancelarBtnLit : $.Literales['50016'];
            _buttons[options.aceptarBtnLit] = function() {
                if ($.isFunction(options.aceptar)) {
                    options.aceptar.call();
                }
                else {
                    $(underlyingEl).dialog('close');
                    self.destroy();
                }
            };
            _buttons[options.cancelarBtnLit] = function() {
                if ($.isFunction(options.cancelar)) {
                    options.cancelar.call();
                }
                else {
                    $(underlyingEl).dialog('close');
                    self.destroy();
                }
            };
            settings.buttons = _buttons;
        }
        else {
            settings.buttons = options.botones;
        }
        settings.height = options.alto;
        settings.width = options.ancho;
        settings.title = options.titulo;
        settings.modal = options.modal;
        settings.draggable = options.draggable;
        if ($.isEmptyObject(options.position)) {
            settings.position = { "my": "center center", at: "center center", of: window };
        }
        else {
            settings.position = options.position;
        }

        if ($.isFunction(options.salir)) {
            settings.close = options.salir;
        }

        //$(underlyingEl).dialog("destroy");
        $(underlyingEl).dialog(settings);

        $(underlyingEl).load(options.ventana, $.extend({ "prand": parURLAle() }, options.ventanaPar), function(response, status, xhr) {
            options.cargaFinalizada.call();
        }
		);

        $(underlyingEl).keypress(function(e) {
            if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                $(".ui-dialog:visible").find('.ui-dialog-buttonpane').find('button').eq(1).click();
                return false;
            }
        });

        $(underlyingEl).parent().appendTo(settings.appendTo);
    },
    _centrar_ventana: function() {
        var self = this;
        var options = this.options;
        var underlyingEl = this.element;

        $(underlyingEl).dialog('option', 'position', [(($(window).height() - $('#' + options.dialogo_id).height()) / 2) + 'px', (($(window).width() - $('#' + options.dialogo_id).width()) / 2) + 'px']);
    },
    abrir: function() {
        var underlyingEl = this.element;
        var options = this.options;
        var self = this;
        $(underlyingEl).dialog('open');
        if ($.isFunction(options.colisionDetectada)) {
            options.colisionDetectada.call(this, self.colisionaCon(options.detectaColisionCon));
        }
    },
    cerrar: function() {
        var underlyingEl = this.element;
        $(underlyingEl).dialog('close');
    },
    destroy: function() {
        var self = this;
        var options = this.options;
        var underlyingEl = this.element;

        $(underlyingEl).empty();
        $.Widget.prototype.destroy.call(this);
    },
    colisionaCon: function(elements) {
        var rects = this.element;
        var checkWith = $(elements);
        var c = [];

        if (!rects || !checkWith) { return false; }

        rects.each(function() {
            var rect = $(this);

            // define minimum and maximum coordinates
            var rectOff = rect.offset();
            var rectMinX = rectOff.left;
            var rectMinY = rectOff.top;
            var rectMaxX = rectMinX + rect.outerWidth();
            var rectMaxY = rectMinY + rect.outerHeight();

            checkWith.not(rect).each(function(index, el) {
                var otherRect = $(el);
                if (otherRect.is(":visible")) {
                    var otherRectOff = otherRect.offset();
                    var otherRectMinX = otherRectOff.left;
                    var otherRectMinY = otherRectOff.top;
                    var otherRectMaxX = otherRectMinX + otherRect.outerWidth();
                    var otherRectMaxY = otherRectMinY + otherRect.outerHeight();

                    // check for intersection
                    if (rectMinX >= otherRectMaxX ||
                         rectMaxX <= otherRectMinX ||
                         rectMinY >= otherRectMaxY ||
                         rectMaxY <= otherRectMinY) {
                        return true; // no intersection, continue each-loop
                    } else {
                        // intersection found, add only once
                        c.push(el);
                    }
                }
            });
        });
        // return collection
        return c;
    }
});       
       