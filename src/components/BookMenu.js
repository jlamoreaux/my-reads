import React from 'react'

import {splitWord} from '../utils/Strings'

const BookMenu = (props) => {

  const book = props.book;

  const handleShelfChange = (shelf) => {
    if (book.shelf !== shelf) {
      props.handleShelfChange(book, shelf);
      props.handleOpenMenu();
    }
  }

  return (
    <div className={`book-menu${props.currentMenu === book.id ? ' open' : ''}`}>
      <h4 className="book-menu-header">Move to...</h4>
      <ul className="book-menu-list">
        {props.shelves.map((shelf) => {
          return (
            <li key={`book-menu-${shelf}`} className="book-menu-list-item">
              <button
                className="menu-button capitalize"
                disabled={book.shelf === shelf}
                onClick={() => handleShelfChange(shelf)}
              >
                {splitWord(shelf)}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BookMenu
