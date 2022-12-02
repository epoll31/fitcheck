//import { Low } from 'lowdb'
//import { JSONFile } from 'lowdb/node
//import '/utils/fcdbAccess.js';

function signUpSubmit() {
	let signUpForm = document.getElementById("signUpForm");
	if (signUpForm) {
			alert(signUpForm.checkValidity());
		if (!signUpForm.checkValidity())
		{
		}
		else {
			let username = document.getElementById('username');
			let password = document.getElementById('password');
			let phone		 = document.getElementById('phone');
			let email		 = document.getElementById('email');
	
			fcdb.addUser(username.value, password.value, phone.value, email.value);
	
			console.log(fcdb.users);
			fcdb.push();
		}
	}

	location.href = '../pages/login.html';
};

