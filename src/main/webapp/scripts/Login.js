function signIn() {
	//Grab the form by its name so you can grab all of the input values
	//window.location="http://localhost:8080/project-1/employeeHome.html";
	var loginForm = document.loginForm;
	let username = loginForm.username.value;
	let password = loginForm.password.value;
	let loginTemplate = {
			username: username,
			password: password
	};
	//Create the Http Request object
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200) {
			// The request was sent successfully and the response status is 200 (OK)
			sessionStorage.setItem('currentUser', this.responseText);
			//Store the response object in session if need be
			window.location = "http://localhost:8080/project-1/employeeHome.html";
			//change the web page 
		} else if(this.readyState === 4 && this.status === 204){
			alert('Failed to log in');
		}
	}
	// Send the Request to the correct Servlet which is mapped with a url-pattern in web.xml
	xhr.open("POST", "http://localhost:8080/project-1/loginverify");
	// If the request needs to send information, use the JSON.stringify method 
	xhr.send(JSON.stringify(loginTemplate));
	
	
	
//  const username = document.getElementById('username-input').value;
//  const password = document.getElementById('password-input').value;
//
//  const credential = { username, password };
//
//  fetch('http://localhost:8080/users/login', {
//    body: JSON.stringify(credential),
//    headers: {
//      'content-type': 'application/json'
//    },
//    credentials: 'include',
//    method: 'POST'
//  })
//    .then(resp => {
//      console.log(resp.status)
//      if (resp.status === 401) {
//        throw 'Invalid Credentials';
//      }
//      if (resp.status === 200) {
//        console.log('in resp === 200')
//        return resp.json();
//      }
//      throw 'Unable to login at this time, please try again later';
//    })
//    .then(data => {
//      window.location = '../home/index.html';
//    })
//    .catch(err => {
//      document.getElementById('error-message').innerText = err;
//    })
}