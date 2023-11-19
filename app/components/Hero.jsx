import React from "react";
import Image from "next/image";
import Link from "next/link";
import Features from "./Features";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col justify-center items-center md:items-stretch md:justify-start w-full gap-8">
          <h1 className="sm:text-[54px] font-bold text-center md:text-start">
            Balashaq - Ваш Помощник в Развитии Здоровых Детей
          </h1>

          <div className="flex flex-row items-center relative">
            <Link href={"#book"} className="z-20">
              <button className="text-[20px] font-semibold px-[60px] py-[20px] bg-[#89DB7B] rounded-3xl">
                Booking Now
              </button>
            </Link>

            <Image
              src="/hero-decor.svg"
              alt="hero-decor"
              width={130}
              height={130}
              className="absolute left-[170px]"
            />
          </div>
        </div>

        <Image
          src="/bg-hero.svg"
          alt="background-hero"
          width={400}
          height={400}
          className="lg:mt-40 lg:mr-10 max-w-[400px] max-h-[400px]"
        />
      </div>

      <Features/>
    </div>
  );
};

export default Hero;
