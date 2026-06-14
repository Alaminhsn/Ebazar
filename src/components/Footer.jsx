import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="m-auto">
      {/* Top Contact Section */}
      <div className="m-auto flex justify-around bg-black text-white py-4 px-2 flex-wrap">
        <div className="flex">
          <CiLocationOn className="mt-2 mr-2 text-2xl" />
          <div>
            <h3>Visit Us</h3>
            <p>Mirpur, Dhaka</p>
          </div>
        </div>

        <div className="flex">
          <PiPhoneCallLight className="mt-2 mr-2 text-2xl" />
          <div>
            <h3>Call Us</h3>
            <p>+234674569</p>
          </div>
        </div>

        <div className="flex">
          <MdOutlineAccessTime className="mt-2 mr-2 text-2xl" />
          <div>
            <h3>Working Hour</h3>
            <p>Sat-Thurs 10am-6pm</p>
          </div>
        </div>

        <div className="flex">
          <SlEnvolopeLetter className="mt-2 mr-2 text-2xl" />
          <div>
            <h3>Email Us</h3>
            <p>digitalhat@gmail.com</p>
          </div>
        </div>
      </div>

      <hr />

      {/* Main Footer */}
      <div className="flex justify-around bg-black text-white py-5 flex-wrap">
        {/* Logo */}
        <div>
          <h1 className="text-green-500 font-bold text-xl">DIGITALHAT</h1>

          <p>Lorem ipsum dolor sit</p>
          <p>amet consectetur adipisicing</p>
          <p>elit. Nostrum, facilis?</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-green-500 font-bold">QUICK LINK</h2>

          <ul className="ml-5">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/hot">Hot Deal</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>

            <li>
              <Link to="/privacy">Privacy & Policy</Link>
            </li>

            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-green-500 font-bold">Categories</h2>

          <ul className="ml-5">
            <li>
              <Link to="/smartphone">SmartPhone</Link>
            </li>

            <li>
              <Link to="/washing-machine">Washing Machine</Link>
            </li>

            <li>
              <Link to="/watch">Watch</Link>
            </li>

            <li>
              <Link to="/refrigerator">Refrigerator</Link>
            </li>

            <li>
              <Link to="/tv">TV</Link>
            </li>

            <li>
              <Link to="/gadget">Gadget Item</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      {/* Bottom */}
      <footer className="bg-black text-white py-3 text-center">
        © 2026 DigitalHat. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
