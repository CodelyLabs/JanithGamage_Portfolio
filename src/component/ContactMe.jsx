import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
//import aboutImage from "../assets/about-me.jpg"; // Add your image in the assets folder

const ContactMe = () => {
  return (
    <div className="w-full">
      {/* About Me Section */}
      <section className="bg-gray-100 text-gray-800 py-16 px-6 flex flex-col lg:flex-row items-center lg:items-start max-w-6xl mx-auto">
        {/* Left - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            //src={aboutImage}
            alt="About Me"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right - About Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0 px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I'm <b>[Your Name]</b>, a passionate <b>[Your Profession]</b> dedicated to creating impactful projects.
            I specialize in <b>[Your Skills or Expertise]</b>, and I love connecting with people who share similar interests.
            Feel free to reach out if you’d like to collaborate or have any inquiries!
          </p>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="relative">
        <svg
          className="absolute -top-1 w-full h-12 md:h-16 text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="white"
            d="M0,256L80,229.3C160,203,320,149,480,128C640,107,800,117,960,133.3C1120,149,1280,171,1360,181.3L1440,192V320H0Z"
          ></path>
        </svg>
      </div>

      {/* Contact Me Section */}
      <section className="min-h-screen flex items-center justify-center bg-white text-gray-800 px-6 py-16">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
          {/* Header */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-8">
            Feel free to reach out for any inquiries or collaborations.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none peer"
                placeholder=" "
                required
              ></textarea>
              <label className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Or Reach Me Here</h3>
            <div className="flex flex-col space-y-3 text-gray-600">
              <p className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-blue-500" /> your@email.com
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaPhone className="text-blue-500" /> +123 456 7890
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-blue-500" /> Your Location, Country
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex justify-center space-x-6 text-2xl">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
