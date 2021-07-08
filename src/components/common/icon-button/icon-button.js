import React from 'react';
import { PropTypes } from 'prop-types';
import './icon-button.scss'

function IconButton(props){
    const {icon,url,btnName}=props;
    return(
        <button className="icon-button" onClick={()=>alert('login with '+ btnName)}>
            <img src={icon}/>
            {btnName}
        </button>
    )
}
IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    url: PropTypes.string,
    btnName: PropTypes.string.isRequired,
};
export default IconButton;