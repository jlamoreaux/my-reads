
import "./Book";
import Book from './Book';

const Shelf = (props) => {
  const books = props.books;
 
  const handleOpenMenu = (id) => {
    props.handleOpenMenu(id);
  };

  const handleShelfChange = (book, shelf) => {
    props.handleShelfChange(book, shelf);
  };
  return (
    <section className='shelf'>
      <h2 className='shelf-heading'>
        {props.shelf}
      </h2>
      <ul className='book-list'>
        {books.map(book => (
          <Book
            book={book}
            currentMenu={props.currentMenu}
            shelves={props.shelves}
            key={book.id}
            handleOpenMenu={handleOpenMenu}
            handleShelfChange={handleShelfChange}
          />
        ))}
      </ul>
    </section>
  )
}

export default Shelf