
// sa// sa31_fcdb
interface user { 
	id: 					number,
	username: 		string,
	password: 		string, 
	phoneNumber?: 	string, 
	email?: 			string	
};
class db { 
	users: user[] = [];
	info: { users_keyCounter: 0 };
	constructor() {

	};
	addUser = addUser;
	checkUser = checkUser;
	getUsers = getUsers;
};

function addUser(username: string, password: string, phoneNumber?: string, email?: string) {
	fcdb.users.push( { 
		id: ++fcdb.info.users_keyCounter, 
		username: username,
		password: password, 
		phoneNumber: phoneNumber,
		email: email
	} );
}
function checkUser(username: string, password: string)   {
	fcdb.users.forEach((u: user) => {
		if (u.username === username && u.password === password) {
			return u;
		}
	});
	return undefined;
}
function getUsers() {
	return fcdb.users;
}

const fcdb = new db();
export default fcdb;
