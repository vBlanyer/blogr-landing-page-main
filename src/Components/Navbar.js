import React, { useState } from 'react';
import Button from './Button'
import logo from '../img/logo.svg';
import './Navbar.css';
import iconHamburger from '../img/icon-hamburger.svg';
import iconClose from '../img/icon-close.svg';


function Navbar() {

	const [stateMobile, setStateMobile] = useState(window.innerWidth < 1024 ? true : false);
	const resize = () => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 1024) {
				setStateMobile(true);
			} else {
				setStateMobile(false);
			}
		});
	}

	const [stateToggler, setStateToggler] = useState(false);
	const toggler = (stateToggler) => setStateToggler(!stateToggler);
	
	const [stateCollapse, setStateCollapse] = useState([false, false, false]);
	const collapse = (stateCollapse, i) => {
		switch (i) {
			case 0:
				setStateCollapse([!stateCollapse[0], false, false]);
				break;
			case 1:
				setStateCollapse([false, !stateCollapse[1], false]);
				break;
			case 2:
				setStateCollapse([false, false, !stateCollapse[2]]);
				break;
			default:
				break;
		}
	}

	const navbarNavList = [
		<ul className="navbar__list nav__product">
			<li><a href="/">Overview</a></li>
			<li><a href="/">Pricing</a></li>
			<li><a href="/">Marketplace</a></li>
			<li><a href="/">Features</a></li>
			<li><a href="/">Integrations</a></li>
		</ul>,
		<ul className="navbar__list nav__company">
			<li><a href="/">About</a></li>
			<li><a href="/">Team</a></li>
			<li><a href="/">Blog</a></li>
			<li><a href="/">Careers</a></li>
		</ul>,
		<ul className="navbar__list nav__connect">
			<li><a href="/">Contact</a></li>
			<li><a href="/">Newsletter</a></li>
			<li><a href="/">LinkedIn</a></li>
		</ul>
	];

	const navMenu = () => {
		return(
			<div className='navbar__nav'>
				<div className='navbar__nav-menu'>
					<Button className='btn--link' onClick={() => collapse(stateCollapse, 0)}>Product</Button>
					{stateCollapse[0] ? navbarNavList[0] : ''}
					<Button className='btn--link' onClick={() => collapse(stateCollapse, 1)}>Company</Button>
					{stateCollapse[1] ? navbarNavList[1] : ''}
					<Button className='btn--link' onClick={() => collapse(stateCollapse, 2)}>Connect</Button>
					{stateCollapse[2] ? navbarNavList[2] : ''}
				</div>
				{navButton()}
			</div>
		);
	}

	const mobileIcon = () => {
		return(
			<button>
				<img 
					onClick={() => toggler(stateToggler)} 
					src={stateToggler ? iconClose : iconHamburger} 
					alt="icon-collapse" 
				/>
			</button>
		)
	}

	const navButton = () => {
		return(
			<div className='navbar__sign-in'>
				<Button className='btn--link'>Login</Button>
				<Button className='btn--primary'>Sign Up</Button>
			</div>
		)
	}

	return(
		<React.Fragment>
			<nav onChange={resize()}>
				<img src={logo} alt="" />
				{stateMobile ? mobileIcon() : ''}
				{stateToggler || !stateMobile ? navMenu() : ''}
			</nav>
		</React.Fragment>
	)
}

export default Navbar;