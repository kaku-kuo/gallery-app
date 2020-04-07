import React,{useContext} from 'react';
import PhotoItem from '../Photos/PhotoItem';
import Spinner from '../layout/Spinner';
import GalleryContext from '../../context/galleryContext';

const Photos = () => {

const galleryContext = useContext(GalleryContext);
const {photos,loading} = galleryContext;

    if(loading){
      return <Spinner/>   
    }else{
        return (
        <div className='container-fluid'>
            {photos.map(photo => (
                <PhotoItem key={photo.id} photo={photo} /> 
            ))}       
        </div>
        )
    }
   
}



export default Photos