import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";

const AllReviews = () => {
  const allGames = useLoaderData();
  const [showAllGames, setShowAllGames] = useState(allGames);

  const handleGenre = (value) => {
    if (value === "all") {
      setShowAllGames(allGames);
    } else {
      const checkGenre = allGames.filter((g) => g.genre === value);
      setShowAllGames(checkGenre);
    }
  };

  const handleSort = (value) => {
    if (value === "newest") {
      fetch("https://chill-gamer-server-ashen.vercel.app/games/newest")
        .then((res) => res.json())
        .then((data) => {
          setShowAllGames(data);
        });
    } else if (value === "oldest") {
      fetch("https://chill-gamer-server-ashen.vercel.app/games/oldest")
        .then((res) => res.json())
        .then((data) => {
          setShowAllGames(data);
        });
    } else if (value === "hrating") {
      fetch("https://chill-gamer-server-ashen.vercel.app/games/hrating")
        .then((res) => res.json())
        .then((data) => {
          setShowAllGames(data);
        });
    } else if (value === "lrating") {
      fetch("https://chill-gamer-server-ashen.vercel.app/games/lrating")
        .then((res) => res.json())
        .then((data) => {
          setShowAllGames(data);
        });
    } else {
      setShowAllGames(allGames);
    }
  };

  return (
    <div className="mb-20">
      <div className="bg-gradient-to-l from-purple-900 via-violet-950 to-purple-950">
        <h2 className="text-center font-bold text-3xl md:text-5xl p-12 text-white animate__animated animate__flash">
          All Reviews
        </h2>
      </div>

      <div className="w-4/5 mx-auto flex justify-between mt-5">
        <div>
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="select border-purple-700 max-w-xs font-bold"
          >
            <option value={"normal"}>Sort By</option>
            <option value={"newest"}>Newest Games</option>
            <option value={"oldest"}>Oldest Games </option>
            <option value={"hrating"}>Best Rated</option>
            <option value={"lrating"}>Lowest Rated</option>
          </select>
        </div>

        <div className="font-bold relative">
          <select
            onChange={(e) => handleGenre(e.target.value)}
            className="select border-purple-700 max-w-xs"
          >
            <option value={"all"}>All Genre</option>
            <option value={"Action"}>Action</option>
            <option value={"Story"}>Story</option>
            <option value={"Fps"}>FPS</option>
            <option value={"Horror"}>Horror</option>
            <option value={"RPG"}>RPG</option>
            <option value={"Adventure"}>Adventure</option>
          </select>
        </div>
      </div>

      <Fade delay={1000}>
        <div className="grid md:grid-cols-3 gap-6 w-4/5 mx-auto mt-10 ">
          {showAllGames.map((game) => (
            <div
              key={game._id}
              className="card bg-gradient-to-b from-purple-950 to-gray-950 hover:border hover:border-purple-700 hover:shadow-purple-500 hover:shadow-md cursor-pointer text-white"
            >
              <figure>
                <img src={game.image} alt={game.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{game.title}</h2>
                <div className="md:flex items-center justify-between">
                  <p>Rating : {game.rating} / 10 </p>
                  <p>Release Year : {game.year}</p>
                </div>
                <p>Genre : {game.genre}</p>
                <Link to={`/reviewdetails/${game._id}`}>
                  <button className="mt-4 btn bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-950 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white">
                    Explore Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default AllReviews;
