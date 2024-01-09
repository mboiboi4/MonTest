function toggleMenu(){
    let main = Document.getElementById('main');
    let menu = document.getElementById('menu');

    if(menu.style.marginLeft ==="-250px"){
    menu.style.marginLeft ="0";
    main.style.margin = "250px";

    }else{
        menu.style.marginLeft = "-250";
        main.style.margin = "0";
    }
}

// let titreElement = document.getElementById('titre');

// titreElement.innerHTML = 'nouveau titre';

// titreElement.classList.add('nouvelle-class');

// let nouveauParagraphe.textContent = "Ceci est un nouveau paragraphe ajouté dynamiquement";

// document.body.appendChild(nouveauParagraphe);


