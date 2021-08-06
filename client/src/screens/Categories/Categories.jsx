import React from 'react'
import { Link } from "react-router-dom"
import Layout from "../../components/Layout/Layout"

export default function Categories(props) {
  return (
    <Layout user={props.user}>
      <Link to="/threads-gaming">Gaming</Link>
      <Link to="/threads-comic">Comics</Link>
    </Layout>
  )
}
