import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../components/AuthProvider/AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import { Fade, Zoom } from "react-awesome-reveal";

const MyReviews = () => {
  const { user } = useContext(authContext);
  const allGames = useLoaderData();

  //   user reviewed games
  const userGames = allGames.filter((game) => game.email === user.email);


  return (
    <div>
      <div className="bg-gradient-to-l from-purple-900 via-violet-950 to-purple-950 p-12">
        <h2 className="text-center font-bold text-3xl md:text-5xl  text-white animate__animated animate__flash">
          My Reviews
        </h2>
      </div>

      <Fade delay={500}>
      <div className="w-11/12 md:w-4/5 mx-auto my-10">
        <div className="overflow-x-auto rounded-xl shadow shadow-purple-600">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Game Information</th>
                <th className="hidden md:block">Reviewed By</th>
                <th>Rating</th>
                <th></th>
              </tr>
            </thead>
            {userGames.map((game) => (
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
                      <button className="w-16 btn bg-gradient-to-r from-indigo-800 to-purple-800 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white btn-xs">
                        Edit
                      </button>
                      <button className="w-16 btn bg-gradient-to-r from-indigo-800 to-purple-800 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white btn-xs">
                        <MdDeleteForever className="text-xl" />
                      </button>
                    </div>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default MyReviews;
