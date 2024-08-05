import * as t from '../types'

export enum ServerStatus { 
  IDLE, 
  FETCHING, 
  FETCH, 
  FETCH_ERROR
}

const initialState = {
    pokemons: [],
    pokemonStatus: ServerStatus.IDLE,
    nextUrl: undefined,
    scrollY: 0
  }


const reducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case t.GET_POKEMONS_FETCHING: {
      return {
        ...state,
        pokemonStatus: ServerStatus.FETCHING,
      }
    }
    case t.GET_POKEMONS_FETCH: {

      const newPokemons = state.pokemons.concat(action.payload.results)
      return {
        ...state,
        pokemons: newPokemons,
        pokemonStatus: ServerStatus.FETCH,
        nextUrl: action.payload.next
      }
    }    
    case t.GET_POKEMONS_FETCH_ERROR: {
      return {
        ...state,
        pokemonStatus: ServerStatus.FETCH_ERROR,
      }
    }

    case t.SAVE_POS: {
      return {
        ...state,
        scrollY: action.payload
      }
    }
    // case t.GET_POKEMONS_BY_ID_FETCHING: {
    //   return {
    //     ...state,
    //     pokemonStatus: "Los estoy buscando"
    //   }
    // }
    // case t.GET_POKEMONS_BY_ID_FETCH: {
    //   return {
    //     ...state,
    //     activePokemon: action.payload,
    //     pokemonStatus: "Los consegui",
    //   }
    // }    
    // case t.GET_POKEMONS_BY_ID_FETCH_ERROR: {
    //   return {
    //     ...state,
    //     pokemonStatus: "No los consegui"
    //   }
    // }
    default:
      return {
        ...state
      }
  }
}

export default reducer
