import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaCode, } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white py-10 px-6">
            <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl max-w-2xl  mx-auto flex flex-col lg:flex-row  gap-10">
                {/* Left Section */}
                <div className="lg:w-1/2 w-80 xl:w-full">
                    <h2 style={{ fontFamily: "var(--font-body)" }} className="text-2xl font-bold mb-4 uppercase">priya karn</h2>
                    <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>

                {/* Right Section */}
                <div className="xl:ml-96 lg:ml-70">
                    <h2 className="text-2xl font-bold mb-4 flex items-start" style={{ fontFamily: "var(--font-body)" }}>SOCIAL</h2>
                    <div style={{ fontFamily: "var(--font-body)" }} className="flex gap-5 text-2xl">
                        <a href="https://www.linkedin.com/in/priya-k-1374211b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                            <FaLinkedinIn className="text-2xl hover:text-blue-600 cursor-pointer" />
                        </a>
                        <a href="https://x.com/prjah12" target="_blank" rel="noreferrer">
                            <FaTwitter className="text-2xl hover:text-sky-500 cursor-pointer" />
                        </a>
                        <a href="https://github.com/Prriya-Karn" target="_blank" rel="noreferrer">
                            <FaGithub className="text-2xl hover:text-gray-800 cursor-pointer" />
                        </a>

                        <a href="https://leetcode.com/u/user1596V/" target="_blank" rel="noreferrer">
                            <FaCode className="text-2xl hover:text-gray-800 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[var(--text-color)] lg:mx-30  mt-8 pt-6 text-center text-white text-sm">
                © Copyright 2025. Made by{" "}
                <a style={{ fontFamily: "var(--font-heading)" }} className="font-semibold  capitalize text-white hover:text-[var(--btn-color)] cursor-pointer">
                    priya karn
                </a>
            </div>
        </footer>
    );
};

export default Footer;
