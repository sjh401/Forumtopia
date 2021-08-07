import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getPost } from '../../services/post';

export default function PostCard(props) {
    const [ post, setPost ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const soloPost = await getPost(id);
            setPost(soloPost);
        }
        fetchPost();
    }, [id]);

    return (
        <Layout user={props.user} >
            <div>
                <img src={post?.imgUrl} style={{ width: "100px", height: "100px" }} alt="user post" />
                <p>{post?.body}</p>
                <Link to={`/threads/${post.threadId}`}>Back to Thread</Link>
            </div>
        </Layout>
    )
}
