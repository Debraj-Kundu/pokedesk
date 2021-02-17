import { Link, useHistory } from 'react-router-dom';
const Navbar = () => {
  const history = useHistory();
  const home = <Link id="navbar-link" onClick={() => {
    history.push('/');
  }}>Home</Link>;
  return (
    <div className="container navbar">
      {home}
    </div>
  );
}

export default Navbar;