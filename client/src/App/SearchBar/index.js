import React from 'react';
import { render } from 'react-dom';

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <div className='container'>
        <span>Search Articles</span>
        <form onSubmit={props.handleSubmit}>
          <input className='search-field' type='text' />
        </form>
      </div>
    </div>
  )
};

export default SearchBar;
