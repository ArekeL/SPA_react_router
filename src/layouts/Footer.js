import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
	return (
		<div className='footer'>
			<h2>Footer</h2>
			<Link to='/'>
				<p>Home</p>
			</Link>
			<Link to='/item/:id'>
				<p>About Us</p>
			</Link>
			<Link to='/contact'>
				<p>Contact</p>
			</Link>
		</div>
	);
};

export default Footer;
