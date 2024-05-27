
import React, { useState } from "react";
import usePokemones from "../hooks/usePokemones"

export default function Card() {
  const {pokemones, masPokemones} = usePokemones();
  const [getData, setGetData] = useState(false)
  
    
  
  return (
    <section>
      {!getData && <button onClick={()=> setGetData(true)}>Conseguir pokemones</button>}
      {getData && 
      
      <>
        {pokemones.map((item) => {
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
          </div>
        );
      })}
      <div className='btn-more'>
        <button onClick={masPokemones}>Ver más</button>
    </div>
      </>}
    </section>
      
  );
}