import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const HeroSection = () => {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center h-screen py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <div className="">
        <div className="flex">
          <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <Badge variant={"secondary"} className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200">
              <Sparkles className="w-6 h-6 mr-2 text-rose-600 animate-pulse" />
              <p className="text-base text-rose-600">Powered by AI</p>
            </Badge>
          </div>
        </div>
        <h1 className="font-bold py-6 text-center">Transform PDFs into Concise Summaries</h1>
        <h2 className="text-lg sm:text-xl text-center lg:text-2xl px-4 lg:px-0 lg:max-w-4xl ">
          AI-Powered PDF Summarizer for Quick Insights
        </h2>
        <Button>Try Clarita</Button>
      </div>
    </section>
  );
};

export default HeroSection;
