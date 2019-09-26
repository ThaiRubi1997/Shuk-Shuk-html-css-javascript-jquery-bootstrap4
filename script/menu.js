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
function check() {
	var mail = document.getElementById('email').value;
	var pass = document.getElementById('password').value.length;
    if (mail=="") {
        document.getElementById('z-email').innerHTML = "<span>Email address cannot be empty</span>";
        document.getElementById("email").classList.add("is-invalid");
    }
    if (pass<8){
    	document.getElementById('z-password').innerHTML = "<span>Your password must be longer than 8 characters</span>";
        document.getElementById("password").classList.add("is-invalid");
    }
}


