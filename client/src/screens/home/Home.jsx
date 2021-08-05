import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getThreads } from '../../services/thread'
import "./Home.css"
import ThreadCard from './ThreadCard'
import { verify } from "../../services/user"



export default function HomeScreen(props) {
  const [threads, setThreads] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify())
    }
    verifyUser()
  }, [])

  useEffect(() => {
    const fetchThreads = async () => {
      let data = await getThreads();
      setThreads(data)
    }
    fetchThreads()
  }, [])


  return (
    <Layout>
      <h1 className="trend">Trending Now</h1>
      <div className="together">
        <div className="first">
          <div className="move">
            <h3>They Elon Musk's SpaceX launches 143 satellites on single rocket, sets world record.</h3>
          </div>
        </div>
        <div className="second">
          <h3>scarlett johansson sues Disney for breach of contract</h3>
        </div>
        <div className="third">
          <h3>Activision hit with another lawsuit as female employees are in a frenzy.</h3>
        </div>
        <div className="fourth">
          <h3>EA play show Dead Space. Could this be EA's big comeback</h3>
        </div>
      </div>
      <div className="threads-home">
        {threads.map((thread) => {
          return <ThreadCard key={thread._id} thread={thread} user={user} />
        })}
      </div>
    </Layout>

  )
}

