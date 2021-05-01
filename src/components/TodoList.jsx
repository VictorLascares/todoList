import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import '../css/todoList.css';

const TodoList = props => {
    return (
        <ul className="card-content list-wrapper">
            {
                props.tasks.map((task,i) => 
                    <Todo 
                        key={i}
                        done={task.done}
                        title={task.title}
                        toggleFn={ev => props.toggleFn(ev,task.title)}
                        deleteFn={ev => props.deleteFn(ev,task.title)} 
                    />
                )
            }
        </ul>
    );
};

TodoList.propTypes = {
    tasks: PropTypes.array,
    deleteFn: PropTypes.func.isRequired,
    toggleFn: PropTypes.func.isRequired
}
TodoList.defaultProps = {
    tasks: []
}

export default TodoList;