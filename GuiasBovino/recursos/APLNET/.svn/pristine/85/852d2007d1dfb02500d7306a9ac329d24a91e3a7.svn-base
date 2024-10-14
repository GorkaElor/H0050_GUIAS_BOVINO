
$.extend({
    ikt_ajax: function(options) {
        var settings = {
            dataType: "json",
            type: "post",
            contentType: "application/json; charset=utf-8"
        };
        // Se realiza un merge de los valores por defecto y los que llegan
        if (options) {
            $.extend(settings, options);
        }
        // Se realiza la llamada ajax
        $.ajax(settings);
    },
    ikt_ajax_obj:
      {
          inicializar: function() {
              return {
                  pagina: '',
                  correcto: function(objeto) { return true },
                  error: function(objeto) { return false },
                  parametros: { 'data': { 'hash': viewHash} },
                  tipo: 'post',
                  async: true,
                  add_parametro: function(id, valor) {
                      this.parametros.data[id] = valor;
                  },
                  enviar: function() {
                      var correcto = this.correcto;
                      var error = this.error;
                      var settings = {
                          dataType: "json",
                          type: this.tipo,
                          async: this.async,
                          contentType: "application/json; charset=utf-8",
                          data: JSON.stringify(this.parametros),
                          url: this.pagina,
                          complete: function(jsondata, stat) {
                              if (stat == "success") { correcto(jsondata); }
                              else {
                                  try {
                                      // Si es un 401, es por que se acaba la sesión 
                                      if (jsondata.status.toString().substring(0, 3) == '401') {
                                          // ser es la variable que contiene el PATH_INFO, esta hay que definirla en el vista/default.aspx
                                          var path = path_info;
                                          alert('El tiempo de sesión expirado');
                                          if ($.isFunction(path)) {
                                              eval(path)
                                          } else {
                                            window.location = path;
                                          }
                                      }
                                      else {
                                          error(jsondata);
                                      }
                                  }
                                  catch (e) {
                                      error(jsondata);
                                  }
                              }
                          }
                      };
                      // Se realiza la llamada ajax
                      $.ajax(settings);
                  }
              };
          }
      }
});



 