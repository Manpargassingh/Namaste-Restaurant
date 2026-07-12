import React from "react";
import UpdatedMenu from "./updatedMenu";

const Menu = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#d18a44] text-center mb-8">
          Order Your Favorite Dishes <br />
          <a href="https://www.qooway.com/OLO/m-en?NamasteSalmonArm" target="_blank">
          <button className="mt-8 md:mt-0 bg-[#d18a44] text-black text-lg tracking-widest font-semibold py-4 px-10 uppercase hover:brightness-110 transition">
            Order Online
          </button>
          </a>
        </h1>
        
      </div>
      <UpdatedMenu />

    </div>
  );
};

export default Menu;
