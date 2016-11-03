var userId = null;
var username = null;
var loginReturnJSON = [];
var logindiv = document.getElementById('loginbutton');
var logoutdiv = document.getElementById('logoutbutton');
var registerdiv = document.getElementById('registerbutton');
togglelogin();

function login(name,pass){
		var loginRequestArray = {"username":name,"password":pass};
		var loginRequestJSON = JSON.stringify(loginRequestArray);
	console.log(loginRequestJSON);
	logRequest = new XMLHttpRequest();
	var url = "http://project-studies-2.herokuapp.com/login";
	logRequest.open("POST", url, false);
	logRequest.setRequestHeader("Content-type", "application/json");
	logRequest.onreadystatechange = function () { 
	console.log(logRequest.readyState);
	console.log(logRequest.status);
    if (logRequest.readyState == 4 && logRequest.status == 200) {
        loginReturnJSON = JSON.parse(logRequest.responseText);
		console.log("beer");
    }
	}
logRequest.send(loginRequestJSON);
console.log(loginReturnJSON);
userId = loginReturnJSON["id"];
username = loginReturnJSON["username"];
localStorage.setItem('username', username);
localStorage.setItem('userId', userId);
console.log(userId);
console.log(username); 
console.log(localStorage.getItem('username'));
window.location.href = "main.html";
}

function logout(){
userId = null;
username = null;
loginReturnJSON = [];
localStorage.removeItem('username');
localStorage.removeItem('userid');
togglelogin();

}

function togglelogin (){
	if (localStorage.getItem('username') == null) {
		logindiv.style.display = 'block';
		registerdiv.style.display = 'block';
logoutdiv.style.display = 'none';
loginline.style.display = 'none';
	}
	else {
		logindiv.style.display = 'none';
		registerdiv.style.display = 'none';
logoutdiv.style.display = 'block';
loginline.style.display = 'initial';

	}
}

function gotologin () {
	window.location.href = "index.html";
}

function register (name, pass, conf_pass) {
	var registerRequestArray = {"username":name,"password":pass};
		var registerRequestJSON = JSON.stringify(registerRequestArray);
		if (pass == conf_pass){
	console.log(registerRequestJSON);
	regRequest = new XMLHttpRequest();
	var url = "http://project-studies-2.herokuapp.com/register";
	regRequest.open("POST", url, false);
	regRequest.setRequestHeader("Content-type", "application/json");
	regRequest.onreadystatechange = function () { 
	console.log(regRequest.readyState);
	console.log(regRequest.status);
    if (regRequest.readyState == 4 && regRequest.status == 200) {
        if (regRequest.responseText == "User created successfully!") {
		alert("Registration successful!\nPress OK to automatically login.");
		console.log("beer");
		login(name,pass);}
		else if (regRequest.responseText == "User already exists!"){
			alert("User already exist ! Please try a different Username");
		}
    } else {
		alert("Registration failed, sorry!")
	}
	}
regRequest.send(registerRequestJSON);
		}
		else {alert("Password confirmation is different.\nPlease try again!");}

}

function gotoregister () {
	window.location.href = "register.html";
}
