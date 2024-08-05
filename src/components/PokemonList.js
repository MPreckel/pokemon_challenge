import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";

import { ServerStatus  } from '../redux/pokemons/reducer/index'
import { getPokemonsAction, saveScrollPosition  } from '../redux/pokemons/actions/index'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const pokemonReducer = state.pokemons
  return {
    pokemons: pokemonReducer.pokemons,
    messageFetch: pokemonReducer.messageFetch,
    nextUrl: pokemonReducer.nextUrl,
    scrollY: pokemonReducer.scrollY,
    pokemonStatus: pokemonReducer.pokemonStatus
  }
}

const mapDispatchToProps = {
  getPokemonsAction,
  saveScrollPosition
}

function PokemonList({
  pokemons,
  pokemonStatus,
  scrollY,
  nextUrl,
  getPokemonsAction,
  saveScrollPosition
}) {

  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    if (scrollY) {
      window.scrollTo(0, scrollY)
    }
  },[])

  useEffect(()=>{
    if (pokemonStatus === ServerStatus.FETCH) setLoading(false)
  }, [pokemonStatus])

  const handleGetPokemones = (e) => {
    setLoading(true)
    e.preventDefault()
    e.stopPropagation()
    getPokemonsAction(nextUrl ? nextUrl : undefined)
  };

  const handleSavePos = () => {
    saveScrollPosition(window.scrollY)
  }

  return (
    <section className="container poke-list">
      {pokemons.length === 0 && (
        <div className="text-center">
          <button onClick={(e)=>{
            handleGetPokemones(e)
            }} className="callpokemones-btn">
            Conseguir pokemones
          </button>
        </div>
      )}
      {pokemons.length > 0 && (
        <>
          <div className="row">
            {pokemons.map((pokemon) => (
              <div onClick={handleSavePos} className="col-lg-4 mb-4 col-12 col-md-6" key={pokemon.id}>
                <Card pokemon={pokemon} />
              </div>
            ))}
          </div>
          <div className="btn-more text-center">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Button onClick={(e)=>handleGetPokemones(e)} />
            )}
          </div>
        </>
      )}
    </section>
  );
} 

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
