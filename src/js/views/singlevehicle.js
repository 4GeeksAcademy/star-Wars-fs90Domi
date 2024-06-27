import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getSingleVehicle(theid)
	}, [])

	return (
		<>
		  <div className="card mb-3 bg-dark mx-auto p-2" style={{ maxWidth: "1500px" }}>
			<div className="row g-0">
			  <div className="col-md-4">
			  <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`}
                className="card-img-top img-fluid rounded-start"
                alt={store.nave.name}
              />
			  </div>
			  <div className="col-md-8">
				<div className="card-body">
				  <h2 className="text-warning card-title d-flex justify-content-center">{store.nave.name}</h2>
				  <h5 className="text-white">INFO</h5>
				  <p className="text-white">
					Morbi pellentesque, augue id vestibulum viverra, ex magna semper sapien, sed semper felis quam non mi.
					Ut in ullamcorper diam, sit amet pellentesque massa. Suspendisse potenti. Phasellus eu velit in libero
					rhoncus dignissim quis ac sem. Mauris dui arcu, sollicitudin id elit ac, porttitor lobortis metus. Donec
					ultrices euismod aliquam. Nulla sed eros quis quam lacinia dictum at a turpis. Praesent nulla turpis,
					mattis id dolor non, tristique dapibus magna. Nunc blandit non tortor nec accumsan. Nullam varius
					dapibus semper. In a lacus eget diam aliquam cursus. Proin ut finibus nisi. Proin ullamcorper dictum
					ipsum vitae pharetra. Mauris placerat egestas ligula id viverra.
				  </p>
				</div>
			  </div>
			</div>
		  </div>
	
		  <div className="card mb-3 bg-dark text-center mx-auto p-2" style={{ maxWidth: "1500px" }}>
			<div className="row">
			  <div className="col">
				<h3 className="text-warning">MODEL</h3>  
			  </div>
			  <div className="col">
				<h3 className="text-warning">MANUFACTURER</h3>
			  </div>
			  <div className="col">
				<h3 className="text-warning">PILOTS</h3>
			  </div>
			  <div className="col">
				<h3 className="text-warning">MAX SPEED</h3>
			  </div>
			  <div className="col">
				<h3 className="text-warning">CREW</h3>
			  </div>
			  <div className="col">
				<h3 className="text-warning">PASSENGERS</h3>
			  </div>
			  <div className="col">
				<h3 className="text-warning">CARGO CAPACITY</h3>
			  </div>
			  <div className="col">
				<h3 className="text-warning">CLASS</h3>
			  </div>
			</div>
			<div className="row">
			  <div className="col">
				<p className="text-white">{store.nave.model}</p>
			  </div>
			  <div className="col">
				<p className="text-white">{store.nave.manufacturer}</p>
			  </div>
			  <div className="col">
				<p className="text-white">{store.nave.pilots}</p>
			  </div>
			  <div className="col">
				<p className="text-white">{store.nave.max_atmosphering_speed}</p>
			  </div>
			  <div className="col">
				<p className="text-white">{store.nave.crew}</p>
			  </div>
			  <div className="col">
				<p className="text-white">{store.nave.passengers}</p>
			  </div>
			  <div className="col">
				<p className="text-white">{store.nave.cargo_capacity}</p>
			  </div>
			  <div className="col">
				<p className="text-white">{store.nave.class}</p>
			  </div>
			</div>
		  </div>
		</>
	  );
	};

SingleVehicle.propTypes = {
	match: PropTypes.object
};
