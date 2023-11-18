import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betwee w-full bg-white text-[#1E1E1E]">
      <div className="flex flex-col w-[1140px]">
        <NavBar />
      </div>
    </main>
  );
}
