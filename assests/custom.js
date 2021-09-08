(function() {
	let button = document.getElementById("addbox");
	button.onclick = function() {
		let addbox = document.createElement("DIV");
		addbox.className = 'item';
		document.getElementById('parent').appendChild(addbox);
	}

	document.addEventListener('click', function(e) {
		element = document.getElementsByClassName("item");
		let color = ["blue", "green", "red"];
		for(let i = 0; i < element.length; i++) {
			let divElm = element[i];
			divElm.onclick = function(eleClick) {
				let divTarget 	 = eleClick.target;
				divTarget.clicks = (divTarget.clicks || 0) + 1;
				let clickCcount  = divTarget.clicks % 3;
				this.style.background = color[clickCcount];
			}
		}
	});
})();