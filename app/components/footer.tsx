import { faClock, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-between border-b border-[#1f1910]">
        <div className="flex items-center space-x-3 max-w-xs">
          <FontAwesomeIcon icon={faLocationDot} className="size-8 text-[#d17e2a]" />
          <div className="text-[#f9f9f9] text-sm leading-6">
            <p>Namaste Authentic Indian Cuisine</p>
            <p>200 Trans Canada Highway SW
            Salmon Arm, B.C. V1E 4H7</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 max-w-xs">
          <FontAwesomeIcon icon={faPhone} className="size-8 text-[#d17e2a]" />
          <div className="text-[#f9f9f9] text-sm leading-6">
            <a href="tel:+17784895044">+1 778-489-5044</a>
          </div>
        </div>
        {/* <div className="flex items-center space-x-3 max-w-xs">
          <FontAwesomeIcon icon={faMessage} className="size-8 text-[#d17e2a]" />
          <div className="text-[#f9f9f9] text-sm leading-6">
            <p>Reservation@sovy.com</p>
            <p>Books@sovy.com</p>
          </div>
        </div> */}
        <div className="flex items-center space-x-3 max-w-xs">
            <FontAwesomeIcon icon={faClock} className="size-8 text-[#d17e2a]" />
          <div className="text-[#f9f9f9] text-sm leading-6">
            <p>Open Everyday 11:00 am to 9:00 pm</p>
            {/* <p>Closed on Tuesdays</p> */}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <Image
          src="/horigental_logo.png"
            alt="Namaste Authentic Indian Cuisine Logo"
            width={200}
            height={200}
            className="mx-auto mb-6"
        />
        <nav className="flex justify-center space-x-8 mb-6 text-[#d17e2a] text-xs tracking-widest font-semibold">
          <a className="hover:underline" href="#">
            FACEBOOK
          </a>
          <a className="hover:underline" href="#">
            TWITTER
          </a>
          <a className="hover:underline" href="#">
            INSTAGRAM
          </a>
          <a className="hover:underline" href="#">
            TRIP ADVISOR
          </a>
        </nav>
        <p className="text-xs text-[#f9f9f9]">
           © 2025 Namaste Authentic Indian Cuisine.&nbsp;All rights reserved.&nbsp;
  Managed by <a href="https://www.manndigital.ca" target="_blank" rel="noopener">Mann.Digital</a>
          <a className="text-[#130f0c] hover:text-amber-100" href="https://www.riturajportfolio.live/">
            <br />Developed by Rituraj Goswami
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
