import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const menuList = [
	{ name: "home", path: "/" },
	{ name: "articles", path: "/articles" },
	{ name: "contact", path: "/contact" },
	{ name: "panel", path: "/panel" },
];
const Navigaton = () => {
	const menu = menuList.map((item) => (
		<li key={item.name}>
			<NavLink to={item.path}>{item.name.toUpperCase()}</NavLink>
		</li>
	));
	return (
		<nav className='main'>
			<ul>{menu}</ul>
		</nav>
	);
};

export default Navigaton;
