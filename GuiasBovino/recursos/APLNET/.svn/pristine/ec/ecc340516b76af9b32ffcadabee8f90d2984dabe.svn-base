var vopen, vpredata, vmap,vpostmap

(function($) {
    $.widget("ui.comboboxTHs", {
        defaults: {
            campoTH: 'TH',
            campoMun: 'MUN',
            campoEnt: 'ENT',
            entidadTH: 'XTTH',
            entidadMun: 'XTMUNICI',
            entidadEnt: 'XTENTIDA',
            pagina: 'JQCombosGen.aspx',
            inputReadonly: true,
			contexto: ''
        },
        _create: function() {
            var empty = {};
            var settings = $.extend(empty, this.defaults, this.options);

            var ComboTH = $.ikt_combobox.inicializar();
            ComboTH.pagina = settings.pagina + '/GETTHCOD';
            ComboTH.campodes = settings.campoTH + 'DES';
            ComboTH.campooculto = settings.campoTH + 'COD'
            ComboTH.add_extradata('campoTH', settings.campoTH)
            ComboTH.add_extradata('entidadTH', settings.entidadTH)
            ComboTH.ancho = 200;
            ComboTH.alto = 100;
            ComboTH.inputReadonly = settings.inputReadonly;
			if(settings.contexto != ''){
				ComboTH.contexto = settings.contexto;
			}
            ComboTH.mostrar();

            var ComboMUN = $.ikt_combobox.inicializar();
            ComboMUN.pagina = settings.pagina + '/GETMUNCOD';
            ComboMUN.campodes = settings.campoMun + 'DES';
            ComboMUN.campooculto = settings.campoMun + 'COD';
            ComboMUN.add_extradata('THCOD', '#' + settings.campoTH + 'COD')
            ComboMUN.add_extradata('campoTH', settings.campoTH)
            ComboMUN.add_extradata('campoMun', settings.campoMun)
            ComboMUN.add_extradata('entidadTH', settings.entidadTH)
            ComboMUN.add_extradata('entidadMun', settings.entidadMun)
            ComboMUN.ancho = 200;
            ComboMUN.alto = 100;
            ComboMUN.inputReadonly = settings.inputReadonly;
			if(settings.contexto != ''){
				ComboMUN.contexto = settings.contexto;
			}
            ComboMUN.mostrar();

            var ComboENT = $.ikt_combobox.inicializar();
            ComboENT.pagina = settings.pagina + '/GETENTCOD';
            ComboENT.campodes = settings.campoEnt + 'DES';
            ComboENT.campooculto = settings.campoEnt + 'COD';
            ComboENT.add_extradata('THCOD', '#' + settings.campoTH + 'COD')
            ComboENT.add_extradata('MUNCOD', '#' + settings.campoMun + 'COD')
            ComboENT.add_extradata('campoTH', settings.campoTH)
            ComboENT.add_extradata('campoMun', settings.campoMun)
            ComboENT.add_extradata('campoEnt', settings.campoEnt)
            ComboENT.add_extradata('entidadTH', settings.entidadTH)
            ComboENT.add_extradata('entidadMun', settings.entidadMun)
            ComboENT.add_extradata('entidadEnt', settings.entidadEnt)
            ComboENT.ancho = 200;
            ComboENT.alto = 100;
            ComboENT.inputReadonly = settings.inputReadonly;
			if(settings.contexto != ''){
				ComboENT.contexto = settings.contexto;
			}
            ComboENT.mostrar();
        }
    });
})(jQuery);

$.extend({
      ikt_combobox_THs:  
      {
		inicializar: function ()
		{
			return {
                contexto:'',
                pagina:'',
                extradata:{},
                campoTH : 'TH',
                campoMun : 'MUN',
                campoEnt : 'ENT',
                entidadTH: 'XTTH',
                entidadMun : 'XTMUNICI',
                entidadEnt: 'XTENTIDA',
                inputReadonly : true,
				add_extradata: function (id, valor)
				{
					this.extradata[id]=valor;
				},
				mostrar: function ()
				{
					$("#"+this.campoTH + "COD", this.contexto == ""? document : $("#"+this.contexto) ).comboboxTHs({url:this.pagina ,campoTH: this.campoTH, campoMun:this.campoMun, campoEnt:this.campoEnt, entidadTH: this.entidadTH, entidadMun: this.entidadMun, entidadEnt: this.entidadEnt, extraData: this.extradata, inputReadonly: this.inputReadonly, contexto: this.contexto});                 
				}
			};
		}
      }
});