window.onload = (e) => {
	const user = JSON.parse(localStorage.getItem('activeUser'));
	console.log(user);

	const header = document.getElementById('headerUsername');
	header.innerText = user.username + '.';
};


