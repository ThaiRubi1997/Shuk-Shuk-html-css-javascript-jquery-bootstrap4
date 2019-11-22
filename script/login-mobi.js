
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
$(function(){
  $(document).ready(function() {
     $('#logins').validate({
    rules: {
       email: "required",
        password: "required",
    },
     messages: {
        email: "Cannot be empty",
        password: "Cannot be empty",
    }
   });
      $('#click-login').click(function() {
        $("#logins").valid(); //validate form 1
    });
      $('#form-register').validate({
    rules: {
       firstname: "required",
        lastname: "required",
        email: "required",
        password: "required",
        
    },
     messages: {
        firstname: "Cannot be empty",
        lastname: "Cannot be empty",
        email: "Cannot be empty",
        password: "Cannot be empty",
        
    }
   });
      $('#click-register').click(function() {
        $("#form-register").valid(); //validate form 1
    });
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
})