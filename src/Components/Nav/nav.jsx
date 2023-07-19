import React from 'react'
import title from '../../Assests/wordmark_light.png'
import './nav.css'


const Nav = () => {
  return (

   <>
    <div className='navbar'>
    <div className='navbar_container'>
        <div className='title_logo'>
        <div className='innovate_us'>
            <span className='innovate'><b>innovate</b></span>
            <span className='us'>(us)</span>
            </div>
        </div>
        <div className='menu_options'>
        <nav>
            <a href='#'>Workshops</a>
            <a href='#'>About us</a>
        </nav>
        </div>
        </div>
    </div>
   </>
  )
}

export default Nav