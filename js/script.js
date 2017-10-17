$(function() {
  //Add the fixed class to header
  var grp_hero = $('#grp-hero');
  if($(grp_hero).length) {
    set_header_white();
    $(window).scroll(function() {
      set_header_white();
    });
    function set_header_white() {
      var grp_height = $(grp_hero).outerHeight();
      var scroll_offset = grp_height - 100;
      var scroll = $(window).scrollTop();
      if (scroll >= scroll_offset) {
        $(".navbar").addClass("grp-navbar-white");
      } else {
        $(".navbar").removeClass("grp-navbar-white");
      }
    }
  }

  //parallax
  $('.grp-parallax').parallax("100%", -0.4);
});
