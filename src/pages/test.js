import React from "react";

import Card from "../components/PokemonList";
import HeaderLogo from "@/components/Header";
import PokemonList from "../components/PokemonList";

import { useRouter } from 'next/router'
 



const Test = () => {

    return (
      <div>
        <HeaderLogo />
        <PokemonList />
      </div>
    )
  }

    export default Test