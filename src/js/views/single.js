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
              Donec ultrices mauris quis dolor laoreet luctus. Aliquam non porttitor magna, id dapibus arcu. Praesent viverra porta ex a rhoncus. Curabitur non mi ut ligula aliquet facilisis ut ac metus. Duis tincidunt purus libero, eget dapibus orci hendrerit sed. Etiam laoreet et risus et aliquet. Proin ullamcorper ex vel neque ultricies, nec convallis sapien volutpat. Integer enim quam, dapibus sed ipsum et, egestas iaculis neque. Vivamus lobortis justo orci, ut accumsan mi luctus accumsan. Nullam tincidunt, mi at condimentum consequat, nisi nisl tristique dolor, in aliquet tellus est ut neque. Quisque blandit finibus mi, eget viverra velit accumsan id. Nullam interdum varius ex, vel mattis leo posuere vitae. Vestibulum sed urna vel quam consectetur molestie vel sed tellus.

Nunc eu purus diam. Duis id feugiat mauris. Integer consequat tempus lacinia. In blandit, ipsum in malesuada consectetur, libero purus efficitur velit, eget euismod massa lacus vitae enim. Vestibulum faucibus ipsum in dolor sagittis tincidunt. Aliquam sit amet magna urna. Aliquam mollis erat vel eros consectetur tristique. Duis rutrum ornare felis at semper. Maecenas eu leo vel odio bibendum dictum et ut dui. Integer consectetur lorem sed purus mollis, a semper ligula pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec semper est. Integer ultricies malesuada velit, vitae dictum erat elementum in. Sed elementum dictum augue vitae placerat. Vestibulum pharetra bibendum tristique.

Donec enim tellus, consequat non consequat pulvinar, molestie ut nunc. Integer eu velit vel urna porttitor vestibulum. Morbi tempor vestibulum metus, ut fermentum elit vulputate nec. In tempus eros mauris. Fusce ut rhoncus turpis. Cras id porta lorem. Vestibulum euismod, elit et feugiat molestie, libero neque sollicitudin nunc, a iaculis ex justo ut justo. 
                Morbi pellentesque, augue id vestibulum viverra, ex magna semper sapien, sed semper felis quam non mi.
                Ut in ullamcorper diam, sit amet pellentesque massa. Suspendisse potenti. Phasellus eu velit in libero
                rhoncus dignissim quis ac sem. Mauris dui arcu, sollicitudin id elit ac, porttitor lobortis metus. Donec
                ultrices euismod aliquam. Nulla sed eros quis quam lacinia dictum at a turpis. Praesent nulla turpis,
                mattis id dolor non, tristique dapibus magna. Nunc blandit non tortor nec accumsan. Nullam varius
                dapibus semper. In a lacus eget diam aliquam cursus. Proin ut finibus nisi. Proin ullamcorper dictum
                ipsum vitae pharetra. 
                
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 bg-dark text-center mx-auto p-2" style={{ maxWidth: "1500px" }}>
        <div className="row">
          
          <div className="col-md">
            <h3 className="text-warning">GENDER</h3>
          </div>
          <div className="col-md">
            <h3 className="text-warning">HAIR COLOR</h3>
          </div>
          <div className="col-md">
            <h3 className="text-warning">SKIN COLOR</h3>
          </div>
          <div className="col-md">
            <h3 className="text-warning">EYE COLOR</h3>
          </div>
          <div className="col-md">
            <h3 className="text-warning">BIRTH YEAR</h3>
          </div>
          <div className="col-md">
            <h3 className="text-warning">MASS</h3>
          </div>
          <div className="col-md">
            <h3 className="text-warning">HEIGHT</h3>
          </div>
        </div>
        </div>
        <div className="card mb-3 bg-dark text-center mx-auto p-2" style={{ maxWidth: "1500px" }}>
          <div className="row">
            <div className="col-md">
              <p className="text-white">{store.personaje.gender}</p>
            </div>
            <div className="col-md">
              <p className="text-white">{store.personaje.hair_color}</p>
            </div>
            <div className="col-md">
              <p className="text-white">{store.personaje.skin_color}</p>
            </div>
            <div className="col-md">
              <p className="text-white">{store.personaje.eye_color}</p>
            </div>
            <div className="col-md">
              <p className="text-white">{store.personaje.birth_year}</p>
            </div>
            <div className="col-md">
              <p className="text-white">{store.personaje.mass}</p>
            </div>
            <div className="col-md">
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


