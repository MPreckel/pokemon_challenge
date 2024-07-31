import React, { useEffect, useState } from "react";
const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=18&offset=0";

export default function usePokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [siguienteUrl, setSiguienteUrl] = useState(URL_DEFAULT);
  const [loading, setLoading] = useState(false);  // Estado para la carga

  const getPokemones = async (url = URL_DEFAULT) => {
    const response = await fetch(url);
    const listaPokemones = await response.json();
    const { next, results } = listaPokemones;

    const newPokemones = await Promise.all(
      results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();
        return poke;
      })
    );
    return { next, newPokemones };
  };

  const obtenerPokemones = async () => {
    setLoading(true);  // Comienza la carga
    const { next, newPokemones } = await getPokemones();
    setPokemones(newPokemones);
    setSiguienteUrl(next);
    setLoading(false);  // Termina la carga
  };

  const masPokemones = async () => {
    setLoading(true);  // Comienza la carga
    const { next, newPokemones } = await getPokemones(siguienteUrl);
    setPokemones(prev => [...prev, ...newPokemones]);
    setSiguienteUrl(next);
    setLoading(false);  // Termina la carga
  };

  const setPokemonesState = (pokemones) => {
    setPokemones(pokemones);
  };

  useEffect(() => {
    obtenerPokemones();
  }, []);

  return { pokemones, masPokemones, loading, setPokemonesState };
}