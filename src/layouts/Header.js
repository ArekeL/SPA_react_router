import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";
import img4 from "../images/error_404.png";
import "../styles/Header.css";
import { Route, Routes } from "react-router-dom";

const Header = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<img src={img1} alt='city' />} />
				<Route path='/articles' element={<img src={img2} alt='city' />} />
				<Route path='/contact' element={<img src={img3} alt='city' />} />
				<Route path='/panel' element={<img src={img3} alt='city' />} />
				<Route path='*' element={<img src={img4} alt='error' />} />
			</Routes>
		</>
	);
};

export default Header;
