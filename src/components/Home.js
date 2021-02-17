import { Link } from 'react-router-dom';

const Home = ({ pokemon, setType }) => {
  let typeSet = new Set();
  pokemon.forEach(poke => {
    poke.type.forEach(type => {
      typeSet.add(type);
    });
  });
  let typeList = [...typeSet];
  const types = typeList.map(type => {
    return (
      <div className={`types ${type}`} key={type}><Link onClick={() => setType(type)} className="link-text" to="/card">{type}</Link></div>
    )
  });
  return (
    <>
      <div className="container-type">
        {types}
      </div>
    </>
  );
}

export default Home;