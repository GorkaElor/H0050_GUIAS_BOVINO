$(document).on("allLoaded", function () {
    
    $('.date').datepicker(
        {
            autoclose: true,
            todayHighlight: true,
            weekStart: 1,
            format: selectedLanguageDateType,
            language: selectedLanguage
        });
    $('.date').datepicker('setDate', new Date());
    
});

function getAssociatedFileSub(print) {

    fecha = $("#fecha_salida").val();
    fecha = moment(fecha, selectedLanguageMomentDateType).format(WSMomentDateType);
    data = { "print": print, "fecha": fecha };
    getAssociatedFile(data);
}