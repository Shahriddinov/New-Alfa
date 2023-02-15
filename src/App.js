import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Spinner, Layout } from "./components/index";

import ScrollTop from "./hoc/ScrollTop";

const Home = lazy(() => import("./pages/Home"));
const Career = lazy(() => import("./pages/Career"));
const Cooperation = lazy(() => import("./pages/Cooperation"));
const Contacts = lazy(() => import("./pages/Contacts"));

const routes = [
	{ path: "", element: Home },
	{ path: "/career", element: Career },
	{ path: "/cooperation", element: Cooperation },
	{ path: "/contacts", element: Contacts },
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
