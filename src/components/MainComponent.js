import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import useFetch from './useFetch';
import PokeList from './PokeList';
import Details from './PokeData';
import Navbar from './Navigation';
import Error from './Error';

const Main = () => {
  const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
  const { pokemon } = useFetch(url);
  const [type, setType] = useState(null);
  const [pokeId, setPokeId] = useState(null);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {pokemon && <Home pokemon={pokemon} setType={setType} />}
          </Route>
          <Route path="/card">
            <>
              <PokeList pokemon={pokemon} type={type} setPokeId={setPokeId} />
            </>
          </Route>
          <Route path="/data">
            <Details pokemon={pokemon} pokeId={pokeId} />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Main;