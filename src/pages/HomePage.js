import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const items = ["About us"];

const HomePage = (props) => {
	const list = items.map((item) => (
		<li key={item}>
			<Link to={`/item/${item}`}>{item}</Link>
		</li>
	));
	return (
		<div className='home'>
			<h2>Welcome </h2>
			<h3>Did you know?</h3>
			<div className='txt'>
				<span>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quia
					quos, earum cupiditate atque quas dolor ad possimus, nesciunt, sint
					numquam et qui veritatis modi molestias fugiat. Suscipit, velit
					placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Ipsam recusandae vel iusto incidunt ad obcaecati nobis nemo et
					reiciendis, fugit earum, quibusdam id aspernatur facilis laboriosam
					ipsum deserunt possimus mollitia.
				</span>
			</div>

			<div className='aboutUs'>
				<ul>{list}</ul>
			</div>
		</div>
	);
};

export default HomePage;
