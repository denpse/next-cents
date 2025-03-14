import thumnail from "@/assets/images/Frame35.png";
import { Button } from "@/components/ui/button";
const LearnMore = () => {
  return (
    <div className="mt-12 ">
      <div className="md:flex space-x-12 items-center ">
        <div className="flex justify-center md:block mx-auto">
          <img className="w-[100rem]" src={thumnail} />
        </div>
        <div>
          <div>
            <h1 className="text-4xl mb-3 text-[#4D4D4D] leading-12">
              The unseen of spending three <br /> years at Pixelgrade
            </h1>
            <p className="text-[#717171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>
          <Button className="rounded-sm mt-8 cursor-pointer">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
