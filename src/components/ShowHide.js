import React from 'react'
import PropTypes from 'prop-types'


const ShowHide = props => {
    return (
        <input
            type="checkbox"
            checked={props.show}
            onChange={e => props.toggleDone(!props.show)}
        />
    );
};

ShowHide.propTypes = {
    toggleDone: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
}

export default ShowHide;