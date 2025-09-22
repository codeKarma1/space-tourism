import { AnimatePresence } from "motion/react";
import HomeBg from "../assets/technology/background-technology-desktop.jpg";
import LaunchImage1 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import LaunchImage2 from "../assets/technology/image-spaceport-portrait.jpg";
import LaunchImage3 from "../assets/technology/image-space-capsule-portrait.jpg";
import { useState } from "react";
import * as motion from "motion/react-client";

const tabs = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
];

export default function Technology() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={HomeBg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full px-32 text-white">
        {/* Top-left label */}
        <div className="mt-28 font-barlowCondensed uppercase tracking-[4px] text-2xl flex items-center gap-4">
          <span className="text-gray-400">03</span>
          <span>Space Launch 101</span>
        </div>

        {/* Main layout */}
        <div className="flex flex-1 items-center justify-between">
          {/* Left side - text content */}
          <div className="flex h-max">
            <div className="flex gap-16">
              <nav className="h-full">
                <ul className="h-full flex flex-col justify-between">
                  {tabs.map((item) => (
                    <motion.li
                      key={item.label}
                      initial={false}
                      animate={{
                        backgroundColor:
                          item.value === selectedTab
                            ? "#FFFFFF"
                            : "transparent",
                      }}
                      className={`w-20 h-20 rounded-full flex items-center justify-center font-bellefair text-[32px] cursor-pointer ${
                        item.value === selectedTab
                          ? "text-[#0B0D17]"
                          : "text-white"
                      }`}
                      onClick={() => setSelectedTab(item.value)}
                    >
                      {`${item.label}`}
                      {item.value === selectedTab ? (
                        <motion.div
                          className=""
                          layoutId="underline"
                          id="underline"
                        />
                      ) : null}
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <main className="">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTab ? tabs[selectedTab - 1].label : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className=""
                  >
                    {selectedTab === 1 ? (
                      <div className="max-w-md">
                        <p className="font-barlowCondensed text-lg uppercase tracking-[3px] text-gray-400 mb-2">
                          The Terminology…
                        </p>
                        <h1 className="font-bellefair text-6xl uppercase mb-6">
                          Launch Vehicle
                        </h1>
                        <p className="font-barlow leading-relaxed text-lg text-gray-200">
                          A launch vehicle or carrier rocket is a
                          rocket-propelled vehicle used to carry a payload from
                          Earth’s surface to space, usually to Earth orbit or
                          beyond. Our WEB-X carrier rocket is the most powerful
                          in operation. Standing 150 metres tall, it’s quite an
                          awe-inspiring sight on the launch pad!
                        </p>
                      </div>
                    ) : selectedTab === 2 ? (
                      <div className="max-w-md">
                        <p className="font-barlowCondensed text-lg uppercase tracking-[3px] text-gray-400 mb-2">
                          The Terminology…
                        </p>
                        <h1 className="font-bellefair text-6xl uppercase mb-6">
                          SPACEPORT
                        </h1>
                        <p className="font-barlow leading-relaxed text-lg text-gray-200">
                          A spaceport or cosmodrome is a site for launching (or
                          receiving) spacecraft, by analogy to the seaport for
                          ships or airport for aircraft. Based in the famous
                          Cape Canaveral, our spaceport is ideally situated to
                          take advantage of the Earth’s rotation for launch.
                        </p>
                      </div>
                    ) : (
                      <div className="max-w-md">
                        <p className="font-barlowCondensed text-lg uppercase tracking-[3px] text-gray-400 mb-2">
                          The Terminology…
                        </p>
                        <h1 className="font-bellefair text-6xl uppercase mb-6">
                          SPACE CAPSULE
                        </h1>
                        <p className="font-barlow leading-relaxed text-lg text-gray-200">
                          A space capsule is an often-crewed spacecraft that
                          uses a blunt-body reentry capsule to reenter the
                          Earth's atmosphere without wings. Our capsule is where
                          you'll spend your time during the flight. It includes
                          a space gym, cinema, and plenty of other activities to
                          keep you entertained.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </main>
            </div>
          </div>

          {/* Right side - image */}
          <div className="flex-1 flex justify-center">
            <img
              src={
                selectedTab === 1
                  ? LaunchImage1
                  : selectedTab === 2
                  ? LaunchImage2
                  : LaunchImage3
              }
              alt="Launch Vehicle"
              className="h-[65vh] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
