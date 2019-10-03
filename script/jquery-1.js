$(function()
{
// 	$('li.cart').click(function()
// 	{
// 		if ($('.detail-cart').hasClass("show"))
// 			{$('.detail-cart').removeClass('show');}
// 		else{
// 			$('.detail-cart').addClass('show');
// 		}
		
// 	})
// 	$('not-show').click(function(e){
//    event.stopPropagation();
// })
// $('.back-to-login').click(function(){
// 	$('.moda-register').removeClass('show')

// })
// $('.back-to-login').click(function(){
// 	$('.moda-register').removeClass('show')

// })
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
          var $left = $("#nav-1").css('margin-left');
          var $newval = (parseInt($left) + 263);
          if ($newval>0) {
            $newval=0;
          }
          $newVal=$newval+"px";
          $("#nav-1").css ({
            'margin-left' : $newval
          });
       });
   });
}
)

