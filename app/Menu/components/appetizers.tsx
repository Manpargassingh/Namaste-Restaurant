import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface Appetizer {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const appetizersLeftColumn: Appetizer[] = [
  {
    title: "Vegetable Samosas",
    price: "$6.95",
    description: "Two savoury triangular pastries filled with spiced potatoes & peas. Served with tamarind chutney.",
    imageSrc: "/images/Vegitable-Samosa.jpg",
    imageAlt: "Vegetable Samosas",
  },
  {
    title: "Aloo Tikki",
    price: "$7.95",
    description: "Three crispy spiced potato patties served with tamarind chutneys. It is a popular street food in India.",
    imageSrc: "/images/Aloo Tikki.jpg",
    imageAlt: "Aloo Tikki",
  },
  {
    title: "Vegetable Pakoras",
    price: "$9.95",
    description: "Deep fried mixed vegetable fritters.",
    imageSrc: "/images/Vegitable Pakora.jpg",
    imageAlt: "Vegetable Pakoras",
  },
  {
    title: "Paneer Fingers",
    price: "$11.95",
    description: "Deep fried Indian cheese fritters.",
    imageSrc: "/images/Paneer Finger.jpg",
    imageAlt: "Paneer Fingers",
  },
  {
    title: "Chicken Pakora",
    price: "$10.95",
    description: "Chicken breast coated in chickpea batter & deep fried.",
    imageSrc: "/images/Chicken Pakora.jpg",
    imageAlt: "Chicken Pakora",
  },
  {
    title: "Butter Chicken Poutine",
    price: "$10.95",
    description: "Creamy butter chicken served on top of hot French fries & melting cheese.",
    imageSrc: "/images/Butter Chicken Poutine.jpg",
    imageAlt: "Butter Chicken Poutine",
  },
  {
    title: "Aloo Tikki Chat",
    price: "$11.95",
    description: "Crispy Aloo Tikkis are Topped with chickpeas masala & served with chutney, onion, tomatoes & yogurt.",
    imageSrc: "/images/Aloo Tikki Chat.jpg",
    imageAlt: "Aloo Tikki Chat",
  },
];

const appetizersRightColumn: Appetizer[] = [
  {
    title: "Fish Pakora",
    price: "$10.95",
    description: "Traditional fried basa fish coated in chickpea flour, rice flour & cornstarch.",
    imageSrc: "/images/Fish Pakora.jpg",
    imageAlt: "Fish Pakora",
  },
  {
    title: "Calamari",
    price: "$14.95",
    description: "Calamari deep fried and served with tartar sauce.",
    imageSrc: "/images/calmari.webp",
    imageAlt: "Calamari",
  },
  {
    title: "Spring Roll",
    price: "$8.95",
    description: "Roll of thin pastry, filled with vegetables.",
    imageSrc: "/images/Spring Roll.jpg",
    imageAlt: "Spring Roll",
  },
  {
    title: "Fish and Chips (1pcs/2pcs)",
    price: "$11.95 / $15.95",
    description: "2 pieces of crispy battered cod served with fries and tartar sauce.",
    imageSrc: "/images/fish-and-chips.jpeg",
    imageAlt: "Fish and Chips",
  },
  {
    title: "Chat Papdi",
    price: "$9.95",
    description: "Crisp fried dough wafers mixed with chickpeas & potatoes, dipped in yogurt & chutney.",
    imageSrc: "/images/chat-papdi.jpg",
    imageAlt: "Chat Papdi",
  },
  {
    title: "Chole Samosas Chat",
    price: "$10.95",
    description: "Two savory samosas topped with chickpeas masala and served with chutney.",
    imageSrc: "/images/chole-samosas-chat.webp",
    imageAlt: "Chole Samosas Chat",
  },
  {
    title: "Onion Bhaji",
    price: "$10.95",
    description: "Onion coated in chickpea batter and deep-fried",
    imageSrc: "/images/chole-samosas-chat.webp",
    imageAlt: "Onion Bhaji",
  },
];

const AppetizersSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Appetizers</h1>
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
          {appetizersLeftColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
            <div key={title} className="flex items-start space-x-4">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  layout="fill"
                  objectFit="cover"
                  priority={false}
                  className="rounded-md"
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
          {appetizersRightColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
            <div key={title} className="flex items-start space-x-4">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  layout="fill"
                  objectFit="cover"
                  priority={false}
                  className="rounded-md"
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

export default AppetizersSection;
