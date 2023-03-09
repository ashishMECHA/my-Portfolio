import React from 'react'
import './Projects.scss'
import NavBar from '../navbar/NavBar'
import ProjectCard from './ProjectCard.js'
import {projects} from './utils.js'
import Footer from '../footer/Footer'





const Projects=()=> {
  return (
<div className='wrapp'>
<NavBar/>
<h1 className="heading">PROJECTS</h1>
    <div className="container">
  <div className="row">
{projects.map((project,i)=>(
 <ProjectCard {...project} key={i}/> 
  )
)}
  </div>
</div>
<Footer/>
</div>
  )
}
export default Projects;
