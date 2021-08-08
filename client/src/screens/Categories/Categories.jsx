import React from 'react'
import { Link } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import "./Categories.css"


export default function Categories(props) {
  return (
    <Layout user={props.user}>
      <div className="ban"></div>
      <span></span>
      <div className="list">
      <Link to="/threads-gaming">Gaming</Link>
      <Link to="/threads-comic">Comics</Link>
      <Link to ="/threads-movies">Movies</Link>
      <Link to ="/threads-sports">Sports</Link>
      </div>
      
    </Layout>
  )
}
