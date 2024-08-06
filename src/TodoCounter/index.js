import './TodoCounter.css'; // Importamos el archivo de estilos

function TodoCounter({ total, completed }) {
  // Recibimos las propiedades total y completed
//   const  estilos = {
//     // background: 'linear-gradient(90deg, #007bff, #6610f2)',
//     color: completed > total / 2 ? 'red' : 'green',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     padding: '48px',
//   };

  return (
    // <h1 style={estilos}> 
    <h1 className='TodoCounter'> 
      Has completado {completed} de {total} TODOs
    </h1>
  );
}

export { TodoCounter }; // Exportamos el componente para poder utilizarlo en otros archivos
