import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setsearchValue }) {
  // const [searchValue, setsearchValue] = React.useState('');

    return (
      <input placeholder="Cortar cebolla"  className='TodoSearch'
      value={searchValue}
      onChange={
        // () => console.log('Hola')
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