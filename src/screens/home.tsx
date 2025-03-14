import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 space-x-3.5 bg-primary-foreground mt-32 items-center">
        <div>
          <div className="">
            <h1 className="md:text-6xl text-4xl font-medium text-[#4D4D4D]">
              Lessons and insights <br />
              <span className="text-primary">from 8 years</span>
            </h1>
          </div>
          <p className="text-[#717171] mt-3  ">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className="mt-7">
            <Button className="rounded-sm">Register</Button>
          </div>
        </div>
        <div className="md:flex justify-center hidden ">
          <img
            src="/assets/images/Illustratio.png"
            alt="illustration"
            className="w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
