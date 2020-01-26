console.log("Hello World!");

let scorea = 0;
let scoreb = 0;

const btna = document.querySelector("#pointa");
btna.addEventListener("click", incrementA);

const btnb = document.querySelector("#pointb");
btnb.addEventListener("click", incrementB);

function incrementA() {
    scorea++;
    console.log(scorea);
}

function incrementB() {
    scoreb++;
    console.log(scoreb);
}