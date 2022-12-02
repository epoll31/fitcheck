
const fcs = {
	login: (username, password) => {

		let user = {
			username: username,
			password: password
		};
		if (username === 'edog' && password === 'edog') {
			localStorage.setItem('activeUser', JSON.stringify(user));
		}
		else {
			localStorage.setItem('activeUser', 'na');
		}
		return user;
	},
	loggedIn: () => {
		let au = localStorage.getItem('activeUser');
		return au === 'na';
	},
	activeUser: () => {
		let au = localStorage.getItem('activeUser');
		if (au !== 'na') {
			return JSON.parse(au);
		}
		return null;
	}
};


