function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
}

function addBook(library, book) {
  if (book.genre === "fantasy") {
      return library.shelves.fantasy.unshift(book)
  }
  if (book.genre === "fiction") {
    return library.shelves.fiction.unshift(book)
  }
  if (book.genre === "nonFiction") {
    return library.shelves.nonFiction.unshift(book)
  }
}

function checkoutBook(library, book) {
  for (var i = 0; i < library.shelves.fiction.length; i++) {
    if (library.shelves.fiction[i].title.includes(book)) {
      library.shelves.fiction.splice(i, 1)
      return `You have now checked out ${book} from the Denver Public Library`
    }
    if (library.shelves.nonFiction[i].title.includes(book)) {
      library.shelves.nonFiction.splice(i, 1)
      return `You have now checked out ${book} from the Denver Public Library`
    }
    if (library.shelves.fantasy[i].title.includes(book)) {
      library.shelves.fantasy.splice(i, 1)
      return `You have now checked out ${book} from the Denver Public Library`
    }
  }
  return `Sorry, there are currently no copies of ${book} available at the Denver Public Library`
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
