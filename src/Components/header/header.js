import React from 'react'
import './header.css'
import Header2 from './header2'
import Type from './TyperWriter'



export default function Header() {
  return (
    <header>
            {/* <div className='header-inner-shadow'></div> */}
            
        <div>
            <div className='header-content'>
            <div className='left-header-content'>
               <span className='hi-there'>Hi There! 👋🏻</span>
               <span className='header-name'>I'M <span id='purple'>ASHISH THAKUR</span></span>
               <span id='header-skills'><Type/></span>
            </div>
            <div className='right-header-content'></div>
            </div>
            </div>
            <Header2/>
        </header>
  )
}
