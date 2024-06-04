
import React, { useState } from "react";
import usePokemones from "../hooks/usePokemones"
import Button from "./Button"
import Card from "./Card";
export default function PokemonList() {
  const {pokemones, masPokemones, obtenerPokemones} = usePokemones();
  const [getData, setGetData] = useState(false)
  
  React.useEffect(() =>{
    obtenerPokemones()
  }, [])

  React.useEffect(() =>{
    console.log(pokemones)
  },[pokemones])
    
  return (
    <section>
      {!getData && <button onClick={()=> setGetData(true)} className="callpokemones-btn">Conseguir pokemones</button>}
      {getData && 
      <>
        {pokemones.map((item) => (
            <Card key={item.id} pokemon={item} />
          ))}
      <div className='btn-more'>
        <Button onClick={masPokemones} />
      </div>
      </>
     }
    </section>
      
  );
}