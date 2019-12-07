$(function(){
	$('.li-tab').click(function () {
		$('.li-tab').removeClass('active');
		$(this).addClass('active');
    })
    $('#check-2').click(function () {
		if ($('#input-1').is(":checked")) {
			$('#input-1').removeAttr("checked");
		}
	});
	$('.viewdetails').click(function(){
		var opent = $(this).parent().parent().parent().next();
		opent.removeClass('d-none');
		$(this).addClass('d-none');
	})
	$('.close-details').click(function(){
		var close = $(this).parent().parent().prev().children().next().next().children().next().children().next();
		close.removeClass('d-none');
		$(this).parent().parent().addClass('d-none');
	})
})