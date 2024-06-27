import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">

		<Link to="/" className="">
			<span className="footer-brand mb-0 h1 fw-bold font-monospace fs-2 mr-2 text-warning"> Go Back to B L O G </span>
		</Link>
	</footer>
);
