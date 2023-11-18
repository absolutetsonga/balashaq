import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="w-full h-[115px] flex flex-row items-center justify-between font-semibold">
      <h1 className="text-[24px]"> Balashaq </h1>

      <ul className="flex flex-row items-center gap-8 text-[20px] cursor-pointer transition-all">
        <li className="hover:text-[#5ab949]">Главная</li>
        <li className="hover:text-[#5ab949]">Сервисы</li>
        <li className="hover:text-[#5ab949]">О нас</li>
      </ul>

      <button className="px-4 py-3 border-[2px] border-[#89DB7B] rounded-3xl">
        Оставить заявку
      </button>
    </div>
  );
};

export default NavBar;
