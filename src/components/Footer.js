import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Abarq Digital</h2>
          <p className="mb-4">Creating solutions for a better world. We are dedicated to providing excellent services to our clients.</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100085749714163&mibextid=ZbWKwL" aria-label="Facebook" className="text-gray-400 hover:text-green-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0h-21.35C.597 0 0 .6 0 1.337v21.326C0 23.4.597 24 1.325 24h11.495v-9.293H9.928v-3.622h2.892V8.413c0-2.856 1.712-4.413 4.327-4.413 1.24 0 2.515.193 2.515.193v2.784h-1.416c-1.396 0-1.826.867-1.826 1.754v2.108h3.108l-.496 3.622h-2.612V24h5.117c.728 0 1.325-.6 1.325-1.337V1.337C24 .6 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a href="#home" aria-label="Twitter" className="text-gray-400 hover:text-green-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557a9.81 9.81 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.2a9.864 9.864 0 0 1-3.127 1.184A4.92 4.92 0 0 0 16.847 2a4.927 4.927 0 0 0-4.92 4.918c0 .385.044.76.127 1.121A13.983 13.983 0 0 1 1.675 3.149a4.918 4.918 0 0 0-.665 2.476 4.92 4.92 0 0 0 2.188 4.1 4.897 4.897 0 0 1-2.23-.616v.06a4.92 4.92 0 0 0 3.946 4.829 4.937 4.937 0 0 1-2.224.085 4.925 4.925 0 0 0 4.601 3.42A9.875 9.875 0 0 1 0 21.531a13.941 13.941 0 0 0 7.548 2.211c9.056 0 14.008-7.507 14.008-14.01 0-.213-.004-.426-.013-.636A10.02 10.02 0 0 0 24 4.557z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="#about" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#service" className="hover:underline">Services</a></li>
            <li className="mb-2"><a href="#blog" className="hover:underline">Blog</a></li>
            <li className="mb-2"><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="mb-2">Gruar phase 1 brgy sto. dominggo</p>
          <p className="mb-2">Cainta, Rizal</p>
          <p className="mb-2">Email: abarquezalvin10@gmail.com</p>
          <p>Phone: +639632066988</p>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-10">
        <p>&copy; {new Date().getFullYear()} Abarq Digital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
