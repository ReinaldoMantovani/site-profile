$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').toggleClass('showNav');
    });
       //Animated bar Icon//
     $('#navbar-toggler').click(function(){
        $(this).toggleClass('animatedNav');
     });

//Background change in scroll
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('.navbar-wrapper').addClass('change');

        } else {
            $('.navbar-wrapper').removeClass('change');
        }
    });

});