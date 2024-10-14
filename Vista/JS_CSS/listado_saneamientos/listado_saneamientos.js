var selectedEartags = [];
var crotal = "";





function getAssociatedFileSub(print) {
    data = { "print": print }
    getAssociatedFile(data);
};
/*funcion del bOTON EDITARTUBERCULOSIS*/
function EditarTuberculosis(fecha, crotal, P1, P2, DOL, CAL) {
    $('#myModal').modal({ backdrop: 'static', keyboard: false });
    $('#SANFECPRU').val(fecha);
    $('#crotal').val(crotal);
    $('#P1').val(P1);
    $('#P2').val(P2);
    $('#DOL').val(DOL);
    $('#CAL').val(CAL);
};

$(document).on("allLoaded", function () {
    $('#myModal').modal('hide');
   //$('#myModal').modal({ backdrop: 'static', keyboard: false });
    crotal = "";
    getEartagList();

    // Esta función se llama cuando se obtienen los crotales desde el webmethod y
    // hay que añadirlos al datatable.
    function loadEartagsDataTable(dataSet) {
        //console.log(dataSet);
        var columnDefs = [
               //{
               //    "targets": [2],
               //    "sClass": "encoge"
               //},
               // {
               //     "targets": [3],
               //     "sClass": "encoge"
               // },
               //{
               //    "targets": [6],
               //    "sClass": "encoge"
               //}
        ];

        
        $.fn.dataTable.moment(selectedLanguageMomentDateType2);
        var table = $('#tabla-crotales').on('init.dt', function () {
            customColumnHeader();
            $('#myModal').modal('hide');
        })
            .DataTable({
                //"destroy": true,
                "data": dataSet,
                //"ordering": false,
                //"searching": false,
                //"paging": true,
                //"lengthChange": false,
                //"autoWidth": false,
                "columnDefs": columnDefs,
                "deferRender": true,
                "columns": [
                    {

                        //"className": 'details-control',
                        "data": "tienesaneamientos",
                       "createdCell": function (td, cellData, rowData, row, col) {
                           if (rowData.tienesaneamientos == "true") {
                               $(td).addClass("details-control");
                           }                          
                       },
                       
                        "orderable": false,
                        "data": null,
                        "defaultContent": ''
                        //width:30
                    },
                    {
                        "data": "crotal",
                        "title": "<div id='name' class='asc'>" + literalesPage[50706] + "</div>",
                        
                        "render": function (data, type, full, meta) {
                            var html = "";
                            if (full.color != "") {
                                html = '<label id="eti_' + full.crotal + '"><strong style="color: ' + full.color + ';">' + full.crotal + '</label></strong>';

                            } else {
                                html = full.crotal;
                            };

                            return html;
                        }
                    },
                    { "data": "sexo", "title": "<div id='name'>" + literalesPage[50707] + "</div>" },
                    { "data": "fecnacimiento", "title": "<div id='name'>" + literalesPage[50708] + "</div>" },
                    { "data": "razdes", "title": "<div id='name'><div id='show'></div> <div >" + literalesPage[50709] + "</div></div>" },       
                    {
                "data": "dib",
                "orderable": false,
                "render": function (data, type, full, meta) {
                    var html = "";
                    if (data == "true") {
                        html = '<button class="btn btn-default" onclick ="javascript:llamarImprimirDIB(&#34;' + full.crotal + '&#34); return false;"><i class="fa fa-print"></i>DIB</button></a>';
                        
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


        

       
        $('body').on('click', function (e) {
            //did not click a popover toggle or popover
            if ($(e.target).data('toggle') !== 'popover'
                && $(e.target).parents('.popover.in').length === 0) {
                $('[data-toggle="popover"]').popover('hide');
            }
        });

        // Add event listener for opening and closing details
        $('#tabla-crotales tbody').delegate('td.details-control', 'click', function () {
            var tr = $(this).closest('tr');
            var row = table.row(tr);

            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            }
            else {
                // Open this row
                //row.child(format(row.data())).show();
                //tr.addClass('shown');
                getGuideEartagData(row, tr);
            }
        });

        /* Formatting function for row details - modify as you need */
        function formatList(data, row, tr) {
            //console.log(literalesPage);

      

            var fecha = literalesPage[50714];
            var veterinario = literalesPage[50715];
            var equipo = literalesPage[50716];
            var tipo = literalesPage[50717];
            var tuberculosis = literalesPage[50718];
            var brucelosis = literalesPage[50719];
            var perineumonia = literalesPage[50720];
            var leucosis = literalesPage[50721];
            var ibr = literalesPage[50722];
            var lazul = literalesPage[50723];
            var lazulpcr = "LA PCR";

            var paratuberculosis = literalesPage[50724];
            var anticuerpos = literalesPage[50725];
            var antigenos = literalesPage[50726];
            var neoesporas = literalesPage[50727];
            var etiqueta = "";
            var boton = "";

            var saneamientos = data;
            var htmlresultado = "";

            for (var i = 0; i < saneamientos.lista.length; i++) {
                data = saneamientos.lista[i]
                

                tuberculosis_realizada = "";
                brucelosis_realizada = "";
                perineumonia_realizada = "";
                leucosis_realizada = "";
                ibr_realizada = "";
                lazul_realizada = "";
                lazul_pcr_realizada = "";
                paratuberculosis_realizada = "";
                anticuerpos_realizada = "";
                antigenos_realizada = "";
                neoesporas_realizada = "";

                if (data.tuberculosis.realizada == "true") {
                    tuberculosis_realizada = "checked";
                }
                if (data.brucelosis.realizada == "true") {
                    brucelosis_realizada = "checked";
                }
                if (data.perineumonia.realizada == "true") {
                    perineumonia_realizada = "checked";
                }
                if (data.leucosis.realizada == "true") {
                    leucosis_realizada = "checked";
                }
                if (data.ibr.realizada == "true") {
                    ibr_realizada = "checked";
                }

                if (data.lazul != null) {
                    if (data.lazul.realizada == "true") {
                        lazul_realizada = "checked";
                    }
                    //lazul_pcr_realizada
                    if (data.lazulpcr.realizada == "true") {
                        lazul_pcr_realizada = "checked";
                    }
                    if (data.paratuberculosis.realizada == "true") {
                        paratuberculosis_realizada = "checked";
                    }
                    if (data.anticuerpos.realizada == "true") {
                        anticuerpos_realizada = "checked";
                    }
                    if (data.antigenos.realizada == "true") {
                        antigenos_realizada = "checked";
                    }
                    if (data.neoesporas.realizada == "true") {
                        neoesporas_realizada = "checked";
                    }

                }
              
                if (data.editable == "true") {
                    //metemos boton editar        
                    boton = '<dt><div id="botonEditarTuberculosis_' + row.data().crotal + "_" + data.fecha.replace("/", "").replace("/", "") + '"><button id="btnEditarTuberculosis_' + row.data().crotal + "_" + data.fecha.replace("/", "").replace("/", "") + '" tittle="' + literalesPage[53849] + '"  onclick="EditarTuberculosis(\'' + isNull(data.fecha) + '\',\'' + isNull(row.data().crotal) + '\',\'' + isNull(data.tuberculosis.P1) + '\',\'' + isNull(data.tuberculosis.P2) + '\',\'' + isNull(data.tuberculosis.DOL) + '\',\'' + isNull(data.tuberculosis.fechacalificacion) + '\')"  class="btn btn-default icono" style="background:#80aaff;border-radius:20px" title="' + literalesPage[53849] + '"><i  class="fa fa-edit"></i></button></div></dt>';
                    etiqueta = '';
                } else {
                    //ponemos la fecha de calificación
                    // etiqueta = '<dt>' + literalesPage[53846] + ': ' + data.fecha + '</dt>'
                    etiqueta = '<dt></dt><dd><dl><dt>' + literalesPage[53846] + ':</dt> <dd>' + data.fechacalificacion + '</dd></dl></dd>'
                    boton = '';
                };

                html = '<div class="row">' +
              '<dl style="width: 75%; margin-bottom: -10px;"><dt>' + literalesPage[53845] + ': ' + data.fecha + ' (' + data.tipo + ')<label style="padding-left:50px;color:grey">'+veterinario+':' + data.veterinario + '</label><label style="padding-left:25px;color:grey">'+equipo+':' + data.equipo + '</label></dt></dl>' +
              '<br><table id="tabla-detallesaneamiento" class="table table-responsive table-bordered ">' +
              '<tr><td width="50%">' +
              '<div class="col-xs-8">' +
              '<dl class="dl-horizontal">' +
              '<dt>' + tuberculosis + ':<input type="checkbox" class="enf_check"  disabled ' + tuberculosis_realizada + '></dt>' +
              '<dd><dl>' +
                '<dt>P1:</dt> <dd><label id="tP1_' + row.data().crotal + "_" + data.fecha.replace("/", "").replace("/", "") + '">' + data.tuberculosis.P1 + '</label></dd>' +
                '<dt>P2:</dt> <dd><label id="tP2_' + row.data().crotal + "_" + data.fecha.replace("/", "").replace("/", "") + '">' + data.tuberculosis.P2 + '</label></dd>' +
                '<dt>DOL:</dt> <dd><label id="tDOL_' + row.data().crotal + "_" + data.fecha.replace("/", "").replace("/", "") + '">' + data.tuberculosis.DOL + '</label></dd>' +
                '<dt>MT:</dt> <dd><label id="tMT_' + row.data().crotal + "_" + data.fecha.replace("/", "").replace("/", "") + '">' + data.tuberculosis.MT + '</label></dd>' +
                '<dt>C:</dt> <dd><label id="tCAL_' + row.data().crotal + "_" + data.fecha.replace("/", "").replace("/", "") + '">' + data.tuberculosis.C + '</label></dd>' +
                boton +
                '</dl></dd>' +
                etiqueta +
              '<dt>' + brucelosis + ' :<input type="checkbox" class="enf_check"  disabled ' + brucelosis_realizada + '></dt>' +
              '<dd><dl>' +
                '<dt>RB:</dt> <dd>' + data.brucelosis.RB + '</dd>' +
                '<dt> F:</dt> <dd>' + data.brucelosis.F + '</dd>' +
                '<dt>C:</dt> <dd>' + data.brucelosis.C + '</dd> </dl></dd>' +
              '<dt>' + perineumonia + ':<input type="checkbox" class="enf_check"  disabled ' + perineumonia_realizada + '></dt>' +
              '<dd><dl>' +
                '<dt>F:</dt> <dd>' + data.perineumonia.F + '</dd>' +
                //'<dt> N:</dt> <dd>' + data.perineumonia.N + '</dd>' +
                '<dt> MT:</dt> <dd>' + data.perineumonia.MT + '</dd>' +
                '<dt>C:</dt> <dd>' + data.perineumonia.C + '</dd> </dl></dd>' +

              '<dt>' + leucosis + ':<input type="checkbox" class="enf_check"  disabled ' + leucosis_realizada + '></dt>' +
              '<dd><dl>' +
                '<dt>EL:</dt> <dd>' + data.leucosis.EL + '</dd>' +
                '<dt>IDG:</dt> <dd>' + data.leucosis.IDG + '</dd>' +
                '<dt>C:</dt> <dd>' + data.leucosis.C + '</dd> </dl></dd>' +


                '<dt>' + ibr + ':<input type="checkbox" class="enf_check" disabled ' + ibr_realizada + '></dt>' +
              '<dd><dl>' +
                   '<dt>GE:</dt> <dd>' + isNull(isNull(data.ibr).I) + '</dd>' +
                   '<dt>GB:</dt> <dd>' + isNull(isNull(data.ibr).IBRGB) + '</dd>' +
                 '</dl></dd>' +
              '</div>' +
              '</td>' +
              '<td>' +
              '<div class="col-xs-8">' +
              '<dl class="dl-horizontal">' +

              '<dt>' + lazul + ':<input type="checkbox" class="enf_check"  disabled ' + lazul_realizada + '></dt>' +
              '<dd><dl>' +
                '<dt>LA:</dt> <dd>' + isNull(isNull(data.lazul).LA) + '</dd>' +
              '</dl></dd>' +

                '<dt>' + lazulpcr + ':<input type="checkbox" class="enf_check"  disabled ' + lazul_pcr_realizada + '></dt>' +
          '<dd><dl>' +
            '<dt>LA:</dt> <dd>' + isNull(isNull(data.lazulpcr).C) + '</dd>' +
          '</dl></dd>' +

              '<dt>' + paratuberculosis + ':<input type="checkbox" class="enf_check"  disabled ' + paratuberculosis_realizada + '></dt>' +
              '<dd><dl>' +
                '<dt>C:</dt> <dd>' + isNull(isNull(data.paratuberculosis).C) + '</dd>' +
              '</dl></dd>' +

              '<dt>' + anticuerpos + ' :<input type="checkbox" class="enf_check"  disabled ' + anticuerpos_realizada + '></dt>' +
              '<dd><dl>' +
                '<dt>C:</dt> <dd>' + isNull(isNull(data.anticuerpos).C) + '</dd>' +
              '</dl></dd>' +

              '<dt>' + antigenos + ':<input type="checkbox" class="enf_check"  disabled ' + antigenos_realizada + '></dt>' +
              '<dd><dl>' +
                '<dt>C:</dt> <dd>' + isNull(isNull(data.antigenos).C) + '</dd>' +
              '</dl></dd>' +

              '<dt>' + neoesporas + ':<input type="checkbox" class="enf_check"  disabled ' + neoesporas_realizada + '></dt>' +
              '<dd><dl>' +
                '<dt>C:</dt> <dd>' + isNull(isNull(data.neoesporas).C) + '</dd>' +
              '</dl></dd>' +
              '</td></tr></table>' +

              '</div>';
                htmlresultado = htmlresultado + html;
            }

          
         
            row.child(htmlresultado).show();
            tr.addClass('shown');
        }

        function getGuideEartagData(row, tr) {
            d = row.data();
            data = { "crotal": d.crotal };

            successFn = function (response) {
                formatList(response, row, tr);
            };

            //requestWS({ wsMethod: "/getUltimoSaneamiento", data: data, "successFn": successFn, "errorFn": null });
            requestWS({ wsMethod: "/ConsultaDetalleSaneamiento", data: data, "successFn": successFn, "errorFn": null });
            
        };
       

     

      


       

        function customColumnHeader() {
            $('#tabla-crotales th').each(function (index, th) {
                $(th).unbind('click');
                $(th).on('click', '#name', function (e) {
                    if ($(e.target).is('#show')) {
                        showHide(e, this);
                        return false;
                    }
                    if ($(th).find('#name').hasClass('asc')) {
                        $(th).find('#name').addClass('desc');
                        $(th).find('#name').removeClass('asc');
                        table.column(index).order('desc').draw();
                    }
                    else {
                        $(th).find('#name').addClass('asc');
                        $(th).find('#name').removeClass('desc');
                        table.column(index).order('asc').draw();
                    }
                    controlOrderShowHide();
                });
            });
        };

        $('#tabla-crotales').on('draw.dt', function () {
            controlOrderShowHide();
        });

        function controlOrderShowHide() {
            $.each(columnDefs, function (i, elem) {
                if (elem.sClass == "encoge") {
                    var index = elem.targets[0];
                    if ($(table.column(index).header()).hasClass('encoge')) {
                        $(table.column(index).nodes()).addClass('encoge');
                    }
                    else {
                        $(table.column(index).nodes()).removeClass('encoge');
                    }
                }
            });
        };

        function showHide(e, _this) {
            var th = table.column(_this.parentElement).index();
            var colIdx = table.column(th).index();
            console.log(colIdx);
            $(table.column(colIdx).header()).toggleClass('encoge');
            $(table.column(colIdx).nodes()).toggleClass('encoge');
        };

    }

   

    function getEartagList() {
        successFn = function (response) {
            loadEartagsDataTable(response.lista);
        };
        errorFn = function (response) {
            $('#myModal').modal('hide');
        };

        controlledErrorFn = function (response) {
            $('#myModal').modal('hide');
        }

        requestWS({ wsMethod: "/getEartagList", data: "", "successFn": successFn, "errorFn": errorFn, controlledErrorFn: controlledErrorFn });

      
    }
  
    //funciones ventana emergente
  

    $('#btnGuardar').on('click', function (e) {

        var p1, p2, dol, cal,fecha,crotal
        $("#messageBox").hide();
        p1 = $('#P1').val();
        p2 = $('#P2').val();
        dol = $('#DOL').val();
        cal = $('#CAL').val();
        fecha = $('#SANFECPRU').val();
        crotal = $('#crotal').val();

        var valido = true;

        if ((valido) && (p1 == "")) {
            valido = false;
            message = "<li><label class='validationerror'>" + literalesPage[53851] + " P1.</label></li>";
            $("#messageBox").html(message);
            $("#messageBox").show();
        }


        if ((valido) && (cal == ""|| cal==undefined)) {
            valido = false;
            message = "<li><label class='validationerror'>" + literalesPage[53851] + " C.</label></li>";
            $("#messageBox").html(message);
            $("#messageBox").show();
        }

        if (valido) {
            $("#messageBox").hide();
            //alert(fecha_notificacion + "\n" + mecod + "\n" + cadesde + "\n" + cahasta + "\n" + caactual);


            successFn = function (response) {
                $("#messageBox").hide();
                //alert(response.message);
                $('#myModal').modal('hide');
                var etiquetatexto =  crotal + "_" + fecha.replace("/", "").replace("/", "");
                $('#tP1_' + etiquetatexto)[0].innerText = p1;
                $('#tP2_' + etiquetatexto)[0].innerText = p2;
                $('#tDOL_' + etiquetatexto)[0].innerText = dol;
                $('#tCAL_' + etiquetatexto)[0].innerText = cal;

                //ocultar el boton editar
                $('#botonEditarTuberculosis_' + etiquetatexto)[0].innerHTML = "";
                $('#botonEditarTuberculosis_' + etiquetatexto)[0].innerHTML =  literalesPage[53846] + ": "+response.fecha;

                //le quito el color azul al crotal
                $('#eti_' + crotal)[0].innerHTML = crotal;
                $('#eti_' + crotal)[0].style.fontWeight = "normal";
                
                //botonEditarTuberculosis_ES041530534661_20200406
               // location = "listado_saneamientos.aspx";
            };
            errorFn = function (response) {
                $("#messageBox").html(response.message);
                $("#messageBox").show();
            };
            try {
                var data = {"fecha":fecha,"crotal":crotal, "P1": p1, "P2": p2,"DOL":dol,"CAL":cal };
                requestWS({ wsMethod: "/NotificarTuberculosis", data: data, "successFn": successFn, "errorFn": null });



            } catch (ex) {
                $("#messageBox").html(ex.message);
                $("#messageBox").show();
            }





        }

    });


    $('#btnCerrar').on('click', function (e) {
        $('#myModal').modal('hide');

    });
   
});




