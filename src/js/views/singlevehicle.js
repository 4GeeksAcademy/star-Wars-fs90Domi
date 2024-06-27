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
								Nunc blandit non tortor nec accumsan. Nullam varius
								dapibus semper. In a lacus eget diam aliquam cursus. Proin ut finibus nisi. Proin ullamcorper dictum
								ipsum vitae pharetra. Mauris placerat egestas ligula id viverra.
								Duis id feugiat mauris. Integer consequat tempus lacinia. In blandit, ipsum in malesuada consectetur, libero purus efficitur velit, eget euismod massa lacus vitae enim. Vestibulum faucibus ipsum in dolor sagittis tincidunt. Aliquam sit amet magna urna. Aliquam mollis erat vel eros consectetur tristique. Duis rutrum ornare felis at semper. Maecenas eu leo vel odio bibendum dictum et ut dui. Integer consectetur lorem sed purus mollis, a semper ligula pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec semper est. Integer ultricies malesuada velit, vitae dictum erat elementum in. Sed elementum dictum augue vitae placerat. Vestibulum pharetra bibendum tristique.

								Donec enim tellus, consequat non consequat pulvinar, molestie ut nunc.

							</p>
						</div>
					</div>
				</div>
			</div>


			<div className="card mb-3 bg-dark text-center mx-auto p-2" style={{ maxWidth: "1500px" }}>
				<div className="row">
					<div className="col-md">
						<h3 className="text-warning">MODEL</h3>
					</div>
					<div className="col-md">
						<h3 className="text-warning">MANUFACTURER</h3>
					</div>
					<div className="col-md">
						<h3 className="text-warning">PILOTS</h3>
					</div>
					<div className="col-md">
						<h3 className="text-warning">MAX SPEED</h3>
					</div>
					<div className="col-md">
						<h3 className="text-warning">CREW</h3>
					</div>
					<div className="col-md">
						<h3 className="text-warning">PASSENGERS</h3>
					</div>
					<div className="col-md">
						<h3 className="text-warning">CARGO CAPACITY</h3>
					</div>
					<div className="col-md">
						<h3 className="text-warning">CLASS</h3>
					</div>
				</div>
			</div>

			<div className="card mb-3 bg-dark text-center mx-auto p-2" style={{ maxWidth: "1500px" }}>
				<div className="row">
					<div className="col-md">
						<p className="text-white">{store.nave.model}</p>
					</div>
					<div className="col-md">
						<p className="text-white">{store.nave.manufacturer}</p>
					</div>
					<div className="col-md">
						<p className="text-white">{store.nave.pilots}</p>
					</div>
					<div className="col-md">
						<p className="text-white">{store.nave.max_atmosphering_speed}</p>
					</div>
					<div className="col-md">
						<p className="text-white">{store.nave.crew}</p>
					</div>
					<div className="col-md">
						<p className="text-white">{store.nave.passengers}</p>
					</div>
					<div className="col-md">
						<p className="text-white">{store.nave.cargo_capacity}</p>
					</div>
					<div className="col-md">
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
