import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betwee w-full bg-white text-[#1E1E1E] px-10">
      <div className="flex flex-col max-w-[1140px]">
        <NavBar />
        <Hero />
      </div>
    </main>
  );
}
