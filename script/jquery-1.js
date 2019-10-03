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
    $('#click-login').click(function(){
          $('.wrap-login').removeClass('d-flex');
          $('.wrap-login').addClass('d-none');
          $('.customer').removeClass('d-none');
          $('.customer').addClass('d-block');
    })
    $('#log-out-1').click(function(){
          $('.wrap-login').removeClass('d-none');
          $('.wrap-login').addClass('d-flex');
          $('.customer').removeClass('d-block');
          $('.customer').addClass('d-none');
    })

    $('body').on("click", ".dropdown-menu", function (e) {
        $(this).parent().is(".show") && e.stopPropagation();
    });

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
            $('#show_hide_password i').addClass( "fa-eye" );
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
        }
        else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye" );
            $('#show_hide_password i').addClass( "fa-eye-slash" );
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
    return jQuery(element).css(prop, val);
};
})
