import React from 'react';

const menuItems = [
  {
    title: 'Bruschetta',
    description: 'Toasted bread topped with fresh tomatoes, basil, garlic, and drizzled with olive oil.',
    image: require('../assets/bruschetta.jpg'),
  },
  {
    title: 'Chicken Wings',
    description: 'Crispy chicken wings served with a variety of flavorful sauces.',
    image: require('../assets/chicken-wings.jpg'),
  },
  {
    title: 'Caprese Salad',
    description: 'Slices of fresh mozzarella, tomatoes, and basil leaves, drizzled with balsamic glaze.',
    image: require('../assets/caprese-salad.jpg'),
  },
  {
    title: 'Hummus',
    description: 'A smooth dip made from chickpeas, tahini, lemon juice, and garlic, served with pita bread.',
    image: require('../assets/hummus.jpg'),
  },
];

const MenuSection = () => {
  return (
    <section className="bg-[#fef1e6] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our delicious dishes
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 font-medium text-gray-600">
          {['Starters', 'Main Course', 'Lunch', 'Desserts', 'Drinks'].map((tab, i) => (
            <button
              key={i}
              className={`hover:text-primary ${
                tab === 'Starters' ? 'text-black font-semibold' : ''
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid cu preparate */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-0">
          {menuItems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <h3 className="font-semibold text-md">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buton */}
        <div className="mt-10">
          <button className="bg-[#3f774c] text-white px-6 py-2 rounded-md hover:bg-[#356741] transition">
            Browse All menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
