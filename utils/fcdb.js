window.onload = (e) => {
	console.log('onload:');
	fcdb.pull();
	fcdb.logout();
};

window.onunload = (e) => {
	console.log('onunload:');
	fcdb.push();
}

let _fcdb = {
	users: [],
	usersKeyCounter: 0
};

let fcdb = {
	reset: () => {
		console.log('reset')
		localStorage.removeItem("_fcdb");

		_fcdb = {
			users: [],
			usersKeyCounter: 0,
			activeUser: undefined
		}
		fcdb.addUser('edog', 'edog', '', '');
		
	},
	push: () => {
		console.log('push: \t_fcdb');
		console.log(_fcdb);
		localStorage.setItem('_fcdb', JSON.stringify(_fcdb));
		console.log('\tsuccess');
	},
	pull: () => {
		console.log('pull:');
		let data = JSON.parse(localStorage.getItem('_fcdb'));
		console.log(data);
		if (data && data.users && data.usersKeyCounter) {
			console.log('\tsuccess');
			_fcdb = data;
		}
		else {
			console.log('\tinit');
			fcdb.reset();	
		}
	},
	addUser: (username, password, phoneNumber, email) => {
		console.log('addUser');
		
		_fcdb.users.push({
			id: ++_fcdb.usersKeyCounter,
			username: username,
			password: password,
			phoneNumber: phoneNumber,
			email: email
		});
		console.log('_fcdb: ', _fcdb);
		fcdb.push();
	},
	login: (username, password) => {
		let result = _fcdb.users.find((user) =>
				(user.username === username && user.password === password));
		console.log('login: ');
		if (result) {
			console.log('\tsuccess');
			_fcdb.activeUser = result;
		}
		else {
			console.log('\tfail');
			_fcdb.activeUser = undefined;
		}
		fcdb.push();
		return result;
	},
	logout: () => {
		console.log('logout:');
		_fcdb.activeUser = undefined;
		fcdb.push();
	}

};
