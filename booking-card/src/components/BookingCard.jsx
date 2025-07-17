import React from "react";
import { toast } from "react-toastify";

const BookingCard = ({ service }) => {
  const handleBooking = () => {
    toast.success(`Booked successfully!`);
  };

  return (
    <div className="bg-white shadow-lg hover:shadow-indigo-300 transition-shadow duration-300 rounded-2xl overflow-hidden w-full max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-48 object-cover rounded-t-2xl transform transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-indigo-600 mb-1">{service.name}</h3>
        <p className="text-gray-600 mb-2">{service.description}</p>
        <p className="text-indigo-800 font-semibold mb-4">Price: ₹{service.price}</p>
        <button
          onClick={handleBooking}
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 w-full"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
