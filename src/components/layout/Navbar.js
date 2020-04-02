import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar bg-primary text-white'>
            <Link className='navbar-brand text-white' to='/'><h1><i className="fas fa-camera-retro mr-2"></i>Gallery App</h1></Link>
            <ul className='my-0'>
             <li className='about'>
               <Link className='navbar-brand text-white' to='/about'>About</Link>
             </li>  
            </ul>
          
        </div>
    )
}


export default Navbar;