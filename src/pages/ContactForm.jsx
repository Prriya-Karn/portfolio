import React, { Fragment } from "react";
import Button from "../Component/Button";
import Heading from "../Component/Heading";

const ContactForm = () => {
    return (
        <Fragment>


            <section
                id="contact"
                className="min-h-screen flex flex-col py-20 items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] bg-gray-100 px-4"
            >

                <Heading text="contact me" py={10} desc="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible" />

                <div className="bg-[var(--bg-color)] shadow-2xl rounded-lg w-full max-w-[480px] sm:max-w-[610px] lg:max-w-2xl xl:max-w-3xl p-10">
                    <div className='flex flex-col justify-center items-center gap-5'>


                    </div>
                    <form className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-semibold text-[var(--text-color)] mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-[var(--text-color)] mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-semibold text-[var(--text-color)] mb-2">
                                Message
                            </label>
                            <textarea
                                rows="6"
                                placeholder="Enter Your Message"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-purple-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <Button text="submit" width={40} />
                        </div>
                    </form>
                </div>


            </section>

        </Fragment>
    );
};

export default ContactForm;