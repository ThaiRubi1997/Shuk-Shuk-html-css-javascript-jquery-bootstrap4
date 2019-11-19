$(function(){
	$('#check-1').click(function () {
		$('#check-2').removeClass('checked')
        $('#check-1').addClass('checked');
    })
    $('#check-2').click(function () {
		$('#check-1').removeClass('checked')
        $('#check-2').addClass('checked');
    })
})