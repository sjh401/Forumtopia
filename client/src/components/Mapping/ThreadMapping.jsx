import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getThreads } from '../../services/thread'
import { useParams } from "react-router-dom"

export default function ThreadMapping(props) {
  // const [threads, setThreads] = useState([])
  // might be a bad idea
  const [threads, setThreads] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const fetchThreads = async () => {
      let data = await getThreads(id);
      console.log(data)
      setThreads(data)
    }
    fetchThreads()

  }, [id])
  console.log(threads)
  console.log(props.user)
  // const displayEditLink = (thread) => {
  //   if (thread.userId._id === props.user?.id) {
  //     return <Link to={`/thread-edit/${thread._id}`} style={{ color: "blue" }}>Edit</Link>
  //   }
  // }
    return (
      // <div className="threads-home">
      //   {threads.map(thread => (
      //     <div key={thread._id} >
      //       <h4>{thread.title}</h4>
      //       <Link to={`/threads/${thread._id}`} ><img style={{ width: "100px", height: "100px" }} src={thread.imgUrl} alt="cat" /></Link>
      //       <p>{thread.body}</p>
      //       {/* {displayEditLink(thread)} */}
      //     </div>
      //   ))}

      // </div>
      <></>
    )
  }

