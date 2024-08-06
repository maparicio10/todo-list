import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const { setOpenModal, addTodo } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };


    return (
        <form onSubmit={ onSubmit }>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Texto del nuevo TODO" value={newTodoValue} onChange={onChange} />
            <div>
                <button className="TodoForm-button TodoForm-button--add" type='submit' onClick={onSubmit}>Agregar</button>
                <button className="TodoForm-button TodoForm-button--cancel" type='submit' onClick={onCancel}>Cancelar</button>
            </div>
        </form>
    );
}

export { TodoForm };