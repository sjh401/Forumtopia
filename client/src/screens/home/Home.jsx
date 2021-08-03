import React from 'react'
import Layout from "../../components/Layout/Layout"
import {useState, useEffect} from "react"
import {} from "../../services/"

export default function HomeScreen(props) {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            let data = await getPosts();
            setPost(data);
        };
        fetchPosts();
    }, [])
    return (
        <div>
           <Layout user={props.user} setUser={props.setUser}>
               {posts.map((post) => (
               <div>{post.name}</div>
               ))}
           </Layout>
        </div>
    )
}
