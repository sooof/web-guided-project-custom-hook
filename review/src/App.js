import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from 'axios';

import PokeDetails from './components/PokeDetails'
import PokeList from './components/PokeList'
import {getPokemon} from './services/PokeServices'



function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getPokemon)
    //setPokemen(data);
  }, []);

  const handlePoke = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        setSelectedPokemon(res.data);
      });
  };

  return (
    <div className="App">
      <PokeDetails selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;
