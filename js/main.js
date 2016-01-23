$(document).ready( function(){

    $('#title-intro').typed({
        strings: ["Hello,", "My name is"],
        typeSpeed: 10,
        backSpeed: 1
    });
    $('#title-name').typed({
        strings: ["Unathi Chonco"],
        typeSpeed: 5,
        startDelay: 2000
    });

    $('#go-to-about').click(function(){

        showAbout();

    });

    $(window).scroll(function(){
        if($(window).scrollTop()> 75 && $(window).scrollTop() <150){
            showAbout();
        }
    });


});

function showAbout(){
    $('#about-title').typed({
        strings: ["I Love Making Things"],
        typeSpeed: 5,
        startDelay: 300
    });

    $('.aboutSecAnim').animate({
        "opacity": "1"
    },500);

    $('#skills').animate({
        "opacity": "1"
    },500);
}

//Smooth Scroll
$(function() {

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});