import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";

const TopRatedGames = () => {
  const loadedTopGames = useLoaderData();

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-3xl md:text-4xl font-bold w-3/4 mx-auto text-center mb-10">
        <Fade>Top-Rated Games</Fade>
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {loadedTopGames?.map((game) => (
          <div
            key={game._id}
            className="card bg-gradient-to-b from-purple-950 to-gray-950 hover:border hover:border-purple-700 hover:shadow-purple-500 hover:shadow-md cursor-pointer text-white"
          >
            <figure className="px-6 pt-6">
              <img src={game?.image} alt={game.title} className="rounded-xl " />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{game?.title}</h2>
              <div className="md:flex items-center justify-between">
                <p>Rating: {game?.rating}/10 </p>
                <p>Release date: {game?.year}</p>
              </div>
              <p>Genre: {game?.genre}</p>
              <Link to={`/reviewdetails/${game?._id}`}>
                <button className="mt-4 btn bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-950 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white">
                  Explore Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedGames;
