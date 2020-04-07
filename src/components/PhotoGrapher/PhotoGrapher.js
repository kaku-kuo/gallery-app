import React,{useContext,useEffect} from 'react'
import Spinner from '../layout/Spinner';
import UserPhotos from '../Photos/UserPhotos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GalleryContext from '../../context/galleryContext';


const PhotoGrapher = ({match}) => {
const galleryContext = useContext(GalleryContext);
const {searchUser,getUserPhotos,userPhotos,user,loading} = galleryContext;
const {profile_image,name,total_photos,location,bio} = user;

useEffect(() => {
   searchUser(match.params.username);
   getUserPhotos(match.params.username);
   // eslint-disable-next-line
},[])

if(loading) return <Spinner/>
  
    return (
       <div>
        <div className="detailInformation">
            {!profile_image ?
             <img alt="empty"/> : 
             <img className="profile-img" src={profile_image.large} alt="profile-img"
             />}
            <h5 className="detailName">{name}</h5>
           <div className="photoLocation">
              <span className="totalPhotos"><strong>{total_photos}</strong> Photos</span>
              <span className="photoGrapherLocation"><strong><FontAwesomeIcon className="mr-1" icon={['fas', 'map-marker-alt']}/></strong>
                {location ? location : "Somewhere..."}
              </span>
           </div> 
            <p className="bio">{bio ? bio : "Bio is empty"}</p>
        </div>
            <hr className="my-5"/>
             <div className="userPhotos">
               {userPhotos.map(userPhoto => (
                  <UserPhotos key={userPhoto.id} userPhoto={userPhoto} /> 
               ))}
            </div>
            <div className="container text-center text-muted my-5">
               Copyright 2020 KakuTech
            </div>
       </div> 
    )  

    
}


export default PhotoGrapher;