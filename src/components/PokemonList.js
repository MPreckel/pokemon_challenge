import React, { useState } from "react";
import usePokemones from "../hooks/usePokemones";
import Button from "./Button";
import Card from "./Card";
export default function PokemonList() {
  const { pokemones, masPokemones } = usePokemones();
  const [getData, setGetData] = useState(false);

  return (
    <section>
      {!getData && (
        <div className="btnSection">
          <button
            onClick={() => setGetData(true)}
            className="callpokemones-btn"
          >
            Conseguir pokemones
          </button>
        </div>
      )}
      {getData && (
        <>
          {pokemones.map((item) => (
            <Card key={item.id} pokemon={item} />
          ))}
          <div className="btn-more">
            <Button onClick={masPokemones} />
          </div>
        </>
      )}
    </section>
  );
}
