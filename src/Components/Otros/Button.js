import './Button.css';

export default function({name, type}) {

	const clase = () => {
		if (type === 'button--secundary') {
			return type;
		} else {
			return 'button--primary';
		}
	}
	

	return(
		<button className={clase()}>{name}</button>
	)
}