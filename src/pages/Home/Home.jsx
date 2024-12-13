import Slider from "../../components/Slider/Slider";
import 'animate.css';
import TrustedBrands from "../../components/TrustedBrands/TrustedBrands";
import TopRatedGames from "../../components/TopRatedGames/TopRatedGames";
import Categories from "../../components/Categories/Categories";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TrustedBrands></TrustedBrands>
            <TopRatedGames></TopRatedGames>
            <Categories></Categories>
        </div>
    );
};

export default Home;