import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../../services/post';

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
            {posts.map(post => (
            <div key={post._id} className="post-mapped">
                <p>{post.body}</p>
                <Link to={`/post/${post._id}`}><img src={post.imgUrl} style={{ width: "50px", height: "50px" }} alt="user post"></img></Link> 
                {post.userId?._id === props.user?.id &&
                <Link to={`/post-edit/${post._id}`}  className="edit-thread-post-link"> Edit</Link>}
            </div>
            ))}
        </div>
    )
}
