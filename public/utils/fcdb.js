
window.onload = (e) => {
	fcdb.pull();
};

window.onunload = (e) => {
	fcdb.push();
}

let _fcdb = {
	users: [],
	usersKeyCounter: 0
};

let fcdb = {
	push: () => {
		console.log('push');
		sessionStorage.setItem("_fcdb", JSON.stringify(_fcdb));
	},
	pull: () => {
		console.log('pull');
		let data = JSON.parse(sessionStorage.getItem("_fcdb"));
		if (data == null || data == undefined || data == "") {
			push();
		}
		else {
			_fcdb = data;
		}
	},
	addUser: (username, password, phoneNumber, email) => {
		if (typeof(username) !== "string" ||
				username == "") {
			return false;
		}
		
		_fcdb.users.push({
			id: ++_fcdb.usersKeyCounter,
			username: username,
			password: password,
			phoneNumber: phoneNumber,
			email: email
		});
	},
	checkUser: (username, password) => {
		return false;
	}
};
