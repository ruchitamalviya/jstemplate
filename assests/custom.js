	
	function addbox() {
		var addbox = document.createElement("DIV");
		addbox.className = 'item';
		addbox.onclick=fillcolor;
		document.body.appendChild(addbox);
	}
	
	var color = ["#fc032c", "#3168de", "#46de28"];
	var length = color.length;
	var i = 0;
	document.getElementById("item1").addEventListener('click', fillcolor);
	document.getElementById("item2").addEventListener('click', fillcolor);
	document.getElementById("item3").addEventListener('click', fillcolor);
	document.getElementsByClassName("item").addEventListener('click', fillcolor);

	function fillcolor() {
		i = (i < length - 1) ? ++i : 0;
		document.getElementById('item1').style.background = color[i];
		document.getElementById('item2').style.background = color[i];
		document.getElementById('item3').style.background = color[i];
		getElementsByClassName('item').style.background = color[i];//error
	}


	









	
	


	

	


	


	

	