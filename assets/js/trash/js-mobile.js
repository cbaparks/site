var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(function(){
    var args = 
    {
        positionProperty: 'transform',
        responsive: true,
        motionType: 'natural',
        useMouseMove: true,
        mouseMotionType: 'gaussian',
        motionAngleX: 80,
        motionAngleY: 80,
        alphaFilter: 0.5,
        adjustBasePosition: true,
        alphaPosition: 0.025,
    }
    if( isMobile.any() ) {
        $('#xo').attr('data-parallaxify-range', '150');
        $('#slide1 h1').attr('data-parallaxify-range', '200');
        $('#slide1 h3').attr('data-parallaxify-range', '150');
        $('.circle').attr('data-parallaxify-range', '150');
        $('.round-social-holder').attr('data-parallaxify-range', '250');
        $('#footer h1').attr('data-parallaxify-range', '200');
        $(this).parallaxify(args);
    }
    else {
        do_effect(args);
    }
 
    function do_effect(args) {        
        $('#slide1 ').hover(
            function(){
                $(this).parallaxify(args);
            },
            function(){
                $(this).parallaxify('destroy');
            }
        );
        $('.slide3').hover(
            function(){
                $(this).parallaxify(args);
            },
            function(){
                $(this).parallaxify('destroy');
            }
        );
        $('#footer ').hover(
            function(){
                $(this).parallaxify(args);
            },
            function(){
                $(this).parallaxify('destroy');
            }
        );        
    }
});