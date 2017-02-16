import React from 'react';
import { render } from 'react-dom';

const Form = (props) => {
  return (
    <form className='search-form' onSubmit={props.handleSubmit}>
      <input className='search-field' type='text' />
    </form>
  )
};

export default Form;
