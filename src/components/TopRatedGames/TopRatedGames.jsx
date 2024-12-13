import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";

const TopRatedGames = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1

        className="text-3xl md:text-4xl font-bold w-3/4 mx-auto text-center"
      >
        <Fade>Top-Rated Games</Fade>
      </h1>
      <div className="card bg-gradient-to-b from-purple-950 to-gray-950 w-96 hover:border hover:border-purple-700 hover:shadow-purple-500 hover:shadow-md cursor-pointer ">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedGames;
