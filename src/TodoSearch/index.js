import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { searchValue, setsearchValue } = React.useContext(TodoContext);

    return (
      <input placeholder="Cortar cebolla"  className='TodoSearch'
      value={searchValue}
      onChange={
        (event) => {
          console.log(event.target);
          console.log(event.target.value);
          setsearchValue(event.target.value);
        }
      }
      />
    );
}

export { TodoSearch };