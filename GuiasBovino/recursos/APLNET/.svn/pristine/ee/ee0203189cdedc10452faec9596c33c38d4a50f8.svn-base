var ikt_menu_conf = {
    inicializar: function() {
        return {
            "menu_id": "header",
            // coleccion de entradas
            "entries": {},
            // anadir una entrada a la coleccion
            "addEntry": function(entry) {
                this.entries[entry.id] = entry;
            },
            // constructor de entrada
            "entry": function() {
                return {
                    "id": "",
                    "proceso": "",
                    "literal": "",
					"habilitado": true,
                    "entries": {},
                    "onClick": {"ventana":"", "ventanaPar": {}, "tipo":"","conf":{}},
                    "addEntry": function(entry) {
                        this.entries[entry.id] = entry;
                    }
                };
            },
            "mostrar": function() {
                $("#" + this.menu_id).ikt_menu(this);
                var padding = ($(".header").height() - $("#navWijmo>li>a").css("line-height").replace("px", "")) / 2 - 4;
                $("#navWijmo>li>a").css("padding", padding);

                $(window).resize(function() {
                    var padding = ($(".header").height() - $("#navWijmo>li>a").css("line-height").replace("px", "")) / 2 - 4;
                    $("#navWijmo>li>a").css("padding", padding);
                });
            }
        };
    }
};

$.widget("ui.ikt_menu", {
    _create: function() {
        var underlyingEl = this.element;
        var options = this.options;
        var self = this;
        $("#" + options.menu_id).append('<ul id="navWijmo"></ul>');
    },
    _init: function() {
        var underlyingEl = this.element;
        var self = this;
        var options = this.options;

        $.each(options.entries, function(index, element) {
            self._createEntry("#navWijmo", element);
        });

        $("#liSalir").appendTo($("#navWijmo"));
        self._replaceLiterales();

        $("#navWijmo").wijmenu({
            trigger: ".wijmo-wijmenu-item",
            triggerEvent: "click"
        });
    },
    _createEntries: function(parentEl, entries) {
        var self = this;
        var thisElement = $('<ul></ul>').appendTo($(parentEl));
        $.each(entries, function(index, element) {
            self._createEntry(thisElement, element);
        });
    },
    _createEntry: function(parentEl, entry) {
        var self = this;
        if (entry.proceso == "" || (entry.proceso != "" && $.BuscarProcesosUsuarios(entry.proceso))) {
			var thisEntry =$('<li><a></a></li>')
			
            var liID = entry.id;
            var linkID = entry.id + "_jqLit_" + entry.literal;
            $(thisEntry).attr("id", liID);
            $(thisEntry).children("a").eq(0).attr("id", linkID);
            if (entry.habilitado == null || entry.habilitado == false) $(thisEntry).addClass("ui-state-disabled");
            if(entry.icono != undefined){
                $(thisEntry).children("a").eq(0).prepend('<span class="ui-icon ' + entry.icono + ' "></span>');
            }
            thisEntry = $(thisEntry).appendTo($(parentEl));

            $(thisEntry).click(function() {
                if ($.isFunction(entry.onClick)) {
                    entry.onClick.apply(self);
                }
                else {
                    switch (entry.onClick.tipo) {
                        case "0":
                            $('.main').load(entry.onClick.ventana, $.extend({}, { prand: parURLAle() }, entry.onClick.ventanaPar));
                            if (entry.onClick.claseCSS != undefined) {
                                $('.main').attr("class", "main " + entry.onClick.claseCSS);
                            }
                            break;
                        case "1":
                            $(".main").html('');
                            var miDialogo = ikt_dialogo_conf.inicializar();
                            $.extend(true, miDialogo, entry.onClick.conf);
                            miDialogo.mostrar();
                            break;
                    };
                }
            });

            if (!$.isEmptyObject(entry.entries)) {
                self._createEntries(thisEntry, entry.entries);
            };
        }
    },
    _replaceLiterales: function() {
        var options = this.options;
        $('#' + options.menu_id + ' li:not("#liSalir") a').each(function(i, e) {
            identificador = $(this).attr("id") != null ? $(this).attr("id") : "";
            try {
                identificador = identificador.split('_jqLit_')[1];
                miLiteral = $.Literales[identificador] == undefined ? "" : $.Literales[identificador];
                $(this).prepend(miLiteral);
            } catch (err) {
                identificador = '';
            }
        });
    }
});