import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let numFav = store.listFavorites.length
	if(store.listFavorites.includes("Empty List")){
	 numFav =(store.listFavorites.length)-1;
	}
	


	return (
		<nav className="navbar navbar-light bg-light mb-3 mx-3 justify-content-between">
			<Link to="/">
				<img src="https://img.icons8.com/?size=100&id=38539&format=png&color=000000" alt="starwars" width="60" height="50" />
			</Link>
			<div className="mx-3">
				<div className="btn-group justify-content-end">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						My Favorites {numFav}
					</button>
					<ul className="dropdown-menu dropdown-menu-lg-end">
						{
						store.listFavorites.map((item, index) => {
														
							if(item !=="Empty List"){
							return (
								<li className=" d-flex justify-content-around mt-2" key={index} >
									{item}
									<i className="fa-solid fa-trash" onClick={()=>actions.eliminarFav(item)}></i>
								</li>
							)}
							else{
								return (
									<li className=" d-flex justify-content-around mt-2" key={index}><p>{item}</p></li>)}
								
						
					})
				}

					</ul>
				</div>
			</div>
		</nav>
	);
};

