import React from 'react'

export default function Header() {
    //** Style */
    const headerStyle = {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px'
    }
    //! Style
    return (
        <div style={headerStyle}>
            <h2>TodoList</h2>
        </div>
    )
}
