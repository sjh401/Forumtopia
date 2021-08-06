import { useState, useEffect } from 'react'
import { getPosts } from '../../services/post';

export default function PostMapping(props) {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const posts = await getPosts(props.id);
        console.log(posts);
        setPosts(posts)
    }
    
    useEffect(() => {
    fetchPosts();
    }, [props.id]);
    
    return (
        <div>
            {posts.map(post => (
            <div key={post._id}>
                <p>{post.body}</p>
                <img src={post.imgUrl}></img>
            </div>
            ))}
        </div>
    )
}
