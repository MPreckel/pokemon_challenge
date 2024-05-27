
import React, { useState } from "react";
import usePokemones from "../hooks/usePokemones"

export default function Card() {
  const {pokemones, masPokemones} = usePokemones();
  const [getData, setGetData] = useState(false)
  const [style, setStyle] = useState("noactive")
  const [change, setChange] = useState(true)
    // Crear un component PokemonList que es este componente en elq ue estamos parados
    // Crear un componente PokemonCard que sería lo que está en el return
    // toggleMoreData -> change el display de none a flex | block | inline
    // toggleMoreData -> change el heigth de 100% a 0% con un transition
    const toggleHeight = () => {
      setChange(!change)
      change ? 
      setStyle("active") 
      : 
      setStyle("noactive") 
    }
    
  return (
    <section>
      {!getData && <button onClick={()=> setGetData(true)}>Conseguir pokemones</button>}
      {getData && 
      
      <>
        {pokemones.map((item) => {
          // pokemon card
          // <Card pokemon = {item} onClick={toggleMoreData} />
        return (
          <div className="container" key={item.id}>
            <div className="card">
              <div className="card-info">
                <img src={item.img} alt={item.name} className="card-img poke-img" />
                <span className="poke-id">#{item.id}</span>
                <div className="card-types">
                  <span className={item.type1}>{item.type1}</span>
                </div>
              </div>
              <div>
                <p className="poke-name">{item.name}</p>
              </div>
            </div>
            {/* mas divs mostrando data extra adentro de un div padre el cual vamos a modificar el display entre flex y none */}
          </div>
        );
      })}
      <div className='btn-more'>
        <button onClick={masPokemones}>Ver más</button>
    </div>
      </>}
      <div onClick={toggleHeight} > PIKACHU </div>
      <div className={style} style={{position: "absolute"}}>
        <div style={{height: "100%"}}>pikachu es re capo</div>
      </div>
    </section>
      
  );
}