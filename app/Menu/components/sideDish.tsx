// components/SideDishSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface SideDish {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const sideDishes: SideDish[] = [
  {
    title: "Jeera Rice",
    price: "$4.95",
    description: "Basmati rice tempered with butter & cumin seeds.",
    imageSrc: "/images/Zeera Rice.jpg", // Replace with your image URL
    imageAlt: "Jeera Rice",
  },
  {
    title: "Saffron Rice",
    price: "$4.95",
    description: "Basmati rice cooked with fried onions & saffron.",
    imageSrc: "/images/Saffron Rice.jpg", // Replace with your image URL
    imageAlt: "Saffron Rice",
  },
  {
    title: "Steamed Rice (small/full)",
    price: "$3.0 / $4.0",
    description: "Fluffy steamed basmati rice.",
    imageSrc: "/rice-plate.png", // Replace with your image URL
    imageAlt: "Steamed Rice",
  },
  {
    title: "Peas Pulao",
    price: "$4.95",
    description: "Basmati rice tempered with fried onions & green peas.",
    imageSrc: "/images/Peas Pulao.jpg", // Replace with your image URL
    imageAlt: "Peas Pulao",
  },
  {
    title: "Coconut Rice",
    price: "$4.95",
    description: "Basmati rice cooked with coconut milk & crushed coconut with curry leaves.",
    imageSrc: "/images/Coconut Rice.jpg", // Replace with your image URL
    imageAlt: "Coconut Rice",
  },
];

const SideDishSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Side Dish</h1>
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
          {sideDishes.map(({ title, price, description, imageSrc, imageAlt }) => (
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

export default SideDishSection;
