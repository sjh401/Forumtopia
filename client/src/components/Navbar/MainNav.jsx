import React from 'react'
import {Link}from "react-router-dom"
import "./Mobile.css"

export default function MainNav() {
    return (
        <div className = "menu">
            <div>
        <nav>
          <div className = "name">
          <Link to="/">Forumtopia</Link>
          </div>
      
      <div className="space">
          <Link to="/Signin">Signin</Link>
      <Link to="/Signup">Signup</Link>
      <Link to ="/Newpost">Create a post</Link>
      </div>
      
      </nav>
        </div>
        </div>
    )
}
