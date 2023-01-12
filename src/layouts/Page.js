import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArticlesPage from "../pages/ArticlesPage";
import ContactPage from "../pages/ContactPage";
import LogInPanel from "../pages/LogInPanel";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/articles' element={<ArticlesPage />} />
			<Route path='/contact' element={<ContactPage />} />
			<Route path='/panel' element={<LogInPanel />} />
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};

export default Page;
