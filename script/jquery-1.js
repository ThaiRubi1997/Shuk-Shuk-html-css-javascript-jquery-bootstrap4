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
$('body').on("click", ".dropdown-menu", function (e) {
    $(this).parent().is(".show") && e.stopPropagation();
});
}
)