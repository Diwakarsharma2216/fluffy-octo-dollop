import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HotTopics from "@/components/HotTopics";
import AboutFirm from "@/components/AboutFirm";
import Insights from "@/components/Insights";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] overflow-x-hidden font-sans text-gray-900">
      <Navbar />
      <Hero />
      <HotTopics />
      
      <div className="w-full bg-gradient-to-b from-white to-gray-50">
        <AboutFirm />
      </div>
      
      <div className="w-full bg-white">
        <Insights />
      </div>
    </main>
  );
}
