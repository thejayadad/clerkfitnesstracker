import Hero from "@/components/HomePage/Hero";
import HeroText from "@/components/HomePage/HeroText";


export default function Home() {
  return (
   <main className="min-h-full flex flex-col ">
    <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
      <HeroText 
    heading="Sign Up for Your Fitness Journey"
    subtext="Track your progress, set goals, and achieve success with MyFitnessTracker."
      />
      <Hero/>
    </div>
   </main>
  );
}
