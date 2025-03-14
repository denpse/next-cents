import image1 from "@/assets/images/image 18.png";
import image2 from "@/assets/images/image 19.png";
import image3 from "@/assets/images/image 20.png";
const Caring = () => {
  const cardData = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: image1,
    },
    {
      id: 2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: image2,
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      image: image3,
    },
  ];
  return (
    <div className="mt-12">
      <div className="text-center ">
        <h1 className="text-4xl mb-3 text-[#4D4D4D]">
          Caring is the new marketing
        </h1>
        <p className="text-[#717171] mx-auto md:w-[60%] w-[90%]">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="mt-12">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {cardData.map((res, i) => {
            return (
              <div key={i} className=" rounded-lg overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={res.image}
                    alt={res.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-[#F5F7FA] shadow relative -mt-22 rounded-3xl w-[90%] mx-auto">
                  <h3 className="text-xl  text-center font-semibold text-[#717171] mb-6">
                    {res.title}
                  </h3>
                  <div className="text-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-primary font-medium"
                    >
                      Readmore
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Caring;
