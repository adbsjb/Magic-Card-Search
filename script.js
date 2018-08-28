	
function loadJSONFromFile(callback){
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'cards.json', true);
	xobj.onreadystatechange = function (){
		if(xobj.readyState == 4 && xobj.status == "200"){
			callback(xobj.responseText);
		}			
	};
	xobj.send(null);
}

var cardsArray;
var cardObjects;

loadJSONFromFile(function(response){				
	cardObjects = JSON.parse(response);			
	autocomplete(document.getElementById("myInput"), cardObjects);
});


function replaceSymbols(newString){
	newString = newString.replace(/{W}/g, '<span class="whiteMana"></span>');
	newString = newString.replace(/{U}/g, '<span class="blueMana"></span>');
	newString = newString.replace(/{B}/g, '<span class="blackMana"></span>');
	newString = newString.replace(/{R}/g, '<span class="redMana"></span>');
	newString = newString.replace(/{G}/g, '<span class="greenMana"></span>');
	newString = newString.replace(/{C}/g, '<span class="colourlessMana"></span>');
	newString = newString.replace('{1}', '<span class="oneMana"></span>');
	newString = newString.replace('{2}', '<span class="twoMana"></span>');
	newString = newString.replace('{3}', '<span class="threeMana"></span>');
	newString = newString.replace('{4}', '<span class="fourMana"></span>');
	newString = newString.replace('{X}', '<span class="xMana"></span>');
	newString = newString.replace(/{T}/g, '<span class="tapSymbol"></span>');
	newString = newString.replace(/\n/g, '<br>');
	return newString;
}


function loadDoc(){	
	var xhttp = new XMLHttpRequest();
	var input = document.getElementById("myInput").value;
	if(input != ""){
		
		
		
		xhttp.open("GET", "https://api.scryfall.com/cards/named?fuzzy=" + input, true);
		xhttp.send();
	}
	else{
		document.getElementById("name").innerHTML = "";
		document.getElementById("mana_cost").innerHTML = "";
		document.getElementById("cardImage").src = "";
		document.getElementById("type_line").innerHTML = "";
		document.getElementById("oracle_text").innerHTML = "";
		document.getElementById("artist").innerHTML = "";
		document.getElementById("scryfall_Link").innerHTML = "";
		document.getElementById("pt").innerHTML = "";
		document.getElementById("flavor_text").innerHTML = "";
	}	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var cardObject = JSON.parse(this.responseText);						
													
			document.getElementById("name").innerHTML = cardObject.name;
			var manaSymbols = cardObject.mana_cost;
			document.getElementById("mana_cost").innerHTML = replaceSymbols(manaSymbols);
			if(document.getElementById("checkImage").checked){
				document.getElementById("cardImage").src = cardObject.image_uris.art_crop;
			}
			else{
				document.getElementById("cardImage").src = "";
			}
			
			document.getElementById("type_line").innerHTML = cardObject.type_line;
			var oracle = cardObject.oracle_text;
			document.getElementById("oracle_text").innerHTML = replaceSymbols(oracle);
			if(cardObject.flavor_text != null){
			document.getElementById("flavor_text").innerHTML = cardObject.flavor_text;
			}
			else{
			document.getElementById("flavor_text").innerHTML = "";
			}
			document.getElementById("artist").innerHTML = "Artist: " + cardObject.artist;
			document.getElementById("scryfall_Link").href = cardObject.scryfall_uri;
			document.getElementById("scryfall_Link").innerHTML = "on Scryfall";
			var power;
			var toughness;
			if(cardObject.power && cardObject.toughness != null){
				power = cardObject.power + "/";
				toughness = cardObject.toughness;
				}
			else{
				power = "";
				toughness = "";
			}
			document.getElementById("pt").innerHTML = power + toughness;
			
		}
		else if(this.status == 404){
			document.getElementById("name").innerHTML = "Search not specific enough or card doesn't exist.";
			document.getElementById("mana_cost").innerHTML = "";
			document.getElementById("cardImage").src = "";
			document.getElementById("type_line").innerHTML = "";
			document.getElementById("oracle_text").innerHTML = "";
			document.getElementById("artist").innerHTML = "";
			document.getElementById("pt").innerHTML = "";
			document.getElementById("scryfall_Link").innerHTML = "";
			document.getElementById("flavor_text").innerHTML = "";
		}
	};			
	
}


var userInput = document.getElementById("myInput");
userInput.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode == 13) {
		document.getElementById("button").click();
	}
});		
		
			
			
function autocomplete(input, array){

	var currentFocus;
	input.addEventListener("input", function(e){
		var a, b, i, count, val = this.value;
		
		closeAllLists();
		if(!val){
			return false;
		}
		
		currentFocus = -1;
		count = 0;
		
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		this.parentNode.appendChild(a);
		
		for (i = 0; i < array.length; i++){
			
			if((array[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) && count < 20){
			
				b = document.createElement("DIV");
				b.innerHTML = "<strong>" + array[i].name.substr(0, val.length) + "</strong>";
				b.innerHTML += array[i].name.substr(val.length);
				b.innerHTML += "<input type='hidden' value='" + array[i].name + "'>";
				b.addEventListener("click", function(e) {
					input.value = this.getElementsByTagName("input")[0].value;
					closeAllLists();
				});
				a.appendChild(b);
				count++;
			}				
		}			
	});


	input.addEventListener("keydown", function(e){

		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40){
		
			currentFocus++;
			addActive(x);
		}
		else if(e.keyCode == 38){
		
		currentFocus--;
		addActive(x);
		}
		else if(e.keyCode == 13){
		e.preventDefault();
			if(currentFocus > -1){
				if (x){
					x[currentFocus].click();
				}
			}
		}

	});

	function addActive(x){

		if(!x){
			return false;
		}
		
		removeActive(x);
		if(currentFocus >= x.length){
			currentFocus = 0;
		}
		
		if(currentFocus < 0){
			currentFocus = (x.length -1);
		}
		
		x[currentFocus].classList.add("autocomplete-active");
	}

	function removeActive(x){
		for (var i = 0; i < x.length; i++){
			x[i].classList.remove("autocomplete-active");
		}			
	}

	function closeAllLists(elmnt){

		var x = document.getElementsByClassName("autocomplete-items");
		for(var i = 0; i < x.length; i++){
		
			if(elmnt != x[i] && elmnt != input){
				x[i].parentNode.removeChild(x[i]);
			}				
		}		
	}

	document.addEventListener("click", function(e){
		closeAllLists();
	});			
}
