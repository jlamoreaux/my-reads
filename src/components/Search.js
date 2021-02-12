import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
  const searchInput = useRef();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  
  let urlQuery = useQuery();
  
  const handleSearch = () => {
    props.updateQuery(searchInput.current.value);
    console.log(searchInput.current.value);
  }
  
  return (
    <form className="search-form" action="/search">
      <label htmlFor="search" className="search-label label-hidden">
        Search
      </label>
      <input
        ref={searchInput}
        type="text"
        className="search-input"
        name="search"
        id="search-input"
        placeholder={props.placeholder}
        onChange={() => handleSearch()}
        value={urlQuery.get('search') || props.query}
      ></input>
      <button
        type="submit"
        className="search-button"
        id="search-button"
        onSubmit={() => handleSearch()}
      >
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </button>
    </form>
  );
}

export default Search