//ugh

//group
$(function() {
  $(".group").hover(
    function() {
      $(this).attr("src", "img/gifs/group.gif");
    },
    function() {
      $(this).attr("src", "img/gifs/stills/group.jpg");
    }
  );

  //austin
  $(".austin").hover(
    function() {
      $(this).attr("src", "img/gifs/austin.gif");
    },
    function() {
      $(this).attr("src", "img/gifs/stills/austin.jpg");
    }
  );
});
