"use strict";
$(document).ready(function(){
  $('a').on('click', function(e){
    e.preventDefault();
  });
  $('#ddmenu li').hover(function () {
    clearTimeout($.data(this,'timer'));
    $('ul',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul',this).stop(true,true).slideUp(200);
    }, this), 100));
  });
});

var h_hght = 250; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна

$(function(){
  var elem = $('#navigation');
  var top = $(this).scrollTop();

  if(top > h_hght){
    elem.css('top', h_mrg);
    }
  $(window).scroll(function(){
    top = $(this).scrollTop();

  if (top+h_mrg < h_hght) {
    elem.css('top', (h_hght-top));
  } else {
      elem.css('top', h_mrg);
    }
    });
});

/* Управление стрелкой возврата в начало */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300 && $(window).width() >= 1200) {
      $('.scrolluptop').fadeIn();
    } else {
      $('.scrolluptop').fadeOut();
    }
  });
  $('.scrolluptop').click(function () {
    $("html, body").animate({scrollTop: 0}, 600);
    return false;
   });
});