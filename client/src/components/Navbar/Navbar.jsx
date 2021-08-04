import React from 'react'
import { NavLink } from "react-router-dom"

// export default function Navbar() {
//   return (
//     <div>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/categories">Categories</NavLink>
//       <NavLink to="/sign-in">Sign In</NavLink>
//       <NavLink to="/sign-out">Sign Out</NavLink>
//       <NavLink to="/sign-up">Sign Up</NavLink>
//     </div>
//   )
// }



const userTrue = (
  <>
    {/* <NavLink className="link" to="/add-product">Add Product</NavLink> */}
    <NavLink className="link" to="/sign-out">Sign Out</NavLink>
  </>
)
const userFalse = (
  <>
    <NavLink className="link" to="/sign-up">Sign Up</NavLink>
    <NavLink className="link" to="/sign-in">Sign In</NavLink>
  </>
)
const Navbar = ({ user }) => {
  return (
    <nav>
      <div>
        <NavLink to="/">FORUMTOPIA</NavLink>
        <div>
          {user && <div>Hi, {user.username}!</div>}
          {user ? userTrue : userFalse}
        </div>
      </div>
    </nav>
  )
}
export default Navbar