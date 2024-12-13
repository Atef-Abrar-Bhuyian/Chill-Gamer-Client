import { Fade, Zoom } from "react-awesome-reveal";
import faq from "../../assets/images/faq.png";


const Faq = () => {
  return (
    <div className="w-4/5 mx-auto my-20">
      <h1 className="text-3xl md:text-4xl font-bold w-3/4 mx-auto text-center my-10">
        <Zoom>FAQ's</Zoom>
      </h1>
      <div className="flex flex-col-reverse md:flex md:flex-row items-center justify-center md:justify-between gap-8">
        <Fade  direction="up"><div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-violet-500 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Can I trust the ratings and reviews on this website?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! We strive for transparency and honesty in all our
                reviews. Our rating system is designed to be fair and reflective
                of the game's quality, gameplay experience, and overall
                enjoyment.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-violet-500 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How can I submit my own game review?
            </div>
            <div className="collapse-content">
              <p>
                To submit your own game review, you need to create an account
                and sign in. Once signed in, you can share your thoughts on any
                game.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-violet-500 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Do you review mobile games?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we review mobile games along with console and PC titles.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-violet-500 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            What makes your reviews different from others?
            </div>
            <div className="collapse-content">
              <p>
              We focus on the experience, not just the technical details! Our reviews come from gamers who love playing as much as you do.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-violet-500 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            How do I join the gaming community here?
            </div>
            <div className="collapse-content">
              <p>
              Just sign up! You’ll get access to exclusive forums, game discussions, and even a chance to write your own reviews.
              </p>
            </div>
          </div>
        </div></Fade>
        <Fade direction="up"><div>
          <img src={faq} alt="faq image" />
        </div></Fade>
      </div>
    </div>
  );
};

export default Faq;
