import React from 'react';
import { PropTypes } from 'prop-types';
import './button.scss';

function Button(props){
    const {btnName,solid}=props;
    return(
        <button className={`btn  ${ solid ? "button solid" :"button"} `}>
            {btnName}
        </button>
    )
}
Button.propTypes = {
    btnName: PropTypes.string.isRequired,
    solid: PropTypes.bool,
};
export default Button;