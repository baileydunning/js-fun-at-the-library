function shelfBook(book, shelf) {
  if (shelf.length < 3) {
      shelf.unshift(book)
  }
}

var i

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title == book) {
      shelf.splice(i, 1)
    }
  }
  return shelf
}

var bookTitles = [];

function listTitles(shelf) {
  for (i = 0; i < shelf.length; i++) {
    bookTitles.push(shelf[i].title);
  }
  return bookTitles.join(', ')
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.includes(title)) {
      return true
    }
  }
  return false
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
