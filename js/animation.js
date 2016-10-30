$(function() {
//$('#scene').animation();

	//animating the waves
	$(document).ready(function() {
		//waves
		var intId = setInterval(animateImageLeft,1000);
		var intId = setInterval(animateupImageLeft,1000);
		var intId = setInterval(animateImageupRight,1000);
		var intId = setInterval(animateImageRight,1000);

        floatThatStork();
        rotateFish();
        rotateOtherFish();
        moveGator();
    });

	function animateImageLeft() {
		$("#wave1").animate({bottom: '-28%'}, 3000, 'swing', 1000);
	}
	function animateupImageLeft() {
		$('#wave1').animate({bottom: '-25%'}, 3000, 'swing',1000 );
	}
	function animateImageRight() {
		$("#wave2").animate({bottom: '-28%'}, 3000, 'swing', 1000);
	}
	function animateImageupRight() {
		$('#wave2').animate({bottom: '-25%'}, 3000, 'swing', 1000);
	}


   //float that stork
    var img = $("#stork"),
        width = img.get(0).width,
        screenWidth = $(window).width(),
        duration = 2000;

    function floatThatStork() {
        img.css({"left": -width, "top":"0%"}).animate({
            "left": screenWidth,
            "top": "-200px"
        }, duration, floatThatStork).delay(2000);
    }

    var gator = $("#gator"),
        gatorWidth = gator.get(0).width,
        //gatorScreenWidth = $(window).width(),
        gatorDuration = 8000;
    function moveGator() {
        gator.css("left", -gatorWidth).animate({
            "left": "50%"
        }, gatorDuration, moveGator).delay(5000);
    }
    //rotate da fishes
    var fish = $('#fishy');
    function rotateFish() {
        setTimeout(function () {
            fish.rotate({
                angle: -180,
                center: ["50%", "100%"],
                animateTo:180,
                duration: 3000,
                easing: $.easing.easeInQuart,
                callback: function() {
                    rotateFish();
                }
            });
        }, 500);
    }
    var fish2 = $('#fishy2');
    function rotateOtherFish() {
        setTimeout(function () {
            fish2.rotate({
                angle: 180,
                center: ["50%", "100%"],
                animateTo:-180,
                duration: 3000,
                easing: $.easing.easeInQuart,
                callback: function() {
                    rotateOtherFish();
                }
            });
        }, 1000);
    }

});