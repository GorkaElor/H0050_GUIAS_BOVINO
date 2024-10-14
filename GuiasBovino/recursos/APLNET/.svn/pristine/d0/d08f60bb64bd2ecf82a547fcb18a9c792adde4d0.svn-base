
var varValEntero= /^(?:\+|-)?\d+$/;
var varValReal= /^(?:\+|-)?\d+\.\d*$/;
var varValHora= /^(0[1-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
var varValEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var varValIP= /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/;
var varValNumerico = /^\d+$/;
var varValCP = /^\d{1,5}$/;
var varValTel = /^\d{1,9}$/;
var varValDNI= /^\d{1,8}$/;
var varMoneda=/^(\d+\.?)*(,\d+)?$/


//busca caracteres que no sean espacio en blanco en una cadena
function vacio(valor) {
for ( i = 0; i < valor.length; i++ ) {
if ( valor.charAt(i) != " " ) {
return 1
}
}
return 0
}


//valida que el campo no este vacio y no tenga solo espacios en blanco
function valVacio(valor) {
return vacio(valor)
}


function valTestear (valor, validacion)
{
switch (validacion){
   case "00" :   	
   	return (0);
   	break;
   case "01" :
	if(!varValEntero.test(valor)) 
	{
	return(1);
	} 
	else
	{
	return (0);
	}
	break;
   case "02" :
	if(!varValReal.test(valor)) 
	{
	return(1);
	} 
	else
	{
	return (0);
	}
	break;
   case "03" :
	if(!varValHora.test(valor)) 
	{
	return(1);
	} 
	else
	{
	return (0);
	}
	break;
   case "04" :
	if(!varValEmail.test(valor)) 
	{
	return(1);
	} 
	else
	{
	return (0);
	}
	break;
   case "05" :
	if(!varValIP.test(valor)) 
	{
	return(1);
	} 
	else
	{
	return (0);
	}
	break;	
   case "06" :
	if(!varValNumerico.test(valor)) 
	{
	return(1);
	} 
	else
	{
	return (0);
	}
	break;	
   case "07" :
	if(!varValCP.test(valor)) 
	{
	return(1);
	} 
	else
	{
	return (0);
	}
	break;	
   case "08" :
	if(!varValTel.test(valor)) 
	{
	return(1);
	} 
	else
	{
	return (0);
	}
	break;			
   case "09" :
	if(!varValDNI.test(valor)) 
	{
	return(1);
	} 
	else
	{
	return (0);
	}
	break;
   case "10" :	
	if(!varMoneda.test(valor)) 
	{
	return(1);
	} 
	else
	{
	return (0);
	}
	break;    
   default : 
   	return (0);
   	break;
} 
}
