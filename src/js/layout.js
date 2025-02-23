import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Personajes } from "./views/personajes";

import { Planetas } from "./views/planetas";
import { Ficha } from "./views/ficha";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Species } from "./views/species";
import { FichaPlanet } from "./views/fichaPlanet";
import { FichaSpecies } from "./views/fichaSpecies";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personajes" element={<Personajes />} />
						<Route path="/planetas" element={<Planetas />} />
						<Route path="/species" element={<Species />} />
						<Route path="/ficha/:theid" element={<Ficha />} />
						<Route path="/fichaPlanet/:theid" element={<FichaPlanet />} />
						<Route path="/fichaSpecies/:theid" element={<FichaSpecies />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
