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
   var act = $(".active");
   log(act);
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




var log = function($selector) {
    $selector.each(function() {
        console.log(this);
    });
};
