import React from "react";
import Image from "next/image";
import { chooseUs } from "../constants";

const Choose = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse">
      <div className="w-full md:w-1/2">
        <Image
          src="/bg-about-2.svg"
          alt="Dentist with Patient"
          width={540}
          height={711}
          className="mx-auto max-w-[540px] max-h-[700px] md:w-full md:h-full"
        />
      </div>

      <div className="w-full md:w-1/2 p-8">
        <div className="flex flex-col gap-8 max-w-md mx-auto">
          <p className="text-[20px] text-[#89DB7B] font-semibold">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-bold">Comprehensive Dental Services</h2>
          <div className="">
            <ul className="flex flex-col gap-2">
              {chooseUs.map((el, index) => (
                <div key={index} className="flex flex-row">
                  <li className="flex gap-4">
                    <Image
                      src={"/plus.svg"}
                      width={20}
                      height={20}
                      alt={"plus"}
                    />
                    <p>
                      <span className="font-bold">{el.title}</span>: передовые
                      технологии, обеспечивающие здоровое развитие вашего
                      малыша.
                    </p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
