"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const buffetInfo =
    "Dinner Buffet Every Saturday | Adult $26 | Seniors $25 | Kid Age x $1.50";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex flex-row items-center justify-between bg-transparent shadow-md p-4 fixed top-0 left-0 w-full z-50 text-white">
      {/* ----------- LAPTOP NAVIGATION BAR ----------- */}
      <div className="hidden md:flex flex-row items-center justify-between w-4/5 mx-auto">
        <div>
          <Image
            src="/horigental_logo.png"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <ul className="flex flex-row gap-8 text-md font-semibold tracking-wide">
          <li className="hover:text-orange-200/80 uppercase">
            <a href="./">Home</a>
          </li>
          <li className="hover:text-orange-200/80 uppercase">
            <a href="#aboutus">About</a>
          </li>
          <li className="hover:text-orange-200/80 uppercase">
            <a href="./Menu">Menu</a>
          </li>
          <li className="hover:text-orange-200/80 uppercase">
            <a href="./Gallery">Gallery</a>
          </li>
          <li className="hover:text-orange-200/80 uppercase">
            <a href="./Contact">Contact</a>
          </li>
        </ul>
        <div>
          <p className="mb-2 max-w-[260px] text-center text-xs font-semibold uppercase tracking-wider text-[#d18a44]">
            {buffetInfo}
          </p>
          <a
            href="https://www.qooway.com/OLO/m-en?NamasteSalmonArm"
            target="_blank"
          >
            <button className="mt-8 md:mt-0 bg-[#d18a44] text-black text-lg tracking-widest font-semibold py-4 px-10 uppercase hover:brightness-110 transition">
              Order Online
            </button>
          </a>
        </div>
      </div>

      {/* ----------- MOBILE NAVIGATION BAR ----------- */}
      <div className="md:hidden flex flex-row items-center justify-between w-full">
        <div>
          <Image
            src="/horigental_logo.png"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <div onClick={toggleMobileMenu} className="cursor-pointer">
          <FontAwesomeIcon icon={faList} className="size-4 m-1" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-black rounded-b-2xl p-8 shadow-lg">
          <ul className="flex flex-col gap-4 text-md font-semibold">
            <li className="hover:text-orange-200/80 uppercase pt-1">
              <a href="./">Home</a>
            </li>
            <li className="hover:text-orange-200/80 uppercase pt-1">
              <a href="#aboutus">About</a>
            </li>
            <li className="hover:text-orange-200/80 uppercase pt-1">
              <a href="./Menu">Menu</a>
            </li>
            <li className="hover:text-orange-200/80 uppercase pt-1">
              <a href="./Gallery">Gallery</a>
            </li>
            <li className="hover:text-orange-200/80 uppercase pt-1">
              <a href="./Contact">Contact</a>
            </li>
          </ul>
          <p className="mt-6 text-sm font-semibold uppercase leading-6 tracking-wider text-[#d18a44]">
            {buffetInfo}
          </p>
          <div className="mt-4">
            <a
              href="https://www.qooway.com/OLO/m-en?NamasteSalmonArm"
              target="_blank"
            >
              <button className="mt-8 md:mt-0 bg-[#d18a44] text-black text-lg tracking-widest font-semibold py-4 px-10 uppercase hover:brightness-110 transition">
                Order Online
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
