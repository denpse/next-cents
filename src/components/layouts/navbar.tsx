import { Link } from "react-router";
import logo from "@/assets/images/Logo.png";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <nav className="sm:w-[70%] lg:w-[60%] flex justify-between items-center text-black mx-auto py-6">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="pr-8 md:block hidden">
          <Link to="/" className="p-4">
            Home
          </Link>
          <Link to="/" className="p-4">
            Service
          </Link>
          <Link to="/" className="p-4">
            Feature
          </Link>
          <Link to="/" className="p-4">
            Product
          </Link>
          <Link to="/" className="p-4">
            Testimonial
          </Link>
          <Link to="/" className="p-4">
            FAQ
          </Link>
        </div>
        <div>
          <Link to="/" className="p-4 text-primary">
            Login
          </Link>
          <Button>
            <Link to="/register">Sign up</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
