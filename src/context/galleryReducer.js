import {SEARCH_PHOTOS,SET_LOADING} from './type'

export default (state,action) => {

   switch(action.type){
    case SEARCH_PHOTOS:
      return {
         ...state,
         photos:action.payload,
         loading:false
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
   