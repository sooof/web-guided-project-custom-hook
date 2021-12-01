import {useState, useEffect} from 'react';
import getPokemen from './../services/getPokemen';
import axios from 'axios';

const usePokeState = () => {
    const [pokemen, setPokemen] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState({});
  
    useEffect(() => {
      setPokemen(getPokemen());
    }, []);
  
    const handlePoke = (id) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => {
          setSelectedPokemon(res.data);
        });
    };
  
    return [pokemen, handlePoke, selectedPokemon];
}

export default usePokeState;