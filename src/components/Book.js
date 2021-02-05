import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import BookMenu from './BookMenu';



const Book = (props) => {
  const book = props.book;
  const style = { backgroundImage: `url(${book.imageLinks.thumbnail}` };
  
  const handleOpenMenu = (id) => {
    props.handleOpenMenu(id); 
  }

  const handleShelfChange = (book, shelf) => {
    props.handleShelfChange(book, shelf);
  };
  
  return (
    <li className="book" key={book.title}>
      <div className="book-tn" style={style}></div>
      <span className="book-title">{book.title}</span>
      <button className="book-button" onClick={() => handleOpenMenu(book.id)}>
        <FontAwesomeIcon icon={faChevronCircleDown} className="circle-svg"/>
      </button>
      <BookMenu
        shelves={props.shelves}
        book={props.book}
        currentMenu={props.currentMenu}
        handleShelfChange={handleShelfChange}
      />
    </li>
  );
}

export default Book