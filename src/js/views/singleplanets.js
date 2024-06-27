import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

 export const Singleplanets = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.getSinglePlanet(theid);
  }, []);

  return (
    <>
      <div className="card mb-3 bg-dark mx-auto p-2" style={{ maxWidth: "1500px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            {theid == 1 ? (
              <img
                src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
                className="card-img-top img-fluid rounded-start"
                alt={store.planeta.name}
              />
            ) : (
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`}
                className="card-img-top img-fluid rounded-start"
                alt={store.planeta.name}
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title d-flex justify-content-center text-warning">{store.planeta.name}</h2>
              <h5 className="text-white">INFO</h5>
              <p className="text-white">
			  Morbi pellentesque, augue id vestibulum viverra, ex magna semper sapien, sed semper felis quam non mi. Ut in ullamcorper diam, sit amet pellentesque massa. Suspendisse potenti. Phasellus eu velit in libero rhoncus dignissim quis ac sem. Mauris dui arcu, sollicitudin id elit ac, porttitor lobortis metus. Donec ultrices euismod aliquam. Nulla sed eros quis quam lacinia dictum at a turpis. Praesent nulla turpis, mattis id dolor non, tristique dapibus magna. Nunc blandit non tortor nec accumsan. Nullam varius dapibus semper. In a lacus eget diam aliquam cursus. Proin ut finibus nisi. Proin ullamcorper dictum ipsum vitae pharetra. Mauris placerat egestas ligula id viverra.

Nulla aliquam cursus ornare. Integer egestas ligula felis. Mauris aliquet posuere orci sed convallis. In id orci nec dui pharetra varius eget venenatis tellus. Quisque ante nisl, gravida in risus non, semper imperdiet libero. Aenean ac dui id magna pharetra feugiat nec a augue. Donec dignissim augue sit amet ornare varius. Nulla tristique fringilla eros. Pellentesque porttitor, velit sed viverra suscipit, nisi dui bibendum tortor, et rhoncus lorem est sit amet libero. Donec efficitur non nisi vitae malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate feugiat facilisis. Quisque et congue est. Curabitur sed vestibulum nunc. Fusce tempus commodo justo, maximus malesuada massa dapibus eu.

Nullam suscipit magna sit amet sem iaculis consectetur. Curabitur viverra, lacus fringilla cursus hendrerit, est turpis interdum mauris, eu accumsan nulla dolor quis dui. Aliquam in venenatis libero, in vehicula eros. Donec eget mauris lectus. Praesent eu metus laoreet, sodales dui eget, scelerisque nibh. Quisque vel tincidunt nunc. Mauris ac lorem turpis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 bg-dark text-center mx-auto p-2" style={{ maxWidth: "1500px" }}>
        <div className="row">
          <div className="col">
            <h3 className="text-warning">Rotation Period</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">Orbital Period</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">Diameter</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">Climate</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">Gravity</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">Terrain</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">Surface Water</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">Population</h3>
          </div>
        </div>
      </div>

      <div className="card mb-3 bg-dark text-center mx-auto p-2" style={{ maxWidth: "1500px" }}>
        <div className="row">
          <div className="col">
            <p className="text-white">{store.planeta.rotation_period}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.planeta.orbital_period}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.planeta.diameter}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.planeta.climate}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.planeta.gravity}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.planeta.terrain}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.planeta.surface_water}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.planeta.population}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Singleplanets.propTypes = {
  match: PropTypes.object,
};
