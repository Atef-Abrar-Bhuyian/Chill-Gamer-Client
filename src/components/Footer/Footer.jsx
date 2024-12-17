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
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
