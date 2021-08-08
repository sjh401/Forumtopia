import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getPost, updatePost } from '../../services/post';

export default function EditPost(props) {
    const [ input, setInput ] = useState({ body: "", imgUrl: ""})
    const [ post, setPost ] = useState([]);
    const [ isUpdated, setIsUpdated ] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const soloPost = await getPost(id);
            setInput(soloPost);
            setPost(soloPost);
        }
        fetchPost();
    }, [id]);
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setInput({
            ...input,
            [id]: value,
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updated = await updatePost(id, input);
        setIsUpdated(updated)
    }

    // not sure if we are going back to the post or thread. probably thread since we won't need to view individual post without going to an actual post screen
    if(isUpdated) {
        return <Redirect to={`/threads/${post.threadId}`} />
    }
    return (
        <Layout user={props.user}>
            <form onSubmit={handleSubmit}>
                <label>Body</label>
                <input
                id="body"
                name="body"
                value={input.body}
                type="text"
                style={{width:"150px", height:"250px"}}
                onChange={handleChange} />
                <br />
                <label>Image</label>
                <input
                id="imgUrl"
                name="imgUrl"
                value={input.imgUrl}
                type="text"
                onChange={handleChange} />
                <br />
                <button>Update Post</button>
            </form>
        </Layout>
    )
}
