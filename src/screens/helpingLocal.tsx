import icon1 from "@/assets/images/Icon (3).png";
import icon2 from "@/assets/images/Icon (7).png";
import icon3 from "@/assets/images/Icon (6).png";
import icon4 from "@/assets/images/Icon (4).png";

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
      <div className="sm:w-[80%] lg:w-[60%] mx-auto py-16">
        <div className="grid grid-cols-2">
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
          <div className="grid grid-cols-2 gap-4">
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
