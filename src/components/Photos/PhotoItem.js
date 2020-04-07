import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import GalleryContext from '../../context/galleryContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';


const PhotoItem = ({photo:{urls,user,likes,location}}) => {
const galleryContext = useContext(GalleryContext);

const {setLocation,showLocation} = galleryContext;

const onClick = () => {
    setLocation();
}   
    return (
       
        <div className="eachPhoto">
            <Link to={`/photoGrapher/${user.username}`}><img className="profileImage" src={user.profile_image.small} alt="Avatar"/></Link>
            <Link to={`/photoGrapher/${user.username}`}><span className="profileName">{user.username}</span></Link>
            <img onClick={onClick} className="mainPhoto" src={urls.regular} alt='photos'/>
            <FontAwesomeIcon icon={['far', 'heart']}/>
            <FontAwesomeIcon icon={['far', 'comment']}/>
            <FontAwesomeIcon icon={['far','paper-plane']}/>
            <p className="likes"><strong>{likes}</strong> Likes</p>
           <div className="onbubble"> 
            {!showLocation && 
            <div className="speech-bubble">
                {location.name ? location.name :'Somewhere...'}
            </div>}
           </div>
        </div>
        
    )
}

PhotoItem.propTypes = {
   photo:PropTypes.object.isRequired
 }
export default PhotoItem;