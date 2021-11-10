import React from 'react'
import { Link } from 'react-router-dom'
import './HomeComponent.css'

export default function UserTab({user}) {

    console.log(user)
    return (
        <div className="user-tab">
            user information
            <Link to={`/user-profile/${user?.id}`}>User Profile</Link>
        </div>
    )
}
