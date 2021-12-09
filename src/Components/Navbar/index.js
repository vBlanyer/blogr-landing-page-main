import React, { useState } from 'react';
import 
	{ Nav, 
	NavLogo, 
	MobileIcon, 
	NavMenuContainer, 
	NavMenu, 
	NavBtnCollapse,
	NavBarList,
	NavBtn,
	NavBtnLink } 
	from './NavbarElements';
import { Link as LinkR } from 'react-router-dom';
import logo from '../../img/logo.svg';
import iconHamburger from '../../img/icon-hamburger.svg';
import iconClose from '../../img/icon-close.svg';


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
		<NavBarList className="navbar__list nav__product">
			<li><NavBtnLink href="/">Overview</NavBtnLink></li>
			<li><NavBtnLink href="/">Pricing</NavBtnLink></li>
			<li><NavBtnLink href="/">Marketplace</NavBtnLink></li>
			<li><NavBtnLink href="/">Features</NavBtnLink></li>
			<li><NavBtnLink href="/">Integrations</NavBtnLink></li>
		</NavBarList>,
		<NavBarList className="navbar__list nav__company">
			<li><NavBtnLink href="/">About</NavBtnLink></li>
			<li><NavBtnLink href="/">Team</NavBtnLink></li>
			<li><NavBtnLink href="/">Blog</NavBtnLink></li>
			<li><NavBtnLink href="/">Careers</NavBtnLink></li>
		</NavBarList>,
		<NavBarList className="navbar__list nav__connect">
			<li><NavBtnLink href="/">Contact</NavBtnLink></li>
			<li><NavBtnLink href="/">Newsletter</NavBtnLink></li>
			<li><NavBtnLink href="/">LinkedIn</NavBtnLink></li>
		</NavBarList>
	];

	const navMenu = () => {
		return(
			<NavMenuContainer>
				<NavMenu>
					<NavBtnCollapse onClick={() => collapse(stateCollapse, 0)}>Product</NavBtnCollapse>
					{stateCollapse[0] ? navbarNavList[0] : ''}
					<NavBtnCollapse onClick={() => collapse(stateCollapse, 1)}>Company</NavBtnCollapse>
					{stateCollapse[1] ? navbarNavList[1] : ''}
					<NavBtnCollapse onClick={() => collapse(stateCollapse, 2)}>Connect</NavBtnCollapse>
					{stateCollapse[2] ? navbarNavList[2] : ''}
				</NavMenu>
				{navButton()}
			</NavMenuContainer>
		);
	}

	const mobileIcon = () => {
		return(
			<MobileIcon>
				<img 
					onClick={() => toggler(stateToggler)} 
					src={stateToggler ? iconClose : iconHamburger} 
					alt="icon-collapse" 
				/>
			</MobileIcon>
		)
	}

	const navButton = () => {
		return(
			<NavBtn>
				<NavBtnLink className='btn--secundary'>Login</NavBtnLink>
				<NavBtnLink className='btn--primary'>Sign Up</NavBtnLink>
			</NavBtn>
		)
	}

	return(
		<React.Fragment>
			<Nav onChange={resize()}>
				<NavLogo to='/'>
					<img src={logo} alt="" />
				</NavLogo>
				{stateMobile ? mobileIcon() : ''}
				{stateToggler || !stateMobile ? navMenu() : ''}
			</Nav>
		</React.Fragment>
	)
}

export default Navbar;