import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { authContext } from "../../components/AuthProvider/AuthProvider";


const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { setUser, googleSignIn, handleLogin } = useContext(authContext);
    const [email, setEmail] = useState("");
    const location = useNavigate();
    // Form Login
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      handleLogin(email, password)
        .then((result) => {
          const user = result.user;
          location("/");
          setUser(user);
        })
        .catch((error) => {
          toast.error("Invalid Credential, Please Try Again");
        });
    };
  
    // ForgetPass route
    const handleForgetPassword = (e) => {
      e.preventDefault();
      location("/forget-password", { state: { email } });
    };
  
    // Google Login
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
    <div>
        <ToastContainer />
      <div className="bg-gradient-to-l from-purple-900 via-violet-950 to-purple-950 p-12">
        <h2 className="text-center font-bold text-3xl md:text-5xl  text-white animate__animated animate__flash">
          Login
        </h2>
      </div>

      {/* Form start */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-full max-w-sm ">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control animate__animated animate__fadeInLeft">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control animate__animated animate__fadeInRight">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPass(!showPass);
                  }}
                  className="btn btn-xs absolute top-3 right-3 text-lg"
                >
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <label className="label">
                <Link
                  to="/forget-password"
                  onClick={handleForgetPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn bg-gradient-to-r from-indigo-800 to-purple-800 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white"
                type="submit"
              >
                Login
              </button>
            </div>
            <div>
              <p>
                Don't Have An Account?{" "}
                <Link to="/register" className="text-violet-500 font-bold">
                  Register Now
                </Link>
              </p>
            </div>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-violet-900 w-full border-purple-500 border hover:bg-violet-950 hover:border-white shadow-purple-900 shadow-md text-white"
          >
            <FcGoogle className="text-xl" /> Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
