import {React, useState,useEffect} from 'react';
import './NavBar.css'
import { Link } from "react-router-dom";
import {HiHome} from 'react-icons/hi';
import {FaUserTie} from 'react-icons/fa';
import {BsLaptopFill} from 'react-icons/bs';
import {BsFillFileEarmarkSpreadsheetFill} from 'react-icons/bs';
import {FaUser} from "react-icons/fa";
import {BiGitRepoForked} from 'react-icons/bi'





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
        <Link to="/" className='navbar__item'><HiHome/>Home</Link>
        <Link to="/about" className='navbar__item'><FaUserTie/>About</Link>
        <Link to="/projects" className='navbar__item'><BsLaptopFill/>Projects</Link>
        <Link to="/resume" className='navbar__item'><BsFillFileEarmarkSpreadsheetFill/>Resume</Link>
          <a href="#contact" className='navbar__item'><FaUser/>Contact</a>
        <Link to="https://github.com/ashishMECHA/my-portfolio" className='navbar__item'><div className='icon5'><BiGitRepoForked/></div></Link>
                
    </div>
    </section>
    </nav>
    
    </>
    
  )
}
