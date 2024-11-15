import React from 'react';
import nonVeg from '../assets/nonVeg.png'
import veg from '../assets/veg.png'

const FilterSidebar = () => {
  return (
    <div className="w-64 p-6 bg-white shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Filter Results</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          placeholder="Type to search location"
          className="mt-2 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Veg / Non-Veg</label>
        <div className="flex gap-4 mt-2">
          <button className="px-4 py-2 border rounded-lg text-white"><img src={nonVeg} alt="NonVeg" /></button>
          <button className="px-4 py-2 border rounded-lg"><img src={veg} alt="Veg" /></button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Price Range</label>
        <input type="range" className="w-full mt-2" min="500" max="5000" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Overall Pricing</label>
        <input type="range" className="w-full mt-2" min="2000" max="15000" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Venue Type</label>
        <select className="mt-2 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red">
          <option>Indoor</option>
          <option>Outdoor</option>
          <option>Both</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Room Count</label>
        <input type="number" min="0" max="5" className="mt-2 w-full p-2 border rounded-lg" />
      </div>
      <button className="w-full mt-4 py-2 bg-red text-white font-semibold rounded-lg">
        Apply Filter
      </button>
    </div>
  );
};

export default FilterSidebar;