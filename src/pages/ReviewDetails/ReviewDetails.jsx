import React, { useContext, useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { authContext } from "../../components/AuthProvider/AuthProvider";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const { user } = useContext(authContext);
  const currentUser = user?.email;
  const currentUserName = user?.displayName;
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const game = useLoaderData();
  const { _id, image, title, rating, year, genre, name, email } = game;
  const wishlistGame = {
    gameId: _id,
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


  useEffect(() => {
    fetch("http://localhost:5000/wishlist")
      .then((res) => res.json())
      .then((data) => {
        const checkGame = data.find(g => g.title === game.title && g.currentUser === user?.email)
        if(checkGame){
          setWishlistAdded(true);
        }
      });

  },[user,game]);

  
  const handleAddToWishlist = () => {
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
          setWishlistAdded(true);
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
                <span className="font-bold">Reviewed By:</span> {game.name}
              </p>
              <p className="mt-4 text-sm">
                <span className="font-bold">Email:</span> {game.email}
              </p>
              <p className="mt-4 text-sm">
                <span className="font-bold">Publish Year:</span> {game.year}
              </p>
            </div>
          </div>
          <div className="w-4/5 md:w-2/3 mx-auto space-y-5">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold">{game.title}</h1>
              {user && (
                <button
                  disabled={wishlistAdded}
                  onClick={handleAddToWishlist}
                  data-tooltip-id="wishlist-tooltip"
                  data-tooltip-content={
                    wishlistAdded ? "Already in Wishlist" : "Add to Wishlist"
                  }
                >
                  <FaHeart
                    className={`text-2xl cursor-pointer ${
                      wishlistAdded ? "text-gray-400" : "text-purple-500"
                    }`}
                  />
                </button>
              )}
            </div>
            <p>
              <span className="font-bold">Review:</span> {game.review}
            </p>
            <p>
              <span className="font-bold">Rating:</span> {game.rating} / 10
            </p>
            <p>
              <span className="font-bold">Genre:</span> {game.genre}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ReviewDetails;
