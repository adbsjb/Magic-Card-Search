var cardsArray;
var cardObjects;
var userInput = $("#myInput")[0];
autocompleteSetup(userInput);


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
	newString = newString.replace(/{X}/g, '<span class="xMana"></span>');
	newString = newString.replace(/{T}/g, '<span class="tapSymbol"></span>');
	newString = newString.replace(/\n/g, '<br>');
	return newString;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function loadDoc(){	
	var xhttp = new XMLHttpRequest();
	var input = $("#myInput")[0].value;
	if(input != "" && input != null){
		
		
	
		xhttp.open("GET", "https://api.scryfall.com/cards/named?fuzzy=" + input, true);
		xhttp.send();
	}
	else{
		$("#name")[0].innerHTML = "";
		$("#mana_cost")[0].innerHTML = "";
		$("#cardImage")[0].src = "";
		$("#type_line")[0].innerHTML = "";
		$("#oracle_text")[0].innerHTML = "";
		$("#artist")[0].innerHTML = "";
		$("#scryfall_Link")[0].innerHTML = "";
		$("#pt")[0].innerHTML = "";
		$("#flavor_text")[0].innerHTML = "";
		$("#cardWrapper")[0].classList.remove($("#cardWrapper")[0].classList.item(0));
		$("#cardWrapper")[0].classList.add("noBorder");	
		$("#lowestPrice")[0].innerHTML = "";
		$("#lowestPriceEx")[0].innerHTML = "";
		$("#lowestPriceFoil")[0].innerHTML = "";
		$("#averagePrice")[0].innerHTML = "";		
	}	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var cardObject = JSON.parse(this.responseText);						
			
			$("#name")[0].innerHTML = cardObject.name;
			var manaSymbols = cardObject.mana_cost;
			$("#mana_cost")[0].innerHTML = replaceSymbols(manaSymbols);
			if($("#checkImage")[0].checked){
				$("#cardImage")[0].src = cardObject.image_uris.art_crop;
			}
			else{
				$("#cardImage")[0].src = "";
			}
			
			$("#type_line")[0].innerHTML = cardObject.type_line;
			var oracle = cardObject.oracle_text;
			$("#oracle_text")[0].innerHTML = replaceSymbols(oracle);
			if(cardObject.flavor_text != null){
			$("#flavor_text").innerHTML = cardObject.flavor_text;
			}
			else{
			$("#flavor_text")[0].innerHTML = "";
			}
			$("#artist")[0].innerHTML = "Artist: " + cardObject.artist;
			$("#scryfall_Link")[0].href = cardObject.scryfall_uri;
			$("#scryfall_Link")[0].innerHTML = "on Scryfall";
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
			$("#pt")[0].innerHTML = power + toughness;			
			$("#cardWrapper")[0].classList.remove($("#cardWrapper")[0].classList.item(0));
			$("#cardWrapper")[0].classList.add(cardObject.border_color + "Border");
			cardMarketDetails(cardObject);
			
		}
		else if(this.status == 404){
			$("#name")[0].innerHTML = "Search not specific enough or card doesn't exist.";
			$("#mana_cost")[0].innerHTML = "";
			$("#cardImage")[0].src = "";
			$("#type_line")[0].innerHTML = "";
			$("#oracle_text")[0].innerHTML = "";
			$("#artist")[0].innerHTML = "";
			$("#pt")[0].innerHTML = "";
			$("#scryfall_Link")[0].innerHTML = "";
			$("#flavor_text")[0].innerHTML = "";
			$("#cardWrapper")[0].classList.remove($("#cardWrapper")[0].classList.item(0));
			$("#cardWrapper")[0].classList.add("noBorder");
		}
		
	};			
	
}



userInput.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode == 13) {
		$("#button")[0].click();
	}
});		
	
var divs = [];
var index = 0;
function autocompleteSetup(input){

	var currentFocus;
	input.addEventListener("input", function (e){
		
		var inputBox = this;
		var a, b, i, input = inputBox.value;
		
		closeAllLists();
		if(!input){
			return false;
		}
		
		currentFocus = -1;
		count = 0;
		
		if(input.length > 2 ){
			
			var xhttp = new XMLHttpRequest();
			if(input != ""){		
				xhttp.open("GET", "https://api.scryfall.com/cards/autocomplete?q=" + input, true);
				xhttp.send();
			}
			
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var array = JSON.parse(this.responseText);
					
					a = document.createElement("DIV");
					a.setAttribute("id", inputBox.id + "autocomplete-list");
					a.setAttribute("class", "autocomplete-items");
					a.classList.add(index);
					divs.push(a.classList[1]);
					index++;
					inputBox.parentNode.appendChild(a);
					
					
					if(divs.length > 1){
						for(var i = 0; i < divs.length - 1; i++){
							var currentDiv = document.getElementsByClassName(divs[i])[0];						//i think this works now but keep an eye on it
							currentDiv.outerHTML = "";
							divs.shift();
						}
						
					}
					
					for (i = 0; i < array.data.length; i++){
						
						b = document.createElement("DIV");
						var searchInString = array.data[i].toUpperCase().search(input.toUpperCase());
						var caseCorrectInput = array.data[i].substr(searchInString, input.length);
						b.innerHTML = array.data[i];
						b.innerHTML = b.innerHTML.replace(caseCorrectInput, "<strong>" + caseCorrectInput + "</strong>")
						b.innerHTML += "<input type='hidden' value='" + array.data[i] + "'>";
						b.addEventListener("click", function(e) {
							inputBox.value = this.getElementsByTagName("input")[0].value;
							closeAllLists();
						});
						a.appendChild(b);
					}
					

				}
			}
			
		}
		
	});


	input.addEventListener("keydown", function(e){

		var x = $("#" + this.id + "autocomplete-list")[0];
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
		
		x[currentFocus].classList.add("autocomplete-active");							//chrome is complaining that x [currentfocus] isnt defifined sometimes. v confused
	}

	function removeActive(x){
		for (var i = 0; i < x.length; i++){
			x[i].classList.remove("autocomplete-active");
		}			
	}

	function closeAllLists(elmnt){

		divs = [];
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



function cardMarketDetails(cardObject){
	
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "https://api.cardmarket.com/ws/v2.0/products/find?search="+ cardObject.name.replace(" ", "%20") +"&exact=true&idGame=1&idLanguage=1");
	xhttp.send();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var cardMarketObject = JSON.parse(this.responseText);
			$("#lowestPrice")[0].innerHTML = "Lowest Price: €" + cardMarketObject.priceGuide.LOW;
			$("#lowestPriceEx")[0].innerHTML = "Lowest Price (Excellent Condition+): €" + cardMarketObject.priceGuide.LOWEX;	//might need to put a "+" at end here. See when api authorized
			$("#lowestPriceFoil")[0].innerHTML = "Lowest Foil Price: €" + cardMarketObject.priceGuide.LOWFOIL;
			$("#averagePrice")[0].innerHTML = "Average Price: €" + cardMarketObject.priceGuide.AVG;
		}
		else{
			$("#lowestPrice")[0].innerHTML = "Cardmarket API did not return data";
			$("#lowestPriceEx")[0].innerHTML = "";
			$("#lowestPriceFoil")[0].innerHTML = "";
			$("#averagePrice")[0].innerHTML = "";			
		}
	}
}