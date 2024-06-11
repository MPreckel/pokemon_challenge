import React, { useState, useEffect } from "react";
import usePokemones from "../hooks/usePokemones";
import Button from "./Button";
import Card from "./Card";

export default function PokemonList() {
  const { pokemones, masPokemones, loading } = usePokemones();
  const [getData, setGetData] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, scrollPosition);
    }
  }, [loading, scrollPosition]);

  const handleLoadMore = () => {
    setScrollPosition(window.scrollY);
    masPokemones();
  };

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
          {loading && <div>Loading...</div>}
          {!loading && (
            <>
              {pokemones.map((item) => (
                <Card key={item.id} pokemon={item} />
              ))}
              <div className="btn-more">
                <Button onClick={handleLoadMore} />
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}