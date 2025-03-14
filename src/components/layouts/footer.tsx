import logo from "@/assets/images/logo-white.png";
import icon1 from "@/assets/images/Social Icons.png";
import icon2 from "@/assets/images/Social Icons copy 2.png";
import icon3 from "@/assets/images/Social Icons copy 3.png";
import icon4 from "@/assets/images/Social Icons copy.png";
import { Input } from "@/components/ui/input";
const Footer = () => {
  const socialLogoData = [
    {
      id: 1,
      icon: icon1,
    },
    {
      id: 2,
      icon: icon2,
    },
    {
      id: 3,
      icon: icon3,
    },
    {
      id: 4,
      icon: icon4,
    },
  ];
  return (
    <div className="mt-16 bg-[#263238]">
      <div className="max-w-[90%] lg:max-w-[70%] mx-auto py-16">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          <div>
            <img src={logo} />
            <div className="mt-9 text-white text-xs font-light leading-6">
              <p>Copyright © 2020 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>
            <div className="flex items-center space-x-7 mt-9">
              {socialLogoData.map((res, i) => {
                return (
                  <div key={i}>
                    <img src={res.icon} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-white ">
            <h1 className=" mb-3 font-semibold">Company</h1>
            <div className="font-extralight leading-8 cursor-pointer">
              <p>About us</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>
          </div>
          <div className="text-white ">
            <h1 className=" mb-3 font-semibold">Support</h1>
            <div className="font-extralight leading-8 cursor-pointer">
              <p>Help Center</p>
              <p>Terms of Service</p>
              <p>Legal</p>
              <p>Privacy Policy</p>
              <p>Status</p>
            </div>
          </div>
          <div className="text-white ">
            <h1 className=" mb-3 font-semibold">Stay up to date</h1>
            <div>
              <Input type="email" placeholder="Your email address" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
