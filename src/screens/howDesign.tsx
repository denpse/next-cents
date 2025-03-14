import thumnail from "/assets/images/pana.png";
import { Button } from "@/components/ui/button";
const HowDesign = () => {
  return (
    <div className="mt-12 ">
      <div className="md:flex space-x-12 items-center">
        <div className="md:flex justify-center mx-auto">
          <img className="w-[140rem]" src={thumnail} />
        </div>
        <div>
          <div>
            <h1 className="text-4xl md:leading-12 leading-10 mb-3 text-[#4D4D4D] mt-12 md:mt-0">
              How to design your site footer like we did
            </h1>
            <p className="text-[#717171]">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
          </div>
          <Button className="rounded-sm mt-8 cursor-pointer">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default HowDesign;
