/*!
 * FileInput Spanish Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['eu'] = {
        fileSingle: 'artxiboa',
        filePlural: 'artxiboak',
        browseLabel: 'Igo &hellip;',
        removeLabel: 'Kendu',
        removeTitle: 'Kendu aukeratutako artxiboak',
        cancelLabel: 'Utzi',
        cancelTitle: 'Uneko igoera bertan behera utzi',
        uploadLabel: 'Igo artxiboa',
        uploadTitle: 'Igo aukeratutako artxiboak',
        msgNo: 'Ez',
        msgCancelled: 'Utzita',
        msgZoomTitle: 'Ikusi xehetasunak',
        msgZoomModalHeading: 'Aurrebista zehatza',
        msgSizeTooLarge: 'Artxiboak "{name}" (<b>{size} KB</b>) gehiago du baimentzen den gehienezkoa <b>{maxSize} KB</b> baino.',
        msgFilesTooLess: 'Gutxienez <b>{n}</b> {files} aukeratu behar dituzu kargatzeko.',
        msgFilesTooMany: 'Kargatzeko aukeratutako artxibo kopurua <b>({n})</b> baimendutako gehienezko <b>{m}</b> baino handiagoa da.',
        msgFileNotFound: '"{name}" artxiboa ez da aurkitu.',
        msgFileSecured: 'Ezin da "{name}" artxiboa atzitu beste aplikazio bat berau erabiltzen ari delako edo irakurtzeko baimenik ez dugulako.',
        msgFileNotReadable: 'Ezin da "{name}" fitxategia atzitu.',
        msgFilePreviewAborted: '"{name}" fitxategiaren aurrebista bertan behera utzita.',
        msgFilePreviewError: 'Errore bat gertatu da "{name}" artxiboa irakurtzen zen bitartean.',
        msgInvalidFileType: 'Artxibo mota ezegokia "{name}"-rentzat. Soilik "{types}" motako artxiboak dira baimenduak.',
        msgInvalidFileExtension: 'Artxiboaren luzapen ezegokia "{name}"-rentzat. Solik "{extensions}" luzapena duten artxiboak dira baimenduak.',
        msgUploadAborted: 'Artxiboen karga bertan behera utzi da',
        msgValidationError: 'Balidazio errorea',
        msgLoading: '{files}-tik {index} artxiboa igotzen &hellip;',
        msgProgress: '{files}-tik {index} artxiboa igotzen - {name} - {percent}% osatuta.',
        msgSelected: '{n} {files} aukeratutakoa(k)',
        msgFoldersNotAllowed: 'Soilik artxiboak arrastatu eta jaregin. Aintzat ez hartua(k) {n} karpeta(k).',
        msgImageWidthSmall: '"{name}" irudiaren zabalera gutxienez {size} px-koa izan behar da.',
        msgImageHeightSmall: '"{name}" irudiaren altuera gutxienez {size} px-koa izan behar da.',
        msgImageWidthLarge: '"{name}" irudiaren zabalera ezin da {size} px baino handiagoa izan.',
        msgImageHeightLarge: '"{name}" irudiaren altuera ezin da {size} px baino handiagoa izan.',
        msgImageResizeError: 'Ezin izan dira irudiaren dimentsioak lortu tamaina aldatzeko.',
        msgImageResizeException: 'Errorea irudiaren tamaina aldatzean.<pre>{errors}</pre>',
        dropZoneTitle: 'Artxiboak arrastatu eta jaregin hemen &hellip;',
        fileActionSettings: {
            removeTitle: 'Ezabatu artxiboa',
            uploadTitle: 'Igo artxiboa',
            indicatorNewTitle: 'Oraindik igo gabe',
            indicatorSuccessTitle: 'Igota',
            indicatorErrorTitle: 'Igo Errorea',
            indicatorLoadingTitle: 'Igotzen ...'
        }
    };
})(window.jQuery);
