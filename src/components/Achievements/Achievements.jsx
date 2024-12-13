import { Zoom } from "react-awesome-reveal";
import CountUp from "react-countup";
import { FaRegUserCircle } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { LuGamepad2 } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const Achievements = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div className="w-11/12 mx-auto my-20">
      <Zoom>
        <h1 className="text-3xl md:text-4xl font-bold w-3/4 mx-auto text-center mb-10">
          Our Total{" "}
          <span className="text-violet-600">
            <Typewriter
              words={["Reivews", "Games", "Experts", "Users"]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </Zoom>
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="flex flex-col items-center rounded-2xl bg-purple-950 bg-opacity-10 border border-violet-400 p-6 shadow-violet-900 shadow-md cursor-pointer hover:border-white">
          <MdOutlineRateReview className="text-3xl" />
          <h1 className="text-4xl font-bold">
            {inView && (
              <CountUp
                start={1500}
                end={2500}
                duration={2}
                decimal=","
                suffix="+"
              ></CountUp>
            )}
          </h1>
          <h3 className="text-xl">Reviews Published</h3>
        </div>
        <div className="flex flex-col items-center rounded-2xl bg-purple-950 bg-opacity-10 border border-violet-400 p-6 shadow-violet-900 shadow-md cursor-pointer hover:border-white">
          <LuGamepad2 className="text-3xl" />
          <h1 className="text-4xl font-bold">
            {inView && (
              <CountUp
                start={200}
                end={500}
                duration={2}
                decimal=","
                suffix="+"
              ></CountUp>
            )}
          </h1>
          <h3 className="text-xl">Games Covered</h3>
        </div>
        <div className="flex flex-col items-center rounded-2xl bg-purple-950 bg-opacity-10 border border-violet-400 p-6 shadow-violet-900 shadow-md cursor-pointer hover:border-white">
          <GrUserExpert className="text-3xl" />
          <h1 className="text-4xl font-bold">
            {inView && (
              <CountUp
                start={100}
                end={150}
                duration={4}
                decimal=","
                suffix="+"
              ></CountUp>
            )}
          </h1>
          <h3 className="text-xl"> Expert Contributors</h3>
        </div>
        <div className="flex flex-col items-center p-6 rounded-2xl bg-purple-950 bg-opacity-10 border border-violet-400 shadow-violet-900 shadow-md cursor-pointer hover:border-white">
          <FaRegUserCircle className="text-3xl" />
          <h1 className="text-4xl font-bold">
            {
            inView && (
              <CountUp
                start={1000}
                end={10000}
                duration={2}
                decimal=","
                suffix="+"
              ></CountUp>
            )}
          </h1>
          <h3 className="text-xl">User</h3>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
