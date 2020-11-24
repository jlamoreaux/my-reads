import { Component } from 'react';

import Shelf from './Shelf';


class Shelves extends Component {
  render() {
    const categories = this.props.categories
    const books = this.props.books
    return (
      <div className='shelves'>
        {categories.map(category => (
          <Shelf
            category={category}
            books={books.filter(book => book.shelf === category)}
            key={category}
          />
        ))}
      </div>
    )
  }
}

export default Shelves;