/************************* VALORES POR DEFECTO *************************/
var ikt_tree_conf = {

    inicializar: function() {
        return {
            /****   DIV ORIGEN              ****/
            tree_id: "",
            /****   ORIGEN DE DATOS         ****/
            // URL de la que el arbol obtiene los datos
            sourceUrl: "",
            // tipo de origen de datos
            sourceType: "JSON",
            sourcePreloaded: false,
            // parametros adicionales que se pasaran a la pagina sourceUrl
            additionalData: function(node, obj) {
                return obj;
            },
            /****  ESTILOS ****/
            leftContentWidth: "",
            leftContentCollapsable: true,
            btnCollapse: {
                "id": "",
                "literal": "Colapsar/ampliar",
                "create": function() {
                    $("#" + this.id).button({ icons: { primary: 'ui-icon-seek-prev' }, text: false, label: this.literal }).css({ 'border': 'none', 'background': 'none' }).bind('click', this.onClick);
                    $("#" + this.id).position({ of: $(".leftcontent"), at: "right top", my: "right top" });
                },
                "onClick": function() {
                    var initialWidth = $(".divArbol").tree("getInitialWidth");
                    var self = this;
                    $(this).siblings().slideToggle();
                    $(this).parent().siblings().not("#treeBusPanel").not("#toolTipBox").slideToggle();

                    if ($(this).children(".ui-icon").hasClass("ui-icon-seek-next")) {
                        $(".leftcontent").animate({ width: initialWidth });
                        $(".leftcontent").siblings(".rightcontent").animate(
                            { width: (100 - parseInt(initialWidth.replace("%", ""))) + '%' },
                            {
                                complete: function() {
                                    $(self).position({
                                        of: $(".leftcontent"),
                                        at: "right top",
                                        my: "right top",
                                        using: function(props) {
                                            $(this).animate({ "left": props.left });
                                        }
                                    });
                                }
                            }
                        );
                    }
                    else {
                        //colapsar
                        $(".leftcontent").animate({ width: '3%' });
                        $(".leftcontent").siblings(".rightcontent").animate(
                            { width: (100 - (3)) + '%' },
                            {
                                complete: function() {
                                    $(self).position({
                                        of: $(".leftcontent"),
                                        at: "right top",
                                        my: "right top",
                                        using: function(props) {
                                            $(this).animate({ "left": props.left });
                                        }
                                    });
                                }
                            }
                        );
                    }

                    $(this).children(".ui-icon").toggleClass("ui-icon-seek-next ui-icon-seek-prev");
                }
            },
            icons: false,
            /****   NIVELES                 ****/
            // coleccion de niveles
            levels: {},
            // anadir un nivel a la coleccion
            addLevel: function(lvl) {
                var levelCount = 0;
                for (i in this.levels) { levelCount++ };
                lvl.position = levelCount;
                this.levels[lvl.id] = lvl;
            },
            // constructor de nivel
            level: function() {
                return {
                    "id": "",
                    "position": 0,
                    // si se indica onClick , este debe ser una funcion o la direccion de una de pagina. Si se indica la direccion de una pagina, esta se cargara en la parte derecha del arbol al seleccionar un nodo.
                    "onClick": null,
                    "onClickData": { prand: parURLAle() },
                    "onDblClick": "",
                    "onSelect": "",
                    "onDeselect": ""
                };
            },
            initially_open: [],
            /****   TIPOS DE NODO           ****/
            // coleccion de tipos de nodos
            nodeTypes: {},
            // anadir un tipo a la coleccion
            addNodeType: function(nodetype) {
                var translatedType = {};
                translatedType.select_node = nodetype.select;
                translatedType.open_node = nodetype.open;
                translatedType.close_node = nodetype.close;
                translatedType.delete_node = nodetype.del;
                this.nodeTypes[nodetype.id] = translatedType;
            },
            // constructor de tipo
            // valores select, delete, open y close pueden ser booleanos o funciones que retornen booleano
            nodeType: function() {
                return {
                    "id": "",
                    "select": false,
                    "del": false,
                    "open": true,
                    "close": true
                };
            },
            /****   BUSQUEDA ****/
            search: true,
            /****   BOTONES BUSQUEDA ****/
            btnRetValues: {
                "id": "",
                "literal": "Buscar",
                "create": function() {
                    $("#" + this.id).button({ label: this.literal }).bind('click', this.onClick);
                },
                "onClick": function() {
                    $(".divArbol").tree("refresh");
                    $("#treeBusPanel").hide();
                    $(".rightcontent").html('');
                }
            },
            btnSearch: {
                "id": "",
                "literal": "",
                "create": function() {
                    $("#" + this.id).button({ icons: { primary: 'ui-icon-search' }, text: false, label: this.literal }).css({ 'border': 'none', 'background': 'none' }).bind('click', this.onClick);
                },
                "onClick": function() {
                    $("#treeBusPanel").slideToggle("slow");
                    $("#treeBusPanel").position({ "of": $("#" + this.id), "my": "left top", "at": "right top" });

                    $(this).toggleClass("active").next();
                    return false;
                }
            },
            btnClear: {
                "id": "",
                "literal": "Limpiar",
                "create": function() {
                    $("#" + this.id).button({ label: this.literal }).bind('click', this.onClick);
                },
                "onClick": function() {
                    $("#treeBusPanel :input").each(function() {
                        if ($(this).attr("type") != "button") {
                            $(this).val("");
                        }
                    });
                }
            },

            onLoadNode: function() {
                return true;
            },
            setSelectedOnLoad: "",
            mostrar: function() {
                $("#" + this.tree_id).tree(this);
            }
        };
    }
};
/************************* FUNCIONES GENERICAS ARBOL *************************/
/*
*  getTreeKey
*  Dado el ID de un nodo del arbol , devuelve la parte correspondiente a la clave, eliminando el id de nivel
*/
function getTreeKey(nodeID) {
    var node = nodeID.split("_");
    if (node.length != 0) {
        return node[1];
    }
    else {
        return null;
    }
}

/*
*  getLvl
*  Dado el ID de un nodo del arbol , devuelve la parte correspondiente al id de nivel
*/
function getLvl(nodeID) {
    var node = nodeID.split("_");
    if (node.length != 0) {
        return node[0];
    }
    else {
        return null;
    }
}

/*
*  posicionarNodo
*  Dado un nodo , posiciona el panel del arbol para que el nodo sea visible
*/
function posicionarNodo(NODE) {

    try {
        if (NODE === undefined || NODE == "") {
            NODE = this.getNodeSelected();
        }
        var underlyingEl = this.element;

        if (!NODE.hasClass("selectedNode")) {
            NODE.children("a:first").click();
        }
        if (NODE.offset() != undefined && NODE.offset() != null) {
            $(".containerArbol").scrollTop(0);
            $(".containerArbol").scrollTop(NODE.offset().top - ($(".divOcultarArbol").outerHeight() + $(".divOcultarArbol").offset().top));
        }

        underlyingEl.unbind("reselect.jstree");
        underlyingEl.bind("reselect.jstree", function(event, data) {
            if (!NODE.hasClass("selectedNode")) {
                NODE.children("a:first").click();
            }
            if (NODE.offset() != undefined && NODE.offset() != null) {
                $(".containerArbol").scrollTop(0);
                $(".containerArbol").scrollTop(NODE.offset().top - ($(".divOcultarArbol").outerHeight() + $(".divOcultarArbol").offset().top));
            }
        });
    }
    catch (exception) {
        if (exception.description == null) {
            alert("Pasa por aqui. Excepci�n: " + exception.message);
        } else {
            alert("Pasa por aqui. Excepci�n: " + exception.description);
        }
    }
}

// funciones de tooltip
function hideMe() {
    $('#toolTipBox').css("display", "none");
}
function toolTip(theObj, textOnTooltip) {
    theObj.mousemove(updatePos);
    theObj.mouseout(hideMe);
    if (textOnTooltip == "") {
        $('#toolTipBox').html(theObj.innerText);
    }
    else {
        $('#toolTipBox').html(textOnTooltip);
    }
}
function updatePos(theObj) {
    var ev = arguments[0] ? arguments[0] : event;
    var x = ev.clientX;
    var y = ev.clientY;
    diffX = 24;
    diffY = 0;
    $('#toolTipBox').css("top", y - 2 + diffY + document.body.scrollTop + "px");
    $('#toolTipBox').css("left", x - 2 + diffX + document.body.scrollLeft + "px");
    $('#toolTipBox').css("display", "block");
}

/* 
* jsTree modified JSON plugin
* The HK JSON data store. Datastores are build by overriding the `load_node` and `_is_loaded` functions.
*/
(function($) {
    $.jstree.plugin("hk_json_data", {
        __init: function() {
            var s = this._get_settings().hk_json_data;
            if (s.progressive_unload) {
                this.get_container().bind("after_close.jstree", function(e, data) {
                    data.rslt.obj.children("ul").remove();
                });
            }
        },
        defaults: {
            // `data` can be a function:
            //  * accepts two arguments - node being loaded and a callback to pass the result to
            //  * will be executed in the current tree's scope & ajax won't be supported
            data: false,
            ajax: false,
            correct_state: true,
            progressive_render: true,
            progressive_unload: false
        },
        _fn: {
            load_node: function(obj, s_call, e_call) { var _this = this; this.load_node_json(obj, function() { _this.__callback({ "obj": _this._get_node(obj) }); s_call.call(this); }, e_call); },
            _is_loaded: function(obj) {
                var s = this._get_settings().hk_json_data;
                obj = this._get_node(obj);
                return obj == -1 || !obj || (!s.ajax && !s.progressive_render && !$.isFunction(s.data)) || obj.is(".jstree-open, .jstree-leaf") || obj.children("ul").children("li").length > 0;
            },
            refresh: function(obj) {
                obj = this._get_node(obj);
                var s = this._get_settings().hk_json_data;
                if (obj && obj !== -1 && s.progressive_unload && ($.isFunction(s.data) || !!s.ajax)) {
                    obj.removeData("jstree-children");
                }
                return this.__call_old();
            },
            load_node_json: function(obj, s_call, e_call) {
                var s = this.get_settings().hk_json_data, d,
					error_func = function() { },
					success_func = function() { };
                obj = this._get_node(obj);

                if (obj && obj !== -1 && (s.progressive_render || s.progressive_unload) && !obj.is(".jstree-open, .jstree-leaf") && obj.children("ul").children("li").length === 0 && obj.data("jstree-children")) {
                    d = this._parse_json(obj.data("jstree-children"), obj);
                    if (d) {
                        obj.append(d);
                        if (!s.progressive_unload) { obj.removeData("jstree-children"); }
                    }
                    this.clean_node(obj);
                    if (s_call) { s_call.call(this); }
                    return;
                }

                if (obj && obj !== -1) {
                    if (obj.data("jstree-is-loading")) { return; }
                    else { obj.data("jstree-is-loading", true); }
                }
                switch (!0) {
                    case (!s.data && !s.ajax): throw "Neither data nor ajax settings supplied.";
                        // function option added here for easier model integration (also supporting async - see callback)
                    case ($.isFunction(s.data)):
                        s.data.call(this, obj, $.proxy(function(d) {
                            d = this._parse_json(d, obj);
                            if (!d) {
                                if (obj === -1 || !obj) {
                                    if (s.correct_state) { this.get_container().children("ul").empty(); }
                                }
                                else {
                                    obj.children("a.jstree-loading").removeClass("jstree-loading");
                                    obj.removeData("jstree-is-loading");
                                    if (s.correct_state) { this.correct_state(obj); }
                                }
                                if (e_call) { e_call.call(this); }
                            }
                            else {
                                if (obj === -1 || !obj) { this.get_container().children("ul").empty().append(d.children()); }
                                else { obj.append(d).children("a.jstree-loading").removeClass("jstree-loading"); obj.removeData("jstree-is-loading"); }
                                this.clean_node(obj);
                                if (s_call) { s_call.call(this); }
                            }
                        }, this));
                        break;
                    case (!!s.data && !s.ajax) || (!!s.data && !!s.ajax && (!obj || obj === -1)):
                        if (!obj || obj == -1) {
                            d = this._parse_json(s.data, obj);
                            if (d) {
                                this.get_container().children("ul").empty().append(d.children());
                                this.clean_node();
                            }
                            else {
                                if (s.correct_state) { this.get_container().children("ul").empty(); }
                            }
                        }
                        if (s_call) { s_call.call(this); }
                        break;
                    case (!s.data && !!s.ajax) || (!!s.data && !!s.ajax && obj && obj !== -1):
                        error_func = function(x, t, e) {
                            var ef = this.get_settings().hk_json_data.ajax.error;
                            if (ef) { ef.call(this, x, t, e); }
                            if (obj != -1 && obj.length) {
                                obj.children("a.jstree-loading").removeClass("jstree-loading");
                                obj.removeData("jstree-is-loading");
                                if (t === "success" && s.correct_state) { this.correct_state(obj); }
                            }
                            else {
                                if (t === "success" && s.correct_state) { this.get_container().children("ul").empty(); }
                            }
                            if (e_call) { e_call.call(this); }
                        };
                        success_func = function(d, t, x) {
                            var sf = this.get_settings().hk_json_data.ajax.success;
                            if (sf) { d = sf.call(this, d, t, x) || d; }
                            if (d === "" || (d && d.toString && d.toString().replace(/^[\s\n]+$/, "") === "") || (!$.isArray(d) && !$.isPlainObject(d))) {
                                return error_func.call(this, x, t, "");
                            }
                            d = this._parse_json(d, obj);
                            if (d) {
                                if (obj === -1 || !obj) { this.get_container().children("ul").empty().append(d.children()); }
                                else { obj.append(d).children("a.jstree-loading").removeClass("jstree-loading"); obj.removeData("jstree-is-loading"); }
                                this.clean_node(obj);
                                if (s_call) { s_call.call(this); }
                            }
                            else {
                                if (obj === -1 || !obj) {
                                    if (s.correct_state) {
                                        this.get_container().children("ul").empty();
                                        if (s_call) { s_call.call(this); }
                                    }
                                }
                                else {
                                    obj.children("a.jstree-loading").removeClass("jstree-loading");
                                    obj.removeData("jstree-is-loading");
                                    if (s.correct_state) {
                                        this.correct_state(obj);
                                        if (s_call) { s_call.call(this); }
                                    }
                                }
                            }
                        };
                        //insert loading
                        if (obj && obj !== -1) {
                            obj.append('<ul class="hk-loading" style="display:block;"><li><a href="#" class="jstree-loading"><ins class="jstree-icon" style="display:inline-block;">&#160;</ins>' + ($.Literales['50122'] != undefined ? $.Literales['50122'] + '...' : 'Cargando...') + '</a></li></ul>');
                        }
                        s.ajax.context = this;
                        s.ajax.error = error_func;
                        s.ajax.success = success_func;
                        if (!s.ajax.dataType) { s.ajax.dataType = "json"; }
                        if ($.isFunction(s.ajax.url)) { s.ajax.url = s.ajax.url.call(this, obj); }
                        if ($.isFunction(s.ajax.data)) { s.ajax.data = s.ajax.data.call(this, obj); }
                        $.ajax(s.ajax);
                        break;
                }
            },
            _parse_json: function(js, obj, is_callback) {
                var d = false,
					p = this._get_settings(),
					s = p.hk_json_data,
					t = p.core.html_titles,
					tmp, i, j, ul1, ul2;

                if (!js) { return d; }
                if (s.progressive_unload && obj && obj !== -1) {
                    obj.data("jstree-children", d);
                }
                if ($.isArray(js)) {
                    d = $('<ul>');
                    if (!js.length) { return false; }
                    for (i = 0, j = js.length; i < j; i++) {
                        tmp = this._parse_json(js[i], obj, true);
                        if (tmp.length) {
                            d = d.append(tmp);
                        }
                    }
                    d = d.children();
                }
                else {
                    if (typeof js == "string") { js = { data: js }; }
                    if (!js.data && js.data !== "") { return d; }
                    d = $("<li />");
                    if (js.attr) { d.attr(js.attr); }
                    if (js.metadata) { d.data(js.metadata); }
                    if (js.state) { d.addClass("jstree-" + js.state); }
                    if (!$.isArray(js.data)) { tmp = js.data; js.data = []; js.data.push(tmp); }
                    $.each(js.data, function(i, m) {
                        tmp = $("<a />");
                        if ($.isFunction(m)) { m = m.call(this, js); }
                        if (typeof m == "string") { tmp.attr('href', '#')[t ? "html" : "text"](m); }
                        else {
                            if (!m.attr) { m.attr = {}; }
                            if (!m.attr.href) { m.attr.href = '#'; }
                            tmp.attr(m.attr)[t ? "html" : "text"](m.title);
                            if (m.language) { tmp.addClass(m.language); }
                        }
                        tmp.prepend("<ins class='jstree-icon'>&#160;</ins>");
                        if (!m.icon && js.icon) { m.icon = js.icon; }
                        if (m.icon) {
                            if (m.icon.indexOf("/") === -1) { tmp.children("ins").addClass(m.icon); }
                            else { tmp.children("ins").css("background", "url('" + m.icon + "') center center no-repeat"); }
                        }
                        d.append(tmp);
                    });
                    d.prepend("<ins class='jstree-icon'>&#160;</ins>");
                    if (js.children) {
                        if (s.progressive_render && js.state !== "open") {
                            d.addClass("jstree-closed").data("jstree-children", js.children);
                        }
                        else {
                            if (s.progressive_unload) { d.data("jstree-children", js.children); }
                            if ($.isArray(js.children) && js.children.length) {
                                tmp = this._parse_json(js.children, obj, true);
                                if (tmp.length) {
                                    ul2 = $("<ul />");
                                    ul2.append(tmp);
                                    d.append(ul2);
                                }
                            }
                        }
                    }
                }
                if (!is_callback) {
                    //remove loading
                    if (obj != -1) {
                        obj.children("ul.hk-loading").remove();
                    }
                    ul1 = $("<ul />");
                    ul1.append(d);
                    d = ul1;
                }
                return d;
            },
            get_json: function(obj, li_attr, a_attr, is_callback) {
                var result = [],
					s = this._get_settings(),
					_this = this,
					tmp1, tmp2, li, a, t, lang;
                obj = this._get_node(obj);
                if (!obj || obj === -1) { obj = this.get_container().find("> ul > li"); }
                li_attr = $.isArray(li_attr) ? li_attr : ["id", "class"];
                if (!is_callback && this.data.types) { li_attr.push(s.types.type_attr); }
                a_attr = $.isArray(a_attr) ? a_attr : [];

                obj.each(function() {
                    li = $(this);
                    tmp1 = { data: [] };
                    if (li_attr.length) { tmp1.attr = {}; }
                    $.each(li_attr, function(i, v) {
                        tmp2 = li.attr(v);
                        if (tmp2 && tmp2.length && tmp2.replace(/jstree[^ ]*/ig, '').length) {
                            tmp1.attr[v] = (" " + tmp2).replace(/ jstree[^ ]*/ig, '').replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "");
                        }
                    });
                    if (li.hasClass("jstree-open")) { tmp1.state = "open"; }
                    if (li.hasClass("jstree-closed")) { tmp1.state = "closed"; }
                    if (li.data()) { tmp1.metadata = li.data(); }
                    a = li.children("a");
                    a.each(function() {
                        t = $(this);
                        if (
							a_attr.length ||
							$.inArray("languages", s.plugins) !== -1 ||
							t.children("ins").get(0).style.backgroundImage.length ||
							(t.children("ins").get(0).className && t.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig, '').length)
						) {
                            lang = false;
                            if ($.inArray("languages", s.plugins) !== -1 && $.isArray(s.languages) && s.languages.length) {
                                $.each(s.languages, function(l, lv) {
                                    if (t.hasClass(lv)) {
                                        lang = lv;
                                        return false;
                                    }
                                });
                            }
                            tmp2 = { attr: {}, title: _this.get_text(t, lang) };
                            $.each(a_attr, function(k, z) {
                                tmp2.attr[z] = (" " + (t.attr(z) || "")).replace(/ jstree[^ ]*/ig, '').replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "");
                            });
                            if ($.inArray("languages", s.plugins) !== -1 && $.isArray(s.languages) && s.languages.length) {
                                $.each(s.languages, function(k, z) {
                                    if (t.hasClass(z)) { tmp2.language = z; return true; }
                                });
                            }
                            if (t.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig, '').replace(/^\s+$/ig, "").length) {
                                tmp2.icon = t.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig, '').replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "");
                            }
                            if (t.children("ins").get(0).style.backgroundImage.length) {
                                tmp2.icon = t.children("ins").get(0).style.backgroundImage.replace("url(", "").replace(")", "");
                            }
                        }
                        else {
                            tmp2 = _this.get_text(t);
                        }
                        if (a.length > 1) { tmp1.data.push(tmp2); }
                        else { tmp1.data = tmp2; }
                    });
                    li = li.find("> ul > li");
                    if (li.length) { tmp1.children = _this.get_json(li, li_attr, a_attr, true); }
                    result.push(tmp1);
                });
                return result;
            }
        }
    });
})(jQuery);
//*/

/* 
* jsTree HTML plugin
* The HTML data store. Datastores are build by replacing the `load_node` and `_is_loaded` functions.
*/
(function($) {
    $.jstree.plugin("hk_html_data", {
        __init: function() {
            // this used to use html() and clean the whitespace, but this way any attached data was lost
            this.data.hk_html_data.original_container_html = this.get_container().find(" > ul > li").clone(true);
            // remove white space from LI node - otherwise nodes appear a bit to the right
            this.data.hk_html_data.original_container_html.find("li").andSelf().contents().filter(function() { return this.nodeType == 3; }).remove();
        },
        defaults: {
            data: false,
            ajax: false,
            correct_state: true
        },
        _fn: {
            load_node: function(obj, s_call, e_call) { var _this = this; this.load_node_html(obj, function() { _this.__callback({ "obj": _this._get_node(obj) }); s_call.call(this); }, e_call); },
            _is_loaded: function(obj) {
                obj = this._get_node(obj);
                return obj == -1 || !obj || (!this._get_settings().hk_html_data.ajax && !$.isFunction(this._get_settings().hk_html_data.data)) || obj.is(".jstree-open, .jstree-leaf") || obj.children("ul").children("li").size() > 0;
            },
            load_node_html: function(obj, s_call, e_call) {
                var d,
					s = this.get_settings().hk_html_data,
					error_func = function() { },
					success_func = function() { };
                obj = this._get_node(obj);
                if (obj && obj !== -1) {
                    if (obj.data("jstree-is-loading")) { return; }
                    else { obj.data("jstree-is-loading", true); }
                }
                switch (!0) {
                    case ($.isFunction(s.data)):
                        s.data.call(this, obj, $.proxy(function(d) {
                            if (d && d !== "" && d.toString && d.toString().replace(/^[\s\n]+$/, "") !== "") {
                                d = $(d);
                                if (!d.is("ul")) { d = $("<ul />").append(d); }
                                if (obj == -1 || !obj) { this.get_container().children("ul").empty().append(d.children()).find("li, a").filter(function() { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"); }
                                else { obj.children("a.jstree-loading").removeClass("jstree-loading"); obj.append(d).children("ul").find("li, a").filter(function() { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"); obj.removeData("jstree-is-loading"); }
                                this.clean_node(obj);
                                if (s_call) { s_call.call(this); }
                            }
                            else {
                                if (obj && obj !== -1) {
                                    obj.children("a.jstree-loading").removeClass("jstree-loading");
                                    obj.removeData("jstree-is-loading");
                                    if (s.correct_state) {
                                        this.correct_state(obj);
                                        if (s_call) { s_call.call(this); }
                                    }
                                }
                                else {
                                    if (s.correct_state) {
                                        this.get_container().children("ul").empty();
                                        if (s_call) { s_call.call(this); }
                                    }
                                }
                            }
                        }, this));
                        break;
                    case (!s.data && !s.ajax):
                        if (!obj || obj == -1) {
                            this.get_container()
								.children("ul").empty()
								.append(this.data.hk_html_data.original_container_html)
								.find("li, a").filter(function() { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end()
								.filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon");
                            this.clean_node();
                        }
                        if (s_call) { s_call.call(this); }
                        break;
                    case (!!s.data && !s.ajax) || (!!s.data && !!s.ajax && (!obj || obj === -1)):
                        if (!obj || obj == -1) {
                            d = $(s.data);
                            if (!d.is("ul")) { d = $("<ul />").append(d); }
                            this.get_container()
								.children("ul").empty().append(d.children())
								.find("li, a").filter(function() { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end()
								.filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon");
                            this.clean_node();
                        }
                        if (s_call) { s_call.call(this); }
                        break;
                    case (!s.data && !!s.ajax) || (!!s.data && !!s.ajax && obj && obj !== -1):
                        obj = this._get_node(obj);
                        error_func = function(x, t, e) {
                            var ef = this.get_settings().hk_html_data.ajax.error;
                            if (ef) { ef.call(this, x, t, e); }
                            if (obj != -1 && obj.length) {
                                obj.children("a.jstree-loading").removeClass("jstree-loading");
                                obj.removeData("jstree-is-loading");
                                if (t === "success" && s.correct_state) { this.correct_state(obj); }
                            }
                            else {
                                if (t === "success" && s.correct_state) { this.get_container().children("ul").empty(); }
                            }
                            if (e_call) { e_call.call(this); }
                        };
                        success_func = function(d, t, x) {
                            var sf = this.get_settings().hk_html_data.ajax.success;
                            if (sf) { d = sf.call(this, d, t, x) || d; }
                            //remove loading
                            if (obj != -1) {
                                obj.children("ul.hk-loading").remove();
                            }

                            if (d === "" || (d && d.toString && d.toString().replace(/^[\s\n]+$/, "") === "") || d.d === "") {
                                return error_func.call(this, x, t, "");
                            }
                            if (d) {
                                d = $(d);
                                if (!d.is("ul")) { d = $("<ul />").append(d); }

                                if (obj == -1 || !obj) { this.get_container().children("ul").empty().append(d.children()).find("li, a").filter(function() { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"); }
                                else { obj.children("a.jstree-loading").removeClass("jstree-loading"); obj.append(d).children("ul").find("li, a").filter(function() { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"); obj.removeData("jstree-is-loading"); }
                                this.clean_node(obj);
                                if (s_call) { s_call.call(this); }
                            }
                            else {
                                if (obj && obj !== -1) {
                                    obj.children("a.jstree-loading").removeClass("jstree-loading");
                                    obj.removeData("jstree-is-loading");
                                    if (s.correct_state) {
                                        this.correct_state(obj);
                                        if (s_call) { s_call.call(this); }
                                    }
                                }
                                else {
                                    if (s.correct_state) {
                                        this.get_container().children("ul").empty();
                                        if (s_call) { s_call.call(this); }
                                    }
                                }
                            }
                        };
                        //insert loading
                        if (!this.get_settings().themes.icons) {
                            obj.append('<ul class="hk-loading" style="display:block;"><li><a href="#" class="jstree-loading"><ins class="jstree-icon" style="display:inline-block;">&#160;</ins>' + ($.Literales['50122'] != undefined ? $.Literales['50122'] + '...' : 'Cargando...') + '</a></li></ul>');
                        }
                        s.ajax.context = this;
                        s.ajax.error = error_func;
                        s.ajax.success = success_func;
                        if (!s.ajax.dataType) { s.ajax.dataType = "html"; }
                        if ($.isFunction(s.ajax.url)) { s.ajax.url = s.ajax.url.call(this, obj); }
                        if ($.isFunction(s.ajax.data)) { s.ajax.data = s.ajax.data.call(this, obj); }
                        $.ajax(s.ajax);
                        break;
                }
            }
        }
    });
    // include the HTML data plugin by default
    $.jstree.defaults.plugins.push("hk_html_data");
})(jQuery);
//*/

/************************* WIDGET *************************/
$.widget("ui.tree", {
    // IKT tree instance info
    levelCount: 0,
    nodeSelected: null,
    keySelected: "",
    initialWidth: "",
    getKeySelected: function() {
        return this.keySelected;
    },
    getNodeSelected: function() {
        return this.nodeSelected;
    },
    posicionarNodo: function(NODE) {
        var args = new Array();
        args[0] = NODE;
        posicionarNodo.apply(this, args);
    },
    refresh: function(node, f) {
        var underlyingEl = this.element;
        var self = this;
        underlyingEl.unbind("refresh.jstree");
        underlyingEl.bind("refresh.jstree", function(event, data) {
            if (f != undefined) f.apply(self);
        });
        underlyingEl.jstree("refresh", node, f);
    },
    remove: function(node) {
        var underlyingEl = this.element;
        if (node == undefined) {
            node = this.getNodeSelected();
        }
        var positionOnNode = "";
        var hasSiblings = $(node).prev("li").size() > 0;
        if (hasSiblings) {
            positionOnNode = $(node).prev("li");
        }
        else {
            positionOnNode = $(node).parents("li").eq(0);
        }
        $(node).remove();
        this.posicionarNodo(positionOnNode);
    },
    createNode: function(objConf) {
        var node = objConf.node != null ? objConf.node : this.getNodeSelected();
        var position = objConf.position != "" ? objConf.position : position = "last";
        var js = objConf.newTreeItem;
        var skip_rename = true;
        var callback = $.isFunction(objConf.callback) ? objConf.callback : false;
        var underlyingEl = this.element;
        $(underlyingEl).jstree("create", node, position, js, callback, skip_rename);
    },
    removeNode: function(node) {
        var underlyingEl = this.element;
        $(underlyingEl).jstree("remove", node);
    },
    // jstree defaults
    _defaults: {
        "themes": {
            "theme": "IKT",
            "url": rutaMaster,
            "dots": false,
            "icons": false
        },
        "types": {
            types: {}
        },
        "ui": {
            "initially_select": [""]
        },
        "core": {
            "initially_open": [""]
        },
        "plugins": ["themes", "ui", "crrm"]
    },
    _create: function() {
        var self = this;
        var underlyingEl = this.element;

        if (self.options.leftContentWidth != "") {
            $(underlyingEl).closest(".leftcontent").width(self.options.leftContentWidth);
            $(underlyingEl).closest(".leftcontent").siblings(".rightcontent").width((100 - parseFloat(self.options.leftContentWidth.replace("%", ""))) + '%');
        }

        var empty = null;
        empty = new Array();
        var settings = null;
        settings = $.extend(true, empty, this._defaults);

        for (i in self.options.levels) {
            self.levelCount++;
        }

        var pluginName;

        self.initialWidth = self.options.leftContentWidth;

        switch (this.options.sourceType) {
            case "JSON":
                pluginName = "json_data";
                break;
            case "HTML":
                pluginName = "html_data";
                break;
            case "HKJSON":
                pluginName = "hk_json_data"
                break;
            case "HKHTML":
                pluginName = "hk_html_data";
                break;
        }

        settings[pluginName] = {};
        settings[pluginName]["ajax"] = {};
        settings[pluginName].ajax.url = self.options.sourceUrl;
        settings[pluginName].ajax.data = function(node) {
            var obj = new Object;
            obj.id = node.attr ? node.attr("id") : 0;
            obj.level = $(node).data().level ? $(node).data().level : 0;
            obj.levelCount = self.levelCount;
            obj.hash = viewHash;
            obj.where = {};
            if (self.options.search) {
                obj.where = self._addSearchValues(obj.where);
            }
            obj.where = self.options.additionalData.call(this, node, obj.where)

            return JSON.stringify(obj);
        };
        settings[pluginName].ajax.type = "POST";
        settings[pluginName].ajax.dataType = "json";
        settings[pluginName].ajax.contentType = "application/json; charset=utf-8";
        settings[pluginName].ajax.success = function(data) {
            switch (self.options.sourceType) {
                case "JSON":
                    return data.d.data;
                    break;
                case "HTML":
                    return data.d;
                    break;
                case "HKJSON":
                    return data.d.data;
                    break;
                case "HKHTML":
                    return data.d;
                    break;
            }
        }
        settings.plugins.push(pluginName);

        if (this.options.initially_open.length > 0) {
            settings.core.initially_open = this.options.initially_open;
        }

        settings.ui.initially_select[0] = this.options.setSelectedOnLoad;
        settings.types.types = this.options.nodeTypes;
        if (settings.types.types != "") {
            settings.plugins.push("types");
        }

        if (self.options.icons) {
            settings.themes.icons = this.options.icons;
        }

        // load initial data if it exists
        if (this.options.sourcePreloaded) {
            settings[pluginName]["data"] = this._loadInitialData(this.options.sourceType, this.options.levels);
        }

        underlyingEl.jstree(settings);

        underlyingEl
        .bind("select_node.jstree", function(event, data) {
            var NODE = data.rslt.obj;
            var treeInstance = $(this).data("tree");
            treeInstance.nodeSelected = NODE;
            treeInstance.keySelected = $(NODE).attr("id");

            $(".selectedNode").removeClass("selectedNode ui-state-highlight");
            $(NODE).children("a").addClass("selectedNode ui-state-highlight");

            var level = treeInstance.options.levels[getLvl(treeInstance.keySelected)];
            if (level !== undefined) {
                if ($.isFunction(level.onSelect)) {
                    level.onSelect.apply(treeInstance);
                }
            }
        })
        .bind("deselect_node.jstree", function(event, data) {
            var NODE = data.rslt.obj;
            $(NODE).removeClass("selectedNode ui-state-highlight");

            var treeInstance = $(this).data("tree");
            var level = treeInstance.options.levels[getLvl(treeInstance.keySelected)];
            if (level !== undefined) {
                if ($.isFunction(level.onDeselect)) {
                    level.onDeselect.apply(treeInstance);
                }
            }
        })
        .bind("dblclick.jstree", function(event) {
            var treeInstance = $(this).data("tree");
            var level = treeInstance.options.levels[getLvl(treeInstance.keySelected)];

            if (level != undefined) {
                if ($.isFunction(level.onDblClick)) {
                    level.onDblClick.apply(treeInstance);
                }
                else {
                    underlyingEl.jstree("open_node", treeInstance.nodeSelected);
                }
            }
        })
        .bind("click.jstree", function(event) {
            if ($(event.currentTarget).is("a") || $(event.target).is("a")) {
                var treeInstance = $(this).data("tree");
                var level = treeInstance.options.levels[getLvl(treeInstance.keySelected)];
                if (level != undefined) {
                    if ($.isFunction(level.onClick)) {
                        level.onClick.apply(treeInstance);
                    }
                    else {
                        level.onClickData.xID = treeInstance.keySelected;
                        $('.rightcontent').load(level.onClick, level.onClickData);
                    }

                }
            }
        })

        .bind("load_node.jstree", function(event, data) {
            // a cada a de un li asociarle el tooltip, si tiene span tooltip
            $(".tooltipSpan").parent("a").mouseover(function() {
                var text = $(this).children("span").text();
                toolTip($(this), text);
            });

            var treeInstance = $(this).data("tree");
            var args = new Array();
            args[0] = data.rslt.obj;
            treeInstance.options.onLoadNode.apply(treeInstance, args);
        })
        .bind("hover_node.jstree", function(event, data) {
            var NODE = data.rslt.obj;
            $(NODE).children("a").addClass("ui-state-highlight");
        })
        .bind("dehover_node.jstree", function(event, data) {
            var NODE = data.rslt.obj;
            $(NODE).children("a:not(.selectedNode)").removeClass("ui-state-highlight");
        })
        ;

        this._initButtons();
    },
    _initButtons: function() {
        if (this.options.btnRetValues.id != "") {
            this.options.btnRetValues.create();
        }
        if (this.options.btnClear.id != "") {
            this.options.btnClear.create();
        }
        if (this.options.btnSearch.id != "") {
            this.options.btnSearch.create();
        }
        if (this.options.leftContentCollapsable && this.options.btnCollapse.id != "") {
            this.options.btnCollapse.create();
        }

        $(".contentHeaderClose", "#treeBusPanel").bind('click', function() {
            $("#treeBusPanel").hide();
        });

        $(".contentHeaderClose", ".contentHeader").click(function() {
            $(".main").html('');
        });
    },
    _loadInitialData: function(sourceType, levels) {
        var self = this;
        for (level in levels) {
            if (levels[level].text != undefined) {
                switch (sourceType) {
                    case "JSON":
                        return self._loadInitialDataJSON(levels[level].id, levels[level].text);
                        break;
                    case "HKJSON":
                        return self._loadInitialDataJSON(levels[level].id, levels[level].text);
                        break;
                    case "HTML":
                        return self._loadInitialDataHTML(levels[level].id, levels[level].text);
                        break;
                    case "HKHTML":
                        return self._loadInitialDataHTML(levels[level].id, levels[level].text);
                        break;
                }
            }
        }
    },
    _loadInitialDataHTML: function(nodeKey, nodeText) {
        return "<li class='jstree-closed' id='" + nodeKey + "'><a href='#'>" + nodeText + "</a></li>"
    },
    _loadInitialDataJSON: function(nodeKey, nodeText) {
        return [
			{
			    "attr": { "id": nodeKey },
			    "data": {
			        "title": nodeText,
			        "attr": { "href": "#" },
			        "icon": "noIcon"
			    },
			    "state": "closed"
			}
		]
    },
    _addSearchValues: function(obj) {
        var self = this;
        $(".bodyBusqueda input").each(function(i, el) {
            obj[$(el).attr("id")] = $(el).val()
        });
        return obj;
    },
    getInitialWidth: function() {
        return this.initialWidth;
    }
});

