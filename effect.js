$(window).load(function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$('document').ready(function () {
    var vw;

    // Window resize par balloons center adjust
    $(window).resize(function () {
        vw = $(window).width() / 2;
        $('.balloons').stop();

        $('#b1').animate({ top: 240, left: vw - 350 }, 500);
        $('#b2').animate({ top: 240, left: vw - 250 }, 500);
        $('#b3').animate({ top: 240, left: vw - 150 }, 500);
        $('#b4').animate({ top: 240, left: vw - 50 }, 500);
        $('#b5').animate({ top: 240, left: vw + 50 }, 500);
        $('#b6').animate({ top: 240, left: vw + 150 }, 500);
        $('#b7').animate({ top: 240, left: vw + 250 }, 500);
        $('#b8').animate({ top: 240, left: vw + 350 }, 500);
        $('#b9').animate({ top: 240, left: vw + 450 }, 500);
        $('#b10').animate({ top: 240, left: vw + 550 }, 500);
        $('#b11').animate({ top: 240, left: vw + 650 }, 500);
    });

    // Lights on
    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#play').fadeIn('slow');
        });
    });

    // Music play
    $('#play').click(function () {
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function () {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    // Banner coming
    $('#bannar_coming').click(function () {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function () {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    // General balloon loop
    function loopBalloon(id) {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#' + id).animate({ left: randleft, bottom: randtop }, 10000, function () {
            loopBalloon(id);
        });
    }

    // Balloons flying
    $('#balloons_flying').click(function () {
        $('.balloon-border').animate({ top: -500 }, 8000);

        // Rotation classes (odd/even split)
        $('#b1,#b3,#b5,#b7,#b9,#b11').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b4,#b6,#b8,#b10').addClass('balloons-rotate-behaviour-two');

        // Loop all balloons automatically
        $('.balloons').each(function () {
            loopBalloon($(this).attr('id'));
        });

        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    // Cake fade in
    $('#cake_fadein').click(function () {
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#light_candle').fadeIn('slow');
        });
    });

    // Candle lighting
    $('#light_candle').click(function () {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function () {
            $('#wish_message').fadeIn('slow');
        });
    });

	


    // Wish message
    $('#wish_message').click(function () {
        vw = $(window).width() / 2;
        $('.balloons').stop();

        $('#b1').animate({ top: 240, left: vw - 350 }, 500);
        $('#b2').animate({ top: 240, left: vw - 250 }, 500);
        $('#b3').animate({ top: 240, left: vw - 150 }, 500);
        $('#b4').animate({ top: 240, left: vw - 50 }, 500);
        $('#b5').animate({ top: 240, left: vw + 50 }, 500);
        $('#b6').animate({ top: 240, left: vw + 150 }, 500);
        $('#b7').animate({ top: 240, left: vw + 250 }, 500);
        $('#b8').animate({ top: 240, left: vw + 350 }, 500);
        $('#b9').animate({ top: 240, left: vw + 450 }, 500);
        $('#b10').animate({ top: 240, left: vw + 550 }, 500);
        $('#b11').animate({ top: 240, left: vw + 650 }, 500);

        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);

        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#story').fadeIn('slow');
        });
    });

    // Story message
    $('#story').click(function () {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function () {
            $('.message').fadeIn('slow');
        });

        function msgLoop(i) {
            $("p:nth-child(" + i + ")")
                .fadeOut('slow')
                .delay(800)
                .promise()
                .done(function () {
                    i = i + 1;
                    $("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
                    if (i == 50) {
                        $("p:nth-child(49)")
                            .fadeOut('slow')
                            .promise()
                            .done(function () {
                                $('.cake').fadeIn('fast');
                            });
                    } else {
                        msgLoop(i);
                    }
                });
        }
        msgLoop(0);
    });
});
