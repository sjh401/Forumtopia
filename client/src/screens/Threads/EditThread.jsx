import { useState, useEffect } from 'react'
import { useParams, Redirect} from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getThread, updateThread } from '../../services/thread.js';

export default function EditThread(props) {
    const [ input, setInput ] = useState({ title: "" , body: "", imgUrl: "" })
    const [ isUpdated, setIsUpdated ] = useState(false);
    const { id } = useParams();
    // const [ user, setUser ] = useState(props.user)
    // useEffect(() => {
    //   setUser(props.user)
    // },[])

    useEffect(() => {
        const fetchThread = async () => {
            const soloThread = await getThread(id);
            setInput(soloThread);
        }
        fetchThread();
    }, [id]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInput({
            ...input,
            [id]: value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input)
        const updated = await updateThread(id, input);
        setIsUpdated(updated);
    }

    if(isUpdated) {
        return <Redirect to={`/thread/${id}`} />
    }
    return (
        <Layout user={props.user}>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                id="title"
                name="title"
                // placeholder={thread?.title}
                value={input.title}
                type="text"
                onChange={handleChange} />
                <br />
                <label>Body</label>
                <input
                id="body"
                name="body"
                // placeholder={thread?.body}
                value={input.body}
                type="text"
                style={{width:"150px", height:"250px"}}
                onChange={handleChange} />
                <br />
                <label>Image</label>
                <input
                id="imgUrl"
                name="imgUrl"
                // placeholder={thread?.imgUrl}
                value={input.imgUrl}
                type="text"
                onChange={handleChange} />
                <br />
                <button>Update Thread</button>
            </form>
        </Layout>
    )
}
