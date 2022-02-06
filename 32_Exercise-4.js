console.log("This is tutorial 32")
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

book_list = ["English", "Hindi", "Maths", "Science"];

class Library {
    constructor(bookList) {
        this.list = bookList;
        this.issuedBook = {};
    }

    getBookList() {
        this.list.forEach(element => {
            console.log(element);    
        });
    }

    issueBook(book, user) {
        // console.log(this.issuedBook[book]);
        if (this.issuedBook[book] == undefined) {
            this.issuedBook[book] = user;
            console.log(`${book} Issued to ${this.issuedBook[book]}.`);
        }
        else {
            console.log("This book is already issued!");
        }

    }

    returnBook(book) {
        delete this.issuedBook[book];
        console.log(`Returning ${book} book to library!`);
    }

    issuedBooks() {
        console.log(this.issuedBook);
    }
}

u1 = new Library(book_list);
console.log(u1);
u1.getBookList();
u1.issueBook("English", "Rohan");
u1.issueBook("English", "Rohan");
u1.issueBook("Hindi", "Rohan");
u1.returnBook("English");
u1.issueBook("English", "Wasif");
u1.issueBook("English", "Rohan");
u1.issuedBooks();
// u1.issueBook("English", "Wasif");