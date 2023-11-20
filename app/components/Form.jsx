"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const Form = () => {
  const [fullname, setFullname] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [parentType, setParentType] = useState('');

  const sendForm = async () => {
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, number, email, parentType }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Form submitted:", data);
        // Handle successful submission here, like showing a success message
      } else {
        console.error("Form submission error:", data);
        // Handle errors here, like showing an error message
      }
    } catch (error) {
      console.error("Form submission exception:", error);
      // Handle exceptions here, like showing an error message
    }
  };


  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row bg-white rounded-[53px] shadow-custom overflow-hidden">
        <div className="md:w-1/2">
          <Image
            src="/registration.svg" // Replace with your image path
            alt="registration"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center justify-center md:w-1/2 p-8 gap-[53px]">
          <h2 className="text-[36px] font-bold text-gray-800 mb-6">
            Оставить заявку
          </h2>
          <form className="flex flex-col">
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Фамилия Имя"
                  value={fullname}
                  onChange={(event) => setFullname(event.target.value)}
                  className="w-full px-10 py-4 border border-gray-300 rounded-2xl"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="text"
                  placeholder="Почта"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full px-10 py-4 border border-gray-300 rounded-2xl"
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Номер Телефона"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  className="w-full px-10 py-4 border border-gray-300 rounded-2xl"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="text"
                  placeholder="Количество детей"
                  value={parentType}
                  onChange={(event) => setParentType(event.target.value)}
                  className="w-full px-10 py-4 border border-gray-300 rounded-2xl"
                  required
                />
              </div>
            </div>

            <button
              type="button"
              className="bg-[#89DB7B] font-semibold px-8 py-[26px] text-[20px] rounded-full drop-shadow-md shadow-button hover:bg-green-500 transition duration-300 ease-in-out flex items-center justify-center text-center"
              onClick={() => sendForm({
                fullname, number, email, parentType
              })}
            >
              <p className="mr-4">Оставить заявку</p>
              <Image
                src={"arrow.svg"}
                alt="arrow-button"
                width={15}
                height={15}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
