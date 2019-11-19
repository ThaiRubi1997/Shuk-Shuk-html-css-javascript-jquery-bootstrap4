$(function(){
	$('#btn-step1,#li-step-2').click(function () {
      	$('#item-step-2').addClass('active');
      	$('#item-step-1,#item-step-3').removeClass('active');
      	$('#tab-1,#tab-3').removeClass('active');
      	$('#tab-2').addClass('active');
      	$("#tab-2").attr("aria-expanded","true");
        $("#tab-1,#tab-3").attr("aria-expanded","flase");      	
    });
    $('#btn-step2,#li-step-3').click(function () {
      	$('#item-step-3').addClass('active');
      	$('#item-step-1,#item-step-2').removeClass('active');
      	$('#tab-1,#tab-2').removeClass('active');
      	$('#tab-3').addClass('active');
      	$("#tab-3").attr("aria-expanded","true");
        $("#tab-1,#tab-2").attr("aria-expanded","flase");      	
    });
    $('#li-step-1').click(function () {
      	$('#item-step-1').addClass('active');
      	$('#item-step-3,#item-step-2').removeClass('active');
      	$('#tab-3,#tab-2').removeClass('active');
      	$('#tab-1').addClass('active');
      	$("#tab-1").attr("aria-expanded","true");
        $("#tab-2,#tab-3").attr("aria-expanded","flase");      	
    })
})