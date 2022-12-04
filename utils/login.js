
const users = [ {
	username: 'edog',
	password: 'edog',
	phone: '',
	email: ''
} ];

const login = () => {
	const username = document.getElementById('username');
	const password = document.getElementById('password');
	const user = users.find(user => 
		user.username === username.value &&
		user.password === password.value);
	console.log(user);
	if (user) {
		console.log(JSON.stringify(user));
		window.localStorage.setItem('activeUser', JSON.stringify(user));
		location.href = '../pages/profile.html';
	}
	else {
		localStorage.setItem('activeUser', undefined);
	}
};



