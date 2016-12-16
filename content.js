var values = {};

document.addEventListener('keyup', function (event) {
	var target = event.target;
	if (target.tagName === 'INPUT')
		log(target.name, target.value);
});

function log(key, value) {
	if (key in values)
		localStorage.removeItem(key + ' ' + values[key]);
	values[key] = value;
	localStorage.setItem(key + ' ' + value, value);
}
