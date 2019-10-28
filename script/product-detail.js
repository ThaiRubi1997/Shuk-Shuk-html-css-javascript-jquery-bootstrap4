function openfileDialog() {
    $("#fileLoader").click();
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
$(function () {
 
  $("#rateYo").rateYo({
    rating: 4.5
  });
 $('#click-Overview').click(function() {
 	$('#Reviews').removeClass('active');
 })
});