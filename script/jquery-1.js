$(function()
{
    $('.back-to-login').click(function(){
    	$('.modal-backdrop').removeClass('show')
    	$('.moda-register').removeClass('show')
    	$('.modal-login').addClass('show');
    })
    $('.back-register').click(function(){
    	$('.modal-backdrop').removeClass('show')
    	$('.modal-login').removeClass('show');
    	$('.moda-register').addClass('show');
     })

    $('.on-off').click(function(){
    		if ($('.on-off').hasClass("on-show"))
    			{$('.on-off').removeClass('on-show');}
     		else{
     			$('.on-off').addClass('on-show');
     		}
    })
    $('.item-step').click(function(){
        if ($('.item-step').hasClass("step-active"))
          {$('.item-step').removeClass('step-active');}
           $(this).addClass('step-active');   
    })
    $('#btn-step1,#item-step-2').click(function () {
        $('#item-step-2').addClass('step-active');
        $('#item-step-1,#item-step-3').removeClass('step-active');
        $('#step1,#step3').removeClass('active');
        $('#step2').addClass('active');
    })
     $('#btn-step2,#btn-mobi-step2').click(function () {
        $('#item-step-3').addClass('step-active');
        $('#item-step-1,#item-step-2').removeClass('step-active');
        $('#step1,#step2').removeClass('active');
        $('#step3').addClass('active');
    })
     $('#close-step,#change-address').click(function () {
        $('#item-step-1').addClass('step-active');
        $('#item-step-3,#item-step-2').removeClass('step-active');
        $('#step3,#step2').removeClass('active');
        $('#step1').addClass('active');
        $('#btn-mobi-step2').removeClass('active');
    })
    $('#click-login,.btn-login-mobi').click(function(){
          $('.wrap-login').removeClass('d-flex');
          $('.wrap-login').addClass('d-none');
          $('.customer').removeClass('d-none');
          $('.customer').addClass('d-block');        
          $('.wrap-login-mobi').addClass('d-none');
          $('.account-mobi').removeClass('d-none');
    })
    $('#log-out-1,.log-out-mobi').click(function(){
          $('.wrap-login').removeClass('d-none');
          $('.wrap-login').addClass('d-flex');
          $('.customer').removeClass('d-block');
          $('.customer').addClass('d-none');
          $('.account-mobi').addClass('d-none');
          $('.wrap-login-mobi').removeClass('d-none');
    })

    $('body').on("click", ".detail-cart", function (e) {
        $(this).parent().is(".show") && e.stopPropagation();
    });

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
     $(".button-1").on("click", function() {
        var $button = $(this);
        var $parent = $button.parent(); 
        var oldValue = $parent.find('.input').val();         
        var newVal = parseFloat(oldValue) - 1;
        if(newVal<=1){newVal=1}    
        $parent.find('.input').val(newVal);
    });

    $(".button-2").on("click", function() {
        var $button = $(this);
        var $parent = $button.parent(); 
        var oldValue = $parent.find('.input').val();         
        var newVal = parseFloat(oldValue) + 1;   
    $parent.find('.input').val(newVal);
    });
    $("#show_hide_password i").on('click', function() {
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }
        else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
      $(document).ready(function (){
           $("#next_nav").on("click", function() {
              var $left = $("#nav").css('margin-left');
              var $newval = (parseInt($left) - 263);
              if ($newval <= -526) {
                $newval=-526;
              }
              $newVal=$newval+"px";
              $("#nav").css ({
                'margin-left' : $newval
              });
           });
           $("#pre_nav").on("click", function() {
              var $left = $("#nav").css('margin-left');
              var $newval = (parseInt($left) + 263);
              if ($newval>0) {
                $newval=0;
              }
              $newVal=$newval+"px";
              $("#nav").css ({
                'margin-left' : $newval
              });
           });
       });
      $(document).ready(function (){
            $("#next_nav-1").on("click", function() {
                var $left = $("#nav-1").css('margin-left');
                var $newval = (parseInt($left) - 263);
                if ($newval <= -789) {
                $newval=-789;
                }
                $newVal=$newval+"px";
                 $("#nav-1").css ({
                'margin-left' : $newval
                 });
            });
            $("#pre_nav-1").on("click", function() {
                var $left   = $("#nav-1").css('margin-left');
                var $newval = (parseInt($left) + 263);
                if ($newval>0) {
                $newval     =0;
                }
                $newVal     =$newval+"px";
                $("#nav-1").css ({
                'margin-left' : $newval
                });
            });
        })
      $(function () {
                    var projects = [{
                    value: "Coffee Bean",
                    label: "Coffee Bean",
                    desc: "Product",
                          }, {
                          value: "Coffee Grind",
                          label: "Coffee Grind",
                          desc: "Product",
                          
                      }, {
                          value: "Coffee Windmill",
                          label: "Coffee Windmill",
                          desc: "Store",
                      }];

                      $("#project").autocomplete({
                          minLength: 0,
                          source: projects,
                          focus: function (event, ui) {
                              $("#project").val(ui.item.label);
                              return false;
                          },
                          select: function (event, ui) {
                              $("#project").val(ui.item.label);
                              $("#project-id").val(ui.item.value);
                              $("#project-description").html(ui.item.desc);
                              $("#project-icon").attr("src", "images/" + ui.item.icon);
                              return false;
                          }
                      })
                          .data("autocomplete")._renderItem = function (ul, item) {
                          return $("<li>")
                              .data("item.autocomplete", item)
                              .append("<a>"+ "<p>"+ item.label + "</p>" +"<span>"+ item.desc + "</sapn>" + "</a>")
                              .appendTo(ul);
                      };
                  });
      jQuery.curCSS = function(element, prop, val) {
};
})
