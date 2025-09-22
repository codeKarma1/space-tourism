// src/pages/Destination.tsx
import { NavLink, useParams } from "react-router-dom";
import HomeBg from "../assets/destination/background-destination-desktop.jpg";

// images
import MoonImage from "../assets/destination/image-moon.webp";
import MarsImage from "../assets/destination/image-mars.webp";
import EuropaImage from "../assets/destination/image-europa.webp";
import TitanImage from "../assets/destination/image-titan.webp";

type PlanetKey = "moon" | "mars" | "europa" | "titan";

const planets: Record<
  PlanetKey,
  {
    name: string;
    image: string;
    description: string;
    distance: string;
    travel: string;
  }
> = {
  moon: {
    name: "Moon",
    image: MoonImage,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travel: "3 DAYS",
  },
  mars: {
    name: "Mars",
    image: MarsImage,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travel: "9 MONTHS",
  },
  europa: {
    name: "Europa",
    image: EuropaImage,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug space cabin.",
    distance: "628 MIL. KM",
    travel: "3 YEARS",
  },
  titan: {
    name: "Titan",
    image: TitanImage,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of Saturn’s rings.",
    distance: "1.6 BIL. KM",
    travel: "7 YEARS",
  },
};

export default function Destination() {
  const params = useParams();
  const planetId = (params.planetId || "moon") as PlanetKey;
  const planet = planets[planetId] ?? planets.moon;

  return (
    <>
      {/* background */}
      <img
        src={HomeBg}
        className="fixed inset-0 w-full h-full object-cover"
        alt="Background"
      />

      {/* content wrapper */}
      <div className="fixed inset-0 z-10 h-screen px-6 md:px-12 lg:px-24 text-white flex flex-col overflow-y-auto">
        {/* top label */}
        <div className="mt-24 md:mt-32 lg:mt-36 font-barlowCondensed uppercase tracking-[4px] text-base md:text-lg lg:text-xl flex items-center gap-4 justify-center lg:justify-start">
          <span className="text-gray-400">01</span>
          <span>Pick Your Destination</span>
        </div>

        {/* main section */}
        <div className="flex flex-col lg:flex-row flex-1 items-center justify-center lg:justify-between gap-12 lg:gap-20 mt-8">
          {/* left: image */}
          <div className="flex-1 flex justify-center">
            <img
              src={planet.image}
              alt={planet.name}
              className="w-40 h-40 md:w-72 md:h-72 lg:h-[55vh] object-contain"
            />
          </div>

          {/* right: details */}
          <div className="flex-1 max-w-md mt-8 text-center lg:text-left">
            {/* nav tabs */}
            <nav className="flex justify-center lg:justify-start gap-6 font-barlowCondensed uppercase tracking-[2px] text-sm md:text-base mb-6">
              {(["moon", "mars", "europa", "titan"] as PlanetKey[]).map(
                (key) => (
                  <NavLink
                    key={key}
                    to={`/destination/${key}`}
                    className={({ isActive }) =>
                      `pb-1 ${
                        isActive
                          ? "border-b-2 border-white"
                          : "text-gray-400 hover:text-white transition"
                      }`
                    }
                  >
                    {planets[key].name}
                  </NavLink>
                )
              )}
            </nav>

            {/* planet info */}
            <h1 className="font-bellefair text-5xl md:text-6xl lg:text-7xl mb-4">
              {planet.name}
            </h1>

            <p className="font-barlow leading-relaxed text-sm md:text-base mb-8 text-gray-200">
              {planet.description}
            </p>

            {/* distance + travel time */}
            <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row gap-6 md:gap-12 justify-center lg:justify-between">
              <div>
                <p className="font-barlowCondensed text-xs tracking-[2px] text-gray-400">
                  AVG. DISTANCE
                </p>
                <p className="font-bellefair text-xl md:text-2xl">
                  {planet.distance}
                </p>
              </div>
              <div>
                <p className="font-barlowCondensed text-xs tracking-[2px] text-gray-400">
                  EST. TRAVEL TIME
                </p>
                <p className="font-bellefair text-xl md:text-2xl">
                  {planet.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
