import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar bg-primary text-white'>
            <Link className='navbar-brand text-white galleryApp' to='/'><FontAwesomeIcon icon={['fab', 'instagram']}/><h1 className="navbarName">Gallery App</h1></Link>
            <ul className='my-0'>
             <li className='about'>
               <Link className='navbar-brand text-white' to='/about'>About</Link>
             </li>  
            </ul>
        </div>
    )
}


export default Navbar;