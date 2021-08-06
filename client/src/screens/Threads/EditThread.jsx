import { useState, useEffect } from 'react'
import { useParams, Redirect} from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getThread, updateThread } from '../../services/thread.js';

export default function EditThread(props) {
<<<<<<< HEAD:client/src/screens/edit-thread/EditThread.jsx
    const [ thread, setThread ] = useState({});
    const [ input, setInput ] = useState({ title: thread.title , body: thread.body, imgUrl: thread.imgUrl })
    const [ isUpdated, setIsUpdated ] = useState(null);
=======
    const [ input, setInput ] = useState({ title: "" , body: "", imgUrl: "" })
    const [ isUpdated, setIsUpdated ] = useState(false);
>>>>>>> b16e622a59a85f79c61b82b70dd493ddc9758678:client/src/screens/Threads/EditThread.jsx
    const { id } = useParams();
    // const [ user, setUser ] = useState(props.user)
    // useEffect(() => {
    //   setUser(props.user)
    // },[])

    useEffect(() => {
        const fetchThread = async () => {
<<<<<<< HEAD:client/src/screens/edit-thread/EditThread.jsx
            const thread = await getThread(id);
            console.log(thread);
            setThread(thread);
=======
            const soloThread = await getThread(id);
            setInput(soloThread);
>>>>>>> b16e622a59a85f79c61b82b70dd493ddc9758678:client/src/screens/Threads/EditThread.jsx
        }
        fetchThread();
    }, [id]);

    const handleChange = (e) => {
        const { id, value } = e.target;
<<<<<<< HEAD:client/src/screens/edit-thread/EditThread.jsx
        setInput((prevInput) => ({
            ...prevInput,
            [id]: value,
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updated = await updateThread(id,input);
=======
        setInput({
            ...input,
            [id]: value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input)
        const updated = await updateThread(id, input);
>>>>>>> b16e622a59a85f79c61b82b70dd493ddc9758678:client/src/screens/Threads/EditThread.jsx
        setIsUpdated(updated);
    }
    console.log(input)
    if(isUpdated) {
        return <Redirect to={`/`} />
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
