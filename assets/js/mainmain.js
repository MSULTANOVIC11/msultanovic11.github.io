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






    });



})(jQuery);
