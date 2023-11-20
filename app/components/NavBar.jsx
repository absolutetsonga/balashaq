import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full h-20 sm:h-[115px] flex flex-row items-center justify-between font-semibold">
      <h1 className="text-[24px]"> Balashaq </h1>

      <ul className="hidden sm:flex flex-row items-center gap-8 text-base sm:text-[20px] cursor-pointer transition-all">
        <Link href="#main" className="hover:text-[#5ab949]">
          Main
        </Link>
        <Link href="#services" className="hover:text-[#5ab949]">
          Services
        </Link>
        <Link href="#about-us" className="hover:text-[#5ab949]">
          About Us
        </Link>
      </ul>

      <Link href="#form">
        <button className="px-2 py-2 sm:px-4 sm:py-3 border-[2px] border-[#89DB7B] rounded-3xl">
          Оставить заявку
        </button>
      </Link>

      <div
        className="relative flex sm:hidden"
        onClick={() => setToggle(!toggle)}
      >
        <Image src="/bars-solid.svg" alt="menu" width={40} height={40} />

        {toggle ? (
          <div
            className={`${
              toggle ? "opacity-100" : "opacity-0 pointer-events-none"
            } sm:hidden absolute flex flex-col gap-2 top-14 right-0 bg-slate-100 px-4 py-6 rounded-xl z-30`}
          >
            <Link href="#main" className="hover:text-[#5ab949]">
              Main
            </Link>
            <Link href="#services" className="hover:text-[#5ab949]">
              Services
            </Link>
            <Link href="#about-us" className="hover:text-[#5ab949]">
              About Us
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default NavBar;
