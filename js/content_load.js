'use strict';
var curr_page;

function show_page(url, block1, block2) {
  block1.on('click',function(){
    if (curr_page == url){
      return;
    }else {
      curr_page = url;
      $.ajax({
        url: url,
        cache: false,
        dataType: "html",
        success: function(html){
          $(block2).html(html);
        },
      });
	}
  });
}

$(document).ready(function(){
  show_page('./projects/main.html',$('#m1'),$('.content'));
  show_page('./projects/ho.html',$('#p1'),$('.content'));
  show_page('./projects/ku.html',$('#p2'),$('.content'));
  show_page('./projects/rv.html',$('#p3'),$('.content'));
  show_page('./projects/puv.html',$('#p4'),$('.content'));
  show_page('./projects/mot.html',$('#p5'),$('.content'));
});

$(window).on("ajaxSuccess", function(){
  $(".fancybox").fancybox({
    arrows : true,
    helpers : {
      overlay : {
        /* The content is locked in the overlay by default */
        locked : false
      }
    },
    beforeShow: function () {
        /* Add watermark */
        $('<div class="watermark"></div>')
            .bind("contextmenu", function (e) {
                return false; /* Disables right click */
            })
            .prependTo( $.fancybox.inner );
    },
    padding : 0
  });
  // Adjust height of block menu_bg relative to block content  
  setTimeout(function(){$('#menu_bg').css("height", $('.content').outerHeight());}, 300);
});