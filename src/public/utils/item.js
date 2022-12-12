
let index = -1;
let user = undefined;

window.onload = (_) => {
	index = JSON.parse(localStorage.getItem('activeIndex'));	
	user = JSON.parse(localStorage.getItem('activeUser'));

	if (index == -1) {
		index = user.items.length;
		user.items.push({ 
			tags: ['newly added']
		});
	}

	loadTags();
}

const push = () => {
	let users = JSON.parse(localStorage.getItem('users'));
	users = users.filter(u => {
		return !(u.username === user.username
					&& u.password === user.password
					&& u.email		 === user.email
					&& u.phone		 === user.phone);
	});
	users.push(user);
	localStorage.setItem('activeUser', JSON.stringify(user));
	localStorage.setItem('users', JSON.stringify(users));
}

const loadTags = () => {
	const item = user.items.at(index);
	const input = document.getElementById('tagsInput');
	const tags = document.getElementById('tagsList');

	const value = input.value.trim();

	while (tags.firstChild){
		tags.removeChild(tags.firstChild);
	}

	let count = 0;
	item.tags.forEach(tag => {
		if (value === ''
		||	tag.startsWith(value)) {
			const el = document.createElement('div');
			el.innerHTML = tag;
			el.classList.add('active');
			el.onclick = (_) => {
				if (el.classList.contains('active')) {
					user.items.at(index).tags = user.items.at(index).tags.filter(t => t !== tag);
				}
				else {
					user.items.at(index).tags.push(tag);
				}
				loadTags();
			};
			tags.appendChild(el);
			count++;
		}
	});
	if (count == 0) {
		const el = document.createElement('div');
		el.innerHTML = value;	
		tags.appendChild(el);
		el.onclick = (_) => {
			if (el.classList.contains('active')) {
				user.items.at(index).tags = user.items.at(index).tags.filter(t => t !== tag);
			}
			else {
				user.items.at(index).tags.push(tag);
			}
			loadTags();
		};
	}
}

const addTag = () => {
	const input = document.getElementById('tagsInput');
	const value = input.value.trim();
	if (value == '') {
		return;
	}

	user.items.at(index).tags.push(value);

	loadTags();
}

const tagsInputChange = () => {
	const input = document.getElementById('tagsInput');
	const tags = document.getElementById('tagsList');

	const value = input.value.trim(); 
	const showAll = value === ''; 

	let dispCount = 0;
	[...tags.children].forEach(tag => {
		tag.classList.add('active');
		if (!showAll && !tag.innerHTML.startsWith(value)) {
			tag.classList.add('nodisp');
		}
		else {
			tag.classList.remove('nodisp');
			dispCount++;
		}
	});
	let tag = [...tags.children].find(tag => tag.classList.contains('new'));
	if (!tag) {
		tag = document.createElement('div' );
		tag.classList.add('new');
		tags.appendChild(tag);
		tag.onclick = (_) => {
			tag.onclick = undefined;
			tag.classList.remove('new');
		};
	}

	if (dispCount == 0) {
		tag.innerHTML = value;
		tag.classList.remove('nodisp');
	}
	else {
		tag.classList.add('nodisp');
	}


};






