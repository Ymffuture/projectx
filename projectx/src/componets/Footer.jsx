import React from 'react';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 relative top-[405px]  h-200">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        
        {/* Logo Section */}
        <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold"><img src={Logo} className='w-20' alt='logo'/></h2>
        </div>
        
        {/* Navigation Links */}
        <div className="w-full md:w-1/3 flex flex-wrap justify-center mb-6 md:mb-0">
          <a href="#" className="mx-3">Home</a>
          <a href="#" className="mx-3">About</a>
          <a href="#" className="mx-3">Map</a>
          <a href="#" className="mx-3">Contact</a>
        </div>
        
        {/* Social Media Icons */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <a href="#" className="mx-3">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.25c0-2.52 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.94h2.77l-.44 2.89h-2.33v6.99c4.78-.75 8.44-4.89 8.44-9.88 0-5.5-4.46-9.96-9.96-9.96z"/>
            </svg>
          </a>
          <a href="#" className="mx-3">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M23.5 2.47c-.88.39-1.83.66-2.82.78 1.01-.61 1.79-1.58 2.16-2.73-.95.56-2.01.97-3.13 1.2-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.12 1.13-4.1-.21-7.72-2.17-10.15-5.15-.43.74-.68 1.6-.68 2.52 0 1.74.89 3.28 2.24 4.19-.82-.03-1.58-.25-2.25-.62v.06c0 2.43 1.73 4.46 4.02 4.92-.42.12-.86.18-1.31.18-.32 0-.64-.03-.94-.09.64 1.99 2.5 3.44 4.71 3.48-1.73 1.36-3.91 2.17-6.29 2.17-.41 0-.82-.02-1.22-.07 2.24 1.43 4.91 2.26 7.78 2.26 9.33 0 14.44-7.73 14.44-14.44 0-.22-.01-.43-.02-.64.99-.72 1.85-1.62 2.53-2.64z"/>
            </svg>
          </a>
          <a href="#" className="mx-3">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22.23 0h-20.46c-.97 0-1.77.79-1.77 1.77v20.46c0 .97.79 1.77 1.77 1.77h20.46c.97 0 1.77-.79 1.77-1.77v-20.46c0-.97-.79-1.77-1.77-1.77zm-13.88 20.46h-3.08v-10.23h3.08v10.23zm-1.54-11.63c-.99 0-1.79-.8-1.79-1.79s.8-1.79 1.79-1.79 1.79.8 1.79 1.79-.8 1.79-1.79 1.79zm13.88 11.63h-3.08v-5.54c0-1.32-.47-2.21-1.64-2.21-.9 0-1.44.6-1.68 1.18-.09.22-.11.52-.11.82v5.75h-3.08s.04-9.35 0-10.23h3.08v1.45c.41-.64 1.15-1.55 2.81-1.55 2.05 0 3.58 1.34 3.58 4.23v6.1z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Footer Bottom Text */}
      <div className="container mx-auto text-center mt-6">
        <p className="text-gray-500">© 2024 LocateIQ. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
