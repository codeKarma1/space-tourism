import { useState, type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

interface NavItem {
  path: string;
  number: string;
  name: string;
}

const Header: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = [
    { path: "/", number: "00", name: "Home" },
    { path: "/destination", number: "01", name: "Destination" },
    { path: "/crew", number: "02", name: "Crew" },
    { path: "/technology", number: "03", name: "Technology" },
  ];

  return (
    <header className="text-white px-4 lg:p-4 absolute top-4 lg:top-10 inset-x-0 z-20 flex justify-between gap-6 items-center">
      <a href="/" className="lg:ml-16">
        <img src={Logo} alt="Space Tourism Logo" />
      </a>
      <div className="h-[1px] w-[560px] bg-white/25 -mr-15 hidden lg:block" />
      <nav className="min-w-1/2 bg-white/5 backdrop-blur-[80px] h-[96px] hidden lg:block">
        <ul className="flex justify-end items-center h-full pr-16 gap-12 inset-x-0 font-barlowCondensed uppercase text-base">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`h-full flex items-center ${
                currentPath === item.path
                  ? "border-b-3 border-b-white"
                  : "border-b-3 border-b-transparent hover:border-b-white/50"
              }`}
            >
              <Link to={item.path} className="flex gap-3">
                <span className="font-bold">{item.number}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="lg:hidden">
        {/* Toggle Button */}
        <button onClick={() => setOpen(!open)} className="cursor-pointer">
          <img src={open ? Close : Hamburger} alt="menu toggle" />
        </button>

        {/* Sliding Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed top-0 right-0 h-full bg-[#0B0D1726] p-6 z-50 shadow-2xl backdrop-blur-[80px]"
              style={{ width: "254px" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="mb-6 flex items-center justify-end">
                <button onClick={() => setOpen(false)}>
                  <img src={Close} alt="close" />
                </button>
              </div>

              <nav className="">
                <ul className="flex flex-col h-full gap-8 inset-x-0 font-barlowCondensed uppercase text-base">
                  {navItems.map((item) => (
                    <li key={item.path} className={`h-full flex items-center`}>
                      <Link
                        to={item.path}
                        onClick={() => {
                          setOpen(false);
                        }}
                        className="flex gap-3"
                      >
                        <span className="font-bold">{item.number}</span>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
