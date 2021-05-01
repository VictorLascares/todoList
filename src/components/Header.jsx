import React from 'react';
import PropTypes from 'prop-types';
import '../css/header.css';
import ShowHide from './ShowHide';

const Header = ({ counter , show, toggleDone }) => {
    return (
        <div className="card-header">
            <h1 className="card-header-title">
                Hay {counter} tareas
            </h1>
            <ShowHide
                show={show}
                toggleDone={toggleDone} 
            />
        </div>
    );
};

Header.propTypes = {
    counter: PropTypes.number.isRequired,
    toggleDone: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}
Header.defaultProps = {
    counter: 0
}

export default Header;
