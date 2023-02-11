import style from './SearchBar.module.css';
import React, { useState } from 'react';

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleChance = (e) => {
      const { value } = e.target;
      setCharacter(value)
   }

   return (
      <div className={style.search}>
         <input className={style.inp} type='search' onChange={handleChance}/>
      <button className={style.btn} onClick={() => props.onSearch(character) }>Agregar</button>
      </div>
   );
}
