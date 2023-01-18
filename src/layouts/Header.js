import img1 from "../images/ny_1.jpg";
import img2 from "../images/ny_2.jpg";
import img3 from "../images/ny_3.jpg";
import img4 from "../images/header1.jpg";
import "../styles/Header.css";
import { Routes, Route } from "react-router-dom";

const Header = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<img src={img1} alt='city' />} />
				<Route path='/articles' element={<img src={img2} alt='city' />} />
				<Route path='/contact' element={<img src={img3} alt='city' />} />
				<Route path='/panel' element={<img src={img4} alt='city' />} />
				<Route path='*' element={<img src={img1} alt='city' />} />
				<Route
					path='/item/About%20us'
					element={<img src={img1} alt='city' />}
				/>
			</Routes>
		</>
	);
};

export default Header;
