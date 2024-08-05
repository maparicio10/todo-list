import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },  
//   { text: 'Llorar con la nona---', completed: true },  
//   { text: 'Llorar con la nona', completed: false },  
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue, setsearchValue] = React.useState('');
  // const [todos, setTodos] = React.useState(defaultTodos);
  const [todos, setTodos] = React.useState(parsedTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // setTodos(newTodos);
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    // setTodos(newTodos);
    saveTodos(newTodos);
  };

  return (
    // <div className="App">
    <React.Fragment>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setsearchValue={setsearchValue}
      />

      <TodoList>
        {filteredTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text} 
            completed={todo.completed} 
            onCompleted={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
    /* </div> */
  );
}

export default App;
