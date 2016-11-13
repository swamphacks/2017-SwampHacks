// $(function() {
// //$('#scene').animation();
//
// 	//animating the waves
// 	$(document).ready(function() {
// 		//waves
//         setInterval(animateImageLeft, 1000);
//         setInterval(animateupImageLeft, 1000);
//         setInterval(animateImageRight, 1000);
//         setInterval(animateImageupRight, 1000);
//         floatThatStork();
//         rotateFish();
//         rotateOtherFish();
//         moveGator();
//         swayReeds();
//     });
//     var height = $(window).height();
//
//     function animateImageLeft() {
//         $("#wave1").animate({bottom: '-5%'}, 3000, 'swing', 1000);
//     }
//     function animateupImageLeft() {
//         $('#wave1').animate({bottom: '-1%'}, 3000, 'swing',1000 );
//     }
//     function animateImageRight() {
//         $("#wave2").animate({bottom: '-1%'}, 3000, 'swing', 1000);
//     }
//     function animateImageupRight() {
//         $('#wave2').animate({bottom: '-5%'}, 3000, 'swing', 1000);
//     }
//
//    //float that stork
//     var img = $("#stork"),
//         width = img.get(0).width,
//         screenWidth = $(window).width();
//
//     function floatThatStork() {
//         img.css({"fontSize": 110, "left": -width, "top":"0%"}).animate({
// 						fontSize: 0
// 						// "left": screenWidth,
//             // "top": "-200px"
//         }, {
// 					duration: 2800,
// 					easing: "swing",
// 					step: function(t, fx){
// 	        	var a = t / 57.296;
// 	        	var x = 100 + Math.cos(a) * screenWidth;
// 	        	var y = -200 + Math.sin(a) * 200;
//         		$(this).css({ left: x, top: y });
//     			},
// 					complete: floatThatStork
// 				}).delay(1500);
//     }
//
//     var gator = $("#gator"),
//         gatorWidth = gator.get(0).width,
//         //gatorScreenWidth = $(window).width(),
//         gatorDuration = 8000;
//     function moveGator() {
//         gator.css("left", -gatorWidth).animate({
//             "left": "50%"
//         }, gatorDuration, moveGator).delay(5000);
//     }
//     //rotate da fishes
//     var fish = $('#fishy');
//     function rotateFish() {
//         setTimeout(function () {
//             fish.rotate({
//                 angle: -180,
//                 center: ["50%", "100%"],
//                 animateTo:0,
//                 duration: 1500,
//                 easing: $.easing.easeOutBack,
//                 callback: function() {
//                     rotateFish1();
//                 }
//             });
//         }, 500);
//     }
//
// 		function rotateFish1() {
//         setTimeout(function () {
//             fish.rotate({
//                 angle: 0,
//                 center: ["50%", "100%"],
//                 animateTo:180,
//                 duration: 1500,
//                 easing: $.easing.easeOutBack,
//                 callback: function() {
//                     rotateFish();
//                 }
//             });
//         }, 0);
//     }
//
//     var fish2 = $('#fishy2');
//     function rotateOtherFish() {
//         setTimeout(function () {
//             fish2.rotate({
//                 angle: 180,
//                 center: ["50%", "100%"],
//                 animateTo: 0,
//                 duration: 1500,
//                 easing: $.easing.easeOutBack,
//                 callback: function() {
//                     rotateOtherFish1();
//                 }
//             });
//         }, 1000);
//     }
//
// 		function rotateOtherFish1() {
//         setTimeout(function () {
//             fish2.rotate({
//                 angle: 0,
//                 center: ["50%", "100%"],
//                 animateTo: -180,
//                 duration: 1500,
//                 easing: $.easing.easeOutBack,
//                 callback: function() {
//                     rotateOtherFish();
//                 }
//             });
//         }, 0);
//     }
//
//     var reeds = $('#reeds');
//     function swayReeds() {
//         reeds.rotate({
//             angle: 0,
//             center: ["50%", "100%"],
//            animateTo: -10,
//             duration: 2000,
//             easing: $.easing.easeOutBack,
//             callback: function () {
//                 swayReeds1();
//             }
//         });
//     }
//     function swayReeds1() {
//         reeds.rotate({
//             angle: -10,
//             center: ["50%", "100%"],
//             animateTo: 0,
//             duration: 2000,
//             easing: $.easing.easeOutBack,
//             callback: function () {
//                 swayReeds();
//             }
//         });
//     }
//
// });
