function openfileDialog() {
    $("#fileLoader").click();
}
$(function(){
   $('#datepicker').datepicker({
            uiLibrary: 'bootstrap4'
    });
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
        $('#home').removeClass('active');
    })
    $('#view-detail').click(function(){
        $('#my-oder-detail').addClass('active');
        $('#my-oder-detail').removeClass('fade');
        $('#my-oder').removeClass('active');
        $('#view-detail').addClass('active');
        $('#home').removeClass('active');
    })
    $('#li-my-oder').on({
	    'click': function() {
	       	$('#icon-order').attr('src','Img/order-black.svg');
          $('#my-oder').addClass('active');
          $('#my-oder-detail').removeClass('active');
          $('#view-detail').removeClass('active');
          $('#home').removeClass('active');
    	}
	});
	$('#account-tab').on({
	    'click': function() {
	       	$('#icon-order').attr('src','Img/order-gray.svg');
          $('#home').addClass('active');
          $('#my-oder-detail').removeClass('active');          
          $('#my-oder').removeClass('active');
          $('#view-detail').removeClass('active');

    	}
	});
 })