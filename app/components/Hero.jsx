import React from "react";
import Image from "next/image";
import Link from "next/link";
import Features from "./Features";

const Hero = () => {
  return (
    <div className="flex flex-col" id="main">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col justify-center items-center md:items-stretch md:justify-start w-full gap-8">
          <h1 className="text-[42px] sm:text-[54px] font-bold text-center md:text-start">
            Balashaq - Ваш Помощник в Развитии Здоровых Детей
          </h1>

          <div className="relative">
            <Link href={"#form"} className="z-20">
              <button className="flex flex-row items-center justify-center gap-4 text-[20px] font-semibold px-10 py-4 sm:px-[60px] sm:py-[20px] bg-[#89DB7B] rounded-3xl">
                <p>Начать сейчас</p>
                <Image
                  src={"arrow.svg"}
                  alt="arrow-button"
                  width={15}
                  height={15}
                />
              </button>
            </Link>

            <Image
              src="/hero-decor.svg"
              alt="hero-decor"
              width={130}
              height={130}
              className="absolute -right-10 sm:left-[200px] -top-8"
            />
          </div>
        </div>

        <Image
          src="/bg-hero.svg"
          alt="background-hero"
          width={400}
          height={400}
          className="lg:mt-40 lg:mr-10 w-full sm:max-w-[400px] sm:max-h-[400px]"
        />
      </div>

      <Features />
    </div>
  );
};

export default Hero;
