import { useState, useEffect } from "react";
import axios from "axios";

const Games = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/games");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  // all ok
  return isLoading ? (
    <p>En cours de téléchargement</p>
  ) : (
    <div>
      {data.results.map((game, index) => {
        return (
          <div className="game" key={game.id}>
            <img className="game-img" src={game.background_image} alt="" />
            <p>{game.slug}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Games;
