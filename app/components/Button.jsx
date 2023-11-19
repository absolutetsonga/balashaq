import React from 'react'
import Image from 'next/image';

const Button = ({ children }) => {
  return (
    <div>
      <button
        type="button"
        className="bg-[#89DB7B] font-semibold px-8 py-[26px] text-[20px] rounded-full drop-shadow-md shadow-button hover:bg-green-500 transition duration-300 ease-in-out flex items-center"
      >
        <p className='mr-4'>{children}</p>
        <Image src={"arrow.svg"} alt="arrow-button" width={15} height={15}/>
      </button>
    </div>
  );
}

export default Button