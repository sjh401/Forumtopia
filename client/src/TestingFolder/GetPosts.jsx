import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getPosts } from '../services/post'
import PostCard from "./PostCard"
import SingleThreadCard from "./SingleThreadCard"
import Layout from "../components/Layout/Layout"
import "./Post.css"
import MakePost from './MakePost'
// import Loading from './Loading'


export default function GetPosts(props) {
  const [posts, setPosts] = useState([])
  const [toggle, setToggle] = useState(false);
  const { pid } = useParams()

  // console.log(pid)

  useEffect(() => {
    const fetchPosts = async () => {
      let data = await getPosts(pid)
      setPosts(data)
    }
    fetchPosts()
  }, [pid, toggle])

  if (!posts.length) {
    return <MakePost />
  }

  const postCards = posts
    .map((post, index) =>
      index < 50 ? (
        <PostCard setToggle={setToggle} user={props.user} key={index} post={post} />
      ) : null
    )

  return (
    <Layout user={props.user}>
      <div className="post-card">
        <div className="single-thread-card">
          <SingleThreadCard user={props.user} post={posts} />
        </div>
        <div className="comment-text"><p>Comment as <span className="username">{props.user?.username}</span></p></div>
        <MakePost setToggle={setToggle} />
        <>{postCards.reverse()}</>
        {/* {posts.map((post, index) => {
          return (
            <PostCard setToggle={setToggle} user={props.user} key={index} post={post} />
          )
        })} */}
      </div>
    </Layout>
  )
}
