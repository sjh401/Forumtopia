import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import { getThread, updateThread } from '../../services/thread';

export default function Thread(props) {
    const [ thread, setThread ] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchThread = async () => {
            const thread = await getThread(id);
            console.log(thread)
            setThread(thread);
        }
        fetchThread();
    }, [id]);

    const displayEditLik = () => {
        if(thread.userId === props.user?.id) {
            return <Link to={`/thread-edit/${thread._id}`} style={{color:"blue"}}>Edit</Link>
        }
    }
    console.log(props.user)
    return (
        <Layout>
            <div key={thread.userId} >
                <h4>{thread.title}</h4>
                <img style={{width: "100px", height: "100px"}} src={thread.imgUrl}/>
                <p>{thread.body}</p>
                {displayEditLik()}
            </div>
        </Layout>
    )
}
