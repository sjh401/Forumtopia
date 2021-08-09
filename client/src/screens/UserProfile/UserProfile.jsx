import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { getCategories } from '../../services/category';

export default function UserProfile(props) {
    const [ categories, setCategories ] = useState([]);
    const [ threads, setThreads ] = useState([]);
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const get = await getCategories();
            setCategories(get);
        }
        fetchCategories();
    },[])

    // useEffect(() => {
    //     setThreads(categories?.map((category) => {
    //         // let a = [];
    //         let b = category.threadId;
    //         while(b.length) {
    //             threads = [...threads, b[0]]
    //             b = b.shift()
    //         }
    //         // threads = [...threads, ...a]
    //     }))
    //     // setPosts(categories?.map((category) => [...threads, category.threadId[0]]))
    // }, [categories])

    console.log(categories)

    console.log(threads)

    // console.log("posts ", posts)

    return (
        <Layout user={props.user}>
            <div>
                <h1>Welcome {props.user?.username}</h1>
                {/* {console.log(props.user)} */}
                {console.log(props.user)}
            </div>
            <div className="user-grid">
                <div className="user-grid-threads">
                    thread
                </div>
                <div className="user-grid-posts">
                    posts
                </div>
            </div>
        </Layout>
    )
}