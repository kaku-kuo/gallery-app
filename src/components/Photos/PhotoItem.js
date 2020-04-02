import React from 'react';
import PropTypes from 'prop-types';


const PhotoItem = ({photo:{urls,user,likes}}) => {

    
    return (
        <div className="eachPhoto">
            <img className="profileImage" src={user.profile_image.small} alt="Avatar"/>
            <span className="profileName">{user.name.replace(/\s/g, '')}</span>
            <img className="mainPhoto" src={urls.regular} alt='photos'/>
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="far fa-paper-plane"></i>
            <p className="likes"><strong>{likes}</strong> Likes</p>
        </div>
    )
}

PhotoItem.propTypes = {
   photo:PropTypes.object.isRequired
 }
export default PhotoItem;