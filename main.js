function Books(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = this.hasRead;
    this.result = function() {
        return `${title} by ${author}, ${pages} pages, ${hasRead}`
    }
}

let reader1 = new Books('When Nices wept', 'Irvin Yalom', 360, 'still reading')
let reader2 = new Books('Rich Dad Poor Dad', 'Richard Kioysake', 350, 'have read')
let reader3 = new Books('How to win in any deal', 'Adam Grant', 300, 'have not read')

console.log(reader1.result())
console.log(reader2.result())
console.log(reader3.result())