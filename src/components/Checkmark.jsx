import React from 'react'
import PropTypes from 'prop-types';

const Checkmark = props => {
    const { done, toggleFn }= props;
    return (
        <input
            type="checkbox"
            checked={done}
            onChange={toggleFn}
        />
    );
};

Checkmark.propTypes = {
    done: PropTypes.bool,
    toggleFn: PropTypes.func.isRequired
}

export default Checkmark;