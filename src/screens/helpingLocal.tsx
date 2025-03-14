import icon1 from "../../public/assets/images/Icon3.png";
import icon2 from "../../public/assets/images/Icon7.png";
import icon3 from "../../public/assets/images/Icon6.png";
import icon4 from "../../public/assets/images/Icon4.png";

const HelpLocal = () => {
  const localData = [
    {
      id: 1,
      count: "2,245,341",
      title: "Members",
      icon: icon1,
    },
    {
      id: 1,
      count: "2,245,341",
      title: "Clubs",
      icon: icon2,
    },
    {
      id: 1,
      count: "2,245,341",
      title: "Event Bookings",
      icon: icon3,
    },
    {
      id: 1,
      count: "2,245,341",
      title: "payments",
      icon: icon4,
    },
  ];
  return (
    <div className="mt-12 bg-[#F5F7FA] ">
      <div className="max-w-[90%] lg:max-w-[70%] mx-auto py-16">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="">
            <h1 className="text-4xl font-semibold text-[#4D4D4D]">
              Helping a local
            </h1>
            <h1 className="text-4xl font-semibold text-[#4CAF4F]">
              business reinvent itself
            </h1>
            <p className="mt-6">
              we reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:mt-0 mt-12">
            {localData.map((res, i) => {
              return (
                <div key={i} className="flex space-x-3">
                  <div>
                    <img src={res.icon} />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold text-[#4D4D4D]">
                      {res.count}
                    </h1>
                    <p className="text-[#717171]">{res.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpLocal;
