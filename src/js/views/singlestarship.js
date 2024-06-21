import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleStarship = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getSingleStarship(theid)
	}, [])
console.log(store.nave);
	return (
		<div>
			<img
                src={`https://starwars-visualguide.com/assets/img/starships/${theid}.jpg`}
                className="card-img-top"
                alt={store.nave.name}
              />
			<h1> {store.nave.name}</h1>
            <h1>hola astrid</h1>
			
		</div>
	);
};

SingleStarship.propTypes = {
	match: PropTypes.object
};
