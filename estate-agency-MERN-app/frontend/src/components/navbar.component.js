import React from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar navbar-dark bg-dark'>
                <Link to='/' className='navbar-brand'>SilkEstates</Link>
                <Link to='/properties' className='nav-link '>Properties</Link>
                <Link to='/customers' className='nav-link '>Customers</Link>
            </div>
        )
    }
}