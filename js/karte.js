
var wettenPreis;
var porteMonee;

var kartesOne = [];
var kartesTwo = [];
var kartesThree = [];

const ESRTSE   = 1;
const ZWEITE   = 2;
const DRITTE   = 3;


function main(){
   createKartes();
    displayKartes();
}

function restart(){
    clearFields();
}

function displayKartes(){

    document.getElementById("k1").src = "./images/kartes/" + kartesOne[DRITTE] + ".png"
    document.getElementById("k2").src = "./images/kartes/" + kartesTwo[DRITTE] + ".png"
    document.getElementById("k3").src = "./images/kartes/" + kartesThree[DRITTE] + ".png"
}

function createKartes(){

    kartesOne.push("king_of_diamonds");
    kartesOne.push("king_of_clubs");
    kartesOne.push("king_of_hearth");
    kartesOne.push("king_of_spades");
    kartesTwo.push("queen_of_spades");
    kartesTwo.push("queen_of_hearth");
    kartesTwo.push("queen_of_clubs");
    kartesTwo.push("queen_of_diamonds");
    kartesThree.push("jack_of_spades");
    kartesThree.push("jack_of_hearth");
    kartesThree.push("jack_of_clubs");
    kartesThree.push("jack_of_diamonds");
}

function shuffle(array) {
  	var m = array.length, t, i;

  // While there remain elements to shuffle…
  	while (m) {

	    // Pick a remaining element…

	    i = Math.floor(Math.random() * m--);

	    // And swap it with the current element.
	    t = array[m];
	    array[m] = array[i];
	    array[i] = t;
    }

  	return array;
}
function LoseOrWin(){
	var carte = [];
    var tmp="";

    for(var i = kartesOne[DRITTE].length - ZWEITE; i < kartesOne[DRITTE].length; i++ ){
        tmp = tmp + kartesOne[DRITTE][i];
    }
    carte.push(tmp);
    tmp="";

    for(var i = kartesTwo[DRITTE].length - ZWEITE; i < kartesTwo[DRITTE].length; i++ ){
        tmp = tmp + kartesTwo[DRITTE][i];
    }
    carte.push(tmp);
    tmp="";

    for(var i = kartesThree[DRITTE].length - ZWEITE; i < kartesThree[DRITTE].length; i++ ){
        tmp = tmp + kartesThree[DRITTE][i];
    }
    carte.push(tmp);

    if(carte[0] == carte[1] && carte[1] == carte[2]){
        return 0;
    }else if((carte[0] == "es" || carte[0] == "bs") && (carte[1] == "es" || carte[1] == "bs") && (carte[2] == "es" || carte[2] == "bs")){
        return 1;
    }else if((carte[0] == "th" || carte[0] == "ds") && (carte[1] == "th" || carte[1] == "ds") && (carte[2] == "th" || carte[2] == "ds")){
        return 1;
    }
    return -1;


}

}

function clearFields(){
    document.getElementById("k1").value = "";
    document.getElementById("k2").value = "";
    document.getElementById("k3").value = "";
    

}

function play() {
	var porteMonee = Number(prompt("Bitte geben Sie Ihre Maximal preis ein!!"));
	var wettenPreis = Number(prompt("Bitte geben Sie Ihre Wetten-preis ein!!"));
	if (porteMonee > 0){
		document.getElementById("porteMonee").value = porteMonee;
	}
	if (wettenPreis > 0){
		document.getElementById("wettenPreis").value = wettenPreis;
	}else if ((wettenPreis < 0) && (porteMonee < 0)) {
		alert("Ihre Wetten preis, Maximal preis muss positiv sein.");
		
	}else (wettenPreis > porteMonee){
		alert("Nicht genug Geld Bitte Laden Sie Ihre konto.!!!");
	}	
    
        console.log(wettenPreis + " " + porteMonee);
        if(wettenPreis <= porteMonee && wettenPreis > 0){
            porteMonee = porteMonee - wettenPreis;
            document.getElementById("porteMonee").value = porteMonee;

            var currentKarte = shuffle(createKartes());
            kartesOne = currentKarte[ESRTSE];
            kartesTwo = currentKarte[ZWEITE];
            kartesThree = currentKarte[DRITTE];

            displayKartes();
            var win = LoseOrWin();
            console.log(win);
            if(win == 0){
                document.getElementById("porteMonee").value = porteMonee + (wettenPreis * 2);
                alert("GeldGewinn: " + wettenPreis * 2 + " !");
             }else if(win == 1){
                document.getElementById("porteMonee").value = porteMonee + wettenPreis;
               
                alert("Gewinn: " + wettenPreis + " !");
            }else{
                alert("You lost : " + wettenPreis + " !");
            }
        }else{
            alert("not enought money");
        }
    
    catch(e){
        console.log(e);
    }
}
