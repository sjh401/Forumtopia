import React from 'react'
import { Link } from 'react-router-dom'
import "./Mobile.css"

export default function MainNavBar(props) {
  return (
        <div className = "menu">
          <div>
            <nav>
              <div className = "name">
              <Link to="/">Forumtopia</Link>
              </div>
              <div className="space">
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
                {/* <Link to ="/Newpost">Create a post</Link> */}
              </div>
            </nav>
            </div>
          </div>
        )
}
