import React ,{useReducer} from 'react';
import axios from 'axios';
import GalleryContext from './galleryContext';
import GalleryReducer from './galleryReducer';
import {SEARCH_PHOTOS,SET_LOADING,SET_LOCATION} from './type'


let key = 'p9ODOuMCQb-7jfZGumpd8S8sGqZDvK8a98Rca1B-6yE';


const GalleryState = props => {
  const initialState = {
        photos:[],
        loading:false,
        showLocation:true
    }

    const [state, dispatch] = useReducer(GalleryReducer, initialState);
 
    
    // Search photos
    const searchPhotos = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${key}&count=10&query=${text}`);
        dispatch({type:SEARCH_PHOTOS,payload:res.data});
    }
    // Set location
    const setLocation = () => {
        dispatch({type:SET_LOCATION}) 
    
    }
    // Loading
    const setLoading = () => {dispatch({type:SET_LOADING})}
    return(
        <GalleryContext.Provider
         value={{
            photos:state.photos,
            loading:state.loading,
            showLocation:state.showLocation,
            searchPhotos,
            setLocation
        
         }}
        >  
         {props.children}
        </GalleryContext.Provider>
    );
};

export default GalleryState;