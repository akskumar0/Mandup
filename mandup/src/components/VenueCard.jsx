import React from 'react';

const VenueCard = ({ venue }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={venue.imageUrl}
        alt={venue.name}
        className="w-full h-52 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{venue.name}</h3>
        <p className="text-gray-500 text-sm">{venue.location}</p>
        <p className="text-sm font-medium text-gray-700 mt-2">{venue.priceRange}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-lg">&#9733;</span>
          <span className="text-sm font-semibold ml-1">{venue.rating}</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">{venue.type}</p>
        <p className="text-gray-500 text-sm">{venue.guestCapacity}</p>
        <button className="mt-4 w-full py-2 bg-red text-white font-semibold rounded-lg">
          View Details
        </button>
      </div>
    </div>
  );
};

export default VenueCard;