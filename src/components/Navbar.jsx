import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white shadow-md sticky top-0 z-50 nav h-17 ">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center ">
            <Link to="/">
              <img src="image.png" className="w-15 h-12 " />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-shop-logo font-semibold">
            <li>
              <Link to="/" className="hover:text-red-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-red-400">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/deal" className="hover:text-red-400">
                Hot Deal
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-400">
                Contact
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-4 font-semibold">
            <Link to="/signin" className="hover:text-red-400">
              Sign in
            </Link>
            <Link to="/signup" className="hover:text-red-400">
              Sign up
            </Link>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-lg px-4 pb-4 fixed w-full left-0">
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/shop">Shop</Link>
              </li>

              <li>
                <Link to="/deal">Hot Deal</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <hr />

              <li>
                <Link to="/signin">Sign in</Link>
              </li>

              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
