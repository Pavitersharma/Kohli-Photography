import React from 'react'

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
        Capturing your precious moments with artistry and passion. Professional
        photography and videography services.
      </p>
      <div class="flex space-x-4 mt-4 text-lg">
        <a href="#" class="hover:text-yellow-500"><i class="fab fa-facebook"></i></a>
        <a href="#" class="hover:text-yellow-500"><i class="fab fa-instagram"></i></a>
        <a href="#" class="hover:text-yellow-500"><i class="fab fa-youtube"></i></a>
        <a href="#" class="hover:text-yellow-500"><i class="fab fa-twitter"></i></a>
      </div>
    </div>

    {/* <!-- Quick Links --> */}
    <div>
      <h3 class="text-white text-lg font-semibold mb-4">Quick Links</h3>
      <ul class="space-y-2 text-gray-400">
        <li><a href="#" class="hover:text-yellow-500">Home</a></li>
        <li><a href="#" class="hover:text-yellow-500">About Us</a></li>
        <li><a href="#" class="hover:text-yellow-500">Services</a></li>
        <li><a href="#" class="hover:text-yellow-500">Portfolio</a></li>
        <li><a href="#" class="hover:text-yellow-500">Contact</a></li>
      </ul>
    </div>

    {/* <!-- Our Services --> */}
    <div>
      <h3 class="text-white text-lg font-semibold mb-4">Our Services</h3>
      <ul class="space-y-2 text-gray-400">
        <li><a href="#" class="hover:text-yellow-500">Wedding Photography</a></li>
        <li><a href="#" class="hover:text-yellow-500">Pre-Wedding Shoots</a></li>
        <li><a href="#" class="hover:text-yellow-500">Candid Photography</a></li>
        <li><a href="#" class="hover:text-yellow-500">Cinematic Videos</a></li>
        <li><a href="#" class="hover:text-yellow-500">Event Coverage</a></li>
        <li><a href="#" class="hover:text-yellow-500">Portrait Sessions</a></li>
      </ul>
    </div>

    {/* <!-- Contact Info --> */}
    <div>
      <h3 class="text-white text-lg font-semibold mb-4">Contact Us</h3>
      <ul class="space-y-3 text-gray-400 text-sm">
        <li class="flex items-start space-x-2">
          <i class="fas fa-map-marker-alt text-yellow-500 mt-1"></i>
          <span>123 Photography Lane, Studio City, CA 90001</span>
        </li>
        <li class="flex items-center space-x-2">
          <i class="fas fa-phone text-yellow-500"></i>
          <a href="tel:+1234567890" class="hover:text-yellow-500">+1 (234) 567-890</a>
        </li>
        <li class="flex items-center space-x-2">
          <i class="fas fa-envelope text-yellow-500"></i>
          <a href="mailto:info@kohliphotography.com" class="hover:text-yellow-500">info@kohliphotography.com</a>
        </li>
      </ul>
    </div>
  </div>

  {/* <!-- Bottom Bar --> */}
  <div class="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
    © 2025 <span class="text-white font-semibold">kohliphotography</span>. All rights reserved. 
  </div>
</footer>


    </>
  )
}
