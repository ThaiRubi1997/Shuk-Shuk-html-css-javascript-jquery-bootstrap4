$(function(){
	$(document).ready(function() {
		$("#form-step1").validate({
            rules: {
                name: "required",
                phone: {
                    required: true,
                    minlength: 5
                },
                address: {
                    required: true,
                    minlength: 2
                },
            },
            messages: {                        
                name: "Full name cannot be empty",
                phone:"Phone Number must be longer than 5 characters",
                address: {
                    required: "Address cannot be empty",
                    minlength: "Address must be longer than 2 characters"
                },
                phone: {
                    required: "Number Phone cannot be empty ",
                    minlength: "Phone Number must be longer than 5 characters"
                },
            }
        });
        $("#show-credit-card").validate({
            rules: {
                name: "required",
                visa: "required",
                
            },
            messages: {                        
                name: "Name cannot be empty",
                visa: "Cannot be empty"
            }
        });
	})
  $('#btn-step1-mobi').click(function() {
        $("#form-step1").valid(); //validate form 1
    });
	$('#close-step,#change-address').click(function () {
        $('#item-step-1').addClass('step-active');
        $('#item-step-3,#item-step-2').removeClass('step-active');
        $('#step3,#step2').removeClass('active');
        $('#step1').addClass('active');
        $('#btn-mobi-step2').removeClass('active');
    })
    $('#credit-card').click(function(){
        if ($('#credit-card button').attr("title")=="Credit Cards")
          {$('#show-credit-card').removeClass('d-none');
           $('#show-btn-payment').removeClass('d-none');
           $('#continue-disabled').addClass('d-none');
           $('#continue-disabled-mobi').addClass('d-none')}
        else{
          $('#show-credit-card').addClass('d-none');
          $('#continue-disabled').removeClass('d-none');
          $('#continue-disabled-mobi').removeClass('d-none');
          $('#show-btn-payment').addClass('d-none')
        }
    })
    $(document).click( function ( e ){
        if($('#form-step1 #name').hasClass('valid')&&$('#form-step1 #phone')
            .hasClass('valid')&&$('#form-step1 #address').hasClass('valid')){
                $("#item-step-2 a").attr("data-toggle", "tab");
                $("#btn-step1").attr("data-toggle", "tab");
                $("#btn-step1-mobi").attr("data-toggle", "tab");       
                $("#btn-step1").removeClass('btn-disabled');
                $("#btn-step1").addClass('primary');
                $('#btn-step1,#item-step-2,#btn-step1-mobi').click(function () {
                    $('#item-step-2').addClass('step-active');
                    $('#item-step-1,#item-step-3').removeClass('step-active');
                    $('#step1,#step3').removeClass('active');
                    $('#step2').addClass('active');          
                    })
                $('#item-step-1').click(function (){
                $('#item-step-1').addClass('step-active');
                $('#item-step-3,#item-step-2').removeClass('step-active');
            })
        }
    });
     $(document).click( function ( e ){
        if ($('#show-credit-card #name2').hasClass('valid')&&$('#show-credit-card #visa').hasClass('valid')) {
        $("#item-step-3 a").attr("data-toggle", "tab");
        $("#btn-step2").attr("data-toggle", "tab");
        $("#btn-mobi-step2").attr("data-toggle", "tab");
        $('#btn-step2,#btn-mobi-step2,#item-step-3').click(function () {
        $('#item-step-3').addClass('step-active');
        $('#item-step-1,#item-step-2').removeClass('step-active');
        $('#step1,#step2').removeClass('active');
        $('#step3').addClass('active');
        
    	})
        }
      });
})