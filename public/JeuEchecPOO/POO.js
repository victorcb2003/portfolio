// Variables Global


const body = document.querySelector("body")
const conteiner = document.querySelector(".conteiner")
const partie = document.querySelector(".parties")
partie.innerHTML = ""
const Normal = document.querySelector("#Normal")
const Load = document.querySelector("#Load")
const Save = document.querySelector("#Save")
let Plateau = []
let Plateau2 = []
let pieces = []
let tour = true // true -> blanc; false -> noir
let id = 0
let stop = false
let dernier = undefined
let cont = undefined
let i = undefined
let y = undefined
let demi_coup = 0
let coup_complet = 1
let CouleurJoueur = 1
let DeuxJoueurs = true




// Fonctions

function FEN(char) {
    
    i = 0
    let index0 = 0
    let index1 = 0
    let PiecePart = true
    while (PiecePart == true) {
        if (char[i] == "P") { pieces.push(new pawn(1, [index0, index1])) }
        if (char[i] == "p") { pieces.push(new pawn(-1, [index0, index1])) }
        if (char[i] == "K") { pieces.push(new king(1, [index0, index1])) }
        if (char[i] == "k") { pieces.push(new king(-1, [index0, index1])) }
        if (char[i] == "Q") { pieces.push(new queen(1, [index0, index1])) }
        if (char[i] == "q") { pieces.push(new queen(-1, [index0, index1])) }
        if (char[i] == "R") { pieces.push(new rook(1, [index0, index1])) }
        if (char[i] == "r") { pieces.push(new rook(-1, [index0, index1])) }
        if (char[i] == "B") { pieces.push(new bishop(1, [index0, index1])) }
        if (char[i] == "b") { pieces.push(new bishop(-1, [index0, index1])) }
        if (char[i] == "N") { pieces.push(new knight(1, [index0, index1])) }
        if (char[i] == "n") { pieces.push(new knight(-1, [index0, index1])) }
        if (char[i] == "/") {
            index1 += 1
            index0 = 0
        } else if (/^\d$/.test(char[i])) {
            index0 += parseInt(char[i])
        } else if (char[i] == " " || char[i] == "_") {
            PiecePart = false
        } else {
            index0++
        }
        i++

        if (i > 100) { return }
    }
    let King = pieces.filter((element) => element.constructor.name == "king")
    if (King.length != 2) { return }
    if (char[i] == "w") { tour = true } else { tour = false }
    i += 2
    if (char[i] == "-") {
        King[0].AlreadyMoove = true
        King[1].AlreadyMoove = true
    } else {
        let chaine = ""
        while (char[i] != " ") {
            
            chaine += char[i]
            i++
        }
        if (!chaine.includes("K") && String(pieces.filter((e) => e.constructor.name == "rook" && e.couleur == 1 && e.coté == "roi")) != "[]") {
            pieces.filter((e) => e.constructor.name == "rook" && e.couleur == 1 && e.coté == "roi")[0].AlreadyMoove = true
        }
        if (!chaine.includes("Q") && String(pieces.filter((e) => e.constructor.name == "rook" && e.couleur == 1 && e.coté == "dame")) != "[]") {
            pieces.filter((e) => e.constructor.name == "rook" && e.couleur == 1 && e.coté == "dame")[0].AlreadyMoove = true
        }
        if (!chaine.includes("k") && String(pieces.filter((e) => e.constructor.name == "rook" && e.couleur == -1 && e.coté == "roi")) != "[]") {
            pieces.filter((e) => e.constructor.name == "rook" && e.couleur == -1 && e.coté == "roi")[0].AlreadyMoove = true
        }
        if (!chaine.includes("q") && String(pieces.filter((e) => e.constructor.name == "rook" && e.couleur == -1 && e.coté == "dame")) != "[]") {
            pieces.filter((e) => e.constructor.name == "rook" && e.couleur == -1 && e.coté == "dame")[0].AlreadyMoove = true
        }
    }
    
    i++
    i+= 2
    if (char[i] == " ") {
        i++
    }
    demi_coup = parseInt(char[i])
    coup_complet = parseInt(char.slice(i + 2, char.length))
}

function NEF() {
    let char = ""
    let count = 0
    for (y = 0; y < 8; y++) {
        for (i = 0; i < 8; i++) {
            if (Plateau[i][y].innerHTML == "") {
                count += 1
                if (i == 7) { char += String(count); count = 0 }
            } else {
                if (count != 0) { char += String(count); count = 0 }
                if (Plateau[i][y].innerHTML.match(/black-([a-zA-]+)\.svg/) != null) {
                    if ("pawn" == Plateau[i][y].innerHTML.match(/black-([a-zA-]+)\.svg/)[1]) { char += "p" }
                    if ("king" == Plateau[i][y].innerHTML.match(/black-([a-zA-]+)\.svg/)[1]) { char += "k" }
                    if ("queen" == Plateau[i][y].innerHTML.match(/black-([a-zA-]+)\.svg/)[1]) { char += "q" }
                    if ("rook" == Plateau[i][y].innerHTML.match(/black-([a-zA-]+)\.svg/)[1]) { char += "r" }
                    if ("bishop" == Plateau[i][y].innerHTML.match(/black-([a-zA-]+)\.svg/)[1]) { char += "b" }
                    if ("knight" == Plateau[i][y].innerHTML.match(/black-([a-zA-]+)\.svg/)[1]) { char += "n" }
                }
                if (Plateau[i][y].innerHTML.match(/white-([a-zA-]+)\.svg/) != null) {
                    if ("pawn" == Plateau[i][y].innerHTML.match(/white-([a-zA-]+)\.svg/)[1]) { char += "P" }
                    if ("king" == Plateau[i][y].innerHTML.match(/white-([a-zA-]+)\.svg/)[1]) { char += "K" }
                    if ("queen" == Plateau[i][y].innerHTML.match(/white-([a-zA-]+)\.svg/)[1]) { char += "Q" }
                    if ("rook" == Plateau[i][y].innerHTML.match(/white-([a-zA-]+)\.svg/)[1]) { char += "R" }
                    if ("bishop" == Plateau[i][y].innerHTML.match(/white-([a-zA-]+)\.svg/)[1]) { char += "B" }
                    if ("knight" == Plateau[i][y].innerHTML.match(/white-([a-zA-]+)\.svg/)[1]) { char += "N" }
                }
            }
        }
        if (y != 7) {
            char += "/"
        }
    }
    char += " "
    if (tour) { char += "w" } else { char += "b" }
    char += " "
    let King = [pieces.filter((element) => element.constructor.name == "king" && element.couleur == 1), pieces.filter((element) => element.constructor.name == "king" && element.couleur == -1)]
    if (King[0].length != 1 || King[1].length != 1) { return }
    let Rook = [pieces.filter((e) => e.constructor.name == "rook" && e.couleur == 1 && e.coté == "roi")[0], pieces.filter((e) => e.constructor.name == "rook" && e.couleur == 1 && e.coté == "dame")[0], pieces.filter((e) => e.constructor.name == "rook" && e.couleur == -1 && e.coté == "roi")[0], pieces.filter((e) => e.constructor.name == "rook" && e.couleur == -1 && e.coté == "dame")[0]]
    if (King[0][0].AlreadyMoove == false) {
        if (Rook[0] != null && Rook[0].AlreadyMoove == false) {
            char += "K"
        }
        if (Rook[1] != null && Rook[1].AlreadyMoove == false) {
            char += "Q"
        }
    }
    if (King[1][0].AlreadyMoove == false) {
        if (Rook[2] != null && Rook[2].AlreadyMoove == false) {
            char += "k"
        }
        if (Rook[3] != null && Rook[3].AlreadyMoove == false) {
            char += "q"
        }
    }
    if (char[char.length - 1] == " ") {
        char += "-"
    }
    char += " - "
    char += String(demi_coup)
    char += " "
    char += String(coup_complet)
    return char
}

function ofr(n, m) {
    if (n < 0 || n > 7 || m < 0 || m > 7) {
        return false
    } else {
        return true
    }
}

function Reset() {
    try { conteiner.removeChild(cont) }
    catch { }
    stop = false
    pieces = []
    id = 0
    demi_coup = 0
    coup_complet = 1
    piece.clear()
    for (i = 0; i < 8; i++) {
        for (y = 0; y < 8; y++) {
            Plateau[i][y].innerHTML = ""
        }
    }
}
function afficher() {
    partie.innerHTML = ""
    let mem = ["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"]
    mem = mem.concat(JSON.parse(localStorage.getItem("parties")))
    mem = mem.filter((element) => element != null)
    mem.forEach((element) => {
        let div = document.createElement("div")
        let btn = document.createElement("button")
        let sup = document.createElement("img")
        sup.src = "./images/cross.svg"
        div.className = "position"
        div.style.display = "flex"
        div.style.flexDirection = "row"
        sup.addEventListener("click", () => {
            mem = mem.filter((ele) => ele != element)
            localStorage.setItem("parties", JSON.stringify(mem))
            afficher()
        })
        btn.addEventListener("click", () => {
            Reset()
            FEN(element)
            partie.innerHTML = ""
            if (DeuxJoueurs == false){
                if ((CouleurJoueur == 1 && tour == false) || (CouleurJoueur == -1 && tour == true)){
                    StockFish()
                }
            }
        })
        btn.textContent = "Charger la posistion"
        div.append(sup, btn)
        partie.appendChild(div)
    })
}
async function postChessApi(data = {}) {
    const response = await fetch("https://chess-api.com/v1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

function StockFish() {
    postChessApi({ fen: NEF() }).then((data) => {
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"]
        let from = [alphabet.indexOf(data.from[0]), 8 - parseInt(data.from[1])]
        let to = [alphabet.indexOf(data.to[0]), 8 - parseInt(data.to[1])]
        let Piece = pieces.filter((element) => element.Alive() == true && element.cases[0] == from[0] && element.cases[1] == from[1])[0]
        Piece.M(to)
    })
}

// Button

Normal.addEventListener("click", () => {
    partie.innerHTML = ""
    Reset()
    let btn = document.createElement("button")
    btn.textContent = "StockFish"
    let btn2 = document.createElement("button")
    btn2.textContent = "2 joueurs"
    partie.append(btn2, btn)
    btn.addEventListener("click", () => {
        DeuxJoueurs = false
        afficher()
    })
    btn2.addEventListener("click", () => {
        DeuxJoueurs = true
        afficher()
    })
})

Load.addEventListener("click", () => {
    if (partie.innerHTML != "") {
        partie.innerHTML = ""
    } else {
        afficher()
    }
})

Save.addEventListener("click", () => {
    partie.innerHTML = ""
    let mem = JSON.parse(localStorage.getItem("parties"))
    if (mem == null) { mem = [] }
    mem.push(NEF())
    localStorage.setItem("parties", JSON.stringify(mem))
})

// Plateau


for (i = 0; i < 8; i++) {
    let div = document.createElement("div")
    let div2 = document.createElement("div")
    div.classList = "ligne"
    Plateau.push([])
    Plateau2.push([])
    conteiner.appendChild(div)
    for (y = 0; y < 8; y++) {
        let cas = document.createElement("div")
        let cas2 = document.createElement("div")
        if ((i + y) % 2 == 0) {
            cas.style.background = "white"
        } else {
            cas.style.background = "#deb887" //couleur
        }
        cas.classList = "case"
        div.appendChild(cas)
        Plateau2[i].push(cas2)
        Plateau[i].push(cas)
    }
}


// Class


class piece {
    constructor(couleur, cases) {
        this.couleur = couleur
        this.cases = cases
        this.AlreadyMoove = false
        this.id = id
        id += 1
        this.html = document.createElement("img")
        this.html.id = this.id
        Plateau[this.cases[0]][this.cases[1]].innerHTML = ""
        Plateau[this.cases[0]][this.cases[1]].appendChild(this.html)
        if (this.couleur + 1) {
            this.lettre = "black"
        } else {
            this.lettre = "white"
        }
        this.html.addEventListener("click", () => {
            if ((tour && this.couleur == 1 || !tour && this.couleur == -1) && stop == false && (DeuxJoueurs || CouleurJoueur == this.couleur)) {
                piece.clear()
                let coups = this.TestMoove()
                coups.forEach(index => {
                    if ((index[0] + index[1]) % 2 == 1) {
                        Plateau[index[0]][index[1]].style.background = "darkblue"
                    } else {
                        Plateau[index[0]][index[1]].style.background = "lightblue"
                    }
                    const Moove = (event) => {
                        
                        this.M(index)
                    }
                    Plateau[index[0]][index[1]].onclick = Moove
                })
            }
        })
    }
    M(index) {
        dernier = [this.constructor.name, this.cases, index]
        
        if (this.constructor.name == "pawn" && index[1] == (this.couleur - 1) * -3.5) {
            
            this.Upgrade(index)
        } else {
            this.MooveTo(index)
            this.AlreadyMoove = true
            this.AsWin()
            demi_coup += 1
            coup_complet += parseInt(demi_coup / 2)
            demi_coup = demi_coup % 2
            if (DeuxJoueurs == false && this.couleur == CouleurJoueur) {
                StockFish()
            }
        }
    }
    Alive() {
        if (Plateau[this.cases[0]][this.cases[1]].innerHTML != "" && this.id == Plateau[this.cases[0]][this.cases[1]].innerHTML.match(/id="(\d+)"/)[1]) {
            return true
        } else {
            return false
        }
    }
    TestMoove() {
        let King = undefined
        pieces.forEach((element) => {
            if (element.constructor.name == "king" && element.couleur == this.couleur) {
                King = element
            }
            if (element.Alive()) {
                Plateau2[element.cases[0]][element.cases[1]].appendChild(element.html.cloneNode())
            }
        })
        let Rook = pieces.filter((element) => element.constructor.name == "rook" && element.couleur == this.couleur)
        Rook.forEach((element) => element = element.cases)
        let newcoups = []
        let OrigineCases = this.cases
        let listcoups = this.CanMoove()
        listcoups.forEach((element) => {
            this.MooveTo(element)
            tour = tour == false
            if (King.IsCheck().length == 0) {
                newcoups.push(element)
            }
            for (i = 0; i < 8; i++) {
                for (y = 0; y < 8; y++) {
                    if (Plateau[i][y].innerHTML != Plateau2[i][y].innerHTML) {
                        Plateau[i][y].innerHTML = ""
                        if (Plateau2[i][y].innerHTML != "") {
                            Plateau[i][y].appendChild(pieces[parseInt(Plateau2[i][y].innerHTML.match(/id="(\d+)"/)[1])].html)
                        }
                    }
                }
            }
        })
        i = 0
        pieces.filter((element) => element.constructor.name == "rook" && element.couleur == this.couleur).forEach((element) => { element.case = Rook[i]; i++ })
        this.cases = OrigineCases
        for (i = 0; i < 8; i++) {
            for (y = 0; y < 8; y++) {
                if (Plateau[i][y].innerHTML != Plateau2[i][y].innerHTML) {
                    Plateau[i][y].innerHTML = ""
                    if (Plateau2[i][y].innerHTML != "") {
                        Plateau[i][y].appendChild(pieces[parseInt(Plateau2[i][y].innerHTML.match(/id="(\d+)"/)[1])].html)
                    }
                }
                Plateau2[i][y].innerHTML = ""

            }
        }
        return newcoups
    }

    static clear() {
        const Moove = (event) => this.MooveTo(index)
        for (i = 0; i < 8; i++) {
            for (y = 0; y < 8; y++) {
                if (Plateau[i][y].style.background == "darkblue") {
                    Plateau[i][y].style.background = "#deb887" //couleur
                    Plateau[i][y].onclick = null
                }
                if (Plateau[i][y].style.background == "lightblue") {
                    Plateau[i][y].style.background = "white"
                    Plateau[i][y].onclick = null
                }
            }
        }
    }
    static AllMoove(couleur) {
        let listcoups = []
        pieces.forEach((element) => {
            if (element.couleur == couleur && element.Alive()) {
                listcoups = listcoups.concat(element.CanMoove())
            }
        })
        return listcoups
    }
    AsWin() {
        if (pieces.filter((element) => element.constructor.name == "king" && element.couleur != this.couleur)[0].IsCheck().length != 0) {
            let Pieces = pieces.filter((element) => element.couleur != this.couleur && element.Alive())
            let mooves = Pieces.filter((Element) => Element.TestMoove().length != 0)
            if (mooves.length == 0) {
                stop = true
                cont = document.createElement("div")
                let win = document.createElement("div")
                let texte = document.createElement("h2")
                win.appendChild(texte)
                win.id = "win"
                cont.appendChild(win)
                cont.id = "cont"
                conteiner.appendChild(cont)
                if (this.couleur == 1) {
                    texte.textContent = "Les Blancs on gagné"
                } else {
                    texte.textContent = "Les Noires on gagné"
                }
            }
        }
    }
    CanMoove() {
        // a faire pour chaque piece
    }
    MooveTo(newcases, eat = true) {
        if (newcases.length == 3) {
            if (newcases[2] == "Q") {
                pieces.push(new queen(this.couleur, this.cases))
            }
            if (newcases[2] == "N") {
                pieces.push(new knight(this.couleur, this.cases))
            }
            if (newcases[2] == "R") {
                pieces.push(new rook(this.couleur, this.cases))
            }
            if (newcases[2] == "B") {
                pieces.push(new bishop(this.couleur, this.cases))
            }
            pieces[pieces.length - 1].MooveTo([newcases[0], newcases[1]])
        } else {
            if (this.constructor.name == "pawn") {
                if (Plateau[newcases[0]][newcases[1]].innerHTML == "" && this.cases[1] != newcases[1]) {
                    Plateau[newcases[0]][newcases[1] + this.couleur].innerHTML = ""
                }
            }
            if (this.constructor.name == "king" && (newcases[0] == 2 || newcases[0] == 6) && this.AlreadyMoove == false && eat == true) {
                let Rook = pieces.filter((element) => element.constructor.name == "rook" && element.lettre == this.lettre)
                let Tour = null
                if (newcases[0] == 2) {
                    Tour = Rook[0]
                } else {
                    Tour = Rook[1]
                }
                Plateau[Tour.cases[0]][Tour.cases[1]].innerHTML = ""
                Plateau[((newcases[0] - 1) % 5) * (-2) + 5][newcases[1]].appendChild(Tour.html)
                Tour.cases = [((newcases[0] - 1) % 5) * (-2) + 5, newcases[1]]
            }
            Plateau[newcases[0]][newcases[1]].innerHTML = ""
            Plateau[newcases[0]][newcases[1]].appendChild(this.html)
            this.cases = newcases
            piece.clear()
            tour = tour == false
        }
    }
    MooveRook() {
        let listcoups = []
        for (i = -1; i < 2; i += 2) {
            let count = 1
            let verif = true
            while (verif == true) {
                if (ofr(this.cases[0] + i * count, this.cases[1]) == true) {
                    if (Plateau[this.cases[0] + i * count][this.cases[1]].innerHTML == "") {
                        listcoups.push([this.cases[0] + i * count, this.cases[1]])
                    } else if (new RegExp(`\\b${String(this.lettre)}\\b`, "i").test(Plateau[this.cases[0] + i * count][this.cases[1]].innerHTML)) {
                        verif = false
                        listcoups.push([this.cases[0] + i * count, this.cases[1]])
                    } else {
                        verif = false
                    }
                } else {
                    verif = false
                }
                count += 1
            }
        }
        for (i = -1; i < 2; i += 2) {
            let count = 1
            let verif = true
            while (verif == true) {
                if (ofr(this.cases[0], this.cases[1] + i * count) == true) {
                    if (Plateau[this.cases[0]][this.cases[1] + i * count].innerHTML == "") {
                        listcoups.push([this.cases[0], this.cases[1] + i * count])
                    } else if (new RegExp(`\\b${String(this.lettre)}\\b`, "i").test(Plateau[this.cases[0]][this.cases[1] + i * count].innerHTML)) {
                        verif = false
                        listcoups.push([this.cases[0], this.cases[1] + i * count])
                    } else {
                        verif = false
                    }
                } else {
                    verif = false
                }
                count += 1
            }
        }
        return listcoups
    }
    MooveBishop() {
        let listcoups = []
        for (i = -1; i < 2; i += 2) {
            for (y = -1; y < 2; y += 2) {
                let count = 1
                let verif = true
                while (verif == true) {
                    if (ofr(this.cases[0] + i * count, this.cases[1] + y * count) == true) {
                        if (Plateau[this.cases[0] + i * count][this.cases[1] + y * count].innerHTML == "") {
                            listcoups.push([this.cases[0] + i * count, this.cases[1] + y * count])
                        } else if (new RegExp(`\\b${String(this.lettre)}\\b`, "i").test(Plateau[this.cases[0] + i * count][this.cases[1] + y * count].innerHTML)) {
                            verif = false
                            listcoups.push([this.cases[0] + i * count, this.cases[1] + y * count])
                        } else {
                            verif = false
                        }
                    } else {
                        verif = false
                    }
                    count += 1
                }
            }
        }
        return listcoups
    }
}


class pawn extends piece {
    constructor(couleur, cases) {
        super(couleur, cases)
        this.AlreadyMoove = false
        if (this.couleur == -1) {
            this.html.src = "./images/black-pawn.svg"
        } else {
            this.html.src = "./images/white-pawn.svg"
        }
    }
    Mp(){
        this.AlreadyMoove = true
        this.AsWin()
        demi_coup += 1
        coup_complet += parseInt(demi_coup / 2)
        demi_coup = demi_coup % 2
        if (DeuxJoueurs == false && this.couleur == CouleurJoueur) {
            StockFish()
        }
    }
    Upgrade(index) {
        stop = true
        let cont = document.querySelector(".upgrade-" + this.lettre)
        let upq = document.createElement("img")
        let upk = document.createElement("img")
        let upr = document.createElement("img")
        let upb = document.createElement("img")
        if (this.couleur == -1) {
            upq.src = "./images/black-queen.svg"
            upk.src = "./images/black-knight.svg"
            upr.src = "./images/black-rook.svg"
            upb.src = "./images/black-bishop.svg"
        } else {
            upq.src = "./images/white-queen.svg"
            upk.src = "./images/white-knight.svg"
            upr.src = "./images/white-rook.svg"
            upb.src = "./images/white-bishop.svg"
        }
        upq.addEventListener("click", () => {
            pieces.push(new queen(this.couleur, this.cases))
            cont.innerHTML = ""
            stop = false
            pieces[pieces.length - 1].MooveTo([index[0], index[1]])
            this.Mp()
        })
        upk.addEventListener("click", () => {
            pieces.push(new knight(this.couleur, this.cases))
            cont.innerHTML = ""
            stop = false
            pieces[pieces.length - 1].MooveTo([index[0], index[1]])
            this.Mp()
        })
        upr.addEventListener("click", () => {
            pieces.push(new rook(this.couleur, this.cases))
            cont.innerHTML = ""
            stop = false
            pieces[pieces.length - 1].MooveTo([index[0], index[1]])
            this.Mp()
        })
        upb.addEventListener("click", () => {
            pieces.push(new bishop(this.couleur, this.cases))
            cont.innerHTML = ""
            stop = false
            pieces[pieces.length - 1].MooveTo([index[0], index[1]])
            this.Mp()
        })
        cont.append(upq, upk, upr, upb)
    }
    CanMoove() {
        let listcoups = []
        if (this.cases[1] == 3.5 + this.couleur * 2.5) {
            if (ofr(this.cases[0], this.cases[1] - 2 * this.couleur) == true) {
                if (Plateau[this.cases[0]][this.cases[1] - 2 * this.couleur].innerHTML == "" && Plateau[this.cases[0]][this.cases[1] - this.couleur].innerHTML == "") {
                    listcoups.push([this.cases[0], this.cases[1] - 2 * this.couleur])
                }
            }
        }
        if (ofr(this.cases[0], this.cases[1] - 1 * this.couleur) == true) {
            if (Plateau[this.cases[0]][this.cases[1] - 1 * this.couleur].innerHTML == "") {
                listcoups.push([this.cases[0], this.cases[1] - 1 * this.couleur])
            }
        }
        for (i = -1; i < 2; i += 2) {
            if (ofr(this.cases[0] + i, this.cases[1] - 1 * this.couleur) == true) {
                if (new RegExp(`\\b${String(this.lettre)}\\b`, "i").test(Plateau[this.cases[0] + i][this.cases[1] - 1 * this.couleur].innerHTML)) {
                    listcoups.push([this.cases[0] + i, this.cases[1] - 1 * this.couleur])
                }
                if (Plateau[this.cases[0] + i][this.cases[1] - this.couleur].innerHTML == "" && this.cases[1] == (-this.couleur + 4)) {
                    if (dernier[0] == "pawn" && String(dernier[1]) == String([this.cases[0] + i, this.cases[1] - 2 * this.couleur]) && String(dernier[2]) == String([this.cases[0] + i, this.cases[1]])) {
                        listcoups.push([this.cases[0] + i, this.cases[1] - 1 * this.couleur])
                    }
                }
            }
        }
        listcoups.forEach((element) => {
            if (element[1] == (this.couleur - 1) * -3.5) {
                listcoups.push([element[0], element[1], "Q"])
                listcoups.push([element[0], element[1], "N"])
                listcoups.push([element[0], element[1], "R"])
                listcoups.push([element[0], element[1], "B"])
                listcoups = listcoups.filter((ele) => ele != element)
            }
        })
        return listcoups
    }
}

class rook extends piece {
    constructor(couleur, cases) {
        super(couleur, cases)
        if (String(this.cases) == String([0, (this.couleur + 1) * 3.5])) {
            this.coté = "dame"
        } else if (String(this.cases) == String([7, (this.couleur + 1) * 3.5])) {
            this.coté = "roi"
        } else {
            this.coté = null
        }
        if (this.couleur == -1) {
            this.html.src = "./images/black-rook.svg"
        } else {
            this.html.src = "./images/white-rook.svg"
        }
    }
    CanMoove() {
        return this.MooveRook()
    }
}

class knight extends piece {
    constructor(couleur, cases) {
        super(couleur, cases)
        if (this.couleur == -1) {
            this.html.src = "./images/black-knight.svg"
        } else {
            this.html.src = "./images/white-knight.svg"
        }
    }
    CanMoove() {
        let listcoups = []
        for (i = -1; i < 2; i += 2) {
            for (y = -1; y < 2; y += 2) {
                if (ofr(this.cases[0] + i, this.cases[1] + 2 * y) == true) {
                    if (new RegExp(`\\b${String(this.lettre)}\\b`, "i").test(Plateau[this.cases[0] + i][this.cases[1] + 2 * y].innerHTML) || Plateau[this.cases[0] + i][this.cases[1] + 2 * y].innerHTML == "") {
                        listcoups.push([this.cases[0] + i, this.cases[1] + 2 * y])
                    }
                }
                if (ofr(this.cases[0] + 2 * i, this.cases[1] + y) == true) {
                    if (new RegExp(`\\b${String(this.lettre)}\\b`, "i").test(Plateau[this.cases[0] + 2 * i][this.cases[1] + y].innerHTML) || Plateau[this.cases[0] + 2 * i][this.cases[1] + y].innerHTML == "") {
                        listcoups.push([this.cases[0] + 2 * i, this.cases[1] + y])
                    }
                }
            }
        }
        return listcoups
    }
}

class bishop extends piece {
    constructor(couleur, cases) {
        super(couleur, cases)
        if (this.couleur == -1) {
            this.html.src = "./images/black-bishop.svg"
        } else {
            this.html.src = "./images/white-bishop.svg"
        }
    }
    CanMoove() {
        return this.MooveBishop()
    }
}

class king extends piece {
    constructor(couleur, cases) {
        super(couleur, cases)
        if (this.couleur == -1) {
            this.html.src = "./images/black-king.svg"
        } else {
            this.html.src = "./images/white-king.svg"
        }
    }
    CanMoove() {
        let listcoups = []
        for (i = -1; i < 2; i++) {
            for (y = -1; y < 2; y++) {
                if (ofr(this.cases[0] + i, this.cases[1] + y) == true) {
                    if (new RegExp(`\\b${String(this.lettre)}\\b`, "i").test(Plateau[this.cases[0] + i][this.cases[1] + y].innerHTML) || Plateau[this.cases[0] + i][this.cases[1] + y].innerHTML == "") {
                        listcoups.push([this.cases[0] + i, this.cases[1] + y])
                    }
                }
            }
        }
        return listcoups.concat(this.CanRoc())
    }
    IsCheck() {
        let listcoups = piece.AllMoove(this.couleur * (-1))
        let coups = []
        listcoups.forEach((element) => {
            if (String(element) == String(this.cases)) {
                coups.push(element)
            }
        })
        return coups
    }
    CanRoc() {
        let Rook = pieces.filter((element) => element.constructor.name == "rook" && element.couleur == this.couleur)
        let listcoups = []
        if (this.AlreadyMoove == false && Rook.length != 0) {
            if (/\brook\b/i.test(Plateau[Rook[0].cases[0]][Rook[0].cases[1]].innerHTML) && Rook[0].AlreadyMoove == false && Plateau[5][7 * ((this.couleur + 1) / 2)].innerHTML == "" && Plateau[6][7 * ((this.couleur + 1) / 2)].innerHTML == "") {
                listcoups.push([6, 7 * ((this.couleur + 1) / 2)])
            }
            if (/\brook\b/i.test(Plateau[Rook[1].cases[0]][Rook[0].cases[1]].innerHTML) && Rook[1].AlreadyMoove == false && Plateau[1][7 * ((this.couleur + 1) / 2)].innerHTML == "" && Plateau[2][7 * ((this.couleur + 1) / 2)].innerHTML == "" && Plateau[3][7 * ((this.couleur + 1) / 2)].innerHTML == "") {
                listcoups.push([2, 7 * ((this.couleur + 1) / 2)])
            }
        }
        return listcoups
    }
}

class queen extends piece {
    constructor(couleur, cases) {
        super(couleur, cases)
        if (this.couleur == -1) {
            this.html.src = "./images/black-queen.svg"
        } else {
            this.html.src = "./images/white-queen.svg"
        }
    }
    CanMoove() {
        let a = this.MooveBishop().concat(this.MooveRook())
        return a
    }
}