import AdminPage from "./AdminPage";
import LoginFormPage from "./LoginFormPage";
import "../styles/LoginPanel.css";

const permotion = false;

const LogInPanel = () => {
	return permotion ? <AdminPage /> : <LoginFormPage />;
};

export default LogInPanel;
