import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getThread, updateThread } from '../../services/thread';

export default function Edit(props) {
    const [ input, setInput ] = useState({ title:"", body: "", imgUrl: ""})
    const [ thread, setThread ] = useState({});
    const [ isUpdated, setIsUpdated ] = useState(null);
    const { id } = useParams

    useEffect(() => {
        const fetchThread = async () => {
            const thread = await getThread(id);
            setThread(thread);
        }
        fetchThread();
    }, [id]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [id]: value,
        }));
        setThread(input)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updated = await updateThread(id, thread);
        setIsUpdated(updated)
    }

    if(isUpdated) {
        return <Redirect to={`/threads/${id}`} />
    }
    return (
        <Layout user={props.user}>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                id="title"
                placeholder={thread?.title}
                value={input.title}
                type="text"
                onChange={handleChange} />
                <br />
                <label>Body</label>
                <input
                id="body"
                placeholder={thread?.body}
                value={input.body}
                type="text-area"
                rows={10}
                cols={78}
                onChange={handleChange} />
                <br />
                <label>Image</label>
                <input
                id="imgUrl"
                placeholder={thread?.imgUrl}
                value={input.imgUrl}
                type="text"
                onChange={handleChange} />
                <br />
                <button>Update Thread</button>
            </form>
        </Layout>
    )
}
