const url = "https://www.googleapis.com/books/v1/volumes"

let recherche = document.querySelector("#recherche")
let submit = document.querySelector("#submit")
let nbrResult = document.querySelector("#nbrResult")
let genres = ["Fiction", "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Family", "Drama", "Fantasy", "Horror", "Romance", "Mystery", "Thriller", "Sci-Fi"]
let drlt = document.querySelector("#drlt")
let resultats = document.querySelector(".resultats")
let user_id = null

//  Récupération de l'id de l'utilisateur dans session_id.php avec fetch
fetch("./Utils/session_id.php")
.then(res=>res.json())
.then(data=>{
    user_id = data.user_id
})

//   Création d'un menu défilant pour les genres
genres.forEach(element => {
    let option = document.createElement("option")
    option.value = element
    option.textContent = element
    drlt.appendChild(option)
})

//  Ajout d'un eventlistener pour le bouton qui prépare la requete fetch 
//  et on précise le nombre de réponse qu'on veut (10 par défault)
submit.addEventListener("click", () => {
    resultats.innerHTML = ""
    if (nbrResult.value != '') {
        APIfetch(recherche.value, nbrResult.value)
    } else {
        APIfetch(recherche.value)
    }
})

//  Requete fetch et verification du genre si il y en a un
function APIfetch(nom, nbr = 10) {
    fetch(url + "?q=intitle:" + nom + "&maxResults=" + nbr)
        .then(res => res.json())
        .then(data => {
            data.items.forEach(element => {

                //  Si un genre est donné.
                if (drlt.value != "") {
                    regex = new RegExp(drlt.value)

                    // affiche l'élément si le genre correspond
                    if (regex.test(element.volumeInfo.categories)) {
                        afficher(element)
                    }
                
                // Si le genre n'est pas donnée affiche tout les éléments
                } else {
                    afficher(element)
                }
            });
        })
}

//  affichage de l'html et préparation de la requete fetch pour envoyer les données du book dans book.php
function afficher(element) {

    let div = document.createElement("div")
    let img = document.createElement("img")
    let button = document.createElement("button")
    let titre = document.createElement("h2")
    let auteur = document.createElement("h3")
    let imgsrc = null

    //  on remplace l'image par une image par défault si il en a pas une dans l'api
    if (element.volumeInfo.imageLinks != undefined) {
        imgsrc = element.volumeInfo.imageLinks.smallThumbnail
    } else {
        imgsrc = "./images/None.svg"
    }

    img.src = imgsrc
    titre.textContent = element.volumeInfo.title
    auteur.textContent = element.volumeInfo.authors
    button.textContent = "Ajouter a la bibliothèque"
    div.className = "contBook"

    //  Création d'un bouton qui envoie a la fonction POST() les données d'un book pour les envoyer dans la DB
    button.addEventListener("click", () => {
        data = {
            img: imgsrc,
            titre: element.volumeInfo.title,
            auteur: element.volumeInfo.authors.join(" "),
            id : element.id
        }
        POST(data)
    })

    div.append(img, titre, auteur)

    //  Si le User est connecté : ajout du bouton favorie
    if (typeof(user_id) == "number"){
        div.appendChild(button)
    }
    
    resultats.appendChild(div)
}

//  envoie des données du book dans book_DB.php
function POST(data) {
    fetch("./Utils/book_DB.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
}
