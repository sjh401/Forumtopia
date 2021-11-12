import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeComponent.css'

export default function UserTab({user,categories}) {
    const [ threads, setThreads ] = useState([]);
    const [ popularCat, setPopularCat ] = useState([])

    const mostPopularUserCategory = (array) => {
        const categoryHash = {}

        array.forEach(element => {
            if(!categoryHash[element.categoryId]){
                categoryHash[element.categoryId] = 1
            } else {
                categoryHash[element.categoryId] += 1
            }
        })
        let max = Math.max(...Object.values(categoryHash))
        let target = Object.keys(categoryHash)[Object.values(categoryHash).indexOf(max)]
        return target
        
    }

    useEffect(() => {
        const userThreads = categories.map(category => {return category.threadId}).flat().filter(thread => thread.userId === user.id)
        setThreads(userThreads);
        setPopularCat(mostPopularUserCategory(threads))
    },[categories]);

    console.log(threads)
    console.log(popularCat)
    return (
        <div className="user-tab">
            <h4>User: {user?.username}</h4>
            <div>
                <div>Favorite Category</div>
                <div>{categories?.filter(category => category._id === popularCat).map(category => {
                    return (
                        <div>{category.title}</div>
                    )
                })}</div>
            </div>
            <div>
                <div>Most Popular Thread</div>
                <div>{threads?.sort((a,b) => b.posts.length - a.posts.length).map((thread, index) => {
                    if(index === 0){
                        return(
                            <div>
                                <Link to={`/threads/${thread._id}`}>
                                    <img src={thread.imgUrl} alt={thread.title} style={{height:'50px'}}/>
                                    <div>{thread.title}</div>
                                </Link>
                            </div>
                        )
                    }
                    })}</div>
            </div>
            <Link to={`/user-profile/${user?.id}`}>User Profile</Link>
        </div>
    )
}
