$(document).ready(function() {

   $("#left").click(function() {
      prevImg();
   });

   $("#right").click(function() {
      nextImg();
   });

   $("#buttons i").click(function() {
      var index = $("#buttons i").index( this );
      console.log(index);
      moveToImg(index);
   });

});


function prevImg() {
   // move to previous image
   var act = $(".active");
   act.removeClass("active");
   // first-last check
   if (act.hasClass("first")) {
      $(".last").addClass("active");
   } else {
      act.prev().addClass("active");
   }
}

function nextImg() {
   // move to next image
   var act = $(".active");
   act.removeClass("active");
   // first-last check
   if (act.hasClass("last")) {
      $(".first").addClass("active");
   } else {
      act.next().addClass("active");
   }
}

function moveToImg(index) {
   // remove all active classes
   var act = $(".active");
   act.removeClass("active");
   // add active to img/i on index - index + 1
   log($("#buttons i:nth-child(" + (index + 1) + ")").addClass("active"));
   $("#images img:nth-child(" + (index + 1) + ")").addClass("active");
}



// log html
var log = function($selector) {
    $selector.each(function() {
        console.log(this);
    });
};
