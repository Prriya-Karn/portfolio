import React from "react";
import Heading from "../Component/Heading";
import Button from "../Component/Button";

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
        <div className="py-12 bg-[var(--bg-color)] px-6 md:px-20 pb-30">
            <Heading text="ABOUT ME" py={20} desc="Here you will find more information about me, what I do, and my current skills mostly in terms
                    of programming and technology"/>
            <div className="2xl:max-w-7xl max-w-6xl  mx-auto grid xl:grid-cols-2 gap-30">
                {/* Left Section */}
                <div style={{ fontFamily: "var(--font-body)" }}>
                    <h2 className="text-2xl text-[var(--text-color)] font-bold mb-6">Get to know me!</h2>
                    <p className="mb-4 text-[var(--text-color)] leading-relaxed">
                        I'm a <span className="font-semibold">Frontend Focused Web Developer</span>
                        building and managing the Front-end of Websites and Web Applications
                        that leads to the success of the overall product. Check out some of
                        my work in the <span className="font-semibold">Projects</span> section.
                    </p>
                    <p className="mb-4 text-[var(--text-color)] leading-relaxed">
                        I also like sharing content related to the stuff that I have learned
                        over the years in <span className="font-semibold">Web Development</span>
                        so it can help other people of the Dev Community. Feel free to Connect
                        or Follow me on my{" "}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--btn-bg)] font-semibold hover:underline"
                        >
                            Linkedin
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--btn-bg)] font-semibold hover:underline"
                        >
                            Instagram
                        </a>{" "}
                        where I post useful content related to Web Development and Programming.
                    </p>
                    <p className="mb-6 text-[var(--text-color)] leading-relaxed">
                        I'm open to <span className="font-semibold">Job</span> opportunities
                        where I can contribute, learn and grow. If you have a good opportunity
                        that matches my skills and experience then don't hesitate to
                        <span className="font-semibold"> contact</span> me.
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
