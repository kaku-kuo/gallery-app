import React ,{useReducer} from 'react';
import axios from 'axios';
import GalleryContext from './galleryContext';
import GalleryReducer from './galleryReducer';
import {SEARCH_PHOTOS,SEARCH_USER,GET_USER_PHOTOS,SET_LOADING,SET_LOCATION} from './type'


let key = 'tEscdJTacKLUdc1YMTWTkWHcKAtgIchVhoi4swbHjw8';


const GalleryState = props => {
  const initialState = {
        photos:[],
        user:{},
        userPhotos:[],
        loading:false, 
        showLocation:true
    }

    const [state, dispatch] = useReducer(GalleryReducer, initialState);
 
    
    // Search photos
    const searchPhotos = async text => {
        setLoading();
        const res = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${key}&count=10&query=${text}`);
        dispatch({type:SEARCH_PHOTOS,payload:res.data});
    }
    // Search User
    const searchUser = async username => {
        setLoading();
        const res = await axios.get(`https://api.unsplash.com/users/${username}/?client_id=${key}`);
        dispatch({type:SEARCH_USER,payload:res.data});
    }
    // Get user photos
    const getUserPhotos = async username => {
        setLoading();
        const res = await axios.get(`https://api.unsplash.com/users/${username}/photos/?client_id=${key}&per_page=30`);
        dispatch({type:GET_USER_PHOTOS,payload:res.data});
       
    }
    // Set location
    const setLocation = () => dispatch({type:SET_LOCATION}) 
    
    
    // Loading
    const setLoading = () => dispatch({type:SET_LOADING})
    return(
        <GalleryContext.Provider
         value={{
            photos:state.photos,
            user:state.user,
            userPhotos:state.userPhotos,
            loading:state.loading,
            showLocation:state.showLocation,
            searchPhotos,
            searchUser,
            getUserPhotos,
            setLocation
        
         }}
        >  
         {props.children}
        </GalleryContext.Provider>
    );
};

export default GalleryState;