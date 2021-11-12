import React from 'react'
import { DateTime } from "luxon"
import './HomeComponent.css'

export default function TrendingCategories({categories}) {

    return (
        <div className="trending-categories">
            <div className="two-column-grid">
                <div>Category</div>
                <div>Last Update</div>
            </div>
            {categories.sort((a,b)=> Date.parse(b.updatedAt) - Date.parse(a.updatedAt)).map(category => {
                return(
                    <div key={category._id}>
                        <div className="two-column-grid">
                            <div>{category.title}</div>
                            <div>{DateTime.fromISO(category.updatedAt).toFormat('D')}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
