import { Link } from "react-router-dom";

const pokeNames = ["bulbasaur", "pikachu", "charmander"];

const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3>Pokemons!</h3>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>

      {pokeNames.map((name) => (
        <Link to={`/details/${name}`}>{name}</Link>
      ))}
    </div>
  );
};

export default NavBar;
