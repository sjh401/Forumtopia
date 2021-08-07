import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getThreads } from '../services/thread'

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
      {threads.map((thread) => {
        return (
          <div>
            {console.log(thread)}
            <br />
            {thread.categoryId?._id &&
              <div>
                {thread.title}
                <br />
                {thread.body}
              </div>
            }
          </div>
        )

      })}
    </div>
  )
}
