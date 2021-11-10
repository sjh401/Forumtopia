import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function UserPosts(props) {
    const { threads } = props;
    const { id } = useParams()
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const allPosts = threads.map(element => {return element.posts})
        setPosts(allPosts.flat().filter(element => {return element.id === id}))
    }, [threads])

    return (
        <div>
            {posts?.map(post => (
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
