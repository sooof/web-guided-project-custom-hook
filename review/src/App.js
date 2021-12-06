import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from 'axios';
import data from "../data";
import SelectedPokemon from './components/SelectedPokemon';
import PokeList from './components/PokeList';
import usePokeState from './hooks/usePokeState';

function App() {

  const [pokemen, handlePoke, selectedPokemon] = usePokeState();
  
  // const [pokemen, setPokemen] = useState([]);
  // const [selectedPokemon, setSelectedPokemon] = useState({});

  // useEffect(() => {
  //   setPokemen(data);
  // }, []);

  // const handlePoke = (id) => {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  //     .then((res) => {
  //       setSelectedPokemon(res.data);
  //     });
  // };

  return (
    <div className="App">
       <SelectedPokemon selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;
