



// Botones buscar
$(document).on("allLoaded", function () {

   

    $("#btnSiguientePaso").click(function () {
        var redireccion;
        p1 = $("#RADIOP1SI")[0].checked; //$('input:radio[name=p1]').val() == 1;
        p2 = $("#RADIOP2SI")[0].checked; //$('input:radio[name=p2]').val() == 1;
        p21 = $('#p21').val();
        t11 = $("#t11").val();
        t12 = $("#t12").val();
        t13 = $("#t13").val();
        t14 = $("#t14").val();
        t15 = $("#t15").val();
        t21 = $("#t21").val();
        t22 = $("#t22").val();
        t23 = $("#t23").val();
        t24 = $("#t24").val();
        t25 = $("#t25").val();
        var data = {
            "p1": p1, "p2": p2,"p21":p21, "t11": t11,
            "t12": t12, "t13":t13, "t14": t14,
            "t15": t15, "t21": t21,
            "t22": t22, "t23": t23,
            "t24": t24, "t25": t25           
        };
        $.ajax({
            url: location.protocol + "//" + location.host + location.pathname + "/setMainValuesICA1",
            type: "post",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                location = "ica2.aspx";
                
            },
            error: function (response) {
                window.alert("Error en los datos");
            }
        });
      
        return false;
    });

      

  
   

});
