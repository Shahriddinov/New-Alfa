import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Spinner, Layout } from "./components/index";

import ScrollTop from "./hoc/ScrollTop";


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About/about.jsx"))

const routes = [
    { path: "", element: Home },
    { path: "/about", element: About }
]

const RoutesContainer = () => (
	<Router>
		<Layout>
			<Suspense fallback={<Spinner position="full" />}>
				<Routes>
					{routes.map((route, key) => {
						const RouteComponent = ScrollTop(route.element);
						return <Route key={key} path={route.path} element={<RouteComponent />} />;
					})}
				</Routes>
			</Suspense>
		</Layout>
	</Router>
);

export default RoutesContainer;
