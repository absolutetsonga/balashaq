import Image from "next/image";
import { features } from "../constants";

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[38px] -mt-10">
      {features.map((feature, index) => {
        return (
          <div
            className="flex flex-col p-4 rounded-lg shadow-custom bg-white"
            key={index}
          >
            <div className="p-3 rounded-full mb-4 lg:self-start">
              <Image
                src={feature.imgSrc}
                alt={feature.imgAlt}
                width={85}
                height={85}
              />
            </div>
            <h3 className="font-semibold text-lg">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
