let resultats = document.querySelector(".resultats")
let user_id = null

// On récupaire les book assosier a l'id du user dans la DB
fetch("./Utils/book_query.php")
.then(res=>res.json())
.then(data=>{
    data.data.forEach(element => {
        afficher(element)
    });
})

function afficher(element) {

    // On crée tout les éléments html pour afficher les informations d'un livre
    let div = document.createElement("div")
    let divlu = document.createElement("div")
    let img = document.createElement("img")
    let h3lu = document.createElement("h3")
    let titre = document.createElement("h2")
    let auteur = document.createElement("h3")
    let lu = document.createElement("input")
    let button = document.createElement("button")

    div.className = "contBook"

    h3lu.textContent = "Lu : "
    lu.type = "checkbox"

    // On verifie a partir des informations de la DB si le livre a déjà était lu
    if (element.LU == 0){
        lu.checked = false
    } else {
        lu.checked = true
    }

    // On crée le bouton pour supprimer un livre
    button.textContent = "Supprimer des favories"
    button.addEventListener("click",()=>{
        resultats.removeChild(div)

        // On supprime le livre de la DB grace a son id et l'id du user connecté
        fetch("./Utils/book_sup.php", {
            method: "POST",
            body: JSON.stringify({
                book_id : element.BOOK_ID
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    })

    // On crée un bouton pour savoir si on a lu un livre
    lu.addEventListener("click",()=>{

        lu_value = null

        if (lu.checked){
            lu_value = 1
        } else {
            lu_value = 0
        }

        // On change la valeur de Lu dans la DB
        fetch("./Utils/book_lu.php", {
            method: "POST",
            body: JSON.stringify({
                lu : lu_value,
                book_id : element.BOOK_ID
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    })

    divlu.append(h3lu,lu)
    divlu.style.display = "flex"
    divlu.style.flexDirection = "row"

    img.src = element.IMAGE
    titre.textContent = element.TITRE
    auteur.textContent = element.AUTEUR

    div.append(img, titre, auteur, divlu, button)
    resultats.appendChild(div)
}
