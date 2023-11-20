import React from "react";
import Image from "next/image";
import { services } from "../constants";

const TreatmentCard = ({ index, name, description, image }) => (
  <div
    className={`w-full relative p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 text-[#1E1E1E] ${
      index === 0 || index === 5
        ? "bg-[#FEF0C3]"
        : index === 1 || index === 3
        ? "bg-[#FEE6DC]"
        : "bg-[#DFF7EA]"
    }`}
  >
    <div className="w-1/2">
      <h5 className="mb-4 text-[32px] leading-[36px] font-medium">{name}</h5>
      <p className="mb-5 text-base z-10">{description}</p>
      <button
        type="button"
        className="bg-white font-medium rounded-2xl text-sm px-5 py-2.5 text-center z-10 transition duration-300 ease-in-out hover:bg-[#89DB7B] hover:shadow-lg"
      >
        Read More
      </button>

      <div className="flex justify-center">
        <Image
          src={image}
          alt="service"
          width={180}
          height={260}
          className="max-w-[260px] max-h-[300px] absolute bottom-0 right-0 overflow-hidden"
        />
      </div>
    </div>
  </div>
);

const Treatments = () => (
  <div className="flex flex-col gap-10" id="services">
    <div className="flex flex-col items-center justfiy-center gap-4">
      <p className="text-[20px] text-[#89DB7B] font-semibold">
        Satisfy Solution
      </p>
      <h2 className="text-[36px] font-semibold"> The Best Dental Treatment </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
      {services.map((service, index) => (
        <TreatmentCard key={service.name} index={index} {...service} />
      ))}
    </div>
  </div>
);

export default Treatments;
