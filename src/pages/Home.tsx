import HomeBg from "../assets/home/background-home-desktop.jpg";
import HomeBgTablet from "../assets/home/background-home-tablet.jpg";
import HomeBgMobile from "../assets/home/background-home-mobile.jpg";

export default function Home() {
  return (
    <div className="relative w-screen lg:h-screen overflow-hidden">
      {/* Backgrounds per breakpoint */}
      <img
        src={HomeBg}
        className="absolute inset-0 hidden lg:block w-full h-full object-cover"
        alt="Background Desktop"
      />
      <img
        src={HomeBgTablet}
        className="absolute inset-0 hidden md:block lg:hidden w-full h-full object-cover"
        alt="Background Tablet"
      />
      <img
        src={HomeBgMobile}
        className="absolute inset-0 md:hidden w-full h-full object-cover"
        alt="Background Mobile"
      />

      {/* Hero content only (no header here) */}
      <div
        className="
        relative z-10 h-full text-white
        flex flex-col lg:flex-row items-center justify-between
        px-6 md:px-16 lg:px-32
      "
      >
        {/* Left: text */}
        <div
          className="
          max-w-md text-center lg:text-left
          mt-28 md:mt-24 lg:mt-0
        "
        >
          <p className="font-barlowCondensed tracking-[4px] text-base md:text-lg uppercase">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1
            className="font-bellefair uppercase leading-none
                         text-[4.5rem] md:text-[6rem] lg:text-[8rem] my-6"
          >
            SPACE
          </h1>
          <p className="font-barlow text-gray-300 leading-relaxed text-base md:text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* Right: Explore button */}
        <div className="mt-12 lg:mt-0 flex items-center justify-center pb-4">
          <button
            className="
              w-40 h-40 md:w-52 md:h-52 bg-white text-black
              flex items-center justify-center rounded-full
              text-2xl md:text-3xl font-bellefair uppercase
              cursor-pointer transition hover:scale-105
            "
            aria-label="Explore"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
