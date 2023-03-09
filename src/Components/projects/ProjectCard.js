import React from 'react'
// import {BsGithub} from 'react-icons/bs'
// import {AiOutlineLink} from 'react-icons/ai'
import './Projects.scss'








const ProjectCard = ({title, image, ghLink, demoLink,techstack}) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-4 cont">
      <div className="bg-white">
        <img className="card-img-top" src={image} alt="project"/>
        <div className='techStack'>  
        <span className='techs'>{techstack?.[0]}</span>
        <span className='techs'>{techstack?.[1]}</span>
         <span className='techs'>{techstack?.[2]}</span>
        </div>
        <div className="card-body">
            <p className="title">{title}</p>
            <div className="icons">
            <a href={ghLink} target="_blank" rel="noreferrer">Github</a>
            <p>•</p>
            <a href={demoLink} target="_blank" rel="noreferrer">Live</a>  
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default ProjectCard


