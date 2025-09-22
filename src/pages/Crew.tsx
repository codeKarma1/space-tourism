// src/pages/Crew.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeBg from "../assets/crew/background-crew-desktop.jpg";

// Import crew images
import DouglasHurleyImg from "../assets/crew/image-douglas-hurley.webp";
import MarkShuttleworthImg from "../assets/crew/image-mark-shuttleworth.webp";
import VictorGloverImg from "../assets/crew/image-victor-glover.webp";
import AnoushehAnsariImg from "../assets/crew/image-anousheh-ansari.webp";

const crewData = [
  {
    role: "COMMANDER",
    name: "DOUGLAS HURLEY",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: DouglasHurleyImg,
  },
  {
    role: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. He became the first South African to travel to space as a space tourist.",
    image: MarkShuttleworthImg,
  },
  {
    role: "PILOT",
    name: "VICTOR GLOVER",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64.",
    image: VictorGloverImg,
  },
  {
    role: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: AnoushehAnsariImg,
  },
];

export default function Crew() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCrew = crewData[activeIndex];

  return (
    <>
      {/* Background */}
      <img
        src={HomeBg}
        className="fixed inset-0 object-cover w-full h-full"
        alt="Background"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-36 pt-24 md:pt-32 h-screen text-white overflow-y-auto">
        {/* Left: Text */}
        <div className="flex flex-col items-center lg:items-start max-w-xl text-center lg:text-left">
          {/* Top label */}
          <div className="flex items-center gap-3 font-barlowCondensed text-base md:text-xl mb-8">
            <p className="text-gray-400">02</p>
            <p>MEET YOUR CREW</p>
          </div>

          {/* Crew Info with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4 md:gap-6"
            >
              <p className="font-bellefair text-lg md:text-2xl text-gray-400">
                {activeCrew.role}
              </p>
              <h1 className="font-bellefair text-3xl md:text-5xl">
                {activeCrew.name}
              </h1>
              <p className="font-barlow leading-relaxed text-sm md:text-lg max-w-md mx-auto lg:mx-0">
                {activeCrew.bio}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex gap-4 mt-8 md:mt-12">
            {crewData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition ${
                  index === activeIndex ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Crew Image */}
        <div className="flex-1 flex justify-center mt-12 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={activeCrew.image}
              alt={activeCrew.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="h-64 md:h-[60vh] object-contain"
            />
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
