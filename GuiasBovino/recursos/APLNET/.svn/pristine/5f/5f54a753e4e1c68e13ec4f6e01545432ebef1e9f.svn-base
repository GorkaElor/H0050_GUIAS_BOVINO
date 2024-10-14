function creaDivErrores(valRes){

    var errIcon = '<span class="ui-icon ui-icon-info" style="float: left; margin-right: .3em;"></span>'
	var infIcon = '<span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span>'
	var ret = "";
	var retTemp="";

	if (valRes.alertas != null &&  valRes.alertas.length > 0) {
		ret = ret + '<div id="divAlert" style="margin-top: 20px; margin-bottom: 20px; padding: 0 .7em;" class="ui-state-highlight ui-corner-all">'
		for(i=0;i<valRes.alertas.length;i++){
			retTemp = retTemp + '<p>'+ infIcon + valRes.alertas[i] + '</p>'
		}
		ret = ret + retTemp ;
		ret = ret + '</div>';
	}

	retTemp = "";
	if (valRes.errores != null && valRes.errores.length > 0) {
		ret = ret + '<div id="divErr" style="padding: 0 .7em; margin-bottom: 20px;" class="ui-state-error ui-corner-all">'
		for (j = 0; j < valRes.errores.length; j++) {
		    try {
		        var exnet = JSON.parse(valRes.errores[j]);
		        if (exnet.Message == "Authentication failed." || exnet.Message == "There was an error processing the request.") window.location = inicio;
		    } catch (ex) { }
			retTemp = retTemp + '<p>' + errIcon + valRes.errores[j] + '</p>';
		}
		ret = ret + retTemp ;
		ret = ret + '</div>';
	}	
	return ret;
}
// Validación para un formulario
function Validacion(valRes,divedicion){
    var idedi=divedicion==null?"#edicion":divedicion;
    idedi=idedi.indexOf("#")<0?"#"+idedi:idedi;
    var testNonText = /[:]/g;  
    
	$(idedi+' li').each(function(){
		// reiniciar el estado de todos los campos que figuren como erroneos
		$(this).children('.ui-state-error').not('.text_gris').addClass('text_blanco')
		//numero
		if ($(this).hasClass('N')) {
		    $(this).children(':not(label,button,input:radio,input:button,.ui-autocomplete-hidden,.ui-helper-hidden-accessible)').each(function() {
		        var val = $(this).valor()
		        if (val.indexOf(".") > val.indexOf(",")) val = val.replace(/\./g, '').replace(',', '.');
		        if (val.indexOf(".") == -1) val = val.replace(/\,/g, '.');
		        else val = val.replace(/\,/g, '');
		        if (isNaN(val)) {
					var txtLbl = $(this).siblings('label').text();
					txtLbl = testNonText.test(txtLbl.substring(0,txtLbl.length - 1)) ? txtLbl.substring(0,txtLbl.length - 1) : txtLbl;
					
					valRes.errores.push(XmlValor_Chequear($.Literales['50068']) + ' - ' + txtLbl);
					$(this).addClass('ui-state-error ui-corner-all');
				}
                else{
                    if(!$(this).hasClass("ui-state-error") && !$(this).hasClass("text_gris"))
                        $(this).addClass('text_blanco');
                }				
			});
		}
		
		//numero decimal
		if ($(this).hasClass('ND')){
		    $(this).children(':not(label,button,input:radio,input:button,.ui-autocomplete-hidden,.ui-helper-hidden-accessible)').each(function() {
		        var val = $(this).valor()
		        if (val.indexOf(".") > val.indexOf(",")) val = val.replace(/\./g, '').replace(',', '.');
		        if (val.indexOf(".") == -1) val = val.replace(/\,/g, '.');
		        else val = val.replace(/\,/g, '');
				if (isNaN(val)) {
					var txtLbl = $(this).siblings('label').text();
					txtLbl = testNonText.test(txtLbl.substring(0,txtLbl.length - 1)) ? txtLbl.substring(0,txtLbl.length - 1) : txtLbl;
					
					valRes.errores.push(XmlValor_Chequear($.Literales['50069']) + ' - ' + txtLbl);
					$(this).addClass('ui-state-error ui-corner-all');
				}
                else{
                    if(!$(this).hasClass("ui-state-error") && !$(this).hasClass("text_gris"))
                        $(this).addClass('text_blanco');
                }				
			});
		}
		//numero entero
		if ($(this).hasClass('EN')) {
		    $(this).children(':not(label,button,input:radio,input:button,.ui-autocomplete-hidden,.ui-helper-hidden-accessible)').each(function() {
		        var val = $(this).valor()
		        if (val.indexOf(".") > val.indexOf(",")) val = val.replace(/\./g, '').replace(',', '.');
		        if (val.indexOf(".") == -1) val = val.replace(/\,/g, '.');
		        else val = val.replace(/\,/g, '');
		        if (isNaN(val) || val.indexOf(".") != -1) {
		            var txtLbl = $(this).siblings('label').text();
		            txtLbl = testNonText.test(txtLbl.substring(0, txtLbl.length - 1)) ? txtLbl.substring(0, txtLbl.length - 1) : txtLbl;

		            valRes.errores.push(XmlValor_Chequear($.Literales['50069']) + ' - ' + txtLbl);
		            $(this).addClass( 'ui-state-error ui-corner-all');
		        }
		        else {
		            if (!$(this).hasClass("ui-state-error") && !$(this).hasClass("text_gris"))
		                $(this).addClass( 'text_blanco');
		        }
		    });
		}
		//fecha
		if ($(this).hasClass('F')){
		    $(this).children(':not(label,button,input:radio,input:button,.ui-autocomplete-hidden,.ui-helper-hidden-accessible)').each(function() {
				if (CtrolFecha($(this).attr("id"),$(this).valor()) == 1 && $(this).valor()!='') {
					var txtLbl = $(this).siblings('label').text();
					txtLbl = testNonText.test(txtLbl.substring(0,txtLbl.length - 1)) ? txtLbl.substring(0,txtLbl.length - 1) : txtLbl;
					
					valRes.errores.push(XmlValor_Chequear($.Literales['50070']) + ' - ' + txtLbl + ' - ' + XmlValor_Chequear($.Literales['50071']));
					$(this).addClass('ui-state-error ui-corner-all');
				}
				else{
				    if(!$(this).hasClass("ui-state-error") && !$(this).hasClass("text_gris"))
                        $(this).addClass('text_blanco');
                }
			});
		}
		
		//expresion regular		
		if ($(this).hasClass('ER')){
			var classes = $(this).attr("class").split(" ");
			var valER = /^ER\d+/;
			var vFound = false;
			var i = 0;
			var erID;
			var valueToTest;
			var msg="";
			while (i<classes.length && ! vFound){
				if (valER.test(classes[i])){
					erID = classes[i].substring(2);
					if (erID == "") {erID = "00"};
					valueToTest = $(this).children(":input").first().valor();
					if (valueToTest != ""){
					    if (valTestear(valueToTest,erID) == 1) {
						    msg = XmlValor_Chequear($.Literales['50072']);
						    var txtLbl = $(this).children(":input").first().siblings('label').text();
							txtLbl = testNonText.test(txtLbl.substring(0,txtLbl.length - 1)) ? txtLbl.substring(0,txtLbl.length - 1) : txtLbl;
					
						    valRes.errores.push(msg + ' - ' + txtLbl);
    						
						    $(this).children(":input").first().addClass('ui-state-error ui-corner-all');
					    }
					}
					vFound = true;
				}
				i++;
			}		
		}
		//obligatorio
		if ($(this).hasClass('O')){
			// en los grupos de radios siempre debe haber un elemento seleccionado, se omiten los radios
		    $(this).children(':not(label,button,input:radio,input:button,.ui-autocomplete-hidden,.ui-button,.ui-helper-hidden-accessible,.dontValidate)').each(function() {
				if ( $(this).valor() == "" || $(this).is(':checkbox:not(:checked)') ) {
					var txtLbl = $(this).siblings('label').text();
					txtLbl = testNonText.test(txtLbl.substring(0,txtLbl.length - 1)) ? txtLbl.substring(0,txtLbl.length - 1) : txtLbl;
					valRes.errores.push(XmlValor_Chequear($.Literales['50073']) + ' - ' + txtLbl);
					$(this).addClass('ui-state-error ui-corner-all');
				}
                else{
                    if(!$(this).hasClass("ui-state-error") && !$(this).hasClass("text_gris"))
                        $(this).addClass('text_blanco');
                }				
			});
		}
			
	});
		
	return valRes;
}
//Validación para un grid editable
function Validacion_Grid(valRes,id,contexto) {
    
    var miId=contexto==undefined || contexto==''? $('#' + id +' span'):$('#' + id +' span',$('#'+contexto));
	var vDesc;
	miId.each(function() {
	    //numero
	    if ($(this).hasClass('N')) {
	        $(this).children(':not(label,button,input:radio,input:button,input:checkbox,.ui-autocomplete-hidden,.ui-helper-hidden-accessible)').each(function() {
	            var val = $(this).valor()
	            if (val.indexOf(".") > val.indexOf(",")) val = val.replace(/\./g, '').replace(',', '.');
	            if (val.indexOf(".") == -1) val = val.replace(/\,/g, '.');
	            else val = val.replace(/\,/g, '');
	            if (isNaN(val)) {
	                //vDesc = $(this).attr('desc')
	                vDesc = $("#" + $(this).attr('id')).attr("desc")
	                valRes.add(XmlValor_Chequear($.Literales['50068']) + ' - ' + vDesc, validaExtra.tipos.error);
	            }
	            else {
	                if (!$(this).hasClass("ui-state-error") && !$(this).hasClass("text_gris"))
	                    $(this).addClass( 'text_blanco');
	            }
	        });
	    }

	    //numero decimal
	    if ($(this).hasClass('ND')) {
	        $(this).children(':not(label,button,input:radio,input:button,input:checkbox,.ui-autocomplete-hidden,.ui-helper-hidden-accessible)').each(function() {
                var val = $(this).valor()
                if (val.indexOf(".") > val.indexOf(",")) val = val.replace(/\./g, '').replace(',', '.');
                if (val.indexOf(".") == -1) val = val.replace(/\,/g, '.');
                else val = val.replace(/\,/g, '');
                if (isNaN(val)) {
	                vDesc = $("#" + $(this).attr('id')).attr("desc")
	                valRes.add(XmlValor_Chequear($.Literales['50069']) + ' - ' + vDesc, validaExtra.tipos.error);
	            }
	            else {
	                if (!$(this).hasClass("ui-state-error") && !$(this).hasClass("text_gris"))
	                    $(this).addClass( 'text_blanco');
	            }
	        });
	    }
	    //numero entero
	    if ($(this).hasClass('EN')) {
	        $(this).children(':not(label,button,input:radio,input:button,input:checkbox,.ui-autocomplete-hidden,.ui-helper-hidden-accessible)').each(function() {
	            var val = $(this).valor()
	            if (val.indexOf(".") > val.indexOf(",")) val = val.replace(/\./g, '').replace(',', '.');
	            if (val.indexOf(".") == -1) val = val.replace(/\,/g, '.');
	            else val = val.replace(/\,/g, '');
	            if (isNaN(val) || val.indexOf(".") != -1) {
	                vDesc = $("#" + $(this).attr('id')).attr("desc")
	                valRes.add(XmlValor_Chequear($.Literales['50069']) + ' - ' + vDesc, validaExtra.tipos.error);
	            }
	            else {
	                if (!$(this).hasClass("ui-state-error") && !$(this).hasClass("text_gris"))
	                    $(this).addClass( 'text_blanco');
	            }
	        });
	    }
	    //fecha
	    if ($(this).hasClass('F')) {
	        $(this).children(':not(label,button,input:radio,input:button,input:checkbox,.ui-autocomplete-hidden,.ui-helper-hidden-accessible)').each(function() {
	            if (CtrolFecha($(this).attr("id"), $(this).valor()) == 1 && $(this).valor() != '') {
	                vDesc = $("#" + $(this).attr('id')).attr("desc")
	                valRes.add(XmlValor_Chequear($.Literales['50070']) + ' - ' + vDesc + $.Literales['50071'], validaExtra.tipos.error);
	            }
	            else {
	                if (!$(this).hasClass("ui-state-error") && !$(this).hasClass("text_gris"))
	                    $(this).addClass( 'text_blanco');
	            }

	        });
	    }

	    //expresion regular		
	    if ($(this).hasClass('ER')) {
	        var classes = $(this).attr("class").split(" ");
	        var valER = /^ER\d+/;
	        var vFound = false;
	        var i = 0;
	        var erID;
	        var valueToTest;
	        var msg = "";
	        while (i < classes.length && !vFound) {
	            if (valER.test(classes[i])) {
	                erID = classes[i].substring(2);
	                if (erID == "") { erID = "00" };
	                valueToTest = $(this).children(":input").first().valor();
	                if (valTestear(valueToTest, erID) == 1) {
	                    msg = XmlValor_Chequear($.Literales['50072']) + erID;
	                    var txtLbl = $(this).children(":input").first().siblings('label').text();
	                    valRes.add(msg + ' - ' + txtLbl.substring(0, txtLbl.length - 1), validaExtra.tipos.error);
	                }
	                vFound = true;
	            }
	            i++;
	        }
	    }

	    if ($(this).hasClass('O')) {
	        // en los grupos de radios siempre debe haber un elemento seleccionado, se omiten los radios
	        $(this).children(':not(label,button,input:radio,input:button,input:checkbox,.ui-autocomplete-hidden,.ui-button,.ui-helper-hidden-accessible,.dontValidate)').each(function() {
	            if ($(this).valor() == "" || $(this).is(':checkbox:not(:checked)')) {
	                //var txtLbl = $(this).siblings('label').text();
	                vDesc = $("#" + $(this).attr('id')).attr("desc")
	                $(this).addClass( 'ui-state-error ui-corner-all');
	                valRes.add(XmlValor_Chequear($.Literales['50073']) + ' - ' + vDesc, validaExtra.tipos.error);
	            }
	            else {
	                if (!$(this).hasClass("ui-state-error") && !$(this).hasClass("text_gris"))
	                    $(this).addClass( 'text_blanco');
	            }
	        });
	    }
	});

    return valRes;
}
function valPersMsg(valRes){
	
}