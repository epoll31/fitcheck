

const tryLogin = () => {
	let username = document.getElementById('username');
	let password = document.getElementById('password');
	if (username && username.value && password && password.value) {
		let user = fcdb.login(username.value, password.value);
	
		if (user) {
			location.href = './profile.html';
		}}
};




