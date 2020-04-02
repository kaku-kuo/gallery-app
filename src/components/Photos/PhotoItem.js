import React,{useContext} from 'react';
import GalleryContext from '../../context/galleryContext';
import PropTypes from 'prop-types';


const PhotoItem = ({photo:{urls,user,likes,location}}) => {
const galleryContext = useContext(GalleryContext);

const {setLocation,showLocation} = galleryContext;

const onClick = () => {
    setLocation();
    console.log(showLocation)
    console.log(location.name);
}   
    return (
        <div className="eachPhoto">
            <img className="profileImage" src={user.profile_image.small} alt="Avatar"/>
            <span className="profileName">{user.name.replace(/\s/g, '')}</span>
            {!showLocation ? <span className="speech-bubble"><span className="locationName">{location.name ? location.name :'Somewhere...'}</span></span> : <span></span>
                
            }
            <img onClick={onClick} className="mainPhoto" src={urls.regular} alt='photos'/>
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