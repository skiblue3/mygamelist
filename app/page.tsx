import Features from "@/components/Features";
import Game from "@/components/Game";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Game />
      <Guide />
      <Features />
      <GetApp /> 
    </>
  );
}
