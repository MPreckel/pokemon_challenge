import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setScrollPosition, setGetData } from '../scrollSlice';
import usePokemones from "../hooks/usePokemones";
import Button from "./Button";
import Card from "./Card";

export default function PokemonList() {
  const dispatch = useDispatch();
  const scrollPosition = useSelector((state) => state.scroll.scrollPosition);
  const getData = useSelector((state) => state.scroll.getData);
  const { pokemones, masPokemones, loading } = usePokemones();

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, scrollPosition);
    }
  }, [loading, scrollPosition]);

  const handleLoadMore = () => {
    dispatch(setScrollPosition(window.scrollY));
    masPokemones();
  };

  const handleGetPokemones = () => {
    dispatch(setGetData(true));
  };

  return (
    <section>
      {!getData && (
        <div className="btnSection">
          <button
            onClick={handleGetPokemones}
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
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Button onClick={handleLoadMore} />
            )}
          </div>
        </>
      )}
    </section>
  );
}