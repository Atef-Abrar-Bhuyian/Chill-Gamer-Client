import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { authContext } from "../../components/AuthProvider/AuthProvider";
import { Fade } from "react-awesome-reveal";

const ReviewDetails = () => {
  const { user } = useContext(authContext);
  const game = useLoaderData();

  return (
    <div className="w-4/5 mx-auto my-10">
      <Tooltip id="wishlist-tooltip" />
     <Fade delay={500}>
     <div className="flex justify-between gap-10">
        <div className="w-4/5 mx-auto">
          <img className="rounded-2xl" src={game.image} alt="" />
          <div className="flex gap-4">
            <p className="mt-4 text-sm">
              <span className="font-bold">Reviwed By:</span> {game.name}{" "}
            </p>
            <p className="mt-4 text-sm">
              <span className="font-bold ">Email:</span> {game.email}{" "}
            </p>
            <p className="mt-4 text-sm">
              <span className="font-bold">Publish Year:</span> {game.year}{" "}
            </p>
          </div>
        </div>
        <div className="w-2/3 mx-auto space-y-5">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">{game.title}</h1>
            {user && <Link
              data-tooltip-id="wishlist-tooltip"
              data-tooltip-content={"Add to Wishlist"}
            >
              <FaHeart className="text-2xl text-purple-500 cursor-pointer" />
            </Link>}
          </div>
          <p>
            <span className="font-bold">Review: </span>
            {game.review}
          </p>
          <p>
            <span className="font-bold">Rating:</span> {game.rating} / 10
          </p>
          <p>
            <span className="font-bold">Genre:</span> {game.genre}{" "}
          </p>
        </div>
      </div>
     </Fade>
    </div>
  );
};

export default ReviewDetails;
