import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getThreads } from '../services/thread'
import { Link } from "react-router-dom"

export default function GetThreads(props) {
  const [threads, setThreads] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchThreads = async () => {
      let data = await getThreads(id)
      console.log(data)
      setThreads(data)
    }
    fetchThreads()
  }, [id])

  return (
    <div user={props.user}>
      {threads.map((thread, index) => {
        return (
          <div key={index}>
            {console.log(thread)}
            <br />
            <div>
              <Link to={`/threads/${thread._id}/posts`}>
                {thread.title}
              </Link>
              <br />
              {thread.body}
            </div>
          </div>
        )

      })}
    </div>
  )
}
