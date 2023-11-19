import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Treatments from "./components/Treatments";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betwee w-full bg-white text-[#1E1E1E] px-10">
      <div className="flex flex-col max-w-[1140px] gap-10">
        <NavBar />
        <div className="flex flex-col gap-20">
          <Hero />
          <Treatments />
        </div>
      </div>
    </main>
  );
}
