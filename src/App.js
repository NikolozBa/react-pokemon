import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button,  Row, Col, Card } from 'reactstrap';
import PokemonCard from './components/PokemonCard';


function App() {

  const [allPokemons, setAllPokemons] = useState([]);
  const [nextBatchURL, setNextBatchURL] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getNextBatch = async() => {
    const batch = await axios.get(nextBatchURL);
    setNextBatchURL(batch.data.next);

    batch.data.results.forEach(async (element) => {
      const pokemonData = await axios.get(element.url);
      setAllPokemons( prev => [...prev, pokemonData]);
      //console.log(pokemonData);
    });
  }

  useEffect(() => {
    getNextBatch()
   }, [])
  

  return (
    <div className="App">
      <h1 className='text-center'>Pokemon Evolution</h1>
      <div className='cardContainer'>
        {allPokemons.map((element, index) => {
          return(
            <PokemonCard 
            key = {index}
            name = {element.data.name}
            img = {element.data.sprites.other.dream_world.front_default}
            id = {element.data.id}
            type = {element.data.types[0].type.name}
            />
          )
        })}
      </div>
      <Button onClick={getNextBatch} className='w-25'>Load More</Button>
    </div>
  );
}

export default App;
