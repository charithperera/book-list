export function selectBook(book) {
  // console.log('A book has been selected', book.title);
  // SelectBookis an actioncreator, so it must return an action,
  // that's an object with a type property
  return {
    type: 'BOOK_SELECTED'
  };
}
