import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
  title: string;
  price: string;
  description: string;
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
      { title: "Veg Spring Roll", price: "$10.95", description: "Golden crispy pastry rolls filled with shredded cabbage, carrots and glass noodles. Served with sweet chilli sauce." },
      { title: "Chicken Pakora", price: "$12.95", description: "Chicken breast coated in chickpea batter and deep fried. Served with mint chutney." },
      { title: "Fish Pakora", price: "$12.95", description: "Traditional deep-fried fish fritters coated with chickpea flour. Served with mint chutney." },
      { title: "Chat Papdi", price: "$10.95", description: "Crisp fried dough wafers with chickpeas, onion, tomato and potatoes, dipped in yogurt and chutney." },
      { title: "Chole Samosas Chat", price: "$13.95", description: "Two savoury samosas topped with chickpea masala and served with chutney." },
      { title: "Aloo Tikki", price: "$8.95", description: "Golden brown crispy potato patties made from mashed potatoes, aromatic spices and herbs." },
      { title: "Aloo Tikki Chat", price: "$11.95", description: "Crispy potato patties served with yogurt, chickpeas, onion, tomato, mint and tamarind chutney." },
    ],
  },
  {
    title: "Sharing Plates",
    items: [
      { title: "Veggie Platter", price: "$17.95", description: "Samosas, pakora, paneer fingers and spring rolls served with mint and tamarind chutney." },
      { title: "Tandoori Delight", price: "$24.95", description: "Three pieces each of tandoori chicken, saffron chicken tikka, green chicken tikka and garlic chicken tikka, barbecued in our clay oven with mint chutney." },
      { title: "Namaste Special Set", price: "$24.95", description: "Two pieces each of tandoori chicken, garlic chicken tikka, saffron chicken tikka, fish and prawns, barbecued in our clay oven with mint chutney." },
    ],
  },
  {
    title: "Salads",
    items: [
      { title: "Caesar Salad", price: "$11.95", description: "Romaine lettuce tossed with Caesar dressing and crunchy croutons, topped with freshly grated parmesan." },
      { title: "Greek Salad", price: "$11.95", description: "Diced tomato, cucumber, onion, peppers, feta cheese and olives tossed with Greek dressing." },
      { title: "Indian Salad", price: "Starter $7.00 / Entree $10.95", description: "Freshly sliced carrots, tomatoes, cucumbers and onions." },
    ],
  },
  {
    title: "Soups",
    items: [
      { title: "Lentil Soup", price: "$6.95", description: "A warm and comforting soup of gently spiced lentils." },
      { title: "Creamy Tomato Soup", price: "$6.95", description: "Tomatoes blended with cream into a smooth and comforting soup." },
      { title: "Cream of Chicken Soup", price: "$6.95", description: "A rich creamy chicken soup seasoned with gentle aromatic spices." },
      { title: "Namaste Special Soup", price: "$9.95", description: "A hearty aromatic soup with chicken, prawn and vegetables." },
    ],
  },
  {
    title: "Kids Special",
    items: [
      { title: "Butter Chicken Poutine", price: "Small $8.95 / Large $11.95", description: "Creamy butter chicken served on hot French fries with melting cheese." },
      { title: "Butter Chicken Bowl", price: "$8.95", description: "A kid-sized bowl of tender chicken in our creamy signature butter sauce." },
      { title: "Fries", price: "$5.95", description: "Crisp golden French fries served hot and lightly seasoned." },
      { title: "Chicken Strips with Fries", price: "$8.95", description: "Chicken tenders coated with breadcrumbs and served with fries and ketchup." },
      { title: "Mozza Sticks with Fries", price: "$8.95", description: "Gooey mozzarella sticks in a crisp coating, served with golden fries." },
    ],
  },
  {
    title: "Tandoori Sizzlers",
    items: [
      { title: "Chicken Tikka", price: "$21.95", description: "Boneless chicken thigh marinated with aromatic Indian spices, cooked in our clay oven and served with mint chutney and rice. Choose garlic, saffron or green." },
      { title: "Saffron Chicken Tikka", price: "$21.95", description: "Boneless chicken thigh marinated with saffron, yogurt and aromatic spices, roasted in our clay oven and served with mint chutney and rice." },
      { title: "Garlic Chicken Tikka", price: "$21.95", description: "Boneless chicken thigh marinated with garlic, yogurt and aromatic spices, roasted in our clay oven and served with mint chutney and rice." },
      { title: "Green Chicken Tikka", price: "$21.95", description: "Boneless chicken thigh marinated with fresh herbs, yogurt and aromatic spices, roasted in our clay oven and served with mint chutney and rice." },
      { title: "Tandoori Chicken", price: "4 pieces $17.95 / 8 pieces $23.95", description: "Chicken drumsticks and thighs marinated with yogurt and traditional tandoori spices, roasted in our clay oven and served with mint chutney." },
      { title: "Tandoori Soya Chaap", price: "$19.95", description: "Tender soya chaap marinated with yogurt, ginger and traditional Indian spices, roasted in our clay oven and served with mint chutney." },
      { title: "Tandoori Fish", price: "$19.95", description: "Basa fish marinated with ginger, garlic and exotic Indian spices, cooked in our clay oven and served with mint chutney on rice." },
      { title: "Prawn Tikka", price: "$22.95", description: "Tiger prawns marinated with ginger, garlic and exotic Indian spices, cooked in our clay oven and served with mint chutney on rice." },
    ],
  },
  {
    title: "Vegetarian Specialties",
    items: [
      { title: "Aloo Gobi", price: "$17.95", description: "Tender cauliflower florets and potatoes simmered in a fragrant spice blend." },
      { title: "Baingan Bharta", price: "$17.95", description: "Mashed roasted eggplant cooked with onions, tomatoes, green peas and fragrant spices." },
      { title: "Chana Masala", price: "$16.95", description: "Hearty chickpea curry in rich tomato gravy with onions, garlic and warming spices." },
      { title: "Dal Fry", price: "$15.95", description: "Yellow lentils infused with fragrant garlic and cumin." },
      { title: "Dal Makhani", price: "$17.95", description: "Black lentils cooked with creamy butter and tomato sauce, spiced with garam masala and cumin." },
      { title: "Mix Vegetables", price: "$17.95", description: "Cauliflower, broccoli, carrots, green beans, potatoes, peas and paneer with aromatic Indian spices." },
      { title: "Veg Jalfrezi", price: "$17.95", description: "Fresh vegetables and paneer with bell peppers and aromatic Indian spices." },
      { title: "Matar Mushroom", price: "$17.95", description: "Fresh mushrooms and green peas in onion-tomato gravy with garlic, ginger and aromatic spices." },
      { title: "Malai Kofta", price: "$18.95", description: "Creamy paneer and vegetable dumplings in a delicately spiced creamy sauce." },
      { title: "Matar Paneer", price: "$18.95", description: "Paneer cheese cubes simmered with green peas in onion and tomato sauce with aromatic spices." },
      { title: "Paneer Makhani", price: "$18.95", description: "Tender cubes of Indian cheese in creamy butter tomato sauce with garam masala and cumin." },
      { title: "Vegetable Shahi Korma", price: "$17.95", description: "A rich creamy sauce of cashews, onion and aromatic spices from the Mughlai tradition." },
      { title: "Paneer Shahi Korma", price: "$18.95", description: "Paneer in a rich creamy sauce of cashews, onion and aromatic Mughlai spices." },
      { title: "Palak Paneer", price: "$18.95", description: "Chopped spinach cooked delicately with paneer in ginger, garlic and onion sauce." },
      { title: "Vegetable Mango Curry", price: "$17.95", description: "A rich and creamy mango curry with aromatic mild spices." },
      { title: "Vegetable Coconut Curry", price: "$17.95", description: "A creamy coconut curry with aromatic mild spices." },
      { title: "Vegetable Green Curry", price: "$17.95", description: "A fragrant green curry of broccoli, mint, spinach and cilantro with a hint of spice." },
      { title: "Soya Chaap Masala", price: "$18.95", description: "A rich curry with fresh tomato and onion base infused with aromatic spices." },
      { title: "Kadai Paneer", price: "$18.95", description: "Paneer, fresh bell peppers, onions and tomatoes cooked with bold spices for a rich colourful bite." },
      { title: "Kadai Soya Chaap", price: "$19.95", description: "Soya chaap, fresh bell peppers, onions and tomatoes cooked with bold spices for a rich colourful bite." },
    ],
  },
  {
    title: "Chicken Specialties",
    items: [
      { title: "Butter Chicken", price: "$18.95", description: "Our signature creamy blend of butter, tomatoes and cream, infused with garam masala and fenugreek." },
      { title: "Chicken Tikka Masala", price: "$18.95", description: "Barbecued chicken breast in rich onion, tomato and bell pepper masala gravy." },
      { title: "Chicken Saffron Curry", price: "$18.95", description: "Boneless chicken breast delicately cooked in creamy saffron sauce with onion and aromatic spices." },
      { title: "Chicken Royal Curry", price: "$18.95", description: "Boneless chicken breast delicately cooked in creamy sauce with onion and aromatic spices." },
      { title: "Chicken Black Pepper", price: "$18.95", description: "Boneless chicken breast in creamy sauce with onion and exotic spices." },
      { title: "Traditional Chicken Curry", price: "$18.95", description: "A classic comforting blend of ginger, garlic and onion simmered with aromatic spices." },
      { title: "Chicken Shahi Korma", price: "$18.95", description: "A rich creamy sauce of cashews, onion and aromatic spices from the Mughlai tradition." },
      { title: "Chicken Palak", price: "$18.95", description: "Chopped spinach and tender chicken cooked delicately in ginger, garlic and onion sauce." },
      { title: "Chicken Mango Curry", price: "$18.95", description: "A rich and creamy mango curry with tender chicken and aromatic mild spices." },
      { title: "Chicken Coconut Curry", price: "$18.95", description: "Tender chicken in creamy coconut curry with aromatic mild spices." },
      { title: "Chicken Green Curry", price: "$18.95", description: "Chicken in a fragrant green curry of broccoli, mint, spinach and cilantro with a hint of spice." },
      { title: "Chicken Vindaloo", price: "$18.95", description: "A tangy fiery South Indian chicken curry with tender potatoes simmered in a spiced coconut base." },
      { title: "Chicken Rogan Josh", price: "$18.95", description: "A traditional fiery Kashmiri chicken curry in a rich onion, ginger and garlic base." },
      { title: "Chicken Madras Curry", price: "$18.95", description: "A bold chicken curry slow cooked with onion, tomato, coconut, warming spices and mustard seeds." },
      { title: "Chicken Do Piaza", price: "$18.95", description: "A vibrant aromatic chicken curry with tomatoes, onions, ginger and fresh herbs." },
      { title: "Chicken Masala", price: "$18.95", description: "A rich chicken curry with fresh tomato and onion base infused with aromatic spices." },
      { title: "Kadai Chicken", price: "$18.95", description: "Chicken, fresh bell peppers, onions and tomatoes cooked with bold spices for a rich colourful bite." },
    ],
  },
  {
    title: "Lamb & Goat Specialties",
    items: [
      { title: "Butter Lamb", price: "$19.95", description: "Our signature creamy blend of butter, tomatoes and cream, infused with garam masala and fenugreek." },
      { title: "Traditional Lamb Curry", price: "$19.95", description: "A classic comforting blend of ginger, garlic and onion simmered with aromatic spices." },
      { title: "Traditional Goat Curry", price: "$19.95", description: "Tender goat in a classic comforting blend of ginger, garlic, onion and aromatic spices." },
      { title: "Lamb Shahi Korma", price: "$19.95", description: "A rich creamy sauce of cashews, onion and aromatic spices from the Mughlai tradition." },
      { title: "Lamb Palak (Gosh)", price: "$19.95", description: "Chopped spinach and tender lamb cooked delicately in ginger, garlic and onion sauce." },
      { title: "Lamb Mango Curry", price: "$19.95", description: "A rich and creamy mango curry with tender lamb and aromatic mild spices." },
      { title: "Lamb Coconut Curry", price: "$19.95", description: "Tender lamb in creamy coconut curry with aromatic mild spices." },
      { title: "Lamb Green Curry", price: "$19.95", description: "Lamb in a fragrant green curry of broccoli, mint, spinach and cilantro with a hint of spice." },
      { title: "Lamb Vindaloo", price: "$19.95", description: "A tangy fiery South Indian lamb curry with tender potatoes simmered in a spiced coconut base." },
      { title: "Lamb Rogan Josh", price: "$19.95", description: "A traditional fiery Kashmiri lamb curry in a rich onion, ginger and garlic base." },
      { title: "Lamb Madras Curry", price: "$19.95", description: "A bold lamb curry slow cooked with onion, tomato, coconut, warming spices and mustard seeds." },
      { title: "Lamb Do Piaza", price: "$19.95", description: "A vibrant aromatic lamb curry with tomatoes, onions, ginger and fresh herbs." },
      { title: "Lamb Masala", price: "$19.95", description: "A rich lamb curry with fresh tomato and onion base infused with aromatic spices." },
    ],
  },
  {
    title: "Seafood Specialties",
    items: [
      { title: "Traditional Fish Curry", price: "$18.95", description: "Tender fish in a classic comforting blend of ginger, garlic, onion and aromatic spices." },
      { title: "Traditional Prawn Curry", price: "$19.95", description: "Tiger prawns in a classic comforting blend of ginger, garlic, onion and aromatic spices." },
      { title: "Prawn Shahi Korma", price: "$19.95", description: "Tiger prawns in a rich creamy sauce of cashews, onion and aromatic Mughlai spices." },
      { title: "Fish Coconut Curry", price: "$18.95", description: "Tender fish in creamy coconut curry with aromatic mild spices." },
      { title: "Prawn Coconut Curry", price: "$19.95", description: "Tiger prawns in creamy coconut curry with aromatic mild spices." },
      { title: "Fish Vindaloo", price: "$18.95", description: "A tangy fiery South Indian fish curry with tender potatoes in a spiced coconut base." },
      { title: "Prawn Vindaloo", price: "$19.95", description: "A tangy fiery South Indian prawn curry with tender potatoes in a spiced coconut base." },
      { title: "Fish Masala", price: "$18.95", description: "Tender fish in a rich curry with fresh tomato and onion base infused with aromatic spices." },
      { title: "Prawn Masala", price: "$19.95", description: "Tiger prawns in a rich curry with fresh tomato and onion base infused with aromatic spices." },
    ],
  },
  {
    title: "Indo-Chinese Style",
    items: [
      { title: "Veg Manchurian (Dry / Gravy)", price: "$16.95", description: "Crispy vegetable dumplings in tangy soy-garlic sauce with a hint of chilli." },
      { title: "Chilli Paneer (Dry / Gravy)", price: "$17.95", description: "Paneer with bell pepper and onion in bold soy-garlic sauce with a hint of chilli." },
      { title: "Chilli Soya Chaap (Dry / Gravy)", price: "$17.95", description: "Soya chaap with bell pepper and onion in bold soy-garlic sauce with a hint of chilli." },
      { title: "Chilli Chicken (Dry / Gravy)", price: "$17.95", description: "Chicken with bell pepper and onion in bold soy-garlic sauce with a hint of chilli." },
      { title: "Chilli Prawn (Dry / Gravy)", price: "$18.95", description: "Prawns with bell pepper and onion in bold soy-garlic sauce with a hint of chilli." },
      { title: "Veg Rice Noodles Chowmien", price: "$14.95", description: "Rice noodles wok-tossed with fresh vegetables and savoury Indo-Chinese seasoning." },
      { title: "Chicken Rice Noodles Chowmien", price: "$15.95", description: "Rice noodles wok-tossed with tender chicken, vegetables and savoury Indo-Chinese seasoning." },
      { title: "Vegetable Fried Rice", price: "$13.95", description: "Wok-fried basmati rice tossed with fresh vegetables and savoury seasoning." },
      { title: "Chicken Fried Rice", price: "$14.95", description: "Wok-fried basmati rice tossed with tender chicken and savoury seasoning." },
      { title: "Prawn Fried Rice", price: "$15.95", description: "Wok-fried basmati rice tossed with juicy prawns and savoury seasoning." },
    ],
  },
  {
    title: "Biryani Rice Specialties",
    description: "Basmati rice traditionally cooked on low heat with exotic spices, onions, saffron, rose water and fresh mint.",
    items: [
      { title: "Vegetable Biryani", price: "$16.95", description: "Fragrant basmati rice layered with garden vegetables and aromatic spices." },
      { title: "Chicken Biryani", price: "$18.95", description: "Fragrant basmati rice layered with tender spiced chicken." },
      { title: "Lamb Biryani", price: "$19.95", description: "Fragrant basmati rice layered with tender slow-cooked lamb." },
      { title: "Prawn Biryani", price: "$19.95", description: "Fragrant basmati rice layered with juicy tiger prawns." },
      { title: "Namaste Special Biryani", price: "$20.95", description: "Fragrant basmati rice layered with chicken, lamb, prawn and vegetables." },
    ],
  },
  {
    title: "Rice",
    items: [
      { title: "Steamed Rice", price: "Small $3.00 / Full $4.00", description: "Light and fluffy steamed basmati rice." },
      { title: "Peas Pulao", price: "$6.95", description: "Basmati rice tempered with fried onions and green peas." },
      { title: "Zeera Rice", price: "$6.95", description: "Basmati rice tempered with butter and cumin seeds." },
      { title: "Coconut Rice", price: "$6.95", description: "Basmati rice cooked with coconut milk, crushed coconut and curry leaves." },
      { title: "Saffron Rice", price: "$6.95", description: "Basmati rice cooked with fried onions and fragrant saffron." },
    ],
  },
  {
    title: "Tandoori Breads",
    items: [
      { title: "Plain Naan", price: "$3.00", description: "Traditional North Indian leavened wheat bread baked in the tandoor." },
      { title: "Garlic Naan", price: "$3.50", description: "Traditional tandoori naan garnished with fresh garlic and herbs." },
      { title: "Butter Naan", price: "$3.95", description: "Traditional North Indian leavened bread baked with butter in the tandoor." },
      { title: "Tandoori Roti", price: "$3.00", description: "Whole-wheat leavened bread baked in the tandoor." },
    ],
  },
  {
    title: "Tandoori Stuffed Breads",
    items: [
      { title: "Cheese & Spinach Naan", price: "$6.95", description: "Tandoori naan filled with molten cheese and tender seasoned spinach." },
      { title: "Chicken & Cheese Naan", price: "$6.95", description: "Tandoori naan filled with savoury spiced chicken and melted cheese." },
      { title: "Peshawari Naan", price: "$6.95", description: "Leavened bread stuffed with shredded coconut, raisins and cashews, baked in the tandoor." },
      { title: "Aloo Naan", price: "$5.95", description: "Leavened bread stuffed with potatoes and cilantro, baked in the tandoor." },
      { title: "Aloo Paratha", price: "$5.95", description: "Whole-wheat bread stuffed with potatoes and authentic spices, baked in the tandoor." },
    ],
  },
  {
    title: "Extras & Add-ons",
    items: [
      { title: "Papadum", price: "$3.00", description: "A crisp wafer-thin lentil cracker, lightly spiced and perfect for sharing." },
      { title: "Mixed Pickles", price: "$3.95", description: "A tangy medley of Indian pickles with bold savoury spice." },
      { title: "Raita", price: "8 oz $4.95 / 12 oz $6.50", description: "Cooling seasoned yogurt that balances richly spiced dishes." },
      { title: "Mango Chutney", price: "$2.50", description: "A sweet golden mango condiment with a gently spiced finish." },
      { title: "Mint Chutney", price: "$2.50", description: "A fresh herb chutney blended with mint, cilantro and lively spice." },
      { title: "Tamarind Chutney", price: "$2.50", description: "A dark tangy sweet-and-sour tamarind condiment." },
      { title: "Add Chicken", price: "$4.95", description: "Add tender cooked chicken to a compatible dish." },
      { title: "Add Lamb", price: "$5.95", description: "Add tender slow-cooked lamb to a compatible dish." },
      { title: "Add Prawn", price: "$5.95", description: "Add juicy cooked prawns to a compatible dish." },
      { title: "Add Steamed Vegetables", price: "$3.95", description: "Add a colourful selection of gently steamed vegetables." },
      { title: "Add Paneer", price: "$5.95", description: "Add tender cubes of Indian cottage cheese to a compatible dish." },
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
              <p className="mt-1 text-xs leading-5 text-[#d99e5f]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default UpdatedMenu;
