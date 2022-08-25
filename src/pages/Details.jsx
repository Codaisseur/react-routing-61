import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

// /details/:pokemonName

// /details/pikachu
// /details/bulbasaur
const Details = () => {
  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchSomeData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
        );
        console.log(response.data);
        setData(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchSomeData();
  }, [params.pokemonName]);

  console.log("what are params???", params);
  return (
    <div>
      <h2>Details!</h2>

      {data && (
        <div>
          <img src={data.sprites.front_default} />
          <h3>{data.name}</h3>
        </div>
      )}
    </div>
  );
};

export default Details;
