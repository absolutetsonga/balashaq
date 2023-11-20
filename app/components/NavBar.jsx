import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full h-[115px] flex flex-row items-center justify-between font-semibold">
      <h1 className="text-[24px]"> Balashaq </h1>

      <ul className="hidden sm:flex flex-row items-center gap-8 text-[20px] cursor-pointer transition-all">
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

      <button className="px-4 py-3 border-[2px] border-[#89DB7B] rounded-3xl">
        Оставить заявку
      </button>

      <div
        className="relative flex sm:hidden"
        onClick={() => setToggle(!toggle)}
      >
        <Image src="/bars-solid.svg" alt="menu" width={40} height={40} />

        {toggle ? (
          <div
            className={`${
              toggle ? "opacity-100" : "opacity-0 pointer-events-none"
            } sm:hidden absolute flex flex-col gap-2 top-20 -right-6 bg-slate-100 px-4 py-6 rounded-xl`}
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
