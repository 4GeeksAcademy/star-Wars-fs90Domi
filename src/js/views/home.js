import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.loadCharacters(); // Cargar personajes cuando el componente se monta
  }, [actions]);

  return (
    <div className="text-center mt-5">
      <img
        src="https://foroalfa.org/imagenes/ilustraciones/4166.jpg"
        alt="Star Wars Logo"
        className="img-fluid"
      />
    </div>
  );
};
