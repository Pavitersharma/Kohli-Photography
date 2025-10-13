import React from 'react'
import owner from "../images/about/owner.webp"
import { FaCamera, FaHeart, FaMedal, FaUsers } from "react-icons/fa";

export default function About() {
  const missions = [
    {
      icon: <FaCamera className="text-orange-500 text-3xl" />,
      title: "Authenticity",
      text: "Capturing genuine moments and real emotions",
    },
    {
      icon: <FaHeart className="text-orange-500 text-3xl" />,
      title: "Passion",
      text: "Every wedding is a unique love story to tell",
    },
    {
      icon: <FaMedal className="text-orange-500 text-3xl" />,
      title: "Excellence",
      text: "Delivering exceptional quality in every frame",
    },
    {
      icon: <FaUsers className="text-orange-500 text-3xl" />,
      title: "Connection",
      text: "Building lasting relationships with our couples",
    },
  ];
  return (
    <>
<section className="bg-[#0e0e0e] text-gray-300 py-16 px-6 md:px-12 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-30">
        
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative border-2 border-yellow-500 rounded-xl p-2">
            <img
              src={owner}
              alt="owner"
              className="rounded-xl object-cover w-full h-full shadow-lg"
            />
            {/* Decorative corner lines */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-yellow-500 rounded-tl-xl"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-yellow-500 rounded-bl-xl"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-yellow-500 rounded-tr-xl"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-yellow-500 rounded-br-xl"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-yellow-500 font-semibold uppercase tracking-wide text-sm mb-2">
            Founder & Lead Photographer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kuldeep <span className="text-yellow-500">Kohli</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            At Kohli Photography, we believe that every moment holds a story worth remembering.
With a passion for capturing raw emotions and timeless beauty, we turn your precious occasions into lifelong memories.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            From weddings and maternity shoots to family portraits and celebrations, our lens focuses on the love, laughter, and joy that make your story unique.Each photograph we take is crafted with creativity, care, and heart — because for us, photography isn’t just about pictures; it’s about preserving feelings that last forever.
          </p>

          <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-300 mb-8">
            "Photography is not just about taking pictures; it's about preserving emotions,
            telling stories, and creating art that lasts for generations."
          </blockquote>

          {/* Stats Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="border border-yellow-500 rounded-lg p-6 text-center bg-black/50">
              <h3 className="text-3xl font-bold text-yellow-500">200+</h3>
              <p className="text-sm text-gray-300">Weddings Captured</p>
            </div>
            <div className="border border-yellow-500 rounded-lg p-6 text-center bg-black/50">
              <h3 className="text-3xl font-bold text-yellow-500">3+</h3>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-orange-500">Mission</span>
        </h2>
        <p className="text-gray-400 mb-12">
          To create timeless visual narratives that celebrate love and human connection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:bg-zinc-800 transition duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        
    </>
  )
}
