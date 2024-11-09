/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  return (
    <div className="App">
      <Form setData={setData} setError={setError} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <Card info={data} />}
    </div>
  );
}

export default App;
