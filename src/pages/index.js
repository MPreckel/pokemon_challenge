import Head from "next/head";
import Image from "next/image";
import Router, { useRouter } from "next/router";

export default function Home() {
  // llamar al hook que creaste y acceder a la data
  // con la data vas a llamar al componente pokemonList y pasarle la data
  // const {pokemones, masPokemones} = usePokemones();
  // <PokemonList data = { pokemones } getMore={masPokemones} />


  


  return (
    <>
      <Head>
        <title>Challenge Pokemon</title>
        <meta name="description" content="Challenge Pokemon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="./styles/globals.css"/>
      </Head>
      <div>
        ACA VA EL COMPONENTE POKEMONLIST
      </div>

    </>
  );
}
