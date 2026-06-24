// components/ChickenSpecialtiesSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface ChickenSpecialty {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const chickenLeftColumn: ChickenSpecialty[] = [
  {
    title: "Chicken Tikka Masala (CTM)",
    price: "$17.95",
    description: "Boneless pieces of chicken breast barbequed & simmered in a thick gravy with onions, fresh tomatoes & herbs finished with fresh ginger & cilantro.",
    imageSrc: "/images/Chicken Tikka Masala.jpg", // Replace with your image URL
    imageAlt: "Chicken Tikka Masala",
  },
  {
    title: "Butter Chicken",
    price: "$17.95",
    description: "Boneless chicken breast marinated in ginger & garlic cooked in a special butter tomato sauce.",
    imageSrc: "/images/Butter Chicken.jpg", // Replace with your image URL
    imageAlt: "Butter Chicken",
  },
  {
    title: "Kadai Chicken",
    price: "$17.95",
    description: "Boneless pieces of chicken breast cooked with green chillies, tomatoes, green peppers, onions & ginger tempered with coriander seeds.",
    imageSrc: "/images/kadai-chicken.jpeg", // Replace with your image URL
    imageAlt: "Kadai Chicken",
  },
  {
    title: "Curry Chicken",
    price: "$17.95",
    description: "Boneless chicken breast pieces cooked in onion tomato sauce with ground spices.",
    imageSrc: "/images/curry-chicken.jpg", // Replace with your image URL
    imageAlt: "Curry Chicken",
  },
  {
    title: "Palak Chicken",
    price: "$17.95",
    description: "Boneless chicken breast cooked with chopped spinach and freshly ground spices.",
    imageSrc: "/images/palak-chicken.jpg", // Replace with your image URL
    imageAlt: "Palak Chicken",
  },
  {
    title: "Chilli Chicken",
    price: "$17.95",
    description: "Chicken breast cooked with bell peppers, onion & exotic Indian spices.",
    imageSrc: "/images/Chilly Chicken.jpg", // Replace with your image URL
    imageAlt: "Chilli Chicken",
  },
  {
    title: "Chicken Saffron Curry",
    price: "$17.95",
    description: "Boneless pieces of chicken breast delicately cooked in a creamy saffron sauce with onion & exotic spices.",
    imageSrc: "/images/chicken-saffron-curry.jpeg", // Replace with your image URL
    imageAlt: "Chicken Saffron Curry",
  },
  {
    title: "Chicken Royal Curry",
    price: "$17.95",
    description: "Boneless pieces of chicken breast delicately cooked in a tomato onion sauce with touch of korma sauce and exotic spices.",
    imageSrc: "/images/chicken-royal-curry.jpeg", // Replace with your image URL
    imageAlt: "Chicken Royal Curry",
  },
];

const chickenRightColumn: ChickenSpecialty[] = [
  {
    title: "Chicken Vindaloo",
    price: "$17.95",
    description: "Boneless pieces of chicken breast cooked in a tangy sauce with potatoes, vinegar a speciality of Goa.",
    imageSrc: "/images/chicken-vindaloo.jpeg", // Replace with your image URL
    imageAlt: "Chicken Vindaloo",
  },
  {
    title: "Chicken Coconut Curry",
    price: "$17.95",
    description: "Boneless chicken breast cooked in a coconut cream & royal spices.",
    imageSrc: "/images/Coconut Chicken Curry.jpg", // Replace with your image URL
    imageAlt: "Chicken Coconut Curry",
  },
  {
    title: "Chicken Shahi Korma",
    price: "$17.95",
    description: "Boneless pieces of chicken breast delicately cooked in a seasoned cream sauce with onions and ground cashew nuts.",
    imageSrc: "/images/chicken-shahi-korma.jpg", // Replace with your image URL
    imageAlt: "Chicken Shahi Korma",
  },
  {
    title: "Chicken Mango Curry",
    price: "$17.95",
    description: "Cooked in mango sauce and herbs with broccoli and mild spice.",
    imageSrc: "/images/Chicken-Mango-Curry.jpg", // Replace with your image URL
    imageAlt: "Chicken Mango Curry",
  },
  {
    title: "Green Chicken Curry",
    price: "$17.95",
    description: "Cooked with cashew nut, mint, spinach, cilantro, green peppers & herbs.",
    imageSrc: "/images/green-chicken-curry.jpeg", // Replace with your image URL
    imageAlt: "Green Chicken Curry",
  },
  {
    title: "Chicken Madras Curry",
    price: "$17.95",
    description: "Chicken pieces cooked in onion, tomato, coconut sauce and spices. Tempered with mustard seeds.",
    imageSrc: "/images/chicken-madras-curry.jpg", // Replace with your image URL
    imageAlt: "Chicken Madras Curry",
  },
  {
    title: "Chicken Do Pyaza",
    price: "$17.95",
    description: "Boneless meat cooked with onion, ginger & garlic gravy, royal spices and sautéed diced onion and cilantro.",
    imageSrc: "/images/chicken-do-pyaza.jpeg", // Replace with your image URL
    imageAlt: "Chicken Do Pyaza",
  },
  {
    title: "Chicken Black Pepper",
    price: "$17.95",
    description: "Boneless pieces of chicken breast delicately cooked in a creamy sauce with onion and exotic spices.",
    imageSrc: "/images/Chicken Black Pepper.jpg", // Replace with your image URL
    imageAlt: "Chicken Black Pepper",
  },
];

const ChickenSpecialtiesSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Chicken Specialties</h1>
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
          {chickenLeftColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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
          {chickenRightColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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

export default ChickenSpecialtiesSection;
