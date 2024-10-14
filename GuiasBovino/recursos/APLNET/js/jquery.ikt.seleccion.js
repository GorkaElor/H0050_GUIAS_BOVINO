// Widget para las ventanas de seleccion 
var ikt_seleccion = {
    inicializar: function() {
        return { idtextdes: '',
            idtxtoculto: '',
            idElemento: 'edicion',
            modal: true,
            overlay: 0,
            height: 800,
            width: 600,
            heightGrid: 300,
            widthGrid: 550,
            rows: -1,
            resizable: true,
            closeOnEscape: false,
            title: '',
            entidad: '',
            config: 'seleccionconfig',
            sqlnom: '',
            coldes: '',
            pSortColumn: '',
            pSortOrder: 'ASC',
            camposKey: '',
            include: '',
            whereFun: function(obj) { return obj; },
            Guardado: function() { },
            grupo: 'GRIDSEL',
            grulits: 'GEN',
            con: '',
            provider: '',
            literalesBus: '',
            multi: false,
            columnasBD: '',
            columnas: {},
            columna: function() {
                return {
                    ancho: "",
                    id: "",
                    etiqueta: "",
                    alineacion: "",
                    sortable: false,
                    editable: false,
                    altable: false,
                    bajable: false,
                    multiple: false,
                    oculta: false,
                    personalizado: false,
                    control_edicion: [],
                    formatter: "",
                    formatoptions: [],
                    add_control: function(obj) {
                        this.control_edicion.push(obj);
                    },
                    add_evento: function(evento, valor) {
                        var obj = { 'tipo': evento, 'valor': valor };
                        this.eventos.push(obj);
                    }
                };
            },
            addColumna: function(col) {
                this.columnas[col.id] = col;
            },
            mostrar: function() {
                if ($("#" + this.idElemento).size() > 0) {
                    $("#" + this.idElemento).seleccion(this);
                }
                else {
                    $('<div id="' + this.idElemento + '"></div>').seleccion(this);
                }
            }
        }
    }
};
$.widget("ui.seleccion", {
    // These options will be used as defaults
    options: {
        idtextdes: '',
        idtxtoculto: '',
        idElemento: 'edicion',
        modal: true,
        overlay: 0,
        height: 800,
        width: 600,
        heightGrid: 300,
        widthGrid: 550,
        rows: -1,
        resizable: true,
        closeOnEscape: false,
        title: '',
        entidad: '',
        coldes: '',
        pSortColumn: '',
        pSortOrder: 'ASC',
        camposKey: '',
        config: 'seleccionconfig',
        sqlnom: '',
        include: '',
        grupo: 'GRIDSEL',
        grulits: 'GEN',
        con: '',
        provider: '',
        literalesBus: '',
        columnasBD: '',
        columnas: {},
        multi: false,
        whereFun: function(obj) { return obj; },
        Guardado: function() { }
    },
    _blockButtonBar: function(block) {
        var self = this;
        var underlyingEl = self.element;

        if (block) {
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
        else {
            $(underlyingEl).siblings(".ui-dialog-buttonpane").find(".ui-button").button("enable");
            $("#" + $(underlyingEl).attr("id") + '_loading').remove();
        }
    },
    _init: function(elem) {
        var ikt_buttons = {};
        var self = this;
        ikt_buttons[$.Literales['50015']] = function(event) {
            // Se deja en el texto origen
            self._blockButtonBar(true);
            var ids;
            if (!$(this).seleccion('option', 'multi')) {
                ids = $("#hdnCod").val().split();
            }
            else {
                ids = $("#GridSelGen").grid('getSeleccion');
            }
            var colDes = $(this).seleccion('option', 'coldes').split(",")
            var txtDes = $(this).seleccion('option', 'idtextdes').split(",")
            var txtCod = $(this).seleccion('option', 'idtxtoculto');

            $("#" + txtCod).val(ids.join(","));

            $.each(colDes, function(i, coldesItem) {
                var valColDes = new Array();
                $.each(ids, function(index, element) {
                    var myCellData = $("#GridSelGen").grid('getFilaData', element);
                    valColDes.push(myCellData[coldesItem]);
                });
                if (txtDes[i] != undefined && $("#" + txtDes[i]).size() > 0) {
                    $("#" + txtDes[i]).val(valColDes.join(","));
                }
            });            
            self._blockButtonBar(false);
            $(this).seleccion('Guardado');
            $(this).dialog('close');
            self.destroy();
        }
        ikt_buttons[$.Literales['50016']] = function(event) {
            $(this).dialog('close');
            self.destroy();
        }
        var settings = {
            autoOpen: false,
            modal: this.modal,
            overlay: this.overlay,
            buttons: ikt_buttons,
            height: this.height,
            width: this.width,
            resizable: this.resizable,
            closeOnEscape: this.closeOnEscape,
            title: this.title,
            open: function(event, ui) {
                $(this).closest('.ui-dialog').css("display", "none");
                $($("#ContentJqGrid"),'.ui-dialog-titlebar-close').toggle(false);
                $(this).dialog('option', 'position', [(($(window).height() - $(this).height()) / 2) + 'px', (($(window).width() - $(this).width()) / 2) + 'px']);
                $(this).load(rutaGridSelGen, { 'prand': Math.random() * 100, 'literales': $(this).seleccion('option', 'literalesBus'), 'idElemento': $(this).seleccion('option', 'idElemento') },
                        function(response, status, xhr) {
                            $(this).closest('.ui-dialog').closest('.ui-dialog').css("display", "block");
                            var GridSelGen = ikt_grid_conf.inicializar(); // Se inicializa el grid
                            with (GridSelGen) {
                                grid_id = 'GridSelGen';
                                ventana = rutaGridSelGen.replace(".aspx", "");
                                busqueda = true; altura = $(this).seleccion('option', 'heightGrid'); anchura = $(this).seleccion('option', 'widthGrid'); numFilas = $(this).seleccion('option', 'rows'); colOrd = $(this).seleccion('option', 'pSortColumn'); colOrdTipo = $(this).seleccion('option', 'pSortOrder');
                                where = function(obj) {
                                    obj.entidad = $("#" + idElemento).seleccion('option', 'entidad');
                                    obj.camposKey = $("#" + idElemento).seleccion('option', 'camposKey');
                                    obj.config = $("#" + idElemento).seleccion('option', 'config');
                                    obj.sqlnom = $("#" + idElemento).seleccion('option', 'sqlnom');
                                    obj.grupo = $("#" + idElemento).seleccion('option', 'grupo');
                                    obj.con = $("#" + idElemento).seleccion('option', 'con');
                                    obj.provider = $("#" + idElemento).seleccion('option', 'provider');
                                    obj.columnas = $("#" + idElemento).seleccion('option', 'columnasBD');
                                    obj.dbComparas = {};
                                    return $("#" + idElemento).seleccion('whereFun', obj);
                                };
                                alSelFila = function(id) {
                                    if (!$("#" + idElemento).seleccion('option', 'multi')) {
                                        var myCellData = $("#GridSelGen").grid('getFilaData', id);
                                        var colDes = $("#" + idElemento).seleccion("option", "coldes");
                                        $("#hdnCod").val(id);
                                        $("#hdnDes").val(myCellData[colDes[0]]);
                                    }
                                };
                                alDblClickFila = function(id) {
                                    if (!$("#" + idElemento).seleccion('option', 'multi')) {
                                        this.alSelFila.call(this, id);
                                        var buttons = $("#" + idElemento).dialog('option', 'buttons');
                                        buttons[$.Literales['50015']].call($("#" + idElemento));
                                    }
                                };
                                gridCargado = function() {
                                    $("#ContenidoGridSelGen_loading").css("display", "none");
                                    $("#ContenidoGridSelGen").css("display", "block");
                                    $("#GridSelGen").grid('resetSelectedCache')
                                    if ($("#" + $("#" + idElemento).seleccion('option', 'idtxtoculto')).val().length > 0) {
                                        if ($("#" + idElemento).seleccion('option', 'multi')) {
                                            var ids = $("#" + $("#" + idElemento).seleccion('option', 'idtxtoculto')).val().split(",");
                                            $("#GridSelGen").grid('addIdsToSelectedCache', ids);
                                            $(this).grid('seleccionarFilas', ids);
                                        } else {
                                            $(this).grid('seleccionarFila', $("#" + $("#" + idElemento).seleccion('option', 'idtxtoculto')).val());
                                        }
                                    }
                                    var zIndex = parseInt($("#" + idElemento).parent(".ui-dialog").css("zIndex")) + 1;
                                    $("#ContenidoGridSelGen").children(".searchDiv").css("z-index", zIndex);

                                };
                                piegrid = $.controles.piegrid.no;
                                altable = false; editable = false; bajable = false; multiselect = $(this).seleccion('option', 'multi');
                            }
                            $("#btnBuscarGridSelGen", $("#searchFooterGridSelGen")).button().click(function() {
                                $("#GridSelGen").grid('actualizar');
                            });
                            $("#btnLimpiarGridSelGen", $("#searchFooterGridSelGen")).button().click(function() {
                                $(":input[type!=button]", $("#searchBodyGridSelGen")).each(function() { $(this).val("") });
                            });
                            // Creación de columnas
                            GridSelGen.columnas = $(this).seleccion('option', 'columnas');
                            GridSelGen.mostrar();
                        }
                    );
            },
            close: function() {
            }
        };
        try {
            $(this.element).dialog('destroy');
        } catch (ex) { }
        $(this.element).dialog(settings);
        $(this.element).dialog('open')
    },
    _create: function() {
        var self = this;
        this.idtextdes = self.options.idtextdes;
        this.idtxtoculto = self.options.idtxtoculto;
        this.modal = self.options.modal;
        this.overlay = self.options.overlay;
        this.height = self.options.height;
        this.width = self.options.width;
        this.resizable = self.options.resizable;
        this.closeOnEscape = self.options.closeOnEscape;
        this.title = self.options.title;
        this.entidad = self.options.entidad;
        this.config = self.options.config;
        this.sqlnom = self.options.sqlnom;
        this.grupo = self.options.grupo;
        this.grulits = self.options.grulits;
        this.literalesBus = self.options.literalesBus;
        this.include = self.options.include;
        this.idElemento = $(this.element).attr("id");
        this.whereFun = self.options.whereFun;
        this.multi = self.options.multi;
        this.heightGrid = self.options.heightGrid;
        this.widthGrid = self.options.widthGrid;
        this.rows = self.options.rows;
        this.coldes = self.options.coldes;
        this.columnasBD = self.options.columnasBD;
        this.con = self.options.con;
        this.provider = self.options.provider;
        self.options.pSortColumn = (self.options.pSortColumn == '' || self.options.pSortColumn == undefined ? self.options.coldes.split(",").length > 1 ? self.options.coldes[0] : self.options.coldes : self.options.pSortColumn);
        this.pSortColumn = self.options.pSortColumn;
        this.pSortOrder = self.options.pSortOrder
        this.Guardado = self.options.Guardado;
    }
	,
    destroy: function() {
        var self = this;
        var options = this.options;
        var underlyingEl = this.element;
        var selgrid = $("#GridSelGen");
        selgrid.empty();
        selgrid.grid('destroy');
        $(underlyingEl).empty();
        $.Widget.prototype.destroy.call(this);
    }
});
