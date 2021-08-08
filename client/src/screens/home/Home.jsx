import React from 'react'
import Layout from '../../components/Layout/Layout'
import GetGeneralThreads from '../../TestingFolder/GetGeneralThreads'

export default function Home(props) {
  return (
    <Layout user={props.user}>
      <GetGeneralThreads user={props.user} />
    </Layout>
  )
}
