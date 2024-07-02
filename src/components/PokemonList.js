import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'; 
import { setScrollPosition, setGetData, setPokemones } from '../Redux/actions/scrollActions';  // Importamos acciones
import usePokemones from "../hooks/usePokemones";
import Button from "./Button";
import Card from "./Card";

export default function PokemonList() {
  const dispatch = useDispatch();
  const scrollPosition = useSelector((state) => state.scroll.scrollPosition);
  const getData = useSelector((state) => state.scroll.getData);
  const pokemonesRedux = useSelector((state) => state.scroll.pokemones);
  const { pokemones, masPokemones, loading, setPokemonesState } = usePokemones();
  
  useEffect(() => {
    if (pokemonesRedux.length > 0) {
      setPokemonesState(pokemonesRedux);
    } else if (getData) {
      masPokemones();
    }
  }, [getData, pokemonesRedux, masPokemones, setPokemonesState]);
  
  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, scrollPosition);  // Restauramos la posición de desplazamiento
    }
  }, [loading, scrollPosition]);

  const handleLoadMore = () => {
    dispatch(setScrollPosition(window.scrollY));  // Guardamos la posición de desplazamiento en Redux
    masPokemones();
  };

  const handleGetPokemones = () => {
    dispatch(setGetData(true));  // Cambiamos el estado de getData en Redux
  };

  useEffect(() => {
    if (!loading && getData) {
      dispatch(setPokemones(pokemones));
    }
  }, [loading, getData, pokemones, dispatch]);

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