import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../../components/AuthProvider/AuthProvider";
import { Fade } from "react-awesome-reveal";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import Swal from "sweetalert2";

const Watchlist = () => {
  const { user } = useContext(authContext);
  const wishlistGame = useLoaderData();
  const [displayGame,setDisplayGame] = useState(wishlistGame);

  const userWishlist = displayGame.filter(
    (game) => game.currentUser === user.email
  );

   const handleDeleteGame = (_id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        background: "#330066",
        color: "#fff",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/wishlist/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Game has been deleted from wishlist.",
                  icon: "success",
                  background: "#330066",
                  color: "#fff",
                });
              }
              const remainingGames = wishlistGame.filter((game) => game._id != _id);
              setDisplayGame(remainingGames);
            });
        }
      });
    };

  return (
    <div>
      <div className="bg-gradient-to-l from-purple-900 via-violet-950 to-purple-950">
        <h2 className="text-center font-bold text-3xl md:text-5xl p-12 text-white animate__animated animate__flash">
          Wishlist
        </h2>
      </div>

      <Fade delay={500}>
        <div className="w-11/12 md:w-4/5 mx-auto my-10">
          <div className="overflow-x-auto rounded-xl shadow shadow-purple-600">
            {userWishlist.length > 0 ? (
              <>
                <Fade delay={300}>
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Game Information</th>
                        <th className="hidden md:block">Reviewed By</th>
                        <th>Rating</th>
                      </tr>
                    </thead>
                    {userWishlist.map((game) => (
                      <tbody key={game._id}>
                        {/* row 1 */}
                        <tr>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle h-20 w-20">
                                  <img src={game.image} alt={game.title} />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{game.title}</div>
                                <div className="text-sm opacity-50">
                                  Genre: {game.genre}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="hidden md:block">
                            {game.name}
                            <br />
                            <span>{game.email}</span>
                          </td>
                          <td>{game.rating}/10</td>
                          <th>
                            <div className="flex flex-col gap-2 items-center justify-center">
                              <Link to={`/reviewdetails/${game.gameId}`}>
                                <button className="w-16 btn bg-gradient-to-r from-indigo-800 to-purple-800 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white btn-xs">
                                <FaEye />
                                </button>
                              </Link>
                              <button
                                onClick={() => handleDeleteGame(game._id)}
                                className="w-16 btn bg-gradient-to-r from-rose-600 to-red-400 shadow-rose-500 shadow-md text-white border-purple-500 hover:border-white btn-xs"
                              >
                                <MdDeleteForever className="text-xl" />
                              </button>
                            </div>
                          </th>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </Fade>
              </>
            ) : (
              <div className="text-center p-6 space-y-2">
                <Fade delay={300}>
                  <h1 className="text-3xl font-bold">No Reviews Yet</h1>
                  <p className="text-sm italic">
                    Your Adventure Awaits, Share It !
                  </p>
                </Fade>
              </div>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Watchlist;
