import React,{useState,useContext} from 'react';
import GalleryContext from '../../context/galleryContext';


const Search = () => {

const galleryContext = useContext(GalleryContext);

const {searchPhotos} = galleryContext;

const [text, setText] = useState('');    


const onSubmit = e => {
    e.preventDefault();
   if(text === ''){
       console.log('Please enter something...');
   }else{
      searchPhotos(text);
      setText('');
   }
}


 

const onChange = e => setText(e.target.value);
   
    return (
        <div className="container-fluid searchbar">
           <form  onSubmit={onSubmit} className='form-group'>  
              <input onChange={onChange} className='form-control' type='text' name='text' value={text} placeholder='Search for beautiful photos'/> 
           </form> 
        </div>
    )
}

export default Search;   