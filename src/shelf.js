function shelfBook(book, shelf) {
  if (shelf.length < 3) {
      shelf.unshift(book)
  }
}

function unshelfBook(book, shelf) {
  return shelf.splice(i, 1)
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
