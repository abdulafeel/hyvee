// pages/index.js

"use client";
import { useState } from "react";
import NameForm from "./components/NameForm";

const Home = () => {
  const [results, setResults] = useState({});

  const handleSubmit = async (name) => {
    try {
      const [agifyData, genderizeData, nationalizeData] = await Promise.all([
        fetch(`https://api.agify.io?name=${name}`).then((res) => res.json()),
        fetch(`https://api.genderize.io?name=${name}`).then((res) =>
          res.json()
        ),
        fetch(`https://api.nationalize.io?name=${name}`).then((res) =>
          res.json()
        ),
      ]);

      setResults({
        age: agifyData.age,
        gender: genderizeData.gender,
        country: nationalizeData.country[0]?.country_id,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Name Guesser</h1>
      <NameForm onSubmit={handleSubmit} />
      {results.age && (
        <div style={{ marginTop: "20px" }}>
          <p>Guessed Age: {results.age}</p>
          <p>Guessed Gender: {results.gender}</p>
          <p>Guessed Country: {results.country}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
