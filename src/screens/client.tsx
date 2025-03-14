// import clientData from "@/assets/data/client.json";
import logo1 from "../../public/assets/images/Logo-8.png";
import logo2 from "../../public/assets/images/Logo9.png";
import logo3 from "../../public/assets/images/Logo6.png";
import logo4 from "../../public/assets/images/Logo11.png";
import logo5 from "../../public/assets/images/Logo12.png";
import logo6 from "../../public/assets/images/Logo13.png";
import logo7 from "../../public/assets/images/Logo14.png";
import logoCom1 from "../../public/assets/images/Icon.png";
import logoCom2 from "../../public/assets/images/Icon1.png";
import logoCom3 from "../../public/assets/images/Icon5.png";

type clientType = {
  id: number;
  logo: string;
};

const clientData = [
  {
    id: 1,
    logo: logo1,
  },
  {
    id: 2,
    logo: logo2,
  },
  {
    id: 3,
    logo: logo3,
  },
  {
    id: 4,
    logo: logo4,
  },
  {
    id: 5,
    logo: logo5,
  },
  {
    id: 6,
    logo: logo6,
  },
  {
    id: 7,
    logo: logo7,
  },
];

type communityType = {
  id: number;
  logo: string;
  title: string;
  subTitle: string;
};

const communityData = [
  {
    id: 1,
    logo: logoCom1,
    title: "Membership Organisations",
    subTitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 2,
    logo: logoCom2,
    title: "National Associations",
    subTitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 3,
    logo: logoCom3,
    title: "Clubs And Groups",
    subTitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];
const Client = () => {
  return (
    <div className="mt-16 ">
      <div className="text-center ">
        <h1 className="text-4xl mb-3 text-[#4D4D4D]">Our Clients</h1>
        <p className="text-[#717171]">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="grid grid-cols-7 mt-16 ">
        {clientData.map((res: clientType, i: number) => {
          return (
            <div key={i}>
              <img className="" src={res.logo} />
            </div>
          );
        })}
      </div>
      <div className="mt-16">
        <div className="text-center ">
          <h1 className="text-4xl mb-3 text-[#4D4D4D] leading-12">
            Manage your entire community <br />
            in a single system
          </h1>
          <p className="text-[#717171]">Who is Nextcent suitable for?</p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-16 gap-20">
          {communityData.map((res: communityType, i: number) => {
            return (
              <div className="flex justify-center" key={i}>
                <div className="shadow-md rounded-2xl py-3 px-6">
                  <div className="mb-5 flex justify-center">
                    <img className=" " src={res.logo} />
                  </div>
                  <h1 className="text-2xl text-[#4D4D4D] text-center">
                    {res.title}
                  </h1>
                  <p className="mt-3 text-[#717171]">{res.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Client;
