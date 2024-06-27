import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.getSingleCharacter(theid);
  }, []);

  return (
    <>
      <div className="card mb-3 bg-dark mx-auto p-2" style={{ maxWidth: "1500px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`}
              className="card-img-top"
              alt={store.personaje.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="text-warning card-title d-flex justify-content-center">{store.personaje.name}</h2>
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
            <h3 className="text-warning">GENDER</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">HAIR COLOR</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">SKIN COLOR</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">EYE COLOR</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">BIRTH YEAR</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">MASS</h3>
          </div>
          <div className="col">
            <h3 className="text-warning">HEIGHT</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-white">{store.personaje.gender}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.personaje.hair_color}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.personaje.skin_color}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.personaje.eye_color}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.personaje.birth_year}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.personaje.mass}</p>
          </div>
          <div className="col">
            <p className="text-white">{store.personaje.height}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};


