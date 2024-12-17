import { useContext } from "react";
import { authContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = useContext(authContext);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const review = form.review.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genre = form.genre.value;
    const email = form.email.value;
    const name = form.name.value;
    const newGame = { image, title, review, rating, year, genre, email, name };

    // Send data to the server
    fetch("http://localhost:5000/games", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGame),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Game Added Successfully",
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
          Add a Game Reivew
        </h2>
      </div>

      {/* Add Review Form */}
      <div className="flex items-center justify-center">
        <div className="card bg-base-100 md:w-1/2 w-4/5 shadow-purple-600 shadow-md my-10">
          <form onSubmit={handleReviewSubmit} className="card-body">
            <div className="md:flex justify-between gap-20 animate__animated animate__fadeInLeft">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={user.email}
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
                  defaultValue={user.displayName}
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
                  placeholder="Photo URL"
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
                  placeholder="title"
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
                placeholder="review"
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
                  type="number"
                  placeholder="rate 1-10"
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
                  placeholder="year"
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
