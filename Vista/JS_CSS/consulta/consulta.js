var guidesTable = null;

$(document).on("allLoaded", function () {
 
   
    /* Formatting function for row details - modify as you need */
    function formatList(data, row, tr, listaCrotalesDescolgados) {
    
        html = '<ul class="lista_crotales">';
        for (var i in data){
            html += '<li>'+data[i].crotal+'</li>';
        }
        html += '</ul>';
        
        if ((listaCrotalesDescolgados.length>0) && (row.data().estado=="1")){
            html += '<ul class="lista_crotales"><label class="col-md-2 col-xs-4 control-label" >' + literalesPage[53871] + ':</label><br>';
            for (var i in listaCrotalesDescolgados) {
                html += '<li style="background-color: #FFDDDD">' + listaCrotalesDescolgados[i].crotal + '</li>';
            }
            html += '</ul>';
        }
        row.child(html).show();
        tr.addClass('shown');
    }

    function getGuideEartags(row, tr) {
        d = row.data();
        data = { "guide": d.guia };
        //$.ajax({
        //    url: location.protocol + "//" + location.host + location.pathname + "/getGuideEartags",
        //    type: "post",
        //    data: JSON.stringify(data),
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    success: function (response) {
        //        response = JSON.parse(response.d);
        //        formatList(response, row, tr);
        //    },
        //    error: function (response) {
        //        errorManagement(response, null);
        //    }
        //});


        successFn = function (response) {
            var listaCrotalesGuia=response.lista
            var listadescolgados = ConsultaGuiasCrotalesDescolgados(row, tr,listaCrotalesGuia);


           
           
        };

        requestWS({ wsMethod: "/getGuideEartags", data: data, "successFn": successFn, "errorFn": null });
    }
    function ConsultaGuiasCrotalesDescolgados(row, tr, listaCrotalesGuia) {
        d = row.data();
        data = { "guide": d.guia };
        //$.ajax({
        //    url: location.protocol + "//" + location.host + location.pathname + "/getGuideEartags",
        //    type: "post",
        //    data: JSON.stringify(data),
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    success: function (response) {
        //        response = JSON.parse(response.d);
        //        formatList(response, row, tr);
        //    },
        //    error: function (response) {
        //        errorManagement(response, null);
        //    }
        //});


        successFn = function (response) {
            var listaCrotalesDescolgados = {};
            listaCrotalesDescolgados = response.lista;

            formatList(listaCrotalesGuia, row, tr, listaCrotalesDescolgados);
            return lista;
        };

        requestWS({ wsMethod: "/ConsultaGuiasCrotalesDescolgados", data: data, "successFn": successFn, "errorFn": null });
    }
    function denyGuide(guide) {
        $('#myModal').modal({ backdrop: 'static', keyboard: false });
        //$('#messageBox').html("");
        data = { "guide": guide };
        //$.ajax({
        //    url: location.protocol + "//" + location.host + location.pathname + "/denyGuide",
        //    type: "post",
        //    data: JSON.stringify(data),
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    success: function (response) {
        //        $('#myModal').modal('hide');
        //        response = JSON.parse(response.d);
        //        if (response.code != undefined && response.code != null && response.code == 200) {
        //            $("#success-alert").text(response.message);
        //            $("#success-alert").show();
        //            $("#success-alert").alert();
        //            $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
        //                $("#success-alert").slideUp(500);
        //            });
        //            getGuides();
        //        }
        //        else if (response.message != undefined && response.message != null) {
        //            message = "<li><label class='validationerror'> " + response.message + "</label></li>";
        //            $("#messageBox").html(message);
        //        }
        //        else {
        //            errorManagement(response, "");
        //        }
        //    },
        //    error: function (response) {
        //        errorManagement(response, null);
        //    }
        //});


       successFn = function (response) {
           /*
            $("#success-alert").text(response.message);
            $("#success-alert").show();
            $("#success-alert").alert();
            $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
                $("#success-alert").slideUp(500);
            });*/
            getGuides();
       };

       finallyFn = function (response) {
           $('#myModal').modal('hide');
       };
        
       requestWS({ wsMethod: "/denyGuide", data: data, "successFn": successFn, "errorFn": null, finallyFn: finallyFn });
    }

    function getGuides() {
        //$.ajax({
        //    url: location.protocol + "//" + location.host + location.pathname + "/getGuides",
        //    type: "post",
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    success: function (response) {
        //        response = JSON.parse(response.d);
        //        if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
        //            errorManagement(response, null);
        //        }
        //        else {
        //            //console.log(response);
        //            loadDataTable(response);
        //        }
        //    },
        //    error: function (response) {
        //        errorManagement(response, null);
        //    }
        //});


        successFn = function (response) {
            loadDataTable(response.lista);
        };

        requestWS({ wsMethod: "/getGuides", data: "", "successFn": successFn, "errorFn": null });
    }


    function searchGuides() {
        //data = { "crotal": $('#crotal').val(), "explotacion": $('#explotacion').val() };
        data = { "crotal": $('#crotal').val() };
        //$.ajax({
        //    url: location.protocol + "//" + location.host + location.pathname + "/searchGuides",
        //    type: "post",
        //    contentType: "application/json; charset=utf-8",
        //    data: JSON.stringify(data),
        //    dataType: "json",
        //    success: function (response) {
        //        //console.log(response)
        //        response = JSON.parse(response.d);
        //        if (response.fieldErrors != undefined && response.fieldErrors != null && response.fieldErrors.length > 0) {
        //            errorManagement(response, null);
        //        }
        //        else {
        //            loadDataTable(response);
        //        }
        //    },
        //    error: function (response) {
        //        errorManagement(response, null);
        //    }
        //});


        successFn = function (response) {
            loadDataTable(response.lista);
        };

        requestWS({ wsMethod: "/searchGuides", data: data, "successFn": successFn, "errorFn": null });
    }

    // Bind click to OK button within popup
    $('#buscarCrotal').click(function () {
        if ($('#crotal').val().length == 0) {
            getGuides();
        }
        else {
            searchGuides();
        }
        //$("#sectionDatatable").removeClass('hidden');
        return false;
    });

    function loadDataTable(dataSet) {
        if (guidesTable != null) {
            //Eliminar la tabla y los eventos de click.
            guidesTable.destroy();
            //$('#guidesTable').off('click');
            $('#guidesTable').off();
            $('#guidesTable').children().off();
        }

        $.fn.dataTable.moment(selectedLanguageMomentDateType2);

        guidesTable = $('#guidesTable').DataTable({
            "data": dataSet,
            //"pageLength": 4,
            "ordering": true,
            "searching": true,
            "paging": true,
            "info": true,
            //"lengthChange": false,
            "autoWidth": false,
            "deferRender": true,
            "columns": [
                {
                    "data": "estado",
                    "className": 'estado',
                    "orderable": false,
                    "render": function (data, type, full, meta) {
                        if (data == "1") {
                            html = '<i class="fa fa-dot-circle-o"></i>';
                        }
                        else if (data == "2") {
                            html = '<i class="fa fa-dot-circle-o anulado"></i>';
                        }
                        else if (data == "3") {
                            html = '<i class="fa fa-exclamation-circle" title="' + literalesPage[53792] + '"></i>';
                        }
                        else {
                            html = '';
                        }
                        return html;
                    }
                }, {
                    "className": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                }, {
                    "data": "guia", "title": literalesPage[50802]
                }, {
                    "data": "expdestino", "title": literalesPage[50803]
                }, {
                    "data": "fecsalida", "title": literalesPage[50804]
                //}, {
                //    "data": "fecllegada", "title": literalesPage[50805]
                }, {
                    "data": null,
                    "orderable": false,
                    "render": function (data, type, full, meta) {
                        if (data.imprimible.toUpperCase() == "TRUE") {
                            button = '<button id="guia" class="btn btn-default icono" title="' + literalesPage[53793] + '">' +
                                '<i id="guia" class="fa fa-print"></i></button>';
                            if (data.matadero.toUpperCase() == "TRUE") {
                                button += '<button id="guia_anexo_matadero" class="btn btn-default icono blue" title="' + literalesPage[53794] + '">' +
                                    '<i id="guia_anexo_matadero" class="fa fa-print"></i></button>';
                            }
                        }
                        else {
                            button = "";
                        }
                        return button;
                    }
                }, {
                    "data": null,
                    "className": 'anular',
                    "orderable": false,
                    "render": function (data, type, full, meta) {
                        html = "";
                        if (data.estado == "1" && data.anulable.toUpperCase() == "TRUE" && (permisoAnularGuia.toUpperCase() == "TRUE" || esexplotacionpropia.toUpperCase() == "TRUE")) {
                            //html = '<i id="anular" class="fa fa-times">';
                            html = '<a data-toggle="modal" data-target="#confirm-anular"><i id="anular" class="fa fa-times"></a>';
                        }
                        return html;
                    }
                }
            ],
            "order": [],
            "language": {
                "url": datatableLanguageUrl
            }
        });

        

        // Bind click to OK button within popup
        $('#confirm-anular').on('click', '.btn-ok', function (e) {
            var id = $(".modal-body #guia").val()
            $("#confirm-anular").modal('hide');
            denyGuide(id);
        });


        // Add event listener for opening and closing details
        $('#guidesTable').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = guidesTable.row(tr);

            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            } else {
                // Open this row
                //row.child(getGuideEartags(row.data())).show();
                //tr.addClass('shown');
                getGuideEartags(row, tr);
            }
        });

        $('#guidesTable').on('click', 'button', function (e) {
            var print = e.target.id;
            var row = guidesTable.row($(this).parents('tr')).data();
            data = { "row": row, "print": print };
            getAssociatedFile(data);
        });

        $('#guidesTable').on('click', "[id='anular']", function (e) {
            var row = guidesTable.row($(this).parents('tr')).data();
            $(".modal-body #guia").val(row.guia);


            //Antes de javier
            //var row = guidesTable.row($(this).parents('tr')).data();
            //denyGuide(row.guia);

        });

    }

    getGuides();

})
    

   