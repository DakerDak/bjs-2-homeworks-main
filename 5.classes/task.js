class PrintEditionItem
{
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type  = null;
}

  get state() {
    return this._state;
  }

  set state(value) {
    if (value >= 100) {this._state= 100;}
    else if(value <= 0) {this._state = 0;}
    else {this._state = value;}
  }
}


PrintEditionItem.prototype.fix = function () {
  this.state = this.state * 1.5;
}


class Magazine extends PrintEditionItem {
  type = "magazine";
}

class Book extends PrintEditionItem {
  type = "book";
  
  constructor(author, name, releaseDate, pagesCount) 
  {
    super(name, releaseDate, pagesCount);
    this.author = author;
  }
}

class NovelBook extends Book {
  type = "novel";
}

class FantasticBook extends Book {
  type = "fantastic";
}

class DetectiveBook extends Book {
  type = "detective";
}


// Задача 2. Библиотека

class Library 
{
  constructor(name) {
    this.name = name;
    this.books = new Array();
  }

  addBook(book)
  {
    if(book.state >= 30)
      this.books.push(book);
  }

  // Найти книгу
  findBookBy(type, value)
  {
      let book;
      this.books.forEach(element => {              
          if (element[type] == value) {
                book = element;
            }
      });    

    if(!book) book = null; // если не нашли книгу = null
    return book;
  }

  // Выдать книгу
  giveBookByName(bookName)
  {
    let index;
    let book;
    for(var i = 0; i < this.books.length; i++)
      if(this.books[i].name == bookName) 
      {
        index = i;
        book = this.books[i];
      }
    this.books.splice(index, 1);
    
    if(!book) book = null; // если не нашли книгу = null
    return book;
  }
}