import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    Quotes
                </div>
                <ul className='nav-links'>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/'>tags</Link></li>
                    <li><Link to='/'>about</Link></li>
                    <li><Link to='/'>help</Link></li>
                </ul>

            </div>
        </nav>
    );
}

