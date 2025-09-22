import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [open, setOpen] = useState(false);
    const navItems = [
        { path: "/", number: "00", name: "Home" },
        { path: "/destination", number: "01", name: "Destination" },
        { path: "/crew", number: "02", name: "Crew" },
        { path: "/technology", number: "03", name: "Technology" },
    ];
    return (_jsxs("header", { className: "text-white px-4 lg:p-4 absolute top-4 lg:top-10 inset-x-0 z-20 flex justify-between gap-6 items-center", children: [_jsx("a", { href: "/", className: "lg:ml-16", children: _jsx("img", { src: Logo, alt: "Space Tourism Logo" }) }), _jsx("div", { className: "h-[1px] w-[560px] bg-white/25 -mr-15 hidden lg:block" }), _jsx("nav", { className: "min-w-1/2 bg-white/5 backdrop-blur-[80px] h-[96px] hidden lg:block", children: _jsx("ul", { className: "flex justify-end items-center h-full pr-16 gap-12 inset-x-0 font-barlowCondensed uppercase text-base", children: navItems.map((item) => (_jsx("li", { className: `h-full flex items-center ${currentPath === item.path
                            ? "border-b-3 border-b-white"
                            : "border-b-3 border-b-transparent hover:border-b-white/50"}`, children: _jsxs(Link, { to: item.path, className: "flex gap-3", children: [_jsx("span", { className: "font-bold", children: item.number }), _jsx("span", { children: item.name })] }) }, item.path))) }) }), _jsxs("div", { className: "lg:hidden", children: [_jsx("button", { onClick: () => setOpen(!open), className: "cursor-pointer", children: _jsx("img", { src: open ? Close : Hamburger, alt: "menu toggle" }) }), _jsx(AnimatePresence, { children: open && (_jsxs(motion.div, { className: "fixed top-0 right-0 h-full bg-[#0B0D1726] p-6 z-50 shadow-2xl backdrop-blur-[80px]", style: { width: "254px" }, initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" }, transition: { type: "tween", duration: 0.3 }, children: [_jsx("div", { className: "mb-6 flex items-center justify-end", children: _jsx("button", { onClick: () => setOpen(false), children: _jsx("img", { src: Close, alt: "close" }) }) }), _jsx("nav", { className: "", children: _jsx("ul", { className: "flex flex-col h-full gap-8 inset-x-0 font-barlowCondensed uppercase text-base", children: navItems.map((item) => (_jsx("li", { className: `h-full flex items-center`, children: _jsxs(Link, { to: item.path, onClick: () => {
                                                    setOpen(false);
                                                }, className: "flex gap-3", children: [_jsx("span", { className: "font-bold", children: item.number }), _jsx("span", { children: item.name })] }) }, item.path))) }) })] })) })] })] }));
};
export default Header;
