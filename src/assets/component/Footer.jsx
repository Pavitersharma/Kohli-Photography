import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer class="bg-black text-gray-300 py-12">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* <!-- Logo and Description --> */}
          <div>
            <div class="flex items-center space-x-2 text-yellow-500 text-2xl font-semibold">
              <i class="fas fa-camera"></i>
              <span>kohliphotography</span>
            </div>
            <p class="mt-4 text-sm leading-relaxed text-gray-400">
              Capturing your precious moments with artistry and passion.
              Professional photography and videography services.
            </p>
            <div class="flex space-x-4 mt-4 text-lg">
              <a href="#" class="hover:text-yellow-500">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#" class="hover:text-yellow-500">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="hover:text-yellow-500">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#" class="hover:text-yellow-500">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* <!-- Quick Links --> */}
          <div>
            <h3 class="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <Link to="/" class="hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" class="hover:text-yellow-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="services" class="hover:text-yellow-500">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" class="hover:text-yellow-500">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" class="hover:text-yellow-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Our Services --> */}
          <div>
            <h3 class="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="#" class="hover:text-yellow-500">
                  Wedding Photography
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-500">
                  Pre-Wedding Shoots
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-500">
                  Maternity shoot
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-500">
                  Fashion Photography
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-500">
                  Model Shoot
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-500">
                  Birthday Photography
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Contact Info --> */}
          <div>
            <h3 class="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start space-x-2">
                <i class="fas fa-map-marker-alt text-yellow-500 mt-1"></i>
                <span>Someshwar Talli Bazar, Almora (Uttarakhand)</span>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-phone text-yellow-500"></i>
                <a href="tel:+1234567890" class="hover:text-yellow-500">
                  +91 (976) 970-3480
                </a>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-envelope text-yellow-500"></i>
                <a
                  href="mailto:Kuldeepkohli176@gmail.com"
                  class="hover:text-yellow-500"
                >
                  Kuldeepkohli176@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Bottom Bar --> */}
        <div class="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 <span class="text-white font-semibold">kohliphotography</span>.
          All rights reserved.
        </div>
      </footer>
    </>
  );
}
