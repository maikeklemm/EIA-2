"use strict";
//variablen
let gelb1 = {
    Zahl: 1,
    Farbe: "gelb",
    id: "gelb1",
    Bild: "img/gelb1.jpg"
};
let gelb2 = {
    Zahl: 2,
    Farbe: "gelb",
    id: "gelb2",
    Bild: "img/gelb2.jpg"
};
let gelb3 = {
    Zahl: 3,
    Farbe: "gelb",
    id: "gelb3",
    Bild: "img/gelb3.jpg"
};
let gelb4 = {
    Zahl: 4,
    Farbe: "gelb",
    id: "gelb4",
    Bild: "img/gelb4.jpg"
};
let gelb5 = {
    Zahl: 5,
    Farbe: "gelb",
    id: "gelb5",
    Bild: "img/gelb5.jpg"
};
let gelb6 = {
    Zahl: 6,
    Farbe: "gelb",
    id: "gelb6",
    Bild: "img/gelb6.jpg"
};
let gelb7 = {
    Zahl: 7,
    Farbe: "gelb",
    id: "gelb7",
    Bild: "img/gelb7.jpg"
};
let gelb8 = {
    Zahl: 8,
    Farbe: "gelb",
    id: "gelb8",
    Bild: "img/gelb8.jpg"
};
let blau1 = {
    Zahl: 1,
    Farbe: "blau",
    id: "blau1",
    Bild: "img/blau1.jpg"
};
let blau2 = {
    Zahl: 2,
    Farbe: "blau",
    id: "blau2",
    Bild: "img/blau2.jpg"
};
let blau3 = {
    Zahl: 3,
    Farbe: "blau",
    id: "blau3",
    Bild: "img/blau3.jpg"
};
let blau4 = {
    Zahl: 4,
    Farbe: "blau",
    id: "blau4",
    Bild: "img/blau4.jpg"
};
let blau5 = {
    Zahl: 5,
    Farbe: "blau",
    id: "blau5",
    Bild: "img/blau5.jpg"
};
let blau6 = {
    Zahl: 6,
    Farbe: "blau",
    id: "blau6",
    Bild: "img/blau6.jpg"
};
let blau7 = {
    Zahl: 7,
    Farbe: "blau",
    id: "blau7",
    Bild: "img/blau7.jpg"
};
let blau8 = {
    Zahl: 8,
    Farbe: "blau",
    id: "blau8",
    Bild: "img/blau8.jpg"
};
let rot1 = {
    Zahl: 1,
    Farbe: "rot",
    id: "rot1",
    Bild: "img/rot1.jpg"
};
let rot2 = {
    Zahl: 2,
    Farbe: "rot",
    id: "rot2",
    Bild: "img/rot2.jpg"
};
let rot3 = {
    Zahl: 3,
    Farbe: "rot",
    id: "rot3",
    Bild: "img/rot3.jpg"
};
let rot4 = {
    Zahl: 4,
    Farbe: "rot",
    id: "rot4",
    Bild: "img/rot4.jpg"
};
let rot5 = {
    Zahl: 5,
    Farbe: "rot",
    id: "rot5",
    Bild: "img/rot5.jpg"
};
let rot6 = {
    Zahl: 6,
    Farbe: "rot",
    id: "rot6",
    Bild: "img/rot6.jpg"
};
let rot7 = {
    Zahl: 7,
    Farbe: "rot",
    id: "rot7",
    Bild: "img/rot7.jpg"
};
let rot8 = {
    Zahl: 8,
    Farbe: "rot",
    id: "rot8",
    Bild: "img/rot8.jpg"
};
let gruen1 = {
    Zahl: 1,
    Farbe: "gruen",
    id: "gruen1",
    Bild: "img/gruen1.jpg"
};
let gruen2 = {
    Zahl: 2,
    Farbe: "gruen",
    id: "gruen2",
    Bild: "img/gruen2.jpg"
};
let gruen3 = {
    Zahl: 3,
    Farbe: "gruen",
    id: "gruen3",
    Bild: "img/gruen3.jpg"
};
let gruen4 = {
    Zahl: 4,
    Farbe: "gruen",
    id: "gruen4",
    Bild: "img/gruen4.jpg"
};
let gruen5 = {
    Zahl: 5,
    Farbe: "gruen",
    id: "gruen5",
    Bild: "img/gruen5.jpg"
};
let gruen6 = {
    Zahl: 6,
    Farbe: "gruen",
    id: "gruen6",
    Bild: "img/gruen6.jpg"
};
let gruen7 = {
    Zahl: 7,
    Farbe: "gruen",
    id: "gruen7",
    Bild: "img/gruen7.jpg"
};
let gruen8 = {
    Zahl: 8,
    Farbe: "gruen",
    id: "gruen8",
    Bild: "img/gruen8.jpg"
};
let ziehstapelArray = [gelb1, gelb2, gelb3, gelb4, gelb5, gelb5, gelb7, gelb8, rot1, rot2, rot3, rot4, rot5, rot6, rot7, rot8, gruen1, gruen2, gruen3, gruen4, gruen5, gruen6, gruen7, gruen8, blau1, blau2, blau3, blau4, blau5, blau6, blau7, blau8];
let computerArray = [];
let player1Array = [];
let spielflächeArray = [];
// wenn seite geladen wird
window.addEventListener("load", generateZiehstapel);
//Funktionen
function generateZiehstapel() {
    let Ziehstapelneu = document.createElement("img"); // der Ziehstapel wird als sichtbares html element generiert
    Ziehstapelneu.setAttribute("src", "img/ruckseite.jpg");
    Ziehstapelneu.setAttribute("id", "Ziehstapelneu");
    document.getElementById("ziehstapel").appendChild(Ziehstapelneu);
    document.getElementById("Ziehstapelneu").addEventListener("click", KarteZiehen);
    ziehstapelArray.sort(function (a, b) {
        return 0.5 - Math.random();
    });
    austeilen();
}
function austeilen() {
    for (let i = 0; i <= 3; i++) { //es wird solange ausgeteilt bis i größer ist als 3, also dass jeder 4 karten hat.
        console.log("ausgeteilt");
        player1Array.push(ziehstapelArray[0]); //Verteilung der Karten an spieler
        ziehstapelArray.splice(0, 1);
        computerArray.push(ziehstapelArray[0]); //Verteilung der Karten an Computer
        ziehstapelArray.splice(0, 1);
    }
    spielflächeArray.push(ziehstapelArray[0]); //Verteilung einer Karte an Spielfläche
    ziehstapelArray.splice(0, 1);
    console.log("verteilt");
    showKarten();
}
function ausspielen(Kartennummer) {
    //wenn spieler karte legen will wird geprüft ob dies möglich ist und dann die karte verschoben
    if (player1Array[Kartennummer].Farbe == spielflächeArray[spielflächeArray.length - 1].Farbe ||
        player1Array[Kartennummer].Zahl == spielflächeArray[spielflächeArray.length - 1].Zahl) {
        spielflächeArray.push(player1Array[Kartennummer]);
        player1Array.splice(Kartennummer, 1);
        console.log("Du hast eine Karte gelegt");
        if (player1Array.length == 0) { //wenn der spieler keine karte mehr hat wird ein alert ausgegeben
            alert("Du hast gewonnen!");
            console.log("Du hast gewonnen!");
        }
        showKarten();
        zugComputer();
    }
}
function showKarten() {
    document.getElementById("spieler1").innerHTML = ""; // das div in dem die karten des spielers liegen wird zu beginn geleert
    for (let i = 0; i <= player1Array.length - 1; i++) {
        let neueKarte = document.createElement("img"); // Die karte wird im html dokument erstellt und somit auf der website angezeigt
        neueKarte.innerHTML = "";
        neueKarte.setAttribute("src", player1Array[i].Bild);
        neueKarte.addEventListener('click', function () { ausspielen(i); }, false); //wenn eine karte geklickt wird, soll die funktion ausspielen angewendet werden
        document.getElementById("spieler1").appendChild(neueKarte);
        console.log("Karten des Spielers werden angzeigt");
    }
    document.getElementById("computer").innerHTML = ""; // Anzeigen der Karten des Computers
    for (let i = 0; i <= computerArray.length - 1; i++) {
        let neueKarte = document.createElement("img");
        neueKarte.setAttribute("src", "img/ruckseite.jpg");
        document.getElementById("computer").appendChild(neueKarte);
        console.log("Karten des Computers werden angezeigt");
    }
    // Anzeigen der Karte auf dem spielfeld
    document.getElementById("spielfläche").innerHTML = "";
    let neueKarte = document.createElement("img");
    neueKarte.setAttribute("src", spielflächeArray[spielflächeArray.length - 1].Bild);
    document.getElementById("spielfläche").appendChild(neueKarte);
    console.log("Karte auf der spielfläche wird angezeigt");
}
function KarteZiehen() {
    if (ziehstapelArray.length > 0) {
        player1Array.push(ziehstapelArray[0]); //wenn der spieler nicht kann muss er ziehen, wobei er eine karte aus dem stapel bekommt, solange dieser noch karten enthält
        ziehstapelArray.splice(0, 1);
        showKarten();
        console.log("Du hast eine Karte gezogen");
        zugComputer();
    }
}
function zugComputer() {
    let Kartegespielt = false;
    for (let i = 0; i < computerArray.length; i++) {
        if (computerArray[i].Farbe == spielflächeArray[spielflächeArray.length - 1].Farbe ||
            computerArray[i].Zahl == spielflächeArray[spielflächeArray.length - 1].Zahl) {
            spielflächeArray.push(computerArray[i]);
            computerArray.splice(i, 1);
            Kartegespielt = true; //damit der computer im nächsten schritt keine karte zieht, da er ja schon eine gelegt hat, ist dieser boolean hier auf true gesetzt
            i = 100; // um die schleife zu stoppen, da schon eine karte gelegt wurde und keine weiteren mehr gelegt werden sollen, habe ich i auf 100 gesetzt
            showKarten();
            console.log("Der Computer hat eine Karte gelegt");
        }
    }
    if (Kartegespielt == false && ziehstapelArray.length > 0) { //wenn der computer keine karte spielen kann muss er eine ziehen
        computerArray.push(ziehstapelArray[0]);
        ziehstapelArray.splice(0, 1);
        showKarten();
        console.log("computer hat karte gezogen");
    }
    if (computerArray.length == 0) { //wenn der computer keine karten mehr hat hat der spieler verloren
        alert("Du hast verloren!");
        console.log("Du hast verloren!");
    }
}
//# sourceMappingURL=script.js.map