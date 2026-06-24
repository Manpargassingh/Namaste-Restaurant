// components/LambSpecialtiesSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface LambSpecialty {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const lambLeftColumn: LambSpecialty[] = [
  {
    title: "Goat Curry",
    price: "$19.50",
    description: "Goat cooked in an onion & tomato sauce with authentic spices.",
    imageSrc: "/images/goat-curry.jpg", // Replace with your image URL
    imageAlt: "Goat Curry",
  },
  {
    title: "Lamb Curry",
    price: "$18.95",
    description: "Lamb cooked in an onion & tomato sauce with authentic spices.",
    imageSrc: "/images/lamb-curry.jpg", // Replace with your image URL
    imageAlt: "Lamb Curry",
  },
  {
    title: "Lamb Vindaloo",
    price: "$18.95",
    description: "Boneless lamb simmered in a tangy curry sauce with potatoes & rare spices. Our famous, fiery Goan specialty.",
    imageSrc: "/images/lamb-vindaloo.jpg", // Replace with your image URL
    imageAlt: "Lamb Vindaloo",
  },
  {
    title: "Palak Gosh (Lamb)",
    price: "$18.95",
    description: "Boneless lamb cooked with blanched spinach & Indian spices in an onion & tomato sauce.",
    imageSrc: "/images/palak-gosh.jpeg", // Replace with your image URL
    imageAlt: "Palak Gosh",
  },
  {
    title: "Lamb Rogan Josh",
    price: "$18.95",
    description: "Boneless lamb cooked in onion, ginger & garlic. A signature recipe of Kashmiri cuisine.",
    imageSrc: "/images/lamb-rogan-josh.jpg", // Replace with your image URL
    imageAlt: "Lamb Rogan Josh",
  },
  {
    title: "Lamb Do Pyaza",
    price: "$18.95",
    description: "Boneless meat cooked with onion, ginger & garlic gravy, royal spices and sautéed diced onion and cilantro.",
    imageSrc: "/images/lamb-do-pyaza.jpeg", // Replace with your image URL
    imageAlt: "Lamb Do Pyaza",
  },
  {
    title: "Lamb Masala",
    price: "$18.95",
    description: "Boneless pieces of lamb simmered in thick onion gravy.",
    imageSrc: "/images/lamb-masala.jpg", // Replace with your image URL
    imageAlt: "Lamb Masala",
  },
];

const lambRightColumn: LambSpecialty[] = [
  {
    title: "Lamb Coconut Curry",
    price: "$18.95",
    description: "Boneless lamb cooked in a coconut cream sauce with Indian spices.",
    imageSrc: "/images/lamb-coconut-curry.jpeg", // Replace with your image URL
    imageAlt: "Lamb Coconut Curry",
  },
  {
    title: "Lamb Shahi Korma",
    price: "$18.95",
    description: "Boneless lamb cooked delicately in a seasoned sauce made with cashews, onions, tomatoes & cream.",
    imageSrc: "/images/lamb-shahi-korma.jpeg", // Replace with your image URL
    imageAlt: "Lamb Shahi Korma",
  },
  {
    title: "Lamb Mango Curry",
    price: "$18.95",
    description: "Lamb cooked in mango sauce & herbs with broccoli & mild spices.",
    imageSrc: "/images/lamb-mango-curry.jpeg", // Replace with your image URL
    imageAlt: "Lamb Mango Curry",
  },
  {
    title: "Green Lamb Curry",
    price: "$18.95",
    description: "Lamb cooked with mint, spinach, green peppers, cilantro & herbs.",
    imageSrc: "/images/green-lamb-curry.jpeg", // Replace with your image URL
    imageAlt: "Green Lamb Curry",
  },
  {
    title: "Lamb Madras Curry",
    price: "$18.95",
    description: "Lamb pieces cooked in onion, tomato, coconut sauce and spices. Tempered with mustard seeds.",
    imageSrc: "/images/lamb-madras-curry.jpg", // Replace with your image URL
    imageAlt: "Lamb Madras Curry",
  },
];

const LambSpecialtiesSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Lamb Specialties</h1>
      <div className="flex items-center gap-3 mb-14">
        <div className="border-t border-[#d99e5f] w-24"></div>
        <span className="text-[#d99e5f] text-2xl">
          <FontAwesomeIcon icon={faBowlFood} />
        </span>
        <div className="border-t border-[#d99e5f] w-24"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
        {/* Left Column */}
        <div className="space-y-10">
          {lambLeftColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
            <div key={title} className="flex items-start space-x-4">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  priority={false}
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <span className="font-semibold text-white">{price}</span>
                </div>
                <p className="text-[#d99e5f] text-xs mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          {lambRightColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
            <div key={title} className="flex items-start space-x-4">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  priority={false}
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <span className="font-semibold text-white">{price}</span>
                </div>
                <p className="text-[#d99e5f] text-xs mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LambSpecialtiesSection;
