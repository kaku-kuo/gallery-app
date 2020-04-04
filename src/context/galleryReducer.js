import {SEARCH_PHOTOS,SEARCH_USER,GET_USER_PHOTOS,SET_LOADING,SET_LOCATION} from './type'

export default (state,action) => {

   switch(action.type){
    case SEARCH_PHOTOS:
      return {
         ...state,
         photos:action.payload,
         loading:false
      }
    case SEARCH_USER:
      return {
        ...state,
        user:action.payload,
        loading:false
      }
    case GET_USER_PHOTOS:
      return {
        ...state,
        userPhotos:action.payload,
        loading:false
      }    
    case SET_LOCATION:
      return {
        ...state,
        showLocation:!state.showLocation
      }
    case SET_LOADING:
        return {
        ...state,
        loading:true
       }    
    default:
      return state;
  }
} 
   