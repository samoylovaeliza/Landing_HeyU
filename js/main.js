jQuery(document).ready(function() {

    var header = $('.header');
    var nav = $('.nav--header');

// Visible header while scrolling
    window.onscroll = function() {
        if(window.pageYOffset > header.height()) {
            nav.addClass('nav--move');
        } else {
            nav.removeClass('nav--move');
        }
    }
// Burger menu function for mobile version
    $(document).on('click', '.burger', function(){
        $(this).toggleClass('is-active');
        $('.header__nav-wrap').toggleClass('is-active');
    })
});

// Up-button function
$(".up-btn").on("click", function() {
  $("html, body").animate({
    scrollTop: 0
  }, 'slow')
});
