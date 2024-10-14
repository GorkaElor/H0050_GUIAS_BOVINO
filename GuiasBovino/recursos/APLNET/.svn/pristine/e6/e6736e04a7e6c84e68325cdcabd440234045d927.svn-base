/************************* VALORES POR DEFECTO *************************/
var ikt_grid_conf = {
    inicializar : function(){
        return {
			grid_id : "",
			dataSource:"",
			where:function (obj){return obj;},
			where_establecer: function (obj){return obj;},
			altura:"",
			anchura:"",
			numFilas: -1,
			rowList:[],
			colOrd:"",
			colOrdTipo:"",
			ventana: "",
			altRows: false,
			rownumbers: true,
			viewrecords: true,
			gridCargado:function (){},
			alSelFila: function(rowid, status, e) { return true; },
			alDblClickFila:function () {return true;},
			instanciarControles: function () {return true;},
			getCamposExtras: function (obj) {return obj;},
			validaExtra: function (valRes,id) {return valRes;},
			altaestablecer: function() { return {}; },
			cabeceras:true,
			piegrid:false,
			altable:false,
			editable:false,
			bajable:false,
			multiselect:false,
			busqueda: false,
			edicionSecuencial:false,
			modo:'',
			titulo:'',
			hidegrid:false,
			Guardado: function(event, data) { return true; },
			noGuardado: function(event, data) { return true; },
			Eliminado: function(event, data) { return true; },
			noEliminado: function(event, data) { return true; },
			fCancelar: function(event, data) { return true; },
			columnas: {},
			ajustarTextoColumnas: false, 
			columna: function(){
				return   {
					ancho:"", 
					id:"",
                    etiqueta:"",
                    alineacion:"",
                    sortable:false,
                    editable:false,
                    altable:false,
                    bajable:false,
                    multiple:false,
                    oculta: false,
					colFija:false,
					personalizado:false,
                    control_edicion:[],
                    formatter: "",
                    tipoGrupo: "",                    
                    formatoptions:[],
                    btnAccion:false,
                    ctlCampoEditable: function (el, options){},
                    btnAccionIcons:{"editar":"", "aceptar": "", "cancelar":""},
					add_control: function (obj)
	                {
	                    this.control_edicion.push(obj);	                    
	                },
		            add_evento: function (evento,valor)
	                {
	                    var obj = {'tipo':evento, 'valor':valor};
	                    this.eventos.push(obj);
	                },
	                cellattr: function(rowId, val, rawObject) {
                        return ' title = "' + val + '"';
                    }
				};
			},
			addColumna : function (col)
            {
                this.columnas[col.id] = col;
            },
            exportarExcel: false,
			exportarExcelIcon: 'ui-icon-calculator',
            isSubGrid: false,
            subGridPager:false,
            subGridDivId: "",
            subGridId: "",
            subGridParentRow:"",
            subGridObj: null,
            subGridOptions:null,
            setSubGrid:function(subrid){
                this.subGridObj = subrid;
            },
            scroll: false,
            groupingView:null, 
			mostrar : function()
			{
			    if (this.isSubGrid) $("#" + this.subGridId).grid(this);
                else $("#" + this.grid_id).grid(this);
            }
        };
    }
};
/************************* FUNCIONES GENERICAS grid *************************/
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

campoOculto = 
{
	inicializar: function()
	{
		return {
			elementos:[],
			add: function (id)
			{
			  var campooculto = {'id':id};
			  this.elementos.push(campooculto);
			}
		};
	}
};

/****************pryxyHandler*******************/



 
/************************* WIDGET *************************/


/* Bind the proxy method to the target.
$(document).bind("click", function(event) {
    if ($(event.srcElement).hasClass("prevenirClick")) {
        event.stopImmediatePropagation();
        return false;
    }
});*/
var prevenirClick = function(event) {
    event.stopImmediatePropagation();
    return false;
};

$.widget("ui.grid", {
    filaedit: "",
    datos_form: {},
    vdata: {},
    estado: "L",
    altacontrol: false,
    altable: false,
    editable: false,
    bajable: false,
    isSubGrid: false,
    subGridDivId: "",
    subGridPager: false,
    subGridId: "",
    subGridParentRow: "",
    edicionSecuencial: false,
    modo: "",
    _alertEL: null,
    _selectedCache: [],
    _pagesViewed: [],
    bloqDesbloqDivsPub: function(bloq) {
        var self = this;
        self._bloqDesbloqDivs(bloq);
    },
    setEstado: function(estado) {
        var self = this;
        self.estado = estado;
    },
    getEstado: function() {
        var self = this;
        return self.estado;
    },
    resetSelectedCache: function() {
        var self = this;
        self._selectedCache = [];
    },
    _addRowToSelectedCache: function(id) {
        var self = this;
        if ($.inArray(id, self._selectedCache) == -1) {
            self._selectedCache.push(id);
        }
    },
    _removeRowFromSelectedCache: function(id) {
        var self = this;
        self._selectedCache.splice($.inArray(id, self._selectedCache), 1);
    },
    addIdsToSelectedCache: function(ids) {
        var self = this;
        $.each(ids, function(index, value) {
            self._addRowToSelectedCache(value);
        });
    },
    _removeIdsFromSelectedCache: function(ids) {
        var self = this;
        $.each(ids, function(index, value) {
            self._removeRowFromSelectedCache(value);
        });
    },
    _gridComplete: function() {
        // se llama desde el plugin jqGrid, asi que hay que utilizar los datos del elemento para acceder a las opciones del widget
        var self = $.data(this).grid;
        var underlyingEl = $(self.element);
        if (!self.isSubGrid) {
            $("#Contenido" + self.options.grid_id + "_loading").css("display", "none");
            $("#Contenido" + self.options.grid_id).css("display", "block");

            // si esta incluido en un dialogo, centrarlo
            if ($("#" + self.options.grid_id).parents(".ui-dialog-content").size() > 0) {
                try {
                    $("#" + self.options.grid_id).parents(".ui-dialog-content").dialog('option', 'position', { my: "center", at: "center", of: window }); ;
                } catch (ex) {
                }
            }


        }
        if (self.options.ajustarTextoColumnas) {
            $((!self.isSubGrid ? "#" + self.options.grid_id : "#" + self.options.subGridId) + " tr.jqgrow td").css({
                "white-space": "normal"
            });
        }
        self._trigger("gridCargado");

        if (self.options.multiselect) {
            page = $(underlyingEl).jqGrid('getGridParam', 'page');

            // If this is first time on page, cache and exit
            if ($.inArray(page, self._pagesViewed) === -1) {
                self._pagesViewed.push(page);
                return;
            }
            else {
                if (self._selectedCache.length > 0) {
                    // Otherwise check to see if any checkboxes on the current page have previously been checked
                    $.each($(underlyingEl).jqGrid("getDataIDs"), function(i, id) {
                        if ($.inArray(id, self._selectedCache) > -1) {
                            if ($("#" + id + " .cbox:checked").size() == 0) {
                                $("#" + id + " .cbox").click();
                                $("#" + id + " .cbox").attr("checked", "checked");
                            }
                        }
                    });
                }
            }
        }
        if (!self.options.cabeceras) {
            $(underlyingEl).closest("div.ui-jqgrid-view").children("div.ui-jqgrid-hdiv").hide();

        }
        delete self;
        delete underlyingEl;
    },
    _datatype: function() {
        // se llama desde el plugin jqGrid, asi que hay que utilizar los datos del elemento para acceder a las opciones del widget

        var self = $.data(this).grid;
        if (!self.isSubGrid) $(".loading").css("display", "block");
        var underlyingEl = $(self.element);

        if ($.isFunction(self.options.dataSource)) {
            self.options.dataSource();
        }
        else {
            $.ajax(
				{
				    url: self.options.ventana + ".aspx/GetGrid_" + self.options.grid_id,
				    data: "{'pPageSize':'" + underlyingEl.getGridParam("rowNum") +
					"','pCurrentPage':'" + underlyingEl.getGridParam("page") +
					"','pSortColumn':'" + underlyingEl.getGridParam("sortname") +
					"','pSortOrder':'" + underlyingEl.getGridParam("sortorder") +
					"','hash':'" + viewHash +
					"','where':{" + self.where_establecer() + "}}",
				    dataType: "json",
				    type: "post",
				    contentType: "application/json; charset=utf-8",
				    complete: function(jsondata, stat) {
				        if (stat == "success") {
				            if (!self.isSubGrid) $("#" + self.options.grid_id)[0].addJSONData(JSON.parse(jsondata.responseText).d);
				            else $("#" + self.options.subGridId)[0].addJSONData(JSON.parse(jsondata.responseText).d);
				        } else {
				            alert($.Literales['50067']);
				        }
				        if (!self.isSubGrid) $(".loading").css("display", "none");
				        delete self;
				        delete underlyingEl;
				    }
				}
			);
        }
    },
    _bloqDesbloqDivs: function(bloq) {
        var self = this;
        var grid_id = !self.isSubGrid ? "#" + self.options.grid_id : "#" + self.options.subGridId;
        var botonera = "#botonera" + self.options.grid_id;
        var paginador = "#pager" + (!self.isSubGrid ? self.options.grid_id : self.options.subGridId);
        if (bloq) {
            /*bloquear los elementos solo clickable pero no funciona bien con los link
            $(document).find("*").filter(function() {
            if ($(this).data("events") == undefined) return false;
            var ret = false;
            $.each($(this).data("events"), function(i, event) {
            if (i.toString().toLowerCase() == "click") {
            ret = true;
            return true;
            }
            });
            return ret;
            }).addClass("prevenirClick");*/
            $(document).find("*").not("object").addClass("prevenirClick");
            $(grid_id).removeClass("prevenirClick");
            $(grid_id).parents().removeClass("prevenirClick");
            $("*", grid_id).removeClass("prevenirClick");
            $(".prevenirClick").bind("click", { self: self, elementID: (!self.isSubGrid ? self.options.grid_id : self.options.subGridId) }, clickHandler);

            $(".prevenirClick").each(function(i, el) {
                try {
                    var lastEl = $(this).data("events").click.splice($(this).data("events").click.length - 1, 1);
                    $(this).data("events").click.splice(0, 0, lastEl[0]);
                } catch (e) { }
            });

            $(".ui-accordion-header").attr('disabled', 'disabled');
            $(".ui-tabs-anchor").attr('disabled', 'disabled');
            $(self._alertEL).fadeOut();
            if ($(botonera).length > 0) $(".ui-button", botonera).toggle(false);
            if ($(paginador).length > 0) $(".ui-pg-button", paginador).toggle(false);
        }
        else {
            $(".prevenirClick").unbind("click", clickHandler);
            $(".ui-accordion-header").removeAttr("disabled");
            $(".ui-tabs-anchor").removeAttr('disabled');
            $(".prevenirClick").removeClass("prevenirClick");
            if ($(botonera).length > 0) $(".ui-button", botonera).toggle(true);
            if ($(paginador).length > 0) $(".ui-pg-button", paginador).toggle(true);
            $(self._alertEL).fadeOut();
        }
    },
    getPropiedad: function(propiedad) {
        propiedad = propiedad.toLowerCase();
        return this[propiedad];
    },
    setPropiedad: function(propiedad, valor) {
        propiedad = propiedad.toLowerCase();
        this[propiedad] = valor;
    },
    getGridParam: function(parName) {
        return $(this.element).getGridParam(parName);
    },
    where_establecer: function() {
        var self = this;
        var miWhereGrid = "'grid_id':'" + this.options.grid_id + "'";
        var camposExtras = { 'ID': this.filaedit, 'hash': viewHash };
        $.each(this.options.where(this.options.getCamposExtras(camposExtras)), function(id, valor) {
            if (Object.prototype.toString.call(valor) === '[object Object]') {
                miWhereGrid += ",'" + id + "':" + JSON.stringify(valor);
                if (self.isSubGrid) miWhereGrid += ",'subGridParentRow':'" + self.subGridParentRow + "'";
            } else {
                miWhereGrid += ",'" + id + "':'" + valor + "'";
                if (self.isSubGrid) miWhereGrid += ",'subGridParentRow':'" + self.subGridParentRow + "'";
            }
        });
        return miWhereGrid;
    },
    seleccionarFila: function(id) {
        return $(this.element).setSelection(id);
    },
    seleccionarFilas: function(ids) {
        var self = this;
        $.each(ids, function() {
            self.seleccionarFila(this);
        });
    },
    selPrimeraFila: function() {
        // En la versión 4.4.1 de jqgrid, se incluido una primera fila vacia en la tabla
        // con la clase "jqgfirstrow", se debe seleccionar la segunda
        if ($("#" + $(this.element).attr("id") + " tr:eq(0)").hasClass("jqgfirstrow")) {
            return $(this.element).setSelection($("#" + $(this.element).attr("id") + " tr:eq(1)").attr("id"));
        }
        else {
            return $(this.element).setSelection($("#" + $(this.element).attr("id") + " tr:eq(0)").attr("id"));
        }
        //return $(this.element).setSelection($("#"+$(this.element).attr("id")+" tr:first").attr("id"));
    },
    getSeleccion: function() {
        return $(this.element).getGridParam('selarrrow');
    },
    getFilasID: function() {
        return $(this.element).getDataIDs();
    },
    getFilaEdit: function() {
        return this.filaedit
        //return $(this.element).filaedit; esta instrucción no es valida ya que el método no es del JQGRID sino del iktgrid
    },
    getSelFila: function() {
        return $(this.element).getGridParam('selrow');
    },
    actualizar: function() {
        return $(this.element).trigger("reloadGrid");
    },
    vueltaPestana: function(campoOculto) {
        var self = this;
        // campoOculto es un objeto con "n" campos ocultos
        campoOculto = campoOculto.elementos;
        if (self.estado == 'L' && self.filaedit != 'new') {
            if ($("#" + campoOculto[0].id).valor() == "") {
                self.selPrimeraFila();
                var miFilaSel = self.getSelFila();
                miFilaSel = miFilaSel == null ? '' : miFilaSel;
                $("#" + campoOculto[0].id).attr("value", miFilaSel);
            }
            else {
                self.seleccionarFila($("#" + campoOculto[0].id).valor());
            }
            if ($('#' + $(this.element).attr("id") + ' tr:first').attr('id') == null) {
                $("#" + campoOculto[0].id).attr("value", "");
            }
            $.each(campoOculto, function() {
                if (this.id != campoOculto[0].id) {
                    $("#" + this.id).attr("value", "");
                }
            }
			);
        }
    },
    setColData: function(row_id, col_id, valor) {
        var miValor = {};
        miValor[col_id] = valor;
        $(this.element).setRowData(row_id, miValor);
    },
    setRowData: function(row_id, valor) {
        $(this.element).setRowData(row_id, valor);
    },
    getFilaData: function(row_id) {
        return $(this.element).getRowData(row_id);
    },
    addFila: function(grid_id) {
        return this.alta();
    },
    alta: function() {
        var self = this;
        var underlyingEl = $(self.element);

        self._bloqDesbloqDivs(true);

        self.filaedit = "new";
        underlyingEl.addRowData("new", self.options.columnas);
        $("#IDgrid").attr("value", self.filaedit);
        underlyingEl.setSelection(self.filaedit);

        self.estado = "M";
        self.datos_form = {};
        var miDatos_Form = self.options.altaestablecer(self.datos_form);
        self.datos_form = miDatos_Form;

        underlyingEl.editRow('new', false);
        if (self.options.instanciarControles != undefined) {
            self.options.instanciarControles();
        }
        return;
    },
    delFila: function() {
        return this.baja();
    },
    editFila: function(id) {
        var self = this;
        if ($.isFunction(self.options.alDblClickFila) && !self.options.alDblClickFila(id)) {
            return false;
        }
        if (self.estado != "M") {
            self.estado = 'M';
            self.filaedit = id;
            self._bloqDesbloqDivs(true);

            self.datos_form_establecer(id);
            return false;
        }
    },
    baja: function() {
        var self = this;
        var underlyingEl = $(self.element);

        var sr = underlyingEl.getGridParam('selrow');
        if (sr == null) { jAlert('Debe seleccionar una fila'); return false; }

        jConfirm($.Literales[50054], $.Literales[50054], function(ok) {
            var valRes = validaExtra.inicializar();
            if (ok) {
                $.ikt_ajax({
                    url: self.options.ventana + ".aspx/Delete_" + self.options.grid_id,
                    data: "{'hash':'" + viewHash + "', 'ID': '" + sr + "' }",
                    complete: function(jsondata, stat) {
                        if (stat == "success") {
                            var vdata = JSON.parse(jsondata.responseText).d;
                            if (vdata.errores == null && vdata.alertas == null) {
                                underlyingEl.delRowData(sr);
                                if (self.options.piegrid) {	// Se recorre el dataExtra para pintar los resultados en el pie del grid
                                    for (var prop in vdata.dataExtra) {
                                        if (vdata.dataExtra.hasOwnProperty(prop)) {
                                            $('.ui-jqgrid-ftable td[aria-describedby="' + self.options.grid_id + '_' + prop + '"]').text(vdata.dataExtra[prop]);
                                            $('.ui-jqgrid-ftable td[aria-describedby="' + self.options.grid_id + '_' + prop + '"]').attr("title", vdata.dataExtra[prop]);
                                        }
                                    }
                                }
                                self._trigger("Eliminado", "", vdata);
                                return true;
                            }
                            else {
                                valRes.valElementos.errores = vdata.errores != null ? vdata.errores : valRes.valElementos.errores;
                                valRes.valElementos.alertas = vdata.alertas != null ? vdata.alertas : valRes.valElementos.alertas;

                                jAlert(creaDivErrores(valRes.valElementos), XmlValor_Chequear($.Literales['50074']));
                                $("#popup_container").focus();
                                self._trigger("noEliminado", "", vdata);
                                return false;
                            }
                        }
                    }
                });
            }
            else {
                return false;
            }
        });
        return false;
    },
    resetKeyPress: function() {
        var self = this;
        var underlyingEl = $(this.element);
        //funciones de keypress, cancelar y confirmar edicion
        underlyingEl.jqGrid('bindKeys');
        if ($.browser.mozilla && !navigator.userAgent.match(/Trident\/7\./)) {
            underlyingEl.keypress(function(event) {
                return self.miCancelar(event);
            });
        } else {
            underlyingEl.keydown(function(event) {
                return self.miCancelar(event);
            });
        }
    },
    miCancelar: function(event) {
        var self = this;
        var underlyingEl = $(this.element);
        var sr = underlyingEl.getGridParam('selrow');
        switch (event.keyCode) {
            case 27:
                return self.cancelar();
            case 13:
                if (self.estado == "M") {
                    if (!self.grabarGrid(sr, event)) {
                        event.stopPropagation();
                        return false;
                    } else {
                        var ids = underlyingEl.jqGrid("getDataIDs");
                        if (ids && ids.length > 0 && self.edicionSecuencial) {
                            for (var i = 0; i < ids.length - 1; i++) {
                                if (sr == ids[i] && i < (ids.length - 1)) {
                                    var nexFila = ids[i + 1];
                                    underlyingEl.jqGrid("setSelection", nexFila);
                                    $("#" + nexFila, underlyingEl).trigger("dblclick");
                                    event.stopPropagation();
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    self.editFila(sr);
                    event.stopPropagation();
                    return false;
                }
                break;
        }
    },
    cancelar: function() {
        var self = this;
        var underlyingEl = $(this.element);
        if (this.estado == "M") {
            var sr = underlyingEl.getGridParam('selrow');
            if (sr == 'new') {
                // Control de variables
                this.altacontrol = true;
                underlyingEl.delRowData(sr);
                this.altacontrol = false;
            }
            else {
                underlyingEl.restoreRow(sr);
                underlyingEl.setSelection(sr);
            }
            this.filaedit = "";
            this.estado = 'L';
        }
        self._bloqDesbloqDivs(false);
        if ($.isFunction(self.options.fCancelar)) { self.options.fCancelar(); }
        return false;
    },
    datos_form_establecer: function(id) {
        var self = this;
        var underlyingEl = $(this.element);

        var valRes = { "errores": [], "alertas": [] };

        if (self.estado == 'M') {
            $.ikt_ajax({
                url: self.options.ventana + ".aspx/GetEdicion_" + self.options.grid_id,
                data: "{'ID': '" + id + "','hash':'" + viewHash + "'}",
                complete: function(jsondata, stat) {
                    if (stat == "success") {
                        self.vdata = JSON.parse(jsondata.responseText).d;
                        if (self.vdata.errores == null && self.vdata.alertas == null) {
                            self.datos_form = self.vdata;
                            underlyingEl.editRow(id, false);
                            // Si tenemos textareas se quita el keypress heredado del mismo
                            // Se establece
                            if ($.browser.mozilla && !navigator.userAgent.match(/Trident\/7\./)) {
                                $("textarea", underlyingEl).bind('keypress',
									function(e) {
									    if (e.keyCode != 27) e.stopPropagation();
									}
								);
                            } else {
                                $("textarea", underlyingEl).bind('keydown',
									function(e) {
									    if (e.keyCode != 27) e.stopPropagation();
									}
								);
                            }
                            if (self.options.instanciarControles != undefined) {
                                self.options.instanciarControles();
                            }
                        } else {
                            valRes.errores = self.vdata.errores != null ? self.vdata.errores : valRes.errores;
                            valRes.alertas = self.vdata.alertas != null ? self.vdata.alertas : valRes.alertas;
                            valRes.errores.push(jsondata.responseText);
                            jAlert(creaDivErrores(valRes), $.Literales['7']);
                        }
                    } else {
                        valRes.errores.push(jsondata.responseText);
                        jAlert(creaDivErrores(valRes), $.Literales['7']);
                    }
                }
            });
        }
    },
    datos_form_buscar: function(valor) {
        var Resultado = '';
        var self = this;
        var underlyingEl = $(this.element);
        if (self.estado == 'M') {
            valor = valor.toLowerCase();
        }
        // Si el estado es lectura quiere decir que devolvemos lo que se ha grabado
        if (self.estado == 'L') {
            // También se reemplaza en caso que venga un new, cuando es un alta
            valor = valor.replace('new_', '');
            valor = valor.replace(self.datos_form.ID + '_', '');
            valor = valor.toLowerCase();
        }
        Resultado = (self.datos_form.data != undefined && self.datos_form.data[valor] != undefined ? self.datos_form.data[valor] : '');
        return Resultado;
    },
    valor_establecer: function(elem, action, val) {
        var self = this;
        if (action == 'get') // Se establece cuando se graba la información en el servidor
        {
            // aquí se puede buscar información para rellenar en los controles una vez grabada la información
            return self.datos_form_buscar(elem[0].id);
        }
        else // se establece cuando se crea el control
        {
            // Se comprueba que si estamos en el alta no se pasa nada
            if (self.filaedit.indexOf('new', 0) != -1) {
                return "";
            }
            else {
                return self.datos_form_buscar(elem);
            }
        }
    },
    getFData: function() {
        var self = this;
        var underlyingEl = $(this.element);

        var control = true;
        var camposextras;
        if (self.isSubGrid) camposextras = { 'ID': this.filaedit, 'subGridParentRow': this.subGridParentRow, 'hash': viewHash };
        else camposextras = { 'ID': this.filaedit, 'hash': viewHash };
        var campos = self.options.getCamposExtras(camposextras);

        var nombre = "";
        var valor = "";

        $('#' + self.filaedit + ' input,textarea ', underlyingEl).each(function() {
            nombre = $(this).attr("name") != null ? $(this).attr("name") : "";
            if ($(this).attr("type") == "checkbox") {
                valor = $(this).valor() != null && $(this).is(":checked") ? true : false;
                control = true;
            }
            else if ($(this).attr("type") == "radio") {
                if ($(this).is(":selected")) {
                    valor = $(this).valor() == null ? '0' : $(this).valor();
                    control = true;
                }
                else { control = false; }

            }
            else {
                valor = $(this).valor() != null ? $(this).valor() : "";
                control = true;
            }
            if (nombre != "" && control) {
                campos[nombre] = valor;
            }
        });

        var ret = "{'data':" + JSON.stringify(campos) + "}";
        return ret;
    },
    grabarGrid: function(id) {
        var self = this;
        var underlyingEl = $(this.element);
        var retorno = true;
        var fdata = self.getFData();
        var valRes = validaExtra.inicializar();
        //validaciones personalizadas por usuario
        valRes = self.options.validaExtra(valRes, id);
        //validaciones estandar
        
        valRes = Validacion_Grid(valRes, self.filaedit, (self.isSubGrid ? self.subGridDivId : self.options.grid_id));
        if (valRes.valElementos.errores.length <= 0) {
            $.ikt_ajax({
                url: self.options.ventana + ".aspx/Save_" + self.options.grid_id,
                data: fdata,
                async: false,
                complete: function(jsondata, stat) {
                    if (stat == "success") {
                        var vdata = JSON.parse(jsondata.responseText).d;
                        if (vdata.errores == null) {
                            self.datos_form = vdata;
                            self.estado = "L";
                            underlyingEl.saveRow(self.filaedit, false, 'clientArray');
                            $('#' + self.filaedit, !self.isSubGrid ? "#" + self.options.grid_id : "#" + self.options.subGridId).attr("id", vdata.ID);
                            self.filaedit = "";
                            if (self.options.piegrid) {
                                for (var prop in vdata.dataExtra) {
                                    if (vdata.dataExtra.hasOwnProperty(prop)) {
                                        $('.ui-jqgrid-ftable td[aria-describedby="' + (!self.isSubGrid ? self.options.grid_id + '_' + prop : self.options.subGridId + '_' + prop) + '"]').text(vdata.dataExtra[prop]);
                                        $('.ui-jqgrid-ftable td[aria-describedby="' + (!self.isSubGrid ? self.options.grid_id + '_' + prop : self.options.subGridId + '_' + prop) + '"]').attr("title", vdata.dataExtra[prop]);
                                    }
                                }
                            }
                            // Se selecciona el registro si se pulsa el enter para que la fila del objeto grid, no tenga el new
                            if (id == 'new') {
                                self.seleccionarFila(vdata.ID);
                            }
                            self._bloqDesbloqDivs(false);
                            self._trigger("Guardado", "", vdata);

                            valRes.valElementos.alertas = vdata.alertas != null ? vdata.alertas : valRes.valElementos.alertas;
                            if (vdata.alertas != null && vdata.alertas.length>0) {
                                jAlert(creaDivErrores(valRes.valElementos), XmlValor_Chequear($.Literales['70005']));
                            }
                            retorno = true;
                        } else {
                            self.estado = "M";
                            if (id != self.filaedit) {
                                underlyingEl.setSelection(self.filaedit);
                            }
                            valRes.valElementos.alertas = vdata.alertas != null ? vdata.alertas : valRes.valElementos.alertas;
                            valRes.valElementos.errores = vdata.errores != null ? vdata.errores : valRes.valElementos.errores;
                            jAlert(creaDivErrores(valRes.valElementos), XmlValor_Chequear($.Literales['70005']));
                            $("#popup_container").focus();
                            self._trigger("noGuardado", "", vdata);
                            retorno = false;
                        }
                    } else {
                        self.estado = "M";
                        if (id != self.filaedit) {
                            underlyingEl.setSelection(self.filaedit);
                        }
                        valRes.valElementos.errores.push(jsondata.responseText);
                        jAlert(creaDivErrores(valRes.valElementos), XmlValor_Chequear($.Literales['70005']));
                        $("#popup_container").focus();
                        retorno = false;
                    }
                }
            });
        } else {
            self.estado = "M";
            if (id != self.filaedit) {
                underlyingEl.setSelection(self.filaedit);
            }
            jAlert(creaDivErrores(valRes.valElementos), XmlValor_Chequear($.Literales['70005']));
            $("#popup_container").focus();
            retorno = false;

        }
        if (!retorno) {
            self.estado = "M";
        } else {
            self.estado = "L";
        }
        return retorno;
    },
    _jsonReader: { root: "Items", page: "CurrentPage", total: "PageCount", records: "RecordCount", repeatitems: true,
        overlay: 0, cell: "Row", id: "ID", where: "where", userdata: "totales"
    },
    // valores por defecto

    _create: function() {
        var self = this;
        var underlyingEl = $(this.element);
        self._selectedCache = [];

        settings = {
            hidegrid: false,
            emptyrecords: $.Literales['50090'],
            recordtext: $.Literales['50060'],
            pgtext: $.Literales['50064'],
            rowNum: "15",
            altRows: false,
            rownumbers: true,
            viewrecords: true,
            deselectAfterSort: false,
            multiselect: false,
            loadui: 'blockDEFAULT',
            autowidth: false,
            sortname: "",
            sortorder: "",
            height: "",
            caption: "",
            rowList: [],
            colModel: [],
            subGrid: false,
            subGridRowExpanded: null,
            scroll: false
        };

        this.altable = self.options.altable;
        this.editable = self.options.editable;
        this.bajable = self.options.bajable;
        this.modo = self.options.modo;
        this.isSubGrid = self.options.isSubGrid
        this.subGridId = self.options.subGridId;
        this.subGridDivId = self.options.subGridDivId;
        this.subGridPager = self.options.subGridPager;
        this.subGridParentRow = self.options.subGridParentRow;
        this.edicionSecuencial = self.options.edicionSecuencial;
        settings.gridComplete = self._gridComplete;
        settings.datatype = self._datatype;
        settings.jsonReader = self._jsonReader;
        settings.pager = "#pager" + (!self.options.isSubGrid ? self.options.grid_id : self.options.subGridId);
        settings.rowList = self.options.rowList;
        settings.multiselect = self.options.multiselect != "" ? self.options.multiselect : settings.multiselect;
        settings.sortname = self.options.colOrd != "" ? self.options.colOrd : settings.sortname;
        settings.sortorder = self.options.colOrdTipo != "" ? self.options.colOrdTipo : settings.sortorder;
        settings.height = self.options.altura != "" ? self.options.altura : settings.height;
        settings.rowNum = self.options.numFilas != "" ? self.options.numFilas : settings.rowNum;
        settings.caption = self.options.titulo != "" ? self.options.titulo : settings.caption;
        settings.hidegrid = self.options.hidegrid != "" ? self.options.hidegrid : settings.hidegrid;
        settings.altRows = self.options.altRows;
        settings.rownumbers = self.options.rownumbers;
        settings.viewrecords = self.options.viewrecords;
        settings.scroll = self.options.scroll;
        if (self.options.anchura != "") {
            settings.width = self.options.anchura;
            settings.shrinkToFit = false;
        }
        else {
            settings.autowidth = true;
            settings.forceFit = true;
        }

        //funciones de keypress, cancelar y confirmar edicion
        if ($.browser.mozilla && !navigator.userAgent.match(/Trident\/7\./)) {
            underlyingEl.keypress(function(event) {
                return self.miCancelar(event);
            });
        } else {
            underlyingEl.keydown(function(event) {
                return self.miCancelar(event);
            });
        }



        // Se establecen las propiedades de la búsqueda
        if (!self.options.isSubGrid) {
            if (self.options.busqueda) {
                var searchBarID = "#searchBar" + self.options.grid_id;
                var searchBodyID = "#searchBody" + self.options.grid_id;
                var ContenidoID = "#Contenido" + self.options.grid_id;
                var searchFooterID = "#searchFooter" + this.options.grid_id;

                $(".abusFlec", searchBarID).bind('click', function() {
                    if ($(searchBarID + " .busFlec").attr("class") == "busFlec ui-icon ui-icon-circle-triangle-s") {
                        $(searchBodyID).css("position", "absolute");
                        $(searchBodyID).css("width", $(ContenidoID + " .searchBarTitle").innerWidth());
                        if ($(ContenidoID).parent().hasClass('ui-dialog-content')) {	// Si el grid está contenido en una modal
                            $(searchBodyID).css("left", $(ContenidoID + " .searchBar").position().left + parseInt($(ContenidoID + " .searchBarTitle").css("margin-left").substring(0, $(ContenidoID + " .searchBarTitle").css("margin-left").length - 2)) + 'px');
                            $(searchBodyID).css("top", $(ContenidoID + " .searchBarTitle").position().top + $(ContenidoID + " .searchBarTitle").innerHeight() + 'px');
                        }
                        else {
                            $(searchBodyID).css("left", $(ContenidoID + " .searchBarTitle").offset().left);
                            $(searchBodyID).css("top", $(ContenidoID + " .searchBarTitle").offset().top + $(ContenidoID + " .searchBarTitle").innerHeight());
                        }
                        $(searchBodyID).show();
                        $(ContenidoID + " .busFlec").attr("class", "busFlec ui-icon ui-icon-circle-triangle-n");

                    } else {
                        $(searchBodyID).hide();
                        $(ContenidoID + " .busFlec").attr("class", "busFlec ui-icon ui-icon-circle-triangle-s");
                    }
                });

                $(".busquedatitulo", ContenidoID).bind('click', function() {
                    $(".abusFlec", ContenidoID).click();
                });
                $(".ui-button:first", searchFooterID).bind('click', function() {
                    $(".abusFlec", ContenidoID).click();
                });
            }
        }
        if (self.options.editable) {
            settings.ondblClickRow = function(rowid, iRow, iCol, e) {
                self.editFila(rowid, iRow, iCol, e);
                e.stopPropagation();
            };
        } else {
            if ($.isFunction(self.options.alDblClickFila)) {
                settings.ondblClickRow = function(rowid, iRow, iCol, e) {
                    self.options.alDblClickFila(rowid, iRow, iCol, e);
                    e.stopPropagation();
                };
            }
        } // self.options.editable

        settings.onSelectRow = function(rowid, status, e) {
            if (!self.altacontrol) {
                if (self.estado == "M") {
                    if (rowid != self.filaedit) {
                        if (!self.grabarGrid(rowid, status, e)) {
                            e.stopPropagation();
                            return false;
                        }
                    }
                }
            }
            try {
                self.options.alSelFila(rowid, status, e);
            } catch (ex) { }
            // si hay multiseleccion, guardar lo seleccionado
            if (self.options.multiselect) {
                var row = $(underlyingEl).jqGrid("getRowData", rowid);
                if (status) {
                    self._addRowToSelectedCache(rowid);
                } else {
                    self._removeRowFromSelectedCache(rowid);
                }
            }
            if (e != null) e.stopPropagation(); //e puede ser nulo por venir de selFila
        };

        if (self.options.piegrid) {
            settings.footerrow = true;
            settings.userDataOnFooter = true;
        }
        else {
            settings.footerrow = false;
            settings.userDataOnFooter = false;
        }
        var hayColfijas = false;
        $.each(self.options.columnas, function() {
            var columna = this;
            var col = {
                index: columna.id,
                name: columna.id,
                width: columna.ancho,
                align: columna.alineacion,
                label: columna.etiqueta,
                editable: columna.editable,
                sortable: columna.sortable,
                hidden: columna.oculta,
                personalizado: columna.personalizado,
                control_edicion: columna.control_edicion,
                cellattr: columna.cellattr,
                frozen: columna.colFija,
                summaryType: columna.tipoGrupo
                
            };
            if (columna.colFija) hayColfijas = true;
            if (columna.btnAccion) {
                if (self.options.editable) {
                    col.unformat = function(pos, irow, resultFormater, srvr, rowId, rdata) {
                        return "";
                    }
                    col.formatter = function(cellvalue, options, rowObject, rol) {
                        var imgEditar = columna.btnAccionIcons.editar != "" ? columna.btnAccionIcons.editar : rutaRecursos + 'css/images/pencil.png';
                        return "<a id='a_btnAcc_" + options.rowId + "' value='HM 1'  href='#' onclick='$(\"#" + options.gid + "\").grid(\"editFila\",$(this).parents(\"tr\").attr(\"id\"));'><img border='0' src='" + imgEditar + "'/></a>";


                    };

                    col.id = "btnAccion";
                    col.name = "btnAccion";
                }
                columna.cellattr = function(rowId, val, rawObject) {
                    return "";
                }
                col.label = " ";
                col.align = "center";
                col.control_edicion.push({ 'tipo_control': 'btnAcc', 'btnAccionIcons': columna.btnAccionIcons });
            }
            else if (columna.formatter != "") {
                col.formatter = columna.formatter;
                col.formatoptions = columna.formatoptions;
            }
           
            // Si es un grid editable se prepara la columna
            if ((self.options.editable || self.options.altable) && !columna.link) {
                col.edittype = "custom";
                col.editoptions = {
                    custom_element: $.controles.crear,
                    custom_value: function() { },
                    elementos: this.control_edicion
                };
            }


            if (self.options.editable || self.options.altable) {
                if (columna.personalizado) {
                    col.editable = false;
                }
                else {
                    col.editable = true;
                    col.editoptions.custom_value = function(elemento, accion) {
                        if (accion == 'get') {
                            try {
                                return self.datos_form_buscar(elemento[0].id);
                            }
                            catch (err) {
                                return "";
                            }
                        }
                        else {
                            if (self.filaedit.indexOf('new', 0) != -1 && $.isEmptyObject(self.datos_form)) {
                                return "";
                            }
                            else {
                                return self.datos_form_buscar(elemento);
                            }
                        }
                    };
                    col.editoptions['grid_id'] = (!self.isSubGrid ? self.options.grid_id : self.options.subGridId);
                }
            }

            if (columna.cellattr != undefined) {
                col.cellattr = columna.cellattr;
            }

            settings.colModel.push(col);
        });

        //si hay multiseleccion, guardar la seleccion entre paginas
        settings.onSelectAllPress = function(ids, selected) {
            if (typeof (ids[0]) === "undefined" || typeof (ids[0]) === "") {
                ids.shift();
            }
            if (selected) {
                this._addIdsToSelectedCache(ids);
            } else {
                this._removeIdsFromSelectedCache(ids);
            }

        };
        if (self.options.subGridObj != null) {
            settings.subGridOptions = self.options.subGridOptions;
            settings.subGridRowExpanded = function(pID, id) {
                if ($.isFunction(self.options.subGridObj)) {
                    self.options.subGridObj(pID, id);
                } else if ($.isPlainObject) {
                    var subgrid = self.options.subGridObj;
                    subgrid.subGridDivId = pID;
                    subgrid.isSubGrid = true;
                    subgrid.subGridId = "t" + pID;
                    subgrid.subGridParentRow = id;
                    jQuery("#" + pID).html('<table id="' + subgrid.subGridId + '" class="gridTable" ></table>');
                    if (subgrid.subGridPager) jQuery("#" + pID).append('<div id="pager' + subgrid.subGridId + '" class="gridPager"></div>')
                    subgrid.mostrar();

                } else {
                    $("#" + pID).load(settings.subGridOptions.url, { 'subGridDivId': "'" + pID + "'", "subGridParentRow": "'" + id + "'" });
                }
            }
            settings.subGrid = true;
        }
        if (self.options.groupingView != null) {
            settings.grouping = true;
            settings.groupingView = self.options.groupingView;
        }
        //convertir opciones del grid de ikt en opciones del jqgrid ...
        var vrows = settings.rowNum
        underlyingEl
		    .jqGrid(settings)
		    .navGrid(settings.pager, { add: false, edit: false, del: false, search: false, view: false, refresh: true }, {}, {}, {}, {}, { navkeys: [true, 38, 40], height: 300, jqModal: true, closeOnEscape: true });
        if (settings.scroll || hayColfijas) {
            underlyingEl.jqGrid("clearGridData");
            if (hayColfijas) underlyingEl.jqGrid('setFrozenColumns');
        }
        try { underlyingEl.jqGrid('bindKeys', { scrollingRows: true }); } catch (e) {
            //por si es alguna version del grid sin bindKeys
        }
        if (self.options.exportarExcel) {
            underlyingEl.jqGrid('navButtonAdd', settings.pager, {
                caption: "",
                buttonicon: self.options.exportarExcelIcon,
                title: "Excel",
                onClickButton: function() {
                    underlyingEl.grid('exportarExcel');
                },
                position: "last"
            });
        }


    },
    _init: function() {
        var self = this;
        var underlyingEl = $(this.element);
        var options = this.options;
        if (!options.isSubGrid) {
            if ($('#' + options.grid_id).parents(".ui-dialog-content").size() > 0) {
                try {
                    $('#' + options.grid_id).parents(".ui-dialog-content").ikt_dialogo("abrir");
                } catch (ex) {
                }
            }
        }
        var botonera = "#botonera" + options.grid_id;
        var alertEL;
        if ($(botonera).length > 0) {
            if ($(".alertaEdicion", $(botonera)).size() == 0) {
                alertEL = $('<div class="ui-state-highlight ui-corner-all alertaEdicion" style="display:inline-block; font-size:1.1em;"><p style="margin:auto;padding:0.4em 1em;"><span class="ui-icon ui-icon-info" style="float: left; margin-right: .3em;"></span><span class="textoAlerta">' + $.Literales['72125'] + '</span></p></div>').toggle(false).appendTo($("body"));
            }
            else {
                alertEL = $(".alertaEdicion", $(botonera));
            }
        }
        self._alertEL = alertEL;
    },
    destroy: function() {
        var self = this;
        $(self._alertEL).remove();
        $.Widget.prototype.destroy.call(this);
    },
    mostrarAlerta: function(textoAlerta, duracion) {
        var self = this;
        var container = $(self.options.isSubgrid ? "#" + self.options.grid_id : "#" + self.options.subGridId);
        var botonera = "#botonera" + self.options.grid_id;
        var pos = {};
        if ($(botonera).length == 0) return;
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
        $(self._alertEL).fadeOut();
    },
    exportarExcel: function(url) {
        var self = this;
        var underlyingEl = self.element;
        if (!url) {
            url = "exportGridToExcel.ashx";
        }

        var obj = new Object();
        obj = self.where_establecer();

        var elementosJSON = obj.split(",")
        var whereObj = {}
        var re = new RegExp("\'", "g");
        for (i = 0; i < elementosJSON.length; i++) {
            whereObj[elementosJSON[i].split(":")[0].replace(re, "")] = elementosJSON[i].split(":")[1].replace(re, "");
        }

        var colLabels = ""
        var colFields = ""

        $.each(underlyingEl.getGridParam("colModel"), function(i, el) {
            if (i > 0 && $(el)[0].name != undefined) {
                colLabels = colLabels + $(el)[0].label + ",";
                colFields = colFields + $(el)[0].name + ",";
            }
        });
        colLabels = colLabels.substring(0, colLabels.length - 1);
        colFields = colFields.substring(0, colFields.length - 1);

        var params = {
            pPageSize: underlyingEl.getGridParam("rowNum"),
            pCurrentPage: underlyingEl.getGridParam("page"),
            pSortColumn: underlyingEl.getGridParam("sortname"),
            pSortOrder: underlyingEl.getGridParam("sortorder"),
            hash: viewHash,
            where: whereObj,
            colLabels: colLabels,
            colFields: colFields,
            ventana: self.options.ventana
        };

        $("#exportExcel").remove();
        $('<iframe id="exportExcel"></iframe>').appendTo("body").attr("src", url + "?" + $.param(params));

        /*
        $.ajax({ 
        url: url, 
        data: "{'pPageSize':'" + underlyingEl.getGridParam("rowNum") +
        "','pCurrentPage':'" + underlyingEl.getGridParam("page") +
        "','pSortColumn':'" + underlyingEl.getGridParam("sortname") +
        "','pSortOrder':'" + underlyingEl.getGridParam("sortorder") +
        "','hash':'" + viewHash +
        "','where':{" + self.where_establecer() + "}}",
        dataType: "json",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function(response) {
        $("<iframe></iframe>").appendTo("body").attr("src", response.url);
        },
        error: function(result) {
        alert('Error');
        } 
        }); 
        */
    }
});




