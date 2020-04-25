$(document).ready(function() {

    // run function on initial page load
    $('.square').click(function() {
      $('.square').toggleClass('square-circle');
      $('.circle').toggleClass('hidden');
      // $('.square').toggleClass('grow');
      // $('body').css('background-color', 'black');
    });

    // run function on resize of the window
    $(window).resize(function() {
      resize();
    });

    // run function on scroll of the window
    $(window).scroll(function() {
      scroll();
    });

});

function resize() {
  $('.square').addClass('purple');
}

function scroll() {
  $('.square').removeClass('purple');
}
