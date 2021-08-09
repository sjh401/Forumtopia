import React from 'react'
import Layout from '../../components/Layout/Layout'

export default function UserProfile(props) {
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
