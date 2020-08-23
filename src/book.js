function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  }
}

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review)
  }
}

function calculatePageCount(title) {
  return pageCount = title.length * 20
}

var book;

function writeBook(title, mainCharacter, pageCount, genre) {
  return book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: title.length * 20,
    genre: "fantasy",
  }
}

function editBook(title) {
  return title.pageCount = title.pageCount * .75
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
