import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserPhotos = ({userPhoto:{urls,likes}}) => {
    const [photo,setPhoto] = useState(false);

   
    const onMouseOver = () =>{
         setPhoto(true)
    }
    const onMouseLeave = () => {
        setPhoto(false)
    }
    return (  
         <div className="top">  
            <a onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} href={urls.regular}>
               <img className="userPhoto" src={urls.regular} alt="userP"/>
              
               {photo && <div className="photolikes"><FontAwesomeIcon className="likesIcon" icon={['fas', 'heart']}/>{likes}</div>}
                
            </a>
         </div>
    )
}

export default UserPhotos;
