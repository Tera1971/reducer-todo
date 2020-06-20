import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';
import TodoList from './TodoList'

const TodoForm = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTask, setNewTask] = useState('');

    const handleChanges = e => {
        setNewTask(e.target.value);
    };

    const toggle = (task) => {
        dispatch({type: 'TOGGLE_COMPLETED', payload: task})
        console.log('Toggle Happened')
    };
    const onSubmit = e => {
        e.preventDefault()
        dispatch({type: 'ADD_TODO', payload: newTask})
        setNewTask('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
            <input
                type='text'
                name='task'
                value={newTask}
                onChange={handleChanges}

             />
                <button>Add Task</button>
                </form>    
                <button onClick={() => (dispatch({type: 'CLEAR_COMPLETED'}))} >Clear Complete</button>
                <TodoList
                state={state}
                toggle={toggle}
                />
            
        </div>
    )
}
    



export default TodoForm;
