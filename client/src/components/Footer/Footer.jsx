import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div>
      Created by:
      Araceli Sanchez<a href="https://github.com/CyberCeli" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="git" /></a>,
      Ashley Sands<a href="https://github.com/asands94" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="git" /></a>,
      Caleb Lee<a href="https://github.com/cleebot" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="git" /></a>,
      Stephen Harrity<a href="https://github.com/sjh401" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="git" /></a>,
      Timothy Lundy<a href="https://github.com/Shinji-exe" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="git" /></a>
    </div>
  )
}
