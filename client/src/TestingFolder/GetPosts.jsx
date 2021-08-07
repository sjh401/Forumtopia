import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getPosts } from '../services/post'
import { Link } from "react-router-dom"

export default function GetPosts(props) {
  const [posts, setPosts] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchPosts = async () => {
      let data = await getPosts(id)
      console.log(data)
      setPosts(data)
    }
    fetchPosts()
  }, [id])


  return (
    <div user={props.user}>
      {posts[0]?.threadId.body}
      {posts.map((post, index) => {
        return (
          <div key={index}>
            {console.log(post)}
            <br />
            <div>

              {/* {post.threadId?.body} */}

              <br />
              {post.body}
            </div>
          </div>
        )

      })}
    </div>
  )
}
