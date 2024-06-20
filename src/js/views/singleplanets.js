import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singleplanets = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getSinglePlanet(theid)
	}, [])

	return (
		<div className="card text-center" style={{ width: "18rem", flex: "none", margin: "10px" }}>
			<img
                src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`}
                className="card-img-top"
                alt={store.planeta.name}
              />
			<h1> {store.planeta.name}</h1>
			
		</div>
	);
};

Singleplanets.propTypes = {
	match: PropTypes.object
};