import React from 'react'
import './HomePage.scss'
import Directory from '../../components/directory/Directory'

export default function HomePage() {
    return (
        <div className='homepage'>
            <div className="directory-menu">
                <Directory />
            </div>
        </div>
    )
}
