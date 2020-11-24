$(document).ready(function() {

   $("#left").click(function() {
      prevImg();
   });

   $("#right").click(function() {
      nextImg();
   });
});


function prevImg() {
   // move to previous image
   var act = $("img.active");
   act.removeClass("active");
   // first-last check
   if (act.hasClass("first")) {
      $("img.last").addClass("active");
   } else {
      act.prev().addClass("active");
   }
   // var act = $("img.active");
   // act.animate({width:'toggle'},4000);
   // if (act.hasClass("first")) {
   //    $("img.last").addClass("active");
   // } else {
   //    var prev = act.prev();
   //    prev.addClass("active");
   //    act.animate({width:'toggle'},4000);
   // }
}

function nextImg() {
   // move to next image
   var act = $("img.active");
   act.removeClass("active");
   // first-last check
   if (act.hasClass("last")) {
      $("img.first").addClass("active");
   } else {
      act.next().addClass("active");
   }
}




// var log = function($selector) {
//     $selector.each(function() {
//         console.log(this);
//     });
// };
