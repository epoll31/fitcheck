
const item = {
	tags: [ 'summer', 'shorts' ]
};

const tagsInputChange = () => {
	const input = document.getElementById('tagsInput');
	const tags = document.getElementById('tagsList');

	const value = input.value.trim(); 
	const showAll = value === ''; 

	let dispCount = 0;
	[...tags.children].forEach(tag => {
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
		tag.onclick = (e) => {
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






