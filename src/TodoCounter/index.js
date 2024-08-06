import React from 'react';
import './TodoCounter.css'; // Importamos el archivo de estilos
import { TodoContext } from '../TodoContext';

function TodoCounter({ total, completed }) {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h1 className='TodoCounter'> 
      Has completado {completedTodos} de {totalTodos} TODOs
    </h1>
  );
}

export { TodoCounter }; // Exportamos el componente para poder utilizarlo en otros archivos
