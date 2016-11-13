$(document).ready(function () {

    //$("#scene").parallax();
    //change the  background based on the time of day
    var date = new Date();
    var hrs = date.getHours();
    console.log(hrs);
    var title = $("#title");
    if (hrs >= 19 || hrs < 6) {
        title.addClass("night");
    } else if(hrs > 16 && hrs < 19) {
        title.addClass("sunset");
    } else if(hrs >= 6 && hrs < 9) {
        title.addClass("sunrise");
    }   else {
        title.addClass("day");
    }

    $('img.logo').fadeIn(1000).removeClass('.logo');
    $('h2.name').fadeIn(2000).removeClass('.name');
    $('h4.date').fadeIn(3000).removeClass('.date');
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(function(){
  // Prevent elements from resizing immediately upon page load (by removing "preload" class from body upon page load)
  $("body").removeClass("preload");
  // Show/hide the menu bar based on scrolling position
  var vh = $(window).height() - 200;
  // $(".navbar").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > vh) {
        // $('.navbar').fadeIn();
        $('nav').removeClass('nav-top');
      } else {
        // $('.navbar').fadeOut();
        $('nav').addClass('nav-top');
      }
    });
  });
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {

    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

//typeit
/**$('#typed').typeIt({
    strings: ['University of Florida | January 20-22, 2017'],
    speed: 100,
    lifeLike: true,
    autoStart: true,
});**/

// google analytics
 /**(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-85409295-1', 'auto');
    ga('send', 'pageview');**/
