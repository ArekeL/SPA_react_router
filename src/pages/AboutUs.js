import Item from "../components/Item";
import { Link } from "react-router-dom";
import "../styles/AboutUS.css";

const AboutUs = () => {
	return (
		<>
			<Item />
			<Link to='/' className='goBack'>
				Go back
			</Link>
		</>
	);
};

export default AboutUs;
