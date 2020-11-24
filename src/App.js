import { React, Component } from 'react';

import Sidebar from './Sidebar';
import Shelves from './Shelves';
import './scss/main.css';

import * as BooksAPI from './utils/BooksAPI';



class App extends Component {
  state = {
    categories: [],
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      let categories = [];
      books.forEach(book => {
        if (!categories.some(shelf => shelf === book.shelf)) {
          categories.push(book.shelf);
        }
      })
      this.setState(() => ({ books, categories }));
    })
  }
  render() {
    return (
      <div className="app">
        <Sidebar
          categories={this.state.categories}
        />
        <Shelves
          categories={this.state.categories}
          books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
