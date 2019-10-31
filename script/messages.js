function openfileDialog() {
    $("#fileLoader").click();
}
$(function(){
	$(".item-chat").on("click", function() {
		$('.select-message').addClass('d-none')
      	$(this).find("p.color-primary").removeClass('color-primary');
      	$(this).find("p.color-black").removeClass('color-black');
      	$(this).find(".dot-red").removeClass('d-block');
      	$(this).find(".dot-red").addClass('d-none');

     
   	});
})