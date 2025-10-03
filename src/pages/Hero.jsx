import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaBook } from "react-icons/fa";
import Button from "../Component/Button";
import { Fragment } from "react";

const Hero = () => {
    return (

        <Fragment>
            <section
                id="contact"
                className="min-h-screen flex flex-col  items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] bg-gray-100 px-4"
            >
                <div className="flex w-full">
                    {/* Left Sidebar */}
                    <div className=" bg-white hidden  py-12 shadow-md rounded-lg w-16
                     lg:flex flex-col items-center justify-center gap-6">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedin className="text-2xl hover:text-blue-600 cursor-pointer" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter className="text-2xl hover:text-sky-500 cursor-pointer" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                            <FaYoutube className="text-2xl hover:text-red-600 cursor-pointer" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <FaGithub className="text-2xl hover:text-gray-800 cursor-pointer" />
                        </a>
                        <a href="https://yourblog.com" target="_blank" rel="noreferrer">
                            <FaBook className="text-2xl hover:text-green-600 cursor-pointer" />
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
                            <Button text="projects" width={60} />
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>

    );
};

export default Hero;
