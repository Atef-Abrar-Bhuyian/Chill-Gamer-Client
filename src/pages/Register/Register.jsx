import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { authContext } from "../../components/AuthProvider/AuthProvider";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const location = useNavigate();
  const { handleRegister, updateUserProfile, googleSignIn } =
    useContext(authContext);
  const [error, setError] = useState("");

  //   Register with Email
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setError("Password Must Contain At Least 6 Characters");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password Must Contain At Least One Lowercase Letter");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password Must Contain At Least One Uppercase Letter");
      return;
    }

    handleRegister(email, password)
      .then((result) => {
        updateUserProfile({ displayName: name, photoURL: photo });
        const user = result.user;
        location("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //   Login With Google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        location("/");
      })
      .catch((error) => {
        toast.error("Please Try Again");
      });
  };
  return (
    <div className="">
      <ToastContainer />
      {/* heading */}
      <div className="bg-gradient-to-l from-purple-900 via-violet-950 to-purple-950 p-12">
        <h2 className="text-center font-bold text-3xl md:text-5xl  text-white animate__animated animate__flash">
          Register
        </h2>
      </div>

      {/* Form */}
      <div className="w-4/5 md:w-1/4 mx-auto m-10">
        <form className="" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-control animate__animated animate__fadeInLeft">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Photo */}
          <div className="form-control animate__animated animate__fadeInRight">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          {/* Email */}
          <div className="form-control animate__animated animate__fadeInLeft">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          {/* Password */}
          <div className="form-control animate__animated animate__fadeInRight">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPass(!showPass)}}
                className="btn btn-xs absolute top-3 right-3 text-lg"
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {/* Register btn */}
          <div className="form-control mt-6">
            <button
              className="btn bg-gradient-to-r from-indigo-800 to-purple-800 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white"
              type="submit"
            >
              Register
            </button>
          </div>
          <p className="mt-3">
            Already Have An Account?{" "}
            <Link to="/login" className="text-violet-500 font-bold">
              Login
            </Link>
          </p>
        </form>

        {/* Google btn */}
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-violet-900 w-full border-purple-500 border hover:bg-violet-950 hover:border-white shadow-purple-900 shadow-md text-white"
        >
          <FcGoogle className="text-xl" /> Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
