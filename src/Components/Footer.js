import React from 'react';
import './Footer.css';
import logo from '../img/logo.svg';
import Button from './Button'

export default function Footer() {
    return(
        <footer>
            <img src={logo} alt="" />
            <div className='nav--footer'>
                <h3>Product</h3>
                <ul className="nav__list--footer">
                    <li><Button className='btn--link-reverse'>Overview</Button></li>
                    <li><Button className='btn--link-reverse'>Pricing</Button></li>
                    <li><Button className='btn--link-reverse'>Marketplace</Button></li>
                    <li><Button className='btn--link-reverse'>Features</Button></li>
                    <li><Button className='btn--link-reverse'>Integrations</Button></li>
                </ul>
                <h3>Company</h3>
                <ul className="nav__list--footer">
                    <li><Button className='btn--link-reverse'>About</Button></li>
                    <li><Button className='btn--link-reverse'>Team</Button></li>
                    <li><Button className='btn--link-reverse'>Blog</Button></li>
                    <li><Button className='btn--link-reverse'>Careers</Button></li>
                </ul>
                <h3>Connect</h3>
                <ul className="nav__list--footer">
                    <li><Button className='btn--link-reverse'>Contact</Button></li>
                    <li><Button className='btn--link-reverse'>Newletter</Button></li>
                    <li><Button className='btn--link-reverse'>LinkedIn</Button></li>
                </ul>
            </div>
        </footer>
    )
}