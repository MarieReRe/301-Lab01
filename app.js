'use strict';
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_width_responsive
$(document).ready(function() {






  $(window).resize(function() {
    if ($(this).width() > 400) {
      $('body').css('background-color', 'yellow');
    } else {
      $('body').css('background-color', 'blue');
    }
  });





});
