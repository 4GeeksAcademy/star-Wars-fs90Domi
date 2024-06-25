import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getSingleCharacter(theid)
	}, [])

	return (
		<div className="container mb-3">
			<div className="card-body row ">
				<div className='col-md-4'>
					<img
						src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`}
						className="card-img-top"
						alt={store.personaje.name}
					/>
				</div>
				<div className='col-md-5'>
					<h1 className="text-white"> NAME = {store.personaje.name}</h1>
					<h1 className="text-white"> GENDER = {store.personaje.gender}</h1>
					<h1 className="text-white"> HAIR COLOR = {store.personaje.hair_color}</h1>
					<h1 className="text-white"> SKIN COLOR = {store.personaje.skin_color}</h1>
					<h1 className="text-white"> EYE COLOR = {store.personaje.eye_color}</h1>
					<h1 className="text-white"> BIRTH YEAR = {store.personaje.birth_year}</h1>
					<h1 className="text-white"> MASS = {store.personaje.mass}</h1>
					<h1 className="text-white" > HEIGHT = {store.personaje.height}</h1>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
