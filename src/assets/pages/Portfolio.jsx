import React from "react";
import image1 from "../images/portfolio/1.webp"
import image2 from "../images/portfolio/2.webp"
import image3 from "../images/portfolio/3.webp"
import image4 from "../images/portfolio/4.webp"
import image5 from "../images/portfolio/5.webp"
import image6 from "../images/portfolio/6.webp"


export default function Portfolio() {
  return (
    <div className="bg-[#0b0b0b] text-center py-16 px-4">
      {/* Section Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-20">
        Our <span className="text-orange-500">Portfolio</span>
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        Explore our collection of captured moments and creative excellence
      </p>

      {/* Portfolio Gallery Section */}
      <section className="min-h-screen bg-[#0b0b0b] text-white px-6 md:px-12 py-10">
        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white">
            All
          </button>
          <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300">
            Photos
          </button>
          <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300">
            Videos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Row 1 */}
          <div className="overflow-hidden rounded-lg group">
            <img
              src={image1}
              alt="Wedding couple at sunset"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image2}
              alt="Outdoor ceremony aisle"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image3}
              alt="Wedding reception hall"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image4}
              alt="Wedding rings macro"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image5}
              alt="Bride and bridesmaids"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image6}
              alt="Couple dancing"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Row 3 */}
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image4}
              alt="Bouquet close-up"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image2}
              alt="Couple walking in garden"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
              src={image3}
              alt="Wedding cake"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
