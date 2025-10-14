import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    // Send form using EmailJS
    emailjs.sendForm(
      'service_rg5iu95',     // Replace with your EmailJS Service ID
      'template_fbsan99',    // Replace with your EmailJS Template ID
      formRef.current,
      'YOUR_PUBLIC_KEY'      // Replace with your EmailJS Public Key
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, (error) => {
      console.error(error.text);
      alert('Failed to send message. Try again.');
    });
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center p-6">
      <div className="max-w-6xl w-full mt-30">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create <span className="text-yellow-500">Something Amazing</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Get in touch to discuss your next project. We'd love to hear from you and bring your vision to life.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="bg-[#0e0e0e] border border-gray-700 rounded-2xl p-6 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 rounded-full p-3">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-400"><a
                  href="mailto:Kuldeepkohli176@gmail.com"
                  class="hover:text-yellow-500"
                >
                  Kuldeepkohli176@gmail.com
                </a></p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#0e0e0e] border border-gray-700 rounded-2xl p-6 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 rounded-full p-3">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Call Us</h3>
                 <p>
                    <a
                      href="tel:916399230526"
                      className="text-gray-400 cursor-pointer hover:text-yellow-500"
                    >
                      +91 (639) 923-0526
                      
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#0e0e0e] border border-gray-700 rounded-2xl p-6 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 rounded-full p-3">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-400">Someshwar Talli Bazar, Almora</p>
                  <p className="text-gray-400">(Uttarakhand) | 263637</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-[#0e0e0e] bg-opacity-50 border border-yellow-500 rounded-2xl p-8 shadow-xl shadow-yellow-500/10 space-y-6"
          >
            {/* Name Input */}
            <div>
              <label className="block text-white font-medium mb-2">
                Name <span className="text-yellow-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-white font-medium mb-2">
                Email <span className="text-yellow-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-white font-medium mb-2">Phone <span className="text-yellow-500">*</span></label>
             
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" Your number"
                required
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-white font-medium mb-2">
                Message <span className="text-yellow-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your event, vision, and any specific requirements..."
                rows="4"
                required
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
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
