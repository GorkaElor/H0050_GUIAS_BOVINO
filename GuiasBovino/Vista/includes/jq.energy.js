var es;
var jQueryScriptOutputted = false;
if (typeof(screenParms)=='undefined') {var screenParms = new Object ();}
screenParms.bgcolor = "#000000";
defaultTime = 1200000;

function initJQuery() {
    
    //if the jQuery object isn't available
    if (typeof(window.jQuery) == 'undefined') {
        if (! jQueryScriptOutputted) {
            //only output the script once..
            jQueryScriptOutputted = true;
            
            //output the script (load it from google api)
            document.write("<scr" + "ipt type=\"text/javascript\" src=\"//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js\"></scr" + "ipt>");
			
        }
        setTimeout("initJQuery()", 150);
    } else {
                        
        jQuery(function() {  
			// función centrado de capa. Se añade a jquery
			jQuery.fn.center = function () {
				this.css("position","absolute");
				this.css("top", Math.max(0, ((jQuery(window).height() - jQuery(this).outerHeight()) / 2) + 
															jQuery(window).scrollTop()) + "px");
				this.css("left", Math.max(0, ((jQuery(window).width() - jQuery(this).outerWidth()) / 2) + 
															jQuery(window).scrollLeft()) + "px");
				return this;
			}
			if (typeof(screenParms.time)=='undefined') { screenParms.time=defaultTime; /*10 minutos */ }
			es = new EnergyScreen (screenParms);
			googleWebFonts ();
			setTimeout (function () {es.initScreen();},screenParms.time);
		});
    }
            
}
initJQuery();
// google web fonts javascript
function googleWebFonts ()
{
	WebFontConfig = {
		google: { families: [ 'Orbitron:700:latin' ] }
	  };
	  (function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	  })();
}

function EnergyScreen(params) {
    this.nombre = params.nombre;
    this.imagen = params.url_imagen;
    this.textotit = params.textotit;
    this.textolinea1 = params.textolinea1;
    this.textoen = params.textoen;
    this.textolinea2 = params.textolinea2;
    this.textolinea3 = params.textolinea3;
    this.textopie = params.textopie;
    this.p = params;
    this.initScreen = function() {
        texto = "<br/><br/><img src='img/mundo.png' alt='' style='float:left;margin-right:25px;'/><h2>";
        texto = texto + this.textotit + '</h2>' + this.textotit + ' <br/>';
        texto = texto + '<h3>' + this.textolinea1 + '</h3>';
        texto = texto + '<p> ' + this.textoen + ' <strong>' + this.nombre + '</strong> ' + this.textolinea2 + '</p>';
        texto = texto + '<p><br/>' + this.textolinea3 + '</p>';
        texto = texto + '<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>';
        texto = texto + '<p style="text-align:center;font-style: italic;font-size: larger;text-align: center;text-decoration: underline">' + this.textopie + '<br/>';
		if ((typeof (this.imagen)!='undefined') && (this.imagen!='')) {
			texto = texto + '<img id="logo" width="80%" src="'+this.imagen+'" alt="'+this.nombre+'"/>';
		}
		texot = texto +'</p>' ;

		jQuery("body").append("<div id='energyScreenDiv' style='display:none;'><div>"+ texto +"</div></div>");
		jQuery("body").css("overflow","hidden");
		//jQuery("html").css("overflow","hidden");
		

		jQuery ("div#energyScreenDiv div").css ({
			width: jQuery(window).width()  -200,
            height: jQuery(window).height() -100,
			display:'block'
		});
		/*jQuery ("html").css({backgroundColor: this.p.bgcolor});
		jQuery ("body").css({backgroundColor: this.p.bgcolor});*/
		altura = 0;
		jQuery ("body").css(            {
		    background: 'black',
		    color: 'floralwhit',
		    fontsize: 'larger'
		    });
		if (jQuery(window).height() > altura) { altura = jQuery(window).height();}
		if (jQuery("body").height() > altura) { altura = jQuery("body").height()}
		jQuery ("div#energyScreenDiv").css({
            position: 'absolute',
			cursor: 'pointer',
			overflow:'hidden',
			left : '0px',
			top : '0px',
            width: jQuery(window).width(),
            minHeight: altura,
			height: altura,
			backgroundColor: this.p.bgcolor,
			fontFamily:'Verdana, Arial, Helvetica',
			lineHeight: '150%',
			color: '#999999',
            zIndex:999,
			fontSize:'12px'
		});

		
		jQuery ("img#logo").css("maxWidth",'400px');
		jQuery ("img#logo").css("marginTop",'10px');
		jQuery ("div#energyScreenDiv h2").css({ fontSize:'2.5em',textdecoration: 'underline',fontFamily:"'Orbitron', sans-serif"});
		jQuery ("div#energyScreenDiv h3").css({ fontSize:'1.4em',fontFamily:"'Orbitron', sans-serif"});

		jQuery ("div#energyScreenDiv div").center();
		
		// cerrar ventana energia
		jQuery("div#energyScreenDiv").bind('click', function () {
            // qutiar la clase collapse del menu
			jQuery("body").css("overflow","auto");
			jQuery("html").css("overflow","auto");
			jQuery ("div#energyScreenDiv").fadeToggle('slow');
			setTimeout (function () {es.initScreen();},screenParms.time);
			setTimeout (function () {jQuery ("div#energyScreenDiv").remove();},500);
			window.top.location.reload();
		});
		
		//resize
		jQuery(window).resize(function() {
			jQuery ("div#energyScreenDiv div").css ({
			width: jQuery(window).width()  -200,
            height: jQuery(window).height() -100
		});
		jQuery ("div#energyScreenDiv").css({
				position: 'absolute',
				cursor: 'pointer',
				left : '0px',
				top : '0px',
				display:'block',
				width: jQuery(window).width(),
				minHeight: jQuery(window).height()
			});
			jQuery ("div#energyScreenDiv div").center();
		});
		jQuery(document).keyup(function(e) {
			if (e.keyCode == 27) { 
				jQuery("body").css("overflow","auto");
				jQuery("html").css("overflow","auto");
				jQuery ("div#energyScreenDiv").fadeToggle('slow');
				setTimeout (function () {es.initScreen();},screenParms.time);
				setTimeout (function () {jQuery ("div#energyScreenDiv").remove();},500);
				window.top.location.reload();
			}   // esc
		});
		// mostramos la capa de ahorro
		jQuery("div#energyScreenDiv").fadeToggle(1500);
        // hacemos collapse en el menu

        // sin o te funciona el zindex $(cabera).css("position","relative") 
                                                                //fixed
        
    };// fin initJQ
	
	
}