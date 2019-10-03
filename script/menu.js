/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
/*Cart-mobi*/
function openCart() {
  document.getElementById("cart-mobi-header").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeCart() {
  document.getElementById("cart-mobi-header").style.width = "0";
}
function checkmail() {
	var mail = document.getElementById('email').value;
    if (mail=="") {
        document.getElementById('z-email').innerHTML = "<span>Email address cannot be empty</span>";
        document.getElementById("email").classList.add("is-invalid");
    }
    else{
      document.getElementById('z-email').innerHTML = "";
      document.getElementById("email").classList.remove("is-invalid");
    }
    
}
function checkpass() {
  var pass = document.getElementById('password').value.length;
  if (pass<8){
      document.getElementById('z-password').innerHTML = "<span>Your password must be longer than 8 characters</span>";
      document.getElementById("password").classList.add("is-invalid");
    }
    else{
      document.getElementById('z-password').innerHTML ="";
      document.getElementById("password").classList.remove("is-invalid");
    }
}
function checkpass1() {
  var pass = document.getElementById('password-1').value.length;
  if (pass<8){
      document.getElementById('z-password-1').innerHTML = "<span>Your password must be longer than 8 characters</span>";
      document.getElementById("password-1").classList.add("is-invalid");
    }
    else{
      document.getElementById('z-password-1').innerHTML ="";
      document.getElementById("password-1").classList.remove("is-invalid");
    }
}
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


