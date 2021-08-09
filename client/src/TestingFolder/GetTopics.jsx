import { useState, useEffect } from 'react'
import { getTopics } from "../services/topic"
// import Layout from "../components/Layout/Layout"
// import { Link } from "react-router-dom"
import Loading from './Loading'
import TopicCard from "./TopicCard"
import "./Topic.css"

export default function GetTopics(props) {
  const [topics, setTopics] = useState([])


  useEffect(() => {
    const fetchTopics = async () => {
      let data = await getTopics()
      setTopics(data)
    }
    fetchTopics()
  }, [])

  if (!topics.length) {
    return <Loading />
  }

  const TopicCards = topics
    .map((topic, index) =>
      index < 50 ? (
        <TopicCard user={props.user} key={index} topic={topic} />
      ) : null
    )

  return (
    <div>
      <div className="group-topic" user={props.user}>
        {/* {topics.reverse().map((topic, index) => {
        return (
          <div key={index}>
            <br />
            <br />
            <Link to={`/topics/${topic._id}/threads`}>
              {topic.title}
            </Link>
            <br />
            <img src={topic.imgUrl} alt="pic" />
            <br />
            <br />
            {topic.body}
          </div>
        )
      })} */}
        <>{TopicCards}</>
      </div>
    </div>
  )
}
