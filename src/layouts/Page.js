import { Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ArticlesPage from "../pages/ArticlesPage";
import ContactPage from "../pages/ContactPage";
import LogInPanel from "../pages/LogInPanel";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

const Page = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/item/:id' element={<AboutUs />} />
			<Route path='/articles' element={<ArticlesPage />} />
			<Route path='/contact' element={<ContactPage />} />
			<Route path='/panel' element={<LogInPanel />} />
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};

export default Page;
