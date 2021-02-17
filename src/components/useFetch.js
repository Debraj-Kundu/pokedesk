import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPokemon(data.pokemon);
      })
      .catch(e => {
        console.log('Error 404');
      })
  }, [url])

  return { pokemon, setPokemon };
}

export default useFetch;