import { useState, useEffect } from 'react'
import { getThread, updateThread } from '../services/thread'
import { useParams, Redirect } from 'react-router-dom'

export default function UpdateThread(props) {
  const { id } = useParams()
  const [thread, setThread] = useState({ title: "", body: "", imgUrl: "", topicId: id })
  const [isUpdated, setUpdated] = useState(false)


  const handleChange = (event) => {
    const { name, value } = event.target
    setThread({
      ...thread,
      [name]: value,
    })
  }

  useEffect(() => {
    const fetchThread = async () => {
      let data = await getThread(id)
      setThread(data)
    }
    fetchThread()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await updateThread(id, thread)
    setUpdated(updated)
  }

  console.log(thread)

  if (isUpdated) {
    return <Redirect to={`/topics/${thread.topicId}/threads`} />
  }

  return (
    <div className="thread-form" user={props.user}>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          className='update-form-input'
          placeholder={thread.title}
          value={thread.title}
          name='title'
          onChange={handleChange}
        />
        <input
          className='update-form-input'
          placeholder={thread.body}
          value={thread.body}
          name='body'
          onChange={handleChange}
        />
        <input
          className='update-form-input'
          placeholder={thread.imgUrl}
          value={thread.imgUrl}
          name='imgUrl'
          onChange={handleChange}
        />
        {console.log("AFTER", thread)}
        <button className='update-form-button'>EDIT</button>
      </form>
    </div>
  )
}
