import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="mt-3">
			<div className="container d-block justify-content-between">
				<div className="d-flex justify-content-between">
					<h2>Characters</h2>
					<Link to="/personajes">
						<button className="btn btn-outline-success">See all</button>
					</Link>
				</div>
				<div id="contPerso">
					<div className="d-flex " id="cardPlerso">
					<ul className="d-flex" id="ulPer" >
						{store.listPersonajes.map((item, index) => {
							console.log(item);

							return (
								<div className="d-flex me-3"key={index}>
									<div className="card mb-2 mt-2" >
										<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
										<div className="card-body" style={{ width: `14rem`, height: `10rem` }}>
											<h5 className="card-title">{item.name}</h5>
											<p className="card-text">uid: {item.uid}</p>

											<Link to={`/ficha/${item.uid}`}>
												<button className="btn btn-primary btn-sm">More detalls</button>
											</Link>

										</div>


									</div>
								</div>





							);
						})}
					</ul>
				</div></div>



			</div>
			<div className="container d-block ps-1 mt-5">
				<div className="d-flex justify-content-between">
					<h2>Species</h2>
					<Link to="/species">
						<button className="btn btn-outline-success">See all</button>
					</Link>
				</div>
				<div id="contSpec">
					<div>
					<ul className=" d-flex me-3" id="cardPla" >
						{store.listSpecies.map((item, index) => {
							console.log(item);
							return (
								<div className="card mt-3 me-3" key={index}>
									<div className="mb-2">
										<img src={`https://starwars-visualguide.com/assets/img/species/${item.uid}.jpg`} className="card-img-top" alt="..." />
										<div className="card-body"style={{ width: `14rem`, height: `8rem` }}>
											<h5 className="card-title">{item.name}</h5>
											<p className="card-text">uid: {item.uid}</p>											
											
											<Link to={`/fichaSpecies/${item.uid}`}>
												<button className="btn btn-primary btn-sm">More detalls</button>
											</Link>

										</div>


									</div>
								</div>





							);
						})}
					</ul>
				</div></div>

			</div>

			<div className="container d-block ps-1 mt-5">
				<div className="d-flex justify-content-between">
					<h2>Planets</h2>
					<Link to="/planetas">
						<button className="btn btn-outline-success">See all</button>
					</Link>
				</div>
				<div id="contPlanetas">
					<div>
					<ul className=" d-flex me-3" id="cardPla" >
						{store.listPlanetas.map((item, index) => {
							console.log(item);
							let idPlanet= parseInt(item.uid)+1;
							return (
								<div className="card mt-3 me-3" key={index}>
									<div className="mb-2">
										<img src={`https://starwars-visualguide.com/assets/img/planets/${idPlanet}.jpg`} className="card-img-top" alt="..." />
										<div className="card-body"style={{ width: `14rem`, height: `8rem` }}>
											<h5 className="card-title">{item.name}</h5>
											<p className="card-text">uid: {item.uid}</p>
											<Link to={`/fichaPlanet/${item.uid}`}>
												<button className="btn btn-primary btn-sm">More detalls</button>
											</Link>


										</div>


									</div>
								</div>





							);
						})}
					</ul>
				</div></div>

			</div>
		</div>)
};
