var content = document.getElementById('sc');
content.addEventListener('touchstart', function (event) {
    this.allowUp = (this.scrollTop > 0);
    this.allowDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
    this.slideBeginY = event.pageY;
});

content.addEventListener('touchmove', function (event) {
    var up = (event.pageY > this.slideBeginY);
    var down = (event.pageY < this.slideBeginY);
    this.slideBeginY = event.pageY;
    if ((up && this.allowUp) || (down && this.allowDown)) {
        event.stopPropagation();
    }
    else {
        event.preventDefault();
    }
});

var h = $(window).height();
var w = $(window).width();

$(function() {
    fit();
    $("#nav-icon1").on('click', function() {
        // alert();
        var me = $(this);
        $("#sidebar-wrapper").toggleClass("active");
        me.toggleClass('open');
        if($(window).width() < 600) {
            $('body').toggleClass('no_oflow');
        }
        if($(window).width() > 600) {
            $('body').removeClass('no_oflow');
        }
    });

    // only for first time page loads
    if(w > 600) {
        setTimeout(function(){
            $("#nav-icon1").addClass("open");
            $("#sidebar-wrapper").addClass("active");
        }, 500);
    }

    // initial
    do_tweet();

    // replace caption content
    go();

    // you click it scrolls
    $('.sidebar-nav a[href^="#"]').on('click',function (e) {
        e.preventDefault();
         $('body').removeClass('no_oflow');
        var me = $(this);
        var target = me.attr('href');
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            // window.location.hash = target;
        });
        $("#nav-icon1").removeClass("open");
        $("#sidebar-wrapper").removeClass("active");
    });
})

function go() {
    if($('.caption p').is(":visible")) {
        setTimeout(function(){
            $('.caption p').fadeOut(300, function() {
                 setTimeout(function(){
                     $('#tweecool').fadeIn(300, go);
                }, 1000)
            })
        }, 10000)
    }
    else {
        setTimeout(function(){
            $('#tweecool').fadeOut(300, function() {
                 setTimeout(function(){
                     $('.caption p').fadeIn(300, go);
                }, 1000)
            })
        }, 10000)
    }
}

function do_tweet() {
    $('#tweecool').tweecool({
        //settings
        username : 'iamacinner',
        limit : 1 ,
        profile_image : true, // Show profile image
        show_time : false, // Show tweet time
        show_media : false,
        show_media_size: 'small'  //values: small, large, thumb, medium

    });
}

$(window).resize(function() {
    fit();
})

function fit() {
    var cb = 0;
    if($(window).width() <600 && $("#nav-icon1").hasClass('open')) {
        $('body').addClass('no_oflow');
    }
    if($(window).width() < 600) {
        cb = -10;
    }
    else {
        $('body').removeClass('no_oflow');
    }
    $('.cd-blurred-bg').css({'clip':'rect('+(($(window).height() - 70))+'px 1920px 989'+ 0 +'px 0)'});
}

