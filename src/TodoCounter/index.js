import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
  return (
    <h1 className="TodoCounter"> Hola!  EDWIN ALEXANDER ZAPATA, Bienvenido a tu recordatorio de tareas,
      Has completado : <span>{completedTodos}</span> de : <span>{totalTodos}</span> TAREAS
    </h1>
  );
}

export { TodoCounter };
