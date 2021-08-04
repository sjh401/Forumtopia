import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer>
      Created by:
      Araceli Sanchez<a href="https://github.com/CyberCeli" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="git" /></a>
      <a href="https://linkedin.com/in/araceli-sanchez-015239217" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="Linkedin" /></a>,
      Ashley Sands<a href="https://github.com/asands94" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="git" /></a>
      <a href="https://linkedin.com/in/ashley-sands" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="Linkedin" /></a>,
      Caleb Lee<a href="https://github.com/cleebot" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="git" /></a>
      <a href="https://linkedin.com/in/caleblee92" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="Linkedin" /></a>,
      Stephen Harrity<a href="https://github.com/sjh401" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="git" /></a>
      <a href="https://linkedin.com/in/harritystephen" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="Linkedin" /></a>,
      Timothy Lundy<a href="https://github.com/Shinji-exe" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="git" /></a>
      <a href="https://linkedin.com/in/timothy-lundy-a229421b3" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="Linkedin" /></a>
    </footer>
  )
}
