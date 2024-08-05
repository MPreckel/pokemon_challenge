import { preloadStyle } from 'next/dist/server/app-render/entry-base';
import * as t from '../types'

const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=18&offset=0";


export const getPokemonsAction =
  (nextUrl?: string) => async (dispatch: any) => {
    dispatch({ type: t.GET_POKEMONS_FETCHING })
    const response = await fetch(nextUrl ? nextUrl : URL_DEFAULT);
    const listaPokemones = await response.json();
    const { next, results } = listaPokemones;
    const newPokemones = await Promise.all(
      results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();
        return poke;
      })
    )
    dispatch({
      type: t.GET_POKEMONS_FETCH,
      payload: { next: next, results: newPokemones }
    })
  }

  export const saveScrollPosition = (y: number) => (dispatch: any) => {
    dispatch({
      type: t.SAVE_POS,
      payload: y
    })
  }