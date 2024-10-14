$.extend(
{
    controles:
    {
        crear:
            function(value, options) {
                var htmlstr = "<p>";
                // Se recorren los elementos de la columna a crear    
                $.each(options.elementos,
                    function() {
                        htmlstr += " " + $.controles[this.tipo_control].crear(this, options);
                    });
                return htmlstr += "<p>";
            },
        free: {
            crear: function(elemento, options) {
                var html = elemento.contenidoHTML(elemento);
                return html;
            }
        },
        caja:
            {
                crear:
                 function(elemento, options) {
                     // Se llama a la función origen de datos para recuperar la información
                     var resul = options.custom_value(elemento.campo, "set");
                     resul = resul == undefined ? "" : resul
                     var editable = elemento.editable || elemento.editable == undefined ? '' : ' readonly ';
                     // Se comprueba la función de comprobación individual
                     if (elemento.editable)
                     { editable = elemento.ctlCampoEditable(elemento, options) ? '' : ' readonly '; }
                     var backcolor = editable == '' ? '' : 'background-color:#E6E6E6;';
                     var ancho = elemento.ancho == '' || elemento.ancho == undefined ? 'width:0px;' : 'width:' + elemento.ancho + 'px;';
                     var long_max = elemento.long_max == '' || elemento.long_max == undefined ? '' : 'maxlength = ' + elemento.long_max;
                     var exp_validar = elemento.exp_validar == undefined ? '' : elemento.exp_validar;
                     var obligatorio = !elemento.obligatorio || elemento.obligatorio == undefined ? '' : 'O';
                     var valor_defecto = elemento.valor_defecto == undefined ? '' : elemento.valor_defecto;
                     resul = resul.length == 0 ? valor_defecto : resul;
                     var tipo_dato = elemento.tipo_dato == '' || elemento.tipo_dato == undefined ? '' : elemento.tipo_dato;
                     var saltolinea = elemento.saltolinea == false || elemento.saltolinea == undefined ? '' : '<p>';
                     // Se recorren los eventos del elemento para establecerlos
                     var eventos = " ";
                     $.each(elemento.eventos,
                        function() {
                            eventos += " " + this.tipo + "='" + this.valor + "(\"" + JSON.stringify(elemento).replace(/\"/g, "\\\"") + "\",\"" + JSON.stringify(options).replace(/\"/g, "\\\"") + "\")'";
                        });
                     if (tipo_dato == "ND_PC") {
                         eventos += "  onkeypress='controlPuntoComa()'";
                         tipo_dato = "ND";
                     }
                     var li_class = obligatorio + ' ' + tipo_dato + ' ' + exp_validar
                     if (li_class != '') { li_class = " class = '" + li_class + "'" };
                     var descripcion = elemento.descripcion == '' || elemento.descripcion == undefined ? '' : elemento.descripcion;
                     el = saltolinea;
                     el = el + "<span " + li_class + " >"
                     el = el + "<input type='text' id='" + elemento.id + "' name='" + elemento.id + "' value='" + resul + "' " + editable + " style='" + ancho + backcolor + "' " + long_max + " class='text_blanco' title='" + descripcion + "' desc='" + descripcion + "' " + eventos + " />";
                     el = el + "</span>"

                     return el;
                 }
            },
        etiqueta:
            {
                crear:
                 function(elemento, options) {
                     // Se llama a la función origen de datos para recuperar la información
                     var resul = options.custom_value(elemento.campo, "set");
                     resul = resul == undefined ? "" : resul
                     var ancho = elemento.ancho == '' || elemento.ancho == undefined ? 'width:0px;' : 'width:' + elemento.ancho + 'px;';
                     var valor_defecto = elemento.valor_defecto == undefined ? '' : elemento.valor_defecto;
                     resul = resul.length == 0 ? valor_defecto : resul;
                     var saltolinea = elemento.saltolinea == false || elemento.saltolinea == undefined ? '' : '<p>';
                     var li_class = "";
                     if (li_class != '') { li_class = " class = '" + li_class + "'" };
                     var el = saltolinea;
                     el = el + "<span " + li_class + " >"
                     el = el + "<span type='text' id='" + elemento.id + "' name='" + elemento.id + "' style='" + ancho + "'>" + resul + "</span>";
                     el = el + "</span>"

                     return el;
                 }
            },
        autocompletar:
            {
                crear:
                 function(elemento, options) {
                     // Se llama a la función origen de datos para recuperar la información
                     var resul = [options.custom_value(elemento.campodes, "set", options), options.custom_value(elemento.campooculto, "set", options)];
                     resul[0] = resul[0] == undefined ? "" : resul[0];
                     resul[1] = resul[1] == undefined ? "" : resul[1];
                     var editable = elemento.editable || elemento.editable == undefined ? '' : ' readonly ';
                     // Se comprueba la función de comprobación individual
                     if (elemento.editable)
                     { editable = elemento.ctlCampoEditable(elemento, options) ? '' : ' readonly '; }
                     var backcolor = editable == '' ? '' : 'background-color:#E6E6E6;';
                     var ancho = elemento.ancho == '' || elemento.ancho == undefined ? 'width:0px;' : 'width:' + elemento.ancho + 'px;';
                     var long_max = elemento.long_max == '' || elemento.long_max == undefined ? '' : 'maxlength = ' + elemento.long_max;
                     var exp_validar = elemento.exp_validar == undefined ? '' : elemento.exp_validar;
                     var obligatorio = !elemento.obligatorio || elemento.obligatorio == undefined ? '' : 'O';
                     var valor_defecto = elemento.valor_defecto == undefined ? '' : elemento.valor_defecto;
                     resul = resul.length == 0 ? valor_defecto : resul;
                     var tipo_dato = elemento.tipo_dato == '' || elemento.tipo_dato == undefined ? '' : elemento.tipo_dato;
                     var saltolinea = elemento.saltolinea == false || elemento.saltolinea == undefined ? '' : '<p>';
                     // Se recorren los eventos del elemento para establecerlos
                     var eventos = " ";
                     $.each(elemento.eventos,
                        function() {
                            eventos += " " + this.tipo + "='" + this.valor + "(\"" + JSON.stringify(elemento).replace(/\"/g, "\\\"") + "\",\"" + JSON.stringify(options).replace(/\"/g, "\\\"") + "\")'";
                        });
                     var li_class = obligatorio + ' ' + tipo_dato + ' ' + exp_validar
                     if (li_class != '') { li_class = " class = '" + li_class + "'" };
                     var descripcion = elemento.descripcion == '' || elemento.descripcion == undefined ? '' : elemento.descripcion;
                     var el = saltolinea + " ";
                     el = el + "<span " + li_class + " >"
                     el = el + "<input type='text' id='" + elemento.id.idtxtdes + "' name='" + elemento.id.idtxtdes + "' value='" + resul[0] + "' " + editable + " style='" + ancho + backcolor + "' " + long_max + " class='text_blanco' title='" + descripcion + " 'desc='" + descripcion + "' " + eventos + " />";
                     el = el + "<input type='hidden' id='" + elemento.id.idtxtoculto + "' name='" + elemento.id.idtxtoculto + "' value='" + resul[1] + "' />";
                     el = el + "</span>"
                     return el;
                 }
            },
        combobox:
            {
                crear:
                 function(elemento, options) {
                     // Se llama a la función origen de datos para recuperar la información
                     // Debido a un bug se controla dos maneras de coger el campodes y campooculto
                     var miCampoDes = elemento.campodes == undefined ? elemento.campo.campodes : elemento.campodes;
                     var miCampoOculto = elemento.campooculto == undefined ? elemento.campo.campooculto : elemento.campooculto;
                     var resul = [options.custom_value(miCampoDes, "set", options), options.custom_value(miCampoOculto, "set", options)];
                     resul[0] = resul[0] == undefined ? "" : resul[0];
                     resul[1] = resul[1] == undefined ? "" : resul[1];
                     var editable = elemento.editable || elemento.editable == undefined ? '' : ' readonly ';
                     // Se comprueba la función de comprobación individual
                     if (elemento.editable)
                     { editable = elemento.ctlCampoEditable(elemento, options) ? '' : ' readonly '; }
                     var backcolor = editable == '' ? '' : 'background-color:#E6E6E6;';
                     var ancho = elemento.ancho == '' || elemento.ancho == undefined ? 'width:0px;' : 'width:' + elemento.ancho + 'px;';
                     var long_max = elemento.long_max == '' || elemento.long_max == undefined ? '' : 'maxlength = ' + elemento.long_max;
                     var exp_validar = elemento.exp_validar == undefined ? '' : elemento.exp_validar;
                     var obligatorio = !elemento.obligatorio || elemento.obligatorio == undefined ? '' : 'O';
                     var valor_defecto = elemento.valor_defecto == undefined ? '' : elemento.valor_defecto;
                     resul = resul.length == 0 ? valor_defecto : resul;
                     var tipo_dato = elemento.tipo_dato == '' || elemento.tipo_dato == undefined ? '' : elemento.tipo_dato;
                     var saltolinea = elemento.saltolinea == false || elemento.saltolinea == undefined ? '' : '<p>';
                     // Se recorren los eventos del elemento para establecerlos
                     var eventos = " ";
                     $.each(elemento.eventos,
                        function() {
                            eventos += " " + this.tipo + "='" + this.valor + "(\"" + JSON.stringify(elemento).replace(/\"/g, "\\\"") + "\",\"" + JSON.stringify(options).replace(/\"/g, "\\\"") + "\")'";
                        });
                     var li_class = obligatorio + ' ' + tipo_dato + ' ' + exp_validar
                     if (li_class != '') { li_class = " class = '" + li_class + "'" };
                     var descripcion = elemento.descripcion == '' || elemento.descripcion == undefined ? '' : elemento.descripcion;
                     var el = saltolinea;
                     if(navigator.userAgent.match(/Trident/)!=null && navigator.userAgent.match(/rv:11/)!=null){resul[0]=eliminaAcentos(resul[0])}
                     el = el + "<span " + li_class + " >"
                     el = el + "<input type='hidden' id='" + elemento.id.idtxtoculto + "' name='" + elemento.id.idtxtoculto + "' value='" + resul[1] + "' />";
                     el = el + "<input type='text' id='" + elemento.id.idtxtdes + "' name='" + elemento.id.idtxtdes + "' value='" + resul[0] + "' " + editable + " style='" + ancho + backcolor + "' " + long_max + " class='text_blanco' title='" + descripcion + "' desc='" + descripcion + "' " + eventos + "  />";
                     el = el + "</span>"
                     return el;
                 }
            },
        checkbox:
            {
                crear:
                 function(elemento, options) {
                     // Se llama a la función origen de datos para recuperar la información
                     var resul = options.custom_value(elemento.campo, "set");
                     resul = resul == undefined ? "" : resul
                     resul = resul == false || resul == 0 || resul == '0' || resul.toString().toLowerCase() == 'false' ? '' : 'checked'
                     var editable = elemento.editable || elemento.editable == undefined ? '' : ' disabled=true ';
                     // Se comprueba la función de comprobación individual
                     if (elemento.editable)
                     { editable = elemento.ctlCampoEditable(elemento, options) ? '' : ' disabled=true '; }
                     var obligatorio = !elemento.obligatorio || elemento.obligatorio == undefined ? '' : 'O';
                     var valor_defecto = elemento.valor_defecto == undefined ? '' : elemento.valor_defecto;
                     resul = resul.length == 0 ? valor_defecto : resul;
                     var exp_validar = elemento.exp_validar == undefined ? '' : elemento.exp_validar;
                     var etiqueta = elemento.etiqueta == undefined ? '' : elemento.etiqueta;
                     var saltolinea = elemento.saltolinea == false || elemento.saltolinea == undefined ? '' : '<p>';
                     // Se recorren los eventos del elemento para establecerlos
                     var eventos = " ";
                     $.each(elemento.eventos,
                        function() {
                            eventos += " " + this.tipo + "='" + this.valor + "(\"" + JSON.stringify(elemento).replace(/\"/g, "\\\"") + "\",\"" + JSON.stringify(options).replace(/\"/g, "\\\"") + "\")'";
                        });
                     var li_class = obligatorio + ' ' + exp_validar
                     if (li_class != '') { li_class = " class = '" + li_class + "'" };
                     var descripcion = elemento.descripcion == '' || elemento.descripcion == undefined ? '' : elemento.descripcion;
                     var el = saltolinea;
                     el = el + "<span " + li_class + " >"
                     el = el + "<input type='checkbox' id='" + elemento.id + "' name='" + elemento.id + "' " + resul + " " + editable + "  title='" + descripcion + "'  desc='" + descripcion + "' " + eventos + " />";
                     el = el + "<label id='lbl_" + elemento.id + "' name='lbl_" + elemento.id + "' for='" + elemento.id + "'>" + etiqueta + "</label>";
                     el = el + "</span>"
                     return el;
                 }
            },
        radiobutton:
            {
                crear:
                 function(elemento, options) {
                     // Se llama a la función origen de datos para recuperar la información
                     var resul = options.custom_value(elemento.campo, "set");
                     resul = resul == undefined ? "" : resul
                     resul = resul == false || resul == 0 || resul == '0' ? '' : 'checked'
                     var editable = elemento.editable || elemento.editable == undefined ? '' : ' disabled=true ';
                     // Se comprueba la función de comprobación individual
                     if (elemento.editable)
                     { editable = elemento.ctlCampoEditable(elemento, options) ? '' : ' disabled=true '; }
                     var obligatorio = !elemento.obligatorio || elemento.obligatorio == undefined ? '' : 'O';
                     var valor_defecto = elemento.valor_defecto == undefined ? '' : elemento.valor_defecto;
                     resul = resul.length == 0 ? valor_defecto : resul;
                     var saltolinea = elemento.saltolinea == false || elemento.saltolinea == undefined ? '' : '<p>';
                     // Se recorren los eventos del elemento para establecerlos
                     var eventos = " ";
                     $.each(elemento.eventos,
                        function() {
                            eventos += " " + this.tipo + "='" + this.valor + "(\"" + JSON.stringify(elemento).replace(/\"/g, "\\\"") + "\",\"" + JSON.stringify(options).replace(/\"/g, "\\\"") + "\")'";
                        });
                     var li_class = obligatorio + ' ' + exp_validar
                     if (li_class != '') { li_class = " class = '" + li_class + "'" };
                     var descripcion = elemento.descripcion == '' || elemento.descripcion == undefined ? '' : elemento.descripcion;
                     var el = saltolinea;
                     el = el + "<span " + li_class + " >"
                     $.each(elemento.valores,
                        function() {
                            el = el + "<input type='radio' id='" + elemento.id + "' name='" + elemento.id + "' " + resul + " " + editable + " value='" + this.valor + "'  title='" + descripcion + " desc='" + descripcion + "' " + eventos + " />";
                            el = el + "<label for='" + elemento.id + "'>" + this.etiqueta + "</label>"
                        });
                     el = el + "</span>"
                     return el;
                 }
            },
        caja_boton:
            {
                crear:
                 function(elemento, options) {
                     // Se llama a la función origen de datos para recuperar la información
                     // Debido a un bug se controla dos maneras de coger el campodes y campooculto
                     var miCampoDes = elemento.campodes == undefined ? elemento.campo.campodes : elemento.campodes;
                     var miCampoOculto = elemento.campooculto == undefined ? elemento.campo.campooculto : elemento.campooculto;

                     var resul = [options.custom_value(miCampoDes, "set", options), options.custom_value(miCampoOculto, "set", options)];
                     resul[0] = resul[0] == undefined ? "" : resul[0];
                     resul[1] = resul[1] == undefined ? "" : resul[1];
                     var editable = elemento.editable || elemento.editable == undefined ? '' : " readonly='readOnly' ";
                     // Se comprueba la función de comprobación individual
                     if (elemento.editable)
                     { editable = elemento.ctlCampoEditable(elemento, options) ? '' : " readonly='readOnly' "; }
                     var backcolor = editable == '' ? '' : 'background-color:#E6E6E6;';
                     var ancho = elemento.ancho == '' || elemento.ancho == undefined ? 'width:0px;' : 'width:' + elemento.ancho + 'px;';
                     var long_max = elemento.long_max == '' || elemento.long_max == undefined ? "" : "maxlength = '" + elemento.long_max + "'";
                     var exp_validar = elemento.exp_validar == undefined ? '' : elemento.exp_validar;
                     var obligatorio = !elemento.obligatorio || elemento.obligatorio == undefined ? '' : 'O';
                     var valor_defecto = elemento.valor_defecto == undefined ? '' : elemento.valor_defecto;
                     resul = resul.length == 0 ? valor_defecto : resul;
                     var tipo_dato = elemento.tipo_dato == '' || elemento.tipo_dato == undefined ? '' : elemento.tipo_dato;
                     var saltolinea = elemento.saltolinea == false || elemento.saltolinea == undefined ? '' : '<p>';
                     // Se recorren los eventos del elemento para establecerlos
                     var eventos = " ";
                     var evento_boton = " ";
                     $.each(elemento.eventos,
                        function() {
                            // Si el tipo onclick se asocia al botón    
                            if (this.tipo == 'onclick') {
                                evento_boton = " " + this.tipo + "='" + this.valor + "(\"" + JSON.stringify(elemento).replace(/\"/g, "\\\"") + "\",\"" + JSON.stringify(options).replace(/\"/g, "\\\"") + "\")'";
                            }
                            else {
                                eventos += " " + this.tipo + "='" + this.valor + "(\"" + JSON.stringify(elemento).replace(/\"/g, "\\\"") + "\",\"" + JSON.stringify(options).replace(/\"/g, "\\\"") + "\")'";
                            }
                        });
                     var li_class = obligatorio + ' ' + tipo_dato + ' ' + exp_validar
                     if (li_class != '') { li_class = " class = '" + li_class + "'" };
                     var descripcion = elemento.descripcion == '' || elemento.descripcion == undefined ? '' : elemento.descripcion;
                     var el = saltolinea;
                     el = el + "<span " + li_class + " >"
                     el = el + "<input type='hidden' id='" + elemento.id.idtxtoculto + "' name='" + elemento.id.idtxtoculto + "' value='" + resul[1] + "' class='dontValidate' />";
                     el = el + "<input type='text' id='" + elemento.id.idtxtdes + "' name='" + elemento.id.idtxtdes + "' value='" + resul[0] + "' " + editable + "  title='" + descripcion + "' style='" + ancho + backcolor + "' " + long_max + " class='text_gris' desc='" + descripcion + "' " + eventos + " />";
                     el = el + "<input type='button' value='[...]' style='cursor:pointer;' class='ui-widget ui-state-default ui-corner-all' " + evento_boton + " />";
                     el = el + "</span>"
                     return el;
                 }
            },
        textos_largos:
            {
                crear:
                 function(elemento, options) {
                     // Se llama a la función origen de datos para recuperar la información
                     var resul = options.custom_value(elemento.campo, "set");
                     resul = resul == undefined ? "" : resul
                     var editable = elemento.editable || elemento.editable == undefined ? '' : ' readonly ';
                     // Se comprueba la función de comprobación individual
                     if (elemento.editable)
                     { editable = elemento.ctlCampoEditable(elemento, options) ? '' : ' readonly '; }
                     var backcolor = editable == '' ? '' : 'background-color:#E6E6E6;';
                     var filas = elemento.filas == '' || elemento.filas == undefined ? ' rows=2 ' : ' rows=' + elemento.filas;
                     var columnas = elemento.columnas == '' || elemento.columnas == undefined ? ' cols=10 ' : ' cols=' + elemento.columnas;
                     var long_max = elemento.long_max == '' || elemento.long_max == undefined ? '' : 'maxlength = ' + elemento.long_max;
                     var exp_validar = elemento.exp_validar == undefined ? '' : elemento.exp_validar;
                     var obligatorio = !elemento.obligatorio || elemento.obligatorio == undefined ? '' : 'O';
                     var valor_defecto = elemento.valor_defecto == undefined ? '' : elemento.valor_defecto;
                     resul = resul.length == 0 ? valor_defecto : resul;
                     var tipo_dato = elemento.tipo_dato == '' || elemento.tipo_dato == undefined ? '' : elemento.tipo_dato;
                     var saltolinea = elemento.saltolinea == false || elemento.saltolinea == undefined ? '' : '<p>';
                     var barra_ver = elemento.barra_ver ? ' overflow-y:scroll; ' : '';
                     var barra_hor = elemento.barra_hor ? ' overflow-x:scroll; ' : '';
                     var ventana_extra = elemento.ventana_extra == false || elemento.ventana_extra == undefined ? false : true;
                     ventana_extra_size = elemento.ventana_extra_size == undefined ? 1 : elemento.ventana_extra_size;

                     // Se recorren los eventos del elemento para establecerlos
                     var eventos = " ";
                     $.each(elemento.eventos,
                        function() {
                            if (this.tipo != 'onclick' & !ventana_extra) {
                                eventos += " " + this.tipo + "='" + this.valor + "(\"" + JSON.stringify(elemento).replace(/\"/g, "\\\"") + "\",\"" + JSON.stringify(options).replace(/\"/g, "\\\"") + "\")'";
                            }
                        });
                     if (ventana_extra) {
                         eventos += " onclick='$.ikt_textos_largos.inicializar(\"" + elemento.id + "\",\"" + ventana_extra_size + "\",\"" + long_max + "\")'";
                     }

                     var li_class = obligatorio + ' ' + tipo_dato + ' ' + exp_validar
                     if (li_class != '') { li_class = " class = '" + li_class + "'" };
                     var descripcion = elemento.descripcion == '' || elemento.descripcion == undefined ? '' : elemento.descripcion;
                     var el = saltolinea;
                     el = el + "<span " + li_class + " >"
                     el = el + "<textarea type='text' id='" + elemento.id + "' name='" + elemento.id + "' " + filas + " " + columnas + " " + editable + " style='" + backcolor + barra_ver + barra_hor + "' " + long_max + " class='text_blanco'  title='" + descripcion + " desc='" + descripcion + "' " + eventos + " >" + resul + "</textarea>";
                     el = el + "</span>"
                     return el;
                 }
            },
        btnAcc:
            {
                crear:
                    function(elemento, options) {
                        se = ""
                        var imgAceptar = elemento.btnAccionIcons.aceptar != "" ? elemento.btnAccionIcons.aceptar : rutaRecursos + "css/images/tick.png";
                        var imgCancelar = elemento.btnAccionIcons.cancelar != "" ? elemento.btnAccionIcons.cancelar : rutaRecursos + "css/images/cross.png";
                        se = se + "<a id='a_btnAccAceptar_" + options.id.split("_")[0] + "' value='HM 1' title='' href='#' onclick=\"$('#" + options.grid_id + "').grid('grabarGrid','" + options.id.split("_")[0] + "');\" ><img border='0' title='" + $.Literales['50015'] + "' src='" + imgAceptar + "'/></a>";
                        se = se + "<a id='a_btnAccCancelar_" + options.id.split("_")[0] + "' value='HM 1' title='' href='#' onclick=\"$('#" + options.grid_id + "').grid('cancelar');\"><img border='0' title='" + $.Literales['50016'] + "' src='" + imgCancelar + "'/></a>";
                        return se;
                    }
            },
        tipos: {
            'free': {
                'inicializar': function() {
                    return { 'tipo_control': 'free',
                        'id': '',
                        'contenidoHTML': function() {
                            return '';
                        }
                    }
                }
            },
            'caja': { 'tipo_dato': {
                'texto': 'T',
                'numero': 'N',
                'numdeci': 'ND',
                'numdecipuntocoma': "ND_PC",
                'entero': 'EN',
                'fecha': 'F'
            },
                'editable': {
                    'si': true,
                    'no': false
                },
                'obligatorio': {
                    'si': true,
                    'no': false
                },
                'saltolinea': {
                    'si': true,
                    'no': false
                },
                'eventos': { 'onclick': 'onclick', 'onchange': 'onchange', 'onblur': 'onblur' },
                'inicializar': function() {
                    return { 'tipo_control': 'caja',
                        'tipo_dato': '',
                        'descripcion': '',
                        'editable': true,
                        'obligatorio': true,
                        'deserror': '',
                        'id': '',
                        'campo': '',
                        'ancho': '',
                        'long_max': '',
                        'exp_validar': '',
                        'valor_defecto': '',
                        'saltolinea': false,
                        'ctlCampoEditable': function(elemento, opciones) { return true },
                        'eventos': [],
                        'add_evento': function(evento, valor) {
                            $.obj = { 'tipo': evento, 'valor': valor };
                            this.eventos.push($.obj);
                        }
                    }
                }
            },
            'autocompletar': { 'tipo_dato': {
                'texto': 'T',
                'numero': 'N',
                'numdeci': 'ND',
                'numdecipuntocoma': "ND_PC",
                'entero': 'EN',
                'fecha': 'F'
            },
                'editable': {
                    'si': true,
                    'no': false
                },
                'obligatorio': {
                    'si': true,
                    'no': false
                },
                'saltolinea': {
                    'si': true,
                    'no': false
                },
                'eventos': { 'onclick': 'onclick', 'onchange': 'onchange', 'onblur': 'onblur' },
                'inicializar': function() {
                    return { 'tipo_control': 'autocompletar',
                        'tipo_dato': '',
                        'descripcion': '',
                        'editable': true,
                        'obligatorio': true,
                        'deserror': '',
                        'id': { 'idtxtdes': '', 'idtxtoculto': '' },
                        'campo': { 'campodes': '', 'campooculto': '' },
                        'ancho': '',
                        'long_max': '',
                        'exp_validar': '',
                        'valor_defecto': '',
                        'saltolinea': false,
                        'ctlCampoEditable': function(elemento, opciones) { return true },
                        'eventos': [],
                        'add_evento': function(evento, valor) {
                            $.obj = { 'tipo': evento, 'valor': valor };
                            this.eventos.push($.obj);
                        }
                    }
                }
            },
            'combobox': { 'tipo_dato': {
                'texto': 'T',
                'numero': 'N',
                'numdeci': 'ND',
                'numdecipuntocoma': "ND_PC",
                'entero': 'EN',
                'fecha': 'F'
            },
                'editable': {
                    'si': true,
                    'no': false
                },
                'obligatorio': {
                    'si': true,
                    'no': false
                },
                'saltolinea': {
                    'si': true,
                    'no': false
                },
                'eventos': { 'onclick': 'onclick', 'onchange': 'onchange', 'onblur': 'onblur' },
                'inicializar': function() {
                    return { 'tipo_control': 'combobox',
                        'tipo_dato': '',
                        'descripcion': '',
                        'editable': true,
                        'obligatorio': true,
                        'deserror': '',
                        'valor_defecto': '',
                        'id': { 'idtxtdes': '', 'idtxtoculto': '' },
                        'campo': { 'campodes': '', 'campooculto': '' },
                        'saltolinea': false,
                        'ctlCampoEditable': function(elemento, opciones) { return true },
                        'eventos': [],
                        'add_evento': function(evento, valor) {
                            $.obj = { 'tipo': evento, 'valor': valor };
                            this.eventos.push($.obj);
                        }
                    }
                }
            },
            'checkbox': {
                'editable': {
                    'si': true,
                    'no': false
                },
                'obligatorio': {
                    'si': true,
                    'no': false
                },
                'saltolinea': {
                    'si': true,
                    'no': false
                },
                'eventos': { 'onclick': 'onclick' },
                'inicializar': function() {
                    return { 'tipo_control': 'checkbox',
                        'descripcion': '',
                        'editable': true,
                        'obligatorio': true,
                        'deserror': '',
                        'id': '',
                        'campo': '',
                        'etiqueta': '',
                        'valor_defecto': '',
                        'saltolinea': false,
                        'eventos': [],
                        'ctlCampoEditable': function(elemento, opciones) { return true },
                        'add_evento': function(evento, valor) {
                            $.obj = { 'tipo': evento, 'valor': valor };
                            this.eventos.push($.obj);
                        }
                    }
                }
            },
            'textos_largos': { 'tipo_dato': {
                'texto': 'T',
                'numero': 'N',
                'numdeci': 'ND',
                'numdecipuntocoma': "ND_PC",
                'entero': 'EN',
                'fecha': 'F'
            },
                'editable': {
                    'si': true,
                    'no': false
                },
                'obligatorio': {
                    'si': true,
                    'no': false
                },
                'saltolinea': {
                    'si': true,
                    'no': false
                },
                'ventana_extra': {
                    'si': true,
                    'no': false
                },
                'barra': {
                    'si': true,
                    'no': false
                },
                'ventana_extra_size': {
                    'pequeña': 0,
                    'mediana': 1,
                    'grande': 2
                },
                'eventos': { 'onchange': 'onchange', 'onblur': 'onblur' },
                'inicializar': function() {
                    return { 'tipo_control': 'textos_largos',
                        'tipo_dato': '',
                        'descripcion': '',
                        'editable': true,
                        'obligatorio': true,
                        'deserror': '',
                        'id': '',
                        'campo': '',
                        'saltolinea': false,
                        'filas': '',
                        'columnas': '',
                        'long_max': '',
                        'barra_ver': true,
                        'barra_hor': false,
                        'ventana_extra': false,
                        'ventana_extra_size': 1,
                        'valor_defecto': '',
                        'eventos': [],
                        'ctlCampoEditable': function(elemento, opciones) { return true },
                        'add_evento': function(evento, valor) {
                            $.obj = { 'tipo': evento, 'valor': valor };
                            this.eventos.push($.obj);
                        }
                    }
                }
            },
            'editor_html': { 'tipo_dato': {
                'texto': 'T',
                'numero': 'N',
                'numdeci': 'ND',
                'numdecipuntocoma':"ND_PC",
                'entero': 'EN',
                'fecha': 'F'
            },
                'editable': {
                    'si': true,
                    'no': false
                },
                'obligatorio': {
                    'si': true,
                    'no': false
                },
                'saltolinea': {
                    'si': true,
                    'no': false
                },
                'eventos': { 'onclick': 'onclick', 'onchange': 'onchange', 'onblur': 'onblur' },
                'inicializar': function() {
                    return { 'tipo_control': 'editor_html',
                        'tipo_dato': '',
                        'descripcion': '',
                        'editable': true,
                        'obligatorio': true,
                        'deserror': '',
                        'id': '',
                        'campo': '',
                        'saltolinea': false,
                        'valor_defecto': '',
                        'ctlCampoEditable': function(elemento, opciones) { return true },
                        'eventos': [],
                        'add_evento': function(evento, valor) {
                            $.obj = { 'tipo': evento, 'valor': valor };
                            this.eventos.push($.obj);
                        }
                    }
                }
            },
            'enlace': {
                'editable': {
                    'si': true,
                    'no': false
                },
                'obligatorio': {
                    'si': true,
                    'no': false
                },
                'saltolinea': {
                    'si': true,
                    'no': false
                },
                'eventos': { 'onclick': 'onclick', 'onchange': 'onchange', 'onblur': 'onblur' },
                'inicializar': function() {
                    return { 'tipo_control': 'enlace',
                        'descripcion': '',
                        'editable': true,
                        'obligatorio': true,
                        'deserror': '',
                        'id': '',
                        'campo': '',
                        'valor_defecto': '',
                        'saltolinea': false,
                        'ctlCampoEditable': function(elemento, opciones) { return true },
                        'eventos': [],
                        'add_evento': function(evento, valor) {
                            $.obj = { 'tipo': evento, 'valor': valor };
                            this.eventos.push($.obj);
                        }
                    }
                }
            },
            'caja_boton': {
                'editable': {
                    'si': true,
                    'no': false
                },
                'obligatorio': {
                    'si': true,
                    'no': false
                },
                'saltolinea': {
                    'si': true,
                    'no': false
                },
                'eventos': { 'onclick': 'onclick', 'onchange': 'onchange', 'onblur': 'onblur' },
                'inicializar': function() {
                    return { 'tipo_control': 'caja_boton',
                        'descripcion': '',
                        'editable': true,
                        'obligatorio': true,
                        'deserror': '',
                        'ancho': '',
                        'long_max': '',
                        'valor_defecto': '',
                        'id': { 'idtxtdes': '', 'idtxtoculto': '' },
                        'campo': { 'campodes': '', 'campooculto': '' },
                        'saltolinea': false,
                        'ctlCampoEditable': function(elemento, opciones) { return true },
                        'eventos': [],
                        'add_evento': function(evento, valor) {
                            $.obj = { 'tipo': evento, 'valor': valor };
                            this.eventos.push($.obj);
                        }
                    }
                }
            },
            'etiqueta': {
                'saltolinea': {
                    'si': true,
                    'no': false
                },
                'inicializar': function() {
                    return { 'tipo_control': 'etiqueta',
                        'id': '',
                        'campo': '',
                        'valor_defecto': '',
                        'saltolinea': false
                    }
                }
            },
            'radiobutton': {
                'editable': {
                    'si': true,
                    'no': false
                },
                'obligatorio': {
                    'si': true,
                    'no': false
                },
                'saltolinea': {
                    'si': true,
                    'no': false
                },
                'eventos': { 'onclick': 'onclick', 'onchange': 'onchange', 'onblur': 'onblur' },
                'inicializar': function() {
                    return { 'tipo_control': 'radiobutton',
                        'descripcion': '',
                        'editable': true,
                        'obligatorio': true,
                        'deserror': '',
                        'id': '',
                        'campo': '',
                        'valor_defecto': '',
                        'saltolinea': false,
                        'ctlCampoEditable': function(elemento, opciones) { return true },
                        'valores': [],
                        'add_valor': function(etiqueta, valor) {
                            $.obj = { 'etiqueta': etiqueta, 'valor': valor };
                            this.valores.push($.obj);
                        },
                        'eventos': [],
                        'add_evento': function(evento, valor) {
                            $.obj = { 'tipo': evento, 'valor': valor };
                            this.eventos.push($.obj);
                        }
                    }
                }
            }
        },
        alinear: { 'centro': 'center', 'izquierda': 'left', 'derecha': 'right' },
        ocultar: { 'si': true, 'no': false },
        piegrid: { 'si': true, 'no': false },
        multiselec: { 'si': true, 'no': false },
        altable: { 'si': true, 'no': false },
        editable: { 'si': true, 'no': false },
        bajable: { 'si': true, 'no': false },
        personalizado: { 'si': true, 'no': false },
        busqueda: { 'si': true, 'no': false },
        orden: { 'asc': 'ASC', 'desc': 'DESC' },
        btnAccion: { 'si': true, 'no': false }
    }
}
);                            
function controlPuntoComa(){
	if( event.srcElement.value.indexOf(".") >= 0){
        event.srcElement.value = event.srcElement.value.replace(".", ",");
        return true;
    }else{
        var vchar = String.fromCharCode(event.which || event.keyCode);
        var jqevent = $.event.fix(event)
        if (vchar == "." || vchar == ",") {
            event.keyCode = 44;
            event.which = 44;
        }
    }
}
