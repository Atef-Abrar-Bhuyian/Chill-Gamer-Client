import { TbDeviceGamepad2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <Link to={"/"} className="flex gap-2 items-center p-2 text-xl border-none shadow-sm rounded-xl shadow-purple-600">
          <TbDeviceGamepad2 className="text-purple-400 text-2xl" />
          Chill Gamer
        </Link>
        <p>
        Level Up Industries
          <br />
          Dominating the gaming world since 2015
        </p>
        <p>© 2024 Chill Gamer || All Rights Reserved.</p>
      </aside>
      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <Link to={"/"} className="link link-hover">Home</Link>
        <Link to={"/allreviews"} className="link link-hover">All Reviews</Link>
        <Link to={"/addreview"} className="link link-hover">Add Reviews</Link>
        <Link to={"/profile"} className="link link-hover">Profile</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </nav>
    </footer>
  );
};

export default Footer;
