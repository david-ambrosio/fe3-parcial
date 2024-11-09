/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

function Form({ setData, setError }) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación para el primer input
    if (input1.length < 3 || input1.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      setData(null);
      return;
    }

    // Validación para el segundo input
    if (input2.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setData(null);
      return;
    }

    // Si todas las validaciones son correctas
    setError("");
    setData({ input1, input2 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Deporte Favorito</h2>
      <label>
        Ingresa tu nombre:
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Ingresa tu deporte favorito:
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

Form.propTypes = {
  setData: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Form;
