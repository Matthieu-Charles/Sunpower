console.log('firjf');

const entrep = document.getElementById("inlineRadio1");
console.log(entrep);

const syndic = document.getElementById("inlineRadio2");
console.log(syndic);

const part = document.getElementById("inlineRadio3");
console.log(part);

part.onclick = function() {
    let hop = document.getElementById("divraison");
    console.log(hop);
    hop.style.display = "none" ;
}

entrep.onclick = function() {
    let hop = document.getElementById("divraison");
    console.log(hop);
    hop.style.display = "block" ;
}

syndic.onclick = function() {
    let hop = document.getElementById("divraison");
    console.log(hop);
    hop.style.display = "block" ;
}

