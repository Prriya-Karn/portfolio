import React from "react";
import Heading from "../Component/Heading";
import Button from "../Component/Button";
import { Link } from "react-scroll";

const About = () => {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Wordpress",
        "PHP",
        "SASS",
        "GIT",
        "Github",
        "Responsive Design",
        "SEO",
        "Terminal",
    ];

    return (
        <div id="about" className="py-12 bg-[var(--bg-color)] px-6 md:px-20 pb-30">
            <Heading text="ABOUT ME" py={20} desc="Here you will find more information about me, what I do, and my current skills mostly in terms
                    of programming and technology"/>
            <div className="2xl:max-w-7xl max-w-6xl  mx-auto grid xl:grid-cols-2 gap-30">
                {/* Left Section */}
                <div style={{ fontFamily: "var(--font-body)" }}>
                    <h2 className="text-2xl text-[var(--text-color)] font-bold mb-6">Get to know me!</h2>
                    <p className="mb-4 text-[var(--text-color)] leading-relaxed">
                        Hi, I’m Priya Karn, a Frontend Developer specializing in React, JavaScript, and modern UI design. I have completed a 3-month frontend development internship and actively contribute to open source, including earning the Hacktoberfest Superbadge as a Supercontributor. Along with building clean and responsive web interfaces, I also solve programming and DSA problems regularly to strengthen my problem-solving skills and improve my overall development journey.
                    </p>
                    <p className="mb-6 text-[var(--text-color)] leading-relaxed">
                        I'm open to <span className="font-semibold">Job</span> opportunities
                        where I can contribute, learn and grow. If you have a good opportunity
                        that matches my skills and experience then don't hesitate to
                        <Link to="contact" smooth="true" duration={500}>
                            <span className="font-semibold cursor-pointer"> contact</span> me.
                        </Link>
                    </p>

                    <Button text="contact" width="50" />

                </div>

                {/* Right Section */}
                <div style={{ fontFamily: "var(--font-body)" }}>
                    <h2 className="text-2xl font-bold mb-6 text-[var(--text-color)]">My Skills</h2>
                    <div className="flex flex-wrap gap-6 xl:gap-3">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 px-4 py-2 rounded-md text-gray-800 font-medium shadow-sm hover:shadow-md transition"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
