import { Component } from 'react';

class Shelf extends Component {
  render() {
    const books = this.props.books
    return (
      <section className='shelf'>
        <h2 className='shelf-heading'>
          {this.props.category}
        </h2>
        <ul className='book-list'>
          {books.map(book => (
            <li className='book-list-item' key={book.title}>
              <span className='book-title'>{book.title}</span>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Shelf