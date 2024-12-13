import roleplay from "../../assets/images/roleplay.jpg";
import fps from "../../assets/images/fps.jpg";
import storymode from "../../assets/images/storymode.jpg";
import simulation from "../../assets/images/simulation.png";

import { Fade,Zoom } from "react-awesome-reveal";

const Categories = () => {

  return (
    <div className="w-4/5 mx-auto my-20">
        {/* heading */}
      <div>
        <h1
          className="text-3xl md:text-4xl font-bold w-3/4 mx-auto text-center"
        >
          <Fade>Top Categories</Fade>
        </h1>
      </div>

      {/* card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <div
          className="flex items-center justify-center bg-cover bg-opacity-0 rounded-xl cursor-pointer  hover:shadow-purple-800 hover:shadow-md"
          style={{
            backgroundImage: `linear-gradient(rgba(65, 0, 130, 0.3), rgba(25, 0, 30, 0.6)), url(${roleplay})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center">
            <h2
              className={`text-2xl md:text-3xl p-12 text-white font-bold`}
            >
             <Zoom> Role Play</Zoom>
            </h2>
          </div>
        </div>
        <div
          className="flex items-center justify-center bg-cover bg-opacity-0 rounded-xl cursor-pointer  hover:shadow-purple-800 hover:shadow-md"
          style={{
            backgroundImage: `linear-gradient(rgba(65, 0, 130, 0.3), rgba(25, 0, 30, 0.6)), url(${fps})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center">
            <h2
              className="text-2xl md:text-3xl p-12 text-white font-bold"
            >
              <Zoom>FPS</Zoom>
            </h2>
          </div>
        </div>
        <div
          className="flex items-center justify-center bg-cover bg-opacity-0 rounded-xl cursor-pointer  hover:shadow-purple-800 hover:shadow-md"
          style={{
            backgroundImage: `linear-gradient(rgba(65, 0, 130, 0.3), rgba(25, 0, 30, 0.6)), url(${storymode})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center">
            <h2
              className="text-2xl md:text-3xl p-12 text-white font-bold"
            >
              <Zoom>Story Mode</Zoom>
            </h2>
          </div>
        </div>

        <div
          className="flex items-center justify-center bg-cover bg-opacity-0 rounded-xl cursor-pointer  hover:shadow-purple-800 hover:shadow-md"
          style={{
            backgroundImage: `linear-gradient(rgba(65, 0, 130, 0.3), rgba(25, 0, 30, 0.6)), url(${simulation})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center">
            <h2
              className="text-2xl md:text-3xl p-12 text-white font-bold "
            >
              <Zoom>Simulation</Zoom>
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Categories;
