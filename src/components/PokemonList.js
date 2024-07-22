import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScrollPosition, setGetData } from "../Redux/actions/scrollActions";
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
      window.scrollTo(0, scrollPosition); // Restauramos la posición de desplazamiento
    }
  }, [loading, scrollPosition]);

  const handleLoadMore = () => {
    dispatch(setScrollPosition(window.scrollY)); // Guardamos la posición de desplazamiento en Redux
    masPokemones();
  };

  const handleGetPokemones = () => {
    dispatch(setGetData(true)); // Cambiamos el estado de getData en Redux
  };

  return (
    <section className="container">
      {!getData && (
        <div className="btnSection text-center">
          <button onClick={handleGetPokemones} className="callpokemones-btn btn btn-primary">
            Conseguir pokemones
          </button>
        </div>
      )}
      {getData && (
        <>
          <div className="row">
            {pokemones.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <Card pokemon={item} />
              </div>
            ))}
          </div>
          <div className="btn-more text-center">
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