import React, { useEffect, useState } from "react";
const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

export default function usePokemones() {
  const [pokemones, setPokemones] = useState([])
  const [siguienteUrl, setSiguienteUrl] = useState(``)
  

  const getPokemones = async (url = URL_DEFAULT) => {
    const response = await fetch(url);
    const listaPokemones = await response.json();
    const { next, results } = listaPokemones;

    const newPokemones = await Promise.all(
      results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();
        return poke
      })
    )
    return { next, newPokemones}
  };


  // img: poke.sprites.other.dream_world.front_default,
  //         name: poke.name,
  //         id: poke.id,
  //         type1: poke.types[0].type.name,
  
  const obtenerPokemones = async () => {
    const { next, newPokemones } = await getPokemones()
    setPokemones(newPokemones)
    setSiguienteUrl(next)
  }
  
  const getPokemonesStatic = () => {
    return pokemones
  }

  const masPokemones = async () => {
    const { next, newPokemones } = await getPokemones(siguienteUrl)
    setPokemones(prev =>[...prev, ...newPokemones])
    setSiguienteUrl(next)
  }

  useEffect(() => {
    console.log("GHOAL")
  }, []);


  return { pokemones, masPokemones, obtenerPokemones };
}