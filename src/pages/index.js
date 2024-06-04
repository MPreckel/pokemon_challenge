import Head from "next/head";
import Image from "next/image";
import Router, { useRouter } from "next/router";

import HeaderLogo from "@/components/Header";
import PokemonList from "../components/PokemonList";

const Home = () => {

  return (
    <div>
      <HeaderLogo />
      <PokemonList />

    </div>
  )
}

  export default Home
