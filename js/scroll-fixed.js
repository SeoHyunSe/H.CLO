$(function() {

  $(document).ready(function() {

    var scrollOffset = $('#top2').offset();

    $(window).scroll(function() {
      if ($(document).scrollTop() > scrollOffset.top) {
        $('#top2').addClass('scroll-fixed');
      }
      else {
        $('#top2').removeClass('scroll-fixed');
      }
    });
  });
});
