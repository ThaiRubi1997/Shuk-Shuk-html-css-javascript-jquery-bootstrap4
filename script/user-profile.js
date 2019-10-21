function openfileDialog() {
    $("#fileLoader").click();
}
$(function(){
	$('#order').click(function(){
          $('#track-oder').addClass('d-none');
          $('#check-circle').removeClass('d-none');
    })
    $('#edit-accout').click(function(){
          $('#page-accout').addClass('d-none');
          $('#tab-mobi').removeClass('d-sm-none');
          $('#header-1').addClass('d-none');
          $('#header-2').removeClass('d-none');
    })
    $('#back').click(function(){
          $('#page-accout').removeClass('d-none');
          $('#tab-mobi').addClass('d-sm-none');
          $('#header-1').removeClass('d-none');
          $('#header-2').addClass('d-none');
    })
    $('#back-to').click(function(){
        $('#my-oder').addClass('active');
        $('#my-oder-detail').removeClass('active');
        $('#view-detail').removeClass('active');
    })
    $('#li-my-oder').on({
	    'click': function() {
	       	$('#icon-order').attr('src','Img/order-black.svg');
    	}
	});
	$('#account-tab').on({
	    'click': function() {
	       	$('#icon-order').attr('src','Img/order-gray.svg');
    	}
	});
 })