const inputFactorielle =  document.querySelector("#factorielle");
const btn = document.querySelector(".btn");
const divResultat = document.querySelector("#resultat");
btn.addEventListener("click",function(){
    const nombre = inputFactorielle.value;
    let resultat = 1;

for(let i=1; i<nombre; i++){
    resultat = resultat * i;
}
console.log("resultat" + nombre + "=" + resultat);
divResultat.innerHTML = "factorielle"+ nombre + "=" + resultat;

});