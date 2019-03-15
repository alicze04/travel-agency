$(document).ready(function () {
  $("#section1-readMore").on("click", function () {
    $("#section1-moreInformation").slideDown();
    $("#section1-readMore").hide();
  })
  $("#section1-readLess").on("click", function () {
    $("#section1-moreInformation").slideUp();
    $("#section1-readMore").show();
  })

});

$(function () {
  var selectedClass = "";
  $(".filter").click(function () {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.05);

    $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);

    }, 300);
  });
});
function searchQuery () {
  document.getElementById("searchForm").style.display.block;
}