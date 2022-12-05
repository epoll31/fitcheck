
let user = undefined;
let tags = [];
let activeTags = [];

window.onload = (e) => {
	user = JSON.parse(localStorage.getItem('activeUser'));
	console.log(user);

	if (!user) {
		location.href = './';
	}

	user.items.forEach(item => 
		item.tags.forEach(tag => !tags.includes(tag) && tags.push(tag)));

	loadTags();
};

const addTag = () => {
	const input = document.getElementById('searchInput');
	const value = input.value.trim();

	if (value !== '') {
		activeTags.push(value);
	}

	loadTags();
}

const loadTags = () => {
	const input = document.getElementById('searchInput');
	const value = input.value.trim();
	const showAll = value === ''; 

	const searchTags = document.getElementById('searchTags');
	while (searchTags.firstChild) {
		searchTags.removeChild(searchTags.firstChild);
	}
	activeTags.forEach(tag => {
		const el = document.createElement('div');
		el.innerHTML = tag;
		el.classList.add('active');
		el.onclick = (_) => {
			activeTags = activeTags.filter(tag2 => tag2 !== tag);
			loadTags();
		};
		searchTags.appendChild(el);
	});

	tags.forEach(tag => {
		if((showAll || tag.startsWith(value)) && 
				!activeTags.includes(tag) ) {
			const el = document.createElement('div');
			el.innerHTML = tag;
			el.onclick = (_) => {
				activeTags.push(tag);
				loadTags();
			};

			searchTags.appendChild(el);
		}	
	});

	loadResults();
}

const toggleActive = (tag, el) => {

};


const loadResults = () => {
	const results = document.getElementById('results');
	while (results.firstChild) {
		results.removeChild(results.firstChild);
	}

	user.items.forEach(item => {
		console.log('hit');
		let containsActiveTag = 0;

		activeTags.forEach(tag => {
			if (item.tags.includes(tag)) {
				containsActiveTag++;
			}
		});
	
		if (containsActiveTag != activeTags.length) {
			return;
		}

		const el = document.createElement('div');
		const img = document.createElement('div');
		const tags = document.createElement('div');

		el.classList.add('result');
		img.classList.add('image');
		img.onclick = (e) => {
			location.href='./item';
		};
		tags.classList.add('tags');
		item.tags.forEach(tag => {
			const tagEl = document.createElement('div');
			tagEl.innerHTML = tag;
			if (activeTags.includes(tag)) {
				tagEl.classList.add('active');
			}
			
			tagEl.onclick = _ => {
				if (activeTags.includes(tag)) {
					activeTags = activeTags.filter(t => t !== tag);
				} 
				else {
					activeTags.push(tag);
					tagEl.classList.add('active');
				}

				loadTags();
			};

			tags.appendChild(tagEl);
		});

		el.appendChild(img);
		el.appendChild(tags);
		results.appendChild(el);
	});
};



