$(function() {
  //Add the fixed class to header
  set_header_white();
  $(window).scroll(function() {
    set_header_white();
  });
  function set_header_white() {
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
      $(".navbar").addClass("grp-navbar-white");
    } else {
      $(".navbar").removeClass("grp-navbar-white");
    }
  }

  //parallax
  $('.grp-parallax').parallax("100%", -0.4);
});
