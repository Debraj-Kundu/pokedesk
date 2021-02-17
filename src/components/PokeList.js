import { Link } from 'react-router-dom';

const PokeList = ({ pokemon, type, setPokeId }) => {

  const newPokemon = pokemon.filter(poke => poke.type.indexOf(type) > -1);

  return (
    <>
      <div className="container">
        {
          newPokemon.map((poke) => {
            return (
              <>
                <div className="card" key={poke.id}>
                  <h4>{poke.name}</h4>
                  <img src={poke.img} />
                  <p>{poke.type.map(type => {
                    return (
                      <h2 id={type}>{type}</h2>
                    );
                  })}</p>
                  <button> <Link id="btn-link" to="/data" onClick={() => setPokeId(poke.id)}>Info</Link> </button>
                </div>
              </>
            );
          })
        }
      </div>
    </>
  );
}

export default PokeList;
