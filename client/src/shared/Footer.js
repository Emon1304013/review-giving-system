import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear()
    return (
        <div>
      <footer className={`p-4 shadow-lg md:px-20 md:py-8 border`}>
        <div className="sm:flex sm:items-center sm:justify-between mx-auto">
          <div className="flex justify-center">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src={logo}
              style={{ height: "50px", width: "50px" }}
              className="mr-3 rounded-full"
              alt=" Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
            ROZA'S FLAVOR FUSION
            </span>
          </Link>
          </div>
          <div>
            <ul className="flex flex-wrap items-center justify-center mb-6 text-sm sm:mb-0">
            
              <Link to="/" className="mr-4 md:mr-6 ">
                <button className="cursor-pointer">HOME</button>
              </Link>
              <Link to="/services" className="mr-4 md:mr-6">
                <button className="cursor-pointer">SERVICES</button>
              </Link>

              <Link to='/blog' className="mr-4 md:mr-6">
                <button className=" cursor-pointer">BLOG</button>
              </Link>

          </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-white lg:my-8" />
        <div className="text-center">
        <span className="block text-sm sm:text-center dark:text-white">
          ©{year}
          <span className="hover:underline font-bold font-serif"> ROZA'S FLAVOR FUSION</span>. All Rights
          Reserved.
        </span>
        </div>
      </footer>
    </div>
    );
};

export default Footer;