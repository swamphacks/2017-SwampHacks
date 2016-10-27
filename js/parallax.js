$(function() {
//$('#scene').parallax();	

	//animating the waves
	$(document).ready(function() {
		//waves
		var intId = setInterval(animateImageLeft,1000);
		var intId = setInterval(animateupImageLeft,1000);
		var intId = setInterval(animateImageupRight,1000);
		var intId = setInterval(animateImageRight,1000);
    var intId = setInterval(animateStump,1000);    
    var intId = setInterval(animateStumpUp,1000);
    var intId = setInterval(animateGator,1000);    
    var intId = setInterval(animateGatorUp,1000);
    //float that stork
    $('#stork').each(function() {
      $(this).jqFloat({
        width:Math.floor(Math.random()*10)*10,
        height:10,
        speed:Math.floor(Math.random()*10)*100 + 500
    });
  }); 


        //.waves
        //fish
        //var intId = setInterval(animateupFish,1000);
        //var intId = setInterval(animateFish,1000);
        moveit();

    }); 

	function animateImageLeft() {
		$("#wave1").animate({bottom: '-30%'}, 3000, 'swing', 1000);
	}
	function animateupImageLeft() {
		$('#wave1').animate({bottom: '-25%'}, 3000, 'swing',1000 );
	}
	function animateImageRight() {
		$("#wave2").animate({bottom: '-30%'}, 3000, 'swing', 1000);
	}
	function animateImageupRight() {
		$('#wave2').animate({bottom: '-25%'}, 3000, 'swing', 1000);
	}
  function animateStump() {
    $('#stump').animate({bottom: '15%'}, 3000, 'swing', 1000);
  }
  function animateStumpUp() {
    $('#stump').animate({bottom: '20%'}, 3000, 'swing', 1000);

  }
  function animateGator() {
    $('#gator').animate({bottom: '14%'}, 3000, 'swing', 1000);
  }
  function animateGatorUp() {
    $('#gator').animate({bottom: '9%'}, 3000, 'swing', 1000);

  }   //end wave animation
      //fish animation
      /**function animateFish() {
      	$('#fish').animate({bottom: '-7%'}, 3000, 'swing', 1000);
      }
      function animateupFish() {
      	$('#fish').animate({bottom: '20%'}, 3000, 'swing', 1000);
      }**/
      var t = 0;
      function moveit() {
      	t += 0.05;

      	var r = 150;
      	var xcenter = 425;
      	var ycenter = 425;
      	var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
      	var newTop = Math.floor(ycenter + (r * Math.sin(t)));
      	$('#fishy').animate({
      		top: newTop,
      		left: newLeft,
      	}, 75, function() {
      		moveit();
      	});
      }
  });