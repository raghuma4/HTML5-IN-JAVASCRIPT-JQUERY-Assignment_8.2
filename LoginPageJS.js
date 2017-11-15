window.onload = function () {
	
	// function to validate username and password
	this.validateUser = function()
	{
		var emailid = document.getElementById('emailid').value;
		var loginpwd = document.getElementById('loginpwd').value;

		// get the username and password values from window.localStorage.getItem() 
		// as we stored username in the form of emailidvalue + "_uname"
		// hence we use same key
		var pwdvalue = window.localStorage.getItem(emailid + "_pwd");	
		var unamevalue = window.localStorage.getItem(emailid + "_uname");	

		var errormessage = document.getElementById('error') ;		 

		// if input password and stored password matches then open WelcomePage by passing username value
		 if (pwdvalue === loginpwd) {
		 		window.location.href = 'WelcomePage.html' + '#' + unamevalue;
		 }
		 else
		 	errormessage.innerHTML = "Email and password do not match";
	}

	 
}