const inputAjoutNouvTache =  document.querySelector("#ajouter");
const btn = document.querySelector(".btn");
const divResultat = document.querySelector("#resultat");

btn.addEventListener("click",function(){


function toggleResultat(){
    let ajouter = document.getElementById('ajouter');
    let resultat = document.getElementById('resultat');

    if(resultat.style.marginLeft ==="-1200px"){
    resultat.style.marginLeft ="0";
    ajouter.style.marginleft = "1250";

    }else{
        resultat.style.marginLeft = "-1250";
        ajouter.style.marginleft = "0";
    }
}
console.log("resultat");
divResultat.innerHTML="#resultat";
});

const divPop = document.querySelector("#pop");
modifier.addEventListener("click",function(){


function togglePop(){
    let modifier = document.getElementById('modifier');
    let supprimer = document.getElementById('supprimer');

    if(modifier.style.marginLeft === "-1250"){
        pop.style.marginLeft = "0";
        modifier.style.marginLeft = "1250";
    }else{
        pop.style.marginLeft = "-1250";
        modifier.style.marginLeft = "0";
    }
}
console.log("pop");
divPop.innerHTML = "#pop";
});
