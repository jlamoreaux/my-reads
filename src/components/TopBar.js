import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';

const TopBar = (props) => {
  return (
    <div className="top-bar">
      <Link to="/" className="back-button">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-icon"
          onClick={() => props.updateQuery('')}
        />
      </Link>
      <Search
        updateQuery={props.updateQuery}
        placeholder="Search by title or author..."
        query={props.query}
      />
    </div>
  );
};

export default TopBar;
