import React from 'react';

const products = [
  {
    type: 'WASH & FOLD',
    description: 'Perfect for your everyday laundry needs. We wash, remove stains, and fold your clothes neatly, saving you time and effort.',
    benefits: ['Washing', 'Stain Removal', 'Fold'],
    amount: '₦6,000'
  },
  {
    type: 'Premium',
    description: 'Experience the best in fabric care — deep cleaning, ironing, starching, and professional garment treatment.',
    benefits: ['Washing', 'Stain Removal', 'Ironing', 'Starching', 'Clothe Treatment', 'Dry Cleaning'],
    amount: '₦25,000'
  },
  {
    type: 'Deluxe',
    description: 'A great choice for a polished look. Enjoy clean, crisp, and fresh-smelling clothes with washing, ironing, stain removal, and starching.',
    benefits: ['Washing', 'Stain Removal', 'Ironing', 'Starching'],
    amount: '₦10,000'
  }
];

 function PackageList() {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">Our Laundry Packages</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-[#F9FAFB] border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#1F2937]">{item.type}</h3>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <ul className="text-sm text-gray-800 list-disc list-inside mb-4 space-y-1">
              {item.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <div className="text-lg font-bold text-[#4B5563]">{item.amount}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PackageList