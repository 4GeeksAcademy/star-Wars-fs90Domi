// import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const SingleStarship = props => {
// 	const { store, actions } = useContext(Context);
// 	const { theid } = useParams();

// 	useEffect(() => {
// 		actions.getSingleStarship(theid)
// 	}, [])

// 	return (
// 		<div>
// 			<img
//                 src={`https://starwars-visualguide.com/assets/img/starship/${theid}.jpg`}
//                 className="card-img-top"
//                 alt={store.nave.name}
//               />
// 			<h1> {store.nave.name}</h1>
			
// 		</div>
// 	);
// };

// SingleStarship.propTypes = {
// 	match: PropTypes.object
// };
