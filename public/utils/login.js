
const users = [ {
	username: 'ethan',
	password: 'pollack',
	phone: '',
	email: '',
	items: [ { 
		tags: [ 'bathing suit', 'shorts', 'target', 'summer', 'red' ]
	}, {
		tags: [ 'khaki', 'shorts', 'amazon', 'summer' ]
	} ]
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
		localStorage.setItem('activeUser', JSON.stringify(user));
		location.href = './profile';
	}
	else {
		localStorage.setItem('activeUser', undefined);
	}
};



