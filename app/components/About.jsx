import React from 'react'
import Image from 'next/image';
import Button from './Button';

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2">
        <Image
          src="/about-bg-1.svg"
          alt="Dentist with Patient"
          width={540}
          height={711}
          className="mx-auto max-w-[540px] max-h-[700px] md:w-full md:h-full"
        />
      </div>

      <div className="w-full md:w-1/2 p-8">
        <div className="flex flex-col gap-10 max-w-md mx-auto">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-bold">Patient-Centered Care</h2>
            <p className="text-lg">
              Наша программа, создана для заботливых родителей, которые
              стремятся обеспечить здоровое и гармоничное развитие своих детей.
              Мы не просто предоставляем инструменты; мы создаем окружение, где
              каждый ребенок может расти под ласковым вниманием и заботой.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-4xl font-bold">Наша миссия</p>
            <p className="text-lg">
              Мы стремимся обеспечить здоровое и гармоничное развитие каждого
              маленького участника нашей программы, применяя передовые
              технологии, индивидуальный подход и эмоциональную поддержку.
            </p>

            <Button> Learn More </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About