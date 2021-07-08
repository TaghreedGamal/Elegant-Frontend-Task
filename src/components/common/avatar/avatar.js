import React from 'react'
import PropTypes from 'prop-types';

function Avatar(props) {
    const {img}=props
    return (
        <div className="avatar">
            <img alt="avatar-img" src={img}/>
        </div>
    )
}
Avatar.propTypes = {
    img: PropTypes.string.isRequired,
};
export default Avatar
