import {React, useState,useEffect} from 'react';
import './NavBar.css'
import { Link } from "react-router-dom";
import 'boxicons'




export default function NavBar() {

  const [show, setShow] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll", scrollHandler);
    return ()=>{
      window.removeEventListener("scroll", scrollHandler);
    }
  },[])
  

  









  return (
    <>
    <nav className={show ? "sticky" : "transparent-nav"}>
          <section>
          <div className='navbar__title'><box-icon name='mailchimp' color='#fff' type='logo' size='40px' animation='tada' ></box-icon></div>
    <div className='navbar'>
        <Link to="/" className='navbar__item'><div className='icon'><box-icon  name='home' color='#fff' type='solid'></box-icon></div>Home</Link>
        <Link to="/" className='navbar__item'><div className='icon'><box-icon  type='solid' color='#fff' name='user'></box-icon></div>About</Link>
        <Link to="/projects" className='navbar__item'><div className='icon3'><box-icon name='laptop' color='#fff'></box-icon></div>Projects</Link>
        <Link to="/" className='navbar__item'><div className='icon4'><box-icon  name='spreadsheet' color='#fff' type='solid' size='20px'></box-icon></div>Resume</Link>
        <Link to="/" className='navbar__item'><div className='icon'><box-icon  type='solid' color='#fff' name='user'></box-icon></div>Contact</Link>
        <Link to="/" className='navbar__item'><div className='icon5'><box-icon name='git-repo-forked' color='#fff' size='15px' animation='burst-hover'></box-icon></div></Link>
                
    </div>
    </section>
    </nav>
    
    </>
    
  )
}
