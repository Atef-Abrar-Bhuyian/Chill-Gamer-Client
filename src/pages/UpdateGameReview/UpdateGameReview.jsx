import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateGameReview = () => {
  const game = useLoaderData();

  const handleUpdateGame = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const review = form.review.value;
    const rating = parseInt(form.rating.value);
    const year = parseInt(form.year.value);
    const genre = form.genre.value;
    const updatedGame = { image, title, review, rating, year, genre };

    // Send data to the server
    fetch(`http://localhost:5000/games/${game._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedGame),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Game Update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
            background: "#330066",
            color: "#fff",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      {/* Heading */}
      <div className="bg-gradient-to-l from-purple-900 via-violet-950 to-purple-950 p-12">
        <h2 className="text-center font-bold text-3xl md:text-5xl  text-white animate__animated animate__flash">
          Update Review
        </h2>
      </div>

      {/* Update Review Form */}
      <div className="flex items-center justify-center">
        <div className="card bg-base-100 md:w-1/2 w-4/5 shadow-purple-600 shadow-md my-10">
          <form onSubmit={handleUpdateGame} className="card-body">
            <div className="md:flex justify-between gap-20 animate__animated animate__fadeInLeft">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={game.email}
                  name="email"
                  className="input input-bordered"
                  readOnly
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={game.name}
                  name="name"
                  className="input input-bordered"
                  readOnly
                />
              </div>
            </div>

            <div className="md:flex justify-between gap-20">
              <div className="form-control w-full animate__animated animate__fadeInLeft">
                <label className="label">
                  <span className="label-text">Game Image</span>
                </label>
                <input
                  type="text"
                  defaultValue={game.image}
                  name="image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full animate__animated animate__fadeInRight">
                <label className="label">
                  <span className="label-text">Game Title</span>
                </label>
                <input
                  type="text"
                  defaultValue={game.title}
                  name="title"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control animate__animated animate__fadeInLeft">
              <label className="label">
                <span className="label-text">Review Description</span>
              </label>
              <input
                type="text"
                defaultValue={game.review}
                name="review"
                className="input input-bordered"
                required
              />
            </div>

            <div className="md:flex justify-between gap-20 animate__animated animate__fadeInLeft">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  defaultValue={game.rating}
                  name="rating"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Publishing year</span>
                </label>
                <input
                  type="number"
                  defaultValue={game.year}
                  name="year"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control animate__animated animate__fadeInRight">
              <label className="label">
                <span className="label-text">Genres</span>
              </label>
              <select
                name="genre" // Add name attribute
                className="select select-bordered w-full max-w-xs"
              >
                <option value="" disabled>
                  Select Genre
                </option>
                <option value="Action">Action</option>
                <option value="Story">Story</option>
                <option value="Fps">FPS</option>
                <option value="Horror">Horror</option>
                <option value="RPG">RPG</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-indigo-800 to-purple-800 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateGameReview;
