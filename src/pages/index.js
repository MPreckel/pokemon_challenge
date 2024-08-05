import Head from "next/head";
import Image from "next/image";
import Router, { useRouter } from "next/router";

import HeaderLogo from "@/components/Header";
import PokemonList from "../components/PokemonList";

const Home = () => {
  const router = useRouter();
  
  const redirectHome = () => {
    router.push('/test')
  }
  return (
    <div>
      <HeaderLogo />
      <PokemonList />
    </div>
  );
};

export default Home;
