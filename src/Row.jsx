import React from 'react'
import "./row.css"
function Row({ title }) {
    return (
        <div className="row">
            <h2>{title}</h2>
        </div>
    )
}

export default Row;
