import React from 'react'
import Layout from '../../components/Layout/Layout'

export default function UserProfile(props) {
    return (
        <Layout user={props.user}>
            <div>
                {props.user?.username}
                {console.log(props.user)}
            </div>
        </Layout>
    )
}
