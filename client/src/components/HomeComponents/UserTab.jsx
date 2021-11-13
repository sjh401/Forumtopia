import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeComponent.css'

export default function UserTab({user,categories}) {
    const [ threads, setThreads ] = useState([]);
    const [ popularCat, setPopularCat ] = useState([])

    useEffect(() => {
        const userThreads = categories?.map(category => {return category.threadId}).flat().filter(thread => thread.userId === user?.id)
        setThreads(userThreads);
    },[categories, user]);

    useEffect(() => {
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
        setPopularCat(mostPopularUserCategory(threads))
    }, [categories,threads])
    if(!user) return (<></>)
    return (
        <div className="user-tab home-component-border">
            <div className="user-header">User: {user?.username}</div>
            <div className="five-padding">
                <div className="text-underlinded">Favorite Category</div>
                <div>{categories?.filter(category => category._id === popularCat).map(category => {
                    return (
                        <div key={category._id}>{category.title}</div>
                        )
                    })}</div>
            </div>
            <div className="five-padding">
                <div className="text-underlinded">Most Popular Thread</div>
                <div>{threads?.sort((a,b) => b.posts.length - a.posts.length).map((thread, index) => {
                    if(index === 0){
                        return(
                            <div key={thread._id} className="flex-center">
                                <Link to={`/threads/${thread._id}`} className="mobile-nav-text">
                                    <img src={thread.imgUrl} alt={thread.title} style={{height:'50px'}}/>
                                    <div>{thread.title}</div>
                                </Link>
                            </div>
                        )
                    } else{
                        return < React.Fragment key={thread._id + index} ></React.Fragment>
                    }
                })}</div>
            </div>
            <Link to={`/user-profile/${user?.id}`} className="mobile-nav-text">Explore {user?.username}'s Profile</Link>
        </div>
    )
}
