import { useState, useEffect } from 'react'
import { getPost, updatePost } from '../services/post'
import { useParams, Redirect } from 'react-router-dom'

export default function UpdatePost(props) {
  const { pid } = useParams()
  const [post, setPost] = useState({ body: "", imgUrl: "", threadId: pid })
  const [isUpdated, setUpdated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value,
    })
  }

  useEffect(() => {
    const fetchPost = async () => {
      let data = await getPost(pid)
      setPost(data)
    }
    fetchPost()
  }, [pid])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await updatePost(pid, post)
    setUpdated(updated)
  }

  console.log(post)

  if (isUpdated) {
    return <Redirect to={`/threads/${post.threadId}/posts`} />
  }

  return (
    <div className="post-form" user={props.user}>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          className='update-form-input'
          placeholder={post.body}
          value={post.body}
          name='body'
          onChange={handleChange}
        />
        <input
          className='update-form-input'
          placeholder={post.imgUrl}
          value={post.imgUrl}
          name='imgUrl'
          onChange={handleChange}
        />
        {console.log("AFTER", post)}
        <button className='update-form-button'>EDIT</button>
      </form>
    </div>
  )
}
