function openfileDialog() {
    $("#fileLoader").click();
}
$(function(){
   $('#datepicker').datepicker({
            uiLibrary: 'bootstrap4'
    });
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
    $('#li-my-oder').on({
      'click': function() {
          $('#icon-order').attr('src','Img/order-black.svg');
          $('#my-oder').addClass('active');
          $('#my-oder-detail').removeClass('active');
          $('#view-detail').removeClass('active');
          $('#home').removeClass('active');
          $("#my-oder").attr("aria-expanded","true");
          $("#home").attr("aria-expanded","flase");
          $("#my-oder-detail").attr("aria-expanded","flase");
      }
  });
    $('#back-to').on({
      'click': function() {
          $('#my-oder').addClass('active');
          $('#my-oder-detail').removeClass('active');
          $('.view-detail').removeClass('active');
          $("#my-oder").attr("aria-expanded","true");
          $("#my-oder-detail").attr("aria-expanded","flase");
      }
  });
    $('.view-detail').on({
      'click': function() {
          $('#my-oder').removeClass('active');
          $('#my-oder-detail').addClass('active');
          $(this).addClass('active');
          $("#my-oder").attr("aria-expanded","flase");
          $("#my-oder-detail").attr("aria-expanded","true");
      }
  });
  $('#account-tab').on({
      'click': function() {
          $('#icon-order').attr('src','Img/order-gray.svg');
          $('#home').addClass('active');
          $('#my-oder-detail').removeClass('active');          
          $('#my-oder').removeClass('active');
          $('#view-detail').removeClass('active');
          $("#home").attr("aria-expanded","true");
          $("#my-oder").attr("aria-expanded","flase");
          $("#my-oder-detail").attr("aria-expanded","flase");
      }
  });
 })