//global variable declerations
var currentCardObject;
var divs = [];
var allSets;
var userDeckList = [];
autocompleteSetup($("#myInput")[0]);
getSets();
namedSearch()

function replaceSymbols(newString){
	//replaces all references to symbols with actual symbols in given string
	newString = newString.replace(/{W}/g, '<span class="whiteMana"></span>');
	newString = newString.replace(/{U}/g, '<span class="blueMana"></span>');
	newString = newString.replace(/{B}/g, '<span class="blackMana"></span>');
	newString = newString.replace(/{R}/g, '<span class="redMana"></span>');
	newString = newString.replace(/{G}/g, '<span class="greenMana"></span>');
	newString = newString.replace(/{S}/g, '<span class="snowMana"></span>');
	newString = newString.replace(/{E}/g, '<span class="energy"></span>');
	newString = newString.replace(/{C}/g, '<span class="colourlessMana"></span>');
	newString = newString.replace(/{A}/g, '<span class="acornCounter"></span>');
	newString = newString.replace(/{HW}/g, '<span class="hwhiteMana"></span>');
	newString = newString.replace(/{HU}/g, '<span class="hblueMana"></span>');
	newString = newString.replace(/{HB}/g, '<span class="hblackMana"></span>');
	newString = newString.replace(/{HR}/g, '<span class="hredMana"></span>');
	newString = newString.replace(/{HG}/g, '<span class="hgreenMana"></span>');
	newString = newString.replace(/{HC}/g, '<span class="hcolourlessMana"></span>');
	newString = newString.replace(/{W\/U}/g, '<span class="whiteblueMana"></span>');
	newString = newString.replace(/{W\/B}/g, '<span class="whiteblackMana"></span>');
	newString = newString.replace(/{U\/B}/g, '<span class="blueblackMana"></span>');
	newString = newString.replace(/{U\/R}/g, '<span class="blueredMana"></span>');
	newString = newString.replace(/{B\/R}/g, '<span class="blackredMana"></span>');
	newString = newString.replace(/{B\/G}/g, '<span class="blackgreenMana"></span>');
	newString = newString.replace(/{R\/G}/g, '<span class="redgreenMana"></span>');
	newString = newString.replace(/{R\/W}/g, '<span class="redwhiteMana"></span>');
	newString = newString.replace(/{G\/W}/g, '<span class="greenwhiteMana"></span>');
	newString = newString.replace(/{G\/U}/g, '<span class="greenblueMana"></span>');
	newString = newString.replace(/{W\/P}/g, '<span class="whitepMana"></span>');
	newString = newString.replace(/{U\/P}/g, '<span class="bluepMana"></span>');
	newString = newString.replace(/{B\/P}/g, '<span class="blackpMana"></span>');
	newString = newString.replace(/{R\/P}/g, '<span class="redpMana"></span>');
	newString = newString.replace(/{G\/P}/g, '<span class="greenpMana"></span>');
	newString = newString.replace(/\{0\}/g, '<span class="zeroMana"></span>');
	newString = newString.replace(/\{1\}/g, '<span class="oneMana"></span>');
	newString = newString.replace(/\{2\}/g, '<span class="twoMana"></span>');
	newString = newString.replace(/\{2\/B\}/g, '<span class="twobMana"></span>');
	newString = newString.replace(/\{2\/G\}/g, '<span class="twogMana"></span>');
	newString = newString.replace(/\{2\/R\}/g, '<span class="tworMana"></span>');
	newString = newString.replace(/\{2\/U\}/g, '<span class="twouMana"></span>');
	newString = newString.replace(/\{2\/W\}/g, '<span class="twowMana"></span>');
	newString = newString.replace(/\{3\}/g, '<span class="threeMana"></span>');
	newString = newString.replace(/\{4\}/g, '<span class="fourMana"></span>');
	newString = newString.replace(/\{5\}/g, '<span class="fiveMana"></span>');
	newString = newString.replace(/\{6\}/g, '<span class="sixMana"></span>');
	newString = newString.replace(/\{7\}/g, '<span class="sevenMana"></span>');
	newString = newString.replace(/\{8\}/g, '<span class="eightMana"></span>');
	newString = newString.replace(/\{9\}/g, '<span class="nineMana"></span>');
	newString = newString.replace(/\{10\}/g, '<span class="tenMana"></span>');
	newString = newString.replace(/\{11\}/g, '<span class="elevenMana"></span>');
	newString = newString.replace(/\{12\}/g, '<span class="twelveMana"></span>');
	newString = newString.replace(/\{13\}/g, '<span class="thirteenMana"></span>');
	newString = newString.replace(/\{14\}/g, '<span class="fourteenMana"></span>');
	newString = newString.replace(/\{15\}/g, '<span class="fifteenMana"></span>');
	newString = newString.replace(/\{16\}/g, '<span class="sixteenMana"></span>');
	newString = newString.replace(/\{17\}/g, '<span class="seventeenMana"></span>');
	newString = newString.replace(/\{18\}/g, '<span class="eighteenMana"></span>');
	newString = newString.replace(/\{19\}/g, '<span class="nineteenMana"></span>');
	newString = newString.replace(/\{20\}/g, '<span class="twentyMana"></span>');
	newString = newString.replace(/\{100\}/g, '<span class="onehundredMana"></span>');
	newString = newString.replace(/\{1000000\}/g, '<span class="onemillionMana"></span>');
	newString = newString.replace(/\{∞\}/g, '<span class="infiniteMana"></span>');
	newString = newString.replace(/{T}/g, '<span class="tapSymbol"></span>');
	newString = newString.replace(/{X}/g, '<span class="xMana"></span>');
	newString = newString.replace(/{Y}/g, '<span class="yMana"></span>');
	newString = newString.replace(/{Z}/g, '<span class="zMana"></span>');
	newString = newString.replace(/{T}/g, '<span class="tapSymbol"></span>');
	newString = newString.replace(/{Q}/g, '<span class="untapSymbol"></span>');
	newString = newString.replace(/{CHAOS}/g, '<span class="chaosSymbol"></span>');	
	newString = newString.replace(/{PW}/g, '<span class="planeswalkerSymbol"></span>');	
	newString = newString.replace(/\n/g, '<br>');
	newString = newString.replace(/\.5/g, '½');
	newString = newString.replace(/\'/g, "&#039");
	newString = newString.replace(/\(/g, "<i>(")
	newString = newString.replace(/\)/g, ")</i>")

	return newString;
}

function getRulings(cardObject){
	//get rulings for a card if it has any
	if(cardObject.rulings_uri != null){	
		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", cardObject.rulings_uri, true);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var rulesObject = JSON.parse(this.responseText);
				var rulesText = "<p>No rulings</p>";
				if(rulesObject.data.length != 0){
					rulesText = ""
					for(var i = 0; i < rulesObject.data.length; i++){
						rulesText = rulesText + "<p>" + rulesObject.data[i].comment + "</p>";
					}
				}
				$("#rulings")[0].innerHTML = replaceSymbols(rulesText);
				$("#rulingsWrapper")[0].classList.add("visible");
				$("#rulingsWrapper")[0].classList.remove("invisible");
			}
		}
	}
}

function clearFields(){	
	//clear all fields
	$("#name")[0].innerHTML = "";
	$("#mana_cost")[0].innerHTML = "";
	$("#cardImage")[0].src = "";
	$("#type_line")[0].innerHTML = "";
	$("#setImage")[0].title = "";
	$("#setImage")[0].alt = "";
	$("#oracle_text")[0].innerHTML = "";
	$("#artist")[0].innerHTML = "";
	$("#scryfall_Link")[0].innerHTML = "";
	$("#pt")[0].innerHTML = "";
	$("#flavor_text")[0].innerHTML = "";
	$("#cardWrapper")[0].classList.remove($("#cardWrapper")[0].classList.item(0));
	$("#cardWrapper")[0].classList.add("noBorder");	
	$("#rulingsWrapper")[0].classList.remove("visible");
	$("#rulingsWrapper")[0].classList.add("invisible");
	$("#mcm_link")[0].innerHTML = "";
	$("#edhRec_link")[0].innerHTML = "";
	$("#edhRec_rank")[0].innerHTML = "";
	$("#setDropdown")[0].innerHTML = "";
	$("#myInput")[0].value = "";
	$("#cardWrapper")[0].classList.add("invisible");
	$("#cardWrapper")[0].classList.remove("visible");
	currentCardObject = "";
	$('#collapseRulings').collapse('hide');
	$("#generalSearchResults")[0].innerHTML = "";
	$("#generalInput")[0].value = "";
	$("#averagePrice")[0].innerHTML = "";
	var test = $("#flipButton")[0].classList;
	$('#flipButton')[0].style = "display:none";	
}

function cardMarketDetails(cardObject){
	//get cardmarket link from scryfall
	if(cardObject.purchase_uris != null){
		$('#mcm_link')[0].href = cardObject.purchase_uris.cardmarket;
		$('#mcm_link')[0].innerHTML = "on Magic Card Market";
	}
	
	if(cardObject.prices != null){
		$('#averagePrice')[0].innerHTML = "Average Price: €" + 	cardObject.prices.eur;			
	}
	else{
		$('#averagePrice')[0].innerHTML = "";
	}
}

function edhRecDetails(cardObject){
	//get edhRec details from scryfall
	if(cardObject.related_uris != null){
		$('#edhRec_link')[0].href = cardObject.related_uris.edhrec;
		$('#edhRec_link')[0].innerHTML = "on EDHRec";
	}

	if(cardObject.edhrec_rank != null){
		$('#edhRec_rank')[0].innerHTML = "EDHRec Rank: " + cardObject.edhrec_rank;
	}
	else{
		$('#edhRec_rank')[0].innerHTML = "EDHRec Rank: Unknown";
	}
}

$("#generalInput").keyup(function(event) {
	//when enter pressed, emulate clicking the request data button
	event.preventDefault();
	if(event.keyCode == 13) {
		$("#btnLoadGeneralSearch")[0].click();
	}
});	

$("#myInput").keyup(function(event) {
	//when enter pressed, emulate clicking the request data button
	event.preventDefault();
	if(event.keyCode == 13) {
		$("#btnRequestData")[0].click();
	}
});	

$('#checkBorder').click(function(event){
	if(currentCardObject != ""){
		populateCard(currentCardObject);
	}
});

$('#checkImage').click(function(event){
	if(currentCardObject != ""){
		populateCard(currentCardObject);
	}
});

function namedSearch(){
	enableTab(0);
}

function generalSearch(){
	enableTab(1);
}

function deckList(){
	enableTab(2);
	refreshDeckList();
}

function enableTab(tab){
	if(tab == 0){
		$('#namedCollapse').collapse('show');
		$('#inputForm')[0].classList.remove('hide');
		$('#namedWrapper')[0].classList.remove('hide');	
		$('#btnNamed')[0].classList.add('active');
		disableTab(1);
		disableTab(2);
	}
	else if(tab == 1){
		$('#searchCollapse').collapse('show');
		$('#btnGeneral')[0].classList.add('active');
		disableTab(0);
		disableTab(2);
	}
	else if(tab == 2){
		$('#deckCollapse').collapse('show');
		$('#btnList')[0].classList.add('active');
		disableTab(0);
		disableTab(1);
	}
}

function disableTab(tab){
	if(tab == 0){
		$('#namedCollapse').collapse('hide');
		$('#btnNamed')[0].classList.remove('active');
		
	}
	else if(tab == 1){	
		$('#searchCollapse').collapse('hide');
		$('#btnGeneral')[0].classList.remove('active');
	}
	else if(tab == 2){
		$('#btnList')[0].classList.remove('active');
		$('#deckCollapse').collapse('hide');
	}
}

var index = 0;
function autocompleteSetup(input){

	var currentFocus;
	
	//listen for something to be typed (in input box?)
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
			//get autocomplete object from scryfall. This stores the 20 closest matches to whatever was typed in.
			var xhttp = new XMLHttpRequest();
			if(input != ""){		
				xhttp.open("GET", "https://api.scryfall.com/cards/autocomplete?q=" + input, true);
				xhttp.send();
			}		

			a = document.createElement("DIV");
			a.classList.add(index);
			index++;

			//when API request is returned, do this get elements of it and add it to a list
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				
					var array = JSON.parse(this.responseText);					
					a.setAttribute("id", inputBox.id + "autocomplete-list");
					a.setAttribute("class", "autocomplete-items");					
					divs.push(a.classList[0]);					
					inputBox.parentNode.appendChild(a);					
					
					//if more than one autocomplete is displayed at once, remove all but the latest one
					if(divs.length > 1){
						for(var i = 0; i < divs.length - 1; i++){
							var currentDiv = $("." + divs[i])[0];
							currentDiv.outerHTML = "";
							divs.shift();
						}
						
					}
					
					//builds a autocomplete item to be added to the autocomplete list.
					for (i = 0; i < array.data.length; i++){
						
						b = document.createElement("DIV");
						var searchInString = array.data[i].toUpperCase().search(input.toUpperCase());
						var caseCorrectInput = array.data[i].substr(searchInString, input.length);
						b.innerHTML = array.data[i];
						b.innerHTML = b.innerHTML.replace(caseCorrectInput, "<strong>" + caseCorrectInput + "</strong>")
						b.innerHTML += "<input type='hidden' value='" + array.data[i] + "'>";
						b.addEventListener("click", function(e) {
							var test = $("#myInput");
							inputBox.value = this.innerText;
							closeAllLists();
						});
						a.appendChild(b);
					}
					

				}
			}
			
		}
		
	});


	//when the down, up or enter keys are pressed from the autocomplete menu they perform their relative actions
	$("#myInput").keydown(function(e){

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
		
	else if (e.keyCode == 8){
		closeAllLists();
	}				

	});

	//makes the current autocomplete item an active item, highlighting it
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

	//closes all autocomplete items
	function closeAllLists(elmnt){

		divs = [];
		var x = $(".autocomplete-items");
		for(var i = 0; i < x.length; i++){
		
			if(elmnt != x[i] && elmnt != input){
				x[i].parentNode.removeChild(x[i]);
			}				
		}		
	}

	$(document).click(function(e){
		closeAllLists();
	});			
}

function getSets(){
	//sets up set array for this session
	var setHttp = new XMLHttpRequest();
			setHttp.open("GET", "https://api.scryfall.com/sets", true);
			setHttp.send();
			
			setHttp.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
					allSets = JSON.parse(this.responseText);
					allSets = allSets.data;
				}
			}	
}

function reprints(reprint){
	//sorts array in date order
	reprint.data.sort(function(a, b){
		for(var i = 0; i < allSets.length; i++){	
			if(allSets[i].code == a.set){
				date1 = allSets[i].released_at;
				break;
			}		
		}		
		for(var i = 0; i < allSets.length; i++){	
			if(allSets[i].code == b.set){
				date2 = allSets[i].released_at;
				break;
			}		
		}
		if (date1 < date2) {return 1;}
		if (date1 > date2) {return -1;}
		return 0;
	});
	
	//creates the dropdown menu with images
	$("#setDropdown")[0].innerHTML = "";
	for(var i = 0; i < reprint.data.length; i++){
		if(reprint.data[i].lang == "en" || reprint.data[i].lang == "ja"){
			var a = document.createElement("DIV");
			a.setAttribute("id", i + "reprintDiv");
			a.setAttribute("class", "dropdownItem");
			a.classList.add(i);
			$('#setDropdown')[0].appendChild(a)
			var b = document.createElement("DIV");
			b.setAttribute("id", i + "reprintImage");
			b.classList.add("dropdownImage");
			getRarity(reprint.data[i], b);
			getSpecialCards(a, reprint.data[i]);
			a.appendChild(b);	
			getSetIcon(reprint.data[i], "#" + i + "reprintImage");
			
			$("#" + i + "reprintDiv").click(function(){
				populateCard(reprint.data[this.classList[1]]);
			});		
		}		
	}
}

function getSetIcon(cardObject, imageDest){
	//puts set icon for specified object into specified location
	var setObject = getSetObject(cardObject);
	if(setObject != null){
		var lang = "";
		if(cardObject.lang != "en"){
			lang = "[" + cardObject.lang.toUpperCase() + "]";
		}
		$(imageDest)[0].title = setObject.name + " (" + setObject.code.toUpperCase() + ") " + lang;
		$(imageDest)[0].alt = setObject.code.toUpperCase();
		$(imageDest)[0].setAttribute("style", "-webkit-mask: url(" + setObject.icon_svg_uri + ") no-repeat 50% 50%; width:20px; height:20px;")
	}
	
}

function getSetObject(cardObject){
	for(var i = 0; i < allSets.length; i++){
		if(allSets[i].code == cardObject.set){
			return allSets[i];;
		}
	}
	
}

function getSpecialCards(cardWrapper, cardObject){
	cardWrapper.classList.remove('masterpiece', 'digital');
	if(getSetObject(cardObject).set_type == "masterpiece"){
		cardWrapper.classList.add("masterpiece");
	}
	if(cardObject.digital == true){
		cardWrapper.classList.add("digital");
	}
}


function getRarity(cardObject, imageDest){
	$(imageDest)[0].classList.remove('uncommon', 'rare', 'mythic', 'common');
	if(cardObject.rarity == 'uncommon'){
		$(imageDest)[0].classList.add('uncommon');
	}
	else if(cardObject.rarity == 'rare'){
		$(imageDest)[0].classList.add('rare');
	}
	else if(cardObject.rarity == 'mythic'){
		$(imageDest)[0].classList.add('mythic');
	}
	else{
		$(imageDest)[0].classList.add('common');
	}
	
	
}

function populateCard(cardObject){
	if(cardObject.layout == "transform"){
		cardObject.card_faces[0].layout = "normal";
		cardObject.card_faces[1].layout = "normal";
		
		if(cardObject.cardFaceToDisplay == 1){
			populateCard(cardObject.card_faces[1]);
		}
		else{
			populateCard(cardObject.card_faces[0]);
		}

		cardMarketDetails(cardObject);
		edhRecDetails(cardObject);
		getRulings(cardObject);
		getSetIcon(cardObject, '#setImage');	
		getRarity(cardObject, '#setImage');
		$("#scryfall_Link")[0].href = cardObject.scryfall_uri;
		$("#scryfall_Link")[0].innerHTML = "on Scryfall";
		
		$('#flipButton')[0].style = "";
		
	}

	else if(cardObject.layout == "flip"){		
		
		if(cardObject.cardFaceToDisplay == 1){
			cardObject.card_faces[1].layout = "normal";
			cardObject.card_faces[1].image_uris = cardObject.image_uris;
			populateCard(cardObject.card_faces[1]);
			$('#cardImage')[0].style = "transform: rotate(180deg)";
		}
		else{
			cardObject.card_faces[0].layout = "normal";
			cardObject.card_faces[0].image_uris = cardObject.image_uris;
			populateCard(cardObject.card_faces[0]);
			$('#cardImage')[0].style = "";
		}
		$('#flipButton')[0].style = "";
		
	}

	else if(cardObject.layout == "split"){	
		var separator = "";
		$("#name")[0].innerHTML = "";
		$("#mana_cost")[0].innerHTML = "";
		$("#oracle_text")[0].innerHTML = "";
		for(var i = 0; i < cardObject.card_faces.length; i++){
			if(i > 0){
				separator = " // "
			}	
			$("#name")[0].innerHTML = $("#name")[0].innerHTML + separator + cardObject.card_faces[i].name;
			$("#mana_cost")[0].innerHTML = $("#mana_cost")[0].innerHTML + separator + replaceSymbols(cardObject.card_faces[i].mana_cost);
			if($("#checkImage")[0].checked){
				$("#cardImage")[0].src = cardObject.image_uris.art_crop;
			}
			else{
				$("#cardImage")[0].src = "";
			}
			$("#oracle_text")[0].innerHTML = $("#oracle_text")[0].innerHTML + "<br>" + separator + "<br>" + replaceSymbols(cardObject.card_faces[i].oracle_text);
			$("#type_line")[0].innerHTML = cardObject.type_line;
			if(cardObject.flavor_text != null){
				$("#flavor_text")[0].innerHTML = replaceSymbols(cardObject.flavor_text);
			}
			else{
				$("#flavor_text")[0].innerHTML = "";
			}
			$("#artist")[0].innerHTML = "Artist: " + cardObject.artist;
			var power;
			var toughness;
			if(cardObject.power && cardObject.toughness != null){
				power = replaceSymbols(cardObject.power) + "/";
				toughness = replaceSymbols(cardObject.toughness);
				}
			else{
				power = "";
				toughness = "";
			}
			$("#pt")[0].innerHTML = power + toughness;			
			$("#cardWrapper")[0].classList.remove($("#cardWrapper")[0].classList.item(0));

			$('#flipButton')[0].style = "display:none";	
		}
	}

	else if(cardObject.layout == "normal" || cardObject.layout == "leveler" || cardObject.layout == "token" || cardObject.layout == "saga" || cardObject.layout == "planar" || cardObject.layout == "emblem" || cardObject.layout == "augment" || cardObject.layout == "host" || cardObject.layout == "vanguard" || cardObject.layout == "scheme" || cardObject.layout == "double_faced_token" || cardObject.layout == "meld"){
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
		if(oracle != null){
			$("#oracle_text")[0].innerHTML = replaceSymbols(oracle);
		}
		else{
			$("#oracle_text")[0].innerHTML = "";			
		}
		if(cardObject.flavor_text != null){
		$("#flavor_text")[0].innerHTML = replaceSymbols(cardObject.flavor_text);
		}
		else{
		$("#flavor_text")[0].innerHTML = "";
		}
		$("#artist")[0].innerHTML = "Artist: " + cardObject.artist;
		var power;
		var toughness;
		if(cardObject.power && cardObject.toughness != null){
			power = replaceSymbols(cardObject.power) + "/";
			toughness = replaceSymbols(cardObject.toughness);
			}
		else if(cardObject.type_line.includes("Planeswalker")){
			power = replaceSymbols(cardObject.loyalty);
			toughness = "";
		}
		else{
			power = "";
			toughness = "";
		}
		$("#pt")[0].innerHTML = power + toughness;			
		$("#cardWrapper")[0].classList.remove($("#cardWrapper")[0].classList.item(0));

		$('#flipButton')[0].style = "display:none";	
	}

	else{
		$('#name')[0].innerHTML = "Card type not yet supported"
		currentCardObject = cardObject;
		$("#cardWrapper")[0].classList.add("visible");
		$("#cardWrapper")[0].classList.remove("invisible");
		$("#scryfall_Link")[0].href = cardObject.scryfall_uri;
		$("#scryfall_Link")[0].innerHTML = "on Scryfall";
		return;
	}

	$("#cardWrapper")[0].classList.add("visible");
	$("#cardWrapper")[0].classList.remove("invisible");
	cardMarketDetails(cardObject);
	edhRecDetails(cardObject);
	getRulings(cardObject);
	getSetIcon(cardObject, '#setImage');	
	getRarity(cardObject, '#setImage');
	$("#scryfall_Link")[0].href = cardObject.scryfall_uri;
	$("#scryfall_Link")[0].innerHTML = "on Scryfall";
	if($("#checkBorder")[0].checked == true){
		$("#cardWrapper")[0].classList.add(cardObject.border_color + "Border");
	}
	else{
		$("#cardWrapper")[0].classList.remove($("#cardWrapper")[0].classList.item(0));
	}
	currentCardObject = cardObject;
}

function loadDoc(){
	//Use API to get card object
	var xhttp = new XMLHttpRequest();
	var input = encodeURIComponent($("#myInput")[0].value);
	if(input != "" && input != null){	
		xhttp.open("GET", 'https://api.scryfall.com/cards/named?fuzzy=' + input, true);
		xhttp.send();
	}
	else{
	//if nothing in input box, clear all fields
		clearFields();
	}
	xhttp.onreadystatechange = function() {
		
		//if API returned an object, populate all fields
		if (this.readyState == 4 && this.status == 200) {
			var cardObject = JSON.parse(this.responseText);
			$("#setDropdown")[0].innerHTML = "";

			var reprintHttp = new XMLHttpRequest();
			if(input != ""){
				reprintHttp.open("GET", cardObject.prints_search_uri, true);
				reprintHttp.send();
				
				reprintHttp.onreadystatechange = function(){
					if (this.readyState == 4 && this.status == 200) {
						var reprint = JSON.parse(this.responseText);
						if(reprint.total_cards != 1){
							reprints(reprint);
						}
						
					}
				}
			}
			populateCard(cardObject);			
		}
		else if(this.status == 404){
		//if no result found, print error
			clearFields();

			$("#name")[0].innerHTML = "Search not specific enough or card doesn't exist.";
		}
		
	};			
	
}

function flip(){
	if($('#name')[0].innerHTML == currentCardObject.card_faces[0].name){
		currentCardObject.cardFaceToDisplay = 1;
	}
	else{
		currentCardObject.cardFaceToDisplay = 0;
	}
	populateCard(currentCardObject);
}

function passCard(cardName){
	cardName = cardName.replace(/&#039/g, "\'");
	$("#myInput")[0].value = cardName;
	$("#btnNamed").click();
	$("#btnRequestData").click();
}

function loadGeneralSearch(){
	var xhttp = new XMLHttpRequest();
	var input = encodeURIComponent($("#generalInput")[0].value);
	if(input != "" && input != null){
		xhttp.open("GET", "https://api.scryfall.com/cards/search?q=" + input, true);
		xhttp.send();
	}
	else{
	//if nothing in input box, clear all fields
		clearFields();
	}	
	xhttp.onreadystatechange = function() {
		
		//if API returned an object, populate all fields
		if (this.readyState == 4 && this.status == 200) {
			$('#generalSearchResults')[0].innerHTML = "";
			var cardListObject = JSON.parse(this.responseText).data;	

			for(var i = 0; i < cardListObject.length; i++){
				var a = document.createElement("DIV");
				a.setAttribute("class", "cardSearchDiv");
				var b = document.createElement("A");
				b.setAttribute("class", "cardSearch");
				b.setAttribute("id", "cardSearch" + i);
				b.setAttribute("href", "#");
				b.setAttribute("onClick", "passCard('" + replaceSymbols(cardListObject[i].name) + "')");
				a.appendChild(b);
				$('#generalSearchResults')[0].appendChild(a);				
				$('#' + "cardSearch" + i)[0].innerHTML = cardListObject[i].name;
				
			}
		}
		else if(this.readyState == 4 && this.status == 404){
			var error = JSON.parse(this.response);
			if(error.code == "not_found"){
				$('#generalSearchResults')[0].innerHTML = "";
				var a = document.createElement("DIV");
				a.setAttribute("class", "cardSearch");
				$('#generalSearchResults')[0].appendChild(a);
				$('.cardSearch')[0].innerHTML = "Your query didn’t match any cards. Adjust your search terms or refer to the syntax guide at https://scryfall.com/docs/reference";
			}
		}
	}
}

function addToDeckList(){
	var match = false;
	for(var i = 0; i <= userDeckList.length; i++){
		if(currentCardObject == userDeckList[i]){
			match = true;
			break;
		}
	}
	
	if(match == true){
		currentCardObject.cardQuantity = currentCardObject.cardQuantity + parseInt($('#cardQuantity')[0].value);
	}
	else{
		currentCardObject.cardQuantity = parseInt($('#cardQuantity')[0].value);
		userDeckList.push(currentCardObject);
	}
	if (currentCardObject.cardQuantity > 4 && currentCardObject.type_line.includes("Basic Land") != true && currentCardObject.oracle_text.includes("A deck can have any number of cards named") != true){
		currentCardObject.cardQuantity = 4;
	}
	
}

function refreshDeckList(){
	$('#deckListResult')[0].innerHTML = null;
	$('#txtExport')[0].value = "";
	for(var i = 0; i <= (userDeckList.length - 1); i++){
			
		//Creating DIVs
		var a = document.createElement("DIV");
		a.setAttribute("class", "decklistDiv");
		var b = document.createElement("A");
		b.setAttribute("class", "decklist");
		b.setAttribute("id", "deckList" + i);
		b.setAttribute("href", "#");
		b.setAttribute("onClick", "passCard(\"" + userDeckList[i].name + "\")");
		a.appendChild(b);
		$('#deckListResult')[0].appendChild(a);
		$('#' + "deckList" + i)[0].innerHTML = userDeckList[i].cardQuantity + "x " + userDeckList[i].name;
			
		//Creating text box contents
		$('#txtExport')[0].value += userDeckList[i].cardQuantity + " " + userDeckList[i].name + "\n";
	}
}

function clearDeckList(){
	userDeckList = [];
	refreshDeckList();
	
}