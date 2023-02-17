import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Spinner, Layout } from "./components/index";

import ScrollTop from "./hoc/ScrollTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About/about.jsx"))
const Career = lazy(() => import("./pages/Career"));
const Cooperation = lazy(() => import("./pages/Cooperation"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Enginering = lazy(() => import("./pages/Enginering"));
const Service = lazy(() => import("./pages/Service"));
const Corporate = lazy(() => import("./pages/Corporate"));
const Transportation = lazy(() => import("./pages/Transportation"));


const routes = [
	{ path: "", element: Home },
	{ path: "/aboutus", element: About },
	{ path: "/career", element: Career },
	{ path: "/cooperation", element: Cooperation },
	{ path: "/contacts", element: Contacts },
	{ path: "/enginering", element: Enginering },
	{ path: "/service", element: Service },
	{ path: "/corporate-catering", element: Corporate },
	{ path: "/transportation", element: Transportation },
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
