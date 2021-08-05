import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getThreads } from '../../services/thread'
import "./Home.css"
import Thread from "../Threadcss/Thread"
import Layout from '../../components/Layout/Layout'


export default function HomeScreen(props) {
    const [ threads, setThreads ] = useState([])

    useEffect(() => {
        const fetchThreads = async () => {
            let data = await getThreads();
            console.log(data)
            setThreads(data)
        }
        fetchThreads()
    }, [])

    const displayEditLik = (thread) => {
        if(thread.userId._id === props.user?.id) {
            return <Link to={`/thread-edit/${thread._id}`}>Edit</Link>
        }
    }
    console.log(props.user)
    return (
        <Layout>
            <div>
                <h1 className="trend">Trending Now</h1>
                <div className = "together">
                    <div className = "first">
                        <div className = "move">
                        <h3>They Elon Musk's SpaceX launches 143 satellites on single rocket, sets world record.</h3>
                        </div>
                    </div>
                    <div className = "second">
                        <h3>scarlett johansson sues Disney for breach of contract</h3>
                    </div>
                    <div className = "third">
                        <h3>Activision hit with another lawsuit as female employees are in a frenzy.</h3>
                    </div>
                    <div className = "fourth">
                        <h3>EA play show Dead Space. Could this be EA's big comeback</h3>
                    </div>
                </div>
                <span className="spans"></span>
                <div classname="threads-home">
                    {threads.map( thread => (
                        <div key={thread.userId} >
                            <h4>{thread.title}</h4>
                            <img style={{width: "100px", height: "100px"}} src={thread.imgUrl} />
                            <p>{thread.body}</p>
                            <p>{displayEditLik(thread)}</p>
                        </div>
                    ))}

                </div>
                <Thread/>
               
            </div>
            </Layout>
        
    )
}