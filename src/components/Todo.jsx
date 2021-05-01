import React from 'react'
import PropTypes from 'prop-types';
import Checkmark from './Checkmark';
import '../css/todo.css';


const Todo =({ done, title, toggleFn, deleteFn }) => {
    return (
        <li className={`todo list-item`}>
            <Checkmark 
                done={done}
                toggleFn={toggleFn}
            />
            <p className={`${done ? 'done' : ''}`}>{title}</p>
            <button 
                className="button is-small is-danger is-outlined"
                onClick={ e => deleteFn(e)}
            >
                Delete
            </button>
        </li>
    );
    
};


Todo.propTypes = {
    done: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    deleteFn: PropTypes.func.isRequired,
    toggleFn: PropTypes.func.isRequired
}
export default Todo;