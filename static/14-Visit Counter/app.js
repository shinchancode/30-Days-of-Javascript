const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/hit/webrathi-com/visits')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}