import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
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
                <img src={post?.imgUrl} alt="user post" />
                <p>{post?.body}</p>
            </div>
        </Layout>
    )
}
