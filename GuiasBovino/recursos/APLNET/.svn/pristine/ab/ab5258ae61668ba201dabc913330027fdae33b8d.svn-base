// Widget para crear ventanas de accordeaon dinámicas
var ikt_dinaccor_conf = {
    inicializar: function() {
        return {
            idElemento: '',
            active: 0,
            animate: {},
            collapsible: false,
            disabled: false,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: { "header": "ui-icon-triangle-1-e", "activeHeader": "ui-icon-triangle-1-s" },
            url: '',
            gifCargando: '',
            msgCargando: 'Cargando el DINNACCOR...',
            params: {},
            getDinaccor: function() {
                return {
                    cachear: false,
                    precargar: false,
                    itemsTag: "<div/>",
                    itemsCssClass: "dinAccorItem",
                    titlesCssClass: "titdinAccorItem",
                    titlesTag: "<h3/>",
                    accorItems: new Array(),
                    add_item: function(id, tit, pag,parametros) {
                        var item = new Object();
                        item.tituloItem = tit;
                        item.idItem = id;
                        item.cargado = false;
                        item.pagina = pag;
                        item.parametros = parametros;
                        this.accorItems.push(item);
                    }
                };

            },
            dinaccorData: null,
            add_parametro: function(id, valor) {
                this.params[id] = valor;
            },
            mostrar: function() {
                if ($("#" + this.idElemento).size() > 0) {
                    $("#" + this.idElemento).ikt_dinaccor(this);
                } else {
                    $('<div id="' + this.idElemento + '"></div>').ikt_dinaccor(this);
                }
            }
        };
    }
};
$.widget("ui.ikt_dinaccor", {
    options: {
        active: 0,
        animate: {},
        collapsible: false,
        disabled: false,
        event: "click",
        header: "> li > :first-child,> :not(li):even",
        heightStyle: "auto",
        icons: { "header": "ui-icon-triangle-1-e", "activeHeader": "ui-icon-triangle-1-s" },
        url: '',
        gifCargando: '',
        dinaccorData: null,
        msgCargando: 'Cargando el DINNACCOR...',
        params: {}
    },
    dinaccorData: null,
    itemActive: null,
    getItemActive: function() {
        var index = 0;
        if (!isNaN(this.options.active)) index = this.options.active;
        if (this.itemActive == null) this.itemActive = this.dinaccorData.accorItems[index];
        return this.itemActive;
    },
    _blockScreen: function(block) {
        var self = this;
        var src = self.gifCargando != null && self.gifCargando != '' ? self.gifCargando : "/recursos/APLNET/css/NASDAP/images/ajax-loader.gif";
        if (block) {
            $.blockUI({ message: '<h1><img src="' + src + '" /> ' + self.msgCargando + '</h1>' });
        } else {
            $.unblockUI();
        }
        return true;
    },
    getItemByIndex: function(itemIndex) {
        return this.dinaccorData.accorItems[itemIndex];
    },
    toogleItem: function(itemIndex, toggleMode, activar) {
        //tengo manos de cerdo y escribí mal el tooglwe por eso esta dos veces
        toogleItem(itemIndex, toggleMode, activar)
    },
    toggleItem: function(itemIndex, toggleMode, activar) {
        var self = this;
        var underlyingEl = self.element;
        var item = this.getItemByIndex(itemIndex);
        $("#titDinaccorItem_" + item.idItem, $(underlyingEl)).toggle(toggleMode);

        if (self.options.collapsible) {
            $("#dinaccorItem_" + item.idItem, $(underlyingEl)).toggle(toggleMode);
            if (toggleMode) {
                $("#titDinaccorItem_" + item.idItem, $(underlyingEl)).removeClass("header")
                $("#titDinaccorItem_" + item.idItem, $(underlyingEl)).addClass("activeHeader");
                $("#titDinaccorItem_" + item.idItem, $(underlyingEl)).find(".ui-accordion-header-icon").removeClass("ui-icon-triangle-1-e");
                $("#titDinaccorItem_" + item.idItem, $(underlyingEl)).find(".ui-accordion-header-icon").addClass("ui-icon-triangle-1-s");
            }
            else {
                $("#titDinaccorItem_" + item.idItem, $(underlyingEl)).removeClass("activeHeader")
                $("#titDinaccorItem_" + item.idItem, $(underlyingEl)).addClass("header");
                $("#titDinaccorItem_" + item.idItem, $(underlyingEl)).find(".ui-accordion-header-icon").addClass("ui-icon-triangle-1-e");
                $("#titDinaccorItem_" + item.idItem, $(underlyingEl)).find(".ui-accordion-header-icon").removeClass("ui-icon-triangle-1-s");
            }
        } else {
            if (toggleMode) $(underlyingEl).accordion("option", "active", itemIndex);
            else $(underlyingEl).accordion("option", "active", this.options.active);
            $(underlyingEl).accordion("refresh");
        }

    },
    refreshItem: function(itemIndex, activar) {//por defecto se visualiza
        var self = this;
        var underlyingEl = self.element;
        var dinaccorItem = self.dinaccorData.accorItems[itemIndex];
        this.cargarItem(self._crearURL(dinaccorItem), dinaccorItem.idItem);
        if (activar == null || activar) {
            $("#dinaccorItem_" + dinaccorItem.idItem, $(underlyingEl)).toggle(true);
            $("#titDinaccorItem_" + dinaccorItem.idItem, $(underlyingEl)).toggle(true);
            if (!self.options.collapsible) {
                $("#" + self.idElemento).accordion("option", "active", itemIndex);
                $(underlyingEl).accordion("refresh");
            }

        }
    },
    cargarItem: function(urlPag, idItem) {
        var self = this;
        var underlyingEl = self.element;
        self._blockScreen(true);
        var recogerPag = {
            dataType: "html",
            type: "post",
            async: true,
            contentType: "text/html; charset=utf-8",
            url: urlPag,
            complete: function(htmldata, stat) {
                $("#dinaccorItem_" + idItem, $(underlyingEl)).html(htmldata.responseText);
                self._blockScreen(false);

            }
        };
        // Se realiza la llamada ajax
        $.ajax(recogerPag);
    },
    _cargaItemIni: function(urlPag, item) {
        var self = this;
        var underlyingEl = self.element;
        var recogerPag = {
            dataType: "html",
            type: "post",
            async: false,
            contentType: "text/html; charset=utf-8",
            url: urlPag,
            complete: function(htmldata, stat) {
                $("#dinaccorItem_" + item, $(underlyingEl)).html(htmldata.responseText);
            }
        };
        // Se realiza la llamada ajax
        $.ajax(recogerPag);
    },
    _crearURL: function(dinaccorItem) {
        var urlPag = dinaccorItem.pagina + "?";
        for (var param in dinaccorItem.parametros) {
            if (dinaccorItem.parametros.hasOwnProperty(param)) {
                if (urlPag == dinaccorItem.pagina + "?") urlPag = urlPag + param + "=" + dinaccorItem.parametros[param];
                else urlPag = urlPag + "&" + param + "=" + dinaccorItem.parametros[param];
            }
        }
        return urlPag;
    },
    _cargarDatos: function() {
        var self = this;
        var underlyingEl = self.element;
        var indexIni = isNaN(self.options.active) ? 0 : self.options.active
        for (var itemIndex = 0; itemIndex < self.dinaccorData.accorItems.length; itemIndex++) {
            var dinaccorItem = self.dinaccorData.accorItems[itemIndex];
            jQuery(self.dinaccorData.titlesTag, {
                'id': 'titDinaccorItem_' + dinaccorItem.idItem,
                'html': '<span style="width:100%" rel="' + itemIndex + '">' + dinaccorItem.tituloItem + '<span/>',
                'rel': itemIndex
            }).appendTo($(underlyingEl));
            jQuery(self.dinaccorData.itemsTag, {
                'id': "dinaccorItem_" + dinaccorItem.idItem
            }).appendTo($(underlyingEl));
            //establecemos la carga de páginas del accordeon
            if (self.dinaccorData.precargar) {
                dinaccorItem.cargado = true;
                self._cargaItemIni(self._crearURL(dinaccorItem), dinaccorItem.idItem);
                $(underlyingEl).delegate('#titDinaccorItem_' + dinaccorItem.idItem, 'click', function(e) {
                    self.itemActive = self.dinaccorData.accorItems[$(this).attr('rel')]
                });

            } else {
                if (itemIndex == indexIni) {
                    dinaccorItem.cargado = true;
                    self._cargaItemIni(self._crearURL(dinaccorItem), dinaccorItem.idItem);
                }
                $(underlyingEl).delegate('#titDinaccorItem_' + dinaccorItem.idItem, 'click', function(e) {
                    self.itemActive = self.dinaccorData.accorItems[$(this).attr('rel')];
                    if (!self.itemActive.cargado) {
                        self.options.active = itemIndex;
                        self.cargarItem(self._crearURL(self.itemActive), self.itemActive.idItem);
                        self.dinaccorData.accorItems[$(this).attr('rel')].cargado = true;
                    } else {
                        if (!self.dinaccorData.cachear) {
                            self.options.active = itemIndex;
                            self.cargarItem(self._crearURL(self.itemActive), self.itemActive.idItem);
                        }
                    }
                });
            }
        }
        self._blockScreen(false);
        $(underlyingEl).accordion(self.options);
        //Anidimos las clases al final para que no sean sobrescritas por las de l accordeon
        for (var itemIndex = 0;itemIndex < self.dinaccorData.accorItems.length;itemIndex++) {
            var dinaccorItem = self.dinaccorData.accorItems[itemIndex];
            $('#titDinaccorItem_' + dinaccorItem.idItem, $(underlyingEl)).addClass(self.dinaccorData.titlesCssClass);
            $('#dinaccorItem_' + dinaccorItem.idItem, $(underlyingEl)).addClass(self.dinaccorData.itemsCssClass);
        }

    }
    ,
    _init: function(elem) {
        var self = this;
        var underlyingEl = self.element;
        self._blockScreen(true);
        if (this.options.url != "") {
            var recogerdatos = {
                dataType: "json",
                type: "post",
                async: true,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(this.params),
                url: this.options.url,
                complete: function(jsondata, stat) {
                    self.dinaccorData = JSON.parse(jsondata.responseText).d;
                    self.precargar = self.dinaccorData.precargar;
                    self.cachear = self.dinaccorData.chachear;
                    self._cargarDatos();
                }
            };
            // Se realiza la llamada ajax
            $.ajax(recogerdatos);
            //Creamos los elementos htm del accordeon
        } else {
            if (this.dinaccorData != null) {
                self.precargar = self.dinaccorData.precargar;
                self.cachear = self.dinaccorData.chachear;
                self._cargarDatos();
            }
        }
    },
    _create: function() {
        var self = this;
        this.idElemento = $(this.element).attr("id");
        this.active = self.options.active;
        this.animate = self.options.animate;
        this.collapsible = self.options.collapsible;
        this.disabled = self.options.disabled;
        this.event = self.options.event;
        this.header = self.options.header;
        this.heightStyle = self.options.heightStyle;
        this.icons = self.options.icons;
        this.url = self.options.url;
        this.gifCargando = self.options.gifCargando;
        this.msgCargando = self.options.msgCargando;
        this.params = self.options.params;
        this.dinaccorData = self.options.dinaccorData;
    },
    destroy: function() {
        var self = this;
        var options = this.options;
        var underlyingEl = this.element;

        $(underlyingEl).empty();
        $.Widget.prototype.destroy.call(this);
    }
});
