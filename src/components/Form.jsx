import React from 'react'
import PropTypes from 'prop-types';
import '../css/form.css';

const Form = props => {
    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(value !== '') {
            props.addTaskFn(value)
            setValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input is-info"
                placeholder="Agrega una tarea"
                onChange={handleChange}
                value={value}
            />
            <button 
                className="button is-info is-outlined"
            >
                Agregar
            </button>
        </form>
    );
};

Form.propTypes = {
    addTaskFn: PropTypes.func.isRequired
}

export default Form;