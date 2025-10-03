import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex bg-white sticky shadow-md top-0 z-50 items-center justify-between px-10 py-4 text-[var(--text-color)]">
            {/* Left Section */}
            <div className="flex items-center gap-3">
                <img
                    src="../../public/images/project.jpg"
                    alt="profile"
                    className="w-12 h-12"
                />
            </div>

            {/* Desktop Menu */}
            <div
                style={{ fontFamily: "var(--font-heading)" }}
                className="hidden md:flex gap-12 items-center"
            >
                <a href="#home" className="font-semibold uppercase text-black tracking-wider">
                    HOME
                </a>
                <a href="#about" className="font-semibold uppercase text-black tracking-wider">
                    ABOUT
                </a>
                <a href="#projects" className="font-semibold uppercase text-black tracking-wider">
                    Projects
                </a>
                <a href="#contact" className="uppercase font-semibold text-black tracking-wider">
                    Contact
                </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>


            {/* Mobile Sidebar (Right Side) */}
            <div
                className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg transform
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    transition-transform duration-300 ease-in-out md:hidden z-50`}
            >
                <div className="flex justify-end px-4 py-4">
                    <button onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div
                    style={{ fontFamily: "var(--font-heading)" }}
                    className="flex items-center flex-col gap-6 px-6 py-8"
                >
                    <a href="#home" className="font-semibold uppercase text-black tracking-wider" onClick={() => setIsOpen(false)}>
                        HOME
                    </a>
                    <a href="#about" className="font-semibold uppercase text-black tracking-wider" onClick={() => setIsOpen(false)}>
                        ABOUT
                    </a>
                    <a href="#projects" className="font-semibold uppercase text-black tracking-wider" onClick={() => setIsOpen(false)}>
                        Projects
                    </a>
                    <a href="#contact" className="uppercase font-semibold text-black tracking-wider" onClick={() => setIsOpen(false)}>
                        Contact
                    </a>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
