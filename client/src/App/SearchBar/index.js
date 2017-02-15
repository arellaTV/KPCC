import React from 'react';
import { render } from 'react-dom';

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <span>Search Articles</span>
      <form onSubmit={props.handleSubmit}>
        <input type='text' />
        <input type='submit'/>
      </form>
    </div>
  )
};

export default SearchBar;
