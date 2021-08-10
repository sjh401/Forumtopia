import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../../services/post';
import "./Mapping.css"

export default function PostMapping(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts(props.id);
      setPosts(posts)
    }
    fetchPosts();
  }, [props.id]);

  return (
    <div className="post-mapping-div">
      {posts?.filter(post => post?.threadId?._id === props.thread?._id).map(post => (
        <div key={post._id} className="post-mapped">
          <p className="username">{post.userId?.username}</p>
          <Link className="post-body" to={`/post/${post._id}`}><p>{post.body}</p>
            {post.imgUrl && <img src={post.imgUrl} style={{ width: "200px" }} alt="user post"></img>}</Link>
          {post?.userId === props.user?._id &&
            <Link to={`/post-edit/${post._id}`} className="edit-thread-post-link" user={props.user}> Edit</Link>}
        </div>
      ))}
    </div>
  )
}
