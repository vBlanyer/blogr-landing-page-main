import styled from 'styled-components'

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2em 1em;

	a, button {
		font-size: 1.2rem;
	}
`;

export const NavLogo = styled.div`
	
`;

export const MobileIcon = styled.button`
	font-size: 1rem;
	background-color: transparent;
	border: 0px solid white;
	cursor: pointer;
`;

export const NavMenuContainer = styled.div`
	position: absolute;
	top: 6.8em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 1em;
	width: calc(100% - 2em);
	padding: 2em 1em;
	background-color: hsl(0, 0%, 100%);
	border-radius: 5px;

	@media only screen and (min-width: 1024px) {
		background-color: transparent;
		position: static;
		flex-direction: row;
		flex-grow: 1;
		padding: 0;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 1em;
	width: calc(100% - 2em);

	@media only screen and (min-width: 1024px) {
		position: relative;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 1em;
		width: auto;
		padding: 0 2em;
		border-radius: 0;

		.nav__product {
			left: 0em;
		}
		.nav__company {
			left: 7em;
		}
		.nav__connect {
			left: 12em;
		}
	}
`;

export const NavBtnCollapse = styled.button`
	font-size: 1rem;
	background-color: transparent;
	border: 0px solid white;
	cursor: pointer;
`;
	
export const NavBarList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 1em;
	width: calc(100% - 2em);
	padding: 2em;
	background-color: hsl(240, 2%, 79%);
	border-radius: 5px;

	a {
		text-decoration: none;
		color: hsl(207, 13%, 34%);
	}

	@media only screen and (min-width: 1024px) {
		position: absolute;
		top: 3em;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 1em;
		width: auto;
		padding: 2em 1em;
		background-color: white;
	}
`;

export const NavBtn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-top: 2px solid hsl(240, 10%, 16%);
	width: 100%;
	margin-top: 1em;
	padding-top: 1em;

	.btn--primary {
		background-image: linear-gradient(65deg, #ff9423 0, #ff8231 12.5%, #ff6f3b 25%, #ff5b42 37.5%, #f94646 50%, #e43148 62.5%, #d11e4b 75%, #c0064d 87.5%, #b00050 100%);

		@media only screen and (min-width: 1024px) {
			background-color: hsl(0, 0%, 100%);
			background-image: none;
			color: hsl(356, 100%, 66%);
		}
	}
	.btn--secundary {
		color: hsl(240, 10%, 16%);

		@media only screen and (min-width: 1024px) {
			color: hsl(0, 0%, 100%);
		}

	}

	@media only screen and (min-width: 1024px) {
		width: auto;
		border-top: 0 solid transparent;
		margin-top: 0;
		padding-top: 0;
		flex-direction: row;
		flex-wrap: nowrap;
	}
`;


export const NavBtnLink = styled.a`
	font-size: 1rem;
	border: 0px solid white;
	cursor: pointer;
	color: hsl(0, 0%, 100%);
	padding: 1.2em 3em;
	border-radius: 45px;

	&:hover {
		color: hsl(240, 10%, 16%);
	}
`;