import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import './App.css';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setsearchValue,
    filteredTodos,
    completeTodo,
    deleteTodo,
}) {
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
                {loading && <TodosLoading/>}
                {error &&  <TodosError/>}
                {(!loading && filteredTodos.length === 0) && <TodosEmpty/>}

                {filteredTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onCompleted={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
        /* </div> */
    );
}

export { AppUI };