import { useEffect, useState } from 'react'
import { getCategories } from "../../services/category"
import { getThreads } from "../../services/thread"
import { Link, useParams } from "react-router-dom"

export default function CategoryThread() {
  const [categories, setCategories] = useState([])
  const [threads, setThreads] = useState([])

  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fetchThreads = async () => {
      let data = await getThreads(id)
      setThreads(data)
    }
    fetchThreads()
  }, [id])

  useEffect(() => {
    const fetchCategories = async () => {
      let data = await getCategories()
      setCategories(data)
    }
    fetchCategories()
  }, [])
  return (
    <div>
      {categories.map((category) => {
        return (
          <div>
            <Link to={`/categories/${id}/threads`}>
              {category.title}
              <br />
              <img src={category.imgUrl} alt={category.title} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
