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
      { title: "Caesar Salad", price: "$11.95", description: "Crisp romaine lettuce tossed in creamy Caesar dressing with classic savoury seasoning." },
      { title: "Greek Salad", price: "$11.95", description: "A bright Mediterranean mix of crisp vegetables, olives and tangy feta." },
      { title: "Indian Salad", price: "Starter $7.00 / Entrée $10.95", description: "A cooling, crunchy selection of freshly dressed vegetables with Indian-inspired seasoning." },
    ],
  },
  {
    title: "For the Little Ones",
    items: [
      { title: "Butter Chicken Poutine", price: "Small $8.95 / Large $11.95", description: "Creamy butter chicken served on top of hot french fries and melting cheese." },
      { title: "Butter Chicken Bowl", price: "$8.95", description: "A kid-sized bowl of tender chicken in our creamy signature butter sauce." },
      { title: "Fries", price: "$5.95", description: "Crisp, golden french fries served hot and lightly seasoned." },
      { title: "Chicken Bites with Fries", price: "$8.95", description: "Tender, golden chicken bites served with a side of crispy fries." },
      { title: "Mozza Sticks with Fries", price: "$8.95", description: "Gooey mozzarella sticks in a crisp coating, served with golden fries." },
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
    title: "Vegetarian Curry Specialty",
    description: "Choose your favourite in paneer, fresh vegetable or soya chaap.",
    items: [
      { title: "Paneer — Shahi Korma", price: "$18.95", description: "A regal Mughlai sauce of cashews, onion and fragrant spice." },
      { title: "Paneer — Palak", price: "$18.95", description: "Spinach cooked delicately with ginger, garlic and onion." },
      { title: "Paneer — Kadai", price: "$18.95", description: "Fresh bell peppers, onion and tomato in bold cast-iron spice." },
      { title: "Vegetable — Shahi Korma", price: "$17.95", description: "A regal Mughlai sauce of cashews, onion and fragrant spice." },
      { title: "Vegetable — Mango Curry", price: "$17.95", description: "Ripe mango and mild aromatic spice in a golden creamy curry." },
      { title: "Vegetable — Coconut Curry", price: "$17.95", description: "Toasted coconut cream and gentle spice." },
      { title: "Vegetable — Green Curry", price: "$17.95", description: "Broccoli, mint, spinach and cilantro in a herbaceous curry base." },
      { title: "Soya Chaap — Masala", price: "$18.95", description: "A rich tomato-and-onion foundation infused with aromatic spice." },
      { title: "Soya Chaap — Kadai", price: "$19.95", description: "Fresh bell peppers, onion and tomato in bold cast-iron spice." },
    ],
  },
  {
    title: "Chicken Curry Specialty",
    description: "Tender chicken in our full collection of house sauces — every curry, $18.95.",
    items: [
      { title: "Butter Sauce", price: "$18.95", description: "Tender chicken in a velvety sauce of butter, sun-ripened tomato, cream, garam masala and fenugreek." },
      { title: "Traditional Curry", price: "$18.95", description: "Tender chicken simmered with ginger, garlic and onion in a soul-warming aromatic gravy." },
      { title: "Shahi Korma", price: "$18.95", description: "Tender chicken in a luxurious Mughlai sauce of cashews, onion, cream and fragrant spice." },
      { title: "Palak", price: "$18.95", description: "Tender chicken folded into emerald spinach cooked with ginger, garlic and onion." },
      { title: "Mango Curry", price: "$18.95", description: "Tender chicken in a golden creamy curry of ripe mango and mild aromatic spice." },
      { title: "Coconut Curry", price: "$18.95", description: "Tender chicken simmered in toasted coconut cream with gentle aromatic spice." },
      { title: "Green Curry", price: "$18.95", description: "Tender chicken in a herbaceous curry of broccoli, mint, spinach and cilantro." },
      { title: "Vindaloo", price: "$18.95", description: "Tender chicken in a bold, tangy South Indian curry with potatoes and coconut." },
      { title: "Rogan Josh", price: "$18.95", description: "Tender chicken in a rich Kashmiri-style onion, ginger and garlic curry." },
      { title: "Madras Curry", price: "$18.95", description: "Tender chicken in a deep, vibrant curry of onion, tomato, coconut and toasted mustard seeds." },
      { title: "Do Pyaza", price: "$18.95", description: "Tender chicken in a lively double-onion curry with fresh tomato, ginger and herbs." },
      { title: "Masala", price: "$18.95", description: "Tender chicken in a rich tomato-and-onion masala infused with aromatic spice." },
      { title: "Kadai", price: "$18.95", description: "Tender chicken sizzling with bell peppers, onion and tomato in bold kadai spice." },
    ],
  },
  {
    title: "Lamb Curry Specialty",
    description: "Slow-cooked lamb in our full collection of house sauces — every curry, $19.95.",
    items: [
      { title: "Butter Sauce", price: "$19.95", description: "Slow-cooked lamb in a velvety sauce of butter, sun-ripened tomato, cream, garam masala and fenugreek." },
      { title: "Traditional Curry", price: "$19.95", description: "Slow-cooked lamb simmered with ginger, garlic and onion in a soul-warming aromatic gravy." },
      { title: "Shahi Korma", price: "$19.95", description: "Slow-cooked lamb in a luxurious Mughlai sauce of cashews, onion, cream and fragrant spice." },
      { title: "Palak", price: "$19.95", description: "Slow-cooked lamb folded into emerald spinach with ginger, garlic and onion." },
      { title: "Mango Curry", price: "$19.95", description: "Slow-cooked lamb in a golden creamy curry of ripe mango and mild aromatic spice." },
      { title: "Coconut Curry", price: "$19.95", description: "Slow-cooked lamb simmered in toasted coconut cream with gentle aromatic spice." },
      { title: "Green Curry", price: "$19.95", description: "Slow-cooked lamb in a herbaceous curry of broccoli, mint, spinach and cilantro." },
      { title: "Vindaloo", price: "$19.95", description: "Slow-cooked lamb in a bold, tangy South Indian curry with potatoes and coconut." },
      { title: "Rogan Josh", price: "$19.95", description: "Slow-cooked lamb in a rich Kashmiri-style onion, ginger and garlic curry." },
      { title: "Madras Curry", price: "$19.95", description: "Slow-cooked lamb in a deep curry of onion, tomato, coconut and toasted mustard seeds." },
      { title: "Do Pyaza", price: "$19.95", description: "Slow-cooked lamb in a lively double-onion curry with fresh tomato, ginger and herbs." },
      { title: "Masala", price: "$19.95", description: "Slow-cooked lamb in a rich tomato-and-onion masala infused with aromatic spice." },
    ],
  },
  {
    title: "Seafood & Goat Curry",
    items: [
      { title: "Goat — Traditional Curry", price: "$19.95", description: "Slow-braised goat simmered with ginger, garlic and onion in a soulful aromatic gravy." },
      { title: "Fish — Traditional Curry", price: "$18.95", description: "Tender fish simmered with ginger, garlic and onion in a fragrant traditional gravy." },
      { title: "Fish — Coconut Curry", price: "$18.95", description: "Tender fish gently simmered in toasted coconut cream with mild aromatic spice." },
      { title: "Fish — Vindaloo", price: "$18.95", description: "Tender fish in a bold, tangy South Indian curry with potatoes and coconut." },
      { title: "Fish — Masala", price: "$18.95", description: "Tender fish in a rich tomato-and-onion masala infused with aromatic spice." },
      { title: "Prawn — Traditional Curry", price: "$19.95", description: "Tiger prawns simmered with ginger, garlic and onion in a fragrant traditional gravy." },
      { title: "Prawn — Shahi Korma", price: "$19.95", description: "Tiger prawns in a luxurious Mughlai sauce of cashews, onion, cream and fragrant spice." },
      { title: "Prawn — Coconut Curry", price: "$19.95", description: "Tiger prawns gently simmered in toasted coconut cream with mild aromatic spice." },
      { title: "Prawn — Vindaloo", price: "$19.95", description: "Tiger prawns in a bold, tangy South Indian curry with potatoes and coconut." },
      { title: "Prawn — Masala", price: "$19.95", description: "Tiger prawns in a rich tomato-and-onion masala infused with aromatic spice." },
    ],
  },
  {
    title: "Indo-Chinese Style",
    items: [
      { title: "Veg Manchurian (Dry/Gravy)", price: "$16.95", description: "Crisp vegetable dumplings tossed in a bold, tangy soy-garlic glaze, served dry or with gravy." },
      { title: "Chicken Chili Masala (Dry/Gravy)", price: "$17.95", description: "Tender chicken with crisp bell pepper and onion in a fiery soy-garlic sauce, served dry or with gravy." },
      { title: "Soya Chaap Chili Masala (Dry/Gravy)", price: "$17.95", description: "Soya chaap with crisp bell pepper and onion in a fiery soy-garlic sauce, served dry or with gravy." },
      { title: "Paneer Chili Masala (Dry/Gravy)", price: "$17.95", description: "Paneer with crisp bell pepper and onion in a fiery soy-garlic sauce, served dry or with gravy." },
      { title: "Prawn Chili Masala (Dry/Gravy)", price: "$18.95", description: "Tiger prawns with crisp bell pepper and onion in a fiery soy-garlic sauce, served dry or with gravy." },
      { title: "Veg Chow Mien", price: "$14.95", description: "Silky rice noodles wok-tossed with a colourful selection of garden vegetables." },
      { title: "Chicken Chowmein", price: "$15.95", description: "Rice noodles wok-tossed with tender chicken and crisp garden vegetables." },
      { title: "Vegetable Fried Rice", price: "$13.95", description: "Wok-charred basmati rice tossed with fresh garden vegetables and savoury seasoning." },
      { title: "Chicken Fried Rice", price: "$14.95", description: "Wok-charred basmati rice tossed with tender chicken and savoury seasoning." },
      { title: "Prawn Fried Rice", price: "$15.95", description: "Wok-charred basmati rice tossed with juicy prawns and savoury seasoning." },
    ],
  },
  {
    title: "Tandoori Breads",
    items: [
      { title: "Plain Naan", price: "$3.00", description: "Traditional leavened wheat bread baked until blistered and pillowy in the tandoor." },
      { title: "Garlic Naan", price: "$3.50", description: "Tandoor-baked naan garnished with fresh garlic and herbs for a fragrant golden finish." },
      { title: "Butter Naan", price: "$3.95", description: "Soft tandoor-baked naan brushed with melted butter for a glossy, tender finish." },
      { title: "Tandoori Roti", price: "$3.00", description: "Rustic whole-wheat bread baked in the tandoor until lightly charred." },
    ],
  },
  {
    title: "Tandoori Stuffed Breads",
    items: [
      { title: "Cheese & Spinach Naan", price: "$6.95", description: "Blistered naan filled with molten cheese and tender seasoned spinach." },
      { title: "Chicken & Cheese Naan", price: "$6.95", description: "Blistered naan filled with savoury spiced chicken and melted cheese." },
      { title: "Peshawari Naan", price: "$6.95", description: "A jewelled naan filled with shredded coconut, plump raisins and cashews." },
      { title: "Aloo Naan", price: "$5.95", description: "Soft naan stuffed with warmly spiced potatoes and baked in the tandoor." },
      { title: "Aloo Paratha", price: "$5.95", description: "Whole-wheat flatbread packed with potatoes and authentic Indian spices." },
    ],
  },
  {
    title: "Biryani Rice Specialty",
    description: "Basmati rice traditionally cooked on low heat with exotic spices, onions, saffron, rose water and your choice of vegetable, meat or seafood.",
    items: [
      { title: "Vegetable Biryani", price: "$16.95", description: "Fragrant basmati rice layered with garden vegetables, exotic spices, saffron and fresh mint." },
      { title: "Chicken Biryani", price: "$18.95", description: "Fragrant basmati rice layered with tender spiced chicken, saffron and fresh mint." },
      { title: "Lamb Biryani", price: "$19.95", description: "Fragrant basmati rice layered with slow-cooked lamb, saffron and fresh mint." },
      { title: "Prawn Biryani", price: "$19.95", description: "Fragrant basmati rice layered with juicy tiger prawns, saffron and fresh mint." },
      { title: "Namaste Special Biryani", price: "$20.95", description: "Our crowning biryani with chicken, lamb, prawn and vegetables beneath fragrant saffron rice." },
    ],
  },
  {
    title: "Soups",
    items: [
      { title: "Lentil Soup", price: "$6.95", description: "A velvety bowl of gently spiced lentils that is warming, wholesome and comforting." },
      { title: "Creamy Tomato Soup", price: "$6.95", description: "Sun-ripened tomatoes blended with cream until smooth, bright and silky." },
      { title: "Cream of Chicken Soup", price: "$6.95", description: "A rich, comforting chicken soup finished with cream and gentle aromatic spice." },
      { title: "Namaste Special Soup", price: "$9.95", description: "A generous aromatic broth filled with tender chicken, prawn and fresh vegetables." },
    ],
  },
  {
    title: "Extras",
    items: [
      { title: "Papadum", price: "$3.00", description: "A crisp, wafer-thin lentil cracker that is lightly spiced and perfect for sharing." },
      { title: "Mixed Pickles", price: "$3.95", description: "A tangy, punchy medley of Indian pickles with bold savoury spice." },
      { title: "Pickled Onion", price: "Small $3.00 / Large $6.50", description: "Bright, zesty onions pickled to add a lively tang alongside any dish." },
      { title: "Red Onion", price: "Small $3.00 / Large $6.50", description: "Fresh, crisp sliced red onion served as a cooling accompaniment." },
      { title: "Raita", price: "8 oz $4.95 / 12 oz $6.50", description: "Cooling seasoned yogurt that balances and soothes the heat of richly spiced dishes." },
      { title: "Dahi", price: "8 oz $4.00 / 12 oz $6.00", description: "Fresh, creamy plain yogurt served chilled as a cooling accompaniment." },
      { title: "Mango Chutney", price: "$2.50", description: "A sweet, golden and gently spiced mango condiment with a rich sticky finish." },
      { title: "Tamarind Chutney", price: "$2.50", description: "A dark, tangy and sweet-sour tamarind condiment that brightens savoury dishes." },
    ],
  },
  {
    title: "Add Ons",
    items: [
      { title: "Add Chicken", price: "$4.95", description: "Add tender cooked chicken to a compatible curry, noodle or rice dish." },
      { title: "Add Lamb", price: "$5.95", description: "Add rich, slow-cooked lamb to a compatible curry, noodle or rice dish." },
      { title: "Add Prawn", price: "$5.95", description: "Add juicy cooked prawns to a compatible curry, noodle or rice dish." },
      { title: "Add Steamed Vegetables", price: "$3.95", description: "Add a colourful selection of gently steamed vegetables to your meal." },
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
