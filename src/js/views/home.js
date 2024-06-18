import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/Characters.jsx";
import { Planets } from "../component/Planets.jsx";
import { Starships } from "../component/Starships.jsx";

export const Home = () => (
	<div className="text-center mt-5">
	<Characters/>
	<Planets/>
	<Starships/>
	
	</div>
);
