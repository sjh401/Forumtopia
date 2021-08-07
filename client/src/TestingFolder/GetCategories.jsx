import { useState, useEffect } from 'react'
import { getCategories } from "../services/category"
import { Link } from "react-router-dom"

export default function GetCategories(props) {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    const fetchCategories = async () => {
      let data = await getCategories()
      // console.log(data)
      setCategories(data)
    }
    fetchCategories()
  }, [])
  return (
    <div user={props.user}>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            {/* {console.log(category._id)} */}
            <br />
            <br />
            <Link to={`categories/${category._id}/threads`}>
              {category.title}
            </Link>
            <br />
            <img src={category.imgUrl} alt="pic" />
            <br />
            <br />
            {category.body}
          </div>
        )
      })}
    </div>
  )
}
