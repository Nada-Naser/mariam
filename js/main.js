// function change what is written

(function($) {
    var typed = new Typed('span.txt-rotate',{
        strings : ['I\'am a web Deseigner'],
        typeSpeed:100,
        backSpeed:100,
        fadeOut:false,
        smartBackspace:true,
        loop:true
    });
})(jQuery);
// work section
$(document).ready(function() {
    $('.projects-wrapper').isotope({
        filter:'*',
        layoutMode:'masonry'
    });
    $('.list-filter a').click(function() {
        var selector = $(this).attr('data-filter');
        $('.list-filter a').removeClass('active');
        $(this).addClass('active');
        $('.projects-wrapper').isotope({
            filter: selector
        });
        return false;
    });
    $(".popup-images").magnificPopup({

        type:"image",
        closeOnContentClick:true,
        gallery: { 
            enabled: true,
            navigateByImgClick:true
        }
    });
});