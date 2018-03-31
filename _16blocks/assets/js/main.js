jQuery(document).ready(function () {
    var nav = jQuery('.nav'),
        hamburger = jQuery('.hamburger');


    hamburger.click(function (e) {
        e.preventDefault();
        var _nav = jQuery(this).closest('.nav');

        if (_nav.hasClass('menu-opened')) {
            _nav.removeClass('menu-opened');
            jQuery(this).removeClass('is-active');
        } else {
            _nav.addClass('menu-opened');
            jQuery(this).addClass('is-active');
        }
    });
});


