$(function() {
  //Add the fixed class to header
  set_header_white();
  $(window).scroll(function() {
    set_header_white();
  });
  function set_header_white() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $(".navbar").addClass("grp-navbar-white");
    } else {
      $(".navbar").removeClass("grp-navbar-white");
    }
  }

});
