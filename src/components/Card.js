import React from 'react'
import { useDispatch } from 'react-redux';
import { setScrollPosition, setGetData } from '../scrollSlice';
import { useRouter } from 'next/router';

function Card({ pokemon }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setScrollPosition(window.scrollY));
    dispatch(setGetData(true));
    router.push(`/${pokemon.id}`);
  }

  return (
    <div className="container" key={pokemon.id} onClick={handleClick}>
      <div className="card">
        <div className="card-info">
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="card-img poke-img" />
          <div className="card-types types-list">
            <span className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</span>
            {pokemon.types[1] && <span className={pokemon.types[1].type.name}>{pokemon.types[1].type.name}</span>}
          </div>
        </div>
        <div>
          <p className="poke-name">{pokemon.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;