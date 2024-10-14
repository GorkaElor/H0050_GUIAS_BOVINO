$.widget('ui.iconbutton', $.extend({}, $.ui.button.prototype, {
    _init: function() {
        $.ui.button.prototype._init.call(this);
        this.element.removeClass('ui-corner-all')
                    .removeClass('ui-state-default')
                    .addClass('ui-iconbutton')
                    .css("border","0px")
                    .unbind('.button');
    }		
}));