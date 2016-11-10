var userId = null;
var username = null;
var loginReturnJSON = [];
var logindiv = document.getElementById('loginButton');
var logoutdiv = document.getElementById('logoutButton');
var registerdiv = document.getElementById('registerButton');
togglelogin();

function login(name,pass){
		var loginRequestArray = {"username":name,"password":pass};
		var loginRequestJSON = JSON.stringify(loginRequestArray);
	logRequest = new XMLHttpRequest();
	var url = "https://project-studies-2.herokuapp.com/login";
	logRequest.open("POST", url, false);
	logRequest.setRequestHeader("Content-type", "application/json");
	logRequest.onreadystatechange = function () {
    if (logRequest.readyState == 4 && logRequest.status == 200) {
        loginReturnJSON = JSON.parse(logRequest.responseText);
    }
	}
logRequest.send(loginRequestJSON);
userId = loginReturnJSON["id"];
username = loginReturnJSON["username"];
localStorage.setItem('username', username);
localStorage.setItem('userId', userId);
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
	regRequest = new XMLHttpRequest();
	var url = "https://project-studies-2.herokuapp.com/register";
	regRequest.open("POST", url, false);
	regRequest.setRequestHeader("Content-type", "application/json");
	regRequest.onreadystatechange = function () {
    if (regRequest.readyState == 4 && regRequest.status == 200) {
        if (regRequest.responseText == "User created successfully!") {
		alert("Registration successful!\nPress OK to automatically login.");
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

function profile ()
{
	userId = localStorage.getItem('userId');
	var xmlhttp = new XMLHttpRequest();
	var url = "https://project-studies-2.herokuapp.com/users";

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
			showProfile(myArr);
		}
	};
	xmlhttp.open("GET", url + "/" + userId, true);
	xmlhttp.send();

	function showProfile(arr) {

		var table = document.getElementById("profile");
			var row = table.insertRow(1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);

			cell1.innerHTML = arr.username;
			cell2.innerHTML = arr.games;
			cell3.innerHTML = arr.wins;
	}
}
