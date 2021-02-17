import { useHistory } from 'react-router-dom';

const Details = ({ pokemon, pokeId }) => {
  const history = useHistory();
  pokemon = pokemon.filter(poke => poke.id === pokeId)[0];
  let evo = () => {
    if (pokemon.hasOwnProperty('next_evolution')) {
      return pokemon.next_evolution[0].name;
    } else {
      return 'N/A';
    }
  }
  let s = '<-';
  const back = <button id="back" onClick={() => {
    history.go(-1);
  }} > {s} </button>

  return (
    <>
      <div className="info-card">
        <div><img src={pokemon.img} height="250" width="250" /></div>
        <div className="data">
          <div><h2>Type:</h2> <span>{
            pokemon.type.map(type => {
              return (
                <h2 id={type}>{type}</h2>
              );
            })
          }</span></div>
          <div><h2>Height: {pokemon.height}</h2></div>
          <div><h2>Weight: {pokemon.weight}</h2></div>
          <div><h2>Weaknesses:</h2><span>{
            pokemon.weaknesses.map(type => {
              return (
                <span><h2 id={type}>{type}</h2></span>
              );
            })
          }</span></div>
          <div><h2> Next Evolution: {evo()}</h2></div>
        </div>
      </div>
      {back}
    </>
  );
}

export default Details;