function Book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
    this.info = function(){
        if (read) {
            return this.title + " by " + this.author + ", " + this.pages
                    + " pages, read."
        }
        return this.title + " by " + this.author + ", " + this.pages
                + " pages, not read yet."
    }
}

const theHobbit = new Book("The Hobbit", "J.R.Tolkien", 295, false)

console.log(theHobbit.info());