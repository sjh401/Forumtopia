import { useState } from 'react'
import { createPost } from '../services/post'
import { useParams } from "react-router-dom"

export default function MakePost(props) {
  const { pid } = useParams()
  const [input, setInput] = useState({ body: "", imgUrl: "", threadId: pid })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({
      ...input,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createPost(pid, input)
    props.setToggle((prevToggle) => !prevToggle)
    setInput({ body: "", imgUrl: "", threadId: pid })
  }

  return (
    <>

      <div className="post-form" user={props.user}>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            className="create-form-input"
            placeholder='post text'
            value={input.body}
            name='body'
            onChange={handleChange}
          />
          <input
            className="create-form-input"
            placeholder='image url'
            value={input.imgUrl}
            name='imgUrl'
            onChange={handleChange}
          />
          <button className="create-form-button">Submit</button>
        </form>
      </div>
    </>
  )
}
