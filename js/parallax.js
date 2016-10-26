

$(function() {
//$('#scene').parallax();	

	//animating the waves
	$(document).ready(function() {
		//waves
        var intId = setInterval(animateImageLeft,1000);
        var intId = setInterval(animateupImageLeft,1000);
        var intId = setInterval(animateImageupRight,1000);
        var intId = setInterval(animateImageRight,1000);
        //.waves
        //fish
        var intId = setInterval(animateupFish,1000);
        var intId = setInterval(animateFish,1000);
    }); 

    function animateImageLeft() {
        $("#wave1").animate({bottom: '-10%'}, 3000, 'swing', 1000);
          }
    function animateupImageLeft() {
       $('#wave1').animate({bottom: '-5%'}, 3000, 'swing',1000 );
      }
    function animateImageRight() {
        $("#wave2").animate({bottom: '-10%'}, 3000, 'swing', 1000);
          }
    function animateImageupRight() {
       $('#wave2').animate({bottom: '-5%'}, 3000, 'swing', 1000);
      }
      //end wave animation
      //fish animation
    function animateFish() {
       $('#fish').animate({bottom: '-5%'}, 3000, 'swing', 1000);
      }
    function animateupFish() {
       $('#fish').animate({bottom: '20%'}, 3000, 'swing', 1000);
      }
});