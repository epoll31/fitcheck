
const tryLogin = () => {
	let username = document.getElementByID('username');
	let password = document.getElementByID('password');

	console.log(fcs.login(username.value, password.value));	
};


