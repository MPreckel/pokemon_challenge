import React from "react";

import Card from "../components/PokemonList";
import HeaderLogo from "@/components/Header";
import PokemonList from "../components/PokemonList";

import { useRouter } from "next/router";

const Test = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          {/* meter acá al map que devuelve a los hijos, col 12 col-sm-2 col-md-3 */}
        <div className="col-12 col-md-6 bg-danger">HOLA</div>
        <div className="col-12 col-md-6 bg-success">CHAU</div>
        <div className="col-12 col-md-6 bg-primary">CAPO</div>
        <div className="col-12 col-md-6 bg-danger">HOLA</div>
        <div className="col-12 col-md-6 bg-success">CHAU</div>
        <div className="col-12 col-md-6 bg-primary">CAPO</div>
        </div>
      </div>
    </div>
  );
};

export default Test;
