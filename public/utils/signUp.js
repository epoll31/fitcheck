
const signUpSubmit = () => {
	let username = document.getElementById('username');
	let password = document.getElementById('password');
	let phone		 = document.getElementById('phone');
	let email		 = document.getElementById('email');

	if ((!username.checkValidity()
	 || !password.checkValidity()
	 || !phone.checkValidity()
	 || !email.checkValidity())
	 && ((phone.value && phone.value.trim() != '')
	 || (email.value && email.value.trim() != '')))
	{
		alert('invalid signup');
	}
	else {			
		let users = JSON.parse(localStorage.getItem('users'));

		if (!users) {
			users = [];
		}
		
		users.push( {
			username: username.value,
			password: password.value,
			phone: 		phone.value,
			email:		email.value,
			items: 		[]
		} );
		localStorage.setItem('users', JSON.stringify(users));
		location.href = './login';
	}
};

