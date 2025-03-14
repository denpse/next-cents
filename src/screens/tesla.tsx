import thumnail from "/assets/images/image9.png";
import { Button } from "@/components/ui/button";

const Testla = () => {
  return (
    <div className="mt-12 bg-[#F5F7FA]">
      <div className=" max-w-[90%] lg:max-w-[70%] mx-auto py-16">
        <div className="md:flex space-x-12 items-center">
          <div className="flex md:block mx-auto">
            <img className="w-[140rem]" src={thumnail} />
          </div>
          <div>
            <div>
              <p className="text-[#717171]">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h1 className="text-primary text-xl mt-2">Tim Smith</h1>
              <p className="text-[#89939E]">
                British Dragon Boat Racing Association
              </p>
            </div>

            <Button className="rounded-sm mt-8 cursor-pointer">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testla;
