import React from 'react'
import './HomeComponent.css'

export default function TrendingCategories({categories}) {
    
    return (
        <div className="trending-categories">
            {categories.sort((a,b)=> Date.parse(b.updatedAt) - Date.parse(a.updatedAt)).map(category => {
                return(
                    <div key={category._id}>
                        {category.title}
                    </div>
                )
            })}
        </div>
    )
}
