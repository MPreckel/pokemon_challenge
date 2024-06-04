import * as t from "../types";

const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

export const getPokemons = () => (dispatch: any) => {
  dispatch({ type: t.GET_POKEMONS_FETCH, payload: "test" });
//   async (url = URL_DEFAULT) => {
//     const response = fetch(url)
//       .then((response) => {
//         const res = response.json();
//         console.log(response.json(), "res JSON ariel");
//         dispatch({ type: t.GET_POKEMONS_FETCH, payload: res });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
};
