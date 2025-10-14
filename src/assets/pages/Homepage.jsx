// ✅ Importing necessary libraries and assets
import React from "react";
import Slider from "react-slick";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

// ✅ Importing images
import slider1 from "../images/1.webp";
import slider2 from "../images/2.webp";
import slider3 from "../images/3.webp";
import wedding from "../images/wedding.webp";
import service1 from "../images/service/1.webp";
import service2 from "../images/service/2.webp";
import service3 from "../images/service/3.webp";
import service4 from "../images/service/4.webp";
import service5 from "../images/service/5.webp";
import service6 from "../images/service/6.webp";
import collage from "../images/collage.webp";

// ✅ Importing CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Main Homepage Component
export default function Homepage() {
  // 🎯 Slider Configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: true,
    fade: true,
  };

  // 🎯 Stats Section Data
  const stats = [
    { number: "500+", label: "Projects Done" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  // 🎯 Services Section Data
  const services = [
    {
      icon: <img src={service1} alt="Wedding Photography" />,
      title: "Wedding Photography",
      description:
        "Capturing the emotions, elegance, and joy of your big day through timeless and artistic wedding portraits.",
    },
    {
      icon: <img src={service2} alt="Video Production" />,
      title: "Maternity shoot",
      description:
        "Capturing the glow of motherhood — timeless moments of love and new beginnings.",
    },
    {
      icon: <img src={service3} alt="Pre-Wedding Shoots" />,
      title: "Pre-Wedding Shoots",
      description:
        "Celebrate your love story with stunning pre-wedding shoots that blend romance, style, and natural beauty.",
    },
    {
      icon: <img src={service4} alt="Fashion Photography" />,
      title: "Fashion Photography",
      description:
        "Showcasing style and confidence through bold, high-end fashion photography designed for brands and portfolios.",
    },
    {
      icon: <img src={service5} alt="Model Shoot" />,
      title: "Model Shoot",
      description:
        "Professional model photoshoots that highlight your best angles, expressions, and individuality for a standout portfolio.",
    },
    {
      icon: <img src={service6} alt="Birthday Photography" />,
      title: "Birthday Photography",
      description:
        "Capturing the laughter, joy, and excitement of your special day with vibrant and lively birthday photography.",
    },
  ];

  return (
    <div>
      {/* ===================== 🏞️ HERO / SLIDER SECTION ===================== */}
      <div className="relative w-full h-[90vh] overflow-hidden ">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <img
              src={slider1}
              alt="Kohli Photography Slide 1"
              className="w-full h-[100vh] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Capture Your Moments
              </h1>
              <p className="text-lg md:text-2xl mb-6">
                Kohli Photography — Where Every Shot Tells a Story
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                Book a Shoot
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <img
              src={slider2}
              alt="Kohli Photography Slide 2"
              className="w-full h-[140vh] object-cover"
            />
          </div>

          {/* Slide 3 */}
          <div>
            <img
              src={slider3}
              alt="Kohli Photography Slide 3"
              className="w-full h-[150vh] object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* ===================== 📊 STATS SECTION ===================== */}
      {/* <div className="bg-[#111] text-center py-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-15 md:gap-20">
          {stats.map((item, index) => (
            <div key={index} className="text-white">
              <h2 className="text-4xl font-bold text-orange-500">
                {item.number}
              </h2>
              <p className="text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* ===================== 🧡 ABOUT SECTION ===================== */}
      <div className="bg-[#0b0b0b] text-center py-16 px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          About <span className="text-orange-500">Kohli Photography</span>
        </h2>
        <p className="text-gray-400 max-w-5xl mx-auto mb-12 leading-normal">
          At Kohli Photography, we believe that every moment tells a story — your story. As one of the best wedding photographers in Delhi, our passion lies in capturing the real emotions, timeless expressions, and unforgettable memories that make every occasion truly special. With years of experience and a deep love for visual storytelling, our team combines creativity, professionalism, and advanced photography techniques to deliver results that go beyond just pictures — we create art that speaks to your heart. Whether it’s a grand wedding celebration, an elegant pre-wedding shoot, a family function, or any other special event, we make sure every frame reflects the essence of your joy and connection. From the smallest candid smile to the most cinematic wedding moments, our goal is to preserve your memories with perfection and authenticity. Based in New Delhi, Kohli Photography proudly serves clients all across India. Our expertise in candid wedding photography and cinematic wedding videography has earned us the trust of countless happy couples and families. We’ve had the honor of capturing hundreds of beautiful stories — each one unique, emotional, and timeless. At Kohli Photography, your happiness is our true inspiration. We work closely with every client to understand their vision, ensuring a personalized, smooth, and stress-free experience from booking to delivery. Seeing your smiles when you relive your special day through our lens is what drives us to keep raising the bar with every project.
        </p>
      </div>

      {/* ===================== 💍 FULL-WIDTH IMAGE ===================== */}
      <div className="w-full h-auto">
        <img
          src={wedding}
          alt="Wedding"
          className="w-full h-auto object-cover md:h-[80vh] lg:h-[100vh]"
        />
      </div>

      {/* ===================== 🎯 VISION SECTION ===================== */}
      <div className="bg-[#0b0b0b] text-center py-16 px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our <span className="text-orange-500">Vision</span>
        </h2>
        <p className="text-gray-400 max-w-5xl mx-auto mb-12 leading-normal">
          At Kohli Photography, our vision is to create timeless stories through our lens — stories filled with emotion, beauty, and authenticity. We believe photography is not just about capturing faces, but about preserving feelings, moments, and memories that speak forever. Our goal is to be recognized as one of the most trusted and creative photography brands in India, known for our cinematic storytelling and personalized experience. We aim to blend art and technology seamlessly — delivering photographs and films that not only look stunning but also touch hearts. Every couple, every family, and every celebration has its own rhythm, its own soul. Our vision is to bring that essence to life — crafting visuals that you’ll cherish for a lifetime.
        </p>
      </div>

      {/* ===================== 📷 SERVICES SECTION ===================== */}
      <div className="bg-[#0b0b0b] text-center py-16 px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our <span className="text-orange-500">Services</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We offer comprehensive photography and production services tailored to
          your unique needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#151515] p-8 rounded-xl border border-transparent hover:border-orange-500 hover:shadow-[0_0_25px_rgba(255,165,0,0.3)] transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-orange-500">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== 🖼️ COLLAGE IMAGE ===================== */}
      <div className="w-full h-auto">
        <img
          src={collage}
          alt="collage"
          className="w-full h-auto object-cover md:h-[90vh] lg:h-[100vh]"
        />
      </div>

      {/* ===================== 🙌 WHY CHOOSE US SECTION ===================== */}
      <section className="bg-[#0b0b0b] text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Why <span className="text-orange-500">Choose Us</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          At Kohli Photography, we go beyond just taking pictures — we create
          timeless stories filled with emotions, beauty, and perfection.
        </p>

        {/* Q&A Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              q: "📸 What makes our photography unique?",
              a: "Every shot is crafted with artistic vision and emotional depth — ensuring your photos reflect real moments and pure emotions.",
            },
            {
              q: "🎥 Do we provide both photo and video coverage?",
              a: "Yes, our team specializes in both photography and cinematic videography to cover every moment from start to finish.",
            },
            {
              q: "🌍 Do we travel for shoots?",
              a: "Absolutely! Whether it's a destination wedding or outdoor fashion shoot, we travel anywhere to make your vision a reality.",
            },
            {
              q: "💡 How do we ensure quality?",
              a: "We use premium equipment, expert lighting, and professional editing to deliver flawless and high-resolution results every time.",
            },
            {
              q: "🕓 How soon do clients receive their photos/videos?",
              a: "We value your excitement — our efficient workflow ensures timely delivery without compromising on editing quality.",
            },
            {
              q: "🤝 Why trust Kohli Photography?",
              a: "Our reputation is built on creativity, professionalism, and a deep commitment to making every client’s experience truly memorable.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#151515] p-8 rounded-xl border border-transparent hover:border-orange-500 hover:shadow-[0_0_25px_rgba(255,165,0,0.3)] transition-all duration-300 text-left"
            >
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                {item.q}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== 📩 CONTACT / ENQUIRY SECTION ===================== */}
      <section className="bg-[#0b0b0b] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-3">
              Let’s Create{" "}
              <span className="text-orange-500">Something Amazing</span>
            </h2>
            <p className="text-gray-400 mb-10">
              Get in touch to discuss your next project
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-[#1a1a1a] p-4 rounded-full text-orange-500">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email Us</h4>
                  <p className="text-gray-400">info@kohliphotography.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="bg-[#1a1a1a] p-4 rounded-full text-orange-500">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Call Us</h4>
                  <p>
                    <a
                      href="tel:916399230526"
                      className="text-gray-400 cursor-pointer"
                    >
                      +91 (639) 923-0526
                      
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+919769703480"
                      className="text-gray-400 cursor-pointer"
                    >
                      +91 (976) 970-3480
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#111111] border border-[#222222] rounded-md px-4 py-3 text-gray-200 focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#111111] border border-[#222222] rounded-md px-4 py-3 text-gray-200 focus:outline-none focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-[#111111] border border-[#222222] rounded-md px-4 py-3 text-gray-200 focus:outline-none focus:border-orange-500"
              />
              <textarea
                rows="4"
                placeholder="Tell us about your event"
                className="w-full bg-[#111111] border border-[#222222] rounded-md px-4 py-3 text-gray-200 focus:outline-none focus:border-orange-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-black font-semibold py-3 rounded-md shadow-[0_0_25px_rgba(255,165,0,0.4)] hover:opacity-90 transition-all duration-300"
              >
                SUBMIT ENQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>
        <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
         {/* WhatsApp Button */}
         <a
           href="https://wa.me/916399230526"
           target="_blank"
           rel="noopener noreferrer"
           className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
           title="Chat on WhatsApp"
         >
           <FaWhatsapp className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
         </a>
       
         {/* Call Button */}
         <a
           href="tel:+916399230526"
           className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
           title="Call Us"
         >
           <FaPhone className="text-black w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
         </a>
       </div>
    </div>
  );
}
