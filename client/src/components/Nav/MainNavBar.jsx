import React from 'react'
import { Link } from 'react-router-dom'
import "./Navs.css"

export default function MainNavBar(props) {
  return (
        <div className = "menu">
              <div className = "name">
              <Link to="/">Forumtopia</Link>
              </div>
              <div className="space">
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
              </div>
          </div>
        )
}
