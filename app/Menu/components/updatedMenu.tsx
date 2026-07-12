import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
  title: string;
  price: string;
  description?: string;
}

interface MenuCategory {
  title: string;
  description?: string;
  items: MenuItem[];
}

const categories: MenuCategory[] = [
  {
    title: "Appetizers",
    items: [
      { title: "Vegetable Samosas", price: "$7.95", description: "Two savoury triangular pastries filled with spiced potatoes and peas. Served with tamarind chutney." },
      { title: "Vegetable Pakora", price: "$10.95", description: "Deep-fried mixed vegetable fritters coated with chickpea flour. Served with tamarind chutney." },
      { title: "Paneer Fingers", price: "$13.95", description: "Deep-fried paneer fritters coated with chickpea flour. Served with mint chutney." },
      { title: "Vegetable Spring Rolls", price: "$10.95", description: "Crispy pastry rolls filled with seasoned cabbage, carrots and glass noodles. Served with sweet chilli sauce." },
      { title: "Chicken Pakora", price: "$12.95", description: "Chicken breast coated with chickpea batter and deep fried. Served with mint chutney." },
      { title: "Fish Pakora", price: "$12.95", description: "Traditional deep-fried fish fritters coated with chickpea flour. Served with mint chutney." },
      { title: "Chaat Papdi", price: "$10.95", description: "Crisp fried dough wafers with chickpeas, onion, tomato and potatoes, dipped in yogurt and chutney." },
      { title: "Chole Samosas Chaat", price: "$13.95", description: "Two savoury samosas topped with chickpea masala and served with chutney." },
      { title: "Aloo Tikki", price: "$8.95", description: "Golden brown crispy potato patties made with mashed potatoes, aromatic spices and herbs." },
      { title: "Aloo Tikki Chaat", price: "$11.95", description: "Crispy potato patties topped with yogurt, chickpeas, onion, tomato, mint and tamarind chutney." },
    ],
  },
  {
    title: "Sharing Plates",
    items: [
      { title: "Veggie Platter", price: "$17.95", description: "Samosas, pakora, paneer fingers and spring rolls served with mint and tamarind chutney." },
      { title: "Tandoori Delight", price: "$24.95", description: "Tandoori chicken, saffron chicken tikka, green chicken tikka and garlic chicken tikka, served with mint chutney." },
      { title: "Namaste Special Set", price: "$24.95", description: "Tandoori chicken, garlic chicken tikka, saffron chicken tikka, fish and prawns, served with mint chutney." },
    ],
  },
  {
    title: "Salads",
    items: [
      { title: "Caesar Salad", price: "$11.95" },
      { title: "Greek Salad", price: "$11.95" },
      { title: "Indian Salad", price: "Starter $7.00 / Entrée $10.95" },
    ],
  },
  {
    title: "Kids",
    items: [
      { title: "Butter Chicken Poutine", price: "Small $8.95 / Large $11.95", description: "Creamy butter chicken served on top of hot french fries and melting cheese." },
      { title: "Butter Chicken Bowl", price: "$8.95" },
      { title: "Fries", price: "$5.95" },
      { title: "Chicken Bites with Fries", price: "$8.95" },
      { title: "Mozza Sticks with Fries", price: "$8.95" },
    ],
  },
  {
    title: "Tandoori Sizzlers",
    items: [
      { title: "Chicken Tikka", price: "$21.95", description: "Boneless chicken thigh marinated with aromatic Indian spices. Choose garlic, saffron or green." },
      { title: "Tandoori Chicken", price: "4 pieces $17.95 / 8 pieces $23.95", description: "Chicken drumsticks and thighs marinated with yogurt and traditional tandoori spices." },
      { title: "Tandoori Soya Chaap", price: "$17.95", description: "Tender soya chaap marinated with yogurt, ginger and Indian spices, then roasted in our clay oven." },
      { title: "Tandoori Fish", price: "$19.95", description: "Basa fish marinated with ginger, garlic and exotic Indian spices. Served with rice." },
      { title: "Prawn Tikka", price: "$22.95", description: "Tiger prawns marinated with ginger, garlic and exotic Indian spices. Served with mint chutney and rice." },
    ],
  },
  {
    title: "Chicken Specialty",
    items: [
      { title: "Chicken Tikka Masala", price: "$18.95", description: "Barbecued pieces of chicken breast simmered in a rich onion, tomato and bell pepper masala gravy." },
      { title: "Chicken Saffron Curry", price: "$18.95", description: "Boneless chicken breast delicately cooked in a creamy saffron sauce with onion and aromatic spices." },
      { title: "Chicken Royal Curry", price: "$18.95", description: "Boneless chicken breast delicately cooked in a creamy sauce with onion and aromatic spices." },
      { title: "Chicken Black Pepper", price: "$18.95", description: "Boneless chicken breast delicately cooked in a creamy sauce with onion and aromatic spices." },
    ],
  },
  {
    title: "Vegetable Specialty",
    items: [
      { title: "Aloo Gobi", price: "$17.95", description: "Classic Indian dish featuring tender cauliflower and potatoes simmered in fragrant spices." },
      { title: "Baingan Bharta", price: "$17.95", description: "Mashed roasted eggplant cooked with onions, tomatoes, green peas and fragrant spices." },
      { title: "Chana Masala", price: "$16.95", description: "Hearty chickpea curry simmered in rich tomato gravy with onions, chickpea and warming spices." },
      { title: "Dal Fry", price: "$15.95", description: "A comforting dal made with yellow lentils and infused with fragrant garlic and cumin." },
      { title: "Dal Makhani", price: "$17.95", description: "Black lentils cooked with creamy butter and tomato sauce, spiced with garam masala and cumin." },
      { title: "Mixed Vegetables", price: "$17.95", description: "Fresh cauliflower, broccoli, carrots, green beans, potatoes, peas and paneer cooked with aromatic Indian spices." },
      { title: "Veg Jalfrezi", price: "$17.95", description: "Fresh cauliflower, broccoli, carrots, green beans, potatoes, peas and paneer cooked with aromatic Indian spices." },
      { title: "Matar Mushroom", price: "$17.95", description: "Fresh mushroom and green peas cooked in onion and tomato gravy with garlic, ginger and aromatic spices." },
      { title: "Malai Kofta", price: "$18.95", description: "Creamy paneer and vegetable dumplings simmered in a delicate spiced creamy sauce." },
      { title: "Matar Paneer", price: "$18.95", description: "Paneer cubes simmered with green peas in an onion and tomato sauce with aromatic spices." },
      { title: "Paneer Makhani", price: "$18.95", description: "Tender cubes of Indian cheese cooked with creamy butter and tomato sauce spiced with garam masala and cumin." },
    ],
  },
  {
    title: "Curry Specialty",
    items: [
      { title: "Butter Sauce", price: "Chicken $18.95 / Lamb $19.95", description: "Our signature butter sauce is a creamy blend of butter, tomatoes and cream with warm spices." },
      { title: "Traditional Curry", price: "Chicken $18.95 / Lamb $18.95 / Goat $19.95 / Fish $18.95 / Prawn $19.95", description: "A classic blend of ginger, garlic and onion simmered with aromatic spices." },
      { title: "Shahi Korma", price: "Vegetable $17.95 / Paneer $18.95 / Chicken $18.95 / Lamb $19.95 / Prawn $19.95", description: "A rich creamy sauce of cashews, onions and aromatic spices." },
      { title: "Palak", price: "Paneer $18.95 / Chicken $18.95 / Lamb $19.95", description: "Chopped spinach cooked delicately in ginger, garlic and onion sauce." },
      { title: "Mango Curry", price: "Vegetable $17.95 / Chicken $18.95 / Lamb $19.95", description: "Rich creamy mango curry with aromatic mild spices." },
      { title: "Coconut Curry", price: "Vegetable $17.95 / Chicken $18.95 / Lamb $19.95 / Fish $18.95 / Prawn $19.95", description: "Creamy coconut curry with aromatic mild spices." },
      { title: "Green Curry", price: "Vegetable $17.95 / Chicken $18.95 / Lamb $19.95", description: "A fragrant green curry with broccoli, mint, spinach and cilantro." },
      { title: "Vindaloo", price: "Chicken $18.95 / Lamb $19.95 / Fish $18.95 / Prawn $19.95", description: "Tangy, fiery South Indian curry with tender potatoes simmered in a spiced coconut base." },
      { title: "Rogan Josh", price: "Chicken $18.95 / Lamb $19.95", description: "A traditional fiery Kashmiri curry with tender meat in a rich onion, ginger and garlic base." },
      { title: "Madras Curry", price: "Chicken $18.95 / Lamb $19.95", description: "A bold curry with mustard seeds, slow cooked in an onion, tomato, coconut and warming spice blend." },
      { title: "Do Pyaza", price: "Chicken $18.95 / Lamb $19.95", description: "A vibrant blend of tomatoes, onions, ginger and fresh herbs." },
      { title: "Masala", price: "Chicken $18.95 / Soya Chaap $18.95 / Lamb $19.95 / Fish $18.95 / Prawn $19.95", description: "A rich curry with fresh tomato and onion base infused with aromatic spices." },
      { title: "Kadai", price: "Paneer $18.95 / Chicken $18.95 / Soya Chaap $19.95", description: "A vibrant curry with fresh bell peppers, onions and tomatoes cooked with bold spices." },
    ],
  },
  {
    title: "Indo-Chinese Style",
    items: [
      { title: "Veg Manchurian (Dry/Gravy)", price: "$16.95" },
      { title: "Chilli Masala (Dry/Gravy) — Chicken", price: "$17.95" },
      { title: "Chilli Masala (Dry/Gravy) — Soya Chaap", price: "$17.95" },
      { title: "Chilli Masala (Dry/Gravy) — Paneer", price: "$17.95" },
      { title: "Chilli Masala (Dry/Gravy) — Prawn", price: "$18.95" },
      { title: "Vegetable Rice Noodles Chow Mein", price: "$14.95" },
      { title: "Chicken Rice Noodles Chow Mein", price: "$15.95" },
      { title: "Vegetable Fried Rice", price: "$13.95" },
      { title: "Chicken Fried Rice", price: "$14.95" },
      { title: "Prawn Fried Rice", price: "$15.95" },
    ],
  },
  {
    title: "Tandoori Breads",
    items: [
      { title: "Plain Naan", price: "$3.00" },
      { title: "Garlic Naan", price: "$3.50" },
      { title: "Butter Naan", price: "$3.95" },
      { title: "Tandoori Roti", price: "$3.00" },
    ],
  },
  {
    title: "Tandoori Stuffed Breads",
    items: [
      { title: "Cheese & Spinach Naan", price: "$6.95" },
      { title: "Chicken & Cheese Naan", price: "$6.95" },
      { title: "Peshawari Naan", price: "$6.95" },
      { title: "Aloo Naan", price: "$5.95" },
      { title: "Aloo Paratha", price: "$5.95" },
    ],
  },
  {
    title: "Rice",
    items: [
      { title: "Steamed Rice", price: "Small $3.00 / Full $4.00" },
      { title: "Peas Pulao", price: "$6.95" },
      { title: "Zeera Rice", price: "$6.95" },
      { title: "Coconut Rice", price: "$6.95" },
      { title: "Saffron Rice", price: "$6.95" },
    ],
  },
  {
    title: "Biryani Rice Specialty",
    description: "Basmati rice traditionally cooked on low heat with exotic spices, onions, saffron, rose water and your choice of vegetable, meat or seafood.",
    items: [
      { title: "Vegetable Biryani", price: "$16.95" },
      { title: "Chicken Biryani", price: "$18.95" },
      { title: "Lamb Biryani", price: "$19.95" },
      { title: "Prawn Biryani", price: "$19.95" },
      { title: "Namaste Special Biryani", price: "$20.95", description: "Chicken, lamb, prawn and vegetables." },
    ],
  },
  {
    title: "Soups",
    items: [
      { title: "Lentil Soup", price: "$6.95" },
      { title: "Creamy Tomato Soup", price: "$6.95" },
      { title: "Cream of Chicken Soup", price: "$6.95" },
      { title: "Namaste Special Soup", price: "$9.95", description: "Chicken, prawn and vegetables." },
    ],
  },
  {
    title: "Extras",
    items: [
      { title: "Papadum", price: "$3.00" },
      { title: "Mixed Pickles", price: "$3.95" },
      { title: "Pickled Onion", price: "Small $3.00 / Large $6.50" },
      { title: "Red Onion", price: "Small $3.00 / Large $6.50" },
      { title: "Raita", price: "8 oz $4.95 / 12 oz $6.50" },
      { title: "Dahi", price: "8 oz $4.00 / 12 oz $6.00" },
      { title: "Mango Chutney", price: "$2.50" },
      { title: "Tamarind Chutney", price: "$2.50" },
    ],
  },
  {
    title: "Add Ons",
    items: [
      { title: "Add Chicken", price: "$4.95" },
      { title: "Add Lamb", price: "$5.95" },
      { title: "Add Prawn", price: "$5.95" },
      { title: "Add Steamed Vegetables", price: "$3.95" },
      { title: "Add Paneer", price: "$5.95" },
    ],
  },
];

const UpdatedMenu = () => (
  <div className="bg-[#110c09] text-white">
    {categories.map((category) => (
      <section key={category.title} className="flex flex-col items-center px-4 py-10">
        <h2 className="text-center text-4xl font-extrabold">{category.title}</h2>
        <div className="mb-8 mt-3 flex items-center gap-3">
          <div className="w-24 border-t border-[#d99e5f]" />
          <FontAwesomeIcon className="text-2xl text-[#d99e5f]" icon={faBowlFood} />
          <div className="w-24 border-t border-[#d99e5f]" />
        </div>
        {category.description && (
          <p className="mb-8 max-w-3xl text-center text-sm text-[#d99e5f]">{category.description}</p>
        )}
        <div className="grid w-full max-w-7xl grid-cols-1 gap-x-20 gap-y-8 md:grid-cols-2">
          {category.items.map((item) => (
            <article key={`${category.title}-${item.title}`}>
              <div className="flex items-start justify-between gap-5 border-b border-[#d99e5f] pb-1">
                <h3 className="font-semibold">{item.title}</h3>
                <span className="max-w-[55%] text-right text-sm font-semibold leading-5 sm:text-base">{item.price}</span>
              </div>
              {item.description && <p className="mt-1 text-xs leading-5 text-[#d99e5f]">{item.description}</p>}
            </article>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default UpdatedMenu;
