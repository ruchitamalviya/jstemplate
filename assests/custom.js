function addbox() {

		var color = ["#fc032c", "#3168de", "#46de28"];
		const random = Math.floor(Math.random() * color.length);
        
		var addbox = document.createElement("DIV");
        addbox.className='item';
		addbox.setAttribute("color",color[random]);
        addbox.onclick=fillcolor;
		document.body.appendChild(addbox);
	}

	var color = ["#fc032c", "#3168de", "#46de28"];
	var length = color.length;
	var i = 0;
	document.getElementById("item1").addEventListener('click', fillcolor);
	document.getElementById("item2").addEventListener('click', fillcolor);
	document.getElementById("item3").addEventListener('click', fillcolor);
	
	function fillcolor() {
		
        this.style.background = this.getAttribute('color')
		
    }