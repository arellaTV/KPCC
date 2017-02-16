import React from 'react';
import { render } from 'react-dom';
// import Form from './Form';

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <div className='container'>
        <span>Search Articles</span>
        <form className='search-form' onSubmit={props.handleSubmit}>
          <input className='search-field' type='text' />
        </form>
      </div>
    </div>
  )
};

export default SearchBar;
