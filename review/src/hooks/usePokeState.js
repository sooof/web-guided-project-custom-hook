import {useState, useEffect} from 'react';
import getPokemen from './../services/getPokemen';
import getPokemon from './../services/getPokemon';

// const getPokemon =(id) =>{
//   return   axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//   .then(resp => {
//     console.log("1", resp.data)
//     return resp.data
//   })
//   // .then(data => {
//   //   console.log("2 ", data.forms)
//   //   return data.forms
//   // })
//   // .then(item =>{
//   //   console.log("3 ", item)
//   //   return item
//   // })
// }
const usePokeState = () => {
    const [pokemen, setPokemen] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState({});
  
    useEffect(() => {
      setPokemen(getPokemen());
    }, []);
  
    const handlePoke = (id) => {
      // console.log(getPokemon(id))
      getPokemon(id)
        .then((res) => {
          console.log("h",res)
          setSelectedPokemon(res);
        });
      // axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      //   .then((res) => {
      //     setSelectedPokemon(res.data);
      //   });
    };
  
    return [pokemen, handlePoke, selectedPokemon];
}

export default usePokeState;