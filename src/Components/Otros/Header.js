import './Header.css';
import Navbar from './Navbar';
import Button from './Button';

export default function Header() {	
	return(
		<header className="header">
			<Navbar />
			<div className="header__content container">
				<h1>A modern publishing platform</h1>
				<p>Grow your audience and build your online brand</p>
				<Button name={'Start for Free'} />
				<Button name={'Learn More'} type='button--secundary'/>
			</div>
		</header>
	)
}