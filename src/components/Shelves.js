import { useState } from 'react';

import Shelf from './Shelf';

const Shelves = (props) => {
  const [currentMenu, setCurrentMenu] = useState('');

  const handleOpenMenu = (id) => {
    if (currentMenu === id) {
      setCurrentMenu('');
    } else {
      setCurrentMenu(id);
    }
  };

  const handleShelfChange = (book, shelf) => {
    props.handleShelfChange(book, shelf);
  };
  
  if (props.currentShelf) {
    const shelf = props.currentShelf;
    return (
      <div className="shelves">
        <Shelf
          shelf={shelf}
          isCurrent={shelf === props.currentShelf}
          books={props.books.filter((book) => book.shelf === shelf)}
          key={shelf}
          handleOpenMenu={handleOpenMenu}
          shelves={props.shelves}
          handleShelfChange={handleShelfChange}
        />
      </div>
    );
  } else {
    return (
      <div className="shelves">
        {props.shelves.map((shelf) => (
          <Shelf
            shelves={props.shelves}
            shelf={shelf}
            currentMenu={currentMenu}
            handleOpenMenu={handleOpenMenu}
            isCurrent={shelf === props.currentShelf}
            books={props.books.filter((book) => book.shelf === shelf)}
            key={shelf}
            handleShelfChange={handleShelfChange}
          />
        ))}
      </div>
    );
  }
}

export default Shelves;