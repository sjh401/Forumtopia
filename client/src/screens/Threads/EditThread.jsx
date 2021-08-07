import { useState, useEffect } from 'react'
import { useParams, Redirect} from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getThread, updateThread } from '../../services/thread.js';
import { getCategories } from '../../services/category';

export default function EditThread(props) {
    const [ input, setInput ] = useState({ title: "" , body: "",categoryId: "", imgUrl: "" })
    const [ isUpdated, setIsUpdated ] = useState(false);
    const [ categories, setCategories ] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const fetchCategories = async () => {
            const get = await getCategories();
            console.log(get)
            setCategories(get);
        }
        fetchCategories();
    },[id])

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
                <label>Category</label>
                <input 
                // list="categoryId" 
                name="categoryId" 
                id="categoryId"
                value={input.categoryId}
                onChange={handleChange}/>
                {/* <datalist id="categoryId">
                    {categories.map(category => (
                        <option value={category.title}/>
                    ))}
                </datalist> */}
                <br />
                <button>Update Thread</button>
            </form>
        </Layout>
    )
}
