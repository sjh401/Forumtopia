import React from 'react'
import { DateTime } from "luxon"
import './HomeComponent.css'

export default function TrendingCategories({categories}) {

    return (
        <div className="trending-categories home-component-border">
            <h4 className="header-center">Recent Updates</h4>
            <div className="two-column-grid">
                <div>Category</div>
                <div>Last Update</div>
            </div>
            {categories.sort((a,b)=> Date.parse(b.updatedAt) - Date.parse(a.updatedAt)).map(category => {
                return(
                    <div className="two-column-grid" key={category._id}>
                        <div>{category.title}</div>
                        <div>{DateTime.fromISO(category.updatedAt).toFormat('D')}</div>
                    </div>
                )
            })}
        </div>
    )
}
