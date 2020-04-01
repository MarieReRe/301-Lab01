'use strict';


$(document).ready(function() {
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_width_responsive





  $(window).resize(function() {
    if ($(this).width() > 400) {
      $('body').css('background-color', 'yellow');
    } else {
      $('body').css('background-color', 'blue');
    }
  });





});
