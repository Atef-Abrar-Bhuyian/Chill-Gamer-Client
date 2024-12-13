import foxyTech from "../../assets/logos/foxlogo.png"
import BunnyCraft from "../../assets/logos/avatar.png"
import CheckCode from "../../assets/logos/chess.png"
import DevPlay from "../../assets/logos/development.png"
import PolygonForge from "../../assets/logos/gamepad.png"
import ClickSphere from "../../assets/logos/interaction.png"
import PacXpress from "../../assets/logos/pacman.png"
import NextGenResearch from "../../assets/logos/research.png"
import { useInView } from 'react-intersection-observer';
import { Fade } from "react-awesome-reveal"

const TrustedBrands = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,   
      });

  return (
    <div className="text-white mt-10 mb-10 p-10 bg-white w-4/5 mx-auto rounded-t-3xl bg-gradient-to-b from-purple-950 to-slate-900 ">
      <h1 className="text-3xl md:text-4xl font-bold w-3/4 mx-auto text-center">
        <Fade>Trusted by 7,000+ world-class brands</Fade>
      </h1>
      <div ref={ref} className="grid grid-cols-2 gap-6 md:grid-cols-4 mt-10">
        <div className={`flex gap-3 items-center justify-center cursor-pointer grayscale hover:grayscale-0 ${inView ? "animate__animated animate__fadeInUp": ""}`}>
            <img className="w-2/6" src={foxyTech} alt="" />
            <p className="font-bold">Foxy<span className="text-amber-500">Tech</span> </p>
        </div>
        <div className={`flex items-center justify-center cursor-pointer grayscale hover:grayscale-0 ${inView ? "animate__animated animate__fadeInDown": ""}`}>
            <img className="w-2/6" src={BunnyCraft} alt="" />
            <p className="font-bold">Bunny Craft</p>
        </div>
        <div className={`flex items-center justify-center cursor-pointer grayscale hover:grayscale-0 ${inView ? "animate__animated animate__fadeInUp": ""}`}>
            <img className="w-2/6" src={CheckCode} alt="" />
            <p className="font-bold">Check Code</p>
        </div>
        <div className={`flex items-center justify-center cursor-pointer grayscale hover:grayscale-0 ${inView ? "animate__animated animate__fadeInDown": ""}`}>
            <img className="w-2/6" src={DevPlay} alt="" />
            <p className="font-bold">Dev<span className="text-green-500">Play</span></p>
        </div>
        <div className={`flex gap-3 items-center justify-center cursor-pointer grayscale hover:grayscale-0 ${inView ? "animate__animated animate__fadeInUp": ""}`}>
            <img className="w-2/6" src={PolygonForge} alt="" />
            <p className="font-bold"><span className="text-red-500">Polygon</span> Forge</p>
        </div>
        <div className={`flex gap-3 items-center justify-center cursor-pointer grayscale hover:grayscale-0 ${inView ? "animate__animated animate__fadeInDown": ""}`}>
            <img className="w-2/6" src={ClickSphere} alt="" />
            <p className="font-bold">Click<span className="text-yellow-400">Sphere</span></p>
        </div>
        <div className={`flex gap-3 items-center justify-center cursor-pointer grayscale hover:grayscale-0 ${inView ? "animate__animated animate__fadeInUp": ""}`}>
            <img className="w-2/6" src={PacXpress} alt="" />
            <p className="font-bold">Pac<span className="text-yellow-300">Xpress</span></p>
        </div>
        <div className={`flex gap-3 items-center justify-center cursor-pointer grayscale hover:grayscale-0 ${inView ? "animate__animated animate__fadeInDown": ""}`}>
            <img className="w-2/6" src={NextGenResearch} alt="" />
            <p className="font-bold">NextGen Research</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
