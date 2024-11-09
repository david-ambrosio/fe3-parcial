/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function Card({ info }) {
  return (
    <div
      style={{ border: "10px solid #ccc", padding: "20px", marginTop: "20px" }}
    >
      <h3>Información Ingresada</h3>
      <p>Hola mucho gusto: {info.input1}</p>
      <p>Tu deporte favorito es: {info.input2}</p>
    </div>
  );
}

// Definir los tipos de los props
Card.propTypes = {
  info: PropTypes.shape({
    input1: PropTypes.string.isRequired,
    input2: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
