var respuestaCatpcha;
respuestaCatpcha="";

/************************************************************/
/* HAZI, imprlementación de google recpatcha
/* REQUISITOS
/* - ir a https://www.google.com/recaptcha/
/* - dar de alta el dominio
/* - apuntar la clave del sitio

/* - La página tiene que tener etiqueta head
/* - El formulario debe ejecutarse en su evento submit
/* - el formulario tiene que tene
/*    - id
/*    - action
/*    - method    
/* - El formulario tiene que enviarse con un botón que tiene
/* - que tener un id 

/*********************************************************/

/********************************************************
/*
/* Comprobamos si jquery está cargado
/*
/**********************************************************/

var attemptCount = 0;

// Comprobamos si exsite jquery
if (typeof jQuery == 'undefined') {
	var script = document.createElement('script');
	script.type = "text/javascript";
	script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
	document.getElementsByTagName('head')[0].appendChild(script);
	// Chrome?
	// Mozilla, Opera y webkit , inicio 
	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", initCheckJquery, false);
		// IE inicio
	} else if (document.attachEvent) {
		waitForJQuery();
	}
	// otros navegadores
	window.onload = initCheckJquery;
}
else
{
	jQuery(document).ready(function() 
	{
		initHaziGoogleRecaptcha();
	});
}

function initCheckJquery() {
// sale de la función si ha sido llamada previamente
	if (arguments.callee.done) return;

	// se ha cargado jquery
	if (typeof jQuery != 'undefined') {
		// flag this function so we don't do the same thing twice
		arguments.callee.done = true;
		initHaziGoogleRecaptcha();
	} else {
		text = document.createTextNode("JQuery did not load initially.");
	}
}

function waitForJQuery() {
	attemptCount++;
	if (typeof jQuery != 'undefined') { // Cargado
		initCheckJquery();
	return;
}
if (attemptCount < 100) {
	setTimeout(waitForJQuery, 100); // 
}
return;
}

/********************************************************
/*
/* Objeto para inicializar parámetros
/*
/**********************************************************/
var recaptchaParams = recaptchaParams || (function(){
	
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        getSiteName : function() {
            return _args[0];
        },
		getLang : function() {
            return _args[1];
        },
		getAPIKEY : function() {
            return _args[2];
        },
		getForm : function() {
            return _args[3];
        },
		getSubmitId : function() {
            return _args[4];
        }
    };
}());

/************************************************************/
/* comienzo de la ejcución*/
/************************************************************/
function initHaziGoogleRecaptcha (){

	/* añadimos el js / css  de google recaptcha */
	var script = document.createElement('script');
	script.type = "text/javascript";
	script.src = "https://www.google.com/recaptcha/api.js?hl=" + recaptchaParams.getLang();
	document.getElementsByTagName('head')[0].appendChild(script);
	/* css */
	/*var recaptchaCSS = document.createElement('link');
	recaptchaCSS.rel = "stylesheet";
	recaptchaCSS.href = "https://www.gstatic.com/recaptcha/api2/r20160307141848/demo__ltr.css";
	recaptchaCSS.type="text/css";
	document.getElementsByTagName('head')[0].appendChild(recaptchaCSS);
	*/
	
    /* ponemos los valores*/
    
	var recaptchaTXT ="";
	recaptchaTXT = recaptchaTXT + "<div class='recaptcha-error'>";
	recaptchaTXT = recaptchaTXT + "<!-- BEGIN: ReCAPTCHA implementation example. -->";
	recaptchaTXT = recaptchaTXT + "<div class='g-recaptcha' data-sitekey='"+recaptchaParams.getAPIKEY()+"' data-callback='onSuccess'>";
	recaptchaTXT = recaptchaTXT + "</div>";
	recaptchaTXT = recaptchaTXT + "<!-- Optional noscript fallback. -->";
	recaptchaTXT = recaptchaTXT + "<noscript>";
	recaptchaTXT = recaptchaTXT + "<div style='width: 302px; height: 462px;'>";
	recaptchaTXT = recaptchaTXT + "<div style='width: 302px; height: 422px; position: relative;'>";
	recaptchaTXT = recaptchaTXT + "<div style='width: 302px; height: 422px; position: absolute;'>";
	recaptchaTXT = recaptchaTXT + "<iframe src='https://www.google.com/recaptcha/api/fallback?k="+recaptchaParams.getAPIKEY()+"&hl=" + recaptchaParams.getLang() + "' frameborder='0' scrolling='no' style='width: 302px; height:422px; border-style: none;'></iframe>";
	recaptchaTXT = recaptchaTXT + "</div>";
	recaptchaTXT = recaptchaTXT + "</div>";
	recaptchaTXT = recaptchaTXT + "<div style='border-style: none; bottom: 12px; left: 25px; margin: 0px; padding: 0px; right: 25px; background: #f9f9f9;  border-radius: 3px; height: 60px; width: 300px;'>";
	recaptchaTXT = recaptchaTXT + "<textarea id='g-recaptcha-response' name='g-recaptcha-response' class='g-recaptcha-response' style='width: 250px; height: 40px; margin: 10px 25px; padding: 0px; resize: none; '></textarea>";
	recaptchaTXT = recaptchaTXT + "</div>";
	recaptchaTXT = recaptchaTXT + "</div>";
	recaptchaTXT = recaptchaTXT + "<br>";
	recaptchaTXT = recaptchaTXT + "</noscript>";
	recaptchaTXT = recaptchaTXT + "<!-- END: ReCAPTCHA implementation example. -->";
	if (recaptchaParams.getLang() == "es") {
		recaptchaTXT = recaptchaTXT + "<div class='recaptcha-error-message'>Demuestra que no eres un robot.</div>";
	}
	if (recaptchaParams.getLang() == "eu") {
		recaptchaTXT = recaptchaTXT + "<div class='recaptcha-error-message'>Frogatu ez zarela robot bat.</div>";
	}
	recaptchaTXT = recaptchaTXT + "</div>";
	
	
	try {
		$(recaptchaTXT).insertBefore ("#"+recaptchaParams.getSubmitId())
	}
	catch (e) {
		$("form#"+recaptchaParams.getForm()).append (recaptchaTXT);
	}
	
	/* evento de envío del formulario*/
	$( "form#"+recaptchaParams.getForm() ).submit(function( event ) {
	  if( respuestaCatpcha=="" ) 
		{ return false;} 
	else 
	{

		return true;
	}
	});
	
	
}

/**********************************************************/
var onSuccess = function(response) {
	
	respuestaCatpcha  = response;
	var errorDivs = document.getElementsByClassName("recaptcha-error");
	if (errorDivs.length) {
	  errorDivs[0].className = "";
	}
	var errorMsgs = document.getElementsByClassName("recaptcha-error-message");
	if (errorMsgs.length) {
	  errorMsgs[0].parentNode.removeChild(errorMsgs[0]);
	}

	};




