import React, { useContext, useEffect, useState, useSyncExternalStore } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const imagePeopleUrls = [
	"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796",
	"https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536",
	"https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
	"https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720",
	"https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786",
	"https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593",
	"https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527",
	"https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666",
	"https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878",
	"https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721",

];

const imagePlanetsUrls = [
	"https://lumiere-a.akamaihd.net/v1/images/tatooine-main_9542b896.jpeg?region=165%2C0%2C949%2C534",
	"https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720",
	"https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878",
	"https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675",
	"https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711",
	"https://lumiere-a.akamaihd.net/v1/images/databank_cloudcity_01_169_e589ba2c.jpeg?region=0%2C0%2C1560%2C878",
	"https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878",
	"https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878",
	"https://lumiere-a.akamaihd.net/v1/images/coruscant-main_59b865a4.jpeg?region=164%2C0%2C953%2C536",
	"https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542",
];


const imageStarshipsUrls = [
	"https://lumiere-a.akamaihd.net/v1/images/hammerhead-corvette-rogue-update_453ce60b.jpeg?region=154%2C0%2C892%2C502",
	"https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900",
	"https://lumiere-a.akamaihd.net/v1/images/mobile-tac-pod-main_933a2b48.jpeg?region=383%2C40%2C1167%2C657",
	"https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900",
	"https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864",
	"https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C720",
	"https://lumiere-a.akamaihd.net/v1/images/image_3aaf40b1.jpeg?region=0%2C0%2C1920%2C1080",
	"https://lumiere-a.akamaihd.net/v1/images/databank_executor_01_169_8157df82.jpeg?region=57%2C0%2C1503%2C845",
	"https://lumiere-a.akamaihd.net/v1/images/resistance-x-wing_9433981f.jpeg?region=0%2C0%2C1560%2C878",
	"https://lumiere-a.akamaihd.net/v1/images/ep8-ff-004996_8ab70142.jpeg?region=0%2C0%2C1280%2C720",
];


export const Home = () => {


	const { store, actions } = useContext(Context);


	useEffect(() => {
		actions.getPeople();
	}, []);
	console.log(store.people);
	
	useEffect(() => {
		actions.getPlanets();

	}, []);
	console.log(store.planets);

	
	useEffect(() => {
		actions.getStarships();

	}, []);
	console.log(store.starships);

// 	function addNewFavourite(){
// actions.addFavourites(store.people.name)
// 	}; 
// console.log(store.favourites);


	return (
		<div className="base container-fluid bg-dark">
			<h2 className="text-danger ms-4">Characters</h2>
			<div className="card-people d-flex">
				{store.people.map((item, index) => (
					<div className="card-group" key={index}>
						<div className="card">
							<img src={imagePeopleUrls[index % imagePeopleUrls.length]} style={{ objectFit: "cover" }} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">uid: {item.uid}</p>
								

							</div>
							<div className="footer">
								<Link to={`/people/${item.uid}`}>
									<button className="boton-learn" >Learn More!</button>
								</Link>

								<button className="boton-heart" onClick={()=> actions.addFavourites(item.name)}>
									<i className="fas fa-heart" />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<h2 className="text-danger ms-4">Planets</h2>
			<div className="card-people d-flex">
				{store.planets.map((item, index) => (
					<div className="card-group" key={index}>
						<div className="card">
							<img src={imagePlanetsUrls[index % imagePlanetsUrls.length]} style={{ objectFit: "cover" }} className="card-img-top" alt="..." />

							<div className="card-body">

								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">uid: {item.uid}</p>
							

							</div>
							<div className="footer">
							<Link to={`/planets/${item.uid}`}>
									<button className="boton-learn" >Learn More!</button>
								</Link>
								
								<button className="boton-heart">
									<i className="fas fa-heart" />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<h2 className="text-danger ms-4">Starships</h2>
			<div className="card-people d-flex">
				{store.starships.map((item, index) => (
					<div className="card-group" key={index}>
						<div className="card">
							<img src={imageStarshipsUrls[index % imageStarshipsUrls.length]} style={{ objectFit: "cover" }} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">uid: {item.uid}</p>
								


							</div>
							<div className="footer">
							<Link to={`/starships/${item.uid}`}>
									<button className="boton-learn" >Learn More!</button>
								</Link>
								
								<button className="boton-heart">
									<i className="fas fa-heart" />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>




		</div>
	);
};
