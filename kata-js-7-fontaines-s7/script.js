// =====================================================
// Kata JS 7 — Fontaines à boire (aller plus loin)
// Suis les TODO dans l'ordre. La constante reponse vient de fontaines.js.
// =====================================================


// TODO 1 — Explorer la réponse dans la console
// Sans écrire de fonction, affiche avec console.log :
// a. le nombre total de fontaines annoncé par la réponse
console.log(reponse.total_count)
// b. le nombre de fontaines réellement présentes dans results
console.log(reponse.results.length)
// c. la voie de la première fontaine
console.log(reponse.results[0].voie)
// d. la latitude de la deuxième fontaine
console.log(reponse.results[1].geo_point_2d.lat)
// e. le motif d'indisponibilité de la cinquième fontaine
console.log(reponse.results[4].motif_ind)


// TODO 2 — extraireFontaines(reponse)
// Retourne le tableau des fontaines, sans l'enveloppe.
function extraireFontaines(reponse) {
    return reponse.results;
}
// défini en constante pour servir ensuite
const fontaines = extraireFontaines(reponse);


// TODO 3 — afficherFontaines(liste)
function afficherFontaines(liste) {
    // Récupération des éléments HTML
    const ul = document.getElementById("liste");
    const compteur = document.getElementById("compteur");
    // 1. Vide <ul id="liste">
    ul.textContent = "";
    // Parcourir les fontaines
    liste.forEach((fontaine) => {
        // 2. Un <li> par fontaine : la voie, puis la commune
        // Créer un élément li
        const li = document.createElement("li");
        // Ajouter la voie et la commune
        li.textContent = fontaine.voie + " - " + fontaine.commune;
        // Vérifier si la fontaine est hors service
        if (fontaine.dispo !== "OUI") {
            // 3. Une fontaine hors service reçoit la classe "hors-service"
            li.classList.add("hors-service");
            //    et son motif entre parenthèses
            li.textContent += " (" + (fontaine.motif_ind ?? "Motif non renseigné") + ")";
        }
        // Ajouter le li dans la liste
        ul.appendChild(li);
    });
    // 4. Le compteur affiche « 8 fontaines »
    compteur.textContent = liste.length + " fontaines";
}


// TODO 4 — Au chargement, affiche toutes les fontaines.
afficherFontaines(extraireFontaines(reponse));


// TODO 5 — Une fonction en argument

// a. estEnService(fontaine) retourne true si la fontaine est disponible
function estEnService(fontaine) {
    return fontaine.dispo === "OUI";
}

// b. filtrer(liste, test) retourne un nouveau tableau avec les fontaines
function filtrer(liste, test) {
    const resultat = [];
    liste.forEach((fontaine) => {
        if (test(fontaine)) {
            //    pour lesquelles test(fontaine) vaut true
            resultat.push(fontaine);
        }
    });
    return resultat;
}

console.log(estEnService(extraireFontaines(reponse)[1]))

// Récupération des éléments HTML
const boutonService = document.getElementById("btn-en-service");

// c. Au clic sur « En service seulement », affiche filtrer(..., estEnService)
boutonService.addEventListener("click", () => {
  afficherFontaines(filtrer(fontaines, estEnService));
});


// TODO 6 — Une fonction fléchée en argument
// Quand on change l'arrondissement dans le <select>, affiche seulement
// les fontaines de cet arrondissement, avec filtrer et une fonction
// fléchée écrite directement dans l'appel.
// « Tous » réaffiche toutes les fontaines.



// =====================================================
// Questions de recul (réponds en commentaire ici)
// 1.
// 2.
// 3.
// =====================================================
