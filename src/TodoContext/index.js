import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    // const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setsearchValue] = React.useState('');
    // const [todos, setTodos] = React.useState(defaultTodos);
    // const [todos, setTodos] = React.useState(parsedTodos);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    // console.log('Execute 1');
    // // console.log('Execute 2');
    // React.useEffect(() => {
    //   console.log('Execute 2');
    // }, [todos]);
    // console.log('Execute 3');


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
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setsearchValue,
            filteredTodos,
            completeTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };