import React, { useState } from 'react';
import '../Components/Navbar.css'
import logo from '../img/logo.svg'
import iconHamburger from '../img/icon-hamburger.svg'
import iconClose from '../img/icon-close.svg';
import Button from './Button';

export default function Navbar() {

	const [stateMobile, setStateMobile] = useState(true);
	const [stateToggler, setStateToggler] = useState(false);
	const [stateCollapse, setStateCollapse] = useState([false, false, false]);

	const toggler = (stateToggler) => setStateToggler(!stateToggler);

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
	]

	const login = () => {
		return(
			<div className="navbar__login-and-sign-up">
				<Button name={'Login'} />
				<Button name={'Sign Up'} type={'button--secundary'} />
			</div>
		)
	}

	const navbarNav = () => {
		return(
			<div onChange={change()} className="navbar__nav">
				<button onClick={() => collapse(stateCollapse, 0)} type="button" className="navbar__button-list">Product</button>	
				{stateCollapse[0] ? navbarNavList[0] : ''}
				<button onClick={() => collapse(stateCollapse, 1)} type="button" className="navbar__button-list">Company</button>
				{stateCollapse[1] ? navbarNavList[1] : ''}
				<button onClick={() => collapse(stateCollapse, 2)} type="button" className="navbar__button-list">Connect</button>
				{stateCollapse[2] ? navbarNavList[2] : ''}
				{window.innerWidth < 1024 ? login() : ''}
			</div>
		);
	}

	const navbarMobile = () => {
		return(
			<nav >
				<img src={logo} alt="logo" />
				<button type="button" className="toggler">
					<img 
						onClick={() => toggler(stateToggler)} 
						src={stateToggler ? iconClose : iconHamburger} 
						alt="icon-collapse" 
					/>
				</button>
				{stateToggler ? navbarNav() : ''}
			</nav>
		);
	}

	const navbarDesktop = () => {
		return(
			<nav>
				<div className="navbar__nav-container">
					<img src={logo} alt="logo" />
					{navbarNav()}
				</div>
				<div className="navbar__login-and-sign-up">
					<a href="">Login</a>
					<a href="">Sign Up</a>
				</div>
			</nav>
		);
	}

	const change = (stateMobile) => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 1024) {
				setStateMobile(false);
			} else {
				setStateMobile(true);
			}
		});
	}

	return(
		<React.Fragment onChange={change()}>
			{window.innerWidth < 1024 ? navbarMobile() : navbarDesktop()}
		</React.Fragment>
	)
}
