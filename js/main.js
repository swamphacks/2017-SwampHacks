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
  $(".navbar").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > vh) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });
  });
});

$(function(){
  var vh = $(window).height() - 200;
    $(window).scroll(function () {
      if ($(this).scrollTop() > vh) {
        $('#mlh-trust-badge').fadeOut();
      } else {
        $('#mlh-trust-badge').fadeIn();
      }
    });
});

//typeit
$('#typed').typeIt({
    strings: ['University of Florida | January 20-22, 2017'],
    speed: 100,
    lifeLike: true, 
    autoStart: true,
});       

// google analytics
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-85409295-1', 'auto');  
    ga('send', 'pageview');