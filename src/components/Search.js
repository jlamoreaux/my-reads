import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
  const handleSearch = (e) => {
    const query = e.target.value;
    props.updateQuery(query);
  }
  return (
    <div className="search-bar">
      <Link to="/" className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} className="back-icon" onClick={(() => props.updateQuery(''))}/>
      </Link>
      <form className="search-form">
        <label htmlFor="search" className="search-label label-hidden">Search</label>
        <input type="text" className="search-input" name="search" id="search-input" placeholder="Search by author or title..." onChange={handleSearch}></input>
        <button type="submit" className="search-button" id="search-button" onSubmit={handleSearch}>
          <FontAwesomeIcon icon={faSearch} className="search-icon"/>
        </button>
      </form>
    </div>
  )
}

export default Search