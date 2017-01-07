import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          className="list-group-item"
          key={book.title}
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever gets return here will become props for book-list (ie this.props)
  return {
    books: state.books
  };
}

//anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
  // whenever selectbook is called the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// promote booklist from a Component to a conatiner. needs to know about new dispatch
// method, selectBook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
