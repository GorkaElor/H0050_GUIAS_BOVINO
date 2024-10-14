$.widget( "ui.ikt_littleTIP", {
            // default options
            options: {
            	tooltipText: "",
               // Configurable options (change value numbers to fit your needs)
				littleTIPdelay			:   10    ,	// Delay time before appear (in pixels)
				littleTIPfade			:   500     ,	// Fading duration time (in pixels)
				littleTIPbackground		:   0.7     ,	// Background opacity (from 0 to 1)
				littleTIPtext			:   1       ,	// Text opacity (from 0 to 1)
				littleTIPx				:   15      ,	// Horizontal distance from cursor (in pixels)
				littleTIPy				:   15      ,	// Vertical distance from cursor (in pixels)
                // callbacks
                change: null
            },
 
            // the constructor
            _create: function() {
            	var self = this;
            	var underlyingEl = self.element;

              	var elT = underlyingEl;			

				elT.mouseover(function(){
					var elemlT ;
					if ($.isFunction(self.options.tooltipText)){
						elemlT = self.options.tooltipText.call(this);
					}	
					else{
						if ($(self.options.tooltipText).size() > 0){
							if ($(self.options.tooltipText).val() != ""){
								elemlT = $(self.options.tooltipText).val();
							}
							if ($(self.options.tooltipText).text() != ""){
								elemlT = $(self.options.tooltipText).text();
							}
							if ($(self.options.tooltipText).html() != ""){
								elemlT = $(self.options.tooltipText).html();
							}
						}
						else{
							elemlT = self.options.tooltipText;
						}
					}


					 self.options.tooltipText;		

					$('<div id="littleTIP"><div id="littleTIPtext">'+elemlT+'</div><div id="littleTIPbackground"></div></div>').appendTo('body');	// Create littleTIP class structure
					$('#littleTIP').delay(self.options.littleTIPdelay).fadeIn(self.options.littleTIPfade).css({		// Delay, fade and littleTIP wrapper css properties
						zIndex: 10000000,
						position: 'absolute',
						display: 'none',
						width: 'auto',
						height: 'auto'
					});
					$('#littleTIP #littleTIPbackground').css({		// littleTIP background css properties
						zIndex: 10000001,
						position: 'absolute',
						display: 'block',
						opacity: self.options.littleTIPbackground,
						width: '100%',
						height: '100%',
						top: '0',
						left: '0'
					});
					$('#littleTIP #littleTIPtext').css({		// littleTIP text css properties
						zIndex: 10000002,
						position: 'relative',
						display: 'block',
						opacity: self.options.littleTIPtext,
						width: 'auto',
						height: 'auto'
					});
				});

				elT.mousemove(function(e){							// Function applied when mouse moves
					var BwiWi = $(window).width();					// Store window width in a variable for further usage
					var BwiHe = $(window).height();					// Store window height in a variable for further usage
					var BwHs = $(window).scrollLeft();				// Store window horizontal space in a variable for further usage
					var BwVs = $(window).scrollTop();				// Store window vertical space in a variable for further usage
					var liTIP = $('#littleTIP');					// Store littleTIP object in a variable for further usage
					var lTwi = $('#littleTIP').width();				// Store littleTIP width in a variable for further usage
					var lThe = $('#littleTIP').height();			// Store littleTIP height in a variable for further usage

					if (BwiWi + BwHs < e.pageX + lTwi + self.options.littleTIPx)	// If window width and window horizontal space is small move littleTIP to the other side
						{
						liTIP.css("left", e.pageX - lTwi - self.options.littleTIPx);
						}
					else
						{
						liTIP.css("left", e.pageX + self.options.littleTIPx);
						}
					if (BwiHe + BwVs < e.pageY + lThe + self.options.littleTIPy)	// If window height and window vertical space is small move littleTIP to the other side
						{
						liTIP.css("top", e.pageY - lThe - self.options.littleTIPy);
						}
					else
						{
						liTIP.css("top", e.pageY + self.options.littleTIPy);
						}
				});

				elT.mouseout(function(){			// Function applied when mouse moves out
					$('#littleTIP').remove();		// Remove littleTIP
				});
  
            },
            // called when created, and later when changing options
            _refresh: function() {
                // trigger a callback/event
                this._trigger( "change" );
            }
        });