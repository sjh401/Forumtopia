import { useState } from 'react'
import { createThread } from '../services/thread'
import { useParams } from "react-router-dom"
import "./Thread.css"
// import MakePost from './MakePost'

export default function MakeThread(props) {
  const { id } = useParams()
  const [input, setInput] = useState({ title: "", body: "", imgUrl: "", topicId: id })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({
      ...input,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createThread(id, input)
    props.setToggle((prevToggle) => !prevToggle)
    setInput({ title: "", body: "", imgUrl: "", topicId: id })

  }

  return (
    <div className="thread-form" user={props.user}>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          className="create-form-input"
          placeholder='thread title'
          value={input.title}
          name='title'
          onChange={handleChange}
        />
        <input
          className="create-form-input"
          placeholder='thread text'
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
  )
}
