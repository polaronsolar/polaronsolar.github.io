$(document).ready(function() {

    //Page routing
    if ($(location).attr('href').indexOf('#faqs') != -1) {
        $('#content-display').load('faqs.html', function() {
            //do something
        });
    } else if (false) {}
    else {
        $('#content-display').load('home.html', function() {
            init();
            initAnimate();
        });
    }

    $('.dropdown').click(function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }
    });

    $('#abc').click(function() {
        console.log('hi');
    });

    $(':checkbox').change(function() {
        console.log('hi');
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

    $('.navigate-link').click(function() {
        var pageStr = $(this).attr('id') + '.html';
        $('#content-display').load(pageStr, function() {
            //do something
        });
    });

    // var loadHomePage = $.ajax({
    //     url: 'home.html',
    //     success: function(data) {
    //         $('#content-display').html(data);
    //         init();
    //         initAnimate();
    //     }
    // });

    // $('#content-display').load('home.html', function() {
    //     init();
    //     initAnimate();
    // });
    // // $( window ).load(function() {

    // // });
});
