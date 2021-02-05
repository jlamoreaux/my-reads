import { React, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Shelves from './components/Shelves';
import './scss/main.css';

import * as BooksAPI from './utils/BooksAPI';

const App = () => {
  const [shelves, setShelves] = useState([]);
  const [books, setBooks] = useState([]);
  const [currentShelf, setCurrentShelf] = useState('');

  const getData = async () => {
    const newBooks = await BooksAPI.getAll();
    let newShelves = [];
    await newBooks.forEach((book) => {
      if (!newShelves.some((shelf) => shelf === book.shelf)) {
        newShelves.push(book.shelf);
      }
    });
    setBooks(books => [...books, ...newBooks]);
    setShelves(newShelves);
  };

  const updateCurrentShelf = (shelf) => {
    setCurrentShelf(shelf);
  }

  const handleShelfChange = (book, shelf) => {
    const currentBooks = books;
    currentBooks.forEach(currentBook => {
      if (currentBook.id === book.id) {
        currentBook.shelf = shelf;
      }
    });

    setBooks([...currentBooks]);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!books || !shelves) {
    return (
      <h1>
        Loading...
      </h1>
    )
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <div className="app">
              <h1 className="app-title">My Reads</h1>
              <div className="main">
                <Sidebar
                  shelves={shelves}
                  currentShelf={currentShelf}
                  updateCurrentShelf={updateCurrentShelf}
                  />
                <Shelves
                  currentShelf={currentShelf}
                  shelves={shelves}
                  books={books}
                  handleShelfChange={handleShelfChange}
                  />
                </div>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
