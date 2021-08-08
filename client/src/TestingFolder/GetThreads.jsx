import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getThreads } from '../services/thread'
import ThreadCard from "./ThreadCard"
import Layout from "../components/Layout/Layout"
import "./Thread.css"
import MakeThread from './MakeThread'
import Loading from './Loading'

export default function GetThreads(props) {
  const [threads, setThreads] = useState([])
  const [toggle, setToggle] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    const fetchThreads = async () => {
      let data = await getThreads(id)
      setThreads(data)
    }
    fetchThreads()
  }, [id, toggle])

  if (!threads.length) {
    return <Loading />
  }

  const threadCards = threads
    .map((thread, index) =>
      index < 50 ? (
        <ThreadCard setToggle={setToggle} user={props.user} key={index} thread={thread} />
      ) : null
    )

  return (
    <Layout user={props.user}>
      <div className="thread-card">
        <MakeThread setToggle={setToggle} />
        <>{threadCards.reverse()}</>
        {/* {threads.map((thread, index) => {
          return (
            <ThreadCard setToggle={setToggle} user={props.user} key={index} thread={thread} />
          )
        })} */}
      </div>
    </Layout>
  )
}
