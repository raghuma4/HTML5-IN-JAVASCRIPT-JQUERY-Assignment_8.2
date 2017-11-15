window.onload = function() {
	
	// function to create user account details in local storage
	this.createUser = function() {

		var uname = document.getElementById('username').value; 
		var email = document.getElementById('emailid').value;
		var pwd = document.getElementById('pwd').value;
				 
		// store password and username values for each user in the localStorage
		// Create unamekey in the form of email + "_uname" and store username value under it
		// Create pwdkey in the form of email + "_pwd" and store password value under it
		var pwdkey = email + "_pwd";
		var unamekey = email + "_uname";

		window.localStorage.setItem(unamekey, uname);
		window.localStorage.setItem(pwdkey, pwd);

		// Naviagate to Welcome page by passing username value so that the value can be displaye 
		// on the load of welcome page
		window.location.href = 'WelcomePage.html' + '#' + uname;

		 
	}
}