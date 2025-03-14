import { Link } from "react-router";
import logo from "@/assets/images/Logo.png";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50 overflow-hidden">
      <nav className="max-w-[90%] lg:max-w-[70%] flex justify-between items-center text-black mx-auto py-6 px-5 md:px-0">
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
        {/* <div className="md:hidden block">
          <Menu />
        </div> */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="p-6 space-y-6 w-64">
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link to="/" className="block text-lg hover:text-primary">
                  Home
                </Link>
                <Link
                  to="/service"
                  className="block text-lg hover:text-primary"
                >
                  Service
                </Link>
                <Link
                  to="/feature"
                  className="block text-lg hover:text-primary"
                >
                  Feature
                </Link>
                <Link
                  to="/product"
                  className="block text-lg hover:text-primary"
                >
                  Product
                </Link>
                <Link
                  to="/testimonial"
                  className="block text-lg hover:text-primary"
                >
                  Testimonial
                </Link>
                <Link to="/faq" className="block text-lg hover:text-primary">
                  FAQ
                </Link>
                <div className="border-t pt-4">
                  <Link to="/login" className="block text-primary text-lg">
                    Login
                  </Link>
                  <Button className="w-full mt-2">
                    <Link to="/register">Sign up</Link>
                  </Button>
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="md:block hidden">
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

// import { Link } from "react-router-dom";
// // import { useState } from "react";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { Menu } from "lucide-react";
// import { motion } from "framer-motion";
// import logo from "@/assets/images/Logo.png";

// const Navbar = () => {
//   return (
//     <header className="fixed top-0 w-full bg-white shadow-sm z-50">
//       <nav className="w-full max-w-[90%] lg:max-w-[70%] flex justify-between items-center mx-auto py-4">
//         <Link to="/">
//           <img src={logo} alt="Logo" className="h-10" />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <Link to="/" className="hover:text-primary">
//             Home
//           </Link>
//           <Link to="/service" className="hover:text-primary">
//             Service
//           </Link>
//           <Link to="/feature" className="hover:text-primary">
//             Feature
//           </Link>
//           <Link to="/product" className="hover:text-primary">
//             Product
//           </Link>
//           <Link to="/testimonial" className="hover:text-primary">
//             Testimonial
//           </Link>
//           <Link to="/faq" className="hover:text-primary">
//             FAQ
//           </Link>
//         </div>

//         {/* Authentication Buttons */}
//         <div className="hidden md:flex space-x-4">
//           <Link to="/login" className="text-primary">
//             Login
//           </Link>
//           <Button>
//             <Link to="/register">Sign up</Link>
//           </Button>
//         </div>

//         {/* Mobile Menu */}
// <div className="md:hidden">
//   <Sheet>
//     <SheetTrigger>
//       <Menu className="h-6 w-6" />
//     </SheetTrigger>
//     <SheetContent side="left" className="p-6 space-y-6">
//       <motion.div
//         initial={{ x: -300 }}
//         animate={{ x: 0 }}
//         exit={{ x: -300 }}
//         transition={{ type: "spring", stiffness: 100 }}
//       >
//         <Link to="/" className="block text-lg hover:text-primary">
//           Home
//         </Link>
//         <Link
//           to="/service"
//           className="block text-lg hover:text-primary"
//         >
//           Service
//         </Link>
//         <Link
//           to="/feature"
//           className="block text-lg hover:text-primary"
//         >
//           Feature
//         </Link>
//         <Link
//           to="/product"
//           className="block text-lg hover:text-primary"
//         >
//           Product
//         </Link>
//         <Link
//           to="/testimonial"
//           className="block text-lg hover:text-primary"
//         >
//           Testimonial
//         </Link>
//         <Link to="/faq" className="block text-lg hover:text-primary">
//           FAQ
//         </Link>
//         <div className="border-t pt-4">
//           <Link to="/login" className="block text-primary text-lg">
//             Login
//           </Link>
//           <Button className="w-full mt-2">
//             <Link to="/register">Sign up</Link>
//           </Button>
//         </div>
//       </motion.div>
//     </SheetContent>
//   </Sheet>
// </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
