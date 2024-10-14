/************************* VALORES POR DEFECTO *************************/
var ikt_tree_conf = {
    
    inicializar : function(){
        return {
            /****   DIV ORIGEN              ****/
            tree_id: "",
            /****   ORIGEN DE DATOS         ****/
            // URL de la que el arbol obtiene los datos
            sourceUrl: "",
            // parametros adicionales que se pasaran a la pagina sourceUrl
            additionalData: {},
            /****   NIVELES                 ****/
            // coleccion de niveles
            levels: {},  
            // anadir un nivel a la coleccion
            addLevel : function (lvl)
            {
                this.levels[lvl.id] = lvl;
            },
            // constructor de nivel
            level : function() {
                return {
                    "id":"",
                    // si se indica onClick , este debe ser una funcion o la direccion de una de pagina. Si se indica la direccion de una pagina, esta se cargara en la parte derecha del arbol al seleccionar un nodo.
                    "onClick": function(){return;}, 
                    "onClickData":{xID:"", prand: parURLAle()},
                    "onDblClick":"",
                    "onSelect": "",
                    "onDeselect": ""
                }; 
            },
            /****   TIPOS DE NODO           ****/
            // coleccion de tipos de nodos
            nodeTypes:{},
            // anadir un tipo a la coleccion
            addNodeType: function(nodetype){
                var translatedType = {};
                translatedType.select_node  = nodetype.select;
                translatedType.open_node    = nodetype.open;
                translatedType.close_node   = nodetype.close;
                translatedType.delete_node  = nodetype.del;
                this.nodeTypes[nodetype.id] = translatedType;
            },
            // constructor de tipo
            // valores select, delete, open y close pueden ser booleanos o funciones que retornen booleano
            nodeType : function(){
                return {
                    "id":"",
                    "select":false,
                    "del":false,
                    "open":true,
                    "close":true
                };
            },	
            /****   BOTONES BUSQUEDA ****/
            btnRetValues: {
                "id" : "",
                "literal" : "Buscar",
                "create": function(){
                    $("#" + this.id).button({label: this.literal}).bind('click', this.onClick);
                },
                "onClick": function(){
                    $(".divArbol").tree("refresh");
                    $("#treeBusPanel").hide();
                    $(".rightcontent").html('');
                }
            },
            btnSearch:{
                "id" : "",
                "create": function(){
                    $("#"+this.id).bind('click', this.onClick)
                    .hover(
                        function() {
                          $(this).addClass('ui-state-hover');
                        },
                        function() {
                          $(this).removeClass('ui-state-hover');
                        }
                    ).focus(
                        function() {
                          $(this).addClass('ui-state-focus');
                    })
                    .blur(function() {
                        $(this).removeClass('ui-state-focus');
                    });
                },
                "onClick": function(){
                    /*
                    $("#treeBusPanel").css('top',$("#"+this.id).offset().top + 'px');
                    $("#treeBusPanel").css('left',$("#"+this.id).offset().left + $("#"+this.id).innerWidth() + 5 + 'px');
                    */
                    $("#treeBusPanel").slideToggle("slow");
                    $("#treeBusPanel").position({"of": $("#"+this.id), "my": "left top", "at": "right top"});
                    
                    $(this).toggleClass("active").next();
                    return false;
                }
            },
            btnClear: {
                "id" : "",
                "literal" : "Limpiar",
                "create": function(){
                    $("#" + this.id).button({label: this.literal}).bind('click', this.onClick);
                },
                "onClick": function(){
                    $("#treeBusPanel :input").each(function(){
                        if($(this).attr("type")!="button"){
                            $(this).val("");
                        }
                    });
                }
            },
            onLoadNode: function(){
                return true;
            },
			setSelectedOnLoad: "",
            mostrar : function(){
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
function posicionarNodoAlert(NODE){

    try
    {
        jAlert(XmlValor_Chequear("Proceso concluido."), '');
    
        if (NODE === undefined || NODE == ""){
            NODE = this.getNodeSelected();
        }
        var underlyingEl = this.element;
        
        if (! NODE.hasClass("selectedNode")){
            NODE.children("a:first").click();
        }
        if (NODE.offset() != undefined && NODE.offset() != null ){
            $(".containerArbol").scrollTop(0);
            $(".containerArbol").scrollTop(NODE.offset().top - ($(".divOcultarArbol").outerHeight() + $(".divOcultarArbol").offset().top) ); 
        }
            
        underlyingEl.unbind("reselect.jstree");
        underlyingEl.bind("reselect.jstree", function(event, data){
            if (! NODE.hasClass("selectedNode")){
                NODE.children("a:first").click();
            }
             if (NODE.offset() != undefined && NODE.offset() != null ){
                $(".containerArbol").scrollTop(0);
                $(".containerArbol").scrollTop(NODE.offset().top - ($(".divOcultarArbol").outerHeight() + $(".divOcultarArbol").offset().top) ); 
            }
        });
    }
    catch(exception)
    {
         if (exception.description == null) {
            jAlert(XmlValor_Chequear(exception.message), '');  
          } else {
            jAlert(XmlValor_Chequear(exception.description), ''); 
          }
    }
}


/*
 *  posicionarNodo
 *  Dado un nodo , posiciona el panel del arbol para que el nodo sea visible
 */
function posicionarNodo(NODE){

    try
    {
  
        if (NODE === undefined || NODE == ""){
            NODE = this.getNodeSelected();
        }
        var underlyingEl = this.element;
        
        if (! NODE.hasClass("selectedNode")){
            NODE.children("a:first").click();
        }
        if (NODE.offset() != undefined && NODE.offset() != null ){
            $(".containerArbol").scrollTop(0);
            $(".containerArbol").scrollTop(NODE.offset().top - ($(".divOcultarArbol").outerHeight() + $(".divOcultarArbol").offset().top) ); 
        }
            
        underlyingEl.unbind("reselect.jstree");
        underlyingEl.bind("reselect.jstree", function(event, data){
            if (! NODE.hasClass("selectedNode")){
                NODE.children("a:first").click();
            }
             if (NODE.offset() != undefined && NODE.offset() != null ){
                $(".containerArbol").scrollTop(0);
                $(".containerArbol").scrollTop(NODE.offset().top - ($(".divOcultarArbol").outerHeight() + $(".divOcultarArbol").offset().top) ); 
            }
        });
    }
    catch(exception)
    {
         if (exception.description == null) {
            jAlert(XmlValor_Chequear(exception.message), '');  
          } else {
            jAlert(XmlValor_Chequear(exception.description), ''); 
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

/************************* WIDGET *************************/

$.widget("ui.tree", {
    // IKT tree instance info
	nodeSelected: null,
    keySelected:"",
    getKeySelected: function(){
        return this.keySelected;
	},
    getNodeSelected: function(){
        return this.nodeSelected;
    },
    posicionarNodo: function(NODE){
        var args = new Array();
        args[0] = NODE;
        posicionarNodo.apply(this, args);
    },
    posicionarNodoAlert: function(NODE){
        var args = new Array();
        args[0] = NODE;
        posicionarNodoAlert.apply(this, args);
    },
	refresh : function(node, f){
        var underlyingEl = this.element;
        var self = this;
        underlyingEl.unbind("refresh.jstree");
        underlyingEl.bind("refresh.jstree", function(event, data){
            if(f!=undefined)f.apply(self);
        });
        underlyingEl.jstree("refresh", node,f);
	},
	remove: function(node){
        var underlyingEl = this.element;
        if(node == undefined){
            node = this.getNodeSelected();
        }
        var positionOnNode = "";
        var hasSiblings = $(node).prev("li").size() > 0;
        if (hasSiblings){
            positionOnNode = $(node).prev("li");
        }
        else{
            positionOnNode = $(node).parents("li").eq(0);
        }
        $(node).remove();
        this.posicionarNodo(positionOnNode);
	},
	// jstree defaults
	_defaults: {
		"html_data" : {
			"ajax" : {
					url:"",
					data:""
			}
		},
		"themes":{
			"theme" : "IKT",
			"url" : rutaMaster,
			"dots" : false,
			"icons" : false
		},            
		"types":{
			types:{}
		},
		"ui":{
			"initially_select" : [""]
		},
		"plugins" : [ "themes", "html_data", "ui" ]
	},
    _create: function() {
        var self = this;
		var underlyingEl = this.element;

		var empty = {};
        var settings = $.extend(empty, this._defaults);
		
		settings.html_data.ajax.url = this.options.sourceUrl;		
		settings.html_data.ajax.data = this.options.additionalData;
		settings.ui.initially_select[0] = this.options.setSelectedOnLoad;
		settings.types.types = this.options.nodeTypes;
		if (settings.types.types != ""){
            settings.plugins.push("types");
		}
		underlyingEl.jstree(settings);
		
		underlyingEl
        .bind("select_node.jstree", function (event, data) {
            var NODE = data.rslt.obj;
            var treeInstance = $(this).data("tree");
            treeInstance.nodeSelected = NODE;
            treeInstance.keySelected = $(NODE).attr("id");
            
            $(".selectedNode").removeClass("selectedNode ui-state-highlight");
            $(NODE).children("a").addClass("selectedNode ui-state-highlight");
            
            var level = treeInstance.options.levels[getLvl(treeInstance.keySelected)];
            if (level !== undefined ){
                if ($.isFunction(level.onSelect)){
                    level.onSelect.apply(treeInstance);
                }
            }
            
        })
        .bind("deselect_node.jstree", function (event, data) {
            var NODE = data.rslt.obj;
            $(NODE).removeClass("selectedNode ui-state-highlight");
            
            var treeInstance = $(this).data("tree");    
            var level = treeInstance.options.levels[getLvl(treeInstance.keySelected)];
            if (level !== undefined ){
                if ($.isFunction(level.onDeselect)){
                    level.onDeselect.apply(treeInstance);
                }
            }
        })
        .bind("dblclick.jstree", function (event){
            var treeInstance = $(this).data("tree");           
            var level = treeInstance.options.levels[getLvl(treeInstance.keySelected)];
            
            if (level != undefined ){
                if ($.isFunction(level.onDblClick)){
                    level.onDblClick.apply(treeInstance);
                }
                else{
                    underlyingEl.jstree("open_node", treeInstance.nodeSelected);
                }
            }
        })
        .bind("click.jstree", function(event){
            if ($(event.currentTarget).is("a")) {
                var treeInstance = $(this).data("tree");
                var level = treeInstance.options.levels[getLvl(treeInstance.keySelected)];
                if (level != undefined ){
                    if ($.isFunction(level.onClick)){
                        level.onClick.apply(treeInstance);
                    }
                    else{
                        level.onClickData.xID = treeInstance.keySelected;
                        $('.rightcontent').load(level.onClick, level.onClickData);
                    }
                }
            }
        })
        .bind("load_node.jstree", function(event,data){
            // a cada a de un li asociarle el tooltip, si tiene span tooltip
            $(".tooltipSpan").parent("a").mouseover(function(){
                var text = $(this).children("span").text();
                toolTip($(this),text);
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
        .bind("dehover_node.jstree", function(event, data){
             var NODE = data.rslt.obj;
            $(NODE).children("a:not(.selectedNode)").removeClass("ui-state-highlight");
        })
        ;
        
        this._initButtons();
	},
	_initButtons: function(){
        if (this.options.btnRetValues.id != ""){
            this.options.btnRetValues.create();
        }
        if (this.options.btnClear.id != ""){
            this.options.btnClear.create();
        }
		if (this.options.btnSearch.id != ""){
            this.options.btnSearch.create();
		}		
        $(".contentHeaderClose","#treeBusPanel").bind('click', function(){
            $("#treeBusPanel").hide();
        });

        $(".contentHeaderClose",".contentHeader").click(function(){
            $(".main").html('');
        });		
    }
});

