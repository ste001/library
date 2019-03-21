const book1 = new Book("Informatica Teorica", "D.Mandrioli", 241, true)
const book2 = new Book("Fisica Generale", "S.Longhi", 383, true)
const book3 = new Book("The Promised Neverland 8", "Kaiu Shirai", 150, false)
const book4 = new Book("Mezzi di trasmissione", "F.Morichetti", 250, true)
const book5 = new Book("Basi di Dati", "P.Atzeni", 500, true)
//const book6 = new Book("Internet e Reti", "D.Musumeci", 345, false)

let myLibrary = [book1, book2, book3, book4, book5]

render()
initializeButton()

function Book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
    this.info = function(){
        if (this.read) {
            return this.title + " by " + this.author + ", " + this.pages
                    + " pages, read."
        }
        return this.title + " by " + this.author + ", " + this.pages
                + " pages, not read yet."
    }
}

function addBookToLibrary() {
    let title = prompt("Insert the title of the book")
    let author = prompt("Insert the author of the book")
    let pages = prompt("How many pages does the book have?")
    let read = prompt("Did you read the book?").toLowerCase()
    read = (read === "yes" || read === "y") ? true : false
    // Create a new book and add it to the library
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
    render()
}

function render(){
    clear()
    myLibrary.forEach(book => {
        const card = document.createElement("div")
        let readAttribute = (book.read) ? "Read" : "Not read yet"
        card.className = "grid-item"
        card.innerHTML = "<b>Title:</b> " + book.title + "<br><b>Author:</b> "
                        + book.author + "<br><b>Pages:</b> " + book.pages
                        + "<br><b>Status:</b> " + readAttribute
        const container = document.getElementById("container")
        container.appendChild(card)
    })
}

function clear(){
    const container = document.getElementById("container")
    while (container.childNodes.length != 0){
        container.removeChild(container.childNodes[0])
    }
}

function initializeButton(){
    button = document.getElementById("new-book").addEventListener("click", addBookToLibrary)
}