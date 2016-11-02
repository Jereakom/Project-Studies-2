var userId = null;
var username = null;
var loginReturnJSON = [];

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
console.log(userId);
console.log(username); 
window.location.href = "main.html";

	
}