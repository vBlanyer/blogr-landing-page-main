import React from 'react';
import './Header.css';
import Button from './Button';
import Navbar from './Navbar';

export default function Header() {
    return(
        <header className='container'>
            <Navbar />
            <div className='header__content'>
                <h1 className='header__tittle'>A modern publishing platform</h1>
                <p className='header__paragraph'>Grow your audience and build your online brand</p>
                <div className='content--row'>
                    <Button className='btn--secundary'>Start for Free</Button>
                    <Button className='btn--outline'>Learn More</Button>
                </div>
            </div>

        </header>
    )
}