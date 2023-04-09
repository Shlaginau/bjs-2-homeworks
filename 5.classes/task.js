class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }
  
  set state (state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
        this._state = 100;
    } else {
        this._state = state;
    }
  }
  
  get state() {
      return this._state;
    } 
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor (name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  }


  giveBookByName(bookName) {
    let giveBook = this.findBookBy('name', bookName);
    
    if (giveBook !== null) {
      this.books.splice(this.books.indexOf(bookName), 1);
      return giveBook;
    } else {
      return null;
    }
  }
}

class Student {
  constructor (name) {
    this.name = name;
    this.marks = {};
  }  
  
  addMark(markToAdd, subjectName) {
    if (markToAdd < 2 || markToAdd > 5) {
      return;
    }
  
    if (!this.marks.hasOwnProperty(subjectName)) {
    this.marks[subjectName] = [];
   } 
    
    this.marks[subjectName].push(markToAdd);
    return this.marks;
    }     


  getAverageBySubject(subjectName) {
    if (!this.marks.hasOwnProperty(subjectName)) {
      return 0;
     } 

    return this.marks[subjectName].reduce((acc, item) => acc + item, 0) / this.marks[subjectName].length;
  }


 getAverage() {
    return Object.keys(this.marks).reduce((acc, item) => acc += this.getAverageBySubject(item), 0) / Object.keys(this.marks).length;
  }
}