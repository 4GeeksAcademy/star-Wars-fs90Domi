import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 fw-bold font-monospace fs-2 mr-2">Welcome to my STARWARS B L O G </span>
			</Link>
			<div class="dropdown">
				<a class="btn btn-red dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</a>

				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</nav>
	);
};
