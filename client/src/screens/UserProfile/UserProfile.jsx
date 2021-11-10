import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import UserPosts from '../../components/userProfile/UserPosts';
import UserThreads from '../../components/userProfile/UserThreads';
import { getCategories } from '../../services/category';
import { getPosts } from '../../services/post';
import { getThreads } from '../../services/thread';

export default function UserProfile(props) {
    // const [ categories, setCategories ] = useState([]);
    const [ threads, setThreads ] = useState([]);

    const { user }= props

    useEffect(() => {
        const fetchThreads = async () => {
            const get = await getThreads();
            setThreads(get.filter(element => {
                return element.userId === user?.id
            }))}
        fetchThreads();
}, [user])


    console.log(threads)

    // console.log("posts ", posts)

    return (
        <Layout user={user}>
            <div>
                <h1>Welcome {user?.username}</h1>

            </div>
            <div className="user-grid">
                <div className="user-grid-threads">
                    <UserThreads threads={threads} />
                </div>
                <div className="user-grid-posts">
                    <UserPosts threads={threads} />
                </div>
            </div>
        </Layout>
    )
}