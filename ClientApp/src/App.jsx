import { publicRoutes } from "./routes/Routes";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicLayout from "./layouts/PublicLayout";

function App() {
	const routes = buildRoutes();

	function buildRoutes() {
		let tempRoutes = [];
		publicRoutes.forEach((route) => {
			tempRoutes.push({
				path: route.path,
				element: <PublicLayout>{route.element}</PublicLayout>,
			});
		});
		return createBrowserRouter(tempRoutes);
	}

	return <RouterProvider router={routes} />;
}

export default App;
