function addBox()
{
	
	 var addbox = document.createElement("DIV");
	addbox.className='item';
	document.getElementById('parent').appendChild(addbox);
	
	}

(function() {
let count=0;


	document.addEventListener('click',function(e){
		element = document.getElementsByClassName("item");
		
		let color = ["#fc032c", "#3168de", "#46de28"];
		for ( let i = 0; i < element.length; i++ ) {
			var divElm = element[i];
			 divElm.onclick = function() {
			 	let count1 = count % 3;
			 	console.log(color[0]);
				this.style.background = color[count1];
				count++;
		    }
		}
	});


})();

