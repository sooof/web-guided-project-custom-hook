import axios from 'axios';

const getPokemon =(id) =>{
    return   axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(resp => {
      console.log("1", resp.data)
      return resp.data
    })
    // .then(data => {
    //   console.log("2 ", data.forms)
    //   return data.forms
    // })
    // .then(item =>{
    //   console.log("3 ", item)
    //   return item
    // })
  }

  export default getPokemon;