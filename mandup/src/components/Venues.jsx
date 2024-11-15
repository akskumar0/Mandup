import React from 'react';
import FilterSidebar from './FilterSidebar';
import VenueCard from './VenueCard';
import venue1 from '../assets/venue1.png'
import venue2 from '../assets/venue2.png'
import venue3 from '../assets/venue3.jpg'

const venues = [
  {
    id: 1,
    name: "The Gracious Banquet",
    location: "Narela Industrial Area, New Delhi",
    priceRange: "₹400 - ₹600 per plate",
    rating: 4.8,
    imageUrl: venue1,
    type: "Indoor",
    guestCapacity: "100-500 guests"
  },
  {
    id: 2,
    name: "Four Points by Sheraton",
    location: "Aerocity, New Delhi",
    priceRange: "₹700 - ₹1000 per plate",
    rating: 4.9,
    imageUrl: venue2,
    type: "Indoor",
    guestCapacity: "100-300 guests"
  },
  {
    id: 3,
    name: "Olive cuisine restuarant",
    location: "Roorkee, Uttarakhand",
    priceRange: "₹700 - ₹1000 per plate",
    rating: 4.9,
    imageUrl: venue3,
    type: "Indoor",
    guestCapacity: "100-300 guests"
  },

];

const Venues = () => {
  return (
    <div className="flex">
      <FilterSidebar />
      <div className="flex-grow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Venues;