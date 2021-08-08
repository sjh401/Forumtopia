import { useEffect, useState } from 'react'
import { getGeneralThreads } from '../services/thread'
import ThreadCard from "./ThreadCard"
import "./Thread.css"
import Loading from './Loading'

export default function GetGeneralThreads(props) {
  const [threads, setThreads] = useState([])
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchThreads = async () => {
      let data = await getGeneralThreads()
      setThreads(data)
    }
    fetchThreads()
  }, [toggle])

  if (!threads.length) {
    return <Loading />
  }
  console.log(threads)

  const generalCards = threads
    .map((thread, index) =>
      index < 50 ? (
        <ThreadCard setToggle={setToggle} user={props.user} key={index} thread={thread} />
      ) : null
    )
  return (
    <div className="thread-card">
      <h2>Latest Threads</h2>
      <>{generalCards.reverse()}</>

    </div>
  )
}
