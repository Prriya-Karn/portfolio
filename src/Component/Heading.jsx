import React from "react";

export default function Heading({ text, desc, py }) {
    return (
        <section className={`py-${py}`}>
            <div className="max-w-3xl mx-auto  text-center px-4">
                {/* Heading */}
                <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-3xl tracking-wider uppercase md:text-4xl font-semibold text-[var(--text-color)]">
                    {text}
                </h2>

                {/* Purple underline */}
                <div className="w-16 h-1 bg-[var(--btn-bg)] mx-auto mt-2 mb-6 rounded"></div>

                {/* Description */}
                <p style={{ fontFamily: "var(--font-body)" }} className="text-[var(--text-color)] text-base md:text-lg leading-relaxed">
                    {desc}
                </p>
            </div>
        </section>
    );
}
