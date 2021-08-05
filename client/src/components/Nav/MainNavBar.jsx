import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

export default function MainNavBar(props) {
  return (
    <div className="main-navbar-container">
      <div className="name">
        <Link className="navbar-links" to="/">Forumtopia</Link>
      </div>
      <div className="user-login-signup">
        <Link className="navbar-links" to="/sign-in">Sign In</Link>
        <Link className="navbar-links" to="/sign-up">Sign Up</Link>
      </div>
    </div>
  )
}
