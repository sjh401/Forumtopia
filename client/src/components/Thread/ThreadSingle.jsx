import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getThreads } from '../../services/thread'

export default function ThreadSingle(props) {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    const fetchThreads = async () => {
      let data = await getThreads();
      console.log(data)
      setThreads(data)
    }
    fetchThreads()

  }, [])
  console.log(threads)
  console.log(props.user)
  const displayEditLink = (thread) => {
    if (thread.userId._id === props.user?.id) {
      return <Link to={`/thread-edit/${thread._id}`} style={{ color: "blue" }}>Edit</Link>
    }

    return (
      <div className="threads-home">
        {threads.map(thread => (
          <div key={thread._id} >
            <h4>{thread.title}</h4>
            <Link to={`/thread/${thread._id}`} ><img style={{ width: "100px", height: "100px" }} src={thread.imgUrl} alt="cat" /></Link>
            <p>{thread.body}</p>
            {displayEditLink(thread)}
          </div>
        ))}

      </div>
    )
  }
}
