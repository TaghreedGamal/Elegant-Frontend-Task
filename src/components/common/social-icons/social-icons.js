import React from "react";
import { PropTypes } from 'prop-types';
import "./social-icons.scss";

function SocialIcons(props){
    const {position}=props;
    return(
        <div className="social-icons-container">
            { (position === "header") ?
                <>
                    <div className="icon">
                        <a target="_blank" href="https://www.facebook.com/"><img src="/facebook.png"/></a>
                    </div>
                    <div className="icon">
                        <a target="_blank" href="https://www.twitter.com/"><img src="/twitter.png"/></a>
                    </div>
                    <div className="icon">
                        <a target="_blank" href="https://www.instagram.com/"><img src="/instagram.png"/></a>
                    </div>
                    <div className="icon">
                        <a target="_blank" href="https://www.youtube.com/"><img src="/youtube.png"/></a>
                    </div>
                </>
                :
                <>
                    <div className="icon">
                        <a target="_blank" href="https://www.facebook.com/"><img src="/fb-colored.png"/></a>
                    </div>
                    <div className="icon">
                        <a target="_blank" href="https://www.twitter.com/"><img src="/tw-colored.png"/></a>
                    </div>
                    <div className="icon">
                        <a target="_blank" href="https://www.instagram.com/"><img src="/insta-colored.png"/></a>
                    </div>
                    <div className="icon">
                        <a target="_blank" href="https://www.youtube.com/"><img src="/youtube-colored.png"/></a>
                    </div>
                </>
            }
        </div>
    )
}
SocialIcons.propTypes = {
    position: PropTypes.string.isRequired,
};
export default SocialIcons;