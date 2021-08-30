	var color=["blue","green","red"];

	length=color.length;

	var i=0;

	document.getElementById('item1').addEventListener("click",fillcolor);
	document.getElementById('item2').addEventListener("click",fillcolor);
	document.getElementById('item3').addEventListener("click",fillcolor);


	function fillcolor(){

	i=i<length ? ++i :0;

	document.getElementById("item1").style.background=color[i];
	document.getElementById("item2").style.background=color[i];
	document.getElementById("item3").style.background=color[i];

	}

	

	