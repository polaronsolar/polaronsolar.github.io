$(document).ready(function() {

    $('.dropdown').click(function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }
    });

    var init = function() {
        // Using no-js for IE
        $('#welcome-logo').hide();
        $('#welcome-text').hide();
        $('#welcome-btn').hide();

    };

    var initAnimate = function() {
        $('#welcome-logo').delay(400).fadeIn(1200);
        $('#welcome-text').delay(800).fadeIn(1500);
        $('#welcome-btn').delay(1200).fadeIn(1500);
    }

    init();
    $( window ).load(function() {
        initAnimate();
    });
});