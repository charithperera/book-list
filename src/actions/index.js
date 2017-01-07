export function selectBook(book) {
  // console.log('A book has been selected', book.title);
  // SelectBook is an action creator, so it must return an action,
  // that's an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
