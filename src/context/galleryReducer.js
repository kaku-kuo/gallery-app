import {SEARCH_PHOTOS,SET_LOADING,SET_LOCATION} from './type'

export default (state,action) => {

   switch(action.type){
    case SEARCH_PHOTOS:
      return {
         ...state,
         photos:action.payload,
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
   