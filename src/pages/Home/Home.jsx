import Slider from "../../components/Slider/Slider";
import 'animate.css';
import TrustedBrands from "../../components/TrustedBrands/TrustedBrands";
import TopRatedGames from "../../components/TopRatedGames/TopRatedGames";
import Categories from "../../components/Categories/Categories";
import Achievements from "../../components/Achievements/Achievements";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TrustedBrands></TrustedBrands>
            <TopRatedGames></TopRatedGames>
            <Categories></Categories>
            <Achievements></Achievements>
        </div>
    );
};

export default Home;