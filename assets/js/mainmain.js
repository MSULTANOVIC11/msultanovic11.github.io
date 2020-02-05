(function ($) {

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header'),
            $banner = $('#banner');



        // Wait for the page loading then makes animation
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 100);
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#menuHead').addClass('changeColor');
                $('#menuHead ul li a').css({ 'color': 'black' });
                $('#menuHead').css({ 'color': 'black', 'padding-top': '0px', 'bottom': '94.5%', });
            }
            if ($(this).scrollTop() < 50) {
                $('#menuHead').removeClass('changeColor')
                $('#menuHead ul li a').css({ 'color': 'white' });
                $('#menuHead').css({ 'color': 'black', 'padding-top': '5px', 'bottom': '93%', });
            }
        });






    });



})(jQuery);
