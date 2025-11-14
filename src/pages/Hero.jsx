import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaBook, FaCode } from "react-icons/fa";
import Button from "../Component/Button";
import { Fragment } from "react";
import { Link } from "react-scroll";

const Hero = () => {
    return (

        <Fragment>
            <section
                className="min-h-screen flex flex-col  items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] bg-gray-100 px-4"
            >
                <div className="flex w-full">
                    {/* Left Sidebar */}
                    <div className=" bg-white hidden  py-12 shadow-md rounded-lg w-16
                     lg:flex flex-col items-center justify-center gap-6">
                        <a href="https://www.linkedin.com/in/priya-k-1374211b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                            <FaLinkedin className="text-2xl hover:text-blue-600 cursor-pointer" />
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

                    {/* Hero Content */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center px-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                HEY, I'M PRIYA KARN
                            </h1>
                            <p className="text-md text-gray-600 max-w-xl mx-auto mb-8">
                                A Result-Oriented Web Developer building and managing Websites and Web
                                Applications that leads to the success of the overall product
                            </p>
                            <Link to="projects" smooth="true" duration="500">
                                <Button text="projects" width={60} />
                            </Link>

                        </div>
                    </div>
                </div>

            </section>
        </Fragment>

    );
};

export default Hero;
