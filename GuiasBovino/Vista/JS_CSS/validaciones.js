


$(function () {

   
    // Añadimos la validación del IBAN
    // Para que esta función de validación funcione tenemos que tener en cuenta que los id-s de los controles del formulario tienen que llamarse igual a los de la función. 
    jQuery.validator.addMethod("validaIBANTodo", function (value, element) {


        var txtESolIBAN_1 = $("#txtESolIBAN_1").val();
        var txtESolIBAN_2 = $("#txtESolIBAN_2").val();
        var txtESolIBAN_3 = $("#txtESolIBAN_3").val();
        var txtESolIBAN_4 = $("#txtESolIBAN_4").val();
        var txtESolIBAN_5 = $("#txtESolIBAN_5").val();
        var txtESolIBAN_6 = $("#txtESolIBAN_6").val();

        var sValPai = txtESolIBAN_1.toString().substr(0, 2);
        var sValDC = txtESolIBAN_1.toString().substr(2);
        var sValCon = txtESolIBAN_4.toString().substr(0, 2);
        var sValNum = txtESolIBAN_4.toString().substr(2, 2) + txtESolIBAN_5.toString() + txtESolIBAN_6.toString();
        if (!validaIBAN(sValPai, sValDC, txtESolIBAN_2, txtESolIBAN_3, sValCon, sValNum)) {

            return false;
        } else {

            return true;

        }
    }, $.Literales["50146"]);


    //-----------------------------------------------
    function ValidaCCC(pEnt, pOfi, pDG, pNC) {
        /*
        pEnt=Entidad; pOfi=Ofincina; pDG=Dígito de Control; pNC=Número de Cuenta
        */
        var ii;
        var sEntOfi;
        var iSuma = 0;
        var iValorComprobacion = [6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
        var vDigitoUno, vDigitoDos;

        try {

            if (pEnt == '' || pOfi == '' || pDG == '' || pNC == '')
            { return false; }
            if (pEnt.length != 4 || pOfi.length != 4 || pDG.length != 2 || pNC.length != 10)
            { return false; }

            //Comprobar el Primer Dígito de Control con la variable de EntidadOcicina
            sEntOfi = pEnt.toString() + pOfi.toString();
            for (var ii = 0; ii < 8; ii++) {
                iSuma += parseInt(sEntOfi.substr(ii, 1)) * iValorComprobacion[7 - ii];
            }
            vDigitoUno = 11 - (iSuma % 11);
            switch (vDigitoUno) {
                case 10:
                    vDigitoUno = '1';
                    break;
                case 11:
                    vDigitoUno = '0';
                    break;
                default:
                    vDigitoUno = vDigitoUno.toString();
            }


            //Comprobar el Segundo Dígito de Control con la variable de Cuenta
            iSuma = 0;
            for (ii = 0; ii < 10; ii++) {
                iSuma += parseInt(pNC.substr(ii, 1)) * iValorComprobacion[9 - ii];
            }
            vDigitoDos = 11 - (iSuma % 11);
            switch (vDigitoDos) {
                case 10:
                    vDigitoDos = '1';
                    break;
                case 11:
                    vDigitoDos = '0';
                    break;
                default:
                    vDigitoDos = vDigitoDos.toString();
            }

            //Comprobación Final
            if (pDG != vDigitoUno + vDigitoDos)
            { return false; }

            return true;


        }
        catch (e) {
            return false;
        }

    }


    function validaIBAN(pPai, pDC, pEnt, pOfi, pDG, pNC) {
        //debugger;
        var bRet = false;
        var sCCC;
        var sCtrl;
        var sDC;
        var pIBAN = '';

        try {
            pIBAN += (pPai + pDC + pEnt + pOfi + pDG + pNC);
            pIBAN = pIBAN.toUpperCase();

            if (pIBAN.length != 24)
            { return false; }
            if (!isNaN(pIBAN.substr(0, 2)) || isNaN(pIBAN.substr(2)))
            { return false; }

            sCCC = pIBAN.substr(4).toString();
            sCtrl = (pIBAN.substr(0, 1).charCodeAt(0) - 55).toString() + (pIBAN.substr(1, 1).charCodeAt(0) - 55).toString() + pIBAN.substr(2, 2);
            sCtrl = sCCC.toString() + sCtrl;

            if (1 != CalculaResto(sCtrl, 97))
            { return false; }

            switch (pIBAN.substr(0, 2)) {
                case "ES":
                    bRet = ValidaCCC(pEnt, pOfi, pDG, pNC);
                    break;

                default:
                    bRet = false;
            }

            return bRet;
        }
        catch (e) {
            return false;
        }

    }

    function CalculaResto(sDividendo, iDivisor) {
        //sDividendo debe ser una cadena de texto.
        var iMod = 0;

        for (var i = 0; i < sDividendo.length; ++i)
        { iMod = (iMod * 10 + parseInt(sDividendo.charAt(i))) % iDivisor; }
        return iMod;
    }






    // Añadimos la validación del CP

    jQuery.validator.addMethod("cp_validar", function (value, element) {
   
        var patCP = new RegExp("^0[1-9][0-9]{3}$|^[1-4][0-9]{4}$|^5[0-2][0-9]{3}$");        

        if (value != "") {

            if (!patCP.test(value)) {

                return false;

            }
            else {

                return true;
            }

        }

        else {

            return true;

        }

    }, $.Literales["50145"]);

    // Añadimos la validación del mail
    jQuery.validator.addMethod("mail_validar", function (value, element) {

        var patEmail = new RegExp("^[a-zA-Z0-9_\\-\\.]+\\@[a-zA-Z0-9_\\-\\.]+\\.[a-zA-Z]{2,3}$");

        if (!(patEmail.test(value))) {
            return false;
        } else {
            return true;
        }
    }, $.Literales["50146"]);


    // Añadimos la validación del teléfono móvil
    jQuery.validator.addMethod("movil_validar", function (value, element) {
        
        var patTelMovil = new RegExp("^6[0-9]{8}$");

        if (value != "") {

            if (!(patTelMovil.test(value))) {

                return false;
            }
            else {

                return true;
            }
        }
        else {

            return true;
        }
    }, $.Literales["50146"]);

    // Añadimos la validación del teléfono fijo
    jQuery.validator.addMethod("fijo_validar", function (value, element) {
        
        var patTelFijo = new RegExp("^9[0-9]{8}$");
        if (value != "") {

            if (!(patTelFijo.test(value))) {
                return false;
            } else {
                return true;
            }
        }
        else {
            return true;
        }
    }, $.Literales["50146"]);


    // Añadimos la validación del cifnif
    jQuery.validator.addMethod("cifnif_validar", function (value, element) {
       
        // se busca el dígito de control y la letra
        // Separar el CIF/NIF en los 3 campos
        var sLetC;
        var sNum;
        var sLetN;
        if (isNumericv(Leftv(value, Lenv(value) - 1))) {
            sLetC = "";
            sNum = Leftv(value, Lenv(value) - 1);
            sLetN = Rightv(value, 1);
        }
        else {
            sLetC = Leftv(value, 1);
            sNum = Rightv(value, Lenv(value) - 1);
            sLetN = "";
        }

        // Validar el CIFNIF
        if (!CIFNIF_ControlarN(sLetC, sNum, sLetN, false)) {
            //if (!CIFNIF_ControlarN("", Leftv(value, Lenv(value) - 1), Rightv(value, 1), false)) {
            //if (!CIFNIF_ControlarLetCIFN(value, false, false)) {
            return false;
        }
        else {
            return true;
        }

    }, $.Literales["50144"]);

    // Añadimos la validación del importe que debe ser mayor que 0
    jQuery.validator.addMethod("importe_validar", function (value, element) {

        if (!isNaN(value) && value > 0) {
            return true;
        } else {
            return false;
        }
    }, $.Literales["50147"]);


    // Añadimos la validación del mail
    jQuery.validator.addMethod("mail_sep_validar", function (value, element) {
      
        var valido = true;
        var patEmail = new RegExp("^[a-z0-9_\\-\\.]+\\@[a-z0-9_\\-\\.]+\\.[a-z]{2,3}$");
        arrContacto = value.split(";");
        for (i = 0; i < arrContacto.length; i++) {
            patResultado = patEmail.test(arrContacto[i]);
            if (!patResultado) {

                valido = false;

            }
        }

        if (!valido) {

            //$("#txtMailSep").focus();
            return false;

        }
        else {

            return true;
        }

    }, $.Literales["50146"]);


    // Añadimos la validación del movil
    jQuery.validator.addMethod("movil_sep_validar", function (value, element) {
        
        var valido = true;
        var patTelMovil = new RegExp("^6[0-9]{8}$");
        arrContacto = value.split(";");
        for (i = 0; i < arrContacto.length; i++) {
            patResultado = patTelMovil.test(arrContacto[i]);
            if (!patResultado) {

                valido = false;
                //$("#txtMailSep").focus();
                return false;

            }

        }

        if (valido) {

            return true;
        }


    }, $.Literales["50146"]);








});