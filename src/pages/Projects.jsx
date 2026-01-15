import React, { Fragment } from "react";
import { FiEye } from "react-icons/fi";
import Heading from "../Component/Heading";
import { Link } from "react-scroll";

const proData = [
    {
        id: 1,
        name: "CodePilot webapp",
        img: "images/ss.png",
        desc: "I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming",
        githubLink: "https://github.com/Prriya-Karn/CodePilot",
        liveLink: "https://code-pilot-inky.vercel.app/"
    },
    {
        id: 2,
        name: "porsche webapp",
        img: "images/project.jpg",
        desc: "I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming",
        githubLink: "https://github.com/Prriya-Karn/PorscheWebApp",
        liveLink: "https://porsche-web-app.vercel.app/"
    },
    {
        id: 3,
        name: "chatgpt",
        img: "images/project.jpg",
        desc: "I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming",
        githubLink: "https://github.com/Prriya-Karn/mychatgpt",
        liveLink: "https://mychatgpt-self-nine.vercel.app/"
    },

];

const Projects = () => {
    return (

        <Fragment>
            <div id="projects" className="py-20  bg-[#f6f5fc]">
                <Heading text="projects" />
                {
                    proData.map((e) => {
                        return (
                            <Fragment>
                                <div className="flex items-center lg:mb-20 mb-10 justify-center">


                                    <div className="flex flex-col lg:flex-row bg-white lg:mt-30 mt-10  shadow-lg rounded-lg overflow-hidden mx-6 md:mx-20 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">

                                        {/* Left Image Section */}
                                        <div className={`lg:w-1/2 ${e.id % 2 == 0 ? "lg:order-2" : "lg:order-1"}`}>
                                            <img
                                                src={e.img}
                                                alt="Dashboard"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Right Content Section */}
                                        <div className={`lg:w-1/2 p-6 ${e.id % 2 == 0 ? "lg:order-1" : "lg:order-2"} flex flex-col justify-between`}>
                                            <div>
                                                <h2 className="text-xl capitalize font-bold text-gray-800 mb-2">
                                                    {e.name}
                                                </h2>

                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {e.desc}
                                                </p>
                                            </div>

                                            {/* Buttons */}
                                            <div className="mt-6 flex gap-3">
                                                <a href={e.githubLink} target="_blank" rel="noopener noreferrer">
                                                    <button className="bg-[var(--btn-bg)] cursor-pointer text-white px-5 py-2 rounded-lg font-medium shadow-md hover:bg-[#5a39e0] transition">
                                                        Github
                                                    </button>
                                                </a>

                                                <a href={e.liveLink} target="_blank" rel="noopener noreferrer">

                                                    <button className="flex cursor-pointer items-center gap-2 border border-gray-300 text-gray-600 px-5 py-2 rounded-lg hover:bg-gray-100 transition">
                                                    <FiEye /> Preview
                                                </button>
                                                </a>
                                            </div>
                                        </div>




                                    </div>


                                </div>

                            </Fragment>
                        )
                    })
                }
            </div>
        </Fragment>

    );
};

export default Projects;
