// NO BORRAR, NECESARIO PARA ENTRAR()
var preEl ;
var orgEstilo;
function ValidarTecla(evento)
{
switch(evento.keyCode)
{
case 13:  //Retorno de carro
event.returnValue=false;
break;
case 34:  //Comilla doble
event.returnValue=false;
break;
}
}
function RecClave()
{
if(typeof(preEl)!="undefined")
{preEl.setAttribute("className",orgEstilo); }
var el = window.event.srcElement;			   
el = el.parentElement;								 
orgEstilo = el.getAttribute("className");
el.setAttribute("className", "trSel");
preEl = el;
IdClave= el.key;
}

// -- Control de fechas --

//modificado
function CtrolFecha(Campo, Valor) {
    var format = $.datepicker.regional["es"].dateFormat;
    if (idioma != "0")format = $.datepicker.regional["eu"].dateFormat;
    try {
        return jQuery.datepicker.parseDate(format, Valor); 
    }
    catch (e) {
        try { 
            format=format.replace("yy","yyyy")
            return jQuery.datepicker.parseDate(format, Valor); 
        } catch (e2) {
            return 1;
        } 
     
   }
}

function SacarDecimales(numero, decimales)
{ /* Est fcon recibe dos valores a saber.
			numero : el valor numrico si viene con COMA decimal lo cinvierte a PUNTO
			 ( con javascript es PUNTO, la coma la entiende como separador de strings)
			decimales : El nmero de decimales que queremos que devuelva */
	var tt;	
	var nuevoNumero = new String(numero);
//alert("dentro de decimales"); 
	nuevoNumero = nuevoNumero.replace(/,/g, ".");
	//alert(nuevoNumero);
	numero = nuevoNumero;
	tt = Math.pow(10,decimales);
	return Math.round( numero * tt)/tt ;
}	

// Compara si la fecha1 es menor que la fecha2
// Si fecha1 < fecha2 muestra el mensaje con los nombres de los campos
function FechaMenor(fecha1,fecha2,campo1,campo2,pMensaje)
{ // Compara si la fecha1 es menor que la fecha2
	//recoger las fechas y las descompone para comparar.
	var valor
	valor=0;
	var objFDString = new String(fecha1);
	objFHString = new String(fecha1);
	var Arfecha1 = new Array();
	Arfecha1 = objFHString.split("/");

	objFHString = new String(fecha2);
	var Arfecha2 = new Array();
	Arfecha2 = objFHString.split("/");
	var fe1,fe2;
	fe1=Number(Arfecha1[2]+Arfecha1[1]+Arfecha1[0])
	fe2=Number(Arfecha2[2]+Arfecha2[1]+Arfecha2[0])
	if(fe1 < fe2)
	{	
		if(typeof(pMensaje)=='undefined')
			{alert("La Fecha "+campo1+" es Menor que la Fecha "+ campo2);}
		else{
			if(pMensaje==true)
				{alert("La Fecha "+campo1+" es Menor que la Fecha "+ campo2);}
		}
		return 1;
	}
	return 0;
}
/**** Funciones de formato numrico decimal (se aplican a los grids editables) *****/
/*Funcin que recibe una cadena y devuelve dicha cadena sin los ceros de la derecha.
---> pVal: Cadena a evaluar
---> pNoVacio(valores: true, false): Indica si la funcin devuelve vaci (false) o no (true
	 En el caso de no devolver vaco devuelve '0'
*/
function quitaCerosDcha(pVal,pNoVacio){	
	var retVal='';
	var trimer = true;
				
	if(pVal!=''){
		for(var i=pVal.length-1;i>=0;i--){
			if (!((pVal.charAt(i)=='0') && (trimer))){
				retVal += pVal.charAt(i);
				trimer = false;
			}					
		}	
		retVal=reverso(retVal);		
	}
	if(retVal=='' && pNoVacio)
		{retVal='0';}
	return retVal;			
}

/*Funcin que recibe una cadena y devuelve dicha cadena sin los ceros de la izquierda.
---> pVal: Cadena a evaluar
---> pNoVacio(valores: true, false): Indica si la funcin devuelve vaci (false) o no (true
	 En el caso de no devolver vaco devuelve '0'
*/			
function quitaCerosIzda(pVal, pNoVacio){
	var retVal='';
	var trimer = true;
				
	if(pVal!=''){
		for(var i=0;i<pVal.length;i++){
			if (!((pVal.charAt(i)=='0') && (trimer))){
				retVal += pVal.charAt(i);
	      		trimer = false;
			}					
		}
	}		 	
	else{						
		retVal=pVal;	
	}
	if(retVal=='' && pNoVacio)
		{retVal='0';}
	return retVal;
}


/**************************************************************************
    Bloque de funciones para validar CIF_NIF (inicio) 
****************************************************************************/

function Lenv(str){str=str+"";return str.length}

function isNumericv(str){
	str=str+"";
	for(i=0;i<str.length;i++){
		if("-0123456789".indexOf(str.charAt(i))==-1){return false;}	
	}
	return true;
}
 
function Trimv(str){
     str=str+"";
	return str.replace(/^\s+|\s/g,'');
}

function Rightv(str,pos){
	str=str+"";
   if(ValInt(pos)<=str.length){ 		
	return str.substr(str.length-ValInt(pos),str.length)
   }else{
	return str;
   }	
}

function Leftv(str,pos){
	str=str+"";
   if(ValInt(pos)<=str.length){ 		
	return str.substr(0,ValInt(pos))
   }else{
	return str;
   }	
}

function UCasev(str){
	str=str+"";
	return str.toUpperCase();
}

function InStrv(str,strin){
	str=str+"";
	strin=strin+"";
   for(j=0;j<str.length;j++){	
	var pri=strin.charAt(0);
	var inpri=str.indexOf(pri,j);
	if(inpri!=-1){
		var valido=true;
		for(i=1;i<strin.length;i++){
			if(str.charAt(inpri+i)!=strin.charAt(i)){
				valido=false;
				break;
			}
		}
		if(valido){return inpri+1;}
	}else{
		return 0;
	}
	j=j+inpri;
  }
	return 0;
}

function Valv(str){
	str=str+"";
	var ret="";
	for(i=0;i<str.length;i++){
		var car=str.charAt(i);
		if("0123456789".indexOf(car)!=-1){
			ret=ret+""+car;
		}
	}
	return ret;
}


function Midv(str,ini,fin){
  str=str+"";
 if(str.length>=(ValInt(ini)+ValInt(fin)-1)){
	return str.substr(ValInt(ini)-1,ValInt(fin));
 }
	return "";
}


function Mids(str,ini){
  str=str+"";
 if(str.length>=ValInt(ini)){
	return str.substr(ValInt(ini)-1,str.length);
 }
	return "";
}


function CIFNIF_Controlar(sLetCIF, sCIFNIF, sLetNIF, bExtranjero){
sLetCIF=sLetCIF.toUpperCase();
sCIFNIF=sCIFNIF.toUpperCase();
sLetNIF=sLetNIF.toUpperCase();
if(sLetNIF=='0')
{sLetNIF=''}
if(sLetCIF=='0')
{sLetCIF=''}
if(typeof(bExtranjero)=='undefined')
{bExtranjero=false;}
if(sLetNIF!='@'){
if(sCIFNIF.length!=8)
{return false;}
if(sLetCIF=='0' || sLetCIF==''){
if(CIFNIF_ControlarLetNIF(sCIFNIF)!=sLetNIF.toUpperCase())
{return false;}			
}
else{					  
if(sLetCIF.toUpperCase()<'A' || sLetCIF.toUpperCase()>'Z')
{return false;}
if(CIFNIF_ControlarLetCIF(sLetCIF+sCIFNIF, bExtranjero)!=reverso(reverso(sCIFNIF).substr(0,1)).toUpperCase())
{return false;}
if(sLetNIF!='')
{return false;}							
}
}			
return true;
}

/*=========================================================================================
' Funcin:  CIFNIF_Controlar
'    Control de la validez de CIF/NIF
'
' Parmetros: sLetCIF     ==> Letra del CIF a validar.
'             sCIFNIF     ==> Parte numrica del CIF/NIF a validar.+Caracter de control
'             sLetNIF     ==> Dgito de control a validar.
'             bExtranjero ==> Si se trata de un CIF/NIF extranjero (True).
'             bValidaANT  ==> (Opcional) Validacin de CIFs "antiguos". Se valida como
'                             correcto tanto si el carcter de control es letra como nmero
'
' Devuelve: True  ==> CIF/NIF corecto.
'           False ==> CIF/NIF incorrecto.
'
' Funciones utilizadas: CIFNIF_ControlarLetCIF, CIFNIF_ControlarLetNIF
'
' Ejemplo: CIFNIF_Controlar("","15489673","Z",False)
'          CIFNIF_Controlar("A","15489673","",False)
'          CIFNIF_Controlar("A","1548967G","",False,True)
'==========================================================================================*/
function CIFNIF_ControlarN(sLetCIF, sCIFNIF, sLetNIF, bExtranjero,bValidaANT){

	var bValidacionANT;
    var  sDigiCalculado;

  if (bValidaANT==null || !bValidaANT){
     bValidacionANT = false;
  }else{
    bValidacionANT = bValidaANT;
  }
sLetCIF=sLetCIF.toUpperCase();
sCIFNIF=sCIFNIF.toUpperCase();
sLetNIF=sLetNIF.toUpperCase();
var bValidacionANT;
var sDigiCalculado;

  if( bValidaANT == null){
    bValidacionANT = false;
  }else{
    bValidacionANT = bValidaANT;
  }
  
  // --- Verificar el nmero de dgitos de la parte numrica
  if (sLetNIF!="@"){
    if( Lenv(sCIFNIF)!=8){
		return false;
    }
    // --- Verificar si se trata de un CIF o de un NIF
    if (sLetCIF =="0" || Trimv(sLetCIF) == ""){
      // --- NIF
       // --- Controlar que la letra sea correcta
       if( CIFNIF_ControlarLetNIF(sCIFNIF) != UCasev(sLetNIF)){
			return false;
	   }
    }else{
      // --- CIF
        // --- Comprobar que el primer dgito sea Letra
      if( isNumericv(sLetCIF)){
			return false;
      }
      
      if( bValidacionANT && "*0XYZ".indexOf(sLetCIF) == -1){
        // --- Se valida el CIF tanto si viene con una letra como con un nmero en la posicin del carcter de control
        sDigiCalculado = CIFNIF_ControlarLetCIFN(sLetCIF+""+sCIFNIF, bExtranjero, bValidacionANT)
        if (isNumericv(UCasev(Rightv(Trimv(sCIFNIF), 1)))){ //        'El CIF a comprobar tiene un nmero como carcter de control
          if(Rightv(sDigiCalculado, 1) != UCasev(Rightv(Trimv(sCIFNIF), 1))){
              return fasle;
          }
        }else{
          if(Midv("ABCDEFGHIJ", Valv(sDigiCalculado), 1) != UCasev(Rightv(Trimv(sCIFNIF), 1))){ // 'El CIF a comprobar tiene una letra como carcter de control
	            return false;
          }
        }
      }else{
          // --- Comprobar el Dgito de Control
        if(CIFNIF_ControlarLetCIFN(sLetCIF+""+sCIFNIF, bExtranjero, bValidacionANT) != UCasev(Rightv(Trimv(sCIFNIF), 1))){
			return false;
        }
      }
        // --- Comprobar que el ltimo dgito est vaco
      if ( Trimv(sLetNIF+"") != ""){
		return false;
	  }
	}	
  }
  return true;

}


function CIFNIF_Controlar(sLetCIF, sCIFNIF, sLetNIF, bExtranjero){
sLetCIF=sLetCIF.toUpperCase();
sCIFNIF=sCIFNIF.toUpperCase();
sLetNIF=sLetNIF.toUpperCase();
if(sLetNIF=='0')
{sLetNIF=''}
if(sLetCIF=='0')
{sLetCIF=''}
if(typeof(bExtranjero)=='undefined')
{bExtranjero=false;}
if(sLetNIF!='@'){
if(sCIFNIF.length!=8)
{return false;}
if(sLetCIF=='0' || sLetCIF==''){
if(CIFNIF_ControlarLetNIF(sCIFNIF)!=sLetNIF.toUpperCase())
{return false;}			
}
else{					  
if(sLetCIF.toUpperCase()<'A' || sLetCIF.toUpperCase()>'Z')
{return false;}
if(CIFNIF_ControlarLetCIF(sLetCIF+sCIFNIF, bExtranjero)!=reverso(reverso(sCIFNIF).substr(0,1)).toUpperCase())
{return false;}
if(sLetNIF!='')
{return false;}							
}
}			
return true;
}

function CIFNIF_ControlarLetCIFN(vCIF,bExtranjero,bValidaANT){
  var iI;
  var iValor=0;
  var sCIF;
  var sExtSoc;
  var iExtranjero;
  var sLetNIF;
  var sNumCIF;
  var sLetras;
  var lCIF;
  var iOrden="";
  
  var bValidacionANT;

  if(bValidaANT==null){
    bValidacionANT = False;
  }else{
    bValidacionANT = bValidaANT;
  }
  
  if(vCIF==null){
    return "*";
  }else{
    sExtSoc = Leftv(vCIF, 1)
    if(Lenv(vCIF) > 9){
      return "*";
    }else if(InStrv("*0XYZ", sExtSoc) > 0){
        // --- NIE - Nmero de Identificacin de Extranjeros	
      sNumCIF = Mids(vCIF, 2);
      if( Valv(Midv(sNumCIF, 1, 7)) == 0){
        return "*";
      }else{
        sLetras = "TRWAGMYFPDXBNJZSQVHLCKE";
        switch(sExtSoc)
		{
          case "X":
            sNumCIF = "0" +""+ sNumCIF;
			break;
          case "Y":
            sNumCIF = "1" +""+ sNumCIF;
			break;
          case "Z":
            sNumCIF = "2" +""+ sNumCIF;
			break;
        }
        lCIF = Valv(sNumCIF);
        iOrden = (lCIF%23) + 1
		var ret=Midv(sLetras, iOrden, 1);
        return ret;
      }
    }else{
      //--- CIF
      sCIF = Midv(vCIF, 2, 7);
	  if(bExtranjero==null){
		iExtranjero=false;
	  }else{
		iExtranjero=bExtranjero;
	  }
      for(var iI=1;iI<=7;iI++){
	    var val=0; 
        if((iI % 2) == 0){
          // --- Si es el dgito 2, 4 o 6
		  val=ValInt(Valv(Midv(sCIF, iI, 1)));
          iValor= iValor+val ;
        }else{
          // --- Si es el dgito 1, 3, 5, 7
		  val=ValInt(Valv(Midv("0246813579", ValInt(Valv(Midv(sCIF, iI, 1))) + 1, 1)));
          iValor = iValor +val;
        }
      }
        // --- Complemento a 10 del resto sobre 10
      iValor = 10 - (ValInt(iValor)%10);
      
      if(bValidacionANT){
        // --- Se devuelve el nmero para que sea en la funcin CIFNIF_Controlar() donde se valide
        //--- tanto si el cdigo de control del CIF es una letra como un nmero
        return Trimv(iValor);
      }else{
         // --- Dependiendo del tipo de entidad, se devuelve una letra o el nmero
        if(iExtranjero ||  InStrv("KLMNPQRSW", sExtSoc) != 0){
          return Midv("ABCDEFGHIJ", iValor, 1);
        }else{
          return Rightv(iValor,1);
        }
      }
    }
  }
}	

function CIFNIF_ControlarLetNIF(vNIF){
var lCIF, iOrden;
var sLetras='TRWAGMYFPDXBNJZSQVHLCKE';
lCIF=parseInt(parseFloat(vNIF));
iOrden=(lCIF % 23) + 1;
return sLetras.substr(iOrden-1,1);
}	
				 
function CIFNIF_ControlarLetCIF(vCIF, bExtranjero){		 
var varRetorno;	 
var sExtSoc, sNumCIF, sLetras, lCIF, iOrden, sCIF;
var iValor=0;
if(typeof(vCIF)=='undefined'){
varRetorno='*';
}
else{
sExtSoc=vCIF.substr(0,1);
if(vCIF.length>9){
varRetorno='*';
}
else{
if('*0XM'.indexOf(sExtSoc)!=-1){
sNumCIF=vCIF.substr(1);
if(ValInt(sNumCIF.substr(0,7))==0)  
{varRetorno='*';}
else{
sLetras='TRWAGMYFPDXBNJZSQVHLCKE';
lCIF = ValInt(sNumCIF);
iOrden=(lCIF % 23) + 1;
varRetorno=sLetras.substr(iOrden-1,1);
}
}
else{
sCIF=reverso('0000000'+vCIF.substr(1,7));
sCIF=reverso(sCIF.substr(0,7));
iValor=0;
for(var iI=1;iI<8;iI++){
if((iI % 2)==0){
iValor+=ValInt(sCIF.substr(iI-1,1))	 //---patxi
}
else{
iValor+=ValInt("0246813579".substr(ValInt(sCIF.substr(iI-1,1)),1));
}
}
iValor=10 - (iValor % 10);
if(bExtranjero || 'PQS'.indexOf(sExtSoc)!=-1)
{varRetorno='ABCDEFGHIJ'.substr(iValor-1,1);}
else
{varRetorno=reverso(reverso(iValor.toString()).substr(0, 1));}				
}
}
}
return varRetorno;
}
/**************************************************************************
    Bloque de funciones para validar CIF_NIF (final)
****************************************************************************/


/*Funcin que devuelve 0 si se le pasa '' o un numrico entero*/
function ValInt(pValor){
var pIn=pValor.toString();
if(pIn=='')
{pIn='0';}
return parseInt(parseFloat(pIn));
}							



/*Funcin a la que se le pasa una cadena y devuelve el contenido de dicha cadena en orden inverso*/			
function reverso(pVal){
	var retVal='';
				
	if(pVal!=""){
		for(var i=pVal.length-1;i>=0;i--)
			{retVal+=pVal.charAt(i);}
	}				
	return retVal;					
}

/*Funcin a la que se le pasa una cadena que representa un nmero.
Tanto si dicha cadena tiene una coma o un punto, se le considera como separador decimal y 
devuelve una cadena con dicho nmero utilizando la coma como separador decimal*/	 
function formatoDecimal(pVal){
	var valor=pVal;
	var retVal='';
		
	if(valor!=''){
		if ((valor.indexOf(',')!=-1)&&(valor.indexOf('.')==-1))
			{retVal=cambFormatDec(pVal,',');}
		else{
			if((valor.indexOf('.')!=-1)&&(valor.indexOf(',')==-1))
			   {retVal=cambFormatDec(pVal,'.');}
			else
			   {retVal=quitaCerosIzda(pVal, true);}
		}	
			
		if(retVal!='')	
			return retVal;	
		else
			return null;	
	}		
	return null;
} 
	  
function cambFormatDec(pVal,pSep){
	var retVal='';
	var valor=pVal;
		
	var pos = valor.lastIndexOf(pSep);
	var intPart = quitaCerosIzda(valor.substring(0,pos), true);
	var decPart = quitaCerosDcha(valor.substring(pos+1,valor.length), true);
	retVal= intPart+ ','+ decPart;							  
			 
	return retVal;
} 
function limitText(pTexto, pLong){
	var vRet;
	
	if(pLong!=-1){
		vRet = pTexto.substr(0,pLong);
		if(pTexto.length>pLong)	
			{vRet = vRet + '...';}	
	}
	else{
		 vRet = pTexto;
	}
	return vRet;		
}
function ValidarTJ(numa,numb,numc,numd) {
	var numero_tarjeta=numa+""+numb+""+numc+""+numd;	
	if (!EsNumeroEntero(numero_tarjeta)){
		return 1;
	}
	var cadena = numero_tarjeta.toString();
	var longitud = cadena.length;
	var cifra = null;
	var cifra_cad=null;
	var suma=0;
	for (var i=0; i < longitud; i+=2){
		cifra = parseInt(cadena.charAt(i))*2;
		if (cifra > 9){ 
			cifra_cad = cifra.toString();
			cifra = parseInt(cifra_cad.charAt(0))+parseInt(cifra_cad.charAt(1));
		}
		suma+=cifra;
	}
	for (var i=1; i < longitud; i+=2){
		suma += parseInt(cadena.charAt(i));
	}
	if ((suma % 10) == 0){ 
		return 0;
	} else {
		return 2;
	}
}
function DigitoControl(cadena){
	var cifras = new Array(1,2,4,8,5,10,9,7,3,6);
    var chequeo = 0;
    for (var i=0; i < cifras.length; i++){
		chequeo += parseInt(cadena.charAt(i)) * cifras[i];
	}
    chequeo = 11 - (chequeo % 11);
	if (chequeo == 11) {chequeo = 0;}
	if (chequeo == 10) {chequeo = 1;}
    return chequeo;
}
function EsNumeroEntero(valor){
    var cadena = valor.toString();
	var longitud = cadena.length;
	if (longitud == 0){return false;}
	var ascii = null;
    for (var i=0; i<longitud; i++) {
		ascii = cadena.charCodeAt(i);
        if (ascii < 48 || ascii > 57){return false;}
    }
	return true;
}
function ValidarCCC(entidad,oficina,dc,nc) {
	if (!EsNumeroEntero(entidad)){
		return 1;
	}
	if (!EsNumeroEntero(oficina)){
		return 2;
	}
	if (!EsNumeroEntero(dc)){
		return 3;
	}
	if (!EsNumeroEntero(nc)){
		return 4;
	}
	var primer_control="00"+entidad+oficina;
	var primer_digito=DigitoControl(primer_control);
	if (primer_digito != dc.charAt(0)){
		return 5;
	}
	var segundo_control=nc;
	var segundo_digito=DigitoControl(segundo_control);
	if (segundo_digito != dc.charAt(1)){
		return 5;
	}
	return 0;
}

function validaHora(vHora,vCampo){
    /*Valores Retorno
    1 - El formato de la hora no es correcto
    */
    var vHoraisNaN = vHora.replace(/:/g, "");
	if (isNaN(vHoraisNaN)){   
		return 1;
	}	
	if (vHora.length == 8){   
	    var Str = new String(vHora); 
	    if((Str.indexOf (':')) == -1 || vHora.substring(2,3)!=":"){	
			return 1;
		}
		else{			
			if (vHora.substring(0,2)>23){   
				return 1;
			}			
			if (vHora.substring(3,5)>59){	
				return 1;
			}	
			if (vHora.substring(6,8)>59){
				return 1;
			}				
		}
	}
	else{   
		return 1;
	}
	return 0;
}

function comparaHoras(vHoraINI,vCampoINI,vHoraFIN,vCampoFIN)
{
     /*Valores Retorno
    1 - El formato de la hora no es correcto
    2 - La hora de Inicio no puede ser posterior a la Hora de Fin
    */
    var vHoraInicial = vHoraINI.replace(/:/g, "");
	if (isNaN(vHoraInicial)) {
		return 1;
	}	
	if (vHoraINI.length == 8){
	    var Str = new String(vHoraINI); 
	    if((Str.indexOf (':')) == -1 || vHoraINI.substring(2,3)!=":"){
			return 1;
		}
		else{			
			if (vHoraINI.substring(0,2)>23){
				return 1;
			}			
			if (vHoraINI.substring(3,5)>59){
				return 1;
			}		
			if (vHoraINI.substring(6,8)>59){
				return 1;
			}		
		}
	}
	else{
		return 1;
	}
	var vHoraFinal = vHoraFIN.replace(/:/g, "");
	if (isNaN(vHoraFinal)) {
		return 1;
	}	
	
	if (vHoraFIN.length == 5){
	    var Str = new String(vHoraFIN); 
	    if((Str.indexOf (':')) == -1 || vHoraFIN.substring(2,3)!=":"){
			return 1;
		}
		else{			
			if (vHoraFIN.substring(0,2)>23){
				return 1;
			}			
			if (vHoraFIN.substring(3,5)>59){
				return 1;
			}	
			if (vHoraFIN.substring(6,8)>59){
				return 1;
			}				
		}
	}
	else{
		return 1;
	}
	
	if (parseInt(vHoraInicial,10) >= parseInt(vHoraFinal,10)){
		return 2;
	}			
    return 0;
}