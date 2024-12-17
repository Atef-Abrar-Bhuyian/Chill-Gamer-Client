import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { authContext } from "../../components/AuthProvider/AuthProvider";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const { user } = useContext(authContext);
  const currentUser = user?.email;
  const currentUserName = user?.displayName;

  const game = useLoaderData();
  const { _id, image, title, rating, year, genre, name, email } = game;
  const wishlistGame = {
    _id,
    name,
    email,
    image,
    title,
    rating,
    year,
    genre,
    currentUser,
    currentUserName,
  };

  const handleAddtoWishlist = () => {
    fetch("http://localhost:5000/wishlist")
      .then((res) => res.json())
      .then((data) => {
        const isGameInWishlist = data.find(
          (item) => item._id === game._id && item.currentUser === user?.email
        );
        if (isGameInWishlist) {
          Swal.fire({
            title: "Oops!",
            text: "This game is already in your wishlist.",
            icon: "warning",
            confirmButtonText: "Got it!",
            background: "#330066",
            color: "#fff",
          });
        } else {
          fetch("http://localhost:5000/wishlist", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(wishlistGame),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                // Successfully added to wishlist
                Swal.fire({
                  title: "Success!",
                  text: "Game Added to Wishlist Successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                  background: "#330066",
                  color: "#fff",
                });
              }
            });
        }
      });
  };

  return (
    <div className="md:w-4/5 mx-auto my-10">
      <Tooltip id="wishlist-tooltip" />
      <Fade delay={500}>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="w-4/5 mx-auto">
            <img className="rounded-2xl" src={game.image} alt="" />
            <div className="flex flex-col md:flex-row gap-4">
              <p className="mt-4 text-sm">
                <span className="font-bold">Reviwed By :</span> {game.name}{" "}
              </p>
              <p className="mt-4 text-sm">
                <span className="font-bold ">Email :</span> {game.email}{" "}
              </p>
              <p className="mt-4 text-sm">
                <span className="font-bold">Publish Year :</span> {game.year}{" "}
              </p>
            </div>
          </div>
          <div className="w-4/5 md:w-2/3 mx-auto space-y-5">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold">{game.title}</h1>
              {user && (
                <button
                  onClick={handleAddtoWishlist}
                  data-tooltip-id="wishlist-tooltip"
                  data-tooltip-content={"Add to Wishlist"}
                >
                  <FaHeart className="text-2xl text-purple-500 cursor-pointer" />
                </button>
              )}
            </div>
            <p>
              <span className="font-bold">Review : </span>
              {game.review}
            </p>
            <p>
              <span className="font-bold">Rating :</span> {game.rating} / 10
            </p>
            <p>
              <span className="font-bold">Genre :</span> {game.genre}{" "}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ReviewDetails;
