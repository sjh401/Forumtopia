import React from 'react'
import Layout from '../../components/Layout/Layout'
import GetGeneralThreads from '../../TestingFolder/GetGeneralThreads'
import GetTopics from '../../TestingFolder/GetTopics'
import Trending from "./Trending"

export default function Home(props) {
  return (
    <Layout user={props.user}>
      {/* <Trending /> */}
      <GetTopics />
      <div className="main-text-container">
        <h2 className="home-text">Latest Threads</h2>
      </div>
      <GetGeneralThreads user={props.user} />
    </Layout>
  )
}
