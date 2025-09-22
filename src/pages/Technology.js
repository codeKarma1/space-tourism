import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "relative w-screen h-screen overflow-hidden", children: [_jsx("img", { src: HomeBg, className: "absolute inset-0 w-full h-full object-cover", alt: "Background" }), _jsxs("div", { className: "relative z-10 flex flex-col h-full px-32 text-white", children: [_jsxs("div", { className: "mt-28 font-barlowCondensed uppercase tracking-[4px] text-2xl flex items-center gap-4", children: [_jsx("span", { className: "text-gray-400", children: "03" }), _jsx("span", { children: "Space Launch 101" })] }), _jsxs("div", { className: "flex flex-1 items-center justify-between", children: [_jsx("div", { className: "flex h-max", children: _jsxs("div", { className: "flex gap-16", children: [_jsx("nav", { className: "h-full", children: _jsx("ul", { className: "h-full flex flex-col justify-between", children: tabs.map((item) => (_jsxs(motion.li, { initial: false, animate: {
                                                        backgroundColor: item.value === selectedTab
                                                            ? "#FFFFFF"
                                                            : "transparent",
                                                    }, className: `w-20 h-20 rounded-full flex items-center justify-center font-bellefair text-[32px] cursor-pointer ${item.value === selectedTab
                                                        ? "text-[#0B0D17]"
                                                        : "text-white"}`, onClick: () => setSelectedTab(item.value), children: [`${item.label}`, item.value === selectedTab ? (_jsx(motion.div, { className: "", layoutId: "underline", id: "underline" })) : null] }, item.label))) }) }), _jsx("main", { className: "", children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { y: 10, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -10, opacity: 0 }, transition: { duration: 0.2 }, className: "", children: selectedTab === 1 ? (_jsxs("div", { className: "max-w-md", children: [_jsx("p", { className: "font-barlowCondensed text-lg uppercase tracking-[3px] text-gray-400 mb-2", children: "The Terminology\u2026" }), _jsx("h1", { className: "font-bellefair text-6xl uppercase mb-6", children: "Launch Vehicle" }), _jsx("p", { className: "font-barlow leading-relaxed text-lg text-gray-200", children: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\u2019s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\u2019s quite an awe-inspiring sight on the launch pad!" })] })) : selectedTab === 2 ? (_jsxs("div", { className: "max-w-md", children: [_jsx("p", { className: "font-barlowCondensed text-lg uppercase tracking-[3px] text-gray-400 mb-2", children: "The Terminology\u2026" }), _jsx("h1", { className: "font-bellefair text-6xl uppercase mb-6", children: "SPACEPORT" }), _jsx("p", { className: "font-barlow leading-relaxed text-lg text-gray-200", children: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth\u2019s rotation for launch." })] })) : (_jsxs("div", { className: "max-w-md", children: [_jsx("p", { className: "font-barlowCondensed text-lg uppercase tracking-[3px] text-gray-400 mb-2", children: "The Terminology\u2026" }), _jsx("h1", { className: "font-bellefair text-6xl uppercase mb-6", children: "SPACE CAPSULE" }), _jsx("p", { className: "font-barlow leading-relaxed text-lg text-gray-200", children: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained." })] })) }, selectedTab ? tabs[selectedTab - 1].label : "empty") }) })] }) }), _jsx("div", { className: "flex-1 flex justify-center", children: _jsx("img", { src: selectedTab === 1
                                        ? LaunchImage1
                                        : selectedTab === 2
                                            ? LaunchImage2
                                            : LaunchImage3, alt: "Launch Vehicle", className: "h-[65vh] object-contain" }) })] })] })] }));
}
