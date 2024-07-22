import React from "react";
import { useDispatch } from "react-redux";
import { setScrollPosition, setGetData } from "../Redux/actions/scrollActions";
import { useRouter } from "next/router";

function Card({ pokemon }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setScrollPosition(window.scrollY)); // Guardamos la posición de desplazamiento en Redux
    dispatch(setGetData(true)); // Cambiamos el estado de getData en Redux
    router.push(`/${pokemon.id}`);
  };

  return (
    <div className="" key={pokemon.id} onClick={handleClick}>
      <div className={`card ${pokemon.types[0].type.name}`}>
        <div className="card-info">
          <div>
            <p className="poke-name">{pokemon.name}</p>

            <div className="card-types types-list">
              <span className={`${pokemon.types[0].type.name}-type`}>
                {pokemon.types[0].type.name}
              </span>
              {pokemon.types[1] && (
                <span className={`${pokemon.types[0].type.name}-type`}>
                  {pokemon.types[1].type.name}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="card-img">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className="poke-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
